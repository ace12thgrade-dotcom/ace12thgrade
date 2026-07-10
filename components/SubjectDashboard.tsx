
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Subject, Chapter } from '../types.ts';
import { generateDetailedNotes, generatePremiumPYQs, getActiveKeyCount, getCurrentKeyIndex, getLastRotationReason } from '../services/geminiService.ts';
import { getInstantNotes, getInstantPYQs } from '../services/offlineNotesService.ts';

interface SubjectDashboardProps {
  subject: Subject;
  searchQuery?: string;
  selectedChapter: Chapter | null;
  setSelectedChapter: (chapter: Chapter | null) => void;
}

function decodeBase64(base64: string) {
  try {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  } catch (e) { 
    console.error("Base64 decoding failed", e);
    return new Uint8Array(0); 
  }
}

async function decodeAudioData(data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> {
  const bufferLength = Math.floor(data.byteLength / 2);
  const dataInt16 = new Int16Array(data.buffer, 0, bufferLength);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
  
  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

export interface NotebookConfig {
  theme: 'midnight' | 'cream' | 'chalkboard';
  font: 'handwritten' | 'notebook' | 'sans';
  size: 'sm' | 'md' | 'lg' | 'xl';
}

const AestheticNotebook: React.FC<{ 
  content: string; 
  subject: string; 
  isPyq?: boolean; 
  isRevision?: boolean;
  config: NotebookConfig;
}> = ({ content, subject, isPyq, isRevision, config }) => {
  const lines = content.split('\n');
  const sections: { title: string; lines: string[] }[] = [];
  let currentSection: { title: string; lines: string[] } | null = null;

  lines.forEach(line => {
    const rawLine = line.trim();
    if (!rawLine) return;
    if (/^[\|=_\-\s*●·○#]+$/.test(rawLine) && rawLine.length > 2) return;

    let scrubbed = rawLine.replace(/^(\|)+|(\|)+$/g, '').trim();
    if (!scrubbed) return;

    const upper = scrubbed.toUpperCase();
    const isNewBoxTrigger = 
      upper.startsWith('TOPIC:') || 
      upper.startsWith('QUESTION:') || 
      upper.startsWith('CONCEPT:') ||
      upper.startsWith('Q:') ||
      (rawLine.startsWith('# ')) ||
      (rawLine.startsWith('## ')) ||
      (rawLine.startsWith('**') && rawLine.endsWith('**') && rawLine.length < 80);

    if (isNewBoxTrigger) {
      if (currentSection) sections.push(currentSection);
      const cleanTitle = scrubbed.replace(/TOPIC:|QUESTION:|CONCEPT:|Q:|#|\*\*/gi, '').trim();
      currentSection = { title: cleanTitle, lines: [] };
    } else if (currentSection) {
      currentSection.lines.push(scrubbed);
    } else {
      currentSection = { title: isRevision ? "Chapter Overview" : isPyq ? "MIQ Breakdown" : "Introduction", lines: [scrubbed] };
    }
  });
  if (currentSection) sections.push(currentSection);

  // Colors based on theme and section index
  const getSectionStyles = (idx: number, theme: 'midnight' | 'cream' | 'chalkboard') => {
    const index = idx % 5;
    if (theme === 'cream') {
      const colors = [
        { border: 'border-[#bfdbfe] border-l-4 border-l-blue-500', bg: 'bg-blue-50/20 hover:bg-blue-50/40', text: 'text-blue-950', badge: 'bg-blue-100 text-blue-900', titleColor: 'text-blue-900' },
        { border: 'border-[#fecdd3] border-l-4 border-l-rose-500', bg: 'bg-rose-50/20 hover:bg-rose-50/40', text: 'text-rose-950', badge: 'bg-rose-100 text-rose-900', titleColor: 'text-rose-900' },
        { border: 'border-[#fef08a] border-l-4 border-l-amber-500', bg: 'bg-amber-50/10 hover:bg-amber-50/30', text: 'text-amber-950', badge: 'bg-amber-100 text-amber-900', titleColor: 'text-amber-900' },
        { border: 'border-[#a7f3d0] border-l-4 border-l-emerald-500', bg: 'bg-emerald-50/10 hover:bg-emerald-50/30', text: 'text-emerald-950', badge: 'bg-emerald-100 text-emerald-900', titleColor: 'text-emerald-900' },
        { border: 'border-[#ddd6fe] border-l-4 border-l-purple-500', bg: 'bg-purple-50/20 hover:bg-purple-50/40', text: 'text-purple-950', badge: 'bg-purple-100 text-purple-900', titleColor: 'text-purple-900' },
      ];
      return colors[index];
    } else if (theme === 'chalkboard') {
      const colors = [
        { border: 'border-cyan-500/30 border-l-4 border-l-cyan-400', bg: 'bg-cyan-950/10 hover:bg-cyan-950/20', text: 'text-cyan-200', badge: 'bg-cyan-900/60 text-cyan-200', titleColor: 'text-cyan-300' },
        { border: 'border-pink-500/30 border-l-4 border-l-pink-400', bg: 'bg-pink-950/10 hover:bg-pink-950/20', text: 'text-pink-200', badge: 'bg-pink-900/60 text-pink-200', titleColor: 'text-pink-300' },
        { border: 'border-yellow-500/30 border-l-4 border-l-yellow-400', bg: 'bg-yellow-950/10 hover:bg-yellow-950/20', text: 'text-yellow-100', badge: 'bg-yellow-900/60 text-yellow-200', titleColor: 'text-yellow-300' },
        { border: 'border-emerald-500/30 border-l-4 border-l-emerald-400', bg: 'bg-emerald-950/10 hover:bg-emerald-950/20', text: 'text-emerald-200', badge: 'bg-emerald-900/60 text-emerald-200', titleColor: 'text-emerald-300' },
        { border: 'border-orange-500/30 border-l-4 border-l-orange-400', bg: 'bg-orange-950/10 hover:bg-orange-950/20', text: 'text-orange-200', badge: 'bg-orange-900/60 text-orange-200', titleColor: 'text-orange-300' },
      ];
      return colors[index];
    } else {
      // midnight
      const colors = [
        { border: 'border-indigo-500/20 border-l-4 border-l-indigo-500', bg: 'bg-indigo-500/5 hover:bg-indigo-500/10', text: 'text-slate-300', badge: 'bg-indigo-500/20 text-indigo-300', titleColor: 'text-indigo-300' },
        { border: 'border-pink-500/20 border-l-4 border-l-pink-500', bg: 'bg-pink-500/5 hover:bg-pink-500/10', text: 'text-slate-300', badge: 'bg-pink-500/20 text-pink-300', titleColor: 'text-pink-300' },
        { border: 'border-amber-500/20 border-l-4 border-l-amber-500', bg: 'bg-amber-500/5 hover:bg-amber-500/10', text: 'text-slate-300', badge: 'bg-amber-500/20 text-amber-300', titleColor: 'text-amber-300' },
        { border: 'border-emerald-500/20 border-l-4 border-l-emerald-500', bg: 'bg-emerald-500/5 hover:bg-emerald-500/10', text: 'text-slate-300', badge: 'bg-emerald-500/20 text-emerald-300', titleColor: 'text-emerald-300' },
        { border: 'border-purple-500/20 border-l-4 border-l-purple-500', bg: 'bg-purple-500/5 hover:bg-purple-500/10', text: 'text-slate-300', badge: 'bg-purple-500/20 text-purple-300', titleColor: 'text-purple-300' },
      ];
      return colors[index];
    }
  };

  const getFontClass = (font: 'handwritten' | 'notebook' | 'sans') => {
    if (font === 'handwritten') return 'font-handwritten tracking-wide';
    if (font === 'notebook') return 'font-notebook tracking-widest';
    return 'font-sans';
  };

  const getSizeClass = (size: 'sm' | 'md' | 'lg' | 'xl') => {
    if (size === 'sm') return 'text-[12px] lg:text-[14px]';
    if (size === 'md') return 'text-[14px] lg:text-[16px]';
    if (size === 'lg') return 'text-[16px] lg:text-[18px]';
    return 'text-[18px] lg:text-[21px]';
  };

  return (
    <div className={`space-y-6 lg:space-y-10 w-full max-w-full mx-auto pb-24 px-1 overflow-x-hidden min-w-0 ${getFontClass(config.font)} ${getSizeClass(config.size)}`}>
      {sections.map((section, idx) => {
        const style = getSectionStyles(idx, config.theme);
        return (
          <React.Fragment key={idx}>
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 w-full overflow-hidden min-w-0">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-[10px] ${style.badge}`}>
                  {idx + 1}
                </div>
                <h3 className={`font-black uppercase tracking-tighter text-sm lg:text-base ${style.titleColor}`}>
                  {section.title}
                </h3>
              </div>
              <div className={`p-6 lg:p-10 rounded-[2rem] lg:rounded-[3rem] border transition-all duration-500 relative overflow-hidden ${
                config.theme === 'cream' 
                  ? 'bg-[#fdfbf7] border-[#e8dfcf] shadow-md hover:shadow-lg' 
                  : config.theme === 'chalkboard'
                  ? 'bg-[#182e23] border-[#2b4c3d] shadow-lg'
                  : 'premium-card hover:border-indigo-500/20'
              } ${style.border} ${style.bg}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="space-y-4 relative z-10">
                  {section.lines.map((l, li) => {
                    const isInsight = l.toUpperCase().includes('INSIGHT:');
                    const isSolution = l.toUpperCase().includes('SOLUTION:');
                    const isQuestion = l.toUpperCase().includes('QUESTION:');
                    
                    return (
                      <p key={li} className={`leading-relaxed font-bold ${
                        isInsight 
                          ? config.theme === 'cream'
                            ? 'text-indigo-900 p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 italic'
                            : config.theme === 'chalkboard'
                            ? 'text-cyan-300 p-4 bg-cyan-950/40 rounded-2xl border border-cyan-800/40 italic'
                            : 'text-indigo-400 p-4 bg-indigo-500/5 rounded-2xl border border-indigo-500/10 italic'
                          : isSolution 
                          ? config.theme === 'cream'
                            ? 'text-slate-800 border-l-4 border-amber-600 pl-4 py-2'
                            : config.theme === 'chalkboard'
                            ? 'text-[#dcebe1] border-l-4 border-emerald-500 pl-4 py-2'
                            : 'text-slate-200 border-l-4 border-indigo-500 pl-4 py-2'
                          : isQuestion 
                          ? config.theme === 'cream'
                            ? 'text-slate-900 font-extrabold text-base lg:text-lg'
                            : config.theme === 'chalkboard'
                            ? 'text-white font-extrabold text-base lg:text-lg'
                            : 'text-white text-base lg:text-lg'
                          : config.theme === 'cream'
                          ? 'text-slate-700'
                          : config.theme === 'chalkboard'
                          ? 'text-[#b4d1be]'
                          : 'text-slate-400'
                      }`}>
                        {l.replace(/INSIGHT:|SOLUTION:|QUESTION:/gi, '').trim()}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
            
          </React.Fragment>
        );
      })}
    </div>
  );
};

const ChapterView: React.FC<{ chapter: Chapter; subject: Subject; onClose: () => void }> = ({ chapter, subject, onClose }) => {
  const [view, setView] = useState<'notes' | 'pyqs'>('notes');
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSyncingAI, setIsSyncingAI] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(true); // Content is unlocked instantly and offline-capable!
  const [isSpeaking, setIsSpeaking] = useState(false); // Browser Speech Synthesis State
  const [error, setError] = useState<string | null>(null);
  const isRevision = chapter.id.includes('_rev');

  // Default to chalkboard (Chalk), handwritten (Playpen), and md (medium) as requested
  const [theme, setTheme] = useState<'midnight' | 'cream' | 'chalkboard'>(() => {
    return (localStorage.getItem('ace12_theme') as any) || 'chalkboard';
  });
  const [font, setFont] = useState<'handwritten' | 'notebook' | 'sans'>(() => {
    return (localStorage.getItem('ace12_font') as any) || 'handwritten';
  });
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg' | 'xl'>(() => {
    return (localStorage.getItem('ace12_fontSize') as any) || 'md';
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
    if (!isUnlocked) return;
    
    stopAudio();

    if (forceLiveSync) {
      setIsSyncingAI(true);
      setError(null);
      try {
        let result = '';
        if (view === 'notes') result = await generateDetailedNotes(subject.name, chapter.title);
        else if (view === 'pyqs') result = await generatePremiumPYQs(subject.name, chapter.title);
        setContent(result);
      } catch (e: any) {
        setError(e.message || "Failed to sync live AI notes. Please check your internet connection.");
      } finally {
        setIsSyncingAI(false);
      }
    } else {
      setIsLoading(true);
      setError(null);
      try {
        let result = '';
        if (view === 'notes') {
          result = await getInstantNotes(subject.id, subject.name, chapter.title);
        } else {
          result = await getInstantPYQs(subject.id, subject.name, chapter.title);
        }
        setContent(result);
      } catch (e: any) {
        setError("Error loading offline material.");
      } finally {
        setIsLoading(false);
      }
    }
  }, [view, subject.id, subject.name, chapter.title, isUnlocked]);

  useEffect(() => { 
    loadContent(false); // Default to INSTANT, OFFLINE study material
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

    window.speechSynthesis.cancel(); // Cancel any current speech

    // Construct a beautiful, highly conversational "Human Teacher Lecture" script
    let teacherScript = "";
    
    if (view === 'notes') {
      teacherScript += `Hello students! Today we are going to learn and revise the key concepts of the chapter: ${chapter.title} in Class 12 ${subject.name}, strictly following the latest 2026-27 CBSE pattern. `;
      
      const lines = content.split('\n');
      lines.forEach(line => {
        const raw = line.trim();
        if (!raw) return;
        
        if (raw.toUpperCase().startsWith("TOPIC:")) {
          const topicName = raw.substring(6).trim();
          teacherScript += `Our next main topic is: ${topicName}. Pay close attention to this. `;
        } else if (raw.toUpperCase().startsWith("INSIGHT:")) {
          const insightText = raw.substring(8).trim();
          teacherScript += `Please listen to this critical warning: ${insightText}. This is a frequent board trap! `;
        } else if (!raw.toUpperCase().startsWith("QUESTION:") && !raw.toUpperCase().startsWith("SOLUTION:")) {
          teacherScript += raw + " ";
        }
      });
    } else {
      teacherScript += `Hello students, let's go through the most important and frequently asked CBSE board questions for ${chapter.title}. I will explain the correct step-by-step answering method. `;
      
      const lines = content.split('\n');
      let qNum = 1;
      lines.forEach(line => {
        const raw = line.trim();
        if (!raw) return;

        if (raw.toUpperCase().startsWith("QUESTION:")) {
          teacherScript += `Question number ${qNum} is: ${raw.substring(9).replace(/Q\d+\.?/gi, '').trim()}. `;
          qNum++;
        } else if (raw.toUpperCase().startsWith("INSIGHT:")) {
          const insightText = raw.substring(8).trim();
          teacherScript += `Your teacher's advisory for this question is: ${insightText}. `;
        } else if (raw.toUpperCase().startsWith("SOLUTION:")) {
          teacherScript += `Let's understand the correct solution steps: ${raw.substring(9).trim()}. `;
        }
      });
    }

    const cleanSpeechScript = teacherScript
      .replace(/\*\*|#/g, '')
      .replace(/q\d+\.?\s*/gi, '')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanSpeechScript);
    
    // Choose a friendly English voice
    const voices = window.speechSynthesis.getVoices();
    const optimalVoice = voices.find(v => v.lang.startsWith('en-IN') || v.name.includes('India') || v.name.includes('Heera') || v.name.includes('Rishi'))
      || voices.find(v => v.lang.startsWith('en'))
      || voices[0];

    if (optimalVoice) {
      utterance.voice = optimalVoice;
    }

    utterance.rate = 0.95; // Calm, comprehensible, real teacher speed
    utterance.pitch = 1.05; // Slightly higher pitch for engaging, warm feel

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
    };

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  // Dynamically computed theme styles for whole viewing window
  const getThemeClasses = () => {
    if (theme === 'cream') {
      return {
        bg: 'bg-[#faf6ee] text-slate-800 transition-colors duration-500',
        header: 'bg-[#faf6ee] border-[#e3d7bf] text-amber-950',
        title: 'text-amber-950',
        subtitle: 'text-amber-800/80',
        asideBg: 'bg-[#f5ebd6] border-[#dfd1b3] text-amber-900',
        buttonClass: 'bg-[#e3d7bf] hover:bg-[#d8ccb2] text-amber-950',
        controlActive: 'bg-[#818cf8] text-white shadow-lg',
        controlInactive: 'bg-[#e3d7bf]/40 text-[#6e5d48] hover:bg-[#e3d7bf]/80',
      };
    }
    if (theme === 'chalkboard') {
      return {
        bg: 'bg-[#14231c] text-[#dcebe1] transition-colors duration-500',
        header: 'bg-[#1b2f25]/90 border-[#264435] text-white',
        title: 'text-white',
        subtitle: 'text-emerald-300',
        asideBg: 'bg-[#1a3227] border-[#294c3c] text-[#b4d1be]',
        buttonClass: 'bg-[#294c3c] hover:bg-[#34624d] text-white',
        controlActive: 'bg-emerald-500 text-white shadow-lg',
        controlInactive: 'bg-[#294c3c]/50 text-emerald-300 hover:bg-[#294c3c]',
      };
    }
    // midnight slate (default premium)
    return {
      bg: 'bg-[#020617] text-slate-300 transition-colors duration-500',
      header: 'bg-slate-950/40 border-white/5 text-white',
      title: 'text-white',
      subtitle: 'text-slate-400',
      asideBg: 'bg-indigo-600/5 border-indigo-500/10 text-slate-300',
      buttonClass: 'bg-white/5 hover:bg-white/10 text-white',
      controlActive: 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20',
      controlInactive: 'bg-slate-900/60 text-slate-500 hover:text-white',
    };
  };

  const styleConfig = getThemeClasses();

  return (
    <div className={`flex flex-col h-full overflow-hidden min-w-0 ${styleConfig.bg}`}>
      {/* Dynamic Header */}
      <div className={`px-4 lg:px-12 py-4 lg:py-6 border-b flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0 transition-colors duration-500 ${styleConfig.header}`}>
        <div className="flex items-center gap-4 lg:gap-6">
          <button onClick={onClose} className={`w-10 h-10 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center transition-all shrink-0 ${styleConfig.buttonClass}`}>←</button>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-[7px] lg:text-[8px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-full ${isRevision ? 'bg-purple-500/20 text-purple-400' : 'bg-indigo-500/20 text-indigo-400'}`}>
                {isRevision ? 'Final Revision' : 'Module'}
              </span>
              <span className={`text-[7px] lg:text-[8px] font-bold uppercase tracking-widest ${styleConfig.subtitle}`}>{subject.name}</span>
            </div>
            <h2 className={`text-base lg:text-2xl font-black tracking-tighter leading-none line-clamp-1 ${styleConfig.title}`}>{chapter.title}</h2>
          </div>
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <div className={`flex p-1 rounded-xl lg:rounded-[1.5rem] border ${theme === 'cream' ? 'border-[#e3d7bf] bg-[#ede5d0]' : theme === 'chalkboard' ? 'border-[#264435] bg-[#12231b]' : 'border-white/5 bg-slate-900/60'} shadow-2xl shrink-0`}>
            <button 
              onClick={() => setView('notes')}
              className={`px-4 lg:px-10 py-1.5 lg:py-3 rounded-lg lg:rounded-2xl text-[8px] lg:text-[11px] font-black uppercase tracking-widest transition-all ${view === 'notes' ? styleConfig.controlActive : 'text-slate-500 hover:text-white'}`}
            >
              Study Notes
            </button>
            <button 
              onClick={() => setView('pyqs')}
              className={`px-4 lg:px-10 py-1.5 lg:py-3 rounded-lg lg:rounded-2xl text-[8px] lg:text-[11px] font-black uppercase tracking-widest transition-all ${view === 'pyqs' ? styleConfig.controlActive : 'text-slate-500 hover:text-white'}`}
            >
              15Y PYQs
            </button>
          </div>
          
          <button 
            onClick={isSpeaking ? stopAudio : playAudio}
            title={isSpeaking ? "Stop AI Reader" : "Play AI Reader"}
            className={`w-10 h-10 lg:w-14 lg:h-14 flex items-center justify-center rounded-xl lg:rounded-2xl transition-all border shadow-2xl shrink-0 ${
              isSpeaking ? 'bg-red-500 border-red-400 text-white animate-pulse' :
              theme === 'cream'
              ? 'bg-[#818cf8]/10 border-[#818cf8]/30 text-indigo-600 hover:bg-[#818cf8] hover:text-white'
              : 'bg-indigo-600/10 border-indigo-500/20 text-indigo-400 hover:bg-indigo-600 hover:text-white'
            }`}
          >
            {isSpeaking ? '■' : '🔊'}
          </button>
        </div>
      </div>

      {/* Customizable Eye-Comfort Reader Toolbar */}
      {isUnlocked && !isLoading && !error && (
        <div className={`px-4 lg:px-12 py-2.5 border-b flex flex-wrap items-center justify-between gap-4 text-xs shrink-0 select-none ${theme === 'cream' ? 'bg-[#ede5d0]/50 border-[#e3d7bf]/80' : theme === 'chalkboard' ? 'bg-[#1b2f25]/50 border-[#264435]/80' : 'bg-slate-900/30 border-white/5'}`}>
          {/* Theme Selector */}
          <div className="flex items-center gap-2">
            <span className={`text-[9px] font-black uppercase tracking-wider ${theme === 'cream' ? 'text-amber-900/60' : theme === 'chalkboard' ? 'text-emerald-300/60' : 'text-slate-500'}`}>Theme:</span>
            <div className="flex gap-1 bg-black/5 p-0.5 rounded-lg">
              <button 
                onClick={() => setTheme('cream')} 
                title="Warm Cream Paper"
                className={`px-2.5 py-1 rounded text-[10px] font-bold transition-all ${theme === 'cream' ? 'bg-[#faf6ee] text-amber-950 shadow-sm' : 'text-slate-400 hover:text-white'}`}
              >
                📜 Cream
              </button>
              <button 
                onClick={() => setTheme('chalkboard')} 
                title="Chalkboard Board"
                className={`px-2.5 py-1 rounded text-[10px] font-bold transition-all ${theme === 'chalkboard' ? 'bg-[#14231c] text-emerald-200 shadow-sm' : 'text-slate-400 hover:text-white'}`}
              >
                🌿 Chalk
              </button>
              <button 
                onClick={() => setTheme('midnight')} 
                title="Midnight Slate"
                className={`px-2.5 py-1 rounded text-[10px] font-bold transition-all ${theme === 'midnight' ? 'bg-[#020617] text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
              >
                🌙 Midnight
              </button>
            </div>
          </div>

          {/* Font Selector */}
          <div className="flex items-center gap-2">
            <span className={`text-[9px] font-black uppercase tracking-wider ${theme === 'cream' ? 'text-amber-900/60' : theme === 'chalkboard' ? 'text-emerald-300/60' : 'text-slate-500'}`}>Font:</span>
            <div className="flex gap-1 bg-black/5 p-0.5 rounded-lg">
              <button 
                onClick={() => setFont('handwritten')} 
                className={`px-2 py-1 rounded text-[10px] font-bold transition-all ${font === 'handwritten' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
              >
                ✍️ Playpen
              </button>
              <button 
                onClick={() => setFont('notebook')} 
                className={`px-2 py-1 rounded text-[10px] font-bold transition-all ${font === 'notebook' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
              >
                📓 Kalam
              </button>
              <button 
                onClick={() => setFont('sans')} 
                className={`px-2 py-1 rounded text-[10px] font-bold transition-all ${font === 'sans' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
              >
                ✏️ Clean
              </button>
            </div>
          </div>

          {/* Font Size */}
          <div className="flex items-center gap-2">
            <span className={`text-[9px] font-black uppercase tracking-wider ${theme === 'cream' ? 'text-amber-900/60' : theme === 'chalkboard' ? 'text-emerald-300/60' : 'text-slate-500'}`}>Size:</span>
            <div className="flex bg-black/5 p-0.5 rounded-lg text-[9px] font-bold">
              {(['sm', 'md', 'lg', 'xl'] as const).map(s => (
                <button 
                  key={s}
                  onClick={() => setFontSize(s)}
                  className={`px-2.5 py-1 rounded uppercase transition-all ${fontSize === s ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
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
            className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md ${
              isSyncingAI 
                ? 'bg-slate-800 text-slate-500 cursor-wait' 
                : 'bg-indigo-600 text-white hover:bg-indigo-500 hover:scale-105 active:scale-95'
            }`}
          >
            {isSyncingAI ? (
              <>
                <span className="w-2 h-2 rounded-full border border-t-transparent border-slate-400 animate-spin"></span>
                Syncing AI...
              </>
            ) : (
              '✨ Sync AI Notes'
            )}
          </button>
        </div>
      )}

      {/* Main Content Pane */}
      <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 py-6 lg:py-12 flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="flex-1 min-w-0">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-[50vh] space-y-8">
                <div className="relative">
                  <div className="w-20 h-20 lg:w-32 lg:h-32 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center font-black text-[10px] text-indigo-400 uppercase tracking-widest animate-pulse">ACE</div>
                </div>
                <div className="text-center space-y-2">
                  <p className={`font-black text-sm lg:text-xl uppercase tracking-tighter ${theme === 'cream' ? 'text-amber-950' : 'text-white'}`}>Assembling Revision Archives...</p>
                  <p className="text-slate-500 text-[8px] font-bold uppercase tracking-[0.4em]">Optimizing Offline Database</p>
                </div>
              </div>
            ) : error ? (
              <div className={`p-10 lg:p-20 text-center rounded-[2rem] lg:rounded-[3rem] border ${theme === 'cream' ? 'bg-[#fdfbf7] border-[#e8dfcf]' : theme === 'chalkboard' ? 'bg-[#182e23] border-[#2b4c3d]' : 'premium-card'}`}>
                <div className="text-3xl lg:text-6xl mb-6">⚠️</div>
                <p className="text-red-400 font-black text-sm lg:text-xl uppercase tracking-tighter mb-6">{error}</p>
                <button onClick={() => loadContent(true)} className="px-8 py-3.5 bg-indigo-600 text-white rounded-full font-black text-[9px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">Force Live Sync</button>
              </div>
            ) : (
              <AestheticNotebook 
                content={content} 
                subject={subject.name} 
                isPyq={view === 'pyqs'} 
                isRevision={isRevision} 
                config={{ theme, font, size: fontSize }}
              />
            )}
          </div>
          
          {/* Sidebar Study Tips & Desk widgets */}
          <aside className="w-full lg:w-48 shrink-0 hidden lg:block">
            <div className="sticky top-10 space-y-8">
              <div className={`p-6 rounded-[2rem] border transition-all duration-500 ${styleConfig.asideBg}`}>
                <span className="text-[7px] font-black uppercase tracking-widest block mb-2 opacity-70">Study Guide</span>
                <p className="text-[11px] font-bold leading-relaxed italic">
                  Focus on "Insight" sections for direct examiner traps identified in our 15-year CBSE audit.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

const SubjectDashboard: React.FC<SubjectDashboardProps> = ({ subject, searchQuery = '', selectedChapter, setSelectedChapter }) => {
  const filteredChapters = subject.chapters.filter(ch => 
    ch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ch.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedChapter) {
    return <ChapterView chapter={selectedChapter} subject={subject} onClose={() => setSelectedChapter(null)} />;
  }

  return (
    <div className="p-4 lg:p-10 max-w-7xl mx-auto w-full animate-in fade-in duration-700 h-full flex flex-col">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-16 shrink-0 px-2 lg:px-0">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/5 rounded-2xl lg:rounded-[2rem] border border-white/10 flex items-center justify-center text-3xl lg:text-4xl shadow-2xl">{subject.icon}</div>
            <div>
              <h1 className="text-3xl lg:text-5xl font-black text-white tracking-tighter">{subject.name}</h1>
              <p className="text-slate-500 text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.4em] mt-1 lg:mt-2">Premium 2026 Board Archive</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 lg:gap-3">
             <div className="px-3 lg:px-4 py-1.5 lg:py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[8px] lg:text-[9px] font-black text-indigo-400 uppercase tracking-widest flex items-center gap-2">
               <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"></span> 4250+ PYQs Analyzed
             </div>
             <div className="px-3 lg:px-4 py-1.5 lg:py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-[8px] lg:text-[9px] font-black text-purple-400 uppercase tracking-widest">
               Latest 2026 Syllabus
             </div>
          </div>
        </div>
        
        <div className="hidden lg:flex flex-col items-end gap-2 p-4 bg-slate-900/30 rounded-2xl border border-white/5">
          <span className="text-[7px] font-black text-slate-500 uppercase tracking-widest">Global Key Status</span>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="block text-white font-black text-sm tracking-tighter leading-none">{getActiveKeyCount()} Active</span>
              <span className="text-[8px] font-bold text-indigo-400 uppercase">Pool Capacity</span>
            </div>
            <div className="w-[1px] h-6 bg-white/5"></div>
            <div className="text-right">
              <span className="block text-white font-black text-sm tracking-tighter leading-none">#{getCurrentKeyIndex()}</span>
              <span className="text-[8px] font-bold text-slate-500 uppercase">Index</span>
            </div>
          </div>
          {getLastRotationReason() && (
            <div className="mt-2 text-[7px] font-black text-amber-500 uppercase tracking-widest animate-pulse">
              Rotated: {getLastRotationReason()}
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-24 px-2 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 px-2 lg:px-0">
            {filteredChapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => setSelectedChapter(chapter)}
                className={`group relative text-left p-6 lg:p-10 rounded-[2.5rem] lg:rounded-[3.5rem] transition-all duration-500 border border-white/5 flex flex-col justify-between h-auto lg:h-[320px] overflow-hidden ${
                  chapter.id.includes('_rev') 
                    ? 'bg-gradient-to-br from-purple-600/20 via-slate-900/40 to-slate-950 border-purple-500/20 hover:border-purple-500/40' 
                    : 'bg-slate-900/20 hover:bg-slate-900/40 hover:border-indigo-500/20'
                }`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-indigo-500/10 transition-all duration-700"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4 lg:mb-6">
                    <span className={`text-[8px] lg:text-[9px] font-black uppercase tracking-[0.4em] ${chapter.id.includes('_rev') ? 'text-purple-400' : 'text-indigo-400'}`}>
                      {chapter.id.includes('_rev') ? 'Mastery Pack' : 'Module ' + chapter.id.replace(/[a-z]/gi, '')}
                    </span>
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/20 group-hover:text-white transition-colors duration-500">→</div>
                  </div>
                  <h3 className="text-lg lg:text-2xl font-black text-white tracking-tighter leading-tight mb-3 lg:mb-4 group-hover:translate-x-1 transition-transform duration-500">{chapter.title}</h3>
                  <p className="text-slate-500 text-[11px] lg:text-[12px] font-medium leading-relaxed line-clamp-2">{chapter.description}</p>
                </div>

                <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                  <div className="flex gap-4 lg:gap-6">
                    <div className="flex flex-col">
                      <span className="text-[7px] font-black text-slate-600 uppercase tracking-widest">Notes</span>
                      <span className="text-[9px] font-bold text-white uppercase">Premium</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[7px] font-black text-slate-600 uppercase tracking-widest">PYQs</span>
                      <span className="text-[9px] font-bold text-white uppercase">Analysed</span>
                    </div>
                  </div>
                  <div className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest ${chapter.id.includes('_rev') ? 'bg-purple-500/10 text-purple-400' : 'bg-white/5 text-slate-500'}`}>
                    Start Learning
                  </div>
                </div>
              </button>
            ))}
          </div>

          <aside className="w-full lg:w-[220px] shrink-0 space-y-8 hidden lg:block">
            <div className="premium-card p-6 rounded-[2rem] bg-indigo-600/5 border-indigo-500/10">
              <span className="text-[7px] font-black text-indigo-400 uppercase tracking-widest block mb-4">Preparation Progress</span>
              <div className="space-y-4">
                 <div>
                   <div className="flex justify-between text-[9px] font-bold text-slate-300 mb-2 uppercase">
                     <span>Notes Completed</span>
                     <span>0%</span>
                   </div>
                   <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                     <div className="w-0 h-full bg-indigo-500 rounded-full"></div>
                   </div>
                 </div>
                 <div>
                   <div className="flex justify-between text-[9px] font-bold text-slate-300 mb-2 uppercase">
                     <span>PYQ Mastery</span>
                     <span>0%</span>
                   </div>
                   <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                     <div className="w-0 h-full bg-purple-500 rounded-full"></div>
                   </div>
                 </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default SubjectDashboard;
