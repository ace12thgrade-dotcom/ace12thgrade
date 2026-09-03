import React, { useState, useEffect, useRef } from 'react';
import { 
  TeacherLecture, 
  TeacherPoint, 
  PriorityFilterMode, 
  TeacherAudioEngine 
} from '../services/teacherReaderService.ts';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX, 
  X, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Zap, 
  List, 
  Award,
  BookOpen
} from 'lucide-react';

interface TeacherReaderModalProps {
  lecture: TeacherLecture;
  isOpen: boolean;
  onClose: () => void;
}

export const TeacherReaderModal: React.FC<TeacherReaderModalProps> = ({
  lecture,
  isOpen,
  onClose
}) => {
  const [engine] = useState(() => new TeacherAudioEngine());
  const [filter, setFilter] = useState<PriorityFilterMode>('high_yield');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentPoint, setCurrentPoint] = useState<TeacherPoint | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [speed, setSpeed] = useState(1.0);
  const [showPlaylist, setShowPlaylist] = useState(false);

  // Initialize engine with lecture
  useEffect(() => {
    if (!isOpen) {
      engine.stop();
      return;
    }

    engine.setLecture(lecture, filter);
    const pts = engine.getFilteredPoints();
    setTotalPoints(pts.length);
    setCurrentIndex(0);
    setCurrentPoint(pts[0] || null);

    engine.onStateChange = (speaking, paused) => {
      setIsSpeaking(speaking);
      setIsPaused(paused);
    };

    engine.onPointChange = (point, idx, total) => {
      setCurrentPoint(point);
      setCurrentIndex(idx);
      setTotalPoints(total);
    };

    engine.onComplete = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    // Auto-start teacher lecture on open
    engine.play();

    return () => {
      engine.stop();
    };
  }, [isOpen, lecture, engine]);

  // Handle filter changes
  const handleFilterChange = (newFilter: PriorityFilterMode) => {
    setFilter(newFilter);
    engine.setFilter(newFilter);
    const pts = engine.getFilteredPoints();
    setTotalPoints(pts.length);
    setCurrentIndex(0);
    setCurrentPoint(pts[0] || null);
    if (isSpeaking) {
      engine.playPoint(0);
    }
  };

  const handlePlayPause = () => {
    if (isSpeaking && !isPaused) {
      engine.pause();
    } else if (isPaused) {
      engine.resume();
    } else {
      engine.play();
    }
  };

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
    engine.setRate(newSpeed);
  };

  const handleJumpToPoint = (index: number) => {
    engine.jumpTo(index);
  };

  if (!isOpen) return null;

  const filteredPoints = engine.getFilteredPoints();
  const progressPercent = totalPoints > 0 ? Math.min(100, Math.round(((currentIndex + 1) / totalPoints) * 100)) : 0;

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'must_know':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-red-500/15 text-red-700 dark:text-red-400 border border-red-500/30">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            🔴 Must Know • Exam Critical
          </span>
        );
      case 'important':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            🟡 Important • High Probability
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            🟢 Quick Mention
          </span>
        );
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'formula': return '📐 Formula & When-To-Apply';
      case 'law': return '⚖️ Fundamental Law / Principle';
      case 'reaction': return '⚗️ Named Reaction & Catalyst';
      case 'derivation': return '📝 Step-by-Step Derivation';
      case 'mistake': return '⚠️ Fatal Examiner Trap';
      case 'diagram': return '🧪 Essential Board Diagram';
      case 'pyq': return '🎯 Numerical & PYQ Strategy';
      case 'trend': return '📈 Recent CBSE Trend';
      case 'definition': return '📖 Key Definition & Keyword';
      default: return '💡 Master Concept';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-amber-600/10 via-slate-500/5 to-indigo-600/10 dark:from-amber-500/15 dark:to-indigo-500/15 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-700 text-white flex items-center justify-center text-xl shadow-md shadow-amber-600/20 shrink-0">
              🎓
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-amber-600 text-white shadow-xs">
                  AI Teacher Mode
                </span>
                <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  10-Min Board Exam Revision
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-black tracking-tight line-clamp-1 mt-0.5">
                {lecture.chapterTitle}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowPlaylist(!showPlaylist)}
              className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all ${
                showPlaylist 
                  ? 'bg-amber-600 text-white border-amber-600' 
                  : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              title="Toggle Chapter Point Playlist"
            >
              <List className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Timeline ({totalPoints})</span>
            </button>

            <button
              onClick={() => {
                engine.stop();
                onClose();
              }}
              className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              title="Close AI Reader"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Priority Filter Selection Bar */}
        <div className="px-6 py-2.5 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mr-1">
              Priority Filter:
            </span>
            <button
              onClick={() => handleFilterChange('high_yield')}
              className={`px-3 py-1 rounded-lg font-black transition-all ${
                filter === 'high_yield'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              🔴+🟡 High-Yield (Must Know & Important)
            </button>
            <button
              onClick={() => handleFilterChange('must_know_only')}
              className={`px-3 py-1 rounded-lg font-black transition-all ${
                filter === 'must_know_only'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              🔴 Must Know Only ({lecture.stats.mustKnowCount})
            </button>
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-3 py-1 rounded-lg font-black transition-all ${
                filter === 'all'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              🌟 All Points ({lecture.points.length})
            </button>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-bold text-slate-500">
            <span>
              🔴 {lecture.stats.mustKnowCount} Must Know
            </span>
            <span>
              🟡 {lecture.stats.importantCount} Important
            </span>
            <span>
              🟢 {lecture.stats.quickMentionCount} Quick
            </span>
          </div>
        </div>

        {/* Modal Main Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col md:flex-row gap-6">
          {/* Active Point Spotlight */}
          <div className="flex-1 flex flex-col justify-between">
            {currentPoint ? (
              <div className="space-y-4">
                {/* Priority & Category Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {getPriorityBadge(currentPoint.priority)}
                    <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {getCategoryLabel(currentPoint.category)}
                    </span>
                  </div>

                  <div className="text-[11px] font-bold text-slate-400">
                    Concept {currentIndex + 1} of {totalPoints}
                  </div>
                </div>

                {/* Point Title */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                    {currentPoint.title}
                  </h3>
                  {currentPoint.subtitle && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                      {currentPoint.subtitle}
                    </p>
                  )}
                </div>

                {/* Teacher's Spoken Lecture Card */}
                <div className="p-5 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                      <Volume2 className="w-3.5 h-3.5" />
                      Teacher's Live Spoken Explanation
                    </span>

                    {/* Animated Equalizer Bars when speaking */}
                    {isSpeaking && !isPaused && (
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-3 bg-amber-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
                        <div className="w-1 h-4 bg-amber-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
                        <div className="w-1 h-2 bg-amber-600 rounded-full animate-bounce" />
                        <div className="w-1 h-3.5 bg-amber-600 rounded-full animate-bounce [animation-delay:-0.2s]" />
                      </div>
                    )}
                  </div>

                  <p className="text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-200 font-medium italic">
                    "{currentPoint.spokenText}"
                  </p>
                </div>

                {/* Step-by-Step Numerical Approach if applicable */}
                {currentPoint.numericalApproach && currentPoint.numericalApproach.length > 0 && (
                  <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60">
                    <h4 className="text-xs font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-400 mb-2 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" />
                      Notebook Solving Strategy (Guaranteed Step Marks)
                    </h4>
                    <div className="space-y-1.5">
                      {currentPoint.numericalApproach.map((step, sIdx) => (
                        <div key={sIdx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                          <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 shrink-0">
                            •
                          </span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bullet Points if present */}
                {currentPoint.bulletPoints && currentPoint.bulletPoints.length > 0 && !currentPoint.numericalApproach && (
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                    <div className="space-y-1.5">
                      {currentPoint.bulletPoints.map((bp, bIdx) => (
                        <div key={bIdx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{bp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Exam Context Box */}
                {currentPoint.examContext && (
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 pt-1">
                    <Award className="w-4 h-4 text-amber-600" />
                    <span>{currentPoint.examContext}</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center text-slate-400">
                <BookOpen className="w-10 h-10 mb-2 opacity-50" />
                <p className="text-sm font-bold">No points found for the selected filter.</p>
                <button
                  onClick={() => handleFilterChange('high_yield')}
                  className="mt-3 px-4 py-1.5 bg-amber-600 text-white rounded-xl text-xs font-bold"
                >
                  Reset to High-Yield Filter
                </button>
              </div>
            )}
          </div>

          {/* Side Timeline / Playlist */}
          {showPlaylist && (
            <div className="w-full md:w-80 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 pt-4 md:pt-0 md:pl-6 shrink-0 flex flex-col max-h-96 md:max-h-full">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3 flex items-center justify-between">
                <span>Chapter Timeline</span>
                <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                  {totalPoints} Points
                </span>
              </h4>

              <div className="space-y-2 overflow-y-auto pr-1 flex-1 no-scrollbar">
                {filteredPoints.map((p, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={p.id}
                      onClick={() => handleJumpToPoint(idx)}
                      className={`w-full text-left p-2.5 rounded-xl border transition-all text-xs flex items-start gap-2.5 ${
                        isActive
                          ? 'bg-amber-500/15 border-amber-500/50 shadow-xs'
                          : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="text-sm shrink-0">
                        {p.priority === 'must_know' ? '🔴' : p.priority === 'important' ? '🟡' : '🟢'}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className={`font-bold line-clamp-1 ${isActive ? 'text-amber-800 dark:text-amber-300' : 'text-slate-800 dark:text-slate-200'}`}>
                          {p.title}
                        </p>
                        <p className="text-[10px] text-slate-400 truncate mt-0.5">
                          {p.category.toUpperCase()}
                        </p>
                      </div>
                      {isActive && (
                        <span className="text-[10px] font-black text-amber-700 dark:text-amber-400 shrink-0">
                          Now
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Audio Controls Bar */}
        <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3 shrink-0">
          {/* Progress Bar */}
          <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-amber-600 to-indigo-600 h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Speed Control */}
            <div className="flex items-center gap-1.5 order-2 sm:order-1">
              <span className="text-[11px] font-bold text-slate-500">Speed:</span>
              {[0.8, 1.0, 1.2, 1.5].map((s) => (
                <button
                  key={s}
                  onClick={() => handleSpeedChange(s)}
                  className={`px-2 py-0.5 rounded text-[11px] font-black transition-all ${
                    speed === s
                      ? 'bg-amber-600 text-white'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>

            {/* Playback Buttons */}
            <div className="flex items-center gap-3 order-1 sm:order-2">
              <button
                onClick={() => engine.prev()}
                disabled={currentIndex <= 0}
                className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition-all disabled:opacity-40"
                title="Previous Point"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                onClick={handlePlayPause}
                className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white flex items-center justify-center shadow-lg shadow-amber-600/30 active:scale-95 transition-all"
                title={isSpeaking && !isPaused ? "Pause Lecture" : "Play Lecture"}
              >
                {isSpeaking && !isPaused ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5 ml-0.5" />
                )}
              </button>

              <button
                onClick={() => engine.next()}
                disabled={currentIndex >= totalPoints - 1}
                className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition-all disabled:opacity-40"
                title="Next Point"
              >
                <SkipForward className="w-4 h-4" />
              </button>
            </div>

            {/* Status Text & Stop Button */}
            <div className="flex items-center gap-2 order-3">
              <span className="text-xs font-bold text-slate-500">
                {isSpeaking && !isPaused ? 'Teacher Speaking...' : isPaused ? 'Paused' : 'Ready'}
              </span>
              <button
                onClick={() => {
                  engine.stop();
                  onClose();
                }}
                className="px-3 py-1 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold transition-all"
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherReaderModal;
