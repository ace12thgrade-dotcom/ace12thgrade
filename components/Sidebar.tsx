
import React from 'react';
import { SUBJECTS } from '../constants';
import { SubjectId } from '../types';

interface SidebarProps {
  activeSubject: SubjectId;
  setActiveSubject: (id: SubjectId) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSubject, setActiveSubject }) => {
  return (
    <div className="w-24 md:w-80 glass border-r h-screen sticky top-0 flex flex-col z-40 transition-all duration-700 group">
      <div className="p-10 flex items-center justify-center md:justify-start gap-5">
        <div className="w-14 h-14 bg-slate-900 rounded-[1.6rem] flex items-center justify-center text-white font-black text-3xl shadow-2xl shadow-slate-300/50 transform -rotate-6 hover:rotate-0 transition-transform">
          A
        </div>
        <span className="hidden md:block font-black text-3xl text-slate-800 tracking-tighter">Ace12</span>
      </div>
      
      <nav className="flex-1 px-5 space-y-4 py-8 overflow-y-auto no-scrollbar">
        {SUBJECTS.map((sub) => (
          <button
            key={sub.id}
            onClick={() => setActiveSubject(sub.id)}
            className={`w-full flex items-center gap-6 px-8 py-5 rounded-[2.2rem] transition-all duration-500 relative group/btn ${
              activeSubject === sub.id 
                ? `bg-${sub.color}-600 text-white shadow-2xl shadow-${sub.color}-200/50 scale-105` 
                : 'text-slate-400 hover:bg-slate-50'
            }`}
          >
            <span className={`text-3xl transition-all duration-700 group-hover/btn:scale-125 ${activeSubject === sub.id ? 'rotate-12' : 'group-hover/btn:rotate-12'}`}>
              {sub.icon}
            </span>
            <span className={`hidden md:block font-black text-sm tracking-wide ${activeSubject === sub.id ? 'opacity-100' : 'opacity-60'}`}>
              {sub.name}
            </span>
            {activeSubject === sub.id && (
              <div className="absolute -left-2 w-3 h-10 bg-white rounded-full hidden md:block shadow-sm"></div>
            )}
          </button>
        ))}
      </nav>

      <div className="p-8 border-t border-slate-100/50">
        <div className="hidden md:flex flex-col gap-5 p-8 bg-slate-900 rounded-[3rem] text-white shadow-3xl relative overflow-hidden group/card">
           <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover/card:scale-150 transition-transform duration-1000"></div>
          <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em]">Mastery Plan</span>
          <div className="flex justify-between items-end">
             <span className="text-4xl font-black leading-none">2026</span>
             <span className="text-[10px] font-bold text-slate-500">BOARDS</span>
          </div>
          <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div className="bg-indigo-500 h-full w-[58%] rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
