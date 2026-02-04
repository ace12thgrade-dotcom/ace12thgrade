
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.tsx';
import SubjectDashboard from './components/SubjectDashboard.tsx';
import ChatInterface from './components/ChatInterface.tsx';
import { SUBJECTS } from './constants.tsx';
import { SubjectId, Chapter } from './types.ts';

const App: React.FC = () => {
  const [activeSubjectId, setActiveSubjectId] = useState<SubjectId>('physics');
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);
  
  const activeSubject = SUBJECTS.find(s => s.id === activeSubjectId)!;

  useEffect(() => {
    if (window.history.state === null) {
      window.history.replaceState({ page: 'home' }, '');
    }

    const handlePopState = (event: PopStateEvent) => {
      if (selectedChapter) {
        setSelectedChapter(null);
        window.history.pushState({ page: 'home' }, '');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedChapter]);

  useEffect(() => {
    if (selectedChapter) {
      window.history.pushState({ chapterId: selectedChapter.id }, '');
    }
  }, [selectedChapter]);

  useEffect(() => {
    setSearchQuery('');
    setSelectedChapter(null);
  }, [activeSubjectId]);

  const openAbout = () => setModalContent({
    title: 'About Ace12',
    body: 'Ace12 is a premium, AI-driven study hub engineered for Class 12 CBSE students. We synthesize over 15 years of board exam data to provide you with high-yield notes and 4250+ analyzed questions for the 2026 Boards.'
  });

  const openContact = () => setModalContent({
    title: 'Contact Us',
    body: 'Reach out to our team at support@ace12.com. We typically respond within 24 hours to help you ace your exams!'
  });

  const openPrivacy = () => setModalContent({
    title: 'Privacy Policy',
    body: 'Your study queries are processed via secure Google Gemini API calls. No personal data is stored or sold to third parties.'
  });

  return (
    <div className="flex h-[100dvh] w-full bg-[#020617] selection:bg-indigo-500/30 overflow-hidden">
      <Sidebar 
        activeSubject={activeSubjectId} 
        setActiveSubject={setActiveSubjectId} 
      />

      <main className="flex-1 flex flex-col min-w-0 relative h-full">
        <header className="h-16 lg:h-20 bg-slate-950/40 backdrop-blur-md border-b border-white/5 px-4 lg:px-10 flex items-center justify-between sticky top-0 z-30 shrink-0">
          <div className="flex-1 max-w-xl hidden md:block">
            <div className="relative group">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${activeSubject.name} chapters...`} 
                className="w-full bg-white/5 border border-white/5 rounded-xl py-2.5 pl-12 pr-6 text-xs font-bold text-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4 lg:gap-8">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 lg:w-9 lg:h-9 rounded-lg border-2 border-slate-950 overflow-hidden shadow-lg">
                  <img src={`https://picsum.photos/seed/${i + 20}/80/80`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-lg bg-indigo-600 border-2 border-slate-950 flex items-center justify-center text-[8px] text-white font-black">
                +4K
              </div>
            </div>
            <div className="hidden sm:block text-right">
              <span className="text-[10px] font-black text-white">2026 ARCHIVE</span>
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
            />
          </div>
          
          <footer className="mt-auto px-6 lg:px-10 py-4 border-t border-white/5 bg-slate-950/40">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex gap-6 lg:gap-8">
                <button onClick={openAbout} className="text-[8px] font-black text-slate-600 hover:text-indigo-400 uppercase tracking-widest transition-colors">About</button>
                <button onClick={openContact} className="text-[8px] font-black text-slate-600 hover:text-indigo-400 uppercase tracking-widest transition-colors">Contact</button>
                <button onClick={openPrivacy} className="text-[8px] font-black text-slate-600 hover:text-indigo-400 uppercase tracking-widest transition-colors">Privacy</button>
              </div>
              <div className="text-slate-700 text-[8px] font-bold uppercase tracking-[0.3em]">
                ACE12 HUB.
              </div>
            </div>
          </footer>
        </div>
      </main>

      <ChatInterface />

      {modalContent && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setModalContent(null)}
        >
          <div 
            className="bg-slate-900 border border-white/10 rounded-[2rem] p-8 lg:p-10 max-w-lg w-full shadow-2xl relative overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-lg lg:text-xl font-black text-white mb-4 tracking-tighter uppercase">{modalContent.title}</h3>
            <p className="text-slate-300 text-[13px] font-medium leading-relaxed whitespace-pre-wrap">{modalContent.body}</p>
            <button 
              onClick={() => setModalContent(null)}
              className="mt-6 px-8 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-black text-[9px] uppercase tracking-widest transition-all shadow-lg active:scale-95"
            >
              Understand
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
