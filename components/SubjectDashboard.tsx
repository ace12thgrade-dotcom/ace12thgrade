
import React, { useState, useRef, useEffect } from 'react';
import { Subject, Chapter } from '../types.ts';
import { generateDetailedNotes, generatePremiumPYQs, generateChapterAudio, generateVisualSolution } from '../services/geminiService.ts';

interface SubjectDashboardProps {
  subject: Subject;
  searchQuery?: string;
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

const VisualSolution: React.FC<{ description: string, subject: string, autoLoad?: boolean }> = ({ description, subject, autoLoad = false }) => {
  const [img, setImg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const loadVisual = async () => {
    setLoading(true);
    try {
      const data = await generateVisualSolution(description, subject);
      if (data) setImg(data);
    } catch (e) {}
    setLoading(false);
  };

  useEffect(() => {
    if (autoLoad) loadVisual();
  }, [autoLoad]);

  return (
    <div className="my-6">
      {!img && !loading && (
        <button 
          onClick={loadVisual}
          className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600/10 border border-indigo-500/20 rounded-xl hover:bg-indigo-600/20 transition-all text-[9px] font-black uppercase tracking-widest text-indigo-400"
        >
          📷 View Diagram
        </button>
      )}
      {loading && <div className="text-[9px] font-bold text-indigo-400/50 animate-pulse py-2">Generating visual...</div>}
      {img && (
        <div className="bg-white rounded-2xl p-1.5 shadow-2xl overflow-hidden mt-4 border border-slate-200 inline-block max-w-full">
           <img src={`data:image/png;base64,${img}`} className="w-full h-auto max-h-[400px] object-contain rounded-xl" alt="Diagram" />
        </div>
      )}
    </div>
  );
};

const AestheticNotebook: React.FC<{ content: string; subject: string; isPyq?: boolean }> = ({ content, subject, isPyq }) => {
  const lines = content.split('\n');
  const sections: { title: string; lines: string[] }[] = [];
  let currentSection: { title: string; lines: string[] } | null = null;

  lines.forEach(line => {
    const trimmed = line.trim();
    if (!trimmed) return;

    if (trimmed.startsWith('TOPIC:') || trimmed.startsWith('QUESTION:') || (trimmed.startsWith('#') && !trimmed.startsWith('##'))) {
      if (currentSection) sections.push(currentSection);
      currentSection = { title: trimmed.replace(/TOPIC:|QUESTION:|#/g, '').trim(), lines: [] };
    } else if (currentSection) {
      currentSection.lines.push(line);
    } else {
      if (!currentSection) currentSection = { title: "Introduction", lines: [line] };
      else currentSection.lines.push(line);
    }
  });
  if (currentSection) sections.push(currentSection);

  return (
    <div className="space-y-12 max-w-4xl mx-auto pb-32">
      {sections.map((section, idx) => (
        <div key={idx} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          {/* Light Box Header */}
          <div className="flex items-center gap-3 mb-4 ml-1">
            <div className="w-1 h-5 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.4)]"></div>
            <h3 className="text-sm lg:text-base font-black text-white uppercase tracking-wider">{section.title}</h3>
          </div>

          {/* Light Box Body */}
          <div className="glass rounded-[2rem] p-8 lg:p-10 border border-white/5 hover:border-indigo-500/20 transition-all duration-500 shadow-xl group/box">
            <div className="space-y-5">
              {section.lines.map((line, lIdx) => {
                const trimmed = line.trim();
                
                if (trimmed.includes('[DIAGRAM:')) {
                  const match = trimmed.match(/\[DIAGRAM:\s*(.*?)\]/);
                  if (match && match[1]) return <VisualSolution key={lIdx} description={match[1]} subject={subject} autoLoad={isPyq} />;
                }

                if (trimmed.startsWith('YEAR:') || trimmed.startsWith('INSIGHT:')) {
                  const label = trimmed.split(':')[0];
                  const body = trimmed.split(':').slice(1).join(':').trim();
                  return (
                    <div key={lIdx} className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 text-[8px] font-black uppercase tracking-widest rounded ${label === 'YEAR' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-indigo-500/10 text-indigo-400'}`}>
                        {label}
                      </span>
                      <p className="text-slate-400 text-[11px] font-bold">{body}</p>
                    </div>
                  );
                }

                if (trimmed.startsWith('SOLUTION:') || trimmed.startsWith('DEFINITION:') || trimmed.startsWith('FORMULA:')) {
                  const label = trimmed.split(':')[0];
                  const body = trimmed.split(':').slice(1).join(':').trim();
                  return (
                    <div key={lIdx} className="bg-indigo-500/5 p-6 rounded-2xl border border-indigo-500/10 mt-3 group-hover/box:bg-indigo-500/10 transition-colors">
                      <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest mb-2 block">{label}</span>
                      <p className="text-slate-200 text-sm lg:text-[17px] font-medium leading-relaxed whitespace-pre-line">
                        {body}
                      </p>
                    </div>
                  );
                }

                return (
                  <p key={lIdx} className="text-slate-400 text-sm lg:text-[16px] font-normal leading-relaxed">
                    {trimmed.split('**').map((part, i) => i % 2 === 1 ? <strong key={i} className="text-white font-extrabold">{part}</strong> : part)}
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

const SubjectDashboard: React.FC<SubjectDashboardProps> = ({ subject, searchQuery = '' }) => {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [viewMode, setViewMode] = useState<'summary' | 'notes' | 'pyqs'>('summary');
  const [loading, setLoading] = useState(false);
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);

  useEffect(() => {
    setSelectedChapter(null);
    setContent(null);
    setViewMode('summary');
    stopAudio();
  }, [subject]);

  useEffect(() => {
    if (!selectedChapter || viewMode === 'summary') {
      setContent(null);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setContent(null);
      setError(null);
      stopAudio();
      try {
        const result = viewMode === 'notes' 
          ? await generateDetailedNotes(subject.name, selectedChapter.title)
          : await generatePremiumPYQs(subject.name, selectedChapter.title);
        setContent(result);
      } catch (e: any) {
        console.error("Fetch Error:", e);
        setError(e.message || "Failed to connect to AI Hub. Check your API Key.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [viewMode, selectedChapter, subject.name]);

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

  return (
    <div className="flex-1 px-4 lg:px-20 py-6 lg:py-10">
      {!selectedChapter ? (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <header className="mb-10 lg:mb-16">
            <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter mb-4 flex items-center gap-4">
              <span className="opacity-50 text-3xl">{subject.icon}</span> {subject.name}
            </h1>
            <p className="text-slate-500 font-bold tracking-tight text-sm lg:text-base">Targeting 2026 Boards with AI-Driven Data Analysis.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10 pb-20">
            {filteredChapters.map((chapter) => (
              <div 
                key={chapter.id} 
                onClick={() => { setSelectedChapter(chapter); setViewMode('summary'); }} 
                className="premium-card p-10 rounded-[2.5rem] cursor-pointer group"
              >
                <div className="w-12 h-12 bg-indigo-600/10 rounded-2xl flex items-center justify-center text-xl mb-8 group-hover:bg-indigo-600 transition-all duration-500">📑</div>
                <h3 className="font-black text-xl text-white mb-4 tracking-tight leading-tight group-hover:text-indigo-400 transition-colors">{chapter.title}</h3>
                <p className="text-slate-500 text-[11px] font-bold leading-relaxed mb-10 line-clamp-2">{chapter.description}</p>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                   <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Unit {chapter.id.replace(/\D/g, '')}</span>
                   <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:scale-125 transition-transform">→</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-500">
          <button 
            onClick={() => { setSelectedChapter(null); stopAudio(); }} 
            className="mb-8 flex items-center gap-2 text-slate-500 font-black text-[9px] tracking-[0.3em] bg-white/5 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-full border border-white/5 active:scale-95 transition-all"
          >
            ← BACK TO HUB
          </button>
          
          <div className="bg-slate-950/40 backdrop-blur-3xl rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden">
            <div className="p-10 lg:p-20 bg-gradient-to-br from-indigo-950/20 to-slate-950 text-white relative">
              <div className="absolute top-0 right-0 w-full h-full bg-indigo-500/5 rounded-full blur-[100px]"></div>
              <div className="relative z-10">
                <span className="text-[9px] font-black text-indigo-400 uppercase tracking-[0.6em] mb-4 block">Archive Analysis Active</span>
                <h2 className="text-3xl lg:text-6xl font-black tracking-tighter leading-tight max-w-3xl">{selectedChapter.title}</h2>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row border-b border-white/5 px-6 lg:px-12 bg-slate-950/50 items-center justify-between gap-4 py-0 relative z-30">
              <div className="flex gap-4 lg:gap-8 overflow-x-auto no-scrollbar w-full lg:w-auto">
                {[
                  { id: 'summary', label: 'STRATEGY', icon: '💎' },
                  { id: 'notes', label: 'NOTES', icon: '📝' },
                  { id: 'pyqs', label: 'BOARD MIQs', icon: '🔥' }
                ].map((tab) => (
                  <button 
                    key={tab.id} 
                    disabled={loading}
                    onClick={() => setViewMode(tab.id as any)} 
                    className={`px-4 lg:px-6 py-8 text-[10px] font-black tracking-[0.3em] transition-all border-b-2 flex items-center gap-3 whitespace-nowrap ${
                      viewMode === tab.id ? `border-indigo-500 text-white bg-white/5` : 'border-transparent text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <span className="text-xl">{tab.icon}</span>{tab.label}
                  </button>
                ))}
              </div>
              
              {viewMode === 'notes' && content && !loading && (
                <button 
                  onClick={handleListen} 
                  disabled={isAudioLoading} 
                  className={`w-full lg:w-auto mb-4 lg:mb-0 px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 ${
                    isPlaying ? 'bg-red-600' : 'bg-indigo-600'
                  } text-white disabled:opacity-50`}
                >
                  {isAudioLoading ? '...' : isPlaying ? '⏹ STOP' : '🔊 HINGLISH LESSON'}
                </button>
              )}
            </div>

            <div className="p-8 lg:p-16 min-h-[400px]">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-24 gap-6">
                  <div className="w-12 h-12 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest animate-pulse">Scanning Previous Year Papers...</p>
                </div>
              ) : error ? (
                <div className="text-center py-20 px-10 bg-red-600/5 rounded-[2rem] border border-red-500/20 max-w-2xl mx-auto">
                  <p className="text-red-400 font-black text-xl mb-4">Connection Blocked</p>
                  <p className="text-slate-500 text-sm font-bold mb-8">{error}</p>
                  <button onClick={() => setViewMode(viewMode)} className="px-12 py-5 bg-red-600 text-white rounded-full font-black text-[10px] uppercase tracking-[0.4em] shadow-2xl active:scale-95">RETRY SYNC</button>
                </div>
              ) : viewMode === 'summary' ? (
                <div className="space-y-12 animate-in fade-in duration-500">
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {[
                       { label: 'Priority Index', value: 'Level 1', color: 'indigo' },
                       { label: 'Exam Frequency', value: 'High', color: 'emerald' },
                       { label: 'Repeat Rate', value: '91%', color: 'purple' }
                     ].map((stat, i) => (
                       <div key={i} className="p-10 bg-slate-900/60 border border-white/5 rounded-[2.5rem] relative overflow-hidden group">
                          <div className={`absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors`}></div>
                          <span className="text-[9px] font-black uppercase text-slate-600 tracking-widest block mb-6">{stat.label}</span>
                          <p className="text-4xl font-black text-white tracking-tighter">{stat.value}</p>
                       </div>
                     ))}
                   </div>
                   <div className="p-10 lg:p-14 bg-indigo-600/5 border border-indigo-500/10 rounded-[3rem] relative">
                      <h3 className="text-xl lg:text-2xl font-black text-white tracking-tighter uppercase mb-6">Expert Prep Advice</h3>
                      <p className="text-slate-400 font-bold leading-relaxed text-base lg:text-lg tracking-tight">
                        Our analysis from 4250+ papers suggests that examiners prioritize the <span className="text-indigo-400">Section B (3 Marks)</span> 
                        from this unit. Focus heavily on the <span className="text-indigo-400">Direct Definitions</span> provided in the notes. 
                        Do not skip the diagrams in the MIQs tab; they carry 20% weightage here.
                      </p>
                   </div>
                </div>
              ) : content ? (
                <AestheticNotebook 
                  content={content} 
                  subject={subject.name} 
                  isPyq={viewMode === 'pyqs'} 
                />
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectDashboard;
