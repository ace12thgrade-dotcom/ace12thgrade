
import React, { useState, useRef, useEffect } from 'react';
import { Subject, Chapter } from '../types.ts';
import { generateDetailedNotes, generatePremiumPYQs, generateChapterAudio } from '../services/geminiService.ts';

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

const AestheticNotebook: React.FC<{ content: string; subject: string; isPyq?: boolean }> = ({ content, subject, isPyq }) => {
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
      if (!currentSection) currentSection = { title: "Exam Overview", lines: [line] };
      else currentSection.lines.push(line);
    }
  });
  if (currentSection) sections.push(currentSection);

  return (
    <div className="space-y-10 lg:space-y-12 w-full max-w-5xl mx-auto pb-24 px-2 lg:px-4">
      {sections.map((section, idx) => (
        <div key={idx} className="animate-in fade-in slide-in-from-bottom-6 duration-700 w-full overflow-hidden">
          {/* Section Heading */}
          <div className="flex items-center gap-4 mb-5 px-2">
            <div className={`w-2 h-6 rounded-full shadow-xl ${isPyq ? 'bg-orange-500 shadow-orange-500/50' : 'bg-indigo-500 shadow-indigo-500/50'}`}></div>
            <h3 className="text-sm lg:text-xl font-black text-white uppercase tracking-tight leading-none break-words max-w-[95%]">
              {section.title}
            </h3>
          </div>

          {/* Solution Body (Textbook Style) scaled down for efficiency */}
          <div className="bg-[#0f172a]/90 backdrop-blur-3xl rounded-[2rem] lg:rounded-[3rem] p-6 lg:p-12 border border-white/10 hover:border-indigo-500/30 transition-all duration-1000 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] relative group/box overflow-hidden w-full">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/[0.04] rounded-full blur-[120px] pointer-events-none group-hover/box:bg-indigo-500/[0.08] transition-all"></div>
            
            <div className="space-y-6 relative z-10 w-full">
              {section.lines.map((line, lIdx) => {
                const trimmed = line.trim();
                
                if (trimmed.startsWith('DIAGRAM_GUIDE:')) {
                  const body = trimmed.replace('DIAGRAM_GUIDE:', '').trim();
                  return (
                    <div key={lIdx} className="bg-emerald-500/5 p-6 lg:p-8 rounded-[1.5rem] border border-emerald-500/10 mt-6 group-hover/box:bg-emerald-500/10 transition-all duration-700 w-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500"></div>
                      <div className="flex items-center gap-3 mb-4">
                         <span className="text-[10px] lg:text-[11px] font-black text-emerald-400 uppercase tracking-[0.4em]">DIAGRAM GUIDE</span>
                      </div>
                      <p className="text-emerald-50/90 text-xs lg:text-[16px] font-medium leading-[1.6] tracking-tight whitespace-pre-line break-words italic">
                        {body}
                      </p>
                    </div>
                  );
                }

                if (trimmed.startsWith('YEAR:') || trimmed.startsWith('MARKS:') || trimmed.startsWith('INSIGHT:')) {
                  const label = trimmed.split(':')[0];
                  const body = trimmed.split(':').slice(1).join(':').trim();
                  return (
                    <div key={lIdx} className="flex items-center gap-4 mb-4 flex-wrap">
                      <span className={`px-3 py-1 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] rounded-lg border ${
                        label === 'YEAR' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                        label === 'MARKS' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                        'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                      }`}>
                        {label}
                      </span>
                      <p className="text-slate-400 text-xs lg:text-sm font-black tracking-tight">{body}</p>
                    </div>
                  );
                }

                if (trimmed.startsWith('SOLUTION:') || trimmed.startsWith('PROCEDURE:') || trimmed.startsWith('CALCULATION:') || trimmed.startsWith('PROOF:')) {
                  const label = trimmed.split(':')[0];
                  const body = trimmed.split(':').slice(1).join(':').trim();
                  return (
                    <div key={lIdx} className="bg-white/[0.02] p-6 lg:p-10 rounded-[2rem] border border-white/5 mt-6 group-hover/box:bg-white/[0.04] transition-all duration-700 w-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
                      <div className="flex items-center gap-3 mb-6">
                         <span className="text-[10px] lg:text-[11px] font-black text-indigo-400 uppercase tracking-[0.5em]">BOARD SOLUTION</span>
                      </div>
                      <div className="text-slate-200 text-sm lg:text-[18px] font-medium leading-[1.8] tracking-tight whitespace-pre-line break-words">
                        {body}
                      </div>
                    </div>
                  );
                }

                const isHeading = trimmed === trimmed.toUpperCase() && trimmed.length > 5;
                return (
                  <p key={lIdx} className={`text-slate-300 leading-relaxed tracking-tight px-1 break-words ${isHeading ? 'text-white font-black text-sm lg:text-xl mt-8 mb-4' : 'text-xs lg:text-[16px] font-medium opacity-90'}`}>
                    {trimmed.split('**').map((part, i) => i % 2 === 1 ? <strong key={i} className="text-white font-black">{part}</strong> : part)}
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
        setError("Network sync error. Verify your Netlify Environment API_KEY.");
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
    <div className="flex-1 px-4 lg:px-12 py-8 lg:py-12 max-w-full overflow-x-hidden">
      {!selectedChapter ? (
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <header className="mb-10 lg:mb-20 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="w-20 h-20 lg:w-32 lg:h-32 rounded-[2rem] lg:rounded-[3rem] bg-indigo-600 text-white flex items-center justify-center text-4xl lg:text-7xl shadow-3xl rotate-3 hover:rotate-0 transition-all duration-1000">
                {subject.icon}
              </div>
              <div>
                <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter leading-none mb-4">{subject.name}</h1>
                <p className="text-slate-500 text-sm lg:text-xl font-bold max-w-3xl tracking-tight leading-snug">
                  4250+ Questions analyzed for Board Success.
                </p>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10 pb-24">
            {filteredChapters.map((chapter) => (
              <div 
                key={chapter.id} 
                onClick={() => { setSelectedChapter(chapter); setViewMode('summary'); }} 
                className="premium-card p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[4rem] cursor-pointer group"
              >
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/5 rounded-[1.5rem] flex items-center justify-center text-2xl lg:text-4xl mb-8 group-hover:bg-indigo-600 transition-all duration-700 shadow-xl">📑</div>
                <h3 className="font-black text-xl lg:text-3xl text-white mb-4 tracking-tight leading-tight group-hover:text-indigo-400 transition-colors">{chapter.title}</h3>
                <p className="text-slate-500 text-xs lg:text-base font-bold leading-relaxed mb-10 line-clamp-3">{chapter.description}</p>
                <div className="flex items-center justify-between pt-8 border-t border-white/5">
                   <span className="text-[10px] lg:text-[12px] font-black uppercase tracking-[0.4em] text-indigo-500">Unit {chapter.id.replace(/\D/g, '')}</span>
                   <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:scale-110 transition-all duration-700 shadow-2xl">→</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-[1200px] mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 w-full overflow-hidden">
          <button 
            onClick={() => { setSelectedChapter(null); stopAudio(); }} 
            className="mb-8 lg:mb-12 flex items-center gap-4 text-slate-500 font-black text-[10px] lg:text-[12px] tracking-[0.4em] bg-white/5 hover:bg-indigo-600 hover:text-white px-8 lg:px-12 py-4 lg:py-6 rounded-full border border-white/10 active:scale-95 transition-all shadow-xl"
          >
            ← BACK TO ARCHIVE
          </button>
          
          <div className="bg-slate-950/40 backdrop-blur-3xl rounded-[3rem] lg:rounded-[4rem] border border-white/10 shadow-[0_60px_150px_-30px_rgba(0,0,0,0.9)] overflow-hidden w-full">
            <div className="p-10 lg:p-24 bg-gradient-to-br from-indigo-950/30 via-slate-950 to-black text-white relative">
              <div className="absolute top-0 right-0 w-full h-full bg-indigo-500/5 rounded-full blur-[200px] pointer-events-none"></div>
              <div className="relative z-10">
                <span className="text-[10px] lg:text-[12px] font-black text-indigo-400 uppercase tracking-[0.8em] mb-6 lg:mb-10 block">Knowledge Sync Active</span>
                <h2 className="text-3xl lg:text-6xl font-black tracking-tighter leading-tight max-w-[95%]">{selectedChapter.title}</h2>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row border-b border-white/10 px-8 lg:px-16 bg-slate-950/70 items-center justify-between gap-6 py-0 relative z-30 overflow-x-auto lg:overflow-visible no-scrollbar">
              <div className="flex gap-4 lg:gap-12 overflow-x-auto no-scrollbar w-full lg:w-auto">
                {[
                  { id: 'summary', label: 'STRATEGY', icon: '💎' },
                  { id: 'notes', label: 'THEORY', icon: '📝' },
                  { id: 'pyqs', label: 'MIQS', icon: '🔥' }
                ].map((tab) => (
                  <button 
                    key={tab.id} 
                    disabled={loading}
                    onClick={() => setViewMode(tab.id as any)} 
                    className={`px-4 lg:px-10 py-8 lg:py-12 text-[10px] lg:text-[12px] font-black tracking-[0.4em] transition-all border-b-4 flex items-center gap-4 lg:gap-6 whitespace-nowrap ${
                      viewMode === tab.id ? `border-indigo-500 text-white bg-white/10` : 'border-transparent text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <span className="text-xl lg:text-3xl">{tab.icon}</span>{tab.label}
                  </button>
                ))}
              </div>
              
              {viewMode === 'notes' && content && !loading && (
                <button 
                  onClick={handleListen} 
                  disabled={isAudioLoading} 
                  className={`w-full lg:w-auto mb-6 lg:mb-0 px-8 lg:px-10 py-4 lg:py-5 rounded-[1.5rem] text-[9px] lg:text-[11px] font-black uppercase tracking-[0.5em] transition-all shadow-3xl active:scale-95 flex items-center justify-center gap-4 lg:gap-6 ${
                    isPlaying ? 'bg-red-600' : 'bg-indigo-600'
                  } text-white disabled:opacity-50`}
                >
                  {isAudioLoading ? '...' : isPlaying ? '⏹ STOP' : '🔊 LESSON'}
                </button>
              )}
            </div>

            <div className="p-6 lg:p-16 min-h-[500px] w-full overflow-hidden">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-40 gap-12">
                  <div className="w-16 h-16 lg:w-24 lg:h-24 border-[8px] lg:border-[10px] border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                  <div className="text-center">
                    <p className="text-white font-black text-sm lg:text-xl uppercase tracking-[0.8em] mb-6">Syncing Content</p>
                    <p className="text-slate-500 text-[10px] lg:text-[12px] font-black uppercase tracking-[0.4em] animate-pulse">Running Analysis...</p>
                  </div>
                </div>
              ) : error ? (
                <div className="text-center py-20 px-8 lg:px-16 bg-red-600/5 rounded-[3rem] border-2 border-red-500/20 max-w-3xl mx-auto shadow-4xl">
                  <p className="text-red-400 font-black text-xl lg:text-3xl mb-8 tracking-tight leading-none">Sync Error</p>
                  <p className="text-slate-400 text-sm lg:text-lg font-bold mb-12 leading-relaxed">Check your environment API key settings.</p>
                  <button onClick={() => setViewMode(viewMode)} className="px-10 lg:px-16 py-4 lg:py-6 bg-red-600 text-white rounded-full font-black text-[10px] lg:text-[12px] uppercase tracking-[0.6em] shadow-xl">RETRY</button>
                </div>
              ) : viewMode === 'summary' ? (
                <div className="space-y-12 lg:space-y-16 animate-in fade-in duration-1000 w-full">
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                     {[
                       { label: 'Priority', value: 'High', color: 'indigo' },
                       { label: 'History', value: 'Repeats', color: 'emerald' },
                       { label: 'Potential', value: 'Max', color: 'purple' }
                     ].map((stat, i) => (
                       <div key={i} className="p-8 lg:p-12 bg-slate-900/60 border border-white/5 rounded-[2.5rem] lg:rounded-[3rem] relative overflow-hidden group">
                          <div className={`absolute -top-10 -right-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000`}></div>
                          <span className="text-[10px] lg:text-[11px] font-black uppercase text-slate-500 tracking-[0.4em] block mb-8">{stat.label}</span>
                          <p className="text-4xl lg:text-7xl font-black text-white tracking-tighter leading-none">{stat.value}</p>
                       </div>
                     ))}
                   </div>
                   <div className="p-8 lg:p-16 bg-indigo-600/5 border-4 border-indigo-500/10 rounded-[3rem] lg:rounded-[4rem] relative shadow-4xl">
                      <h3 className="text-xl lg:text-3xl font-black text-white tracking-tighter uppercase mb-8 lg:mb-12">Scoring Blueprint</h3>
                      <p className="text-slate-400 font-bold leading-relaxed text-sm lg:text-[24px] tracking-tight">
                        Focus on the <span className="text-indigo-400">Premium MIQs</span>. 
                        We've included **Diagram Guides** for fixtures and graphs so you know exactly how to draw them in 2026.
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
