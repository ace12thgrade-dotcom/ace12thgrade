
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Subject, Chapter } from '../types.ts';
import { generateDetailedNotes, generatePremiumPYQs, generateChapterAudio, getActiveKeyCount, getCurrentKeyIndex, getLastRotationReason } from '../services/geminiService.ts';
import AdBanner from './AdBanner.tsx';

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

const AestheticNotebook: React.FC<{ content: string; subject: string; isPyq?: boolean; isRevision?: boolean }> = ({ content, subject, isPyq, isRevision }) => {
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

  return (
    <div className="space-y-6 lg:space-y-10 w-full max-w-full mx-auto pb-24 px-1 overflow-x-hidden min-w-0">
      {sections.map((section, idx) => (
        <div key={idx} className="animate-in fade-in slide-in-from-bottom-8 duration-700 w-full overflow-hidden min-w-0">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-black text-[10px]">{idx + 1}</div>
            <h3 className="text-sm lg:text-base font-black text-white uppercase tracking-tighter">{section.title}</h3>
          </div>
          <div className="premium-card p-6 lg:p-10 rounded-[2rem] lg:rounded-[3rem] group hover:border-indigo-500/20 transition-all duration-500 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-indigo-500/10 transition-all"></div>
             <div className="space-y-4 relative z-10">
               {section.lines.map((l, li) => {
                 const isInsight = l.toUpperCase().includes('INSIGHT:');
                 const isSolution = l.toUpperCase().includes('SOLUTION:');
                 const isQuestion = l.toUpperCase().includes('QUESTION:');
                 
                 return (
                   <p key={li} className={`text-xs lg:text-[14px] leading-relaxed font-bold tracking-tight ${
                     isInsight ? 'text-indigo-400 p-4 bg-indigo-500/5 rounded-2xl border border-indigo-500/10 italic' : 
                     isSolution ? 'text-slate-200 border-l-4 border-indigo-500 pl-4 py-2' :
                     isQuestion ? 'text-white text-base lg:text-lg' :
                     'text-slate-400'
                   }`}>
                     {l.replace(/INSIGHT:|SOLUTION:|QUESTION:/gi, '').trim()}
                   </p>
                 );
               })}
             </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ChapterView: React.FC<{ chapter: Chapter; subject: Subject; onClose: () => void }> = ({ chapter, subject, onClose }) => {
  const [view, setView] = useState<'notes' | 'pyqs'>('notes');
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [audioBase64, setAudioBase64] = useState<string | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);
  const isRevision = chapter.id.includes('_rev');

  const loadContent = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setAudioBase64(null);
    stopAudio();
    try {
      let result = '';
      if (view === 'notes') result = await generateDetailedNotes(subject.name, chapter.title);
      else if (view === 'pyqs') result = await generatePremiumPYQs(subject.name, chapter.title);
      setContent(result);
    } catch (e: any) {
      setError(e.message || "Failed to load content. Try rotating keys.");
    } finally {
      setIsLoading(false);
    }
  }, [view, subject.name, chapter.title]);

  useEffect(() => { loadContent(); }, [loadContent]);

  const stopAudio = () => {
    if (sourceNodeRef.current) {
      try { sourceNodeRef.current.stop(); } catch(e) {}
      sourceNodeRef.current = null;
    }
  };

  const playAudio = async () => {
    if (isAudioLoading) return;
    if (audioBase64) {
      await startPlayback(audioBase64);
      return;
    }

    setIsAudioLoading(true);
    try {
      const data = await generateChapterAudio(content, subject.name);
      if (data) {
        setAudioBase64(data);
        await startPlayback(data);
      }
    } catch (e) {
      console.error("Audio failed", e);
    } finally {
      setIsAudioLoading(false);
    }
  };

  const startPlayback = async (base64: string) => {
    stopAudio();
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    const ctx = audioContextRef.current;
    if (ctx.state === 'suspended') await ctx.resume();

    const bytes = decodeBase64(base64);
    const audioBuffer = await decodeAudioData(bytes, ctx, 24000, 1);
    const source = ctx.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(ctx.destination);
    source.start();
    sourceNodeRef.current = source;
  };

  return (
    <div className="flex flex-col h-full bg-[#020617] animate-in fade-in slide-in-from-right-10 duration-500 overflow-hidden min-w-0">
      <div className="px-4 lg:px-12 py-4 lg:py-10 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0 bg-slate-950/40 backdrop-blur-xl">
        <div className="flex items-center gap-4 lg:gap-6">
          <button onClick={onClose} className="w-10 h-10 lg:w-14 lg:h-14 bg-white/5 hover:bg-white/10 rounded-xl lg:rounded-2xl flex items-center justify-center text-white transition-all shrink-0">←</button>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-[7px] lg:text-[8px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-full ${isRevision ? 'bg-purple-500/20 text-purple-400' : 'bg-indigo-500/20 text-indigo-400'}`}>
                {isRevision ? 'Final Revision' : 'Module'}
              </span>
              <span className="text-[7px] lg:text-[8px] font-bold text-slate-500 uppercase tracking-widest">{subject.name}</span>
            </div>
            <h2 className="text-base lg:text-3xl font-black text-white tracking-tighter leading-none line-clamp-1">{chapter.title}</h2>
          </div>
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <div className="flex bg-slate-900/60 p-1 rounded-xl lg:rounded-[1.5rem] border border-white/5 shadow-2xl shrink-0">
            <button 
              onClick={() => setView('notes')}
              className={`px-4 lg:px-10 py-1.5 lg:py-3.5 rounded-lg lg:rounded-2xl text-[8px] lg:text-[11px] font-black uppercase tracking-widest transition-all ${view === 'notes' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20' : 'text-slate-500 hover:text-white'}`}
            >
              Study Notes
            </button>
            <button 
              onClick={() => setView('pyqs')}
              className={`px-4 lg:px-10 py-1.5 lg:py-3.5 rounded-lg lg:rounded-2xl text-[8px] lg:text-[11px] font-black uppercase tracking-widest transition-all ${view === 'pyqs' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20' : 'text-slate-500 hover:text-white'}`}
            >
              15Y PYQs
            </button>
          </div>
          
          <button 
            onClick={isAudioLoading ? undefined : (sourceNodeRef.current ? stopAudio : playAudio)}
            className={`w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center rounded-xl lg:rounded-[1.5rem] transition-all border shadow-2xl shrink-0 ${
              isAudioLoading ? 'bg-slate-800 border-white/5 cursor-wait' :
              sourceNodeRef.current ? 'bg-red-500 border-red-400 text-white animate-pulse' :
              'bg-indigo-600/10 border-indigo-500/20 text-indigo-400 hover:bg-indigo-600 hover:text-white hover:scale-105 active:scale-95'
            }`}
          >
            {isAudioLoading ? '...' : sourceNodeRef.current ? '■' : '🔊'}
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 py-6 lg:py-16 flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="flex-1 min-w-0">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-[50vh] space-y-8">
                <div className="relative">
                  <div className="w-20 h-20 lg:w-32 lg:h-32 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center font-black text-[10px] text-indigo-400 uppercase tracking-widest">ACE</div>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-white font-black text-sm lg:text-xl uppercase tracking-tighter">Drafting Revision Assets...</p>
                  <p className="text-slate-500 text-[8px] font-bold uppercase tracking-[0.4em]">Checking 15Y Board Archives</p>
                </div>
              </div>
            ) : error ? (
              <div className="premium-card p-10 lg:p-20 text-center rounded-[2rem] lg:rounded-[3rem]">
                <div className="text-3xl lg:text-6xl mb-6">⚠️</div>
                <p className="text-red-400 font-black text-sm lg:text-xl uppercase tracking-tighter mb-4">{error}</p>
                <button onClick={loadContent} className="px-8 py-3 bg-indigo-600 text-white rounded-full font-black text-[9px] uppercase tracking-widest hover:scale-105 transition-all">Force Sync</button>
              </div>
            ) : (
              <>
                {/* Mobile Ad Space Top */}
                <div className="lg:hidden mb-12">
                   <AdBanner />
                   <div className="h-[1px] w-full bg-white/5 mt-8"></div>
                </div>
                <AestheticNotebook content={content} subject={subject.name} isPyq={view === 'pyqs'} isRevision={isRevision} />
              </>
            )}
          </div>
          
          <aside className="w-full lg:w-48 shrink-0 hidden lg:block">
            <div className="sticky top-10 space-y-8">
              <div className="premium-card p-6 rounded-[2rem] bg-indigo-600/5 border-indigo-500/10">
                <span className="text-[7px] font-black text-indigo-400 uppercase tracking-widest block mb-2">Study Tip</span>
                <p className="text-[11px] font-bold text-slate-300 leading-relaxed italic">
                  Focus on "Insight" sections for examiner traps identified in our 15-year audit.
                </p>
              </div>
              <AdBanner />
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

      <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
        {/* Mobile Ad Slot - Center aligned */}
        <div className="lg:hidden mb-12 w-full flex justify-center">
           <AdBanner />
        </div>

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
            <AdBanner />
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
