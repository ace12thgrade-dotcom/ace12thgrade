
import { GoogleGenAI, Modality } from "@google/genai";

const getAPIKey = () => {
  const key = process.env.API_KEY;
  if (!key || key === "undefined" || key === "") {
    return null;
  }
  return key;
};

export const generateDetailedNotes = async (subject: string, chapter: string) => {
  const apiKey = getAPIKey();
  if (!apiKey) throw new Error("API_KEY_MISSING");

  const ai = new GoogleGenAI({ apiKey });
  const isRevision = chapter.toUpperCase().includes("FULL SUBJECT REVISION");
  
  const prompt = isRevision 
    ? `Act as a Class 12 Subject Expert. Subject: ${subject}. 
       TASK: Create the "ULTIMATE MASTER REVISION CHEAT SHEET".
       
       STRICT SYMBOL RULES:
       - DO NOT use LaTeX delimiters like $ or \( or \).
       - ONLY use plain Unicode symbols (e.g., ∫, ∑, Δ, θ, λ, μ, π, ε₀).
       - Use proper Unicode subscripts (₀₁₂₃₄₅₆₇₈₉) and superscripts (⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻).
       
       CONTENT:
       1. COMPLETE FORMULA BANK for the entire syllabus.
       2. HIGH-YIELD TOPIC LIST.
       3. CORE LAWS & THEOREMS.
       
       FORMATTING:
       - Use "TOPIC: [Name]" for headers.`
    : `Act as a Class 12 Subject Expert. Subject: ${subject}, Chapter: ${chapter}.
       TASK: Create full textbook-standard notes. Use simple Hinglish for explanation.
       
       STRICT SYMBOL RULES:
       - NO LaTeX ($ symbols forbidden).
       - ONLY use Unicode (∫, ∑, ∂, ∞, θ, π).
       
       FORMATTING:
       - Use "TOPIC: [Name]" for headers.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
  });
  return response.text;
};

export const generatePremiumPYQs = async (subject: string, chapter: string) => {
  const apiKey = getAPIKey();
  if (!apiKey) throw new Error("API_KEY_MISSING");

  const ai = new GoogleGenAI({ apiKey });
  const isRevision = chapter.toUpperCase().includes("FULL SUBJECT REVISION");
  
  const prompt = `Act as a Senior CBSE Board Examiner. Analyze 15 years for Subject: ${subject}, ${isRevision ? 'Entire Syllabus' : `Chapter: ${chapter}`}.
  Provide 10-12 "Sure-Shot" Board Questions.
  
  STRICT SYMBOL RULES: NO LaTeX. ONLY Unicode.
  
  FORMAT: 
  - "QUESTION: [Text]"
  - "MARKS: [X]"
  - "YEAR: [Years]"
  - "SOLUTION: [Steps]"`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
  });
  return response.text;
};

export const generateChapterAudio = async (notes: string, subject: string) => {
  const apiKey = getAPIKey();
  if (!apiKey) return null;

  const ai = new GoogleGenAI({ apiKey });
  const prompt = `Student, focus! Yeh ${subject} ka summary hai: ${notes.substring(0, 800)}`;
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
  const apiKey = getAPIKey();
  if (!apiKey) throw new Error("API_KEY_MISSING");

  const ai = new GoogleGenAI({ apiKey });
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: 'You are AceBot. Provide board solutions. No LaTeX. Use Unicode symbols only.',
    }
  });
  const response = await chat.sendMessage({ message });
  return response.text;
};
