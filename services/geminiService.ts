
import { GoogleGenAI, Modality } from "@google/genai";

// Always create a new instance or use the direct process.env.API_KEY reference as per rules.
const getAI = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing. Please check your environment variables.");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateDetailedNotes = async (subject: string, chapter: string) => {
  const ai = getAI();
  
  const isMaths = subject.toLowerCase().includes('math');
  const pedegogyInstruction = isMaths 
    ? `FOR MATHS: Use this structure: 1. TOPIC 2. INTRO 3. FORMULA 4. EXAMPLE. Use plain text formulas.` 
    : `FOR ${subject}: Cover ALL topics in detail using TOPIC:, INTRO:, DEFINITION:, FORMULA:, and EXAMPLE: markers.`;

  const prompt = `Act as a Class 12 CBSE Expert Educator. 
  Subject: ${subject}
  Chapter: ${chapter}
  TASK: Generate complete syllabus study notes for 2026 Board Exams.
  STRICT RULES:
  1. NO SPECIAL SYMBOLS ($ or \\). Write formulas in plain text.
  2. ${pedegogyInstruction}
  3. Include every NCERT topic.`;

  const response = await ai.models.generateContent({
    model: 'gemini-flash-latest', // Using the most stable flash model for high-volume text
    contents: prompt,
  });
  
  if (!response.text) throw new Error("Empty response from AI");
  return response.text;
};

export const generatePremiumPYQs = async (subject: string, chapter: string) => {
  const ai = getAI();
  const prompt = `Act as an Exam Strategy Expert analyzing Class 12 CBSE questions from 4,250+ last 15 years papers.
  Subject: ${subject}
  Chapter: ${chapter}
  PRIORITY: 2020-2025 (Last 5 years) first, then older.
  TASK: Generate ~20-25 high-impact questions with point-wise solutions.
  STRICT: NO $ SYMBOLS. Use [CBSE YEAR] tags.`;

  const response = await ai.models.generateContent({
    model: 'gemini-flash-latest',
    contents: prompt,
  });
  
  if (!response.text) throw new Error("Empty response from AI");
  return response.text;
};

export const generateChapterAudio = async (notes: string, subject: string) => {
  const ai = getAI();
  const prompt = `Explain this ${subject} chapter in "Hinglish" (mix of Hindi/English) like a friendly Indian teacher: ${notes.substring(0, 2500)}`;

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

export const generateFormulaImage = async (formulaText: string) => {
  const ai = getAI();
  const prompt = `Sharp black mathematical formula on white background: ${formulaText}`;
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: { parts: [{ text: prompt }] },
    config: { imageConfig: { aspectRatio: "4:3" } }
  });
  const part = response.candidates[0].content.parts.find(p => p.inlineData);
  return part?.inlineData?.data || null;
};

export const chatWithTutor = async (history: {role: string, text: string}[], message: string) => {
  const ai = getAI();
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: 'You are AceBot, an expert Class 12 AI Tutor. Use Hinglish.',
    }
  });
  const response = await chat.sendMessage({ message });
  return response.text;
};
