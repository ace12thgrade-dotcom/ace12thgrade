import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Subject, Chapter, UploadedBook } from '../types.ts';
import { generateDetailedNotes, generatePremiumPYQs, getActiveKeyCount, getCurrentKeyIndex } from '../services/geminiService.ts';
import { getInstantNotes, getInstantPYQs } from '../services/offlineNotesService.ts';
import { getAllBooks, isAdminAuthenticated, CONTENT_UPDATE_EVENT } from '../services/contentStore.ts';
import PDFViewerModal from './PDFViewerModal.tsx';
import { BookOpen, FileText, Upload, Plus, ShieldCheck, Edit3, Download, Eye, Layers } from 'lucide-react';

interface SubjectDashboardProps {
  subject: Subject;
  searchQuery?: string;
  selectedChapter: Chapter | null;
  setSelectedChapter: (chapter: Chapter | null) => void;
  onOpenAdmin?: (subjectId?: string, chapterId?: string) => void;
}

export type StudyTheme = 'paper' | 'oxford' | 'slate';
export type StudyFont = 'sans' | 'serif' | 'display';
export type StudyFontSize = 'sm' | 'md' | 'lg' | 'xl';
export type TabViewMode = 'all' | 'notes' | 'formulas' | 'pyqs' | 'diagrams' | 'books';

export const sanitizeTheme = (val: unknown): StudyTheme => {
  if (val === 'oxford' || val === 'slate' || val === 'paper') return val;
  return 'paper';
};

export const sanitizeFont = (val: unknown): StudyFont => {
  if (val === 'serif' || val === 'display' || val === 'sans') return val;
  return 'sans';
};

export const sanitizeFontSize = (val: unknown): StudyFontSize => {
  if (val === 'sm' || val === 'lg' || val === 'xl' || val === 'md') return val;
  return 'md';
};

const THEME_CLASSES = {
  paper: {
    card: 'bg-white border-[#e7ded1] shadow-sm hover:shadow-md text-slate-800',
    badge: 'bg-amber-100 text-amber-900 border border-amber-200/80 font-bold',
    title: 'text-amber-950 font-black',
    subtopic: 'text-amber-950 bg-[#faf6ed] border-l-4 border-l-amber-600 px-4 py-2.5 rounded-r-xl font-bold shadow-xs',
    insight: 'bg-[#fef9ee] border border-amber-300/80 text-amber-950 shadow-xs',
    solution: 'bg-[#f8fafc] border-l-4 border-l-indigo-600 border border-slate-200 text-slate-900 shadow-xs',
    stepBadge: 'bg-indigo-100 text-indigo-900 border border-indigo-200 font-black',
    rubricBox: 'bg-emerald-50/80 border border-emerald-300/80 text-emerald-950 shadow-xs',
    codeBg: 'bg-slate-900 text-emerald-300',
    formulaBox: 'bg-amber-50/70 border border-amber-300/80 rounded-2xl p-4 text-amber-950 shadow-xs',
    diagramBox: 'bg-indigo-50/50 border border-indigo-200 rounded-2xl p-4 text-indigo-950',
    text: 'text-slate-800',
  },
  oxford: {
    card: 'bg-white border-slate-200 shadow-sm hover:shadow-md text-slate-900',
    badge: 'bg-blue-100 text-blue-900 border border-blue-200 font-bold',
    title: 'text-slate-900 font-black',
    subtopic: 'text-slate-900 bg-slate-50 border-l-4 border-l-blue-600 px-4 py-2.5 rounded-r-xl font-bold shadow-xs',
    insight: 'bg-blue-50/80 border border-blue-200 text-blue-950 shadow-xs',
    solution: 'bg-slate-50 border-l-4 border-l-emerald-600 border border-slate-200 text-slate-900 shadow-xs',
    stepBadge: 'bg-blue-100 text-blue-900 border border-blue-200 font-black',
    rubricBox: 'bg-emerald-50/80 border border-emerald-200 text-emerald-950 shadow-xs',
    codeBg: 'bg-slate-950 text-sky-300',
    formulaBox: 'bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 shadow-xs',
    diagramBox: 'bg-sky-50/60 border border-sky-200 rounded-2xl p-4 text-slate-900',
    text: 'text-slate-800',
  },
  slate: {
    card: 'bg-slate-900/90 border-slate-800 shadow-md text-slate-200',
    badge: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-bold',
    title: 'text-white font-black',
    subtopic: 'text-indigo-200 bg-slate-800/80 border-l-4 border-l-indigo-500 px-4 py-2.5 rounded-r-xl font-bold shadow-xs',
    insight: 'bg-indigo-950/40 border border-indigo-800/50 text-indigo-200 shadow-xs',
    solution: 'bg-slate-800/60 border-l-4 border-l-emerald-500 border border-slate-700/50 text-slate-200 shadow-xs',
    stepBadge: 'bg-indigo-900/80 text-indigo-200 border border-indigo-700/50 font-black',
    rubricBox: 'bg-emerald-950/40 border border-emerald-800/50 text-emerald-200 shadow-xs',
    codeBg: 'bg-black/80 text-indigo-300',
    formulaBox: 'bg-slate-800/60 border border-slate-700 rounded-2xl p-4 text-slate-200 shadow-xs',
    diagramBox: 'bg-slate-800/40 border border-slate-700 rounded-2xl p-4 text-slate-200',
    text: 'text-slate-300',
  }
};

const THEME_CONTAINER_STYLES = {
  paper: 'bg-[#faf8f4] text-slate-900',
  oxford: 'bg-[#f8fafc] text-slate-900',
  slate: 'bg-[#0b1120] text-slate-100',
};

const HEADER_STYLES = {
  paper: 'bg-[#faf8f4]/95 border-[#e8dfd1] text-amber-950',
  oxford: 'bg-white/95 border-slate-200 text-slate-900',
  slate: 'bg-slate-900/95 border-slate-800 text-white',
};

const TAB_ACTIVE_STYLES = {
  paper: 'bg-amber-800 text-white shadow-sm',
  oxford: 'bg-blue-700 text-white shadow-sm',
  slate: 'bg-indigo-600 text-white shadow-sm',
};

export interface NotebookConfig {
  theme?: StudyTheme;
  font?: StudyFont;
  size?: StudyFontSize;
}

interface SectionItem {
  type: 'text' | 'subtopic' | 'code' | 'insight' | 'solution' | 'step' | 'formula' | 'rubric' | 'diagram';
  text: string;
  lang?: string;
  marks?: string;
  year?: string;
}

interface ParsedSection {
  title: string;
  tag?: 'formula' | 'notes' | 'pyq' | 'diagram' | 'general';
  marks?: string;
  year?: string;
  items: SectionItem[];
}

// Helper to render bold markdown (**text**), formulas, and highlight keywords
const renderFormattedText = (text: string, theme?: StudyTheme) => {
  if (!text) return null;

  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const innerText = part.slice(2, -2);
      return (
        <strong 
          key={index} 
          className={`font-black tracking-tight ${
            theme === 'paper'
              ? 'text-amber-950 font-black'
              : theme === 'oxford'
              ? 'text-slate-950 font-black'
              : 'text-white font-black'
          }`}
        >
          {innerText}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });
};

// Parser to split raw content into clean human-readable study blocks
const parseStudyContent = (rawContent: string, isPyq?: boolean, isRevision?: boolean): ParsedSection[] => {
  const lines = rawContent.split('\n');
  const parsedSections: ParsedSection[] = [];
  let currentSection: ParsedSection | null = null;
  
  let inCodeBlock = false;
  let codeLines: string[] = [];
  let codeLang = '';

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    // Code Block Boundary
    if (trimmed.startsWith('```')) {
      if (inCodeBlock) {
        if (currentSection) {
          currentSection.items.push({
            type: 'code',
            text: codeLines.join('\n'),
            lang: codeLang
          });
        }
        inCodeBlock = false;
        codeLines = [];
        codeLang = '';
      } else {
        inCodeBlock = true;
        codeLang = trimmed.substring(3).trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(rawLine);
      continue;
    }

    if (!trimmed) continue;
    
    // Skip divider clutter
    if (/^[\|=_\-\s*●·○#]+$/.test(trimmed) && trimmed.length > 3) continue;

    let scrubbed = trimmed.replace(/^(\|)+|(\|)+$/g, '').trim();
    if (!scrubbed) continue;

    const upper = scrubbed.toUpperCase();

    // Major Section Header triggers
    const isMajorSection = 
      upper.startsWith('TOPIC:') || 
      upper.startsWith('QUESTION:') || 
      upper.startsWith('Q:') ||
      upper.startsWith('Q1.') ||
      upper.startsWith('Q2.') ||
      upper.startsWith('Q3.') ||
      upper.startsWith('Q4.') ||
      upper.startsWith('Q5.') ||
      upper.startsWith('Q6.') ||
      upper.startsWith('Q7.') ||
      upper.startsWith('Q8.') ||
      upper.startsWith('Q9.') ||
      upper.startsWith('Q10.') ||
      upper.startsWith('Q11.') ||
      upper.startsWith('Q12.') ||
      upper.startsWith('Q13.') ||
      upper.startsWith('Q14.') ||
      upper.startsWith('Q15.') ||
      (trimmed.startsWith('# ') && !trimmed.startsWith('### ')) ||
      (trimmed.startsWith('## ') && !trimmed.startsWith('### '));

    if (isMajorSection) {
      if (currentSection) {
        parsedSections.push(currentSection);
      }

      let cleanTitle = scrubbed.replace(/^TOPIC:|^QUESTION:|^Q:|^#+|^Q\d+\.\s*/gi, '').replace(/\*\*/g, '').trim();
      
      let sectionTag: ParsedSection['tag'] = 'notes';
      if (upper.includes('FORMULA') || upper.includes('BLUEPRINT')) {
        sectionTag = 'formula';
      } else if (upper.includes('QUESTION') || upper.includes('MARKS') || upper.startsWith('Q') || isPyq) {
        sectionTag = 'pyq';
      } else if (upper.includes('DIAGRAM') || upper.includes('SCHEMATIC') || upper.includes('FIGURE')) {
        sectionTag = 'diagram';
      }

      // Extract marks badge if available e.g. [5 Marks, Delhi 2024]
      let marksMatch = scrubbed.match(/\[([0-9]+\s*Marks?[^\]]*)\]/i);
      let marks = marksMatch ? marksMatch[1] : undefined;

      currentSection = { 
        title: cleanTitle || "Core Topic", 
        tag: sectionTag,
        marks,
        items: [] 
      };
      continue;
    }

    if (!currentSection) {
      currentSection = { 
        title: isRevision ? "Complete Syllabus Master Overview" : isPyq ? "Board Examination Solved Question" : "Chapter Concept Master Vault", 
        tag: isPyq ? 'pyq' : 'notes',
        items: [] 
      };
    }

    // Subtopic or Concept Callouts: **1. Concept Title:** or **Concept Name:**
    const isSubtopic = 
      (trimmed.startsWith('**') && trimmed.includes(':**')) ||
      (trimmed.startsWith('### ')) ||
      (trimmed.startsWith('**') && trimmed.endsWith('**') && trimmed.length < 90);

    if (isSubtopic) {
      currentSection.items.push({
        type: 'subtopic',
        text: scrubbed
      });
    } else if (upper.startsWith('INSIGHT:') || upper.startsWith('TIP:') || upper.startsWith('EXAMINER TIP:') || upper.startsWith('EXAMINER NOTE:')) {
      currentSection.items.push({
        type: 'insight',
        text: scrubbed.replace(/^INSIGHT:|^TIP:|^EXAMINER TIP:|^EXAMINER NOTE:/i, '').trim()
      });
    } else if (upper.startsWith('CBSE MARKING RUBRIC:') || upper.startsWith('MARKING RUBRIC:') || upper.startsWith('MARKING SCHEME:')) {
      currentSection.items.push({
        type: 'rubric',
        text: scrubbed.replace(/^CBSE MARKING RUBRIC:|^MARKING RUBRIC:|^MARKING SCHEME:/i, '').trim()
      });
    } else if (upper.startsWith('SOLUTION:')) {
      currentSection.items.push({
        type: 'solution',
        text: scrubbed.replace(/^SOLUTION:/i, '').trim()
      });
    } else if (upper.startsWith('STEP ') || upper.startsWith('STEP:')) {
      currentSection.items.push({
        type: 'step',
        text: scrubbed
      });
    } else if (upper.startsWith('FORMULA:') || upper.includes('WHEN & WHY TO APPLY:') || (trimmed.startsWith('- **') && (trimmed.includes('Formula:') || trimmed.includes('Law:')))) {
      currentSection.items.push({
        type: 'formula',
        text: scrubbed
      });
    } else if (upper.includes('DIAGRAM:') || upper.includes('SCHEMATIC:') || upper.includes('RAY DIAGRAM:')) {
      currentSection.items.push({
        type: 'diagram',
        text: scrubbed
      });
    } else {
      currentSection.items.push({
        type: 'text',
        text: scrubbed
      });
    }
  }

  if (currentSection) {
    parsedSections.push(currentSection);
  }

  return parsedSections;
};

// Component for rendering human-crafted, clean aesthetic study notes
const NaturalNotebookViewer: React.FC<{ 
  content: string; 
  pyqContent?: string;
  subject: string; 
  tabMode: TabViewMode;
  isRevision?: boolean;
  config?: NotebookConfig;
  onSelectTab: (tab: TabViewMode) => void;
}> = ({ content, pyqContent, subject, tabMode, isRevision, config, onSelectTab }) => {
  const [filterQuery, setFilterQuery] = useState('');

  const notesSections = useMemo(() => parseStudyContent(content, false, isRevision), [content, isRevision]);
  const pyqSections = useMemo(() => {
    if (pyqContent) {
      return parseStudyContent(pyqContent, true, isRevision);
    }
    return [];
  }, [pyqContent, isRevision]);

  // Combine or filter sections based on active tab
  const displayedSections = useMemo(() => {
    let list: ParsedSection[] = [];
    if (tabMode === 'pyqs') {
      list = pyqSections.length > 0 ? pyqSections : notesSections.filter(s => s.tag === 'pyq');
    } else if (tabMode === 'formulas') {
      list = notesSections.filter(s => 
        s.tag === 'formula' || 
        s.title.toLowerCase().includes('formula') || 
        s.title.toLowerCase().includes('blueprint') ||
        s.items.some(i => i.type === 'formula')
      );
      if (list.length === 0) list = notesSections;
    } else if (tabMode === 'diagrams') {
      list = notesSections.filter(s => 
        s.tag === 'diagram' || 
        s.title.toLowerCase().includes('diagram') || 
        s.items.some(i => i.type === 'diagram' || i.type === 'code')
      );
      if (list.length === 0) list = notesSections;
    } else {
      // 'all' or 'notes'
      list = notesSections;
    }

    if (!filterQuery.trim()) return list;

    const q = filterQuery.toLowerCase();
    return list.filter(sec => 
      sec.title.toLowerCase().includes(q) ||
      sec.items.some(item => item.text.toLowerCase().includes(q))
    );
  }, [tabMode, notesSections, pyqSections, filterQuery]);

  const activeTheme: StudyTheme = sanitizeTheme(config?.theme);
  const activeFont: StudyFont = sanitizeFont(config?.font);
  const activeSize: StudyFontSize = sanitizeFontSize(config?.size);

  const getFontClass = (font: StudyFont) => {
    if (font === 'serif') return 'font-serif';
    if (font === 'display') return 'font-display';
    return 'font-sans';
  };

  const getSizeClass = (size: StudyFontSize) => {
    if (size === 'sm') return 'text-[13px] lg:text-[14px] leading-relaxed';
    if (size === 'md') return 'text-[15px] lg:text-[16px] leading-relaxed';
    if (size === 'lg') return 'text-[17px] lg:text-[18px] leading-relaxed';
    return 'text-[19px] lg:text-[20px] leading-relaxed';
  };

  const themeClasses = THEME_CLASSES[activeTheme] || THEME_CLASSES.paper;

  return (
    <div className={`space-y-6 lg:space-y-8 w-full max-w-full mx-auto pb-28 px-1 ${getFontClass(activeFont)} ${getSizeClass(activeSize)}`}>
      {/* Search & Topic Filter Bar */}
      <div className={`p-3.5 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-3 ${themeClasses.card}`}>
        <div className="flex items-center gap-2.5 w-full sm:w-auto flex-1">
          <span className="text-base opacity-70">🔍</span>
          <input 
            type="text"
            placeholder="Search within this chapter (e.g. formula, named reaction, derivation, law)..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-xs font-semibold placeholder:opacity-50"
          />
          {filterQuery && (
            <button 
              onClick={() => setFilterQuery('')}
              className="text-xs px-2 py-0.5 rounded bg-black/10 hover:bg-black/20 font-bold"
            >
              Clear
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0 text-xs font-bold opacity-75">
          <span>Showing {displayedSections.length} {tabMode === 'pyqs' ? 'Solved PYQs' : 'Sections'}</span>
        </div>
      </div>

      {/* Main Study Sections */}
      {displayedSections.length === 0 ? (
        <div className={`p-12 text-center rounded-3xl border ${themeClasses.card}`}>
          <p className="font-bold text-base mb-2">No matching topics found for "{filterQuery}".</p>
          <button 
            onClick={() => setFilterQuery('')}
            className="px-4 py-1.5 bg-amber-800 text-white text-xs font-bold rounded-xl"
          >
            Clear Filter
          </button>
        </div>
      ) : (
        displayedSections.map((section, idx) => {
          const isPyqCard = tabMode === 'pyqs' || section.tag === 'pyq' || section.marks !== undefined;

          return (
            <div key={idx} className="w-full">
              {/* Section Header */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs ${themeClasses.badge}`}>
                    {isPyqCard ? `Q${idx + 1}` : idx + 1}
                  </div>
                  <h3 className={`text-base lg:text-xl uppercase tracking-tight ${themeClasses.title}`}>
                    {section.title}
                  </h3>
                </div>

                {section.marks && (
                  <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 font-extrabold text-xs rounded-full">
                    {section.marks}
                  </span>
                )}
              </div>

              {/* Section Card */}
              <div className={`p-6 lg:p-8 rounded-2xl lg:rounded-3xl border transition-all ${themeClasses.card}`}>
                <div className="space-y-4">
                  {section.items.map((item, itemIdx) => {
                    if (item.type === 'subtopic') {
                      return (
                        <div key={itemIdx} className={`my-3.5 ${themeClasses.subtopic}`}>
                          {renderFormattedText(item.text, config?.theme)}
                        </div>
                      );
                    }

                    if (item.type === 'formula') {
                      return (
                        <div key={itemIdx} className={`my-3 font-mono ${themeClasses.formulaBox}`}>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-900 dark:text-amber-300">
                              ⚡ Formula & When-To-Apply
                            </span>
                          </div>
                          <div className="font-bold leading-relaxed">
                            {renderFormattedText(item.text, config?.theme)}
                          </div>
                        </div>
                      );
                    }

                    if (item.type === 'diagram') {
                      return (
                        <div key={itemIdx} className={`my-3 ${themeClasses.diagramBox}`}>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-900 dark:text-indigo-300">
                              📐 Board Diagram & Schematic
                            </span>
                          </div>
                          <div className="leading-relaxed font-medium">
                            {renderFormattedText(item.text, config?.theme)}
                          </div>
                        </div>
                      );
                    }

                    if (item.type === 'rubric') {
                      return (
                        <div key={itemIdx} className={`p-4 my-3 rounded-2xl ${themeClasses.rubricBox}`}>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-950 dark:text-emerald-300">
                              ✅ CBSE Stepwise Marking Rubric
                            </span>
                          </div>
                          <div className="leading-relaxed font-semibold text-xs lg:text-sm">
                            {renderFormattedText(item.text, config?.theme)}
                          </div>
                        </div>
                      );
                    }

                    if (item.type === 'solution') {
                      return (
                        <div key={itemIdx} className={`p-4 my-3 rounded-2xl ${themeClasses.solution}`}>
                          <span className="text-xs font-black uppercase tracking-wider block mb-1 text-emerald-700 dark:text-emerald-400">
                            ✍️ Complete Verified Solution:
                          </span>
                          <div className="leading-relaxed font-semibold">
                            {renderFormattedText(item.text, config?.theme)}
                          </div>
                        </div>
                      );
                    }

                    if (item.type === 'step') {
                      const colonIdx = item.text.indexOf(':');
                      const stepLabel = colonIdx !== -1 ? item.text.substring(0, colonIdx) : item.text;
                      const stepContent = colonIdx !== -1 ? item.text.substring(colonIdx + 1).trim() : '';

                      return (
                        <div key={itemIdx} className="flex items-start gap-3 py-1.5">
                          <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold uppercase shrink-0 mt-0.5 ${themeClasses.stepBadge}`}>
                            {stepLabel}
                          </span>
                          <div className="font-semibold leading-relaxed flex-1">
                            {renderFormattedText(stepContent, config?.theme)}
                          </div>
                        </div>
                      );
                    }

                    if (item.type === 'insight') {
                      return (
                        <div key={itemIdx} className={`p-4 my-3 rounded-2xl text-xs lg:text-sm ${themeClasses.insight}`}>
                          <span className="font-black block mb-1">💡 Examiner Insight & Common Mistakes:</span>
                          <div className="leading-relaxed font-medium">
                            {renderFormattedText(item.text, config?.theme)}
                          </div>
                        </div>
                      );
                    }

                    if (item.type === 'code') {
                      return (
                        <div key={itemIdx} className="my-4 rounded-2xl overflow-hidden border border-slate-700/50 shadow-inner">
                          <div className="bg-slate-950 px-4 py-2 flex justify-between items-center text-[11px] font-mono text-slate-400 border-b border-slate-800">
                            <span className="uppercase">{item.lang || 'code/diagram'} block</span>
                            <button 
                              onClick={() => navigator.clipboard.writeText(item.text)}
                              className="hover:text-white transition-colors px-2.5 py-0.5 rounded bg-slate-800 text-[10px] font-bold"
                            >
                              Copy
                            </button>
                          </div>
                          <pre className={`p-4 overflow-x-auto font-mono text-xs leading-relaxed ${themeClasses.codeBg}`}>
                            <code>{item.text}</code>
                          </pre>
                        </div>
                      );
                    }

                    // Standard paragraph / bullet text
                    return (
                      <div key={itemIdx} className={`leading-relaxed font-medium ${themeClasses.text}`}>
                        {renderFormattedText(item.text, config?.theme)}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })
      )}

      {/* End of Notes Quick Action (When in Notes View) */}
      {tabMode === 'notes' && pyqSections.length > 0 && (
        <div className={`p-6 rounded-3xl border text-center ${themeClasses.card}`}>
          <h4 className="font-black text-lg mb-2">Ready for Past 15-Year Board Questions?</h4>
          <p className="text-xs opacity-75 mb-4 max-w-md mx-auto">
            Test your knowledge with fully solved 4-5 PYQs with step-by-step CBSE marking rubrics.
          </p>
          <button 
            onClick={() => onSelectTab('pyqs')}
            className="px-6 py-2.5 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs rounded-xl shadow-md transition-all"
          >
            Open 15-Year Solved Board PYQs →
          </button>
        </div>
      )}
    </div>
  );
};

// Chapter Detail View
const ChapterView: React.FC<{ 
  chapter: Chapter; 
  subject: Subject; 
  onClose: () => void;
  onOpenAdmin?: (subjectId?: string, chapterId?: string) => void;
}> = ({ chapter, subject, onClose, onOpenAdmin }) => {
  const [tabMode, setTabMode] = useState<TabViewMode>('notes');
  const [notesContent, setNotesContent] = useState<string>('');
  const [pyqContent, setPyqContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSyncingAI, setIsSyncingAI] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [books, setBooks] = useState<UploadedBook[]>([]);
  const [activeViewerBook, setActiveViewerBook] = useState<UploadedBook | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(isAdminAuthenticated());

  const isRevision = chapter.id.includes('_rev');

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const all = await getAllBooks();
        setBooks(all.filter(b => b.subjectId === subject.id && (!b.chapterId || b.chapterId === chapter.id)));
      } catch (err) {
        console.error("Failed to load books for chapter", err);
      }
    };
    loadBooks();

    const handleUpdate = () => {
      loadBooks();
      setIsAdmin(isAdminAuthenticated());
    };
    window.addEventListener(CONTENT_UPDATE_EVENT, handleUpdate);
    return () => window.removeEventListener(CONTENT_UPDATE_EVENT, handleUpdate);
  }, [subject.id, chapter.id]);

  // Load natural theme settings from localStorage (Default: Warm Paper, Clean Sans, Medium size)
  const [theme, setTheme] = useState<StudyTheme>(() => {
    return sanitizeTheme(localStorage.getItem('ace12_theme'));
  });
  const [font, setFont] = useState<StudyFont>(() => {
    return sanitizeFont(localStorage.getItem('ace12_font'));
  });
  const [fontSize, setFontSize] = useState<StudyFontSize>(() => {
    return sanitizeFontSize(localStorage.getItem('ace12_fontSize'));
  });

  useEffect(() => {
    localStorage.setItem('ace12_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('ace12_font', font);
  }, [font]);

  useEffect(() => {
    localStorage.setItem('ace12_fontSize', fontSize);
  }, [fontSize]);

  const loadContent = useCallback(async (forceLiveSync = false) => {
    stopAudio();

    if (forceLiveSync) {
      setIsSyncingAI(true);
      setError(null);
      try {
        const [liveNotes, livePyqs] = await Promise.all([
          generateDetailedNotes(subject.name, chapter.title, true),
          generatePremiumPYQs(subject.name, chapter.title, true)
        ]);
        setNotesContent(liveNotes);
        setPyqContent(livePyqs);
      } catch (e: any) {
        setError(e.message || "Failed to sync live AI notes. Loaded complete verified notes.");
      } finally {
        setIsSyncingAI(false);
      }
    } else {
      setIsLoading(true);
      setError(null);
      try {
        const [offlineNotes, offlinePyqs] = await Promise.all([
          getInstantNotes(subject.id, subject.name, chapter.title, chapter.id),
          getInstantPYQs(subject.id, subject.name, chapter.title, chapter.id)
        ]);
        setNotesContent(offlineNotes);
        setPyqContent(offlinePyqs);
      } catch (e: any) {
        setError("Error loading study material.");
      } finally {
        setIsLoading(false);
      }
    }
  }, [subject.id, subject.name, chapter.title, chapter.id]);

  useEffect(() => { 
    loadContent(false);
  }, [loadContent]);

  const stopAudio = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  const playAudio = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      alert("Speech Synthesis is not supported in this browser.");
      return;
    }
    stopAudio();

    const activeText = tabMode === 'pyqs' ? pyqContent : notesContent;
    const cleanSpeech = activeText
      .replace(/TOPIC:|QUESTION:|SOLUTION:|STEP \d+:|INSIGHT:|CBSE MARKING RUBRIC:/gi, '')
      .replace(/[*#`_\-]/g, '')
      .slice(0, 4000);

    const utterance = new SpeechSynthesisUtterance(cleanSpeech);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const activeTheme = sanitizeTheme(theme);
  const themeContainerStyles = THEME_CONTAINER_STYLES[activeTheme] || THEME_CONTAINER_STYLES.paper;
  const headerStyles = HEADER_STYLES[activeTheme] || HEADER_STYLES.paper;
  const tabActiveStyle = TAB_ACTIVE_STYLES[activeTheme] || TAB_ACTIVE_STYLES.paper;

  return (
    <div className={`flex flex-col h-full overflow-hidden min-w-0 ${themeContainerStyles}`}>
      {/* Top Navigation Header */}
      <div className={`px-4 lg:px-10 py-3.5 border-b flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0 backdrop-blur-md z-30 transition-colors ${headerStyles}`}>
        <div className="flex items-center gap-3 lg:gap-4">
          <button 
            onClick={onClose} 
            className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl border border-slate-300/60 dark:border-slate-700 flex items-center justify-center font-bold text-sm hover:bg-black/5 transition-all shrink-0"
            title="Back to Chapters"
          >
            ←
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                {isRevision ? 'Master Syllabus Revision' : 'Chapter Study Module'}
              </span>
              <span className="text-[11px] font-bold opacity-70 uppercase tracking-wide">
                {subject.name} • CBSE 2026-27
              </span>
            </div>
            <h2 className="text-base lg:text-xl font-black tracking-tight line-clamp-1">
              {chapter.title}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 flex-wrap">
          {/* Admin Edit Shortcut */}
          {isAdmin && onOpenAdmin && (
            <button
              onClick={() => onOpenAdmin(subject.id, chapter.id)}
              className="px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-800 dark:text-amber-300 text-xs font-bold flex items-center gap-1.5 transition-all"
              title="Edit notes, PYQs or upload book in Admin Portal"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit in Admin</span>
            </button>
          )}

          {/* 5 Dedicated Study View Tabs */}
          <div className="flex p-1 rounded-xl bg-black/5 dark:bg-white/5 border border-slate-300/60 dark:border-slate-700 overflow-x-auto no-scrollbar">
            <button 
              onClick={() => setTabMode('notes')}
              className={`px-3 lg:px-4 py-1.5 rounded-lg text-xs font-black transition-all shrink-0 ${tabMode === 'notes' ? tabActiveStyle : 'opacity-70 hover:opacity-100'}`}
            >
              📖 Notes & Theory
            </button>
            <button 
              onClick={() => setTabMode('formulas')}
              className={`px-3 lg:px-4 py-1.5 rounded-lg text-xs font-black transition-all shrink-0 ${tabMode === 'formulas' ? tabActiveStyle : 'opacity-70 hover:opacity-100'}`}
            >
              📑 Formula Vault
            </button>
            <button 
              onClick={() => setTabMode('pyqs')}
              className={`px-3 lg:px-4 py-1.5 rounded-lg text-xs font-black transition-all shrink-0 ${tabMode === 'pyqs' ? tabActiveStyle : 'opacity-70 hover:opacity-100'}`}
            >
              {isRevision ? '🎯 15 Full PYQs' : '🎯 4-5 Solved PYQs'}
            </button>
            <button 
              onClick={() => setTabMode('diagrams')}
              className={`px-3 lg:px-4 py-1.5 rounded-lg text-xs font-black transition-all shrink-0 ${tabMode === 'diagrams' ? tabActiveStyle : 'opacity-70 hover:opacity-100'}`}
            >
              🧪 Diagrams
            </button>
            <button 
              onClick={() => setTabMode('books')}
              className={`px-3 lg:px-4 py-1.5 rounded-lg text-xs font-black transition-all shrink-0 flex items-center gap-1.5 ${tabMode === 'books' ? tabActiveStyle : 'opacity-70 hover:opacity-100'}`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Books & PDFs ({books.length})</span>
            </button>
          </div>

          {/* Voice Audio Reader */}
          <button 
            onClick={isSpeaking ? stopAudio : playAudio}
            title={isSpeaking ? "Stop Voice Lecture" : "Play Natural Audio Lecture"}
            className={`w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-xl border transition-all shrink-0 ${
              isSpeaking 
                ? 'bg-red-600 border-red-500 text-white animate-pulse' 
                : 'bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-400 hover:bg-amber-500/20'
            }`}
          >
            {isSpeaking ? '■' : '🔊'}
          </button>
        </div>
      </div>

      {/* Reader Controls Toolbar (Theme, Font, Size, AI Sync) */}
      <div className="px-4 lg:px-10 py-2 border-b border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0 select-none bg-black/5 dark:bg-black/20">
        {/* Theme Picker */}
        <div className="flex items-center gap-2">
          <span className="font-bold opacity-70 text-[11px]">Theme:</span>
          <div className="flex gap-1">
            <button 
              onClick={() => setTheme('paper')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${theme === 'paper' ? 'bg-amber-800 text-white shadow-sm' : 'opacity-70 hover:opacity-100'}`}
            >
              📜 Warm Paper
            </button>
            <button 
              onClick={() => setTheme('oxford')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${theme === 'oxford' ? 'bg-blue-700 text-white shadow-sm' : 'opacity-70 hover:opacity-100'}`}
            >
              ☀️ Oxford Light
            </button>
            <button 
              onClick={() => setTheme('slate')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${theme === 'slate' ? 'bg-slate-800 text-white shadow-sm' : 'opacity-70 hover:opacity-100'}`}
            >
              🌙 Focus Slate
            </button>
          </div>
        </div>

        {/* Font Family */}
        <div className="flex items-center gap-2">
          <span className="font-bold opacity-70 text-[11px]">Font:</span>
          <div className="flex gap-1">
            <button 
              onClick={() => setFont('sans')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${font === 'sans' ? 'bg-amber-800 text-white shadow-sm' : 'opacity-70 hover:opacity-100'}`}
            >
              Clean Sans
            </button>
            <button 
              onClick={() => setFont('serif')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-bold font-serif transition-all ${font === 'serif' ? 'bg-amber-800 text-white shadow-sm' : 'opacity-70 hover:opacity-100'}`}
            >
              Serif Book
            </button>
            <button 
              onClick={() => setFont('display')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${font === 'display' ? 'bg-amber-800 text-white shadow-sm' : 'opacity-70 hover:opacity-100'}`}
            >
              Outfit Modern
            </button>
          </div>
        </div>

        {/* Font Size */}
        <div className="flex items-center gap-2">
          <span className="font-bold opacity-70 text-[11px]">Size:</span>
          <div className="flex gap-1">
            {(['sm', 'md', 'lg', 'xl'] as const).map(s => (
              <button 
                key={s}
                onClick={() => setFontSize(s)}
                className={`px-2 py-0.5 rounded text-[10px] font-black uppercase transition-all ${fontSize === s ? 'bg-amber-800 text-white shadow-sm' : 'opacity-70 hover:opacity-100'}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* AI Sync Button */}
        <button 
          disabled={isSyncingAI}
          onClick={() => loadContent(true)}
          className={`px-3 py-1 rounded-lg text-xs font-extrabold flex items-center gap-1.5 transition-all shadow-sm ${
            isSyncingAI 
              ? 'bg-slate-700 text-slate-300 cursor-wait' 
              : 'bg-amber-700 hover:bg-amber-800 text-white'
          }`}
        >
          {isSyncingAI ? 'Syncing...' : '✨ Live AI Refresh'}
        </button>
      </div>

      {/* Main Content Body */}
      <div className="flex-1 overflow-y-auto scroll-smooth">
        <div className="max-w-5xl mx-auto px-4 lg:px-8 py-6 lg:py-10">
          {tabMode === 'books' ? (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-amber-600" />
                    Offline Textbooks & PDF Books
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Uploaded NCERT, Reference Books, and Question Banks stored locally for instant offline reading.
                  </p>
                </div>
                {isAdmin && onOpenAdmin && (
                  <button
                    onClick={() => onOpenAdmin(subject.id, chapter.id)}
                    className="px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 shrink-0 shadow-sm"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Book PDF</span>
                  </button>
                )}
              </div>

              {books.length === 0 ? (
                <div className="p-12 text-center rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
                  <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                  <p className="font-black text-base text-slate-800 dark:text-slate-200 mb-1">No PDF Books Uploaded Yet</p>
                  <p className="text-xs text-slate-500 max-w-md mx-auto mb-4">
                    Complete NCERT textbooks, question banks, and reference notes can be accessed offline once uploaded.
                  </p>
                  {isAdmin && onOpenAdmin && (
                    <button
                      onClick={() => onOpenAdmin(subject.id, chapter.id)}
                      className="px-4 py-2 bg-amber-700 text-white rounded-xl text-xs font-bold inline-flex items-center gap-2"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Upload to this Chapter</span>
                    </button>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {books.map(book => (
                    <div
                      key={book.id}
                      className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-amber-500 transition-all group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                            {book.fileType.toUpperCase()} • {(book.fileSize / (1024 * 1024)).toFixed(1)} MB
                          </span>
                          <span className="text-[10px] text-slate-400 font-semibold">
                            {new Date(book.uploadDate).toLocaleDateString()}
                          </span>
                        </div>
                        <h4 className="font-black text-sm text-slate-900 dark:text-white line-clamp-2 mb-1 group-hover:text-amber-700 dark:group-hover:text-amber-400">
                          {book.title}
                        </h4>
                        {book.author && (
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-2">
                            By {book.author}
                          </p>
                        )}
                        {book.description && (
                          <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                            {book.description}
                          </p>
                        )}
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <button
                          onClick={() => setActiveViewerBook(book)}
                          className="px-3 py-1.5 bg-amber-700 hover:bg-amber-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-xs"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Read Offline</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : isLoading ? (
            <div className="flex flex-col items-center justify-center h-[50vh] space-y-4">
              <div className="w-12 h-12 border-4 border-amber-600/30 border-t-amber-600 rounded-full animate-spin"></div>
              <p className="font-bold text-sm">Opening Complete Study Material...</p>
            </div>
          ) : error ? (
            <div className="p-8 text-center rounded-2xl border border-red-300 bg-red-50 text-red-900">
              <p className="font-black text-base mb-4">{error}</p>
              <button 
                onClick={() => loadContent(true)}
                className="px-5 py-2 bg-amber-800 text-white font-bold text-xs rounded-xl shadow-md"
              >
                Retry Live AI Sync
              </button>
            </div>
          ) : (
            <NaturalNotebookViewer 
              content={notesContent} 
              pyqContent={pyqContent}
              subject={subject.name}
              tabMode={tabMode}
              isRevision={isRevision}
              config={{ theme, font, size: fontSize }}
              onSelectTab={(tab) => setTabMode(tab)}
            />
          )}
        </div>
      </div>

      {/* Embedded PDF Viewer Modal */}
      {activeViewerBook && (
        <PDFViewerModal book={activeViewerBook} onClose={() => setActiveViewerBook(null)} />
      )}
    </div>
  );
};

// Main Subject Dashboard
const SubjectDashboard: React.FC<SubjectDashboardProps> = ({ 
  subject, 
  searchQuery = '', 
  selectedChapter, 
  setSelectedChapter,
  onOpenAdmin 
}) => {
  const [subjectBooks, setSubjectBooks] = useState<UploadedBook[]>([]);
  const [selectedBook, setSelectedBook] = useState<UploadedBook | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(isAdminAuthenticated());

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const all = await getAllBooks();
        setSubjectBooks(all.filter(b => b.subjectId === subject.id));
      } catch (e) {
        console.error("Failed to load subject books", e);
      }
    };
    fetchBooks();

    const handleUpdate = () => {
      fetchBooks();
      setIsAdmin(isAdminAuthenticated());
    };
    window.addEventListener(CONTENT_UPDATE_EVENT, handleUpdate);
    return () => window.removeEventListener(CONTENT_UPDATE_EVENT, handleUpdate);
  }, [subject.id]);

  const filteredChapters = subject.chapters.filter(ch => 
    ch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ch.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedChapter) {
    return (
      <ChapterView 
        chapter={selectedChapter} 
        subject={subject} 
        onClose={() => setSelectedChapter(null)} 
        onOpenAdmin={onOpenAdmin}
      />
    );
  }

  return (
    <div className="p-4 lg:p-10 max-w-7xl mx-auto w-full animate-in fade-in duration-500 h-full flex flex-col overflow-y-auto">
      {/* Subject Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-3xl shadow-sm">
            {subject.icon}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                CBSE Class 12 (2026-27)
              </span>
              <span className="text-xs opacity-70 font-semibold">• 100% NCERT Aligned</span>
              {subject.isCustom && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-700 dark:text-purple-300">
                  Custom Added
                </span>
              )}
            </div>
            <h1 className="text-2xl lg:text-4xl font-black tracking-tight">{subject.name}</h1>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="px-4 py-2 bg-slate-900/5 dark:bg-white/5 border border-slate-300/50 dark:border-slate-800 rounded-xl text-xs font-bold flex items-center gap-2">
            <span>📚</span>
            <span>{subject.chapters.length} Modules & Revision</span>
          </div>

          <div className="px-4 py-2 bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 rounded-xl text-xs font-bold flex items-center gap-2">
            <span>📖</span>
            <span>{subjectBooks.length} Offline PDF Books</span>
          </div>

          {isAdmin && onOpenAdmin && (
            <button
              onClick={() => onOpenAdmin(subject.id)}
              className="px-4 py-2 bg-amber-100 dark:bg-amber-950/60 hover:bg-amber-200 dark:hover:bg-amber-900/60 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-800 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-xs"
            >
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Admin Manage</span>
            </button>
          )}
        </div>
      </div>

      {/* Offline Books Quick Shelf (if any books exist) */}
      {subjectBooks.length > 0 && (
        <div className="mb-8 p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Offline Books & PDF Reference Library ({subjectBooks.length})</span>
            </h3>
            {isAdmin && onOpenAdmin && (
              <button
                onClick={() => onOpenAdmin(subject.id)}
                className="text-xs font-bold text-amber-800 dark:text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>Manage in Admin</span>
                <span>→</span>
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {subjectBooks.map(book => (
              <button
                key={book.id}
                onClick={() => setSelectedBook(book)}
                className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-amber-200/80 dark:border-slate-800 text-left hover:border-amber-500 transition-all shadow-xs flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-400 flex items-center justify-center font-black text-xs shrink-0">
                  PDF
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-black text-slate-900 dark:text-white truncate group-hover:text-amber-700">
                    {book.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 truncate">
                    {book.author ? `By ${book.author}` : `${(book.fileSize / (1024 * 1024)).toFixed(1)} MB`}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Chapter Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-20">
        {filteredChapters.map((chapter) => {
          const isRev = chapter.id.includes('_rev');
          return (
            <button
              key={chapter.id}
              onClick={() => setSelectedChapter(chapter)}
              className={`group text-left p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-[230px] relative overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 ${
                isRev 
                  ? 'bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-slate-900/10 dark:to-slate-900 border-amber-500/40 hover:border-amber-500' 
                  : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-amber-500/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded ${
                    isRev 
                      ? 'bg-amber-600 text-white' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}>
                    {isRev ? '⭐ Master Revision & 15 PYQs' : `Chapter ${chapter.id.replace(/[a-z_]/gi, '') || 'Module'}`}
                  </span>
                  <span className="text-slate-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 font-black text-sm transition-colors">
                    Open →
                  </span>
                </div>
                <h3 className="text-base lg:text-lg font-black tracking-tight leading-snug mb-2 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  {chapter.title}
                </h3>
                <p className="text-xs opacity-75 font-medium line-clamp-2 leading-relaxed">
                  {chapter.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-bold opacity-80">
                <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400">
                  <span>📖 Complete Notes</span>
                </div>
                <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400">
                  <span>{isRev ? '🎯 15 Solved PYQs' : '🎯 4-5 Solved PYQs'}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* PDF Modal in Dashboard View */}
      {selectedBook && (
        <PDFViewerModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
};

export default SubjectDashboard;
