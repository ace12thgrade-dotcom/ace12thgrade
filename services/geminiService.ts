
import { GoogleGenAI, Modality } from "@google/genai";

// Global set to track keys that return 400 (Invalid) or 403 (Forbidden)
const blacklistedKeys = new Set<string>();

/**
 * Gets and sanitizes API keys from environment variables.
 */
const getAPIKeys = (): string[] => {
  // Try both common naming conventions
  const raw = process.env.GEMINI_API_KEY || process.env.API_KEY || "";
  
  if (!raw || raw === "undefined" || raw === "null") return [];
  
  return raw.split(',')
    .map(k => k.trim())
    // Remove potential quotes, backticks or invisible whitespace
    .map(k => k.replace(/['"`\s\u200B-\u200D\uFEFF]/g, ''))
    .filter(k => k.length > 10 && !blacklistedKeys.has(k)); 
};

// Start at a random index to distribute load across keys
let currentKeyIndex = Math.floor(Math.random() * 20);

/**
 * Robust retry wrapper with key rotation and blacklisting.
 */
async function withRetry<T>(fn: (apiKey: string) => Promise<T>, retries = 15): Promise<T> {
  const keys = getAPIKeys();
  
  if (keys.length === 0) {
    if (blacklistedKeys.size > 0) {
      throw new Error("ALL_KEYS_FAILED: All provided API keys are invalid or restricted. Please generate new ones in Google AI Studio.");
    }
    throw new Error("API_KEY_MISSING");
  }

  // Pick key based on index
  const activeIndex = currentKeyIndex % keys.length;
  const apiKey = keys[activeIndex];
  
  // Always increment index for the next call
  currentKeyIndex++;

  try {
    return await fn(apiKey);
  } catch (error: any) {
    const errorStr = error.toString().toLowerCase();
    
    // 400/403: The key itself is the problem
    const isInvalid = errorStr.includes("400") || errorStr.includes("invalid") || errorStr.includes("key not valid") || errorStr.includes("403");
    
    // 429: Rate limit hit
    const isRateLimit = errorStr.includes("429") || errorStr.includes("quota") || errorStr.includes("exhausted");

    if (isInvalid) {
      console.error(`Key #${activeIndex + 1} rejected. Blacklisting and rotating...`);
      blacklistedKeys.add(apiKey);
      if (retries > 0) return withRetry(fn, retries - 1);
    }

    if (isRateLimit && retries > 0) {
      if (keys.length > 1) {
        console.warn(`Key #${activeIndex + 1} rate limited. Rotating...`);
        return withRetry(fn, retries - 1);
      } else {
        // Only one key? Wait 2 seconds and try again
        await new Promise(r => setTimeout(r, 2000));
        return withRetry(fn, retries - 1);
      }
    }

    throw error;
  }
}

export const generateDetailedNotes = async (subject: string, chapter: string) => {
  return withRetry(async (apiKey) => {
    const ai = new GoogleGenAI({ apiKey });
    const isRevision = chapter.toUpperCase().includes("FULL SUBJECT REVISION");
    
    const prompt = isRevision 
      ? `Act as a Class 12 Subject Expert. Subject: ${subject}. 
         TASK: Create the "ULTIMATE MASTER REVISION CHEAT SHEET" based on 15 years and 4250+ PYQ analysis.
         STRICT: NO LaTeX ($). Use plain Unicode symbols only.
         CONTENT: Major formulas, laws, and 2026 Board hot-topics in Hinglish.`
      : `Act as a Class 12 Subject Expert. Subject: ${subject}, Chapter: ${chapter}.
         TASK: Create full textbook-standard notes in Hinglish.
         CONTEXT: Use insights from 4250+ PYQs analyzed over the last 15 years.
         STRICT: NO LaTeX. Focus on high-weightage topics for 2026 Boards.`;

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
    
    const prompt = `Act as a Senior CBSE Examiner (15+ years experience). 
    Data Pool: 4250+ Previous Year Questions.
    Subject: ${subject}, ${isRevision ? 'Entire Syllabus' : `Chapter: ${chapter}`}.
    Provide 12 "Highly Probable" Questions for 2026 Boards. 
    STRICT: No LaTeX symbols.
    FORMAT: "QUESTION: [Text]", "MARKS: [X]", "YEAR: [Occurrences/Years in last 15yrs]", "SOLUTION: [Step-by-step answer in Hinglish]"`;

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
    const prompt = `Sunno dhyan se! Yeh ${subject} ka quick summary hai based on last 15 years analysis: ${notes.substring(0, 800)}`;
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
  });
};

export const chatWithTutor = async (history: any[], message: string) => {
  return withRetry(async (apiKey) => {
    const ai = new GoogleGenAI({ apiKey });
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: 'You are AceBot. You have analyzed 4250+ PYQs of the last 15 years. Help students for 2026 Boards. Speak in Hinglish. No LaTeX.',
      }
    });
    const response = await chat.sendMessage({ message });
    return response.text;
  });
};

export const getActiveKeyCount = () => getAPIKeys().length;
export const getCurrentKeyIndex = () => (currentKeyIndex % (getAPIKeys().length || 1)) + 1;
