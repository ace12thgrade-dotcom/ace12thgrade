import { Subject, Chapter, UploadedBook } from '../types.ts';
import { SUBJECTS as DEFAULT_SUBJECTS } from '../constants.tsx';
import { db } from './firebase.ts';
import { 
  doc, 
  setDoc, 
  getDoc, 
  deleteDoc, 
  collection, 
  onSnapshot, 
  getDocs 
} from 'firebase/firestore';

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
  CLOUD_SYNCED_TIME: 'ace12_cloud_synced_time',
};

// Default fallback passcode is 'ace12admin'
const DEFAULT_PASSCODE = 'ace12admin';
export const OWNER_EMAIL = 'ace12thgrade@gmail.com';

// Open IndexedDB for offline binary storage
const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB is not supported'));
      return;
    }
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const idb = (event.target as IDBOpenDBRequest).result;
      if (!idb.objectStoreNames.contains(BOOKS_STORE)) {
        idb.createObjectStore(BOOKS_STORE, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

/* ==================== EVENT LISTENER ==================== */

export const CONTENT_UPDATE_EVENT = 'ace12_content_updated';

export const dispatchContentUpdate = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(CONTENT_UPDATE_EVENT));
  }
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

export const changeAdminPasscode = async (currentPass: string, newPass: string): Promise<{ success: boolean; message: string }> => {
  try {
    const savedPass = localStorage.getItem(STORAGE_KEYS.ADMIN_PASS) || DEFAULT_PASSCODE;
    if (currentPass.trim() !== savedPass.trim()) {
      return { success: false, message: 'Current passcode is incorrect.' };
    }
    if (newPass.trim().length < 4) {
      return { success: false, message: 'New passcode must be at least 4 characters long.' };
    }
    
    const cleanPass = newPass.trim();
    localStorage.setItem(STORAGE_KEYS.ADMIN_PASS, cleanPass);

    // Sync passcode to Firestore
    try {
      await setDoc(doc(db, 'settings', 'admin_config'), {
        adminPasscode: cleanPass,
        updatedAt: new Date().toISOString()
      }, { merge: true });
    } catch (err) {
      console.warn('Could not sync passcode to cloud database:', err);
    }

    dispatchContentUpdate();
    return { success: true, message: 'Admin passcode updated and synced to cloud.' };
  } catch {
    return { success: false, message: 'Failed to update passcode.' };
  }
};

export const logoutAdmin = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.ADMIN_SESSION);
    dispatchContentUpdate();
  } catch {}
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

const syncCurriculumToFirestore = async () => {
  try {
    await setDoc(doc(db, 'curriculum', 'global'), {
      customSubjects: getCustomSubjects(),
      deletedSubjects: getDeletedSubjects(),
      deletedChapters: getDeletedChapters(),
      customChapters: getCustomChapters(),
      updatedAt: new Date().toISOString()
    }, { merge: true });
  } catch (err) {
    console.error('Failed to sync curriculum to Firestore:', err);
  }
};

export const addCustomSubject = (subject: Omit<Subject, 'isCustom'>): void => {
  const existing = getCustomSubjects();
  const updated = [...existing, { ...subject, isCustom: true }];
  localStorage.setItem(STORAGE_KEYS.CUSTOM_SUBJECTS, JSON.stringify(updated));
  dispatchContentUpdate();
  syncCurriculumToFirestore();
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
  syncCurriculumToFirestore();
};

export const addCustomChapter = (subjectId: string, chapter: Chapter): void => {
  const customChapsMap = getCustomChapters();
  const currentList = customChapsMap[subjectId] || [];
  customChapsMap[subjectId] = [...currentList, { ...chapter, isCustom: true }];
  localStorage.setItem(STORAGE_KEYS.CUSTOM_CHAPTERS, JSON.stringify(customChapsMap));
  dispatchContentUpdate();
  syncCurriculumToFirestore();
};

export const deleteChapter = (chapterId: string): void => {
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

  const deleted = getDeletedChapters();
  if (!deleted.includes(chapterId)) {
    localStorage.setItem(STORAGE_KEYS.DELETED_CHAPTERS, JSON.stringify([...deleted, chapterId]));
  }
  dispatchContentUpdate();
  syncCurriculumToFirestore();
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

    // Push to Firestore Cloud
    setDoc(doc(db, 'notes', key), {
      subjectId,
      chapterId,
      markdown,
      updatedAt: new Date().toISOString()
    }).catch(err => console.error('Failed to sync note to cloud:', err));
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

    // Remove from Firestore Cloud
    deleteDoc(doc(db, 'notes', key)).catch(err => console.error('Failed to delete cloud note:', err));
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

    // Push to Firestore Cloud
    setDoc(doc(db, 'pyqs', key), {
      subjectId,
      chapterId,
      markdown,
      updatedAt: new Date().toISOString()
    }).catch(err => console.error('Failed to sync PYQs to cloud:', err));
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

    // Remove from Firestore Cloud
    deleteDoc(doc(db, 'pyqs', key)).catch(err => console.error('Failed to delete cloud pyqs:', err));
  } catch (e) {
    console.error('Failed to delete custom pyqs', e);
  }
};

/* ==================== PDF & BOOKS STORAGE ==================== */

export const saveUploadedBook = async (book: UploadedBook): Promise<void> => {
  // 1. Save to local IndexedDB
  const idb = await openDB();
  await new Promise<void>((resolve, reject) => {
    const tx = idb.transaction(BOOKS_STORE, 'readwrite');
    const store = tx.objectStore(BOOKS_STORE);
    const req = store.put(book);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });

  dispatchContentUpdate();

  // 2. Sync metadata and content to Cloud Firestore
  try {
    await setDoc(doc(db, 'books', book.id), {
      ...book,
      updatedAt: new Date().toISOString()
    });
  } catch (err) {
    console.error('Failed to sync book to Firestore:', err);
  }
};

export const getAllBooks = async (subjectId?: string, chapterId?: string): Promise<UploadedBook[]> => {
  try {
    const idb = await openDB();
    return new Promise((resolve, reject) => {
      const tx = idb.transaction(BOOKS_STORE, 'readonly');
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
  // 1. Delete from local IndexedDB
  const idb = await openDB();
  await new Promise<void>((resolve, reject) => {
    const tx = idb.transaction(BOOKS_STORE, 'readwrite');
    const store = tx.objectStore(BOOKS_STORE);
    const req = store.delete(bookId);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });

  dispatchContentUpdate();

  // 2. Delete from Cloud Firestore
  try {
    await deleteDoc(doc(db, 'books', bookId));
  } catch (err) {
    console.error('Failed to delete book from cloud:', err);
  }
};

export const clearAllBooks = async (): Promise<void> => {
  const idb = await openDB();
  await new Promise<void>((resolve, reject) => {
    const tx = idb.transaction(BOOKS_STORE, 'readwrite');
    const store = tx.objectStore(BOOKS_STORE);
    const req = store.clear();
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });

  // Clear in Firestore
  try {
    const snap = await getDocs(collection(db, 'books'));
    for (const d of snap.docs) {
      await deleteDoc(d.ref);
    }
  } catch (err) {
    console.warn('Error clearing cloud books:', err);
  }

  dispatchContentUpdate();
};

/* ==================== MASTER ERASE & FACTORY RESET ==================== */

export const eraseAllCustomNotesAndOverrides = async (): Promise<void> => {
  localStorage.removeItem(STORAGE_KEYS.CUSTOM_NOTES);
  localStorage.removeItem(STORAGE_KEYS.CUSTOM_PYQS);

  try {
    const notesSnap = await getDocs(collection(db, 'notes'));
    for (const d of notesSnap.docs) {
      await deleteDoc(d.ref);
    }
    const pyqsSnap = await getDocs(collection(db, 'pyqs'));
    for (const d of pyqsSnap.docs) {
      await deleteDoc(d.ref);
    }
  } catch (err) {
    console.error('Failed to clear cloud notes:', err);
  }

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

  try {
    await deleteDoc(doc(db, 'curriculum', 'global'));
    await eraseAllCustomNotesAndOverrides();
  } catch (err) {
    console.error('Failed to reset cloud database:', err);
  }

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
      for (const [key, markdown] of Object.entries(data.customNotes)) {
        const [subId, chapId] = key.split('_');
        if (subId && chapId && typeof markdown === 'string') {
          setDoc(doc(db, 'notes', key), {
            subjectId: subId,
            chapterId: chapId,
            markdown,
            updatedAt: new Date().toISOString()
          }).catch(console.error);
        }
      }
    }
    if (data.customPYQs) {
      localStorage.setItem(STORAGE_KEYS.CUSTOM_PYQS, JSON.stringify(data.customPYQs));
      for (const [key, markdown] of Object.entries(data.customPYQs)) {
        const [subId, chapId] = key.split('_');
        if (subId && chapId && typeof markdown === 'string') {
          setDoc(doc(db, 'pyqs', key), {
            subjectId: subId,
            chapterId: chapId,
            markdown,
            updatedAt: new Date().toISOString()
          }).catch(console.error);
        }
      }
    }

    syncCurriculumToFirestore();

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

/* ==================== GLOBAL REAL-TIME CLOUD SYNCHRONIZATION ==================== */

let isSyncInitialized = false;

export const initContentSync = (): (() => void) => {
  if (isSyncInitialized || typeof window === 'undefined') {
    return () => {};
  }
  isSyncInitialized = true;

  const unsubscribes: Array<() => void> = [];

  try {
    // 1. Listen for Curriculum updates (Custom subjects, added/removed chapters)
    const curriculumUnsub = onSnapshot(doc(db, 'curriculum', 'global'), (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        if (data.customSubjects !== undefined) {
          localStorage.setItem(STORAGE_KEYS.CUSTOM_SUBJECTS, JSON.stringify(data.customSubjects));
        }
        if (data.deletedSubjects !== undefined) {
          localStorage.setItem(STORAGE_KEYS.DELETED_SUBJECTS, JSON.stringify(data.deletedSubjects));
        }
        if (data.deletedChapters !== undefined) {
          localStorage.setItem(STORAGE_KEYS.DELETED_CHAPTERS, JSON.stringify(data.deletedChapters));
        }
        if (data.customChapters !== undefined) {
          localStorage.setItem(STORAGE_KEYS.CUSTOM_CHAPTERS, JSON.stringify(data.customChapters));
        }
        localStorage.setItem(STORAGE_KEYS.CLOUD_SYNCED_TIME, new Date().toISOString());
        dispatchContentUpdate();
      } else {
        // If first time initializing cloud, push local custom data if any exists
        const localCustomSubs = getCustomSubjects();
        const localDeletedSubs = getDeletedSubjects();
        const localDeletedChaps = getDeletedChapters();
        const localCustomChaps = getCustomChapters();
        if (localCustomSubs.length > 0 || localDeletedSubs.length > 0 || localDeletedChaps.length > 0 || Object.keys(localCustomChaps).length > 0) {
          syncCurriculumToFirestore();
        }
      }
    }, (err) => {
      console.warn('Curriculum cloud listener note:', err.message);
    });
    unsubscribes.push(curriculumUnsub);

    // 2. Listen for Notes overrides
    const notesUnsub = onSnapshot(collection(db, 'notes'), (snap) => {
      const notesMap: { [key: string]: string } = {};
      snap.forEach((docSnap) => {
        const data = docSnap.data();
        if (data && data.markdown) {
          notesMap[docSnap.id] = data.markdown;
        }
      });
      if (snap.size > 0 || localStorage.getItem(STORAGE_KEYS.CUSTOM_NOTES)) {
        localStorage.setItem(STORAGE_KEYS.CUSTOM_NOTES, JSON.stringify(notesMap));
        dispatchContentUpdate();
      }
    }, (err) => {
      console.warn('Notes cloud listener note:', err.message);
    });
    unsubscribes.push(notesUnsub);

    // 3. Listen for PYQs overrides
    const pyqsUnsub = onSnapshot(collection(db, 'pyqs'), (snap) => {
      const pyqsMap: { [key: string]: string } = {};
      snap.forEach((docSnap) => {
        const data = docSnap.data();
        if (data && data.markdown) {
          pyqsMap[docSnap.id] = data.markdown;
        }
      });
      if (snap.size > 0 || localStorage.getItem(STORAGE_KEYS.CUSTOM_PYQS)) {
        localStorage.setItem(STORAGE_KEYS.CUSTOM_PYQS, JSON.stringify(pyqsMap));
        dispatchContentUpdate();
      }
    }, (err) => {
      console.warn('PYQs cloud listener note:', err.message);
    });
    unsubscribes.push(pyqsUnsub);

    // 4. Listen for Books collection
    const booksUnsub = onSnapshot(collection(db, 'books'), async (snap) => {
      try {
        const idb = await openDB();
        for (const docSnap of snap.docs) {
          const bookData = docSnap.data() as UploadedBook;
          if (bookData && bookData.id) {
            const tx = idb.transaction(BOOKS_STORE, 'readwrite');
            tx.objectStore(BOOKS_STORE).put(bookData);
          }
        }
        dispatchContentUpdate();
      } catch (err) {
        console.warn('Books cloud sync to local IDB error:', err);
      }
    }, (err) => {
      console.warn('Books cloud listener note:', err.message);
    });
    unsubscribes.push(booksUnsub);

    // 5. Listen for Settings (Passcode)
    const settingsUnsub = onSnapshot(doc(db, 'settings', 'admin_config'), (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        if (data.adminPasscode) {
          localStorage.setItem(STORAGE_KEYS.ADMIN_PASS, data.adminPasscode);
        }
      }
    }, (err) => {
      console.warn('Settings cloud listener note:', err.message);
    });
    unsubscribes.push(settingsUnsub);

  } catch (err) {
    console.error('Error initializing Cloud Firestore listeners:', err);
  }

  return () => {
    unsubscribes.forEach((unsub) => unsub());
    isSyncInitialized = false;
  };
};
