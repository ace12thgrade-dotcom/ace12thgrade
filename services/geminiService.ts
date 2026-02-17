
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

// Offline Caching Helpers
const CACHE_PREFIX = "ace12_v1_";
const getCachedData = (key: string): string | null => {
  try {
    return localStorage.getItem(CACHE_PREFIX + key);
  } catch (e) {
    return null;
  }
};

const setCachedData = (key: string, value: string) => {
  try {
    localStorage.setItem(CACHE_PREFIX + key, value);
  } catch (e) {
    // If quota exceeded, clear old caches
    if (e.name === 'QuotaExceededError') {
      localStorage.clear();
      localStorage.setItem(CACHE_PREFIX + key, value);
    }
  }
};

async function withRetry<T>(fn: (apiKey: string) => Promise<T>, retries = 20): Promise<T> {
  const keys = getAPIKeys();
  
  if (keys.length === 0) {
    throw new Error("NO_WORKING_KEYS: All keys failed or none provided. Please check Netlify settings.");
  }

  const activeIndex = currentKeyIndex % keys.length;
  const apiKey = keys[activeIndex];

  try {
    const result = await fn(apiKey);
    lastRotationReason = ""; 
    return result;
  } catch (error: any) {
    const errorStr = error.toString().toLowerCase();
    
    const isHardFailure = errorStr.includes("400") || errorStr.includes("403") || errorStr.includes("invalid") || errorStr.includes("not found");
    const isTransientFailure = errorStr.includes("429") || errorStr.includes("503") || errorStr.includes("overloaded") || errorStr.includes("quota") || errorStr.includes("limit");

    if (isHardFailure) {
      console.error(`Key #${activeIndex + 1} is PERMANENTLY BAD. Removing...`);
      permanentBlacklist.add(apiKey);
      currentKeyIndex++;
      if (retries > 0) return withRetry(fn, retries - 1);
    }

    if (isTransientFailure && retries > 0) {
      console.warn(`Key #${activeIndex + 1} is TEMPORARILY BUSY (429/503). Rotating...`);
      lastRotationReason = errorStr.includes("503") ? "Server Busy (503)" : "Limit Reached (429)";
      currentKeyIndex++;
      if (errorStr.includes("503")) await new Promise(r => setTimeout(r, 800));
      return withRetry(fn, retries - 1);
    }

    if (retries > 0) {
      currentKeyIndex++;
      return withRetry(fn, retries - 1);
    }
    throw error;
  }
}

const SYMBOL_INSTRUCTION = "CRITICAL: Use actual scientific/mathematical symbols (like ε, λ, σ, Δ, π, Ω, ∞, √, ∫, ≈, ±). DO NOT use LaTeX symbols like '$' or '\\'. DO NOT use text borders like '||', '===', or '---'.";

export const generateDetailedNotes = async (subject: string, chapter: string) => {
  const cacheKey = `notes_${subject}_${chapter}`.replace(/\s+/g, '_');
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  const result = await withRetry(async (apiKey) => {
    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `Act as a Class 12 Subject Expert. 
Subject: ${subject}, Chapter: ${chapter}. 
TASK: Create Detailed Premium Notes based on 15 years analysis for 2026 Boards.
STYLE: Use Easy Hinglish (e.g. "Ye concept bohot important hai isse dhyan se padhna..."). 
STRUCTURE: 
1. Mandatory: Start every new concept/heading with 'TOPIC: [Name]'. This creates a new box in UI.
2. Explanations should be descriptive and clear (not too short).
3. Use scientific symbols directly.
4. Bold important terms using **word**.
${SYMBOL_INSTRUCTION}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  });

  if (result) setCachedData(cacheKey, result);
  return result;
};

export const generatePremiumPYQs = async (subject: string, chapter: string) => {
  const cacheKey = `pyqs_${subject}_${chapter}`.replace(/\s+/g, '_');
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  const result = await withRetry(async (apiKey) => {
    const ai = new GoogleGenAI({ apiKey });
    const isRevision = chapter.toUpperCase().includes("FULL SUBJECT REVISION");
    const prompt = `Act as Senior CBSE Examiner. Analyze 4250 questions from last 15 years. 
Subject: ${subject}, ${isRevision ? 'Entire Syllabus' : `Chapter: ${chapter}`}. 
Provide 12 "Highly Probable" Questions for 2026. 

IMPORTANT RULES FOR PYQs:
1. Every new question MUST start with 'QUESTION: [Text]'.
2. The QUESTION and its SOLUTION must be in FULL FORMAL ENGLISH (CBSE Board Exam standard).
3. After the solution, add an 'INSIGHT:' section with a small 1-2 sentence tip in EASY HINGLISH.
4. Include MARKS: and YEAR: for each.
${SYMBOL_INSTRUCTION}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  });

  if (result) setCachedData(cacheKey, result);
  return result;
};

export const generateChapterAudio = async (notes: string, subject: string) => {
  return withRetry(async (apiKey) => {
    const ai = new GoogleGenAI({ apiKey });
    // Increased character limit to 15,000 to ensure full narration of detailed notes
    const cleanNotes = notes.replace(/TOPIC:|QUESTION:|INSIGHT:|SOLUTION:|\*\*|#/gi, '').substring(0, 15000);
    const prompt = `Act as a professional educational narrator. Please read the following study material for Class 12 ${subject} in a clear, engaging, and slow educational tone. Read everything provided without skipping sections: ${cleanNotes}`;
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: { 
          voiceConfig: { 
            prebuiltVoiceConfig: { voiceName: 'Kore' } 
          } 
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
        systemInstruction: `You are AceBot. Access to 4250+ PYQs (last 15 years). Help for 2026 Boards. Use Easy Hinglish. ${SYMBOL_INSTRUCTION}`,
      }
    });
    const response = await chat.sendMessage({ message });
    return response.text;
  });
};

export const getActiveKeyCount = () => getAPIKeys().length;
export const getCurrentKeyIndex = () => (currentKeyIndex % (getAPIKeys().length || 1)) + 1;
export const getLastRotationReason = () => lastRotationReason;
