// components/MyStudyDashboard.tsx
// Comprehensive "My Study" Hub containing:
// 1. Continue Learning
// 2. Recently Opened
// 3. Today's Focus
// 4. Quick Revision (Formulas, Derivations, Top PYQs, Common Mistakes)
// 5. Weak Topics (with "Practice Again")
// 6. Mistake Book (Saved questions with solutions & removal)

import React, { useState, useEffect } from 'react';
import { 
  getRecentlyOpened, 
  getLastActiveChapter, 
  getMistakeBook, 
  getWeakTopics, 
  getTodayGoals, 
  toggleTodayGoal, 
  removeFromMistakeBook, 
  resolveWeakTopic,
  SavedMistakeItem,
  WeakTopicItem,
  RecentChapterItem,
  TodayGoalItem,
  ACE12_PROGRESS_EVENT 
} from '../services/studyProgressService.ts';
import { CORE_DERIVATIONS, CORE_COMMON_MISTAKES, getAllCuratedFormulas, getHighFrequencyPYQs } from '../services/quickRevisionData.ts';
import { Subject, Chapter, SubjectId } from '../types.ts';
import { FormulaCard } from './FormulaCard.tsx';
import { 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  Circle, 
  AlertCircle, 
  Bookmark, 
  Trash2, 
  Zap, 
  ArrowRight, 
  RotateCcw, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  Layers, 
  Sparkles,
  Search,
  Filter
} from 'lucide-react';

interface MyStudyDashboardProps {
  subjects: Subject[];
  onSelectChapter: (subjectId: SubjectId, chapter: Chapter) => void;
  onSelectSubject: (subjectId: SubjectId) => void;
}

export const MyStudyDashboard: React.FC<MyStudyDashboardProps> = ({
  subjects,
  onSelectChapter,
  onSelectSubject
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'quick_revision' | 'weak_topics' | 'mistake_book'>('overview');
  const [recentChapters, setRecentChapters] = useState<RecentChapterItem[]>([]);
  const [lastActive, setLastActive] = useState<RecentChapterItem | null>(null);
  const [mistakeBook, setMistakeBook] = useState<SavedMistakeItem[]>([]);
  const [weakTopics, setWeakTopics] = useState<WeakTopicItem[]>([]);
  const [todayGoals, setTodayGoals] = useState<TodayGoalItem[]>([]);

  // Quick revision tab inner selection
  const [quickRevSection, setQuickRevSection] = useState<'formulas' | 'derivations' | 'pyqs' | 'mistakes'>('formulas');
  const [quickFilter, setQuickFilter] = useState('');
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [mistakeFilterSubject, setMistakeFilterSubject] = useState<string>('all');

  const loadData = () => {
    setRecentChapters(getRecentlyOpened());
    setLastActive(getLastActiveChapter());
    setMistakeBook(getMistakeBook());
    setWeakTopics(getWeakTopics());
    setTodayGoals(getTodayGoals());
  };

  useEffect(() => {
    loadData();
    window.addEventListener(ACE12_PROGRESS_EVENT, loadData);
    return () => window.removeEventListener(ACE12_PROGRESS_EVENT, loadData);
  }, []);

  // Resume learning helper
  const handleResume = (subjectId: string, chapterId: string) => {
    const sub = subjects.find(s => s.id === subjectId);
    if (!sub) return;
    const ch = sub.chapters.find(c => c.id === chapterId);
    if (ch) {
      onSelectChapter(subjectId, ch);
    } else {
      onSelectSubject(subjectId);
    }
  };

  const handleToggleGoal = (id: string) => {
    toggleTodayGoal(id);
    setTodayGoals(getTodayGoals());
  };

  const handleRemoveMistake = (id: string) => {
    removeFromMistakeBook(id);
    setMistakeBook(getMistakeBook());
  };

  const handleResolveWeakTopic = (id: string) => {
    resolveWeakTopic(id);
    setWeakTopics(getWeakTopics());
  };

  const toggleSolution = (id: string) => {
    setRevealedSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Curated quick revision datasets
  const allFormulas = getAllCuratedFormulas();
  const topPYQs = getHighFrequencyPYQs();

  // Filtered mistake book questions
  const filteredMistakes = mistakeBook.filter(item => {
    if (mistakeFilterSubject !== 'all' && item.subjectId !== mistakeFilterSubject) return false;
    return true;
  });

  return (
    <div className="p-4 lg:p-10 max-w-7xl mx-auto w-full animate-in fade-in duration-300 h-full flex flex-col overflow-y-auto">
      {/* Header Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-3xl shadow-sm">
            🎯
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                Personal Study Room
              </span>
              <span className="text-xs opacity-70 font-semibold">• Offline Ready</span>
            </div>
            <h1 className="text-2xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              My Study Dashboard
            </h1>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 self-start lg:self-auto overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            📊 Overview
          </button>
          <button
            onClick={() => setActiveTab('quick_revision')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'quick_revision'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            ⚡ Quick Revision
          </button>
          <button
            onClick={() => setActiveTab('weak_topics')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'weak_topics'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span>⚠️ Weak Topics</span>
            {weakTopics.length > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-rose-500 text-white text-[9px] font-black">
                {weakTopics.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('mistake_book')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'mistake_book'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span>☆ Mistake Book</span>
            {mistakeBook.length > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-amber-500 text-white text-[9px] font-black">
                {mistakeBook.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* --- OVERVIEW TAB --- */}
      {activeTab === 'overview' && (
        <div className="space-y-8 pb-20">
          {/* Top Row: Continue Learning & Today's Focus */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Continue Learning Card */}
            <div className="lg:col-span-1 p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-amber-700 via-amber-800 to-amber-950 text-white shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <span className="px-2.5 py-1 rounded-full bg-white/20 border border-white/20 text-[10px] font-black uppercase tracking-wider inline-block mb-3">
                  🚀 Continue Learning
                </span>
                {lastActive ? (
                  <>
                    <span className="text-xs uppercase font-extrabold text-amber-200 tracking-wider block mb-1">
                      {lastActive.subjectName}
                    </span>
                    <h3 className="text-xl font-black tracking-tight leading-snug mb-2">
                      {lastActive.chapterTitle}
                    </h3>
                    <p className="text-xs text-amber-100/80 mb-6">
                      Pick up right where you left off with verified theory, formulas, and solved PYQs.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-black tracking-tight leading-snug mb-2">
                      Ready to Start Studying?
                    </h3>
                    <p className="text-xs text-amber-100/80 mb-6">
                      Explore Physics, Chemistry, Maths, and more. Your progress will be saved here automatically.
                    </p>
                  </>
                )}
              </div>

              <div className="relative z-10 pt-4 border-t border-white/15">
                {lastActive ? (
                  <button
                    onClick={() => handleResume(lastActive.subjectId, lastActive.chapterId)}
                    className="w-full py-2.5 px-4 bg-white hover:bg-amber-50 text-amber-950 font-black rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95"
                  >
                    <span>Resume Chapter</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => onSelectSubject('physics')}
                    className="w-full py-2.5 px-4 bg-white hover:bg-amber-50 text-amber-950 font-black rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95"
                  >
                    <span>Open Physics Chapter 1</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Today's Focus Card */}
            <div className="lg:col-span-2 p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-0.5">
                      Daily Recommendation
                    </span>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                      <span>🎯</span> Today's Focus (High-Yield Goals)
                    </h3>
                  </div>
                  <span className="text-xs font-bold opacity-60">
                    {todayGoals.filter(g => g.completed).length} / {todayGoals.length} Completed
                  </span>
                </div>

                <div className="space-y-2.5">
                  {todayGoals.map((goal) => (
                    <div
                      key={goal.id}
                      className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-all ${
                        goal.completed
                          ? 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-60'
                          : 'bg-white dark:bg-slate-900/60 border-amber-200/80 dark:border-amber-900/40 hover:border-amber-400'
                      }`}
                    >
                      <button
                        onClick={() => handleToggleGoal(goal.id)}
                        className="flex items-center gap-3 text-left flex-1 min-w-0"
                      >
                        {goal.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-400 hover:text-amber-600 shrink-0" />
                        )}
                        <div className="min-w-0 flex-1">
                          <p className={`text-xs font-bold truncate ${goal.completed ? 'line-through text-slate-500' : 'text-slate-900 dark:text-white'}`}>
                            {goal.title}
                          </p>
                          <span className="text-[10px] text-amber-700 dark:text-amber-400 font-semibold">
                            {goal.chapterTitle} • {goal.priority} Priority
                          </span>
                        </div>
                      </button>

                      <button
                        onClick={() => handleResume(goal.subjectId, goal.chapterId)}
                        className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300/80 dark:border-amber-800 hover:bg-amber-100 shrink-0 transition-colors"
                      >
                        Open →
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Targets align with CBSE 2026-27 weightage blueprint.</span>
                <button
                  onClick={() => setActiveTab('quick_revision')}
                  className="font-bold text-amber-700 dark:text-amber-400 hover:underline"
                >
                  Quick Revision →
                </button>
              </div>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <button
              onClick={() => setActiveTab('mistake_book')}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left hover:border-amber-400 transition-all shadow-xs"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl">☆</span>
                <span className="text-[10px] font-black uppercase text-amber-600 px-2 py-0.5 rounded bg-amber-500/10">
                  Mistake Book
                </span>
              </div>
              <div className="text-2xl font-black text-slate-900 dark:text-white">
                {mistakeBook.length}
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">Saved Questions</p>
            </button>

            <button
              onClick={() => setActiveTab('weak_topics')}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left hover:border-rose-400 transition-all shadow-xs"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl">⚠️</span>
                <span className="text-[10px] font-black uppercase text-rose-600 px-2 py-0.5 rounded bg-rose-500/10">
                  Weak Topics
                </span>
              </div>
              <div className="text-2xl font-black text-slate-900 dark:text-white">
                {weakTopics.length}
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">Topics Needing Review</p>
            </button>

            <button
              onClick={() => {
                setActiveTab('quick_revision');
                setQuickRevSection('formulas');
              }}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left hover:border-amber-400 transition-all shadow-xs"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl">⚡</span>
                <span className="text-[10px] font-black uppercase text-amber-600 px-2 py-0.5 rounded bg-amber-500/10">
                  Formula Vault
                </span>
              </div>
              <div className="text-2xl font-black text-slate-900 dark:text-white">
                {allFormulas.length}+
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">Core Equations</p>
            </button>

            <button
              onClick={() => {
                setActiveTab('quick_revision');
                setQuickRevSection('derivations');
              }}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left hover:border-indigo-400 transition-all shadow-xs"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl">🔬</span>
                <span className="text-[10px] font-black uppercase text-indigo-600 px-2 py-0.5 rounded bg-indigo-500/10">
                  Derivations
                </span>
              </div>
              <div className="text-2xl font-black text-slate-900 dark:text-white">
                {CORE_DERIVATIONS.length}
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">High-Yield Proofs</p>
            </button>
          </div>

          {/* Recently Opened Modules */}
          <div className="p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Recently Opened Chapters</span>
              </h3>
              <span className="text-xs text-slate-400 font-semibold">
                Stored Locally in Browser
              </span>
            </div>

            {recentChapters.length === 0 ? (
              <div className="p-8 text-center rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-dashed border-slate-200 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-600 dark:text-slate-400">
                  No chapters opened yet. Select any subject from the sidebar to begin!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {recentChapters.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleResume(item.subjectId, item.chapterId)}
                    className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-left hover:border-amber-500 transition-all flex items-center justify-between gap-3 group"
                  >
                    <div className="min-w-0">
                      <span className="text-[9px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-0.5">
                        {item.subjectName}
                      </span>
                      <h4 className="text-xs font-black text-slate-900 dark:text-white truncate group-hover:text-amber-700 dark:group-hover:text-amber-400">
                        {item.chapterTitle}
                      </h4>
                      <span className="text-[10px] text-slate-400">
                        {new Date(item.visitedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- QUICK REVISION TAB --- */}
      {activeTab === 'quick_revision' && (
        <div className="space-y-6 pb-20">
          {/* Quick Revision Header with Sub-tabs */}
          <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-1">
                Fast Exam Prep
              </span>
              <h2 className="text-xl font-black text-slate-900 dark:text-white">
                Quick Revision Vault
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Aggregated from existing CBSE 12 course content without internet or AI delays.
              </p>
            </div>

            <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 w-full sm:w-auto overflow-x-auto no-scrollbar">
              <button
                onClick={() => setQuickRevSection('formulas')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  quickRevSection === 'formulas'
                    ? 'bg-amber-800 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                ⚡ Formulas ({allFormulas.length})
              </button>
              <button
                onClick={() => setQuickRevSection('derivations')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  quickRevSection === 'derivations'
                    ? 'bg-amber-800 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                🔬 Derivations ({CORE_DERIVATIONS.length})
              </button>
              <button
                onClick={() => setQuickRevSection('pyqs')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  quickRevSection === 'pyqs'
                    ? 'bg-amber-800 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                🎯 Top PYQs ({topPYQs.length})
              </button>
              <button
                onClick={() => setQuickRevSection('mistakes')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  quickRevSection === 'mistakes'
                    ? 'bg-amber-800 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                ⚠️ Common Traps ({CORE_COMMON_MISTAKES.length})
              </button>
            </div>
          </div>

          {/* Quick Search Bar */}
          <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-2 shadow-xs">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`Filter ${quickRevSection}...`}
              value={quickFilter}
              onChange={e => setQuickFilter(e.target.value)}
              className="w-full bg-transparent outline-none text-xs font-semibold placeholder:text-slate-400"
            />
            {quickFilter && (
              <button
                onClick={() => setQuickFilter('')}
                className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-bold"
              >
                Clear
              </button>
            )}
          </div>

          {/* SECTION: FORMULAS */}
          {quickRevSection === 'formulas' && (
            <div className="grid grid-cols-1 gap-4">
              {allFormulas
                .filter(item => {
                  if (!quickFilter) return true;
                  const q = quickFilter.toLowerCase();
                  return (
                    item.formula.title.toLowerCase().includes(q) ||
                    item.formula.equation.toLowerCase().includes(q) ||
                    item.chapterTitle.toLowerCase().includes(q)
                  );
                })
                .map((f, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-[10px] font-black uppercase text-amber-700 dark:text-amber-400 px-2.5 py-0.5 rounded-full bg-amber-500/10 inline-block">
                      {f.subject} • {f.chapterTitle}
                    </span>
                    <FormulaCard formula={f.formula} theme="paper" />
                  </div>
                ))}
            </div>
          )}

          {/* SECTION: DERIVATIONS */}
          {quickRevSection === 'derivations' && (
            <div className="space-y-4">
              {CORE_DERIVATIONS
                .filter(d => {
                  if (!quickFilter) return true;
                  const q = quickFilter.toLowerCase();
                  return (
                    d.title.toLowerCase().includes(q) ||
                    d.chapterTitle.toLowerCase().includes(q) ||
                    d.finalFormula.toLowerCase().includes(q)
                  );
                })
                .map(d => (
                  <div
                    key={d.id}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300">
                          {d.subjectName} • {d.chapterTitle}
                        </span>
                        <h4 className="text-base font-black text-slate-900 dark:text-white mt-1">
                          {d.title}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="px-2.5 py-1 bg-amber-500/10 text-amber-800 dark:text-amber-300 rounded-lg text-[10px] font-bold border border-amber-500/20">
                          {d.boardMarks}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-400">
                          {d.frequency}
                        </span>
                      </div>
                    </div>

                    {/* Step by Step Breakdown */}
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 mb-3 space-y-1.5 text-xs font-medium text-slate-800 dark:text-slate-200">
                      {d.derivationSummary.map((step, sIdx) => (
                        <p key={sIdx} className="leading-relaxed">
                          {step}
                        </p>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-black uppercase text-amber-900 dark:text-amber-300 block">
                          Final Result & Vector Statement:
                        </span>
                        <code className="text-xs font-mono font-black text-amber-950 dark:text-amber-200">
                          {d.finalFormula}
                        </code>
                      </div>
                      <span className="text-[11px] font-semibold text-amber-800 dark:text-amber-300 italic">
                        Tip: {d.examinerTip}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* SECTION: TOP PYQS */}
          {quickRevSection === 'pyqs' && (
            <div className="space-y-4">
              {topPYQs.map(q => {
                const isRevealed = revealedSolutions[q.id];
                return (
                  <div
                    key={q.id}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-600 text-white">
                          {q.yearTag}
                        </span>
                        <span className="text-xs font-bold text-slate-500">
                          {q.chapterTitle} • {q.marks}
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                        {q.label}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-3 leading-relaxed">
                      {q.question}
                    </p>

                    <button
                      onClick={() => toggleSolution(q.id)}
                      className="px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 transition-colors"
                    >
                      {isRevealed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      <span>{isRevealed ? 'Hide Solution' : 'View Verified Board Solution'}</span>
                    </button>

                    {isRevealed && (
                      <div className="mt-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-2 animate-in fade-in duration-200">
                        <span className="text-[10px] font-black uppercase text-indigo-700 dark:text-indigo-300 block">
                          Stepwise Solution:
                        </span>
                        <p className="font-medium text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-wrap">
                          {q.answer.solution}
                        </p>
                        {q.answer.examApproach && (
                          <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-300 text-[11px] font-semibold">
                            💡 Examiner Insight: {q.answer.examApproach}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* SECTION: COMMON MISTAKES */}
          {quickRevSection === 'mistakes' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CORE_COMMON_MISTAKES.map(m => (
                <div
                  key={m.id}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900/40 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300">
                        {m.chapterTitle}
                      </span>
                      <span className="text-[10px] font-bold text-rose-600">
                        {m.boardPenalty}
                      </span>
                    </div>
                    <h4 className="text-sm font-black text-slate-900 dark:text-white mb-2">
                      {m.topic}
                    </h4>
                    <div className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/50 mb-3 text-xs">
                      <span className="font-black text-rose-800 dark:text-rose-300 block mb-0.5">
                        ❌ What Students Do Wrong:
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 font-medium">
                        {m.whatStudentsDoWrong}
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/50 text-xs">
                      <span className="font-black text-emerald-800 dark:text-emerald-300 block mb-0.5">
                        ✅ Correct Approach:
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 font-medium">
                        {m.correctApproach}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* --- WEAK TOPICS TAB --- */}
      {activeTab === 'weak_topics' && (
        <div className="space-y-6 pb-20">
          <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-rose-700 dark:text-rose-400 block mb-1">
                Targeted Practice
              </span>
              <h2 className="text-xl font-black text-slate-900 dark:text-white">
                Weak Topics & Improvement Areas ({weakTopics.length})
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Automatically recorded whenever a "Test Yourself" practice question is answered incorrectly.
              </p>
            </div>
          </div>

          {weakTopics.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <Award className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
              <h3 className="text-base font-black text-slate-900 dark:text-white mb-1">
                No Weak Topics Recorded!
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto mb-4">
                Great job! Try taking the "Test Yourself" 3-question quizzes inside any chapter. If you get any questions wrong, they'll appear here for revision.
              </p>
              <button
                onClick={() => onSelectSubject('physics')}
                className="px-4 py-2 bg-amber-800 text-white rounded-xl text-xs font-bold"
              >
                Practice Chapters →
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {weakTopics.map(w => (
                <div
                  key={w.id}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-rose-200/80 dark:border-rose-900/40 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300">
                        {w.subjectName} • {w.chapterTitle}
                      </span>
                      <span className="text-[10px] font-bold text-rose-600 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded-full border border-rose-200 dark:border-rose-900">
                        {w.wrongCount}x Pitfall
                      </span>
                    </div>

                    <h4 className="text-sm font-black text-slate-900 dark:text-white mb-2">
                      {w.topicName}
                    </h4>

                    {w.lastQuestionText && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mb-3 line-clamp-2 italic">
                        "{w.lastQuestionText}"
                      </p>
                    )}

                    {w.lastExplanation && (
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs mb-3">
                        <span className="text-[10px] font-black uppercase text-amber-700 dark:text-amber-400 block mb-0.5">
                          💡 Key Concept to Master:
                        </span>
                        <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                          {w.lastExplanation}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => handleResolveWeakTopic(w.id)}
                      className="text-xs text-slate-400 hover:text-emerald-600 font-bold transition-colors"
                    >
                      ✓ Mark as Mastered
                    </button>

                    <button
                      onClick={() => handleResume(w.subjectId, w.chapterId)}
                      className="px-3.5 py-1.5 bg-amber-800 hover:bg-amber-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Practice Again</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* --- MISTAKE BOOK TAB --- */}
      {activeTab === 'mistake_book' && (
        <div className="space-y-6 pb-20">
          <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-1">
                Saved Question Bank
              </span>
              <h2 className="text-xl font-black text-slate-900 dark:text-white">
                ☆ Mistake Book ({mistakeBook.length})
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Questions saved via "☆ Save to Mistake Book" from Chapter PYQs and Test Yourself units.
              </p>
            </div>

            {/* Subject Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={mistakeFilterSubject}
                onChange={e => setMistakeFilterSubject(e.target.value)}
                className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-800 dark:text-slate-200 outline-none"
              >
                <option value="all">All Subjects ({mistakeBook.length})</option>
                {subjects.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.name} ({mistakeBook.filter(m => m.subjectId === s.id).length})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {filteredMistakes.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <Bookmark className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto mb-3" />
              <h3 className="text-base font-black text-slate-900 dark:text-white mb-1">
                No Questions Saved in Mistake Book
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto mb-4">
                Whenever you encounter a tricky PYQ or mistake in Test Yourself, click "☆ Save to Mistake Book" to store it here for 1-click revision before exams.
              </p>
              <button
                onClick={() => onSelectSubject('physics')}
                className="px-4 py-2 bg-amber-800 text-white rounded-xl text-xs font-bold"
              >
                Browse Solved PYQs →
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredMistakes.map(item => {
                const isRevealed = revealedSolutions[item.id];
                return (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-600 text-white">
                          {item.subjectName}
                        </span>
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                          {item.chapterTitle} {item.marks ? `• ${item.marks}` : ''}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleRemoveMistake(item.id)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors rounded-lg hover:bg-black/5"
                          title="Remove from Mistake Book"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-3 leading-relaxed">
                      {item.questionText}
                    </p>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleSolution(item.id)}
                        className="px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 transition-colors"
                      >
                        {isRevealed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        <span>{isRevealed ? 'Hide Solution' : 'View Solution & Marking Scheme'}</span>
                      </button>

                      {item.chapterId && (
                        <button
                          onClick={() => handleResume(item.subjectId, item.chapterId!)}
                          className="text-xs font-bold text-amber-700 dark:text-amber-400 hover:underline"
                        >
                          Go to Chapter Notes →
                        </button>
                      )}
                    </div>

                    {isRevealed && (
                      <div className="mt-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-2 animate-in fade-in duration-200">
                        <span className="text-[10px] font-black uppercase text-indigo-700 dark:text-indigo-300 block">
                          Verified Board Solution:
                        </span>
                        <p className="font-medium text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-wrap">
                          {item.answerText}
                        </p>
                        {item.markingScheme && (
                          <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-900 dark:text-emerald-300 text-[11px] font-semibold">
                            ✅ Step Marking: {item.markingScheme}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
