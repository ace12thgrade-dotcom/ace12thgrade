
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
  } catch (e) { return new Uint8Array(0); }
}

async function decodeAudioData(data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
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
    const trimmed = line.trim();
    if (!trimmed) return;

    if (trimmed.startsWith('QUESTION:') || trimmed.startsWith('TOPIC:') || (trimmed.startsWith('#') && !trimmed.startsWith('##'))) {
      if (currentSection) sections.push(currentSection);
      const cleanTitle = trimmed.replace(/QUESTION:|TOPIC:|#/g, '').trim();
      currentSection = { title: cleanTitle, lines: [] };
    } else if (currentSection) {
      currentSection.lines.push(line);
    } else {
      if (!currentSection) currentSection = { title: isRevision ? "Quick Revision" : "Chapter Concept", lines: [line] };
      else currentSection.lines.push(line);
    }
  });
  if (currentSection) sections.push(currentSection);

  return (
    <div className="space-y-6 lg:space-y-10 w-full max-w-full mx-auto pb-20 px-0 overflow-x-hidden min-w-0">
      {sections.map((section, idx) => (
        <div key={idx} className="animate-in fade-in slide-in-from-bottom-6 duration-700 w-full overflow-hidden min-w-0">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className={`w-1.5 h-5 rounded-full shadow-lg shrink-0 ${isRevision ? 'bg-purple-500' : isPyq ? 'bg-orange-500' : 'bg-indigo-500'}`}></div>
            <h3 className="text-[14px] lg:text-[18px] font-black text-white uppercase tracking-tight break-words min-w-0">
              {section.title}
            </h3>
          </div>

          <div className={`bg-[#0f172a]/95 backdrop-blur-2xl rounded-[1.5rem] lg:rounded-[2.5rem] p-4 lg:p-10 border border-white/5 hover:border-indigo-500/20 transition-all duration-700 shadow-2xl relative group/box overflow-hidden w-full break-words min-w-0`}>
            <div className="space-y-5 relative z-10 w-full overflow-hidden min-w-0">
              {section.lines.map((line, lIdx) => {
                const trimmed = line.trim();
                if (trimmed.startsWith('YEAR:') || trimmed.startsWith('MARKS:') || trimmed.startsWith('INSIGHT:')) {
                  const label = trimmed.split(':')[0];
                  const body = trimmed.split(':').slice(1).join(':').trim();
                  return (
                    <div key={lIdx} className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="px-2 py-0.5 text-[8px] font-black uppercase tracking-widest rounded bg-white/5 text-slate-400">
                        {label}
                      </span>
                      <p className="text-slate-400 text-[10px] font-bold">{body}</p>
                    </div>
                  );
                }
                if (trimmed.startsWith('SOLUTION:') || trimmed.startsWith('PROCEDURE:') || trimmed.startsWith('CALCULATION:') || trimmed.startsWith('PROOF:')) {
                  const body = trimmed.split(':').slice(1).join(':').trim();
                  return (
                    <div key={lIdx} className="bg-white/[0.01] p-4 lg:p-8 rounded-[1.5rem] border border-white/5 mt-5 w-full relative overflow-hidden break-words">
                      <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                      <div className="text-slate-200 text-xs lg:text-[16px] font-medium leading-[1.7] whitespace-pre-line">
                        {body}
                      </div>
                    </div>
                  );
                }
                const isHeading = trimmed === trimmed.toUpperCase() && trimmed.length > 5;
                return (
                  <p key={lIdx} className={`text-slate-300 leading-relaxed tracking-tight break-words ${isHeading ? 'text-white font-black text-xs lg:text-[17px] mt-6 mb-3 border-b border-white/5 pb-2' : 'text-[12px] lg:text-[14px] font-medium opacity-90'}`}>
                    {trimmed.split('**').map((part, i) => i % 2 === 1 ? <strong key={i} className="text-white font-bold">{part}</strong> : part)}
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

const SubjectDashboard: React.FC<SubjectDashboardProps> = ({ subject, searchQuery = '', selectedChapter, setSelectedChapter }) => {
  const [viewMode, setViewMode] = useState<'summary' | 'notes' | 'pyqs'>('summary');
  const [loading, setLoading] = useState(false);
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCached, setIsCached] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  
  const keyCount = getActiveKeyCount();
  const currentKeyIdx = getCurrentKeyIndex();
  const rotationReason = getLastRotationReason();
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);

  useEffect(() => {
    let timer: number;
    if (cooldown > 0) timer = window.setInterval(() => setCooldown(c => c - 1), 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  useEffect(() => {
    setContent(null);
    setViewMode('summary');
    stopAudio();
    setIsCached(false);
    setError(null);
  }, [subject]);

  const fetchData = useCallback(async () => {
    if (!selectedChapter || viewMode === 'summary') {
      setContent(null);
      setLoading(false);
      return;
    }

    const cacheKey = `ace12_cache_${subject.id}_${selectedChapter.id}_${viewMode}`;
    const cachedContent = localStorage.getItem(cacheKey);

    if (cachedContent) {
      setContent(cachedContent);
      setLoading(false);
      setError(null);
      setIsCached(true);
      return;
    }

    setLoading(true);
    setError(null);
    setIsCached(false);
    stopAudio();
    
    try {
      const result = viewMode === 'notes' 
        ? await generateDetailedNotes(subject.name, selectedChapter.title)
        : await generatePremiumPYQs(subject.name, selectedChapter.title);
      
      if (result) {
        localStorage.setItem(cacheKey, result);
        setContent(result);
        setIsCached(true);
      }
    } catch (e: any) {
      console.error("Gemini API Error:", e);
      let errorMessage = e.message || "Network error. Please try again.";
      if (e.message?.includes("429")) {
        errorMessage = "All keys are hitting rate limits. High traffic! Please wait 30 seconds.";
        setCooldown(30);
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [selectedChapter, viewMode, subject.id, subject.name]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const stopAudio = () => {
    if (audioSourceRef.current) {
      try { audioSourceRef.current.stop(); } catch(e) {}
      audioSourceRef.current = null;
    }
    setIsPlaying(false);
  };

  const handleListen = async () => {
    if (isPlaying) { stopAudio(); return; }
    if (!content) return;
    setIsAudioLoading(true);
    try {
      const audioData = await generateChapterAudio(content, subject.name);
      if (audioData) {
        if (!audioContextRef.current) audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        const ctx = audioContextRef.current;
        const bytes = decodeBase64(audioData);
        const buffer = await decodeAudioData(bytes, ctx, 24000, 1);
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(ctx.destination);
        source.onended = () => setIsPlaying(false);
        audioSourceRef.current = source;
        source.start();
        setIsPlaying(true);
      }
    } catch (e) {}
    setIsAudioLoading(false);
  };

  const filteredChapters = subject.chapters.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isRevisionSelected = selectedChapter?.title.toUpperCase().includes("FULL SUBJECT REVISION");

  return (
    <div className="flex-1 w-full px-2 lg:px-10 py-6 lg:py-10 max-w-full overflow-x-hidden min-w-0">
      {!selectedChapter ? (
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000 w-full min-w-0">
          <header className="mb-8 lg:mb-16 text-center lg:text-left px-2 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
              <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-3xl lg:text-6xl shadow-2xl rotate-3">
                {subject.icon}
              </div>
              <div>
                <h1 className="text-2xl lg:text-6xl font-black text-white tracking-tighter mb-2">{subject.name}</h1>
                <p className="text-slate-500 text-[10px] lg:text-lg font-bold tracking-tight">Analyzing {subject.chapters.length} Premium Chapters.</p>
              </div>
            </div>
            {keyCount > 0 && (
              <div className="bg-indigo-600/10 border border-indigo-500/20 px-6 py-3 rounded-2xl flex items-center gap-4">
                <div className="relative">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full"></div>
                </div>
                <div>
                   <span className="text-[10px] font-black text-white uppercase tracking-widest block">Active Key #{currentKeyIdx}</span>
                   <span className="text-[8px] font-bold text-indigo-400 uppercase tracking-[0.2em]">{keyCount} Keys Balanced</span>
                </div>
              </div>
            )}
          </header>
          <div className="flex flex-col lg:flex-row gap-8 pb-10 w-full min-w-0">
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 w-full min-w-0">
              {filteredChapters.map((chapter) => (
                <div key={chapter.id} onClick={() => { setSelectedChapter(chapter); setViewMode('summary'); }} className="premium-card p-5 lg:p-8 rounded-[2rem] cursor-pointer group w-full">
                  <h3 className="font-black text-base lg:text-2xl text-white mb-2 tracking-tight group-hover:text-indigo-400">{chapter.title}</h3>
                  <p className="text-slate-500 text-[9px] lg:text-sm font-bold line-clamp-2">{chapter.description}</p>
                </div>
              ))}
            </div>
            <div className="hidden xl:block w-[160px] shrink-0 sticky top-10 h-fit"><AdBanner /></div>
          </div>
        </div>
      ) : (
        <div className="max-w-full lg:max-w-[1100px] mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 w-full min-w-0">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => { setSelectedChapter(null); stopAudio(); }} className="flex items-center gap-2 text-slate-500 font-black text-[10px] bg-white/5 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-full border border-white/5 transition-all">← BACK</button>
            <div className="flex items-center gap-4">
               {isCached && !error && (
                <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest">Offline Cache Active</span>
                </div>
              )}
            </div>
          </div>
          <div className="bg-slate-950/40 backdrop-blur-3xl rounded-[2rem] lg:rounded-[3.5rem] border border-white/5 shadow-2xl overflow-hidden w-full min-w-0">
            <div className="p-6 lg:p-16 bg-gradient-to-br from-indigo-950/20 via-slate-950 to-black relative">
              <h2 className="text-xl lg:text-5xl font-black tracking-tighter text-white break-words min-w-0">{selectedChapter.title}</h2>
            </div>
            <div className="flex border-b border-white/5 bg-slate-950/70 items-center justify-between px-4 lg:px-12 overflow-x-auto no-scrollbar">
              <div className="flex gap-4 lg:gap-10">
                {['summary', 'notes', 'pyqs'].map((tab) => (
                  <button key={tab} disabled={loading} onClick={() => setViewMode(tab as any)} className={`px-2 lg:px-8 py-5 lg:py-10 text-[9px] font-black uppercase tracking-[0.2em] transition-all border-b-4 ${viewMode === tab ? `border-indigo-500 text-white` : 'border-transparent text-slate-500'}`}>{tab}</button>
                ))}
              </div>
              {viewMode === 'notes' && content && !loading && !error && (
                <button onClick={handleListen} disabled={isAudioLoading} className={`px-4 lg:px-8 py-3 rounded-xl text-[8px] font-black uppercase tracking-widest ${isPlaying ? 'bg-red-600' : 'bg-indigo-600'} text-white shadow-xl`}>{isPlaying ? 'STOP' : 'HEAR LESSON'}</button>
              )}
            </div>
            <div className="p-4 lg:p-14 min-h-[400px] w-full min-w-0">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20 gap-6 text-center">
                  <div className="relative">
                    <div className="w-16 h-16 border-4 border-indigo-500/20 rounded-full"></div>
                    <div className="absolute inset-0 w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-slate-500 text-[10px] font-black tracking-[0.3em] uppercase">{rotationReason ? `Switching Keys: ${rotationReason}` : "Processing Analysis..."}</p>
                    <p className="text-[8px] font-bold text-indigo-400 uppercase tracking-widest">Using Active Key #{currentKeyIdx}</p>
                  </div>
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center py-10 lg:py-20 gap-6 text-center animate-in fade-in max-w-2xl mx-auto">
                  <div className="w-20 h-20 bg-red-500/10 rounded-3xl flex items-center justify-center text-3xl mb-4">⚠️</div>
                  <h4 className="text-white text-lg font-black uppercase tracking-tighter">Connection Error</h4>
                  <div className="text-slate-400 text-xs font-medium leading-relaxed bg-black/40 p-6 rounded-2xl border border-white/5 text-left w-full break-words">{error}</div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <button disabled={cooldown > 0} onClick={fetchData} className={`px-10 py-4 ${cooldown > 0 ? 'bg-slate-800 text-slate-500 grayscale' : 'bg-indigo-600 hover:bg-indigo-500 text-white'} rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-xl active:scale-95`}>{cooldown > 0 ? `Wait ${cooldown}s` : 'Retry with next key'}</button>
                  </div>
                </div>
              ) : viewMode === 'summary' ? (
                <div className="space-y-8 animate-in fade-in duration-1000">
                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8">
                     <div className="p-6 bg-slate-900/60 border border-white/5 rounded-[2rem]"><span className="text-[9px] font-black uppercase text-slate-500 mb-4 block">Priority</span><p className="text-2xl lg:text-4xl font-black text-white">HIGH</p></div>
                     <div className="p-6 bg-slate-900/60 border border-white/5 rounded-[2rem]"><span className="text-[9px] font-black uppercase text-slate-500 mb-4 block">Analysis</span><p className="text-2xl lg:text-4xl font-black text-white">CORE</p></div>
                     <div className="p-6 bg-slate-900/60 border border-white/5 rounded-[2rem]"><span className="text-[9px] font-black uppercase text-slate-500 mb-4 block">Status</span><p className="text-2xl lg:text-4xl font-black text-white">READY</p></div>
                   </div>
                   <div className="p-8 lg:p-12 bg-indigo-600/5 border border-indigo-500/10 rounded-[2.5rem] relative overflow-hidden group"><p className="text-slate-300 font-bold leading-relaxed text-sm lg:text-[20px] relative z-10">Select <span className="text-indigo-400">Notes</span> for 15-year detailed breakdown or <span className="text-orange-400">PYQs</span> for 2026 Board questions.</p></div>
                </div>
              ) : content ? (
                <AestheticNotebook content={content} subject={subject.name} isPyq={viewMode === 'pyqs'} isRevision={isRevisionSelected} />
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectDashboard;
