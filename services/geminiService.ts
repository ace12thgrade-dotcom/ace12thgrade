
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
  const prompt = `Act as a Class 12 Subject Expert. Subject: ${subject}, Chapter: ${chapter}.
  
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
  const prompt = `Act as a Senior CBSE Board Examiner. Analyze 15 years of papers for Subject: ${subject}, Chapter: ${chapter}.
  
  TASK: Provide 5-7 "Sure-Shot" Board Questions with full Book-Standard Solutions.
  
  STRICT INSTRUCTIONS FOR BOARD STANDARDS:
  1. FULL QUESTION TEXT: Write the COMPLETE question exactly as it appears in the official exam paper. DO NOT summarize. If the question has parts (a, b, c), include all of them.
  2. BOOK-STYLE SOLUTION:
     - Provide the solution in a "Board Answer Sheet" format.
     - For Phys Ed: Include full calculations (Total Teams N, No. of Byes, Upper/Lower Half distribution).
     - For Maths: Show every step (Constraints, Intersection points, Corner point table).
     - For Science: Use 'Given', 'Formula', 'Calculation', and 'Conclusion'.
  3. TEXT-BASED DIAGRAM GUIDE: Since we cannot show images, use "DIAGRAM_GUIDE: [Detailed Explanation]" to describe exactly how the student should draw the diagram (e.g., Fixture bracket pairings, Graph shading, or Ray paths).
  4. NO DECORATIVE SYMBOLS: Use only plain text. No stars, diamonds, or emojis.
  5. FORMAT: 
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
  const prompt = `Student, focus! Yeh ${subject} ka important topic hai. Main aapko bookish language ko asaan Hinglish mein samjhata hoon: ${notes.substring(0, 800)}`;
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
