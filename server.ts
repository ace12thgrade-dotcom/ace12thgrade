import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Modality } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json());

// Server-side Key Management & Rotation
const permanentBlacklist = new Set<string>();

const getAPIKeys = (): string[] => {
  const raw = process.env.GEMINI_API_KEY || process.env.API_KEY || "";
  if (!raw || raw === "undefined" || raw === "null") return [];
  
  return raw.split(',')
    .map(k => k.trim())
    .map(k => k.replace(/['"`\s\u200B-\u200D\uFEFF]/g, ''))
    .filter(k => k.length > 10 && !permanentBlacklist.has(k)); 
};

let currentKeyIndex = 0;
let lastRotationReason = "";

async function withRetry<T>(fn: (apiKey: string) => Promise<T>, retries = 20): Promise<T> {
  const keys = getAPIKeys();
  
  if (keys.length === 0) {
    throw new Error("NO_WORKING_KEYS: All keys failed or none provided. Please check the workspace Settings > Secrets.");
  }

  const activeIndex = currentKeyIndex % keys.length;
  const apiKey = keys[activeIndex];

  try {
    const result = await fn(apiKey);
    lastRotationReason = ""; 
    return result;
  } catch (error: any) {
    const errorStr = error.toString().toLowerCase();
    
    const isHardFailure = errorStr.includes("400") || errorStr.includes("403") || errorStr.includes("invalid") || errorStr.includes("not found");
    const isTransientFailure = errorStr.includes("429") || errorStr.includes("503") || errorStr.includes("overloaded") || errorStr.includes("quota") || errorStr.includes("limit");

    if (isHardFailure) {
      console.error(`Key #${activeIndex + 1} is PERMANENTLY BAD. Removing...`);
      permanentBlacklist.add(apiKey);
      currentKeyIndex++;
      if (retries > 0) return withRetry(fn, retries - 1);
    }

    if (isTransientFailure && retries > 0) {
      console.warn(`Key #${activeIndex + 1} is TEMPORARILY BUSY (429/503). Rotating...`);
      lastRotationReason = errorStr.includes("503") ? "Server Busy (503)" : "Limit Reached (429)";
      currentKeyIndex++;
      if (errorStr.includes("503")) await new Promise(r => setTimeout(r, 800));
      return withRetry(fn, retries - 1);
    }

    if (retries > 0) {
      currentKeyIndex++;
      return withRetry(fn, retries - 1);
    }
    throw error;
  }
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
      
      const isRevision = chapter.toUpperCase().includes("REVISION") || chapter.toUpperCase().includes("FULL");
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

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: prompt,
      });
      return response.text;
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

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: prompt,
      });
      return response.text;
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
      // Character limit to 15,000 to ensure full narration
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
    const { message } = req.body;
    if (!message) {
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
      const chat = ai.chats.create({
        model: 'gemini-3.5-flash',
        config: {
          systemInstruction: `You are AceBot. Access to 4250+ PYQs (last 15 years). Help for 2026 Boards. Use Easy Hinglish. ${SYMBOL_INSTRUCTION}`,
        }
      });
      const response = await chat.sendMessage({ message });
      return response.text;
    });

    res.json({ text });
  } catch (err: any) {
    console.error("Chat failed:", err);
    res.status(500).json({ error: err.message || "Failed to chat" });
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
