// components/FullSubjectRevision.tsx
// Comprehensive CBSE Board Question Bank for Full Subject Revision

import React, { useState, useMemo } from 'react';
import { 
  getRevisionSubjectData, 
  getAvailableRevisionCategories 
} from '../services/revision/content.ts';
import { RevisionQuestion } from '../services/revision/types.ts';
import { StudyTheme, StudyFont, StudyFontSize } from './SubjectDashboard.tsx';
import { 
  Eye, 
  EyeOff, 
  Search, 
  CheckCircle2, 
  HelpCircle, 
  BookOpen, 
  Award, 
  Lightbulb, 
  ChevronDown, 
  ChevronUp, 
  Layers,
  Sparkles,
  Filter
} from 'lucide-react';

interface FullSubjectRevisionProps {
  subjectId: string;
  theme?: StudyTheme;
  font?: StudyFont;
  fontSize?: StudyFontSize;
}

export const FullSubjectRevision: React.FC<FullSubjectRevisionProps> = ({
  subjectId,
  theme = 'paper',
  font = 'sans',
  fontSize = 'md'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Questions');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [revealedQuestionIds, setRevealedQuestionIds] = useState<Set<string>>(new Set());

  const subjectData = useMemo(() => {
    return getRevisionSubjectData(subjectId);
  }, [subjectId]);

  const categories = useMemo(() => {
    return getAvailableRevisionCategories(subjectId);
  }, [subjectId]);

  // Filter questions based on category and search query
  const filteredQuestions = useMemo(() => {
    if (!subjectData) return [];

    let list = subjectData.questions;

    // Filter by category
    if (selectedCategory && selectedCategory !== 'All Questions') {
      list = list.filter(q => q.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(item => 
        item.question.toLowerCase().includes(q) ||
        item.chapterTitle.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.answer.solution.toLowerCase().includes(q) ||
        (item.yearTag && item.yearTag.toLowerCase().includes(q))
      );
    }

    return list;
  }, [subjectData, selectedCategory, searchQuery]);

  // Toggle independent answer visibility
  const toggleAnswer = (questionId: string) => {
    setRevealedQuestionIds(prev => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      return next;
    });
  };

  // Expand / Collapse all
  const expandAll = () => {
    if (!filteredQuestions) return;
    setRevealedQuestionIds(new Set(filteredQuestions.map(q => q.id)));
  };

  const collapseAll = () => {
    setRevealedQuestionIds(new Set());
  };

  const isAllExpanded = filteredQuestions.length > 0 && 
    filteredQuestions.every(q => revealedQuestionIds.has(q.id));

  // Theme styles
  const isSlate = theme === 'slate';
  const cardBg = isSlate ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200/90 text-slate-900';
  const headerBannerBg = isSlate ? 'bg-slate-800/80 border-slate-700' : 'bg-amber-50/70 border-amber-200/80';
  const solutionBg = isSlate 
    ? 'bg-slate-800/60 border-l-4 border-l-indigo-500 border-slate-700' 
    : 'bg-[#f8fafc] border-l-4 border-l-amber-700 border-slate-200';
  const formulaBoxBg = isSlate ? 'bg-slate-900/80 border-amber-500/40 text-amber-200' : 'bg-amber-50/80 border-amber-300 text-amber-950';
  const tipBoxBg = isSlate ? 'bg-indigo-950/40 border-indigo-700/60 text-indigo-200' : 'bg-blue-50/80 border-blue-200 text-blue-950';
  const rubricBoxBg = isSlate ? 'bg-emerald-950/40 border-emerald-700/60 text-emerald-200' : 'bg-emerald-50/80 border-emerald-300 text-emerald-950';

  if (!subjectData) {
    return (
      <div className="p-8 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
        <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-2" />
        <h3 className="text-base font-bold">Revision Bank Initializing</h3>
        <p className="text-xs text-slate-500 mt-1">Please select a valid subject from the menu to access the question bank.</p>
      </div>
    );
  }

  return (
    <div className={`space-y-6 w-full max-w-full pb-20 ${font === 'serif' ? 'font-serif' : font === 'display' ? 'font-display' : 'font-sans'}`}>
      
      {/* Subject Revision Header Banner */}
      <div className={`p-5 sm:p-7 rounded-2xl border ${headerBannerBg} shadow-xs transition-all`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-600 text-white text-[11px] font-black uppercase tracking-wider shadow-xs">
                CBSE Board Exam Question Bank
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-xs font-bold opacity-80">
                Class 12 • Entire Syllabus
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              {subjectData.subjectName} Full Subject Revision
            </h2>
            <p className="text-xs sm:text-sm opacity-80 max-w-3xl leading-relaxed">
              {subjectData.syllabusCovered} — Strictly aligned with CBSE previous years' question patterns, repeated concepts, derivations, numericals, and step-by-step marking rubrics.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
            <div className="px-4 py-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-300/70 dark:border-slate-700 text-center shadow-xs">
              <span className="text-xs font-bold opacity-60 block uppercase tracking-wider">Total Questions</span>
              <span className="text-xl font-black text-amber-700 dark:text-amber-400">
                {subjectData.questions.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Pills & Filters */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2 px-1">
          <div className="flex items-center gap-1.5 text-xs font-bold opacity-75">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter by Question Type:</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={isAllExpanded ? collapseAll : expandAll}
              className="text-[11px] font-bold px-3 py-1 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-slate-300/60 dark:border-slate-700 transition-all flex items-center gap-1"
            >
              {isAllExpanded ? (
                <>
                  <EyeOff className="w-3 h-3" />
                  <span>Hide All Answers</span>
                </>
              ) : (
                <>
                  <Eye className="w-3 h-3" />
                  <span>Reveal All Answers</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Scrollable Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 no-scrollbar">
          {categories.map(cat => {
            const isSelected = selectedCategory === cat;
            const count = cat === 'All Questions' 
              ? subjectData.questions.length 
              : subjectData.questions.filter(q => q.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all shrink-0 flex items-center gap-1.5 shadow-2xs ${
                  isSelected 
                    ? 'bg-amber-700 text-white shadow-sm' 
                    : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 opacity-75 hover:opacity-100 border border-slate-300/40 dark:border-slate-700'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/25 text-white' : 'bg-black/10 dark:bg-white/10'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Search Bar & Result Status */}
      <div className={`p-3 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-3 ${cardBg} shadow-xs`}>
        <div className="flex items-center gap-2.5 w-full flex-1">
          <Search className="w-4 h-4 opacity-50 shrink-0" />
          <input 
            type="text"
            placeholder="Search questions by concept, chapter name, derivation, or formula..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-xs font-semibold placeholder:opacity-50"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="text-xs px-2 py-0.5 rounded-md bg-black/10 dark:bg-white/10 hover:bg-black/20 font-bold shrink-0"
            >
              Clear
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0 text-xs font-bold opacity-75 self-end sm:self-auto">
          <span>Showing {filteredQuestions.length} of {subjectData.questions.length} questions</span>
        </div>
      </div>

      {/* Questions List */}
      {filteredQuestions.length === 0 ? (
        <div className={`p-12 text-center rounded-2xl border ${cardBg}`}>
          <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-2" />
          <p className="font-bold text-sm">No questions matched your current filters.</p>
          <button 
            onClick={() => { setSelectedCategory('All Questions'); setSearchQuery(''); }}
            className="mt-3 px-4 py-1.5 bg-amber-700 text-white text-xs font-bold rounded-xl shadow-xs"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredQuestions.map((q, idx) => {
            const isRevealed = revealedQuestionIds.has(q.id);

            return (
              <div 
                key={q.id}
                className={`rounded-2xl border ${cardBg} shadow-xs hover:shadow-md transition-all overflow-hidden`}
              >
                {/* Question Header */}
                <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 space-y-3.5">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-xl bg-amber-700 text-white font-black text-xs flex items-center justify-center shadow-xs">
                        Q{q.questionNumber || idx + 1}
                      </span>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-extrabold uppercase tracking-tight text-amber-800 dark:text-amber-400">
                            {q.chapterTitle}
                          </span>
                          {q.label && (
                            <span className="px-2 py-0.5 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-[10px] font-black uppercase tracking-wider">
                              {q.label}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {q.yearTag && (
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-black/5 dark:bg-white/10 opacity-80 border border-slate-300/40 dark:border-slate-700">
                          {q.yearTag}
                        </span>
                      )}
                      <span className="px-2.5 py-0.5 rounded-md bg-amber-700/15 border border-amber-700/30 text-amber-900 dark:text-amber-300 text-xs font-black">
                        {q.marks}
                      </span>
                    </div>
                  </div>

                  {/* Question Text */}
                  <div className="text-sm sm:text-base font-semibold leading-relaxed whitespace-pre-line pt-1">
                    {q.question}
                  </div>

                  {/* Multiple Choice / Assertion-Reason Options (if present) */}
                  {q.options && q.options.length > 0 && (
                    <div className="pt-2 grid grid-cols-1 gap-2">
                      {q.options.map((opt, optIdx) => (
                        <div 
                          key={optIdx}
                          className="px-3.5 py-2 rounded-xl bg-black/5 dark:bg-white/5 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-medium"
                        >
                          {opt}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Bar with Show/Hide Answer Button */}
                  <div className="pt-3 flex items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800/60">
                    <span className="text-[11px] font-bold opacity-60 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      <span>CBSE Marking Scheme & Step Solution</span>
                    </span>

                    <button
                      onClick={() => toggleAnswer(q.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 transition-all shadow-xs ${
                        isRevealed 
                          ? 'bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200' 
                          : 'bg-amber-700 hover:bg-amber-800 text-white shadow-amber-700/20 active:scale-95'
                      }`}
                    >
                      {isRevealed ? (
                        <>
                          <EyeOff className="w-4 h-4" />
                          <span>Hide Answer</span>
                          <ChevronUp className="w-3.5 h-3.5 opacity-70" />
                        </>
                      ) : (
                        <>
                          <Eye className="w-4 h-4" />
                          <span>Show Answer</span>
                          <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Answer Section (Revealed Smoothly) */}
                {isRevealed && (
                  <div className={`p-5 sm:p-7 space-y-5 border-t ${solutionBg}`}>
                    
                    {/* Final Answer / Direct Conclusion */}
                    {q.answer.finalAnswer && (
                      <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 dark:text-emerald-200 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Final Verified Answer</span>
                        </div>
                        <p className="text-xs sm:text-sm font-bold leading-relaxed">
                          {q.answer.finalAnswer}
                        </p>
                      </div>
                    )}

                    {/* Formula / Core Concept */}
                    {q.answer.formulaOrConcept && (
                      <div className={`p-4 rounded-xl border ${formulaBoxBg} space-y-1.5`}>
                        <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider opacity-85">
                          <Sparkles className="w-4 h-4 text-amber-600" />
                          <span>Key Formula & Core Scientific Principle</span>
                        </div>
                        <div className="text-xs sm:text-sm font-mono whitespace-pre-line leading-relaxed font-semibold">
                          {q.answer.formulaOrConcept}
                        </div>
                      </div>
                    )}

                    {/* Complete Step-by-Step Solution */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider opacity-80">
                        <BookOpen className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                        <span>Step-by-Step Board Exam Solution</span>
                      </div>
                      <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-line font-medium opacity-95">
                        {q.answer.solution}
                      </div>
                    </div>

                    {/* How to Approach in Exam (Examiner Advice) */}
                    {q.answer.examApproach && (
                      <div className={`p-4 rounded-xl border ${tipBoxBg} space-y-1.5`}>
                        <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-blue-900 dark:text-blue-300">
                          <Lightbulb className="w-4 h-4 text-blue-600" />
                          <span>Examiner Advice & Exam-Writing Approach</span>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed">
                          {q.answer.examApproach}
                        </p>
                      </div>
                    )}

                    {/* Marking Scheme Points */}
                    {q.answer.markingPoints && q.answer.markingPoints.length > 0 && (
                      <div className={`p-4 rounded-xl border ${rubricBoxBg} space-y-2`}>
                        <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-900 dark:text-emerald-300">
                          <Award className="w-4 h-4 text-emerald-600" />
                          <span>Official CBSE Marking Scheme Breakdown</span>
                        </div>
                        <ul className="space-y-1.5 text-xs">
                          {q.answer.markingPoints.map((point, ptIdx) => (
                            <li key={ptIdx} className="flex items-start gap-2">
                              <span className="text-emerald-600 font-bold">•</span>
                              <span className="font-semibold">{point}</span>
                            </li>
                          ))}
                        </ul>
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
  );
};
