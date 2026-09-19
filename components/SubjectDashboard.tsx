import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Subject, Chapter, UploadedBook } from '../types.ts';
import { generateDetailedNotes, generatePremiumPYQs, getActiveKeyCount, getCurrentKeyIndex } from '../services/geminiService.ts';
import { getInstantNotes, getInstantPYQs } from '../services/offlineNotesService.ts';
import { getAllBooks, isAdminAuthenticated, CONTENT_UPDATE_EVENT } from '../services/contentStore.ts';
import { 
  StudyItem, 
  StudySection, 
  CanonicalChapterNotes, 
  normalizeToCanonicalNotes, 
  cleanMathAndSymbols 
} from '../services/notesParser.ts';
import PDFViewerModal from './PDFViewerModal.tsx';
import TeacherReaderModal from './TeacherReaderModal.tsx';
import { synthesizeTeacherLecture } from '../services/teacherReaderService.ts';
import { FormulaCard, FormulaData } from './FormulaCard.tsx';
import { TextbookDiagram, DiagramType } from './TextbookDiagram.tsx';
import { getFormulasForChapter } from '../services/formulaVaultService.ts';
import { FullSubjectRevision } from './FullSubjectRevision.tsx';
import { BookOpen, FileText, Upload, Plus, ShieldCheck, Edit3, Download, Eye, Layers, Headphones, Sparkles, Volume2 } from 'lucide-react';

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
    badge: 'bg-gradient-to-br from-amber-700 to-amber-900 text-white shadow-sm font-black',
    title: 'text-amber-950 font-black tracking-tight',
    subtopic: 'text-amber-950 bg-gradient-to-r from-amber-100/90 via-amber-50/60 to-transparent border-l-4 border-l-amber-600 border-y border-r border-amber-200/60 px-3 sm:px-4 py-2 sm:py-3 rounded-r-xl sm:rounded-r-2xl font-black text-xs sm:text-sm lg:text-base tracking-tight shadow-xs',
    insight: 'bg-gradient-to-r from-amber-50 via-yellow-50/60 to-orange-50/30 border-2 border-amber-400/90 text-amber-950 shadow-sm rounded-xl sm:rounded-2xl',
    solution: 'bg-[#f8fafc] border-l-4 border-l-indigo-600 border border-slate-200 text-slate-900 shadow-xs rounded-r-xl sm:rounded-r-2xl',
    stepBadge: 'bg-indigo-100 text-indigo-900 border border-indigo-300 font-black',
    rubricBox: 'bg-emerald-50/90 border-2 border-emerald-400/90 text-emerald-950 shadow-xs rounded-xl sm:rounded-2xl',
    codeBg: 'bg-slate-900 text-emerald-300',
    formulaBox: 'bg-gradient-to-br from-amber-50 via-orange-50/40 to-amber-50/20 border-2 border-amber-400/90 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-amber-950 shadow-sm',
    diagramBox: 'bg-indigo-50/50 border border-indigo-200 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-indigo-950',
    definitionBox: 'bg-[#faf6ed] border-l-4 border-l-amber-700 border border-amber-200/80 rounded-r-xl sm:rounded-r-2xl p-3 sm:p-5 text-amber-950 shadow-xs',
    derivationBox: 'bg-indigo-50/40 border-2 border-indigo-200/90 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-slate-900 shadow-xs',
    exampleBox: 'bg-blue-50/50 border-2 border-blue-200/90 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-slate-900 shadow-xs',
    applicationBox: 'bg-teal-50/50 border border-teal-300/80 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-teal-950 shadow-xs',
    keypointsBox: 'bg-purple-50/50 border border-purple-300/80 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-purple-950 shadow-xs',
    bulletItem: 'text-slate-800',
    text: 'text-slate-800',
  },
  oxford: {
    card: 'bg-white border-slate-200 shadow-sm hover:shadow-md text-slate-900',
    badge: 'bg-gradient-to-br from-blue-700 to-indigo-800 text-white shadow-sm font-black',
    title: 'text-slate-900 font-black tracking-tight',
    subtopic: 'text-slate-900 bg-gradient-to-r from-blue-100/90 via-blue-50/60 to-transparent border-l-4 border-l-blue-600 border-y border-r border-blue-200/60 px-3 sm:px-4 py-2 sm:py-3 rounded-r-xl sm:rounded-r-2xl font-black text-xs sm:text-sm lg:text-base tracking-tight shadow-xs',
    insight: 'bg-gradient-to-r from-blue-50 via-indigo-50/60 to-transparent border-2 border-blue-300 text-blue-950 shadow-sm rounded-xl sm:rounded-2xl',
    solution: 'bg-slate-50 border-l-4 border-l-emerald-600 border border-slate-200 text-slate-900 shadow-xs rounded-r-xl sm:rounded-r-2xl',
    stepBadge: 'bg-blue-100 text-blue-900 border border-blue-300 font-black',
    rubricBox: 'bg-emerald-50/90 border-2 border-emerald-300 text-emerald-950 shadow-xs rounded-xl sm:rounded-2xl',
    codeBg: 'bg-slate-950 text-sky-300',
    formulaBox: 'bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 border-2 border-blue-300 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-slate-900 shadow-sm',
    diagramBox: 'bg-sky-50/60 border border-sky-200 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-slate-900',
    definitionBox: 'bg-blue-50/40 border-l-4 border-l-blue-700 border border-blue-200 rounded-r-xl sm:rounded-r-2xl p-3 sm:p-5 text-slate-900 shadow-xs',
    derivationBox: 'bg-slate-50 border-2 border-slate-300 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-slate-900 shadow-xs',
    exampleBox: 'bg-indigo-50/50 border-2 border-indigo-200 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-slate-900 shadow-xs',
    applicationBox: 'bg-cyan-50/50 border border-cyan-300 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-cyan-950 shadow-xs',
    keypointsBox: 'bg-indigo-50/50 border border-indigo-300 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-slate-900 shadow-xs',
    bulletItem: 'text-slate-800',
    text: 'text-slate-800',
  },
  slate: {
    card: 'bg-slate-900/90 border-slate-800 shadow-md text-slate-200',
    badge: 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-sm font-black',
    title: 'text-white font-black tracking-tight',
    subtopic: 'text-indigo-200 bg-gradient-to-r from-slate-800 via-slate-800/80 to-transparent border-l-4 border-l-indigo-500 border-y border-r border-slate-700 px-3 sm:px-4 py-2 sm:py-3 rounded-r-xl sm:rounded-r-2xl font-black text-xs sm:text-sm lg:text-base tracking-tight shadow-xs',
    insight: 'bg-gradient-to-r from-amber-950/40 via-yellow-950/20 to-slate-900 border-2 border-amber-500/70 text-amber-200 shadow-sm rounded-xl sm:rounded-2xl',
    solution: 'bg-slate-800/60 border-l-4 border-l-emerald-500 border border-slate-700/50 text-slate-200 shadow-xs rounded-r-xl sm:rounded-r-2xl',
    stepBadge: 'bg-indigo-900/80 text-indigo-200 border border-indigo-700/50 font-black',
    rubricBox: 'bg-emerald-950/40 border-2 border-emerald-700/70 text-emerald-200 shadow-xs rounded-xl sm:rounded-2xl',
    codeBg: 'bg-black/80 text-indigo-300',
    formulaBox: 'bg-gradient-to-br from-slate-900 via-amber-950/30 to-slate-900 border-2 border-amber-500/70 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-amber-200 shadow-sm',
    diagramBox: 'bg-slate-800/40 border border-slate-700 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-slate-200',
    definitionBox: 'bg-slate-800/80 border-l-4 border-l-amber-500 border border-slate-700 rounded-r-xl sm:rounded-r-2xl p-3 sm:p-5 text-amber-200 shadow-xs',
    derivationBox: 'bg-slate-800/50 border-2 border-indigo-900/70 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-slate-200 shadow-xs',
    exampleBox: 'bg-blue-950/40 border-2 border-blue-800/60 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-blue-200 shadow-xs',
    applicationBox: 'bg-teal-950/40 border border-teal-800/60 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-teal-200 shadow-xs',
    keypointsBox: 'bg-purple-950/40 border border-purple-800/60 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-purple-200 shadow-xs',
    bulletItem: 'text-slate-300',
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
  zoom?: number;
}

export type ParsedSection = StudySection;
export type SectionItem = StudyItem;

// Helper to render bold markdown (**text**), formulas, and highlight keywords
export const renderFormattedText = (text: string, theme?: StudyTheme) => {
  if (!text) return null;

  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const innerText = part.slice(2, -2);
      const isEquation = innerText.includes('=') || innerText.includes('+') || innerText.includes('·') || innerText.includes('^') || innerText.includes('/');
      const isHeaderLabel = innerText.endsWith(':') || innerText.startsWith('Step') || innerText.startsWith('Q') || innerText.length < 30;

      if (isEquation) {
        return (
          <span 
            key={index} 
            className={`font-mono font-black px-1.5 py-0.5 rounded-md text-[0.95em] tracking-tight ${
              theme === 'paper'
                ? 'bg-amber-100/80 text-amber-950 border border-amber-300/70'
                : theme === 'oxford'
                ? 'bg-blue-100/80 text-blue-950 border border-blue-300/70'
                : 'bg-indigo-950/80 text-amber-300 border border-amber-500/40'
            }`}
          >
            {innerText}
          </span>
        );
      }

      if (isHeaderLabel) {
        return (
          <strong 
            key={index} 
            className={`font-black tracking-tight ${
              theme === 'paper'
                ? 'text-amber-950 font-black'
                : theme === 'oxford'
                ? 'text-slate-950 font-black'
                : 'text-amber-300 font-black'
            }`}
          >
            {innerText}
          </strong>
        );
      }

      return (
        <strong 
          key={index} 
          className={`font-black tracking-tight ${
            theme === 'paper'
              ? 'text-amber-950'
              : theme === 'oxford'
              ? 'text-slate-950'
              : 'text-white'
          }`}
        >
          {innerText}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });
};

// Unified Canonical Parser: seamlessly normalizes JSON, Markdown, and AI/Admin content into canonical StudySection[]
export const parseStudyContent = (rawContent: string, isPyq?: boolean, isRevision?: boolean): ParsedSection[] => {
  const canonical = normalizeToCanonicalNotes(rawContent, { isPyq, isRevision });
  return canonical.sections;
};

// Maps diagram requests to authentic textbook diagrams
export const resolveDiagramType = (item: SectionItem, sectionTitle: string): DiagramType | null => {
  if (item.diagramType) {
    const dt = item.diagramType.toLowerCase();
    if (dt.includes('prism')) return 'prism_refraction';
    if (dt.includes('lens')) return 'lens_maker';
    if (dt.includes('dipole')) return 'electric_dipole';
    if (dt.includes('wheatstone') || dt.includes('bridge')) return 'wheatstone_bridge';
    if (dt.includes('young') || dt.includes('slit') || dt.includes('ydse')) return 'youngs_double_slit';
    if (dt.includes('cfse') || dt.includes('crystal') || dt.includes('octahedral')) return 'cfse_octahedral';
    if (dt.includes('fixture') || dt.includes('knockout') || dt.includes('tournament')) return 'knockout_fixture_11';
    if (dt.includes('junction') || dt.includes('diode')) return 'pn_junction';
  }

  const combined = `${item.text} ${sectionTitle}`.toLowerCase();
  if (combined.includes('prism formula') || (combined.includes('prism') && combined.includes('refraction'))) return 'prism_refraction';
  if (combined.includes('lens maker') || combined.includes("lens maker's")) return 'lens_maker';
  if (combined.includes('crystal field') || combined.includes('cfse') || combined.includes('octahedral field') || combined.includes('octahedral complex')) return 'cfse_octahedral';
  if (combined.includes('fixture') && (combined.includes('11 teams') || combined.includes('knock-out') || combined.includes('knockout'))) return 'knockout_fixture_11';
  if (combined.includes('electric dipole') && (combined.includes('field') || combined.includes('axial') || combined.includes('equatorial'))) return 'electric_dipole';
  if (combined.includes('wheatstone bridge') || combined.includes('meter bridge')) return 'wheatstone_bridge';
  if (combined.includes('young') && (combined.includes('double slit') || combined.includes('interference'))) return 'youngs_double_slit';
  if (combined.includes('p-n junction') || combined.includes('pn junction') || combined.includes('depletion layer')) return 'pn_junction';

  return null;
};

// Converts text into standardized FormulaCard data
export const parseFormulaItemToData = (text: string, title?: string): FormulaData => {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  let equation = lines[0] || text;
  let formulaTitle = title || 'Important Formula';

  const colonIdx = equation.indexOf(':');
  if (colonIdx > 0 && colonIdx < 35) {
    formulaTitle = equation.substring(0, colonIdx).trim();
    equation = equation.substring(colonIdx + 1).trim();
  }

  const variables: { symbol: string; meaning: string; unit?: string }[] = [];
  let whenToApply = '';
  let trap = '';

  lines.slice(1).forEach(l => {
    if (l.toLowerCase().includes('when to apply') || l.toLowerCase().includes('condition')) {
      whenToApply = l.replace(/^[-*•]?\s*(when to apply|conditions?):?/i, '').trim();
    } else if (l.toLowerCase().includes('trap') || l.toLowerCase().includes('mistake') || l.toLowerCase().includes('caution')) {
      trap = l.replace(/^[-*•]?\s*(examiner trap|caution|common mistake|note):?/i, '').trim();
    } else if (l.includes('=') || l.includes(':')) {
      const clean = l.replace(/^[-*•]\s*/, '');
      const parts = clean.split(/=|:/);
      if (parts.length >= 2) {
        const sym = parts[0].trim();
        const meaningPart = parts.slice(1).join('=').trim();
        let unit: string | undefined = undefined;
        const uMatch = meaningPart.match(/\(([^)]+)\)$/);
        if (uMatch) {
          unit = uMatch[1];
        }
        variables.push({
          symbol: sym,
          meaning: meaningPart.replace(/\(([^)]+)\)$/, '').trim(),
          unit
        });
      }
    }
  });

  return {
    title: formulaTitle,
    equation: equation.replace(/^`+|`+$/g, '').trim(),
    variables: variables.length > 0 ? variables : undefined,
    whenToApply: whenToApply || 'Direct formula substitution in standard CBSE Class 12 board numericals.',
    trap: trap || undefined
  };
};

// Component for rendering human-crafted, clean aesthetic study notes
export const NaturalNotebookViewer: React.FC<{ 
  content: string; 
  pyqContent?: string;
  subject: string; 
  chapterTitle?: string;
  tabMode: TabViewMode;
  isRevision?: boolean;
  config?: NotebookConfig;
  onSelectTab: (tab: TabViewMode) => void;
}> = ({ content, pyqContent, subject, chapterTitle, tabMode, isRevision, config, onSelectTab }) => {
  const [filterQuery, setFilterQuery] = useState('');

  const notesSections = useMemo(() => parseStudyContent(content, false, isRevision), [content, isRevision]);
  const pyqSections = useMemo(() => {
    if (pyqContent) {
      return parseStudyContent(pyqContent, true, isRevision);
    }
    return [];
  }, [pyqContent, isRevision]);

  const chapterFormulas = useMemo(() => {
    return getFormulasForChapter(chapterTitle || '', notesSections);
  }, [chapterTitle, notesSections]);

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
    if (size === 'sm') return 'text-[11.5px] sm:text-[13px] lg:text-[14px] leading-relaxed';
    if (size === 'md') return 'text-[13px] sm:text-[15px] lg:text-[16px] leading-relaxed';
    if (size === 'lg') return 'text-[14.5px] sm:text-[17px] lg:text-[18px] leading-relaxed';
    return 'text-[16.5px] sm:text-[19px] lg:text-[20px] leading-relaxed';
  };

  const themeClasses = THEME_CLASSES[activeTheme] || THEME_CLASSES.paper;
  const zoomStyle = config?.zoom && config.zoom !== 100 ? { zoom: `${config.zoom}%` } : undefined;

  // DEDICATED FORMULA VAULT VIEW
  if (tabMode === 'formulas') {
    const q = filterQuery.toLowerCase();
    const filtered = chapterFormulas.filter(f => 
      !q ||
      f.title.toLowerCase().includes(q) ||
      f.equation.toLowerCase().includes(q) ||
      (f.category && f.category.toLowerCase().includes(q)) ||
      (f.variables && f.variables.some(v => v.symbol.toLowerCase().includes(q) || v.meaning.toLowerCase().includes(q)))
    );

    return (
      <div 
        style={zoomStyle}
        className={`space-y-4 sm:space-y-6 w-full max-w-full mx-auto pb-20 sm:pb-28 px-0 sm:px-1 ${getFontClass(activeFont)} ${getSizeClass(activeSize)}`}
      >
        {/* Formula Vault Banner */}
        <div className={`p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border ${themeClasses.card} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 shadow-xs`}>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 sm:px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-900 dark:text-amber-200 border border-amber-500/30 text-[9px] sm:text-[10px] font-black uppercase tracking-wider">
                ⚡ Formula Vault
              </span>
              <span className="text-[11px] sm:text-xs font-bold opacity-75">
                • {chapterFormulas.length} Core Formulas for {chapterTitle || 'Chapter'}
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl font-black tracking-tight">
              Formula Vault & Application Conditions
            </h2>
            <p className="text-[11px] sm:text-xs opacity-75 font-medium mt-0.5">
              Clean Unicode expressions, variable meanings with standard SI units, when-to-apply criteria, and examiner traps.
            </p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <input 
              type="text"
              placeholder="Search formulas or symbols..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="px-2.5 sm:px-3 py-1.5 sm:py-2 bg-black/5 dark:bg-white/5 border border-slate-300/60 dark:border-slate-700 rounded-xl text-xs font-semibold outline-none w-full sm:w-64"
            />
            {filterQuery && (
              <button 
                onClick={() => setFilterQuery('')}
                className="text-xs px-2.5 py-1.5 rounded-xl bg-black/10 hover:bg-black/20 font-bold shrink-0"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Formula Cards */}
        {filtered.length === 0 ? (
          <div className={`p-6 sm:p-10 text-center rounded-xl sm:rounded-2xl border ${themeClasses.card}`}>
            <p className="font-bold text-xs sm:text-sm">No formulas matched "{filterQuery}".</p>
            <button 
              onClick={() => setFilterQuery('')}
              className="mt-3 px-4 py-1.5 bg-amber-800 text-white text-xs font-bold rounded-xl"
            >
              Show All Formulas
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {filtered.map((formula, fIdx) => (
              <FormulaCard key={fIdx} formula={formula} theme={activeTheme} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div 
      style={zoomStyle}
      className={`space-y-4 sm:space-y-6 lg:space-y-8 w-full max-w-full mx-auto pb-20 sm:pb-28 px-0 sm:px-1 ${getFontClass(activeFont)} ${getSizeClass(activeSize)}`}
    >
      {/* Search & Topic Filter Bar */}
      <div className={`p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 ${themeClasses.card}`}>
        <div className="flex items-center gap-2 w-full sm:w-auto flex-1">
          <span className="text-sm sm:text-base opacity-70">🔍</span>
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
              className="text-[11px] sm:text-xs px-2 py-0.5 rounded bg-black/10 hover:bg-black/20 font-bold"
            >
              Clear
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0 text-[11px] sm:text-xs font-bold opacity-75">
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
              <div className="flex items-center justify-between gap-2.5 sm:gap-3 mb-2.5 sm:mb-3.5">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className={`w-7 h-7 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl flex items-center justify-center text-[11px] sm:text-sm font-black shadow-md shrink-0 ${themeClasses.badge}`}>
                    {isPyqCard ? `Q${idx + 1}` : (idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`)}
                  </div>
                  <div className="min-w-0">
                    <h3 className={`text-sm sm:text-lg lg:text-xl font-black uppercase tracking-tight truncate ${themeClasses.title}`}>
                      {section.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider opacity-60">
                        {isPyqCard ? 'Solved Board PYQ' : `Concept Unit ${idx + 1}`}
                      </span>
                    </div>
                  </div>
                </div>

                {section.marks ? (
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-amber-500/15 border border-amber-500/40 text-amber-900 dark:text-amber-200 font-black text-[10px] sm:text-xs rounded-full shadow-2xs shrink-0">
                    {section.marks}
                  </span>
                ) : (
                  <span className="hidden sm:inline-block px-2.5 py-0.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[11px] font-bold rounded-full opacity-60 shrink-0">
                    CBSE 2026-27
                  </span>
                )}
              </div>

              {/* Section Card */}
              <div className={`p-3.5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl border transition-all ${themeClasses.card}`}>
                <div className="space-y-3 sm:space-y-4">
                  {section.items.map((item, itemIdx) => {
                    if (item.type === 'subtopic') {
                      return (
                        <div key={itemIdx} className={`my-2.5 sm:my-4 ${themeClasses.subtopic}`}>
                          <span className="text-sm sm:text-base opacity-90">📌</span>
                          <span className="flex-1">{renderFormattedText(item.text, config?.theme)}</span>
                        </div>
                      );
                    }

                    if (item.type === 'formula') {
                      const formulaData = parseFormulaItemToData(item.text, section.title);
                      return (
                        <div key={itemIdx} className="my-2.5 sm:my-4">
                          <FormulaCard formula={formulaData} theme={activeTheme} />
                        </div>
                      );
                    }

                    if (item.type === 'definition') {
                      return (
                        <div key={itemIdx} className={`my-2.5 sm:my-4 ${themeClasses.definitionBox}`}>
                          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                            <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full bg-amber-600/15 text-amber-950 dark:text-amber-200 border border-amber-300/60 dark:border-amber-800 flex items-center gap-1.5 shadow-2xs">
                              📖 NCERT Verbatim Law / Definition
                            </span>
                          </div>
                          <div className="leading-relaxed font-bold text-xs sm:text-sm sm:text-base">
                            {renderFormattedText(item.text, config?.theme)}
                          </div>
                        </div>
                      );
                    }

                    if (item.type === 'derivation') {
                      return (
                        <div key={itemIdx} className={`my-2.5 sm:my-4 ${themeClasses.derivationBox}`}>
                          <div className="flex items-center gap-2 mb-2 sm:mb-2.5 pb-1.5 sm:pb-2 border-b border-indigo-200/80 dark:border-indigo-900/80">
                            <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-indigo-950 dark:text-indigo-200 flex items-center gap-1.5">
                              🔬 Step-by-Step Mathematical Derivation & Proof
                            </span>
                          </div>
                          <div className="leading-relaxed font-medium space-y-1 sm:space-y-1.5 whitespace-pre-wrap text-xs sm:text-sm sm:text-base">
                            {renderFormattedText(item.text, config?.theme)}
                          </div>
                        </div>
                      );
                    }

                    if (item.type === 'example') {
                      return (
                        <div key={itemIdx} className={`my-2.5 sm:my-4 ${themeClasses.exampleBox}`}>
                          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                            <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-950 dark:text-blue-200 border border-blue-300/60 dark:border-blue-800 flex items-center gap-1.5 shadow-2xs">
                              📝 Solved Model Problem / Example
                            </span>
                          </div>
                          <div className="leading-relaxed font-bold text-xs sm:text-sm sm:text-base">
                            {renderFormattedText(item.text, config?.theme)}
                          </div>
                        </div>
                      );
                    }

                    if (item.type === 'application') {
                      return (
                        <div key={itemIdx} className={`my-2.5 sm:my-4 ${themeClasses.applicationBox}`}>
                          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                            <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-950 dark:text-teal-200 border border-teal-300/60 dark:border-teal-800 flex items-center gap-1.5 shadow-2xs">
                              ⚙️ Practical Applications & Board Cases
                            </span>
                          </div>
                          <div className="leading-relaxed font-medium text-xs sm:text-sm sm:text-base">
                            {renderFormattedText(item.text, config?.theme)}
                          </div>
                        </div>
                      );
                    }

                    if (item.type === 'keypoints') {
                      return (
                        <div key={itemIdx} className={`my-2.5 sm:my-4 ${themeClasses.keypointsBox}`}>
                          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                            <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-950 dark:text-purple-200 border border-purple-300/60 dark:border-purple-800 flex items-center gap-1.5 shadow-2xs">
                              📌 Rapid Revision Summary & Key Takeaways
                            </span>
                          </div>
                          <div className="leading-relaxed font-medium text-xs sm:text-sm sm:text-base">
                            {renderFormattedText(item.text, config?.theme)}
                          </div>
                        </div>
                      );
                    }

                    if (item.type === 'diagram') {
                      const resolvedType = resolveDiagramType(item, section.title);
                      if (resolvedType) {
                        return (
                          <div key={itemIdx} className="my-3 sm:my-5">
                            <TextbookDiagram 
                              type={resolvedType} 
                              caption={item.diagramCaption || item.title || 'Official CBSE Textbook Diagram'} 
                              theme={activeTheme === 'slate' ? 'dark' : activeTheme === 'oxford' ? 'oxford' : 'paper'}
                            />
                          </div>
                        );
                      }
                      // Skip crude or redundant non-book diagrams per user instructions ("Or diagrams hta do")
                      return null;
                    }

                    if (item.type === 'table' && item.tableHeaders && item.tableRows) {
                      return (
                        <div key={itemIdx} className="my-3 sm:my-5 overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
                          <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs sm:text-sm">
                              <thead>
                                <tr className="bg-amber-500/15 dark:bg-amber-500/25 border-b border-slate-200 dark:border-slate-800">
                                  {item.tableHeaders.map((head, hIdx) => (
                                    <th key={hIdx} className="px-2.5 sm:px-4 py-2 sm:py-3 font-black text-amber-950 dark:text-amber-200 uppercase tracking-wider text-[10px] sm:text-xs">
                                      {renderFormattedText(head, config?.theme)}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                                {item.tableRows.map((row, rIdx) => (
                                  <tr 
                                    key={rIdx} 
                                    className={rIdx % 2 === 0 ? 'bg-white/70 dark:bg-slate-900/50' : 'bg-amber-50/30 dark:bg-slate-800/30 hover:bg-amber-100/30 dark:hover:bg-slate-800/60 transition-colors'}
                                  >
                                    {row.map((cell, cIdx) => (
                                      <td key={cIdx} className="px-2.5 sm:px-4 py-1.5 sm:py-2.5 font-medium text-slate-800 dark:text-slate-200 leading-relaxed align-top text-[11px] sm:text-sm">
                                        {renderFormattedText(cell, config?.theme)}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      );
                    }

                    if (item.type === 'rubric') {
                      return (
                        <div key={itemIdx} className={`p-3 sm:p-5 my-2.5 sm:my-4 ${themeClasses.rubricBox}`}>
                          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                            <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-950 dark:text-emerald-200 border border-emerald-400/60 dark:border-emerald-700 flex items-center gap-1.5 shadow-2xs">
                              ✅ Official CBSE Stepwise Marking Scheme
                            </span>
                          </div>
                          <div className="leading-relaxed font-bold text-[11px] sm:text-xs sm:text-sm">
                            {renderFormattedText(item.text, config?.theme)}
                          </div>
                        </div>
                      );
                    }

                    if (item.type === 'solution') {
                      return (
                        <div key={itemIdx} className={`p-3 sm:p-5 my-2.5 sm:my-4 ${themeClasses.solution}`}>
                          <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider block mb-1 sm:mb-1.5 text-indigo-800 dark:text-indigo-300">
                            ✍️ Complete Verified Solution:
                          </span>
                          <div className="leading-relaxed font-bold text-xs sm:text-sm sm:text-base">
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
                        <div key={itemIdx} className="flex items-start gap-2 sm:gap-3 py-1.5 sm:py-2 border-b border-slate-100 dark:border-slate-800/60 last:border-0">
                          <span className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-[11px] font-mono font-black uppercase shrink-0 mt-0.5 shadow-2xs ${themeClasses.stepBadge}`}>
                            {stepLabel}
                          </span>
                          <div className="font-bold leading-relaxed flex-1 text-xs sm:text-sm sm:text-base">
                            {renderFormattedText(stepContent, config?.theme)}
                          </div>
                        </div>
                      );
                    }

                    if (item.type === 'insight') {
                      return (
                        <div key={itemIdx} className={`p-3 sm:p-5 my-2.5 sm:my-4 text-xs sm:text-sm ${themeClasses.insight}`}>
                          <span className="font-black block mb-1 sm:mb-1.5 text-amber-950 dark:text-amber-200 flex items-center gap-1.5">
                            💡 Examiner Tip, High-Frequency Trap & Scoring Insight:
                          </span>
                          <div className="leading-relaxed font-bold text-xs sm:text-sm">
                            {renderFormattedText(item.text, config?.theme)}
                          </div>
                        </div>
                      );
                    }

                    if (item.type === 'code') {
                      return (
                        <div key={itemIdx} className="my-2.5 sm:my-4 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-700/50 shadow-inner">
                          <div className="bg-slate-950 px-3 sm:px-4 py-1.5 sm:py-2 flex justify-between items-center text-[10px] sm:text-[11px] font-mono text-slate-400 border-b border-slate-800">
                            <span className="uppercase">{item.lang || 'code/diagram'} block</span>
                            <button 
                              onClick={() => navigator.clipboard.writeText(item.text)}
                              className="hover:text-white transition-colors px-2 py-0.5 rounded bg-slate-800 text-[10px] font-bold"
                            >
                              Copy
                            </button>
                          </div>
                          <pre className={`p-3 sm:p-4 overflow-x-auto font-mono text-xs leading-relaxed ${themeClasses.codeBg}`}>
                            <code>{item.text}</code>
                          </pre>
                        </div>
                      );
                    }

                    if (item.type === 'bullet') {
                      const bulletClean = item.text.replace(/^[-*+•]\s*/, '').trim();
                      const boldPrefixMatch = bulletClean.match(/^\*\*([^*:]+)(?:\*\*:|:\*\*)\s*(.*)$/);
                      const plainColonMatch = !boldPrefixMatch ? bulletClean.match(/^([A-Za-z0-9\s\-–—/()]{2,35}):\s+(.+)$/) : null;

                      if (boldPrefixMatch || (plainColonMatch && !bulletClean.startsWith('http'))) {
                        const label = (boldPrefixMatch ? boldPrefixMatch[1] : plainColonMatch![1]).trim();
                        const restOfText = (boldPrefixMatch ? boldPrefixMatch[2] : plainColonMatch![2]).trim();
                        return (
                          <div key={itemIdx} className="flex items-start gap-2 sm:gap-2.5 py-1 sm:py-1.5">
                            <span className="text-amber-600 dark:text-amber-400 font-black shrink-0 mt-0.5 sm:mt-1 text-xs sm:text-sm">✦</span>
                            <div className={`leading-relaxed font-medium flex-1 ${themeClasses.text} text-xs sm:text-sm lg:text-base`}>
                              <span className={`px-2 sm:px-2.5 py-0.5 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-black inline-block mr-1.5 sm:mr-2 shadow-2xs ${
                                activeTheme === 'paper'
                                  ? 'bg-amber-100 text-amber-950 border border-amber-300/80'
                                  : activeTheme === 'oxford'
                                  ? 'bg-blue-100 text-blue-950 border border-blue-300/80'
                                  : 'bg-indigo-950/80 text-amber-300 border border-indigo-700'
                              }`}>
                                {label}
                              </span>
                              {renderFormattedText(restOfText, config?.theme)}
                            </div>
                          </div>
                        );
                      }

                      return (
                        <div key={itemIdx} className="flex items-start gap-2 sm:gap-2.5 py-1 sm:py-1.5">
                          <span className="text-amber-600 dark:text-amber-400 font-black shrink-0 mt-0.5 sm:mt-1 text-[10px] sm:text-xs">◆</span>
                          <div className={`leading-relaxed font-medium flex-1 ${themeClasses.text} text-xs sm:text-sm lg:text-base`}>
                            {renderFormattedText(bulletClean, config?.theme)}
                          </div>
                        </div>
                      );
                    }

                    // Standard paragraph / bullet text
                    return (
                      <div key={itemIdx} className={`leading-relaxed font-medium ${themeClasses.text} text-xs sm:text-sm lg:text-base`}>
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
  const isRevision = chapter.id.includes('_rev');
  const [tabMode, setTabMode] = useState<TabViewMode>(() => isRevision ? 'pyqs' : 'notes');
  const [notesContent, setNotesContent] = useState<string>('');
  const [pyqContent, setPyqContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSyncingAI, setIsSyncingAI] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [books, setBooks] = useState<UploadedBook[]>([]);
  const [activeViewerBook, setActiveViewerBook] = useState<UploadedBook | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(isAdminAuthenticated());
  const [isTeacherReaderOpen, setIsTeacherReaderOpen] = useState(false);

  const teacherLecture = useMemo(() => {
    return synthesizeTeacherLecture(chapter.title, subject.name, notesContent, pyqContent);
  }, [chapter.title, subject.name, notesContent, pyqContent]);

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
  const [zoomPercent, setZoomPercent] = useState<number>(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const key = isMobile ? 'ace12_zoomPercent_mobile' : 'ace12_zoomPercent';
    const saved = localStorage.getItem(key);
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (!isNaN(parsed) && parsed >= 50 && parsed <= 150) {
        return parsed;
      }
    }
    // Default opening in mobile view is 70%, desktop/tablet is 100%
    return isMobile ? 70 : 100;
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

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const key = isMobile ? 'ace12_zoomPercent_mobile' : 'ace12_zoomPercent';
    localStorage.setItem(key, zoomPercent.toString());
  }, [zoomPercent]);

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

          {/* Dedicated Study View Tabs */}
          <div className="flex p-1 rounded-xl bg-black/5 dark:bg-white/5 border border-slate-300/60 dark:border-slate-700 overflow-x-auto no-scrollbar">
            {isRevision && (
              <button 
                onClick={() => setTabMode('pyqs')}
                className={`px-3 lg:px-4 py-1.5 rounded-lg text-xs font-black transition-all shrink-0 flex items-center gap-1.5 ${tabMode === 'pyqs' ? tabActiveStyle : 'opacity-70 hover:opacity-100'}`}
              >
                <span>🎯 Question Bank (Board PYQs)</span>
              </button>
            )}
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
            {!isRevision && (
              <button 
                onClick={() => setTabMode('pyqs')}
                className={`px-3 lg:px-4 py-1.5 rounded-lg text-xs font-black transition-all shrink-0 ${tabMode === 'pyqs' ? tabActiveStyle : 'opacity-70 hover:opacity-100'}`}
              >
                🎯 4-5 Solved PYQs
              </button>
            )}
            <button 
              onClick={() => setTabMode('books')}
              className={`px-3 lg:px-4 py-1.5 rounded-lg text-xs font-black transition-all shrink-0 flex items-center gap-1.5 ${tabMode === 'books' ? tabActiveStyle : 'opacity-70 hover:opacity-100'}`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Books & PDFs ({books.length})</span>
            </button>
          </div>

          {/* AI Reader — Teacher Mode Button */}
          <button 
            onClick={() => setIsTeacherReaderOpen(true)}
            title="Open AI Reader (Teacher Mode) • 10-Min Exam Masterclass"
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white text-xs font-black flex items-center gap-2 transition-all shadow-md shadow-amber-600/20 active:scale-95 shrink-0"
          >
            <span className="text-base">🎓</span>
            <span className="hidden sm:inline">AI Reader (Teacher Mode)</span>
            <span className="sm:hidden">Teacher AI</span>
            <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/20 uppercase tracking-widest font-extrabold hidden md:inline">
              10-Min Drill
            </span>
          </button>
        </div>
      </div>

      {/* Reader Controls Toolbar (Theme, Font, Size, Zoom, AI Sync) */}
      <div className="px-2.5 sm:px-4 lg:px-10 py-1.5 sm:py-2 border-b border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 sm:gap-3 text-xs shrink-0 select-none bg-black/5 dark:bg-black/20">
        {/* Theme Picker */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="font-bold opacity-70 text-[10px] sm:text-[11px]">Theme:</span>
          <div className="flex gap-1">
            <button 
              onClick={() => setTheme('paper')}
              className={`px-2 sm:px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-bold transition-all ${theme === 'paper' ? 'bg-amber-800 text-white shadow-sm' : 'opacity-70 hover:opacity-100'}`}
            >
              📜 <span className="hidden sm:inline">Warm Paper</span><span className="sm:hidden">Paper</span>
            </button>
            <button 
              onClick={() => setTheme('oxford')}
              className={`px-2 sm:px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-bold transition-all ${theme === 'oxford' ? 'bg-blue-700 text-white shadow-sm' : 'opacity-70 hover:opacity-100'}`}
            >
              ☀️ <span className="hidden sm:inline">Oxford Light</span><span className="sm:hidden">Light</span>
            </button>
            <button 
              onClick={() => setTheme('slate')}
              className={`px-2 sm:px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-bold transition-all ${theme === 'slate' ? 'bg-slate-800 text-white shadow-sm' : 'opacity-70 hover:opacity-100'}`}
            >
              🌙 <span className="hidden sm:inline">Focus Slate</span><span className="sm:hidden">Slate</span>
            </button>
          </div>
        </div>

        {/* Font Family */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="font-bold opacity-70 text-[10px] sm:text-[11px]">Font:</span>
          <div className="flex gap-1">
            <button 
              onClick={() => setFont('sans')}
              className={`px-2 sm:px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-bold transition-all ${font === 'sans' ? 'bg-amber-800 text-white shadow-sm' : 'opacity-70 hover:opacity-100'}`}
            >
              Sans
            </button>
            <button 
              onClick={() => setFont('serif')}
              className={`px-2 sm:px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-bold font-serif transition-all ${font === 'serif' ? 'bg-amber-800 text-white shadow-sm' : 'opacity-70 hover:opacity-100'}`}
            >
              Serif
            </button>
            <button 
              onClick={() => setFont('display')}
              className={`px-2 sm:px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-bold transition-all ${font === 'display' ? 'bg-amber-800 text-white shadow-sm' : 'opacity-70 hover:opacity-100'}`}
            >
              Modern
            </button>
          </div>
        </div>

        {/* Font Size */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="font-bold opacity-70 text-[10px] sm:text-[11px]">Size:</span>
          <div className="flex gap-1">
            {(['sm', 'md', 'lg', 'xl'] as const).map(s => (
              <button 
                key={s}
                onClick={() => setFontSize(s)}
                className={`px-1.5 sm:px-2 py-0.5 rounded text-[10px] font-black uppercase transition-all ${fontSize === s ? 'bg-amber-800 text-white shadow-sm' : 'opacity-70 hover:opacity-100'}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Zoom Controls */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          <span className="font-bold opacity-70 text-[10px] sm:text-[11px]">Zoom:</span>
          <div className="flex items-center bg-black/5 dark:bg-white/5 p-0.5 rounded-lg border border-black/10 dark:border-white/10">
            <button 
              onClick={() => setZoomPercent(prev => Math.max(50, prev - 10))}
              className="w-5 h-5 flex items-center justify-center rounded text-xs font-black hover:bg-black/10 active:scale-95 transition-all"
              title="Zoom Out (Make Notes Smaller)"
            >
              −
            </button>
            <button 
              onClick={() => {
                const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
                setZoomPercent(isMobile ? 70 : 100);
              }}
              className="px-1.5 py-0.5 text-[10px] font-mono font-bold hover:bg-black/10 rounded transition-all"
              title="Reset Zoom"
            >
              {zoomPercent}%
            </button>
            <button 
              onClick={() => setZoomPercent(prev => Math.min(150, prev + 10))}
              className="w-5 h-5 flex items-center justify-center rounded text-xs font-black hover:bg-black/10 active:scale-95 transition-all"
              title="Zoom In (Enlarge Notes)"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="flex-1 overflow-y-auto scroll-smooth">
        <div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-8 py-3 sm:py-6 lg:py-10">
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
                onClick={() => loadContent(false)}
                className="px-5 py-2 bg-amber-800 text-white font-bold text-xs rounded-xl shadow-md"
              >
                Retry Loading
              </button>
            </div>
          ) : isRevision && tabMode === 'pyqs' ? (
            <div style={zoomPercent !== 100 ? { zoom: `${zoomPercent}%` } : undefined}>
              <FullSubjectRevision 
                subjectId={subject.id} 
                theme={theme} 
                font={font} 
                fontSize={fontSize} 
              />
            </div>
          ) : (
            <NaturalNotebookViewer 
              content={notesContent} 
              pyqContent={pyqContent}
              subject={subject.name}
              chapterTitle={chapter.title}
              tabMode={tabMode}
              isRevision={isRevision}
              config={{ theme, font, size: fontSize, zoom: zoomPercent }}
              onSelectTab={(tab) => setTabMode(tab)}
            />
          )}
        </div>
      </div>

      {/* Embedded PDF Viewer Modal */}
      {activeViewerBook && (
        <PDFViewerModal book={activeViewerBook} onClose={() => setActiveViewerBook(null)} />
      )}

      {/* Embedded Teacher Reader Modal */}
      <TeacherReaderModal
        isOpen={isTeacherReaderOpen}
        lecture={teacherLecture}
        onClose={() => setIsTeacherReaderOpen(false)}
      />
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
                    {isRev ? '⭐ Master Revision & Board Question Bank' : `Chapter ${chapter.id.replace(/[a-z_]/gi, '') || 'Module'}`}
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
                  <span>{isRev ? '🎯 Board Question Bank' : '🎯 4-5 Solved PYQs'}</span>
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
