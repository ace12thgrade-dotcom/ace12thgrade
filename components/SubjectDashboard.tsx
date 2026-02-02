
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
      if (!currentSection) currentSection = { title: isRevision ? "Overview" : "Exam Overview", lines: [line] };
      else currentSection.lines.push(line);
    }
  });
  if (currentSection) sections.push(currentSection);

  return (
    <div className="space-y-8 lg:space-y-10 w-full max-w-5xl mx-auto pb-20 px-2 lg:px-4">
      {sections.map((section, idx) => (
        <div key={idx} className="animate-in fade-in slide-in-from-bottom-6 duration-700 w-full overflow-hidden">
          {/* Section Heading */}
          <div className="flex items-center gap-3 mb-4 px-1">
            <div className={`w-1.5 h-5 rounded-full shadow-lg ${isRevision ? 'bg-purple-500 shadow-purple-500/50' : isPyq ? 'bg-orange-500 shadow-orange-500/50' : 'bg-indigo-500 shadow-indigo-500/50'}`}></div>
            <h3 className="text-[13px] lg:text-[18px] font-black text-white uppercase tracking-tight leading-none break-words max-w-[95%]">
              {section.title}
            </h3>
          </div>

          {/* Solution Body (Optimized Scaling) */}
          <div className={`bg-[#0f172a]/95 backdrop-blur-2xl rounded-[1.5rem] lg:rounded-[2.5rem] p-5 lg:p-10 border border-white/5 hover:border-indigo-500/20 transition-all duration-700 shadow-2xl relative group/box overflow-hidden w-full`}>
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/[0.03] rounded-full blur-[100px] pointer-events-none group-hover/box:bg-indigo-500/[0.06] transition-all"></div>
            
            <div className="space-y-5 relative z-10 w-full">
              {section.lines.map((line, lIdx) => {
                const trimmed = line.trim();
                
                if (trimmed.startsWith('DIAGRAM_GUIDE:')) {
                  const body = trimmed.replace('DIAGRAM_GUIDE:', '').trim();
                  return (
                    <div key={lIdx} className="bg-emerald-500/5 p-5 lg:p-7 rounded-[1.2rem] border border-emerald-500/10 mt-5 group-hover/box:bg-emerald-500/10 transition-all duration-700 w-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                      <div className="flex items-center gap-2 mb-3">
                         <span className="text-[9px] lg:text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em]">VISUAL GUIDE</span>
                      </div>
                      <p className="text-emerald-50/80 text-[11px] lg:text-[15px] font-medium leading-[1.5] tracking-tight whitespace-pre-line break-words italic">
                        {body}
                      </p>
                    </div>
                  );
                }

                if (trimmed.startsWith('YEAR:') || trimmed.startsWith('MARKS:') || trimmed.startsWith('INSIGHT:')) {
                  const label = trimmed.split(':')[0];
                  const body = trimmed.split(':').slice(1).join(':').trim();
                  return (
                    <div key={lIdx} className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className={`px-2.5 py-1 text-[8px] lg:text-[9px] font-black uppercase tracking-[0.3em] rounded-md border ${
                        label === 'YEAR' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                        label === 'MARKS' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                        'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                      }`}>
                        {label}
                      </span>
                      <p className="text-slate-400 text-[10px] lg:text-xs font-black tracking-tight">{body}</p>
                    </div>
                  );
                }

                if (trimmed.startsWith('SOLUTION:') || trimmed.startsWith('PROCEDURE:') || trimmed.startsWith('CALCULATION:') || trimmed.startsWith('PROOF:')) {
                  const label = trimmed.split(':')[0];
                  const body = trimmed.split(':').slice(1).join(':').trim();
                  return (
                    <div key={lIdx} className="bg-white/[0.01] p-5 lg:p-8 rounded-[1.5rem] border border-white/5 mt-5 group-hover/box:bg-white/[0.03] transition-all duration-700 w-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                      <div className="flex items-center gap-2 mb-4">
                         <span className="text-[9px] lg:text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em]">BOARD SOLUTION</span>
                      </div>
                      <div className="text-slate-200 text-xs lg:text-[16px] font-medium leading-[1.7] tracking-tight whitespace-pre-line break-words">
                        {body}
                      </div>
                    </div>
                  );
                }

                const isHeading = trimmed === trimmed.toUpperCase() && trimmed.length > 5;
                return (
                  <p key={lIdx} className={`text-slate-300 leading-relaxed tracking-tight px-1 break-words ${isHeading ? 'text-white font-black text-xs lg:text-[17px] mt-6 mb-3 border-b border-white/5 pb-2' : 'text-[11px] lg:text-[14px] font-medium opacity-90'}`}>
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

  const isRevisionSelected = selectedChapter?.title.toUpperCase().includes("FULL SUBJECT REVISION");

  return (
    <div className="flex-1 px-4 lg:px-10 py-6 lg:py-10 max-w-full overflow-x-hidden">
      {!selectedChapter ? (
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <header className="mb-8 lg:mb-16 text-center lg:text-left px-4">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
              <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-2xl lg:rounded-[2.5rem] bg-indigo-600 text-white flex items-center justify-center text-3xl lg:text-6xl shadow-2xl rotate-3 hover:rotate-0 transition-all duration-1000">
                {subject.icon}
              </div>
              <div>
                <h1 className="text-3xl lg:text-6xl font-black text-white tracking-tighter leading-none mb-3">{subject.name}</h1>
                <p className="text-slate-500 text-xs lg:text-lg font-bold max-w-2xl tracking-tight leading-snug">
                  4250+ Questions analyzed for Board Success.
                </p>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-8 pb-20 px-4">
            {filteredChapters.map((chapter) => (
              <div 
                key={chapter.id} 
                onClick={() => { setSelectedChapter(chapter); setViewMode('summary'); }} 
                className={`premium-card p-6 lg:p-8 rounded-[2rem] lg:rounded-[2.5rem] cursor-pointer group ${chapter.id.includes('_rev') ? 'border-purple-500/30 bg-purple-500/5' : ''}`}
              >
                <div className={`w-10 h-10 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center text-xl lg:text-3xl mb-6 transition-all duration-700 shadow-lg ${chapter.id.includes('_rev') ? 'bg-purple-600' : 'bg-white/5 group-hover:bg-indigo-600'}`}>
                   {chapter.id.includes('_rev') ? '💎' : '📑'}
                </div>
                <h3 className={`font-black text-lg lg:text-2xl text-white mb-3 tracking-tight leading-tight transition-colors ${chapter.id.includes('_rev') ? 'text-purple-400' : 'group-hover:text-indigo-400'}`}>{chapter.title}</h3>
                <p className="text-slate-500 text-[10px] lg:text-sm font-bold leading-relaxed mb-8 line-clamp-2">{chapter.description}</p>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                   <span className="text-[9px] lg:text-[11px] font-black uppercase tracking-[0.3em] text-indigo-400/70">
                      {chapter.id.includes('_rev') ? 'Master Hub' : `Unit ${chapter.id.replace(/\D/g, '')}`}
                   </span>
                   <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:translate-x-1 transition-all shadow-xl">→</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-[1100px] mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 w-full overflow-hidden">
          <button 
            onClick={() => { setSelectedChapter(null); stopAudio(); }} 
            className="mb-6 lg:mb-10 flex items-center gap-3 text-slate-500 font-black text-[9px] lg:text-[11px] tracking-[0.3em] bg-white/5 hover:bg-indigo-600 hover:text-white px-6 lg:px-10 py-3 lg:py-5 rounded-full border border-white/5 active:scale-95 transition-all"
          >
            ← BACK TO ARCHIVE
          </button>
          
          <div className="bg-slate-950/40 backdrop-blur-3xl rounded-[2.5rem] lg:rounded-[3.5rem] border border-white/5 shadow-[0_40px_100px_-25px_rgba(0,0,0,0.8)] overflow-hidden w-full">
            <div className={`p-8 lg:p-20 bg-gradient-to-br ${isRevisionSelected ? 'from-purple-950/20' : 'from-indigo-950/20'} via-slate-950 to-black text-white relative`}>
              <div className={`absolute top-0 right-0 w-full h-full ${isRevisionSelected ? 'bg-purple-500/5' : 'bg-indigo-500/5'} rounded-full blur-[150px] pointer-events-none`}></div>
              <div className="relative z-10">
                <span className={`text-[9px] lg:text-[11px] font-black ${isRevisionSelected ? 'text-purple-400' : 'text-indigo-400'} uppercase tracking-[0.6em] mb-4 lg:mb-8 block`}>
                   {isRevisionSelected ? 'MASTER REVISION HUB' : 'INTELLIGENCE SYNC ACTIVE'}
                </span>
                <h2 className="text-2xl lg:text-5xl font-black tracking-tighter leading-tight max-w-[95%]">{selectedChapter.title}</h2>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row border-b border-white/5 px-6 lg:px-12 bg-slate-950/70 items-center justify-between gap-4 py-0 relative z-30 overflow-x-auto lg:overflow-visible no-scrollbar">
              <div className="flex gap-4 lg:gap-10 overflow-x-auto no-scrollbar w-full lg:w-auto">
                {[
                  { id: 'summary', label: 'STRATEGY', icon: isRevisionSelected ? '🚀' : '💎' },
                  { id: 'notes', label: isRevisionSelected ? 'MASTER SHEET' : 'THEORY', icon: '📝' },
                  { id: 'pyqs', label: 'MIQS', icon: '🔥' }
                ].map((tab) => (
                  <button 
                    key={tab.id} 
                    disabled={loading}
                    onClick={() => setViewMode(tab.id as any)} 
                    className={`px-3 lg:px-8 py-6 lg:py-10 text-[9px] lg:text-[11px] font-black tracking-[0.3em] transition-all border-b-4 flex items-center gap-3 lg:gap-5 whitespace-nowrap ${
                      viewMode === tab.id ? `border-indigo-500 text-white bg-white/5` : 'border-transparent text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <span className="text-lg lg:text-2xl">{tab.icon}</span>{tab.label}
                  </button>
                ))}
              </div>
              
              {viewMode === 'notes' && content && !loading && (
                <button 
                  onClick={handleListen} 
                  disabled={isAudioLoading} 
                  className={`w-full lg:w-auto mb-5 lg:mb-0 px-6 lg:px-8 py-3.5 lg:py-4 rounded-[1.2rem] text-[8px] lg:text-[10px] font-black uppercase tracking-[0.4em] transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-3 lg:gap-4 ${
                    isPlaying ? 'bg-red-600' : 'bg-indigo-600'
                  } text-white disabled:opacity-50`}
                >
                  {isAudioLoading ? '...' : isPlaying ? '⏹ STOP' : '🔊 LESSON'}
                </button>
              )}
            </div>

            <div className="p-5 lg:p-14 min-h-[400px] w-full overflow-hidden">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-32 gap-10">
                  <div className="w-12 h-12 lg:w-20 lg:h-20 border-[6px] lg:border-[8px] border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                  <div className="text-center">
                    <p className="text-white font-black text-xs lg:text-lg uppercase tracking-[0.6em] mb-4">Fetching Solutions</p>
                    <p className="text-slate-500 text-[9px] lg:text-[11px] font-black uppercase tracking-[0.3em] animate-pulse">Scanning Board Patterns...</p>
                  </div>
                </div>
              ) : error ? (
                <div className="text-center py-16 px-6 lg:px-12 bg-red-600/5 rounded-[2.5rem] border border-red-500/10 max-w-2xl mx-auto shadow-2xl">
                  <p className="text-red-400 font-black text-lg lg:text-2xl mb-6 tracking-tight leading-none">Sync Error</p>
                  <p className="text-slate-400 text-xs lg:text-sm font-bold mb-10 leading-relaxed">Check your environment API key settings.</p>
                  <button onClick={() => setViewMode(viewMode)} className="px-8 lg:px-14 py-3 lg:py-5 bg-red-600 text-white rounded-full font-black text-[9px] lg:text-[11px] uppercase tracking-[0.5em] shadow-xl">RETRY</button>
                </div>
              ) : viewMode === 'summary' ? (
                <div className="space-y-10 lg:space-y-14 animate-in fade-in duration-1000 w-full">
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
                     {[
                       { label: 'Priority', value: isRevisionSelected ? 'ULTRA' : 'High', color: 'indigo' },
                       { label: 'History', value: isRevisionSelected ? '98%' : 'Repeats', color: 'emerald' },
                       { label: 'Potential', value: 'Max', color: 'purple' }
                     ].map((stat, i) => (
                       <div key={i} className="p-6 lg:p-10 bg-slate-900/60 border border-white/5 rounded-[2rem] lg:rounded-[3rem] relative overflow-hidden group">
                          <div className={`absolute -top-10 -right-10 w-40 h-40 ${isRevisionSelected ? 'bg-purple-500/10' : 'bg-indigo-500/10'} rounded-full blur-[80px] group-hover:scale-125 transition-transform duration-1000`}></div>
                          <span className="text-[9px] lg:text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] block mb-6">{stat.label}</span>
                          <p className={`text-3xl lg:text-6xl font-black ${isRevisionSelected ? 'text-purple-400' : 'text-white'} tracking-tighter leading-none`}>{stat.value}</p>
                       </div>
                     ))}
                   </div>
                   <div className={`p-6 lg:p-12 ${isRevisionSelected ? 'bg-purple-600/5 border-purple-500/10' : 'bg-indigo-600/5 border-indigo-500/10'} border-2 rounded-[2.5rem] lg:rounded-[3.5rem] relative shadow-2xl`}>
                      <h3 className="text-lg lg:text-2xl font-black text-white tracking-tighter uppercase mb-6 lg:mb-10">
                         {isRevisionSelected ? 'MASTER REVISION STRATEGY' : 'SCORING BLUEPRINT'}
                      </h3>
                      <p className="text-slate-400 font-bold leading-relaxed text-sm lg:text-[20px] tracking-tight">
                        {isRevisionSelected 
                          ? `This Revision Hub covers the entire ${subject.name} syllabus. Study the "MASTER SHEET" tab to see all high-yield formulas and concepts in one single scan. Use this 48 hours before your exam for maximum score retention.`
                          : `Focus on the Premium MIQs. We've included Diagram Guides for fixtures and graphs so you know exactly how to draw them in 2026. Follow the multi-step calculation frameworks carefully.`}
                      </p>
                   </div>
                </div>
              ) : content ? (
                <AestheticNotebook 
                  content={content} 
                  subject={subject.name} 
                  isPyq={viewMode === 'pyqs'} 
                  isRevision={isRevisionSelected}
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
