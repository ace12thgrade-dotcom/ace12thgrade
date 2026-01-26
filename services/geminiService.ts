
import { GoogleGenAI, Modality } from "@google/genai";

const getAI = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing.");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateDetailedNotes = async (subject: string, chapter: string) => {
  const ai = getAI();
  const prompt = `Act as a Class 12 CBSE Expert. Subject: ${subject}, Chapter: ${chapter}. 
  Generate ultra-detailed notes for 2026 Boards. 
  Structure: TOPIC, DEFINITION, FORMULA, EXAMPLE. 
  Rules: NO special characters like $ or \\. Use plain text for formulas. Focus on what actually comes in exams.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
  });
  return response.text;
};

export const generatePremiumPYQs = async (subject: string, chapter: string) => {
  const ai = getAI();
  const prompt = `Act as a CBSE Paper Setter with 15 years experience. 
  Analyze 4,250+ previous papers for Subject: ${subject}, Chapter: ${chapter}.
  TASK: List the top 10-15 MOST IMPORTANT questions that repeat every 2-3 years.
  FOR EACH: Give the Question, the [CBSE YEAR], and a high-scoring Point-wise Solution.
  STRICT: NO $ symbols. Format as:
  QUESTION: [Text]
  YEAR: [Text]
  SOLUTION: [Point-wise Text]`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
  });
  return response.text;
};

export const generateVisualSolution = async (questionText: string, subject: string) => {
  const ai = getAI();
  let prompt = `Scientific/Educational diagram for: ${questionText}.`;
  
  if (subject.toLowerCase().includes('math')) {
    prompt = `Clear mathematical graph, coordinate geometry, or LPP shaded region graph for: ${questionText}. White background, clean black lines.`;
  } else if (subject.toLowerCase().includes('physed')) {
    prompt = `Clear tournament fixture bracket or sports committee chart for: ${questionText}. Clean diagrammatic layout.`;
  } else if (subject.toLowerCase().includes('bio')) {
    prompt = `Detailed biological anatomical diagram or molecular structure for: ${questionText}. Simple, labeled, clean lines.`;
  } else if (subject.toLowerCase().includes('physics')) {
    prompt = `Circuit diagram, ray optics diagram, or physics apparatus setup for: ${questionText}. Professional and clean.`;
  }

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: { parts: [{ text: prompt }] },
    config: { imageConfig: { aspectRatio: "16:9" } }
  });

  const part = response.candidates[0].content.parts.find(p => p.inlineData);
  return part?.inlineData?.data || null;
};

export const generateChapterAudio = async (notes: string, subject: string) => {
  const ai = getAI();
  const prompt = `Explain this ${subject} topic like a friendly Indian teacher in Hinglish (mix of Hindi/English). Be encouraging! Topic: ${notes.substring(0, 1500)}`;
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
      systemInstruction: 'You are AceBot, an expert Class 12 AI Tutor. Use Hinglish. You help students prepare for boards using 4,250+ PYQ analysis.',
    }
  });
  const response = await chat.sendMessage({ message });
  return response.text;
};
