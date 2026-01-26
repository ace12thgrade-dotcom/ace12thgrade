
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import SubjectDashboard from './components/SubjectDashboard';
import ChatInterface from './components/ChatInterface';
import { SUBJECTS } from './constants';
import { SubjectId } from './types';

const App: React.FC = () => {
  const [activeSubjectId, setActiveSubjectId] = useState<SubjectId>('physics');
  
  const activeSubject = SUBJECTS.find(s => s.id === activeSubjectId)!;

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      {/* Navigation Sidebar */}
      <Sidebar 
        activeSubject={activeSubjectId} 
        setActiveSubject={setActiveSubjectId} 
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header/Search bar (Mock) */}
        <header className="h-16 bg-white border-b px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
              <input 
                type="text" 
                placeholder="Search chapters or questions..." 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/seed/${i}/40/40`} 
                  className="w-8 h-8 rounded-full border-2 border-white" 
                  alt="user"
                />
              ))}
              <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] text-slate-500 font-bold">
                +1k
              </div>
            </div>
            <span className="text-xs font-medium text-slate-500 hidden lg:block">Students Studying Now</span>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <SubjectDashboard subject={activeSubject} />
        </div>
      </main>

      {/* Floating AI Assistant */}
      <ChatInterface />

      {/* Tailwind Utility for dynamic colors used in Sidebar and Dashboard */}
      <div className="hidden bg-blue-50 bg-red-50 bg-purple-50 bg-green-50 bg-indigo-50 bg-orange-50 text-blue-700 text-red-700 text-purple-700 text-green-700 text-indigo-700 text-orange-700 border-blue-100 border-red-100 border-purple-100 border-green-100 border-indigo-100 border-orange-100 bg-blue-100 bg-red-100 bg-purple-100 bg-green-100 bg-indigo-100 bg-orange-100"></div>
    </div>
  );
};

export default App;
