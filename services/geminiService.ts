
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
       TASK: Create the "ULTIMATE MASTER REVISION CHEAT SHEET" for the entire Class 12 syllabus.
       
       STRICT CONTENT REQUIREMENTS:
       1. COMPLETE FORMULA BANK: List every single formula (Mathematical, Physical, or Chemical) found in the Class 12 syllabus for ${subject}. Organize them chapter-wise. No exceptions.
       2. HIGH-YIELD TOPIC LIST: For every chapter in the syllabus, identify the top 3-5 topics that have appeared most frequently in the last 15 years of board exams.
       3. CORE LAWS & THEOREMS: Provide a consolidated list of all major Laws, Theorems, and Principles for the entire subject.
       4. MNEMONICS & SHORTCUTS: Include memory tricks or calculation shortcuts where applicable for revision.
       5. 2026 BOARD PREDICTIONS: Based on 15 years of analysis, mention which topics are "Must-Prepare" for the 2026 exam.
       
       STRICT FORMATTING:
       - Use "TOPIC: [Chapter/Unit Name]" for major headers.
       - Use bullet points and structured lists for high-speed reading.
       - NO decorative symbols (stars, emojis, etc.).
       - Use "DIAGRAM_GUIDE: [Description]" to describe how to draw critical diagrams for the whole subject.
       - The response should be extremely comprehensive, dense, and cover 4-5 pages worth of content in one go.`
    : `Act as a Class 12 Subject Expert. Subject: ${subject}, Chapter: ${chapter}.
  
       TASK: Create full, comprehensive book-standard notes.
  
       STRICT RULES:
       1. NO TRUNCATION: Provide full, high-quality definitions and detailed explanations.
       2. NO DECORATIVE SYMBOLS: No stars, diamonds, or emojis.
       3. STRUCTURE: Use "TOPIC: [Name]" for headers.
       4. LANGUAGE: Simple Hinglish for explanation, but Formal Academic English for core definitions.
       5. DIAGRAM DESCRIPTION: Use "DIAGRAM_GUIDE: [Description]" to explain essential visuals in text.`;

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
  
  TASK: Provide 10-12 "Sure-Shot" Board Questions (High Frequency).
  
  STRICT INSTRUCTIONS:
  1. FULL QUESTION TEXT: Write the COMPLETE question exactly as it appears in the official exam paper. 
  2. BOOK-STYLE SOLUTION: Provide full procedural solutions.
  3. ${isRevision ? 'Select questions from EVERY major unit of the syllabus to provide a complete revision overview.' : ''}
  4. TEXT-BASED DIAGRAM GUIDE: Use "DIAGRAM_GUIDE: [Detailed Explanation]".
  5. NO DECORATIVE SYMBOLS.
  
  FORMAT: 
  - "QUESTION: [Full Question Text]"
  - "MARKS: [Weightage]"
  - "YEAR: [Repeated Years]"
  - "SOLUTION: [Step-by-step Answer]"
  - "DIAGRAM_GUIDE: [Detailed visual explanation]";`;

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
      systemInstruction: 'You are AceBot. Provide full, professional board exam solutions. No decorative symbols. Proper step-by-step calculation is mandatory. Instead of images, provide detailed text descriptions of diagrams.',
    }
  });
  const response = await chat.sendMessage({ message });
  return response.text;
};
