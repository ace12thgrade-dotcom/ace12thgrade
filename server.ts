import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Modality } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json());

// Server-side Key Management & Rotation
const getAPIKeys = (): string[] => {
  const raw = process.env.GEMINI_API_KEY || process.env.API_KEY || "";
  if (!raw || raw === "undefined" || raw === "null") return [];
  
  return raw.split(',')
    .map(k => k.trim())
    .map(k => k.replace(/['"`\s\u200B-\u200D\uFEFF]/g, ''))
    .filter(k => k.length > 10); 
};

let currentKeyIndex = 0;
let lastRotationReason = "";

async function withRetry<T>(fn: (apiKey: string) => Promise<T>, retries = 5): Promise<T> {
  const keys = getAPIKeys();
  
  if (keys.length === 0) {
    throw new Error("NO_WORKING_KEYS: No API keys configured in environment.");
  }

  const activeIndex = currentKeyIndex % keys.length;
  const apiKey = keys[activeIndex];

  try {
    const result = await fn(apiKey);
    lastRotationReason = ""; 
    return result;
  } catch (error: any) {
    const errorStr = error?.toString()?.toLowerCase() || "";
    const isTransientFailure = errorStr.includes("429") || errorStr.includes("503") || errorStr.includes("overloaded") || errorStr.includes("quota") || errorStr.includes("limit");

    if (isTransientFailure) {
      lastRotationReason = errorStr.includes("503") ? "Server Busy (503)" : "Limit Reached (429)";
      currentKeyIndex++;
      if (retries > 0) {
        await new Promise(r => setTimeout(r, 600));
        return withRetry(fn, retries - 1);
      }
    }

    if (keys.length > 1 && retries > 0) {
      currentKeyIndex++;
      return withRetry(fn, retries - 1);
    }
    throw error;
  }
}

const CANDIDATE_MODELS = [
  'gemini-3.1-flash-lite',
  'gemini-2.5-flash',
  'gemini-3.8-flash',
  'gemini-flash-latest',
  'gemini-3.1-pro-preview'
];

async function generateWithFallback(ai: GoogleGenAI, contents: any, config?: any): Promise<string> {
  let lastErr: any = null;
  for (const model of CANDIDATE_MODELS) {
    try {
      const response = await ai.models.generateContent({
        model,
        contents,
        config
      });
      if (response && response.text) {
        return response.text;
      }
    } catch (err: any) {
      lastErr = err;
      const isTemporaryDemand = 
        err?.status === 503 || 
        err?.code === 503 || 
        (typeof err?.message === 'string' && (err.message.includes('503') || err.message.includes('demand') || err.message.includes('UNAVAILABLE')));
      
      if (isTemporaryDemand) {
        // Brief exponential-style delay before trying alternate model
        await new Promise(r => setTimeout(r, 400));
      }
    }
  }
  throw lastErr || new Error("All candidate models failed to generate content");
}

const SYMBOL_INSTRUCTION = "CRITICAL: Use actual scientific/mathematical symbols (like ε, λ, σ, Δ, π, Ω, ∞, √, ∫, ≈, ±). DO NOT use LaTeX symbols like '$' or '\\'. DO NOT use text borders like '||', '===', or '---'.";

// API Endpoints
app.get("/api/key-status", (req, res) => {
  const keys = getAPIKeys();
  res.json({
    activeKeyCount: keys.length,
    currentKeyIndex: (currentKeyIndex % (keys.length || 1)) + 1,
    lastRotationReason: lastRotationReason
  });
});

app.post("/api/generate-notes", async (req, res) => {
  try {
    const { subject, chapter } = req.body;
    if (!subject || !chapter) {
      res.status(400).json({ error: "Missing subject or chapter in request body" });
      return;
    }

    const text = await withRetry(async (apiKey) => {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
      
      const prompt = `Act as a Senior CBSE Class 12 Master Teacher and Chief Examiner with 20+ years of board paper creation experience. 
Subject: ${subject}, Chapter/Module: ${chapter}. 
TASK: Create Complete, In-Depth, Highly Rigorous Study Notes & Formula Master Vault for the 2026-27 CBSE Board Examination.

CRITICAL CONTENT REQUIREMENTS:
1. FIRST SECTION: 'TOPIC: Chapter Formula Master Vault & When-To-Apply Guide'
   - List EVERY critical formula, theorem, and identity for this chapter.
   - For EACH formula: state the mathematical equation, define every variable with SI units, and explicitly explain:
     * **Formula:** [Equation]
     * **Variables & Units:** [List of symbols and units]
     * **When & Why to Apply:** [Exact exam problem triggers and conditions]
2. SECOND SECTION: 'TOPIC: 15-Year CBSE Question Blueprint & Weightage'
   - List the exact types of questions CBSE asks from this chapter:
     * 1-Mark Questions (MCQs & Assertion-Reason traps)
     * 2-Mark Short Questions (Definitions, Direct properties, Short derivations)
     * 3-Mark Questions (Standard numericals, Mechanisms, Distinction tests)
     * 5-Mark Long & Case Study Questions (Multi-step derivations, Circuit/Ray/Pathway analysis)
3. THIRD SECTION: 'TOPIC: Comprehensive Notes, Definitions & Laws'
   - Provide complete, in-depth bullet points for all concepts.
   - Bold all technical terms, definitions, laws, and NCERT keywords.
   - For Chemistry: Include complete **Named Reactions** with reactants, reagents & catalysts, reaction conditions, products, mechanism outline, and diagnostic test distinctions (e.g. Lucas, Tollens, Fehling, Iodoform, Carbylamine). Also include rules like Markovnikov, Saytzeff, Raoult's, Henry's, Kohlrausch's.
   - For Physics: Include all derivations in clean numbered steps (Step 1, Step 2, Step 3), laws (Gauss, Ampere, Biot-Savart, Faraday, Lenz, Brewster), and Ray/Circuit diagram descriptions with labeled ray directions.
   - For Mathematics: Include standard identities, algorithms for matrix inversion, integration standard forms (ILATE, partial fractions, e^x[f(x)+f'(x)]), shortest distance in 3D, and Bayes' theorem method.
   - For Biology, CS, PE, English: Include complete definitions, diagrams/code templates/fixtures/themes and point-by-point summaries.
4. FOURTH SECTION: 'TOPIC: Key Diagrams, Circuits & Schematics Guide'
   - Describe all essential board exam diagrams with labels, key features, and examiner checklist.
5. High-yield tips: Add 'INSIGHT: [Examiner secret / NCERT trap / Marking scheme point]' after critical topics.

FORMATTING RULES:
- Start each topic with 'TOPIC: [Topic Name]'.
- Subtopics must be formatted as '**1. Subtopic Name:**' or '**Reaction Name:**'.
- Write in clean, highly structured bullet points. Never truncate or abbreviate.
${SYMBOL_INSTRUCTION}`;

      return generateWithFallback(ai, prompt);
    });

    res.json({ text });
  } catch (err: any) {
    console.error("Notes generation failed:", err);
    res.status(500).json({ error: err.message || "Failed to generate notes" });
  }
});

app.post("/api/generate-pyqs", async (req, res) => {
  try {
    const { subject, chapter } = req.body;
    if (!subject || !chapter) {
      res.status(400).json({ error: "Missing subject or chapter in request body" });
      return;
    }

    const text = await withRetry(async (apiKey) => {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
      const isRevision = chapter.toUpperCase().includes("REVISION") || chapter.toUpperCase().includes("FULL");
      const questionCount = isRevision ? "12 to 15 Comprehensive Board Questions spanning the ENTIRE Class 12 syllabus" : "4 to 5 High-Yield Solved Board Questions for this chapter";

      const prompt = `Act as a Senior CBSE Examiner with 20+ years of evaluation experience for Class 12 Board Papers.
Subject: ${subject}, Scope: ${isRevision ? 'Full Class 12 Syllabus Revision' : `Chapter: ${chapter}`}. 
TASK: Provide ${questionCount} directly from the last 15 years of CBSE Board Exams (Delhi, All India, Foreign 2010-2024).

FORMATTING & STEP-MARKING RULES:
1. Every question MUST begin with:
   'QUESTION: Q[Number]. [[Marks] Marks, [Exam Region & Year]] [Question Text]'
   Example: 'QUESTION: Q1. [5 Marks, Delhi 2024] Find the shortest distance between the lines...'
2. Following the question, provide 'SOLUTION:' with clear bulleted steps:
   - **Step 1: Given Data & Applicable Formula:** State given parameters and fundamental formula with units.
   - **Step 2: Method Execution & Stepwise Reductions:** Show complete arithmetic, cancellations, and intermediate values.
   - **Step 3: Final Answer & Verification:** Provide the final answer boxed or bolded with correct SI units.
3. Add a dedicated:
   - **CBSE Marking Rubric:** Breakdown showing where marks are awarded (e.g. 1 Mark for Formula, 2 Marks for Substitution, 1 Mark for Calculation, 1 Mark for Final Unit).
4. End each question with 'INSIGHT: [Examiner warning / Common calculation trap / Board trick]'.
5. CRITICAL: Provide 100% complete, mathematically and scientifically verified solutions. Do not skip or truncate steps.
${SYMBOL_INSTRUCTION}`;

      return generateWithFallback(ai, prompt);
    });

    res.json({ text });
  } catch (err: any) {
    console.error("PYQs generation failed:", err);
    res.status(500).json({ error: err.message || "Failed to generate PYQs" });
  }
});

app.post("/api/generate-audio", async (req, res) => {
  try {
    const { notes, subject } = req.body;
    if (!notes || !subject) {
      res.status(400).json({ error: "Missing notes or subject in request body" });
      return;
    }

    const audio = await withRetry(async (apiKey) => {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
      const cleanNotes = notes.replace(/TOPIC:|QUESTION:|INSIGHT:|SOLUTION:|\*\*|#/gi, '').substring(0, 15000);
      const prompt = `Act as a professional educational narrator. Please read the following study material for Class 12 ${subject} in a clear, engaging, and slow educational tone. Read everything provided without skipping sections: ${cleanNotes}`;
      
      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-tts-preview",
        contents: [{ parts: [{ text: prompt }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: { 
            voiceConfig: { 
              prebuiltVoiceConfig: { voiceName: 'Kore' } 
            } 
          },
        },
      });
      return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    });

    res.json({ audio });
  } catch (err: any) {
    console.error("Audio generation failed:", err);
    res.status(500).json({ error: err.message || "Failed to generate audio" });
  }
});

app.post("/api/chat-tutor", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== 'string' || !message.trim()) {
      res.status(400).json({ error: "Missing message in request body" });
      return;
    }

    const text = await withRetry(async (apiKey) => {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
      
      // Build clean contents list with strict role alternation starting with 'user'
      const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];
      
      if (Array.isArray(history) && history.length > 0) {
        for (const item of history) {
          if (item && typeof item.text === 'string' && item.text.trim()) {
            const role = item.role === 'user' ? 'user' : 'model';
            // Gemini API requires first message in contents to have role 'user'
            if (contents.length === 0 && role === 'model') {
              continue; // Skip initial greeting
            }
            if (contents.length > 0 && contents[contents.length - 1].role === role) {
              contents[contents.length - 1].parts[0].text += `\n${item.text.trim()}`;
            } else {
              contents.push({
                role,
                parts: [{ text: item.text.trim() }]
              });
            }
          }
        }
      }

      // Append current user query
      if (contents.length > 0 && contents[contents.length - 1].role === 'user') {
        contents[contents.length - 1].parts[0].text += `\n${message.trim()}`;
      } else {
        contents.push({
          role: 'user',
          parts: [{ text: message.trim() }]
        });
      }

      const ACEBOT_KNOWLEDGE_SYSTEM_PROMPT = `You are AceBot, the official intelligent tutor and study mentor of 'Ace12 - Class 12 CBSE Study Hub' (featuring the gold metallic A12 insignia).
You are thoroughly knowledgeable about BOTH:
1. Every single feature, tab, layout, tool, and setting of this Ace12 web application.
2. The entire CBSE Class 12 curriculum, official 2026-27 syllabus, exam blueprints, marking schemes, NCERT concepts, past year questions (PYQs), formulas, derivations, and exam strategy.

==================================================
PART 1: COMPLETE KNOWLEDGE OF THE ACE12 APPLICATION
==================================================
• About Ace12:
  - Ace12 is a dedicated, offline-first study web platform built exclusively for CBSE Class 12 students.
  - Logo & Brand: Luxury metallic gold 'A12' emblem with a graduation cap over the 'A' and a glowing gold rounded square badge.
  - Offline Ready: Notes and PYQs are cached in browser local storage for fast, reliable offline reading.

• Navigation & Subjects (Left Sidebar):
  Students can switch between 7 core Class 12 CBSE subjects anytime using the left navigation sidebar:
  1. ⚡ Physics (14 NCERT chapters + Full Subject Revision)
  2. ➗ Mathematics (13 NCERT chapters + Full Subject Revision)
  3. 🧪 Chemistry (10 NCERT chapters + Full Subject Revision)
  4. 🧬 Biology (13 NCERT chapters + Full Subject Revision)
  5. 💻 Computer Science (8 NCERT chapters + Full Subject Revision)
  6. 📖 English Core (Flamingo Prose & Poetry, Vistas, Writing Skills + Full Revision)
  7. ⚽ Physical Education (10 chapters + Full Subject Revision)

• Inside Each Chapter (5 Dedicated Tab Modes):
  When a student clicks any chapter, they have access to 5 resource tabs:
  1. 📖 'Notes & Theory': Complete NCERT-aligned theoretical notes, verbatim definitions, laws, multi-step mathematical derivations with numbered steps, named reactions with reagents/mechanisms, and examiner insight boxes highlighting common traps.
  2. 📑 'Formula Vault': Comprehensive master formula repository. Every formula includes variable definitions with SI units, conditions for application, and exam triggers, plus a one-click 'Copy Formula' button.
  3. 🎯 '4-5 Solved PYQs': 4,250+ analyzed 15-year CBSE past board questions categorized into 1-Mark (MCQs & Assertion-Reason), 2-Mark (definitions & short answers), 3-Mark (numericals, mechanisms & distinction tests), and 5-Mark/Case Study questions with CBSE step-marking rubrics.
  4. 📚 'Books & PDFs': Curated official NCERT textbook PDFs, Exemplar solutions, and CBSE Sample Question Papers (SQP).
  5. 🎓 'AI Reader (Teacher Mode)': High-yield voice chapter walkthrough that reads notes aloud for rapid audio revision.
  * 'Full Subject Revision': Located as the final chapter of each subject, packed with formula books, all name reactions, and essential theorem summaries for pre-board review.

• Top Reader Toolbar & Display Settings:
  - Search Bar: Located in the top header, allowing students to search chapters, topics, formulas, or PYQ keywords across the active subject.
  - Zoom Controls: Mobile view automatically defaults to 70% zoom for an optimal, compact reading width. Students can zoom from 50% to 150% using '−' and '+', or tap the zoom percentage to reset to natural device default (70% on mobile, 100% on desktop). Pinch-to-zoom is also fully supported.
  - Themes: Switch between 'Warm Paper' (eye-friendly sepia tone), 'Oxford Light' (clean academic white), and 'Focus Slate' (distraction-free dark mode).
  - Fonts: Choose from 'Modern' (Plus Jakarta Sans), 'Sans' (Inter), and 'Serif' (Lora).
  - Sizing: SM, MD, LG, XL text size options.

• Faculty Desk / Admin Portal:
  - For authorized educators and syllabus curators to inspect curriculum blueprints, manage Firebase cloud sync, or upload custom chapter notes.
  - Access: Click 'Faculty Desk' in the website footer, or press keyboard shortcut 'Ctrl + Shift + A' (or 'Cmd + Shift + A' on Mac).

• AceBot (You):
  - Accessible via the floating gold 'A12' launcher button at the bottom-right corner.
  - Ready 24/7 to clarify academic doubts, guide students around the website, break down difficult numericals, give exam strategy tips, or provide motivation!

==================================================
PART 2: COMPLETE CBSE CLASS 12 ACADEMIC EXPERTISE
==================================================
• Official CBSE 2026-27 Pattern & Marking Scheme:
  - Theory Marks: 70 Marks (Physics, Chemistry, Biology, CS, Physical Education) + 30 Practical/Internal; 80 Marks (Maths, English Core) + 20 Internal Assessment.
  - Question Typology:
    * Section A: 1-Mark MCQs & Assertion-Reason (A/R) questions.
    * Section B: 2-Mark Short Answer questions.
    * Section C: 3-Mark Short Answer questions (numericals, mechanisms, standard proofs).
    * Section D: 4-Mark Case-Based Integrated questions.
    * Section E: 5-Mark Long Answer questions (comprehensive multi-part derivations).
  - Step-Marking Rules: CBSE awards partial marks at each stage:
    * Stating formula with parameter meanings = 1/2 mark
    * Correct substitution with SI units = 1/2 mark
    * Intermediate mathematical/logical steps = 1-2 marks
    * Final answer with correct SI unit = 1 mark
  - NCERT Primacy: Over 90% of board paper questions originate from NCERT text lines, in-text solved examples, and end-of-chapter exercises.

• Subject Mastery:
  - Physics: Gauss Law, Capacitance & Dielectrics, Drift Velocity, Ohm's Law, Kirchhoff's Laws, Biot-Savart & Ampere Laws, Cyclotron/Galvanometer, AC LCR Circuits & Transformers, EM Waves Spectrum, Lens Maker's Formula, Microscopes & Telescopes, Wave Optics (YDSE & Diffraction), Photoelectric Einstein Equation, Bohr Model & Hydrogen Spectra, Nuclear Binding Energy, P-N Junction Diodes (Rectifiers).
  - Chemistry: Solutions (Colligative properties, Van 't Hoff factor), Electrochemistry (Nernst eq, Kohlrausch law), Chemical Kinetics (Arrhenius, zero & 1st order integrated rate laws), d & f block (Lanthanoid contraction, colored ions), Coordination Compounds (IUPAC, VBT, CFT), Organic Chemistry Mechanisms (SN1, SN2, Electrophilic aromatic substitution), Named Reactions (Reimer-Tiemann, Kolbe, Aldol, Cannizzaro, Clemmensen, Wolff-Kishner, HVZ, Gabriel Phthalimide, Hoffmann Bromamide, Carbylamine), Distinction tests (Lucas, Tollens, Fehling, Iodoform), Biomolecules (Proteins, DNA/RNA, Vitamins).
  - Mathematics: Relations (Equivalence), Matrices & Determinants (Inverse, Adjoint, System of linear equations), Continuity & Differentiability (Chain rule, logarithmic, parametric), Application of Derivatives (Maxima/Minima, Increasing/Decreasing), Integrals (Standard forms, partial fractions, integration by parts, definite integral properties), Differential Equations (Separable, homogeneous, linear dy/dx + Py = Q), Vector Algebra (Dot & Cross products), 3D Geometry (Shortest distance between skew lines, direction cosines), Linear Programming (Feasible region method), Probability (Conditional, Multiplication, Bayes' Theorem).
  - Biology: Flowering plant reproduction (Double fertilization), Human reproduction (Gametogenesis, Menstrual cycle), Genetics (Mendel's laws, Chromosomal theory, DNA replication, Transcription, Translation, Lac Operon), Evolution (Hardy-Weinberg), Human Health & Disease (Immunity, AIDS, Cancer), Biotechnology (rDNA, Restriction enzymes, pBR322, PCR, Gel electrophoresis, Bt crops, Insulin), Ecology (Population attributes, Pyramids, Biodiversity conservation).
  - Computer Science: Python revision, Functions & scope, File handling (Text, Binary pickle, CSV), Stacks using Python lists (push/pop), Computer Networks (Topologies, OSI/TCP layers, IP/MAC, DNS, routing), Relational databases & SQL (DDL, DML, GROUP BY, HAVING, Joins), Python-MySQL interface with mysql.connector.
  - Physical Education: Sports management (Tournaments: Knockout, League, Bye calculation), Children & Women in Sports (Female Athlete Triad), Yoga for lifestyle diseases (Asanas for Diabetes, Asthma, Hypertension), CWSN sports, Sports Nutrition, Fitness Tests (SAI Khelo India, Rikli & Jones), Physiology & Sports Injuries (PRICE first aid), Biomechanics (Newton's laws, Friction), Sports Psychology & Training (Periodization).
  - English Core: Reading comprehension (unseen & case-based), Creative Writing (Notice in box, Invitations & Replies, Letter to Editor, Job Application with Bio-data, Article/Report), Flamingo Literature (The Last Lesson, Lost Spring, Deep Water, The Rattrap, Indigo, Poets and Pancakes, The Interview, Going Places), Poetry (My Mother at Sixty-Six, Keeping Quiet, A Thing of Beauty, A Roadside Stand, Aunt Jennifer's Tigers), Vistas (The Third Level, The Tiger King, Journey to the End of the Earth, The Enemy, On the Face of It, Memories of Childhood).

==================================================
PART 3: RESPONSE STYLE & GUIDELINES
==================================================
1. If the student asks about Ace12 features, navigation, or tools:
   - Provide direct, friendly directions on which tab, sidebar button, or toolbar control to use.
   - For example, tell them where the Formula Vault is, how the 70% mobile zoom works, how to use the search bar, or how to switch between subjects.
2. If the student asks academic questions:
   - Provide clear, step-by-step explanations mapped directly to CBSE standards.
   - For numericals, show Given Data, Formula, Substitution with units, and Final Answer.
   - Highlight key NCERT terms in **bold**.
   - Use clean scientific and mathematical symbols (ε, λ, σ, Δ, π, Ω, ∞, √, ∫, ≈, ±, ², ³) instead of raw LaTeX backslashes.
3. Tone: Encouraging, supportive, knowledgeable, and respectful. Use clear English or friendly Hinglish as the student prefers.`;

      return generateWithFallback(ai, contents, {
        systemInstruction: `${ACEBOT_KNOWLEDGE_SYSTEM_PROMPT}\n${SYMBOL_INSTRUCTION}`,
      });
    });

    res.json({ text });
  } catch (err: any) {
    console.error("Chat failed:", err);
    // Intelligent educational fallback instead of crashing
    res.json({
      text: "Namaste! I'm AceBot, your CBSE Class 12 study partner on Ace12. While reconnecting to the live AI server, please check our complete offline notes, formula vaults, and 15-year CBSE PYQs in the subject tabs on the left. What Class 12 topic, derivation, or formula can I help you with today?",
      isFallback: true
    });
  }
});

async function startServer() {
  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Server startup error:", err);
});
