
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.tsx';
import SubjectDashboard from './components/SubjectDashboard.tsx';
import ChatInterface from './components/ChatInterface.tsx';
import { SUBJECTS } from './constants.tsx';
import { SubjectId } from './types.ts';

const App: React.FC = () => {
  const [activeSubjectId, setActiveSubjectId] = useState<SubjectId>('physics');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);
  
  const activeSubject = SUBJECTS.find(s => s.id === activeSubjectId)!;

  useEffect(() => {
    setSearchQuery('');
  }, [activeSubjectId]);

  const openAbout = () => setModalContent({
    title: 'About Ace12',
    body: 'Ace12 is a premium, AI-driven study hub specifically engineered for Class 12 CBSE students. Our platform synthesizes over 15 years of board exam data to provide you with high-yield notes, formulas, and 4250+ analyzed questions. We eliminate the fluff, focusing on what actually appears in the 2026 Boards.'
  });

  const openContact = () => setModalContent({
    title: 'Contact Us',
    body: 'For support, feedback, or business inquiries, please reach out to our dedicated team at:\n\n📧 Email: support@ace12.com\n\nWe typically respond within 24 hours to help you ace your exams!'
  });

  const openPrivacy = () => setModalContent({
    title: 'Privacy Policy',
    body: 'At Ace12, we prioritize your academic focus. We do not track personal identities. Your study queries are processed via secure Google Gemini API calls. No personal data is stored or sold to third parties. We are committed to a safe, focused learning environment.'
  });

  return (
    <div className="flex h-screen w-full bg-[#020617] selection:bg-indigo-500/30 overflow-hidden">
      <Sidebar 
        activeSubject={activeSubjectId} 
        setActiveSubject={setActiveSubjectId} 
      />

      <main className="flex-1 flex flex-col h-full min-w-0 relative">
        <header className="h-20 lg:h-24 bg-slate-950/40 backdrop-blur-md border-b border-white/5 px-6 lg:px-12 flex items-center justify-between sticky top-0 z-30 shrink-0">
          <div className="flex-1 max-w-2xl hidden md:block">
            <div className="relative group">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-indigo-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search Chapters or MIQs...`} 
                className="w-full bg-white/5 border border-white/5 rounded-2xl py-3 lg:py-4 pl-14 lg:pl-16 pr-6 text-xs lg:text-sm font-bold text-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:bg-white/10 transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4 lg:gap-10">
            <div className="flex -space-x-2 lg:-space-x-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 lg:w-12 lg:h-12 rounded-lg lg:rounded-[1.2rem] border-2 lg:border-4 border-slate-950 overflow-hidden shadow-2xl">
                  <img src={`https://picsum.photos/seed/${i + 20}/80/80`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-lg lg:rounded-[1.2rem] bg-indigo-600 border-2 lg:border-4 border-slate-950 flex items-center justify-center text-[7px] lg:text-[10px] text-white font-black shadow-3xl">
                +4K
              </div>
            </div>
            <div className="hidden sm:block text-right">
              <span className="text-[9px] font-black text-indigo-400 uppercase tracking-[0.4em] block mb-0.5">Board Hub</span>
              <span className="text-[11px] font-black text-white">2026 ARCHIVE</span>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth w-full flex flex-col">
          <div className="flex-1">
            <SubjectDashboard subject={activeSubject} searchQuery={searchQuery} />
          </div>
          
          {/* Subtle Minimal Footer Section */}
          <footer className="mt-12 px-6 lg:px-12 py-6 border-t border-white/5 bg-slate-950/40">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex gap-6 lg:gap-10">
                <button onClick={openAbout} className="text-[9px] font-black text-slate-500 hover:text-indigo-400 uppercase tracking-[0.3em] transition-colors">About Us</button>
                <button onClick={openContact} className="text-[9px] font-black text-slate-500 hover:text-indigo-400 uppercase tracking-[0.3em] transition-colors">Contact</button>
                <button onClick={openPrivacy} className="text-[9px] font-black text-slate-500 hover:text-indigo-400 uppercase tracking-[0.3em] transition-colors">Privacy Policy</button>
              </div>
              
              <div className="text-slate-700 text-[8px] font-bold uppercase tracking-[0.4em]">
                © 2025 ACE12. ACADEMIC HUB.
              </div>
            </div>
          </footer>
        </div>
      </main>

      <ChatInterface />

      {/* Info Modal */}
      {modalContent && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setModalContent(null)}
        >
          <div 
            className="bg-slate-900 border border-white/10 rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-12 max-w-xl w-full shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] relative overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]"></div>
            <h3 className="text-xl lg:text-3xl font-black text-white mb-6 lg:mb-8 tracking-tighter uppercase">{modalContent.title}</h3>
            <p className="text-slate-300 text-xs lg:text-base font-medium leading-relaxed whitespace-pre-wrap">{modalContent.body}</p>
            <button 
              onClick={() => setModalContent(null)}
              className="mt-10 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-black text-[9px] lg:text-[10px] uppercase tracking-[0.4em] transition-all shadow-xl active:scale-95"
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
