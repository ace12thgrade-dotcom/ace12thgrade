
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
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className={`w-2 h-8 rounded-full shadow-lg shrink-0 ${isRevision ? 'bg-purple-500 shadow-purple-500/30' : isPyq ? 'bg-orange-500 shadow-orange-500/30' : 'bg-indigo-500 shadow-indigo-500/30'}`}></div>
            <h3 className="text-sm lg:text-[22px] font-black text-white uppercase tracking-tight break-words min-w-0 leading-tight">
              {section.title}
            </h3>
          </div>

          <div className={`bg-[#0f172a]/95 backdrop-blur-3xl rounded-[1.5rem] lg:rounded-[2.5rem] p-5 lg:p-10 border border-white/5 hover:border-indigo-500/20 transition-all duration-500 shadow-xl relative overflow-hidden w-full break-words min-w-0 group`}>
            <div className={`absolute -top-32 -right-32 w-64 h-64 blur-[100px] opacity-10 pointer-events-none ${isPyq ? 'bg-orange-500' : 'bg-indigo-500'}`}></div>
            
            <div className="space-y-6 relative z-10 w-full overflow-hidden min-w-0">
              {section.lines.map((line, lIdx) => {
                const upper = line.toUpperCase();
                
                if (upper.startsWith('YEAR:') || upper.startsWith('MARKS:')) {
                  const parts = line.split(':');
                  const label = parts[0].trim();
                  const body = parts.slice(1).join(':').trim();
                  return (
                    <div key={lIdx} className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] rounded-lg bg-white/5 text-slate-400 border border-white/5">
                        {label}
                      </span>
                      <p className="text-indigo-400 text-xs lg:text-[16px] font-bold">{body}</p>
                    </div>
                  );
                }

                if (upper.startsWith('SOLUTION:') || upper.startsWith('EXPLANATION:') || upper.startsWith('PROOF:') || upper.startsWith('PROCEDURE:')) {
                  const parts = line.split(':');
                  const label = parts[0].trim();
                  const body = parts.slice(1).join(':').trim();
                  return (
                    <div key={lIdx} className="mt-8 pt-6 border-t border-white/5 w-full">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`w-1.5 h-6 rounded-full ${isPyq ? 'bg-orange-500' : 'bg-indigo-500'}`}></span>
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}</span>
                      </div>
                      <div className="text-slate-100 text-[14px] lg:text-[18px] font-medium leading-relaxed whitespace-pre-line tracking-tight opacity-95">
                        {body}
                      </div>
                    </div>
                  );
                }

                if (upper.startsWith('INSIGHT:')) {
                  const parts = line.split(':');
                  const body = parts.slice(1).join(':').trim();
                  return (
                    <div key={lIdx} className="mt-6 p-5 lg:p-8 bg-indigo-500/5 rounded-2xl border border-indigo-500/10 flex gap-4 items-start">
                      <div className="text-xl">💡</div>
                      <div>
                        <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest block mb-1">AceBot Hint</span>
                        <p className="text-slate-300 text-[13px] lg:text-[17px] font-bold leading-relaxed">{body}</p>
                      </div>
                    </div>
                  );
                }

                const isSubHeader = line.startsWith('**') && line.endsWith('**');
                return (
                  <div key={lIdx} className={`text-slate-300 leading-relaxed tracking-tight break-words ${isSubHeader ? 'text-white font-black text-base lg:text-[22px] mt-8 mb-4 border-b border-white/10 pb-4 block' : 'text-[14px] lg:text-[17px] font-medium opacity-90'}`}>
                    {line.split('**').map((part, i) => i % 2 === 1 ? <strong key={i} className="text-white font-black underline decoration-indigo-500/40 underline-offset-4 decoration-1">{part}</strong> : part)}
                  </div>
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
    <div className="flex-1 w-full px-3 lg:px-8 py-4 lg:py-6 max-w-full overflow-x-hidden min-w-0">
      {!selectedChapter ? (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 w-full min-w-0">
          <header className="mb-6 lg:mb-10 text-center lg:text-left px-2 flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-2xl lg:text-4xl shadow-xl rotate-2">
                {subject.icon}
              </div>
              <div>
                <h1 className="text-xl lg:text-4xl font-black text-white tracking-tighter mb-1">{subject.name}</h1>
                <p className="text-slate-500 text-[9px] lg:text-sm font-bold uppercase tracking-widest">Premium Board Analysis</p>
              </div>
            </div>
            {keyCount > 0 && (
              <div className="bg-indigo-600/5 border border-indigo-500/10 px-4 py-2 rounded-xl flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-[9px] font-black text-white uppercase tracking-widest">Key #{currentKeyIdx} Active</span>
              </div>
            )}
          </header>
          <div className="flex flex-col lg:flex-row gap-6 pb-10 w-full min-w-0">
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 w-full min-w-0">
              {filteredChapters.map((chapter) => (
                <div key={chapter.id} onClick={() => { setSelectedChapter(chapter); setViewMode('summary'); }} className="premium-card p-4 lg:p-6 rounded-[1.5rem] lg:rounded-[2rem] cursor-pointer group w-full hover:scale-[1.02] transition-transform">
                  <h3 className="font-black text-sm lg:text-xl text-white mb-1 tracking-tight group-hover:text-indigo-400">{chapter.title}</h3>
                  <p className="text-slate-500 text-[8px] lg:text-xs font-bold line-clamp-2 leading-relaxed">{chapter.description}</p>
                </div>
              ))}
            </div>
            <div className="hidden xl:block w-[160px] shrink-0 sticky top-10 h-fit"><AdBanner /></div>
          </div>
        </div>
      ) : (
        <div className="max-w-full lg:max-w-[1000px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 w-full min-w-0">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => { setSelectedChapter(null); stopAudio(); }} className="flex items-center gap-2 text-slate-500 font-black text-[9px] bg-white/5 hover:bg-indigo-600 hover:text-white px-4 py-2 rounded-full border border-white/5 transition-all">← CHAPTERS</button>
            <div className="flex items-center gap-3">
               {isCached && !error && (
                <div className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                  <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest">Offline Cache</span>
                </div>
              )}
            </div>
          </div>
          <div className="bg-slate-950/40 backdrop-blur-3xl rounded-[2rem] lg:rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden w-full min-w-0">
            <div className="p-6 lg:p-12 bg-gradient-to-br from-indigo-950/20 via-slate-950 to-black relative">
              <h2 className="text-xl lg:text-3xl font-black tracking-tighter text-white break-words min-w-0 leading-tight">{selectedChapter.title}</h2>
            </div>
            <div className="flex border-b border-white/5 bg-slate-950/70 items-center justify-between px-4 lg:px-10 overflow-x-auto no-scrollbar">
              <div className="flex gap-4 lg:gap-10">
                {['summary', 'notes', 'pyqs'].map((tab) => (
                  <button key={tab} disabled={loading} onClick={() => setViewMode(tab as any)} className={`px-2 lg:px-8 py-4 lg:py-6 text-[9px] lg:text-[11px] font-black uppercase tracking-[0.2em] transition-all border-b-2 ${viewMode === tab ? `border-indigo-500 text-white` : 'border-transparent text-slate-500'}`}>{tab}</button>
                ))}
              </div>
              {viewMode === 'notes' && content && !loading && !error && (
                <button onClick={handleListen} disabled={isAudioLoading} className={`px-4 lg:px-6 py-2 rounded-xl text-[8px] lg:text-[10px] font-black uppercase tracking-widest ${isPlaying ? 'bg-red-600' : 'bg-indigo-600'} text-white shadow-xl`}>{isPlaying ? 'STOP' : 'LISTEN'}</button>
              )}
            </div>
            <div className="p-4 lg:p-10 min-h-[400px] w-full min-w-0">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20 lg:py-24 gap-6 text-center">
                  <div className="w-12 h-12 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-slate-500 text-[9px] font-black tracking-[0.3em] uppercase">Analyzing Core Topics...</p>
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center py-10 gap-6 text-center animate-in fade-in max-w-2xl mx-auto">
                  <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center text-2xl">⚠️</div>
                  <div className="text-slate-400 text-xs font-medium leading-relaxed bg-black/40 p-6 rounded-2xl border border-white/5 text-left w-full break-words shadow-lg">{error}</div>
                  <button disabled={cooldown > 0} onClick={fetchData} className={`px-10 py-4 ${cooldown > 0 ? 'bg-slate-800 text-slate-500' : 'bg-indigo-600 text-white'} rounded-full text-[9px] font-black uppercase tracking-widest`}>{cooldown > 0 ? `Wait ${cooldown}s` : 'Retry Analysis'}</button>
                </div>
              ) : viewMode === 'summary' ? (
                <div className="space-y-8 animate-in fade-in duration-700">
                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                     <div className="p-6 bg-slate-900/60 border border-white/5 rounded-2xl"><span className="text-[8px] font-black uppercase text-slate-500 mb-2 block tracking-widest">Weightage</span><p className="text-2xl font-black text-white">HIGH</p></div>
                     <div className="p-6 bg-slate-900/60 border border-white/5 rounded-2xl"><span className="text-[8px] font-black uppercase text-slate-500 mb-2 block tracking-widest">Type</span><p className="text-2xl font-black text-white">CORE</p></div>
                     <div className="p-6 bg-slate-900/60 border border-white/5 rounded-2xl"><span className="text-[8px] font-black uppercase text-slate-500 mb-2 block tracking-widest">Status</span><p className="text-2xl font-black text-white">SYNCED</p></div>
                   </div>
                   <div className="p-8 lg:p-12 bg-indigo-600/5 border border-indigo-500/10 rounded-[2rem] shadow-xl"><p className="text-slate-300 font-bold leading-relaxed text-sm lg:text-[19px]">Select <span className="text-indigo-400">Notes</span> for easy Hinglish concepts or <span className="text-orange-400">PYQs</span> for 2026 Most Important Questions.</p></div>
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
