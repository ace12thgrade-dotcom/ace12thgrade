
import React from 'react';
import { SUBJECTS } from '../constants.tsx';
import { SubjectId } from '../types.ts';

interface SidebarProps {
  activeSubject: SubjectId;
  setActiveSubject: (id: SubjectId) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSubject, setActiveSubject }) => {
  return (
    <div className="w-16 md:w-20 lg:w-64 bg-slate-950/60 backdrop-blur-3xl border-r border-white/5 h-screen sticky top-0 flex flex-col z-40 transition-all duration-500">
      <div className="p-4 lg:p-8 flex items-center justify-center lg:justify-start gap-4">
        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 rounded-xl lg:rounded-2xl flex items-center justify-center text-white font-black text-xl lg:text-2xl shadow-2xl shadow-indigo-500/20 transform -rotate-3 hover:rotate-0 transition-all duration-500 cursor-pointer">
          A
        </div>
        <div className="hidden lg:block">
           <span className="font-black text-xl text-white tracking-tighter block leading-none">Ace12</span>
           <span className="text-[7px] font-black uppercase tracking-[0.4em] text-indigo-400 mt-1 block">Premium Hub</span>
        </div>
      </div>
      
      <nav className="flex-1 px-2 lg:px-4 space-y-1.5 py-4 overflow-y-auto no-scrollbar">
        {SUBJECTS.map((sub) => (
          <button
            key={sub.id}
            onClick={() => setActiveSubject(sub.id)}
            className={`w-full flex items-center justify-center lg:justify-start gap-0 lg:gap-5 px-0 lg:px-6 py-3.5 lg:py-4 rounded-xl lg:rounded-[1.5rem] transition-all duration-500 relative group/btn overflow-hidden ${
              activeSubject === sub.id 
                ? `bg-white/10 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] border border-white/10` 
                : 'text-slate-500 hover:bg-white/5'
            }`}
          >
            <span className={`text-xl transition-all duration-700 ${activeSubject === sub.id ? 'scale-110 drop-shadow-[0_0_10px_rgba(129,140,248,0.5)]' : 'group-hover/btn:scale-110'}`}>
              {sub.icon}
            </span>
            <span className={`hidden lg:block font-bold text-[12px] tracking-tight transition-colors duration-300 ${activeSubject === sub.id ? 'text-white' : 'text-slate-500'}`}>
              {sub.name}
            </span>
            {activeSubject === sub.id && (
              <div className="absolute left-0 w-1 h-6 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 lg:p-6 border-t border-white/5">
        <div className="hidden lg:flex flex-col gap-4 p-6 bg-slate-900/50 border border-white/5 rounded-[2rem] text-white shadow-xl relative overflow-hidden group/card transform hover:scale-[1.01] transition-all duration-500">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-[50px]"></div>
          <div className="relative z-10 space-y-3">
            <div>
              <span className="text-[8px] font-black text-indigo-300 uppercase tracking-[0.3em] block mb-1">Target Year</span>
              <div className="flex items-baseline gap-1">
                 <span className="text-3xl font-black tracking-tighter">2026</span>
              </div>
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="bg-indigo-500 h-full w-[65%] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
