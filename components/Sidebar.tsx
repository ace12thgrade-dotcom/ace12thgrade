import React, { useState, useEffect } from 'react';
import { Subject, SubjectId } from '../types.ts';
import { getActiveSubjects, CONTENT_UPDATE_EVENT, isAdminAuthenticated } from '../services/contentStore.ts';
import { ShieldCheck, PlusCircle } from 'lucide-react';

interface SidebarProps {
  activeSubject: SubjectId;
  setActiveSubject: (id: SubjectId) => void;
  onOpenAdmin: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSubject, setActiveSubject, onOpenAdmin }) => {
  const [subjects, setSubjects] = useState<Subject[]>(getActiveSubjects());
  const [isAdmin, setIsAdmin] = useState<boolean>(isAdminAuthenticated());

  useEffect(() => {
    const handleUpdate = () => {
      setSubjects(getActiveSubjects());
      setIsAdmin(isAdminAuthenticated());
    };
    window.addEventListener(CONTENT_UPDATE_EVENT, handleUpdate);
    return () => window.removeEventListener(CONTENT_UPDATE_EVENT, handleUpdate);
  }, []);

  return (
    <aside className="w-16 md:w-20 lg:w-56 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800/80 h-full sticky top-0 flex flex-col z-40 transition-colors shrink-0">
      {/* Brand Header */}
      <div className="p-3.5 lg:p-4 flex items-center justify-center lg:justify-start gap-3 border-b border-slate-100 dark:border-slate-800/50">
        <img 
          src="/logo.png" 
          alt="Ace12 Logo" 
          className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl shadow-md border border-amber-500/30 object-cover shrink-0 hover:scale-105 transition-transform" 
          referrerPolicy="no-referrer"
        />
        <div className="hidden lg:block">
          <span className="font-black text-lg text-slate-900 dark:text-white tracking-tight block leading-none">Ace12</span>
          <span className="text-[9px] font-bold text-amber-700 dark:text-amber-400 tracking-wider uppercase mt-1 block">Study Hub</span>
        </div>
      </div>
      
      {/* Subject Navigation */}
      <nav className="flex-1 px-2 lg:px-3 space-y-1.5 py-4 overflow-y-auto no-scrollbar">
        <div className="hidden lg:flex items-center justify-between px-3 pb-2 text-[10px] font-extrabold uppercase tracking-widest text-slate-600 dark:text-slate-400">
          <span>Subjects (CBSE 12)</span>
        </div>
        {subjects.map((sub) => {
          const isActive = activeSubject === sub.id;
          return (
            <button
              key={sub.id}
              onClick={() => setActiveSubject(sub.id)}
              className={`w-full flex items-center justify-center lg:justify-start gap-0 lg:gap-3.5 px-0 lg:px-3.5 py-2.5 rounded-xl transition-all font-bold text-xs ${
                isActive 
                  ? 'bg-amber-800 text-white shadow-sm' 
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900'
              }`}
            >
              <span className="text-lg shrink-0">
                {sub.icon}
              </span>
              <span className="hidden lg:block tracking-tight truncate">
                {sub.name}
              </span>
              {sub.isCustom && (
                <span className="hidden lg:inline ml-auto text-[9px] bg-amber-500/20 text-amber-600 dark:text-amber-400 px-1.5 py-0.5 rounded font-black">
                  NEW
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer Info & Admin Portal Entry */}
      <div className="p-2 lg:p-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
        {isAdmin ? (
          <button
            onClick={onOpenAdmin}
            className="w-full flex items-center justify-center lg:justify-start gap-2.5 px-2.5 py-2 rounded-xl text-xs font-bold transition-all bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 shadow-sm"
            title="Admin & Content Portal (Logged In)"
          >
            <ShieldCheck className="w-4 h-4 shrink-0 text-amber-600" />
            <span className="hidden lg:inline tracking-tight truncate">
              Admin: Active
            </span>
          </button>
        ) : null}

        <div className="hidden lg:block p-2 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-center relative group">
          <span className="text-[8px] font-black uppercase tracking-wider text-slate-600 dark:text-slate-400 block mb-0.5">
            CBSE 2026-27 Pattern
          </span>
          <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400">
            Offline Enabled
          </span>
          <button
            onClick={onOpenAdmin}
            className="opacity-0 group-hover:opacity-40 hover:!opacity-100 absolute right-1.5 bottom-1.5 text-slate-400 hover:text-amber-600 transition-all p-1"
            title="Admin Login (Ctrl+Shift+A)"
          >
            <ShieldCheck className="w-3 h-3" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

