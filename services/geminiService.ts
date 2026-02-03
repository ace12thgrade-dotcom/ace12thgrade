
import { GoogleGenAI, Modality } from "@google/genai";

const getAI = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY_MISSING: Go to Netlify -> Site Settings -> Environment Variables and add 'API_KEY'.");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateDetailedNotes = async (subject: string, chapter: string) => {
  const ai = getAI();
  const isRevision = chapter.toUpperCase().includes("FULL SUBJECT REVISION");
  
  const prompt = isRevision 
    ? `Act as a Class 12 Subject Expert. Subject: ${subject}. 
       TASK: Create the "ULTIMATE MASTER REVISION CHEAT SHEET".
       
       STRICT SYMBOL RULES:
       - DO NOT use LaTeX delimiters like $ or \( or \).
       - DO NOT use backslashes (\) or curly braces ({}) in formulas.
       - ONLY use plain Unicode symbols (e.g., ∫, ∑, Δ, θ, λ, μ, π, ε₀).
       - Use proper Unicode subscripts (₀₁₂₃₄₅₆₇₈₉) and superscripts (⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻).
       - Formulas must look like clear, readable textbook text.
       
       CONTENT:
       1. COMPLETE FORMULA BANK for the entire syllabus.
       2. HIGH-YIELD TOPIC LIST.
       3. CORE LAWS & THEOREMS.
       
       FORMATTING:
       - Use "TOPIC: [Name]" for headers.
       - Use "DIAGRAM_GUIDE: [Description]" for visuals.`
    : `Act as a Class 12 Subject Expert. Subject: ${subject}, Chapter: ${chapter}.
  
       TASK: Create full textbook-standard notes.
  
       STRICT SYMBOL RULES:
       - NO LaTeX ($ symbols are strictly forbidden).
       - NO backslashes (\) in equations.
       - ONLY use Unicode (∫, ∑, ∂, ∞, θ, π, subscripts, superscripts).
       - Make it look like a clean digital textbook.
       
       FORMATTING:
       - Use "TOPIC: [Name]" for headers.
       - Use simple Hinglish for explanation, Formal English for definitions.
       - Use "DIAGRAM_GUIDE: [Description]" for visuals.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
  });
  return response.text;
};

export const generatePremiumPYQs = async (subject: string, chapter: string) => {
  const ai = getAI();
  const isRevision = chapter.toUpperCase().includes("FULL SUBJECT REVISION");
  
  const prompt = `Act as a Senior CBSE Board Examiner. Analyze 15 years of papers for Subject: ${subject}, ${isRevision ? 'the Entire Syllabus' : `Chapter: ${chapter}`}.
  
  TASK: Provide 10-12 "Sure-Shot" Board Questions.
  
  STRICT SYMBOL RULES:
  - NO LaTeX ($ signs are BANNED).
  - NO backslashes (\) or math code blocks.
  - ONLY use clear Unicode math symbols (∫, ∑, Δ, θ, subscripts, superscripts).
  
  FORMAT: 
  - "QUESTION: [Full Question Text]"
  - "MARKS: [Weightage]"
  - "YEAR: [Repeated Years]"
  - "SOLUTION: [Step-by-step Answer using Unicode symbols]"
  - "DIAGRAM_GUIDE: [Visual explanation]";`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
  });
  return response.text;
};

export const generateChapterAudio = async (notes: string, subject: string) => {
  const ai = getAI();
  const prompt = `Student, focus! Yeh ${subject} ka master summary hai. Main aapko main formulas aur concepts Hinglish mein samjhata hoon: ${notes.substring(0, 800)}`;
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-preview-tts",
    contents: [{ parts: [{ text: prompt }] }],
    config: {
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName: 'Kore' },
        },
      },
    },
  });
  return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
};

export const chatWithTutor = async (history: any[], message: string) => {
  const ai = getAI();
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: 'You are AceBot. Provide board solutions. STRICT: No LaTeX ($ or \). Use only pure Unicode symbols for math. Keep layout clean for mobile.',
    }
  });
  const response = await chat.sendMessage({ message });
  return response.text;
};
