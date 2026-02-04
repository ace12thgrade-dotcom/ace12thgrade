
import { GoogleGenAI, Modality } from "@google/genai";

// Only for 400 (Invalid) or 403 (Permission denied)
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

/**
 * The logic:
 * 1. Try Current Key.
 * 2. If it works, STAY on it (Sticky).
 * 3. If 400/403, blacklist it FOREVER and move to next.
 * 4. If 429/503, just move to next (it will recover by the time we loop back).
 */
async function withRetry<T>(fn: (apiKey: string) => Promise<T>, retries = 20): Promise<T> {
  const keys = getAPIKeys();
  
  if (keys.length === 0) {
    throw new Error("NO_WORKING_KEYS: All keys failed or none provided. Please check Netlify settings.");
  }

  // Ensure index stays in bounds
  const activeIndex = currentKeyIndex % keys.length;
  const apiKey = keys[activeIndex];

  try {
    const result = await fn(apiKey);
    // Success - keep using this key index for the next call
    lastRotationReason = ""; 
    return result;
  } catch (error: any) {
    const errorStr = error.toString().toLowerCase();
    
    // Check error types
    const isHardFailure = errorStr.includes("400") || errorStr.includes("403") || errorStr.includes("invalid") || errorStr.includes("not found");
    const isTransientFailure = errorStr.includes("429") || errorStr.includes("503") || errorStr.includes("overloaded") || errorStr.includes("quota") || errorStr.includes("limit");

    if (isHardFailure) {
      console.error(`Key #${activeIndex + 1} is PERMANENTLY BAD. Removing...`);
      permanentBlacklist.add(apiKey);
      currentKeyIndex++; // Force move to next
      if (retries > 0) return withRetry(fn, retries - 1);
    }

    if (isTransientFailure && retries > 0) {
      console.warn(`Key #${activeIndex + 1} is TEMPORARILY BUSY (429/503). Rotating to next...`);
      lastRotationReason = errorStr.includes("503") ? "Server Busy (503)" : "Limit Reached (429)";
      currentKeyIndex++; // Switch key for the next attempt
      
      // Wait a tiny bit for 503
      if (errorStr.includes("503")) await new Promise(r => setTimeout(r, 800));
      
      return withRetry(fn, retries - 1);
    }

    // If it's some other weird error, try one more time with a different key
    if (retries > 0) {
      currentKeyIndex++;
      return withRetry(fn, retries - 1);
    }

    throw error;
  }
}

export const generateDetailedNotes = async (subject: string, chapter: string) => {
  return withRetry(async (apiKey) => {
    const ai = new GoogleGenAI({ apiKey });
    const isRevision = chapter.toUpperCase().includes("FULL SUBJECT REVISION");
    const prompt = isRevision 
      ? `Act as a Class 12 Subject Expert. Subject: ${subject}. TASK: Create ULTIMATE REVISION NOTES based on 15 years and 4250+ PYQ data. Use Hinglish. No LaTeX.`
      : `Act as a Class 12 Subject Expert. Subject: ${subject}, Chapter: ${chapter}. TASK: Create textbook-standard notes using 4250+ PYQ data points (last 15 years). Use Hinglish. No LaTeX.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  });
};

export const generatePremiumPYQs = async (subject: string, chapter: string) => {
  return withRetry(async (apiKey) => {
    const ai = new GoogleGenAI({ apiKey });
    const isRevision = chapter.toUpperCase().includes("FULL SUBJECT REVISION");
    const prompt = `Act as Senior CBSE Examiner. Analyze 4250 questions from last 15 years. Subject: ${subject}, ${isRevision ? 'Entire Syllabus' : `Chapter: ${chapter}`}. Provide 12 "Highly Probable" Questions for 2026. No LaTeX. Format: QUESTION, MARKS, YEAR, SOLUTION. Use Hinglish.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  });
};

export const generateChapterAudio = async (notes: string, subject: string) => {
  return withRetry(async (apiKey) => {
    const ai = new GoogleGenAI({ apiKey });
    const prompt = `Summary of ${subject} (15yr Analysis): ${notes.substring(0, 800)}`;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } } },
      },
    });
    return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  });
};

export const chatWithTutor = async (history: any[], message: string) => {
  return withRetry(async (apiKey) => {
    const ai = new GoogleGenAI({ apiKey });
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: 'You are AceBot. Access to 4250+ PYQs (last 15 years). Help for 2026 Boards. Hinglish. No LaTeX.',
      }
    });
    const response = await chat.sendMessage({ message });
    return response.text;
  });
};

export const getActiveKeyCount = () => getAPIKeys().length;
export const getCurrentKeyIndex = () => (currentKeyIndex % (getAPIKeys().length || 1)) + 1;
export const getLastRotationReason = () => lastRotationReason;
