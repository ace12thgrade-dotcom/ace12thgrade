
import React from 'react';
import { SUBJECTS } from '../constants.tsx';
import { SubjectId } from '../types.ts';

interface SidebarProps {
  activeSubject: SubjectId;
  setActiveSubject: (id: SubjectId) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSubject, setActiveSubject }) => {
  return (
    <div className="w-16 md:w-20 lg:w-56 bg-slate-950/60 backdrop-blur-3xl border-r border-white/5 h-full sticky top-0 flex flex-col z-40 transition-all duration-500 shrink-0">
      <div className="p-4 lg:p-6 flex items-center justify-center lg:justify-start gap-3">
        <div className="w-9 h-9 lg:w-10 lg:h-10 bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 rounded-lg lg:rounded-xl flex items-center justify-center text-white font-black text-lg lg:text-xl shadow-xl transform -rotate-3 transition-all duration-500">
          A
        </div>
        <div className="hidden lg:block">
           <span className="font-black text-lg text-white tracking-tighter block leading-none">Ace12</span>
           <span className="text-[6px] font-black uppercase tracking-[0.4em] text-indigo-400 mt-0.5 block">Premium</span>
        </div>
      </div>
      
      <nav className="flex-1 px-2 lg:px-3 space-y-1 py-2 overflow-y-auto no-scrollbar">
        {SUBJECTS.map((sub) => (
          <button
            key={sub.id}
            onClick={() => setActiveSubject(sub.id)}
            className={`w-full flex items-center justify-center lg:justify-start gap-0 lg:gap-4 px-0 lg:px-5 py-2.5 lg:py-3 rounded-lg lg:rounded-2xl transition-all duration-300 relative group/btn overflow-hidden ${
              activeSubject === sub.id 
                ? `bg-white/10 border border-white/10 shadow-lg` 
                : 'text-slate-500 hover:bg-white/5'
            }`}
          >
            <span className={`text-lg transition-all duration-500 ${activeSubject === sub.id ? 'scale-110' : 'group-hover/btn:scale-110'}`}>
              {sub.icon}
            </span>
            <span className={`hidden lg:block font-bold text-[11px] tracking-tight transition-colors duration-300 ${activeSubject === sub.id ? 'text-white' : 'text-slate-500'}`}>
              {sub.name}
            </span>
            {activeSubject === sub.id && (
              <div className="absolute left-0 w-1 h-5 bg-indigo-500 rounded-full"></div>
            )}
          </button>
        ))}
      </nav>

      <div className="p-3 lg:p-4 border-t border-white/5">
        <div className="hidden lg:flex flex-col gap-3 p-4 bg-slate-900/50 border border-white/5 rounded-[1.5rem] text-white shadow-lg relative overflow-hidden transform hover:scale-[1.01] transition-all">
          <div className="relative z-10">
            <span className="text-[7px] font-black text-indigo-300 uppercase tracking-widest block mb-1">Board Year</span>
            <span className="text-xl font-black tracking-tighter">2026</span>
            <div className="w-full bg-white/5 h-1 rounded-full mt-2 overflow-hidden">
              <div className="bg-indigo-500 h-full w-[65%] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
