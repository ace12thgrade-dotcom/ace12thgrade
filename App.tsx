import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.tsx';
import SubjectDashboard from './components/SubjectDashboard.tsx';
import ChatInterface from './components/ChatInterface.tsx';
import AdminPortal from './components/AdminPortal.tsx';
import { getActiveSubjects, CONTENT_UPDATE_EVENT, isAdminAuthenticated, initContentSync } from './services/contentStore.ts';
import { SubjectId, Chapter, Subject } from './types.ts';
import { ShieldCheck, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [subjects, setSubjects] = useState<Subject[]>(getActiveSubjects());
  const [activeSubjectId, setActiveSubjectId] = useState<SubjectId>('physics');
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [adminFocus, setAdminFocus] = useState<{ subjectId?: string; chapterId?: string } | undefined>();
  const [isAdmin, setIsAdmin] = useState(isAdminAuthenticated());

  // Initialize Real-Time Cloud Synchronization across all devices
  useEffect(() => {
    const cleanupSync = initContentSync();
    return () => cleanupSync();
  }, []);

  useEffect(() => {
    const handleContentUpdate = () => {
      const active = getActiveSubjects();
      setSubjects(active);
      setIsAdmin(isAdminAuthenticated());
      // If current active subject was deleted, switch to the first available
      if (!active.some(s => s.id === activeSubjectId) && active.length > 0) {
        setActiveSubjectId(active[0].id);
      }
    };

    window.addEventListener(CONTENT_UPDATE_EVENT, handleContentUpdate);
    return () => window.removeEventListener(CONTENT_UPDATE_EVENT, handleContentUpdate);
  }, [activeSubjectId]);

  // Keyboard shortcut: Ctrl/Cmd + Shift + A to open Admin Portal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
        setIsAdminOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeSubject = subjects.find(s => s.id === activeSubjectId) || subjects[0] || {
    id: 'physics' as SubjectId,
    name: 'Physics',
    icon: '⚡',
    chapters: []
  };

  useEffect(() => {
    if (window.history.state === null) {
      window.history.replaceState({ page: 'home' }, '');
    }

    const handlePopState = () => {
      if (isAdminOpen) {
        setIsAdminOpen(false);
      } else if (selectedChapter) {
        setSelectedChapter(null);
        window.history.pushState({ page: 'home' }, '');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedChapter, isAdminOpen]);

  useEffect(() => {
    if (selectedChapter) {
      window.history.pushState({ chapterId: selectedChapter.id }, '');
    }
  }, [selectedChapter]);

  useEffect(() => {
    setSearchQuery('');
    setSelectedChapter(null);
  }, [activeSubjectId]);

  const handleOpenAdmin = (subjectId?: string, chapterId?: string) => {
    if (subjectId || chapterId) {
      setAdminFocus({ subjectId: subjectId || activeSubjectId, chapterId });
    } else {
      setAdminFocus({ subjectId: activeSubjectId });
    }
    setIsAdminOpen(true);
  };

  const openAbout = () => setModalContent({
    title: 'About Ace12 Study Hub',
    body: 'Ace12 is a human-crafted, comprehensive CBSE Class 12 board preparation platform. It provides complete chapter-by-chapter handwritten-style notes, formula masterbooks, and 15 years of solved board questions (with 4-5 solved PYQs per chapter and 12-15 full-syllabus solved PYQs).'
  });

  const openContact = () => setModalContent({
    title: 'Contact Academic Support',
    body: 'Have questions or need help with any CBSE topic? Reach out to support@ace12.com or ace12thgrade@gmail.com. Our mentor desk responds quickly to help you excel in your exams.'
  });

  const openPrivacy = () => setModalContent({
    title: 'Privacy Policy',
    body: 'Your study preferences, custom-created notes, and uploaded PDF textbooks are stored securely and privately in your browser with offline-first persistence. All AI explanations and notes syncing are handled safely without harvesting personal data.'
  });

  return (
    <div className="flex h-[100dvh] w-full bg-[#faf7f2] dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 selection:bg-amber-500/30 overflow-hidden font-sans">
      <Sidebar 
        activeSubject={activeSubjectId} 
        setActiveSubject={setActiveSubjectId} 
        onOpenAdmin={() => handleOpenAdmin()}
      />

      <main className="flex-1 flex flex-col min-w-0 relative h-full">
        {/* Clean, Human Top Bar */}
        <header className="h-14 lg:h-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80 px-4 lg:px-8 flex items-center justify-between sticky top-0 z-30 shrink-0">
          {!selectedChapter && (
            <div className="flex-1 max-w-md hidden md:block">
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search ${activeSubject.name} chapters, topics, PYQs...`} 
                  className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-2 pl-10 pr-4 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                />
              </div>
            </div>
          )}
          
          <div className="flex items-center gap-3">
            {/* Show Admin Active badge only when authenticated */}
            {isAdmin && (
              <button
                onClick={() => handleOpenAdmin()}
                className="px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-2 transition-all bg-amber-100 dark:bg-amber-950/60 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 shadow-xs"
                title="Admin Active - Click to open portal"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                <span className="hidden sm:inline">Admin Mode Active</span>
              </button>
            )}

            <div className="px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>CBSE 2026-27 Aligned</span>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth w-full flex flex-col">
          <div className="flex-1">
            <SubjectDashboard 
              subject={activeSubject} 
              searchQuery={searchQuery} 
              selectedChapter={selectedChapter}
              setSelectedChapter={setSelectedChapter}
              onOpenAdmin={(subId, chId) => handleOpenAdmin(subId, chId)}
            />
          </div>
          
          <footer className="mt-auto px-6 lg:px-10 py-3.5 border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex gap-6 font-semibold opacity-70">
                <button onClick={openAbout} className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">About</button>
                <button onClick={openContact} className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">Contact</button>
                <button onClick={openPrivacy} className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">Privacy</button>
                <button 
                  onClick={() => handleOpenAdmin()} 
                  className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors opacity-60 hover:opacity-100 flex items-center gap-1"
                  title="Press Ctrl+Shift+A anywhere to open"
                >
                  <ShieldCheck className="w-3 h-3" />
                  <span>Faculty Desk</span>
                </button>
              </div>
              <div className="font-bold opacity-60 text-[11px]">
                Ace12 CBSE Class 12 Preparation Hub • Offline Ready
              </div>
            </div>
          </footer>
        </div>
      </main>

      <ChatInterface />

      {/* Admin Portal Full-Screen Modal Dashboard */}
      {isAdminOpen && (
        <AdminPortal
          onClose={() => setIsAdminOpen(false)}
          initialSubjectId={adminFocus?.subjectId}
          initialChapterId={adminFocus?.chapterId}
        />
      )}

      {modalContent && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setModalContent(null)}
        >
          <div 
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 lg:p-8 max-w-lg w-full shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-3">{modalContent.title}</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-relaxed whitespace-pre-wrap">{modalContent.body}</p>
            <button 
              onClick={() => setModalContent(null)}
              className="mt-6 px-6 py-2 bg-amber-800 hover:bg-amber-700 text-white rounded-xl font-bold text-xs shadow transition-all"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
