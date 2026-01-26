
import React from 'react';
import { SUBJECTS } from '../constants.tsx';
import { SubjectId } from '../types.ts';

interface SidebarProps {
  activeSubject: SubjectId;
  setActiveSubject: (id: SubjectId) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSubject, setActiveSubject }) => {
  return (
    <div className="w-24 md:w-80 bg-white/40 backdrop-blur-3xl border-r border-white/50 h-screen sticky top-0 flex flex-col z-40 transition-all duration-700">
      <div className="p-10 flex items-center justify-center md:justify-start gap-5">
        <div className="w-14 h-14 bg-gradient-to-tr from-slate-900 via-slate-800 to-indigo-900 rounded-[1.6rem] flex items-center justify-center text-white font-black text-3xl shadow-2xl shadow-indigo-200/50 transform -rotate-3 hover:rotate-0 transition-all duration-500 cursor-pointer">
          A
        </div>
        <div className="hidden md:block">
           <span className="font-black text-3xl text-slate-800 tracking-tighter block leading-none">Ace12</span>
           <span className="text-[8px] font-black uppercase tracking-[0.4em] text-indigo-500 mt-1 block">Premium Hub</span>
        </div>
      </div>
      
      <nav className="flex-1 px-5 space-y-2 py-4 overflow-y-auto no-scrollbar">
        {SUBJECTS.map((sub) => (
          <button
            key={sub.id}
            onClick={() => setActiveSubject(sub.id)}
            className={`w-full flex items-center gap-6 px-8 py-4.5 rounded-[2rem] transition-all duration-500 relative group/btn overflow-hidden ${
              activeSubject === sub.id 
                ? `bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] scale-[1.02] border border-white/80` 
                : 'text-slate-400 hover:bg-white/40'
            }`}
          >
            <span className={`text-2xl transition-all duration-700 ${activeSubject === sub.id ? 'scale-110 drop-shadow-[0_5px_15px_rgba(0,0,0,0.1)]' : 'group-hover/btn:scale-110'}`}>
              {sub.icon}
            </span>
            <span className={`hidden md:block font-extrabold text-[13px] tracking-tight transition-colors duration-300 ${activeSubject === sub.id ? 'text-slate-900' : 'text-slate-400'}`}>
              {sub.name}
            </span>
            {activeSubject === sub.id && (
              <div className={`absolute left-0 w-1.5 h-8 bg-${sub.color}-500 rounded-full hidden md:block shadow-[0_0_15px_rgba(0,0,0,0.2)]`}></div>
            )}
          </button>
        ))}
      </nav>

      <div className="p-8 border-t border-white/50">
        <div className="hidden md:flex flex-col gap-6 p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group/card transform hover:scale-[1.02] transition-all duration-500">
          <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-[60px]"></div>
          <div className="relative z-10 space-y-4">
            <div>
              <span className="text-[9px] font-black text-indigo-300 uppercase tracking-[0.4em] block mb-2">Target Year</span>
              <div className="flex items-baseline gap-2">
                 <span className="text-4xl font-black tracking-tighter">2026</span>
                 <span className="text-[10px] font-bold text-slate-400">BOARDS</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-slate-400">
                <span>Progress</span>
                <span className="text-indigo-400">58%</span>
              </div>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full w-[58%] rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
