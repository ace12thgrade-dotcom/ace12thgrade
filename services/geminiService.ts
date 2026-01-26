
import { GoogleGenAI, Modality } from "@google/genai";

const getAI = () => {
  const key = process.env.API_KEY;
  if (!key) {
    console.warn("API_KEY is missing. AI features will not work.");
  }
  return new GoogleGenAI({ apiKey: key || '' });
};

export const generateDetailedNotes = async (subject: string, chapter: string) => {
  const ai = getAI();
  
  const isMaths = subject.toLowerCase().includes('math');
  const pedegogyInstruction = isMaths 
    ? `FOR MATHS: 
       - DO NOT write long theoretical definitions.
       - Use this structure for EVERY topic: 
         1. TOPIC: Name
         2. INTRO: One line simple logic.
         3. FORMULA: The actual equation (Write it clearly in words or simple symbols).
         4. EXAMPLE: A clear solved question for that specific formula.
       - Include ALL topics from the NCERT book.` 
    : `FOR ${subject}: 
       - Cover ALL topics from the NCERT book in detail.
       - Use simple language.
       - Use TOPIC:, INTRO:, DEFINITION:, FORMULA:, and EXAMPLE: markers.`;

  const prompt = `Act as a Class 12 CBSE Expert Educator. 
  Subject: ${subject}
  Chapter: ${chapter}
  
  TASK: Generate complete syllabus study notes for 2026 Board Exams.
  
  STRICT RULES:
  1. NO SPECIAL SYMBOLS: Never use dollar signs ($), backslashes (\\), or LaTeX code in text. Write formulas in plain, easy-to-read text.
  2. SIMPLE LANGUAGE: Explain as if you are talking to a student.
  3. ${pedegogyInstruction}
  4. NO SKIPPING: Every topic and formula mentioned in the syllabus must be included.

  The goal is high-quality, easy-to-digest premium content.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error generating premium notes. Please check your internet connection or API key.";
  }
};

export const generateChapterAudio = async (notes: string, subject: string) => {
  const ai = getAI();
  const prompt = `Act as a friendly Indian teacher. Explain the following Class 12 ${subject} notes in "Hinglish" (a natural mix of Hindi and English).
  
  TEACHING STYLE:
  - Use Hindi for conceptual explanations (e.g., "Toh bacchon, iska matlab hai...").
  - Use English for technical terms and definitions.
  - Make it sound like a real classroom lecture where students find it easy to follow.
  - Explain the logic behind formulas.
  - Do not read out labels like "Topic" or "Intro", just transition naturally.
  
  NOTES CONTENT:
  ${notes.substring(0, 3000)}`;

  try {
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
  } catch (error) {
    console.error("TTS Error:", error);
    return null;
  }
};

export const generateFormulaImage = async (formulaText: string) => {
  const ai = getAI();
  const prompt = `A clean, professional mathematical formula written in a high-quality textbook font. 
  The formula is: ${formulaText}. 
  Style: Black text on a pure white background. Sharp, clear, and perfectly centered. 
  It should look exactly like a printed CBSE textbook page for a Class 12 student. 
  No extra text, no colors, just the sharp black formula.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: prompt }] },
      config: {
        imageConfig: { aspectRatio: "4:3" }
      }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return part.inlineData.data;
      }
    }
    return null;
  } catch (error) {
    console.error("Image Gen Error:", error);
    return null;
  }
};

export const generatePremiumPYQs = async (subject: string, chapter: string) => {
  const ai = getAI();
  const prompt = `Act as an Exam Strategy Expert analyzing Class 12 CBSE questions from the last 10 years.
  Subject: ${subject}
  Chapter: ${chapter}
  
  TASK: Generate a highly curated list of "Most Important PYQs".
  
  PRIORITY LOGIC:
  1. HIGHEST PRIORITY: Questions from 2020 to 2025 (Latest 5 years).
  2. SECONDARY PRIORITY: Repeated patterns from 2015 to 2019.
  
  STRICT RULES:
  - Only include questions that have a high probability of appearing in 2026.
  - "Jitna zaroorat hai utna hi" - Don't give 40-50 questions. Give roughly 20-25 "Master" questions.
  - Include the Year next to each question (e.g., [CBSE 2023]).
  - Provide a point-wise, easy-to-learn Solution for each.
  - NO SPECIAL SYMBOLS ($) or LaTeX.
  
  STRUCTURE:
  - Section A: Very Short (1 Mark) - Top 5
  - Section B: Short Answer (2/3 Marks) - Top 10
  - Section C: Long Answer (5 Marks) - Top 5
  - Section D: Case Based/Value Based - Top 2-3`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    return "Failed to load premium questions. Please try again.";
  }
};

export const chatWithTutor = async (history: {role: string, text: string}[], message: string) => {
  const ai = getAI();
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: 'You are AceBot, an expert Class 12 AI Tutor. You explain concepts in a mix of Hindi and English (Hinglish) when asked. You are helpful and encouraging.',
    }
  });

  const response = await chat.sendMessage({ message });
  return response.text;
};
