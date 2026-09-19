import React, { useState } from 'react';
import { Copy, Check, Info, AlertTriangle, Sparkles, BookOpen } from 'lucide-react';
import { StudyTheme } from '../types.ts';

export interface FormulaData {
  title: string;
  equation: string;
  variables?: { symbol: string; meaning: string; unit?: string }[];
  whenToApply?: string;
  trap?: string;
  category?: string;
}

interface FormulaCardProps {
  formula: FormulaData;
  theme?: StudyTheme;
}

export const FormulaCard: React.FC<FormulaCardProps> = ({ formula, theme = 'paper' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(formula.equation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isDark = theme === 'dark';
  const isOxford = theme === 'oxford';

  return (
    <div className={`my-3 sm:my-4 rounded-xl sm:rounded-2xl border transition-all duration-200 overflow-hidden shadow-xs hover:shadow-md ${
      isDark 
        ? 'bg-slate-900/90 border-amber-500/30 text-slate-100' 
        : isOxford
        ? 'bg-white border-blue-200 text-slate-900 shadow-blue-900/5'
        : 'bg-[#fefdfb] border-amber-200 text-amber-950 shadow-amber-900/5'
    }`}>
      {/* Header Bar */}
      <div className={`px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-2.5 border-b ${
        isDark 
          ? 'bg-amber-950/30 border-amber-500/20' 
          : isOxford
          ? 'bg-blue-50/70 border-blue-100'
          : 'bg-amber-50/80 border-amber-200/60'
      }`}>
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-[10px] sm:text-xs font-black shrink-0">
            ⚡
          </span>
          <h4 className="text-[11px] sm:text-sm font-black tracking-tight uppercase truncate">
            {formula.title || 'Core Formula'}
          </h4>
          {formula.category && (
            <span className="hidden sm:inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 opacity-75">
              {formula.category}
            </span>
          )}
        </div>

        <button
          onClick={handleCopy}
          title="Copy Formula"
          className={`flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-1 rounded-lg transition-all active:scale-95 shrink-0 ${
            copied
              ? 'bg-emerald-600 text-white'
              : isDark
              ? 'bg-slate-800 hover:bg-slate-700 text-amber-300'
              : 'bg-white hover:bg-amber-100/60 border border-amber-200 text-amber-900'
          }`}
        >
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      {/* Primary Mathematical Equation Display */}
      <div className={`p-3 sm:p-5 flex items-center justify-center text-center ${
        isDark ? 'bg-black/30' : 'bg-amber-50/30'
      }`}>
        <div className="w-full">
          <div className="text-xs sm:text-xl lg:text-2xl font-mono font-black tracking-wide leading-relaxed px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-amber-900 dark:text-amber-300 select-all overflow-x-auto">
            {formula.equation}
          </div>
        </div>
      </div>

      {/* Variables & Parameters Breakdown ("Where:") */}
      {formula.variables && formula.variables.length > 0 && (
        <div className="px-3 sm:px-5 py-2.5 sm:py-3 border-t border-inherit bg-black/2 dark:bg-white/2">
          <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider mb-2 text-amber-800 dark:text-amber-400 flex items-center gap-1.5">
            <Info className="w-3 h-3" />
            <span>Parameters &amp; Symbols Breakdown:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
            {formula.variables.map((v, vIdx) => (
              <div 
                key={vIdx}
                className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl flex items-center justify-between gap-2 border ${
                  isDark 
                    ? 'bg-slate-800/60 border-slate-700/60' 
                    : 'bg-white border-amber-100 shadow-2xs'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="font-mono font-black text-amber-600 dark:text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded text-xs shrink-0">
                    {v.symbol}
                  </span>
                  <span className="font-medium text-slate-700 dark:text-slate-200 truncate">
                    {v.meaning}
                  </span>
                </div>
                {v.unit && (
                  <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 text-slate-500 dark:text-slate-400 shrink-0">
                    {v.unit}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* When & Why to Apply */}
      {formula.whenToApply && (
        <div className="px-3 sm:px-5 py-2 sm:py-2.5 border-t border-inherit flex items-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
          <span className="text-amber-600 dark:text-amber-400 font-bold shrink-0 mt-0.5">📌</span>
          <div className="leading-relaxed">
            <strong className="font-black text-amber-900 dark:text-amber-300 mr-1">When to Apply:</strong>
            <span className="text-slate-700 dark:text-slate-300 font-medium">{formula.whenToApply}</span>
          </div>
        </div>
      )}

      {/* Common Mistake / Examiner Trap */}
      {formula.trap && (
        <div className={`px-3 sm:px-5 py-2 sm:py-2.5 border-t border-inherit flex items-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs ${
          isDark ? 'bg-red-950/20 text-red-300' : 'bg-red-50/80 text-red-900'
        }`}>
          <AlertTriangle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
          <div className="leading-relaxed font-medium">
            <strong className="font-black text-red-700 dark:text-red-400 mr-1">Examiner Trap:</strong>
            <span>{formula.trap}</span>
          </div>
        </div>
      )}
    </div>
  );
};
