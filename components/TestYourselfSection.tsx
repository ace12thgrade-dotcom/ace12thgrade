// components/TestYourselfSection.tsx
// Interactive 3-Question Practice Unit with Immediate Feedback,
// Mistake Book integration, Weak Topics tracking, and Retry functionality.
// 100% offline, local React state.

import React, { useState, useEffect } from 'react';
import { QuizQuestion, getQuizForChapter } from '../services/testYourselfService.ts';
import { 
  recordWeakTopicFailure, 
  saveToMistakeBook, 
  isQuestionInMistakeBook, 
  recordChapterQuizScore,
  ACE12_PROGRESS_EVENT 
} from '../services/studyProgressService.ts';
import { CheckCircle2, XCircle, RotateCcw, Bookmark, BookmarkCheck, HelpCircle, AlertTriangle, Lightbulb, Award } from 'lucide-react';
import { StudyTheme } from './SubjectDashboard.tsx';

interface TestYourselfSectionProps {
  chapterId: string;
  chapterTitle: string;
  subjectId: string;
  subjectName: string;
  theme?: StudyTheme;
  onOpenMistakeBook?: () => void;
}

export const TestYourselfSection: React.FC<TestYourselfSectionProps> = ({
  chapterId,
  chapterTitle,
  subjectId,
  subjectName,
  theme = 'paper'
}) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showExplanations, setShowExplanations] = useState<Record<string, boolean>>({});
  const [savedStatus, setSavedStatus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const list = getQuizForChapter(chapterId, chapterTitle, subjectName);
    setQuestions(list);
    setSelectedAnswers({});
    setShowExplanations({});

    // Check saved status for each
    const statusMap: Record<string, boolean> = {};
    list.forEach(q => {
      statusMap[q.id] = isQuestionInMistakeBook(q.id);
    });
    setSavedStatus(statusMap);
  }, [chapterId, chapterTitle, subjectName]);

  useEffect(() => {
    const handleUpdate = () => {
      const statusMap: Record<string, boolean> = {};
      questions.forEach(q => {
        statusMap[q.id] = isQuestionInMistakeBook(q.id);
      });
      setSavedStatus(statusMap);
    };
    window.addEventListener(ACE12_PROGRESS_EVENT, handleUpdate);
    return () => window.removeEventListener(ACE12_PROGRESS_EVENT, handleUpdate);
  }, [questions]);

  const handleSelectOption = (q: QuizQuestion, optionIndex: number) => {
    if (selectedAnswers[q.id] !== undefined) return; // Already answered

    const newSelected = { ...selectedAnswers, [q.id]: optionIndex };
    setSelectedAnswers(newSelected);
    setShowExplanations(prev => ({ ...prev, [q.id]: true }));

    const isCorrect = optionIndex === q.correctIndex;

    if (!isCorrect) {
      // Record failure into Weak Topics
      recordWeakTopicFailure(
        subjectId,
        subjectName,
        chapterId,
        chapterTitle,
        q.topic,
        q.question,
        q.explanation
      );
    }

    // Check overall progress
    const totalAnswered = Object.keys(newSelected).length;
    if (totalAnswered === questions.length) {
      let correctCount = 0;
      questions.forEach(item => {
        if (newSelected[item.id] === item.correctIndex) {
          correctCount++;
        }
      });
      recordChapterQuizScore(subjectId, chapterId, correctCount, questions.length);
    }
  };

  const handleRetry = (qId: string) => {
    setSelectedAnswers(prev => {
      const next = { ...prev };
      delete next[qId];
      return next;
    });
    setShowExplanations(prev => ({ ...prev, [qId]: false }));
  };

  const handleToggleMistakeBook = (q: QuizQuestion) => {
    const isSaved = savedStatus[q.id];
    const newSaved = saveToMistakeBook({
      id: q.id,
      subjectId,
      subjectName,
      chapterId,
      chapterTitle,
      questionText: q.question,
      answerText: `Option ${['A', 'B', 'C', 'D'][q.correctIndex]}: ${q.options[q.correctIndex]}\n\nExplanation: ${q.explanation}`,
      marks: q.marks,
      year: 'Practice & Board Blueprint',
      questionType: 'Test Yourself MCQ',
      markingScheme: q.boardAnswerTip,
      savedAt: Date.now(),
      source: 'test_yourself'
    });
    setSavedStatus(prev => ({ ...prev, [q.id]: newSaved }));
  };

  const totalAnswered = Object.keys(selectedAnswers).length;
  const correctCount = questions.filter(q => selectedAnswers[q.id] === q.correctIndex).length;

  return (
    <div className="space-y-6 my-8 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-amber-500/30 bg-amber-500/[0.03] dark:bg-amber-500/[0.02]">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-amber-500/20">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-600/20 text-amber-900 dark:text-amber-200 border border-amber-500/30 text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5">
              <span>🎯</span> Test Yourself • 3 Practice Questions
            </span>
            <span className="text-xs font-bold opacity-75">
              • Immediate Feedback & Mistake Tracking
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
            Check Your Mastery for {chapterTitle}
          </h3>
          <p className="text-xs opacity-75 mt-0.5">
            Real CBSE Class 12 questions. Incorrect responses are automatically recorded in your Weak Topics.
          </p>
        </div>

        {totalAnswered > 0 && (
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-amber-500/30 text-xs font-bold shadow-xs">
              <span className="opacity-70">Score: </span>
              <span className="font-black text-amber-700 dark:text-amber-400">
                {correctCount} / {questions.length} Correct
              </span>
            </div>
            {totalAnswered === questions.length && (
              <button
                onClick={() => {
                  setSelectedAnswers({});
                  setShowExplanations({});
                }}
                className="px-3 py-1.5 rounded-xl bg-amber-800 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs hover:bg-amber-700 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {questions.map((q, idx) => {
          const selected = selectedAnswers[q.id];
          const isAnswered = selected !== undefined;
          const isCorrect = isAnswered && selected === q.correctIndex;
          const isSaved = !!savedStatus[q.id];

          return (
            <div
              key={q.id}
              className={`p-4 sm:p-6 rounded-2xl border transition-all ${
                !isAnswered
                  ? 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800'
                  : isCorrect
                  ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800/80'
                  : 'bg-rose-50/40 dark:bg-rose-950/20 border-rose-300 dark:border-rose-800/80'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shadow-xs ${
                    !isAnswered
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
                      : isCorrect
                      ? 'bg-emerald-600 text-white'
                      : 'bg-rose-600 text-white'
                  }`}>
                    {idx + 1}
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider opacity-60 block">
                      {q.topic}
                    </span>
                    <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400">
                      {q.marks}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Save to Mistake Book Button */}
                  <button
                    onClick={() => handleToggleMistakeBook(q)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs ${
                      isSaved
                        ? 'bg-amber-600 text-white border border-amber-600'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-amber-400 border border-slate-200 dark:border-slate-700'
                    }`}
                    title={isSaved ? 'Saved in Mistake Book' : 'Save to Mistake Book'}
                  >
                    {isSaved ? (
                      <>
                        <BookmarkCheck className="w-3.5 h-3.5 text-white" />
                        <span className="hidden sm:inline">★ Saved in Mistake Book</span>
                        <span className="sm:hidden">★ Saved</span>
                      </>
                    ) : (
                      <>
                        <Bookmark className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">☆ Save to Mistake Book</span>
                        <span className="sm:hidden">☆ Save</span>
                      </>
                    )}
                  </button>

                  {isAnswered && (
                    <button
                      onClick={() => handleRetry(q.id)}
                      className="p-1.5 text-slate-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors rounded-lg hover:bg-black/5"
                      title="Retry this question"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Question Text */}
              <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 mb-4 leading-relaxed">
                {q.question}
              </p>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                {q.options.map((opt, oIdx) => {
                  let optStyle = 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 hover:border-amber-400';

                  if (isAnswered) {
                    if (oIdx === q.correctIndex) {
                      optStyle = 'bg-emerald-100 dark:bg-emerald-950/70 border-emerald-500 text-emerald-950 dark:text-emerald-200 font-black shadow-xs';
                    } else if (selected === oIdx) {
                      optStyle = 'bg-rose-100 dark:bg-rose-950/70 border-rose-500 text-rose-950 dark:text-rose-200 font-bold';
                    } else {
                      optStyle = 'opacity-50 border-slate-200 dark:border-slate-800';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectOption(q, oIdx)}
                      disabled={isAnswered}
                      className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-start justify-between gap-2 ${optStyle}`}
                    >
                      <span className="flex-1 leading-snug">{opt}</span>
                      {isAnswered && oIdx === q.correctIndex && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      )}
                      {isAnswered && selected === oIdx && oIdx !== q.correctIndex && (
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback and Explanation */}
              {isAnswered && showExplanations[q.id] && (
                <div className="space-y-3 pt-3 border-t border-slate-200/80 dark:border-slate-800 text-xs animate-in fade-in duration-300">
                  <div className={`flex items-center gap-2 font-black ${isCorrect ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}`}>
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>Correct! Mastered topic.</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 shrink-0" />
                        <span>Incorrect. Added to Weak Topics for review.</span>
                      </>
                    )}
                  </div>

                  {/* Explanation Card */}
                  <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                      💡 Official CBSE Explanation:
                    </span>
                    <p className="leading-relaxed font-medium text-slate-800 dark:text-slate-200">
                      {q.explanation}
                    </p>
                  </div>

                  {/* Extra Study Helpers (Remember This, Common Mistake, Board Tip) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {q.rememberThis && (
                      <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800">
                        <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-1.5 mb-1">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                          <span>Remember This</span>
                        </span>
                        <p className="text-[11px] font-semibold text-amber-950 dark:text-amber-200 leading-relaxed">
                          {q.rememberThis}
                        </p>
                      </div>
                    )}

                    {q.commonMistake && (
                      <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800">
                        <span className="text-[10px] font-black uppercase tracking-wider text-rose-900 dark:text-rose-300 flex items-center gap-1.5 mb-1">
                          <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                          <span>Common Mistake</span>
                        </span>
                        <p className="text-[11px] font-semibold text-rose-950 dark:text-rose-200 leading-relaxed">
                          {q.commonMistake}
                        </p>
                      </div>
                    )}
                  </div>

                  {q.boardAnswerTip && (
                    <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-300 dark:border-indigo-800">
                      <span className="text-[10px] font-black uppercase tracking-wider text-indigo-900 dark:text-indigo-300 flex items-center gap-1.5 mb-1">
                        <Award className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Board Answer Presentation Tip</span>
                      </span>
                      <p className="text-[11px] font-semibold text-indigo-950 dark:text-indigo-200 leading-relaxed">
                        {q.boardAnswerTip}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
