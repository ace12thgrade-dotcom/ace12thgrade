
import { GoogleGenAI, Modality } from "@google/genai";

const getAI = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY_MISSING: Make sure you have added the API_KEY in your deployment environment variables.");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateDetailedNotes = async (subject: string, chapter: string) => {
  const ai = getAI();
  const prompt = `Act as a Top Board Specialist. Subject: ${subject}, Chapter: ${chapter}.
  
  TASK: Generate easy-to-read notes for Class 12.
  
  STRICT RULES:
  1. NO SPECIAL SYMBOLS: Do not use stars, emojis, or decorative symbols.
  2. MATH ONLY: Use symbols like ±, √, ∫ only when writing actual mathematical formulas.
  3. LIGHT BOX STRUCTURE: Use "TOPIC: [Name]" for every sub-section.
  4. LANGUAGE: Use simple Hinglish (Mix of English and Hindi). Explain like a friend.
  5. DIAGRAMS: Use [DIAGRAM: description] only for vital concepts.
  6. FORMATTING: Use **bold** for key terms. No other styling.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
  });
  return response.text;
};

export const generatePremiumPYQs = async (subject: string, chapter: string) => {
  const ai = getAI();
  const prompt = `Act as an Examiner who has analyzed 15 years of CBSE/Board papers.
  Subject: ${subject}, Chapter: ${chapter}.
  
  TASK: Provide the 5-7 most frequently asked questions.
  
  STRICT RULES:
  1. NO SPECIAL SYMBOLS: Absolutely no emojis, stars, or fancy bullets. Use plain numbers or dots if needed.
  2. EASY SOLUTIONS: Write the answer in the simplest way possible so a student can learn it in 2 minutes.
  3. YEAR INFO: Mention the years clearly.
  4. STRUCTURE: Start each question block with "TOPIC: [Concept Name]".
  5. INSIGHT: Explain why this specific question is important for Boards.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
  });
  return response.text;
};

export const generateVisualSolution = async (description: string, subject: string) => {
  const ai = getAI();
  const stylePrompt = `Clean educational line diagram for Class 12 ${subject}: ${description}. White background, professional black lines, clear labels. No text except labels. Minimalist style.`;
  
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: { parts: [{ text: stylePrompt }] },
    config: { imageConfig: { aspectRatio: "16:9" } }
  });

  const part = response.candidates[0].content.parts.find(p => p.inlineData);
  return part?.inlineData?.data || null;
};

export const generateChapterAudio = async (notes: string, subject: string) => {
  const ai = getAI();
  const prompt = `Samjhao ye topic Hinglish mein ekdum asaan bhasha mein: ${notes.substring(0, 800)}`;
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
      systemInstruction: 'You are AceBot. Help students with Class 12 doubts in simple Hinglish. No excessive symbols. Direct, marking-scheme oriented answers only.',
    }
  });
  const response = await chat.sendMessage({ message });
  return response.text;
};
