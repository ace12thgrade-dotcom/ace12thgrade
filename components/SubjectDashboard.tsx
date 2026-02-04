
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

    // Remove decorative symbol lines
    if (/^[\|=_\-\s*●·○#]+$/.test(rawLine) && rawLine.length > 2) return;

    let scrubbed = rawLine.replace(/^(\|)+|(\|)+$/g, '').trim();
    if (!scrubbed) return;

    const upper = scrubbed.toUpperCase();
    
    // Check if we should start a new box
    const isNewBoxTrigger = 
      upper.startsWith('TOPIC:') || 
      upper.startsWith('QUESTION:') || 
      upper.startsWith('CONCEPT:') ||
      upper.startsWith('Q:') ||
      (rawLine.startsWith('# ')) ||
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
    <div className="space-y-12 lg:space-y-24 w-full max-w-full mx-auto pb-32 px-1 overflow-x-hidden min-w-0">
      {sections.map((section, idx) => (
        <div key={idx} className="animate-in fade-in slide-in-from-bottom-16 duration-1000 w-full overflow-hidden min-w-0">
          <div className="flex items-center gap-5 mb-8 px-4">
            <div className={`w-3.5 h-12 rounded-full shadow-2xl shrink-0 ${isRevision ? 'bg-purple-500 shadow-purple-500/40' : isPyq ? 'bg-orange-500 shadow-orange-500/40' : 'bg-indigo-500 shadow-indigo-500/40'}`}></div>
            <h3 className="text-base lg:text-[32px] font-black text-white uppercase tracking-tight break-words min-w-0 leading-[1.1] drop-shadow-xl">
              {section.title}
            </h3>
          </div>

          <div className={`bg-[#0f172a]/95 backdrop-blur-3xl rounded-[3rem] lg:rounded-[5rem] p-8 lg:p-20 border border-white/5 hover:border-indigo-500/20 transition-all duration-1000 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.8)] relative overflow-hidden w-full break-words min-w-0 group`}>
            <div className={`absolute -top-40 -right-40 w-96 h-96 blur-[150px] opacity-10 pointer-events-none transition-opacity duration-1000 group-hover:opacity-20 ${isPyq ? 'bg-orange-500' : 'bg-indigo-500'}`}></div>
            
            <div className="space-y-10 relative z-10 w-full overflow-hidden min-w-0">
              {section.lines.map((line, lIdx) => {
                const upper = line.toUpperCase();
                
                // Tags: MARKS, YEAR
                if (upper.startsWith('YEAR:') || upper.startsWith('MARKS:')) {
                  const parts = line.split(':');
                  const label = parts[0].trim();
                  const body = parts.slice(1).join(':').trim();
                  return (
                    <div key={lIdx} className="flex items-center gap-4 mb-3 flex-wrap">
                      <span className="px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] rounded-xl bg-white/5 text-slate-300 border border-white/10">
                        {label}
                      </span>
                      <p className="text-indigo-400 text-sm lg:text-[18px] font-bold tracking-tight">{body}</p>
                    </div>
                  );
                }

                // Solution or Detailed Explanation
                if (upper.startsWith('SOLUTION:') || upper.startsWith('EXPLANATION:') || upper.startsWith('PROOF:') || upper.startsWith('PROCEDURE:')) {
                  const parts = line.split(':');
                  const label = parts[0].trim();
                  const body = parts.slice(1).join(':').trim();
                  return (
                    <div key={lIdx} className="mt-12 pt-12 border-t border-white/5 w-full">
                      <div className="flex items-center gap-4 mb-8">
                        <span className={`w-2 h-8 rounded-full ${isPyq ? 'bg-orange-500' : 'bg-indigo-500'}`}></span>
                        <span className="text-[12px] font-black text-slate-500 uppercase tracking-[0.4em]">{label}</span>
                      </div>
                      <div className="text-slate-100 text-[16px] lg:text-[22px] font-medium leading-[1.9] whitespace-pre-line tracking-tight opacity-95">
                        {body}
                      </div>
                    </div>
                  );
                }

                // Special section for Hinglish Insights
                if (upper.startsWith('INSIGHT:')) {
                  const parts = line.split(':');
                  const body = parts.slice(1).join(':').trim();
                  return (
                    <div key={lIdx} className="mt-10 p-8 bg-indigo-500/5 rounded-3xl border border-indigo-500/10 flex gap-5 items-start">
                      <div className="text-2xl mt-1">💡</div>
                      <div>
                        <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest block mb-2">AceBot Hint (Hinglish)</span>
                        <p className="text-slate-300 text-[14px] lg:text-[18px] font-bold leading-relaxed">{body}</p>
                      </div>
                    </div>
                  );
                }

                // Standard Text
                const isSubHeader = line.startsWith('**') && line.endsWith('**');
                return (
                  <div key={lIdx} className={`text-slate-300 leading-relaxed tracking-tight break-words ${isSubHeader ? 'text-white font-black text-lg lg:text-[28px] mt-12 mb-8 border-b border-white/10 pb-6 block' : 'text-[16px] lg:text-[21px] font-medium opacity-90'}`}>
                    {line.split('**').map((part, i) => i % 2 === 1 ? <strong key={i} className="text-white font-black underline decoration-indigo-500/40 underline-offset-8 decoration-2">{part}</strong> : part)}
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
        <div className="max-w-full lg:max-w-[1200px] mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 w-full min-w-0">
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
          <div className="bg-slate-950/40 backdrop-blur-3xl rounded-[3rem] lg:rounded-[4rem] border border-white/5 shadow-2xl overflow-hidden w-full min-w-0">
            <div className="p-8 lg:p-20 bg-gradient-to-br from-indigo-950/20 via-slate-950 to-black relative">
              <h2 className="text-2xl lg:text-6xl font-black tracking-tighter text-white break-words min-w-0 leading-tight">{selectedChapter.title}</h2>
            </div>
            <div className="flex border-b border-white/5 bg-slate-950/70 items-center justify-between px-6 lg:px-16 overflow-x-auto no-scrollbar">
              <div className="flex gap-6 lg:gap-14">
                {['summary', 'notes', 'pyqs'].map((tab) => (
                  <button key={tab} disabled={loading} onClick={() => setViewMode(tab as any)} className={`px-2 lg:px-10 py-6 lg:py-12 text-[10px] lg:text-[12px] font-black uppercase tracking-[0.3em] transition-all border-b-4 ${viewMode === tab ? `border-indigo-500 text-white` : 'border-transparent text-slate-500'}`}>{tab}</button>
                ))}
              </div>
              {viewMode === 'notes' && content && !loading && !error && (
                <button onClick={handleListen} disabled={isAudioLoading} className={`px-5 lg:px-10 py-3 lg:py-5 rounded-2xl text-[9px] lg:text-[11px] font-black uppercase tracking-widest ${isPlaying ? 'bg-red-600' : 'bg-indigo-600'} text-white shadow-2xl transform active:scale-95 transition-all`}>{isPlaying ? 'STOP' : 'LISTEN'}</button>
              )}
            </div>
            <div className="p-6 lg:p-20 min-h-[500px] w-full min-w-0">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20 lg:py-32 gap-8 text-center">
                  <div className="relative">
                    <div className="w-20 h-20 border-4 border-indigo-500/10 rounded-full"></div>
                    <div className="absolute inset-0 w-20 h-20 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-500 text-[11px] font-black tracking-[0.4em] uppercase">{rotationReason ? `Switching Keys: ${rotationReason}` : "Generating Premium Insights..."}</p>
                    <p className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest">Active Key Analysis #{currentKeyIdx}</p>
                  </div>
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center py-20 gap-8 text-center animate-in fade-in max-w-3xl mx-auto">
                  <div className="w-24 h-24 bg-red-500/10 rounded-3xl flex items-center justify-center text-4xl mb-4">⚠️</div>
                  <h4 className="text-white text-xl lg:text-2xl font-black uppercase tracking-tighter">Connection Error</h4>
                  <div className="text-slate-400 text-sm font-medium leading-relaxed bg-black/40 p-8 rounded-3xl border border-white/5 text-left w-full break-words shadow-2xl">{error}</div>
                  <div className="flex flex-col sm:flex-row gap-6 mt-10">
                    <button disabled={cooldown > 0} onClick={fetchData} className={`px-12 py-5 ${cooldown > 0 ? 'bg-slate-800 text-slate-500' : 'bg-indigo-600 hover:bg-indigo-500 text-white'} rounded-full text-[11px] font-black uppercase tracking-[0.3em] transition-all shadow-2xl active:scale-95`}>{cooldown > 0 ? `Wait ${cooldown}s` : 'Retry with next key'}</button>
                  </div>
                </div>
              ) : viewMode === 'summary' ? (
                <div className="space-y-12 animate-in fade-in duration-1000">
                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12">
                     <div className="p-8 bg-slate-900/60 border border-white/5 rounded-[3rem] shadow-xl"><span className="text-[10px] font-black uppercase text-slate-500 mb-6 block tracking-widest">Priority</span><p className="text-3xl lg:text-5xl font-black text-white tracking-tighter">HIGH</p></div>
                     <div className="p-8 bg-slate-900/60 border border-white/5 rounded-[3rem] shadow-xl"><span className="text-[10px] font-black uppercase text-slate-500 mb-6 block tracking-widest">Analysis</span><p className="text-3xl lg:text-5xl font-black text-white tracking-tighter">PREMIUM</p></div>
                     <div className="p-8 bg-slate-900/60 border border-white/5 rounded-[3rem] shadow-xl"><span className="text-[10px] font-black uppercase text-slate-500 mb-6 block tracking-widest">Status</span><p className="text-3xl lg:text-5xl font-black text-white tracking-tighter">LOADED</p></div>
                   </div>
                   <div className="p-10 lg:p-20 bg-indigo-600/5 border border-indigo-500/10 rounded-[4rem] relative overflow-hidden group shadow-2xl"><p className="text-slate-300 font-bold leading-relaxed text-base lg:text-[24px] relative z-10">Select <span className="text-indigo-400 underline decoration-indigo-400/30 underline-offset-8">Notes</span> for detailed concept boxes or <span className="text-orange-400 underline decoration-orange-400/30 underline-offset-8">PYQs</span> for 2026 Board questions.</p></div>
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
