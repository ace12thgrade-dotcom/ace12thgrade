import { Subject, Chapter, UploadedBook } from '../types.ts';
import { SUBJECTS as DEFAULT_SUBJECTS } from '../constants.tsx';

const DB_NAME = 'Ace12_Content_DB';
const DB_VERSION = 1;
const BOOKS_STORE = 'uploaded_books';

const STORAGE_KEYS = {
  ADMIN_PASS: 'ace12_admin_passcode',
  ADMIN_SESSION: 'ace12_admin_session_active',
  CUSTOM_SUBJECTS: 'ace12_custom_subjects_v1',
  DELETED_CHAPTERS: 'ace12_deleted_chapters_v1',
  DELETED_SUBJECTS: 'ace12_deleted_subjects_v1',
  CUSTOM_NOTES: 'ace12_custom_notes_map_v1',
  CUSTOM_PYQS: 'ace12_custom_pyqs_map_v1',
  CUSTOM_CHAPTERS: 'ace12_custom_chapters_v1',
};

// Default fallback passcode is 'ace12admin'
const DEFAULT_PASSCODE = 'ace12admin';
export const OWNER_EMAIL = 'ace12thgrade@gmail.com';

// Open IndexedDB
const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB is not supported'));
      return;
    }
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(BOOKS_STORE)) {
        db.createObjectStore(BOOKS_STORE, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

/* ==================== ADMIN AUTH ==================== */

export const isAdminAuthenticated = (): boolean => {
  try {
    return localStorage.getItem(STORAGE_KEYS.ADMIN_SESSION) === 'true';
  } catch {
    return false;
  }
};

export const verifyAdminPasscode = (inputCode: string): boolean => {
  try {
    const savedPass = localStorage.getItem(STORAGE_KEYS.ADMIN_PASS) || DEFAULT_PASSCODE;
    if (inputCode.trim() === savedPass.trim()) {
      localStorage.setItem(STORAGE_KEYS.ADMIN_SESSION, 'true');
      dispatchContentUpdate();
      return true;
    }
    return false;
  } catch {
    return false;
  }
};

export const changeAdminPasscode = (currentPass: string, newPass: string): { success: boolean; message: string } => {
  try {
    const savedPass = localStorage.getItem(STORAGE_KEYS.ADMIN_PASS) || DEFAULT_PASSCODE;
    if (currentPass.trim() !== savedPass.trim()) {
      return { success: false, message: 'Current passcode is incorrect.' };
    }
    if (newPass.trim().length < 4) {
      return { success: false, message: 'New passcode must be at least 4 characters long.' };
    }
    localStorage.setItem(STORAGE_KEYS.ADMIN_PASS, newPass.trim());
    return { success: true, message: 'Admin passcode updated successfully.' };
  } catch {
    return { success: false, message: 'Failed to update passcode in local storage.' };
  }
};

export const logoutAdmin = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.ADMIN_SESSION);
    dispatchContentUpdate();
  } catch {}
};

/* ==================== EVENT LISTENER ==================== */

export const CONTENT_UPDATE_EVENT = 'ace12_content_updated';

export const dispatchContentUpdate = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(CONTENT_UPDATE_EVENT));
  }
};

/* ==================== SUBJECTS & CHAPTERS MERGING ==================== */

export const getCustomSubjects = (): Subject[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.CUSTOM_SUBJECTS);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const getDeletedSubjects = (): string[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.DELETED_SUBJECTS);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const getDeletedChapters = (): string[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.DELETED_CHAPTERS);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const getCustomChapters = (): { [subjectId: string]: Chapter[] } => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.CUSTOM_CHAPTERS);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
};

// Returns merged list of all subjects (default + custom minus deleted)
export const getActiveSubjects = (): Subject[] => {
  const deletedSubs = getDeletedSubjects();
  const deletedChaps = getDeletedChapters();
  const customSubs = getCustomSubjects();
  const customChapsMap = getCustomChapters();

  // Filter default subjects
  const baseList: Subject[] = DEFAULT_SUBJECTS
    .filter((s) => !deletedSubs.includes(s.id))
    .map((s) => {
      const extraChaps = customChapsMap[s.id] || [];
      const chapters = [...s.chapters, ...extraChaps].filter((c) => !deletedChaps.includes(c.id));
      return {
        ...s,
        chapters,
      };
    });

  // Add custom subjects
  const mergedCustomSubs: Subject[] = customSubs.map((s) => {
    const extraChaps = customChapsMap[s.id] || [];
    const chapters = [...s.chapters, ...extraChaps].filter((c) => !deletedChaps.includes(c.id));
    return {
      ...s,
      isCustom: true,
      chapters,
    };
  });

  return [...baseList, ...mergedCustomSubs];
};

export const addCustomSubject = (subject: Omit<Subject, 'isCustom'>): void => {
  const existing = getCustomSubjects();
  const updated = [...existing, { ...subject, isCustom: true }];
  localStorage.setItem(STORAGE_KEYS.CUSTOM_SUBJECTS, JSON.stringify(updated));
  dispatchContentUpdate();
};

export const deleteSubject = (subjectId: string): void => {
  const customSubs = getCustomSubjects();
  const isCustom = customSubs.some((s) => s.id === subjectId);

  if (isCustom) {
    const updated = customSubs.filter((s) => s.id !== subjectId);
    localStorage.setItem(STORAGE_KEYS.CUSTOM_SUBJECTS, JSON.stringify(updated));
  } else {
    const deleted = getDeletedSubjects();
    if (!deleted.includes(subjectId)) {
      localStorage.setItem(STORAGE_KEYS.DELETED_SUBJECTS, JSON.stringify([...deleted, subjectId]));
    }
  }
  dispatchContentUpdate();
};

export const addCustomChapter = (subjectId: string, chapter: Chapter): void => {
  const customChapsMap = getCustomChapters();
  const currentList = customChapsMap[subjectId] || [];
  customChapsMap[subjectId] = [...currentList, { ...chapter, isCustom: true }];
  localStorage.setItem(STORAGE_KEYS.CUSTOM_CHAPTERS, JSON.stringify(customChapsMap));
  dispatchContentUpdate();
};

export const deleteChapter = (chapterId: string): void => {
  // If in custom chapters map, remove it
  const customChapsMap = getCustomChapters();
  let foundInCustom = false;
  for (const subId in customChapsMap) {
    const filtered = customChapsMap[subId].filter((c) => c.id !== chapterId);
    if (filtered.length !== customChapsMap[subId].length) {
      customChapsMap[subId] = filtered;
      foundInCustom = true;
    }
  }
  if (foundInCustom) {
    localStorage.setItem(STORAGE_KEYS.CUSTOM_CHAPTERS, JSON.stringify(customChapsMap));
  }

  // Also add to deleted list in case it is a default chapter
  const deleted = getDeletedChapters();
  if (!deleted.includes(chapterId)) {
    localStorage.setItem(STORAGE_KEYS.DELETED_CHAPTERS, JSON.stringify([...deleted, chapterId]));
  }
  dispatchContentUpdate();
};

/* ==================== CUSTOM NOTES & PYQS OVERRIDES ==================== */

export const getCustomNote = (subjectId: string, chapterId: string): string | null => {
  try {
    const notesMap = JSON.parse(localStorage.getItem(STORAGE_KEYS.CUSTOM_NOTES) || '{}');
    const key = `${subjectId}_${chapterId}`;
    return notesMap[key] || null;
  } catch {
    return null;
  }
};

export const saveCustomNote = (subjectId: string, chapterId: string, markdown: string): void => {
  try {
    const notesMap = JSON.parse(localStorage.getItem(STORAGE_KEYS.CUSTOM_NOTES) || '{}');
    const key = `${subjectId}_${chapterId}`;
    notesMap[key] = markdown;
    localStorage.setItem(STORAGE_KEYS.CUSTOM_NOTES, JSON.stringify(notesMap));
    dispatchContentUpdate();
  } catch (e) {
    console.error('Failed to save custom note', e);
  }
};

export const deleteCustomNote = (subjectId: string, chapterId: string): void => {
  try {
    const notesMap = JSON.parse(localStorage.getItem(STORAGE_KEYS.CUSTOM_NOTES) || '{}');
    const key = `${subjectId}_${chapterId}`;
    delete notesMap[key];
    localStorage.setItem(STORAGE_KEYS.CUSTOM_NOTES, JSON.stringify(notesMap));
    dispatchContentUpdate();
  } catch (e) {
    console.error('Failed to delete custom note', e);
  }
};

export const getCustomPYQs = (subjectId: string, chapterId: string): string | null => {
  try {
    const pyqsMap = JSON.parse(localStorage.getItem(STORAGE_KEYS.CUSTOM_PYQS) || '{}');
    const key = `${subjectId}_${chapterId}`;
    return pyqsMap[key] || null;
  } catch {
    return null;
  }
};

export const saveCustomPYQs = (subjectId: string, chapterId: string, markdown: string): void => {
  try {
    const pyqsMap = JSON.parse(localStorage.getItem(STORAGE_KEYS.CUSTOM_PYQS) || '{}');
    const key = `${subjectId}_${chapterId}`;
    pyqsMap[key] = markdown;
    localStorage.setItem(STORAGE_KEYS.CUSTOM_PYQS, JSON.stringify(pyqsMap));
    dispatchContentUpdate();
  } catch (e) {
    console.error('Failed to save custom pyqs', e);
  }
};

export const deleteCustomPYQs = (subjectId: string, chapterId: string): void => {
  try {
    const pyqsMap = JSON.parse(localStorage.getItem(STORAGE_KEYS.CUSTOM_PYQS) || '{}');
    const key = `${subjectId}_${chapterId}`;
    delete pyqsMap[key];
    localStorage.setItem(STORAGE_KEYS.CUSTOM_PYQS, JSON.stringify(pyqsMap));
    dispatchContentUpdate();
  } catch (e) {
    console.error('Failed to delete custom pyqs', e);
  }
};

/* ==================== PDF & BOOKS STORAGE (IndexedDB) ==================== */

export const saveUploadedBook = async (book: UploadedBook): Promise<void> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BOOKS_STORE, 'readwrite');
    const store = tx.objectStore(BOOKS_STORE);
    const req = store.put(book);
    req.onsuccess = () => {
      dispatchContentUpdate();
      resolve();
    };
    req.onerror = () => reject(req.error);
  });
};

export const getAllBooks = async (subjectId?: string, chapterId?: string): Promise<UploadedBook[]> => {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(BOOKS_STORE, 'readonly');
      const store = tx.objectStore(BOOKS_STORE);
      const req = store.getAll();
      req.onsuccess = () => {
        let books: UploadedBook[] = req.result || [];
        if (subjectId) {
          books = books.filter((b) => b.subjectId === subjectId);
        }
        if (chapterId) {
          books = books.filter((b) => !b.chapterId || b.chapterId === chapterId || b.chapterId === 'all');
        }
        resolve(books);
      };
      req.onerror = () => reject(req.error);
    });
  } catch (e) {
    console.error('Error fetching books from IndexedDB', e);
    return [];
  }
};

export const deleteUploadedBook = async (bookId: string): Promise<void> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BOOKS_STORE, 'readwrite');
    const store = tx.objectStore(BOOKS_STORE);
    const req = store.delete(bookId);
    req.onsuccess = () => {
      dispatchContentUpdate();
      resolve();
    };
    req.onerror = () => reject(req.error);
  });
};

export const clearAllBooks = async (): Promise<void> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BOOKS_STORE, 'readwrite');
    const store = tx.objectStore(BOOKS_STORE);
    const req = store.clear();
    req.onsuccess = () => {
      dispatchContentUpdate();
      resolve();
    };
    req.onerror = () => reject(req.error);
  });
};

/* ==================== MASTER ERASE & FACTORY RESET ==================== */

export const eraseAllCustomNotesAndOverrides = (): void => {
  localStorage.removeItem(STORAGE_KEYS.CUSTOM_NOTES);
  localStorage.removeItem(STORAGE_KEYS.CUSTOM_PYQS);
  dispatchContentUpdate();
};

export const eraseAllContentAndFactoryReset = async (): Promise<void> => {
  localStorage.removeItem(STORAGE_KEYS.CUSTOM_SUBJECTS);
  localStorage.removeItem(STORAGE_KEYS.DELETED_CHAPTERS);
  localStorage.removeItem(STORAGE_KEYS.DELETED_SUBJECTS);
  localStorage.removeItem(STORAGE_KEYS.CUSTOM_NOTES);
  localStorage.removeItem(STORAGE_KEYS.CUSTOM_PYQS);
  localStorage.removeItem(STORAGE_KEYS.CUSTOM_CHAPTERS);
  await clearAllBooks();
  dispatchContentUpdate();
};

/* ==================== EXPORT & IMPORT BACKUP ==================== */

export const exportAllDataJSON = async (): Promise<string> => {
  const books = await getAllBooks();
  const backupObject = {
    version: 1,
    exportDate: new Date().toISOString(),
    owner: OWNER_EMAIL,
    customSubjects: getCustomSubjects(),
    deletedSubjects: getDeletedSubjects(),
    deletedChapters: getDeletedChapters(),
    customChapters: getCustomChapters(),
    customNotes: JSON.parse(localStorage.getItem(STORAGE_KEYS.CUSTOM_NOTES) || '{}'),
    customPYQs: JSON.parse(localStorage.getItem(STORAGE_KEYS.CUSTOM_PYQS) || '{}'),
    books: books,
  };
  return JSON.stringify(backupObject, null, 2);
};

export const importDataJSON = async (jsonString: string): Promise<{ success: boolean; count: number }> => {
  try {
    const data = JSON.parse(jsonString);
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid backup file');
    }

    if (data.customSubjects) {
      localStorage.setItem(STORAGE_KEYS.CUSTOM_SUBJECTS, JSON.stringify(data.customSubjects));
    }
    if (data.deletedSubjects) {
      localStorage.setItem(STORAGE_KEYS.DELETED_SUBJECTS, JSON.stringify(data.deletedSubjects));
    }
    if (data.deletedChapters) {
      localStorage.setItem(STORAGE_KEYS.DELETED_CHAPTERS, JSON.stringify(data.deletedChapters));
    }
    if (data.customChapters) {
      localStorage.setItem(STORAGE_KEYS.CUSTOM_CHAPTERS, JSON.stringify(data.customChapters));
    }
    if (data.customNotes) {
      localStorage.setItem(STORAGE_KEYS.CUSTOM_NOTES, JSON.stringify(data.customNotes));
    }
    if (data.customPYQs) {
      localStorage.setItem(STORAGE_KEYS.CUSTOM_PYQS, JSON.stringify(data.customPYQs));
    }

    let bookCount = 0;
    if (Array.isArray(data.books)) {
      for (const b of data.books) {
        if (b && b.id && b.title) {
          await saveUploadedBook(b);
          bookCount++;
        }
      }
    }

    dispatchContentUpdate();
    return { success: true, count: bookCount };
  } catch (e: any) {
    throw new Error(e.message || 'Failed to parse JSON backup');
  }
};
