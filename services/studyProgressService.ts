// services/studyProgressService.ts
// Offline-first progress, Mistake Book, and Weak Topics tracker using localStorage.
// Zero external API calls, 100% free, reactive across all components.

export interface SavedMistakeItem {
  id: string;
  subjectId: string;
  subjectName: string;
  chapterId?: string;
  chapterTitle: string;
  questionText: string;
  answerText: string;
  marks?: string;
  year?: string;
  questionType?: string;
  markingScheme?: string;
  savedAt: number;
  source: 'pyq' | 'test_yourself';
}

export interface WeakTopicItem {
  id: string; // unique key e.g. `${chapterId}_${topicName}`
  subjectId: string;
  subjectName: string;
  chapterId: string;
  chapterTitle: string;
  topicName: string;
  wrongCount: number;
  lastFailedAt: number;
  lastQuestionText?: string;
  lastExplanation?: string;
}

export interface RecentChapterItem {
  subjectId: string;
  subjectName: string;
  chapterId: string;
  chapterTitle: string;
  visitedAt: number;
}

export interface ChapterProgressData {
  read: boolean;
  lastReadAt?: number;
  tested: boolean;
  score?: {
    correct: number;
    total: number;
  };
}

export const ACE12_PROGRESS_EVENT = 'ace12_progress_updated';

const STORAGE_KEYS = {
  RECENT_CHAPTERS: 'ace12_recent_chapters_v1',
  LAST_ACTIVE: 'ace12_last_active_v1',
  MISTAKE_BOOK: 'ace12_mistake_book_v1',
  WEAK_TOPICS: 'ace12_weak_topics_v1',
  CHAPTER_PROGRESS: 'ace12_chapter_progress_v1',
  TODAY_GOALS: 'ace12_today_goals_v1'
};

const notifyUpdate = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(ACE12_PROGRESS_EVENT));
  }
};

// Safe localStorage helper
const getFromStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaultValue;
    return JSON.parse(raw) as T;
  } catch {
    return defaultValue;
  }
};

const saveToStorage = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    notifyUpdate();
  } catch (e) {
    console.error('Failed to save to localStorage', e);
  }
};

// --- RECENTLY OPENED & CONTINUE LEARNING ---

export const recordChapterVisit = (
  subjectId: string,
  chapterId: string,
  chapterTitle: string,
  subjectName: string
): void => {
  const now = Date.now();
  const lastActive: RecentChapterItem = {
    subjectId,
    subjectName,
    chapterId,
    chapterTitle,
    visitedAt: now
  };
  saveToStorage(STORAGE_KEYS.LAST_ACTIVE, lastActive);

  const existing = getFromStorage<RecentChapterItem[]>(STORAGE_KEYS.RECENT_CHAPTERS, []);
  const filtered = existing.filter(
    item => !(item.subjectId === subjectId && item.chapterId === chapterId)
  );
  const updated = [lastActive, ...filtered].slice(0, 10);
  saveToStorage(STORAGE_KEYS.RECENT_CHAPTERS, updated);

  // Also mark chapter as read
  const progressMap = getFromStorage<Record<string, ChapterProgressData>>(STORAGE_KEYS.CHAPTER_PROGRESS, {});
  const key = `${subjectId}::${chapterId}`;
  progressMap[key] = {
    ...(progressMap[key] || { read: true, tested: false }),
    read: true,
    lastReadAt: now
  };
  saveToStorage(STORAGE_KEYS.CHAPTER_PROGRESS, progressMap);
};

export const getLastActiveChapter = (): RecentChapterItem | null => {
  return getFromStorage<RecentChapterItem | null>(STORAGE_KEYS.LAST_ACTIVE, null);
};

export const getRecentlyOpened = (): RecentChapterItem[] => {
  return getFromStorage<RecentChapterItem[]>(STORAGE_KEYS.RECENT_CHAPTERS, []);
};

// --- CHAPTER PROGRESS ---

export const getChapterProgress = (subjectId: string, chapterId: string): ChapterProgressData => {
  const map = getFromStorage<Record<string, ChapterProgressData>>(STORAGE_KEYS.CHAPTER_PROGRESS, {});
  return map[`${subjectId}::${chapterId}`] || { read: false, tested: false };
};

export const recordChapterQuizScore = (
  subjectId: string,
  chapterId: string,
  correct: number,
  total: number
): void => {
  const map = getFromStorage<Record<string, ChapterProgressData>>(STORAGE_KEYS.CHAPTER_PROGRESS, {});
  const key = `${subjectId}::${chapterId}`;
  map[key] = {
    ...(map[key] || { read: true }),
    tested: true,
    score: { correct, total }
  };
  saveToStorage(STORAGE_KEYS.CHAPTER_PROGRESS, map);
};

// --- MISTAKE BOOK ---

export const getMistakeBook = (): SavedMistakeItem[] => {
  return getFromStorage<SavedMistakeItem[]>(STORAGE_KEYS.MISTAKE_BOOK, []);
};

export const isQuestionInMistakeBook = (questionId: string): boolean => {
  const book = getMistakeBook();
  return book.some(item => item.id === questionId);
};

export const saveToMistakeBook = (item: SavedMistakeItem): boolean => {
  const book = getMistakeBook();
  const exists = book.some(q => q.id === item.id);
  if (exists) {
    // If already exists, toggle removal
    removeFromMistakeBook(item.id);
    return false;
  }
  const updated = [item, ...book];
  saveToStorage(STORAGE_KEYS.MISTAKE_BOOK, updated);
  return true;
};

export const removeFromMistakeBook = (questionId: string): void => {
  const book = getMistakeBook();
  const updated = book.filter(item => item.id !== questionId);
  saveToStorage(STORAGE_KEYS.MISTAKE_BOOK, updated);
};

// --- WEAK TOPICS ---

export const getWeakTopics = (): WeakTopicItem[] => {
  return getFromStorage<WeakTopicItem[]>(STORAGE_KEYS.WEAK_TOPICS, []);
};

export const recordWeakTopicFailure = (
  subjectId: string,
  subjectName: string,
  chapterId: string,
  chapterTitle: string,
  topicName: string,
  questionText?: string,
  explanation?: string
): void => {
  const weakList = getWeakTopics();
  const id = `${subjectId}_${chapterId}_${topicName.replace(/\s+/g, '_').toLowerCase()}`;
  const existingIdx = weakList.findIndex(w => w.id === id);

  if (existingIdx !== -1) {
    const updated = [...weakList];
    updated[existingIdx] = {
      ...updated[existingIdx],
      wrongCount: updated[existingIdx].wrongCount + 1,
      lastFailedAt: Date.now(),
      lastQuestionText: questionText || updated[existingIdx].lastQuestionText,
      lastExplanation: explanation || updated[existingIdx].lastExplanation
    };
    saveToStorage(STORAGE_KEYS.WEAK_TOPICS, updated);
  } else {
    const newItem: WeakTopicItem = {
      id,
      subjectId,
      subjectName,
      chapterId,
      chapterTitle,
      topicName,
      wrongCount: 1,
      lastFailedAt: Date.now(),
      lastQuestionText: questionText,
      lastExplanation: explanation
    };
    saveToStorage(STORAGE_KEYS.WEAK_TOPICS, [newItem, ...weakList]);
  }
};

export const resolveWeakTopic = (id: string): void => {
  const weakList = getWeakTopics();
  const updated = weakList.filter(item => item.id !== id);
  saveToStorage(STORAGE_KEYS.WEAK_TOPICS, updated);
};

// --- TODAY'S FOCUS GOALS ---

export interface TodayGoalItem {
  id: string;
  title: string;
  subjectId: string;
  chapterId: string;
  chapterTitle: string;
  priority: 'High' | 'Medium';
  completed: boolean;
  dateStr: string; // YYYY-MM-DD
}

const getTodayDateStr = (): string => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

export const getTodayGoals = (): TodayGoalItem[] => {
  const today = getTodayDateStr();
  const stored = getFromStorage<{ dateStr: string; goals: TodayGoalItem[] } | null>(STORAGE_KEYS.TODAY_GOALS, null);

  if (stored && stored.dateStr === today && stored.goals.length > 0) {
    return stored.goals;
  }

  // Generate today's focus goals based on high-yield CBSE topics
  const defaultGoals: TodayGoalItem[] = [
    {
      id: 'g1',
      title: 'Gauss Law & Field Applications',
      subjectId: 'physics',
      chapterId: 'p1',
      chapterTitle: 'Electric Charges and Fields',
      priority: 'High',
      completed: false,
      dateStr: today
    },
    {
      id: 'g2',
      title: 'Nernst Equation & Cell EMF Numericals',
      subjectId: 'chemistry',
      chapterId: 'c2',
      chapterTitle: 'Electrochemistry',
      priority: 'High',
      completed: false,
      dateStr: today
    },
    {
      id: 'g3',
      title: 'Definite Integrals by Substitution',
      subjectId: 'maths',
      chapterId: 'm7',
      chapterTitle: 'Integrals',
      priority: 'High',
      completed: false,
      dateStr: today
    },
    {
      id: 'g4',
      title: 'Review 5 Solved Board PYQs in Mistake Book',
      subjectId: 'physics',
      chapterId: 'p_rev',
      chapterTitle: 'FULL SUBJECT REVISION',
      priority: 'Medium',
      completed: false,
      dateStr: today
    }
  ];

  saveToStorage(STORAGE_KEYS.TODAY_GOALS, { dateStr: today, goals: defaultGoals });
  return defaultGoals;
};

export const toggleTodayGoal = (goalId: string): void => {
  const today = getTodayDateStr();
  const current = getTodayGoals();
  const updated = current.map(g => (g.id === goalId ? { ...g, completed: !g.completed } : g));
  saveToStorage(STORAGE_KEYS.TODAY_GOALS, { dateStr: today, goals: updated });
};
