// Client-Side Gemini Service Proxy (delegates all AI calls to the secure Express backend)

let activeKeyCount = 1;
let currentKeyIndex = 1;
let lastRotationReason = "";

const updateKeyStatus = async () => {
  try {
    const res = await fetch("/api/key-status");
    if (res.ok) {
      const data = await res.json();
      activeKeyCount = data.activeKeyCount ?? 1;
      currentKeyIndex = data.currentKeyIndex ?? 1;
      lastRotationReason = data.lastRotationReason ?? "";
    }
  } catch (_e) {
    // Graceful silent fallback for offline / disconnected state
  }
};

// Initial status check
if (typeof window !== "undefined") {
  updateKeyStatus().catch(() => {});
}

export const generateDetailedNotes = async (subject: string, chapter: string, bypassCache = false): Promise<string> => {
  const cacheKey = `notes_${subject}_${chapter}`.replace(/\s+/g, '_');
  if (!bypassCache) {
    try {
      const cached = localStorage.getItem("ace12_v1_" + cacheKey);
      if (cached) return cached;
    } catch (e) {}
  }

  const res = await fetch("/api/generate-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ subject, chapter }),
  });
  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.error || "Failed to generate notes");
  }
  const data = await res.json();
  const text = data.text;
  
  try {
    localStorage.setItem("ace12_v1_" + cacheKey, text);
  } catch (e) {}

  updateKeyStatus().catch(() => {});
  return text;
};

export const generatePremiumPYQs = async (subject: string, chapter: string, bypassCache = false): Promise<string> => {
  const cacheKey = `pyqs_${subject}_${chapter}`.replace(/\s+/g, '_');
  if (!bypassCache) {
    try {
      const cached = localStorage.getItem("ace12_v1_" + cacheKey);
      if (cached) return cached;
    } catch (e) {}
  }

  const res = await fetch("/api/generate-pyqs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ subject, chapter }),
  });
  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.error || "Failed to generate PYQs");
  }
  const data = await res.json();
  const text = data.text;

  try {
    localStorage.setItem("ace12_v1_" + cacheKey, text);
  } catch (e) {}

  updateKeyStatus().catch(() => {});
  return text;
};

export const generateChapterAudio = async (notes: string, subject: string): Promise<string> => {
  const res = await fetch("/api/generate-audio", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ notes, subject }),
  });
  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.error || "Failed to generate audio");
  }
  const data = await res.json();
  updateKeyStatus().catch(() => {});
  return data.audio;
};

export const chatWithTutor = async (history: any[], message: string): Promise<string> => {
  const res = await fetch("/api/chat-tutor", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ history, message }),
  });
  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.error || "Failed to chat with tutor");
  }
  const data = await res.json();
  updateKeyStatus().catch(() => {});
  return data.text;
};

export const getActiveKeyCount = () => activeKeyCount;
export const getCurrentKeyIndex = () => currentKeyIndex;
export const getLastRotationReason = () => lastRotationReason;
