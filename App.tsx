
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.tsx';
import SubjectDashboard from './components/SubjectDashboard.tsx';
import ChatInterface from './components/ChatInterface.tsx';
import { SUBJECTS } from './constants.tsx';
import { SubjectId } from './types.ts';

const App: React.FC = () => {
  const [activeSubjectId, setActiveSubjectId] = useState<SubjectId>('physics');
  const [searchQuery, setSearchQuery] = useState('');
  
  const activeSubject = SUBJECTS.find(s => s.id === activeSubjectId)!;

  // Reset search when subject changes for a clean experience
  useEffect(() => {
    setSearchQuery('');
  }, [activeSubjectId]);

  return (
    <div className="flex min-h-screen bg-[#fdfdfe] selection:bg-indigo-100">
      {/* Navigation Sidebar */}
      <Sidebar 
        activeSubject={activeSubjectId} 
        setActiveSubject={setActiveSubjectId} 
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Elite Header */}
        <header className="h-20 bg-white/70 backdrop-blur-md border-b border-slate-100 px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex-1 max-w-xl hidden md:block">
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 70 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${activeSubject.name} chapters...`} 
                className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl py-2.5 pl-12 pr-4 text-sm font-semibold focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:bg-white transition-all"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-2xl border-4 border-white overflow-hidden shadow-sm">
                  <img src={`https://picsum.photos/seed/${i + 10}/80/80`} alt="user" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-2xl bg-indigo-600 border-4 border-white flex items-center justify-center text-[10px] text-white font-black shadow-lg">
                +1K
              </div>
            </div>
            <div className="hidden lg:block text-right">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Live Now</span>
              <span className="text-xs font-bold text-slate-800">1,240 Students Active</span>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-y-auto">
          <SubjectDashboard subject={activeSubject} searchQuery={searchQuery} />
        </div>
      </main>

      <ChatInterface />

      {/* Tailwind Safelist Utility for dynamic color mapping */}
      <div className="hidden 
        bg-blue-50 bg-red-50 bg-purple-50 bg-green-50 bg-indigo-50 bg-orange-50 bg-pink-50
        text-blue-600 text-red-600 text-purple-600 text-green-600 text-indigo-600 text-orange-600 text-pink-600
        border-blue-500 border-red-500 border-purple-500 border-green-500 border-indigo-500 border-orange-500 border-pink-500
        from-blue-600 from-red-600 from-purple-600 from-green-600 from-indigo-600 from-orange-600 from-pink-600
        to-blue-950 to-red-950 to-purple-950 to-green-950 to-indigo-950 to-orange-950 to-pink-950
        bg-blue-600 bg-red-600 bg-purple-600 bg-green-600 bg-indigo-600 bg-orange-600 bg-pink-600
        shadow-blue-200/50 shadow-red-200/50 shadow-purple-200/50 shadow-green-200/50 shadow-indigo-200/50 shadow-orange-200/50 shadow-pink-200/50
      "></div>
    </div>
  );
};

export default App;
