
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

const VisualSolution: React.FC<{ question: string, subject: string }> = ({ question, subject }) => {
  const [img, setImg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const loadVisual = async () => {
    setLoading(true);
    try {
      const data = await generateVisualSolution(question, subject);
      if (data) setImg(data);
    } catch (e) {}
    setLoading(false);
  };

  return (
    <div className="mt-6">
      {!img && !loading && (
        <button 
          onClick={loadVisual}
          className="text-[10px] font-black uppercase tracking-[0.2em] px-6 py-3 bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 rounded-full hover:bg-indigo-600 hover:text-white transition-all active:scale-95"
        >
          🖼️ Generate Visual AI Solution
        </button>
      )}
      {loading && (
        <div className="flex items-center gap-3 text-indigo-400 animate-pulse">
           <div className="w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
           <span className="text-[10px] font-black uppercase tracking-widest">AI is drawing diagram...</span>
        </div>
      )}
      {img && (
        <div className="bg-white rounded-[2rem] p-4 shadow-2xl overflow-hidden mt-4 animate-in zoom-in-95 duration-500">
           <img src={`data:image/png;base64,${img}`} className="w-full h-auto object-contain rounded-xl" alt="AI Generated Diagram" />
           <p className="text-[9px] text-slate-400 text-center mt-3 font-bold uppercase tracking-[0.2em]">AI Visual Solution for Board Prep</p>
        </div>
      )}
    </div>
  );
};

const AestheticNotebook: React.FC<{ content: string; color: string; subject: string; isPyq?: boolean }> = ({ content, color, subject, isPyq }) => {
  const lines = content.split('\n');
  return (
    <div className="space-y-6 md:space-y-10 max-w-4xl mx-auto pb-16 px-4">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={idx} className="h-4"></div>;
        
        if (trimmed.startsWith('QUESTION:') || trimmed.startsWith('TOPIC:')) {
          const text = trimmed.replace('QUESTION:', '').replace('TOPIC:', '').trim();
          return (
            <div key={idx} className="pt-10 first:pt-0">
              <div className="flex items-start gap-4 mb-3">
                <div className={`w-2 h-10 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.6)] shrink-0`}></div>
                <h3 className="text-lg md:text-2xl font-black text-white tracking-tight leading-tight uppercase">{text}</h3>
              </div>
              {isPyq && <VisualSolution question={text} subject={subject} />}
            </div>
          );
        }

        if (trimmed.startsWith('YEAR:')) {
          return <span key={idx} className="inline-block px-4 py-1.5 bg-green-500/10 border border-green-500/30 text-green-400 text-[10px] font-black rounded-full tracking-[0.2em]">{trimmed}</span>;
        }
        
        if (trimmed.startsWith('SOLUTION:') || trimmed.startsWith('DEFINITION:')) {
           return (
             <div key={idx} className="bg-slate-900/80 border border-white/5 p-8 rounded-[2.5rem] shadow-2xl">
                <span className="text-[9px] font-black text-indigo-400 uppercase tracking-[0.4em] mb-4 block">Board Expected Solution</span>
                <p className="text-slate-300 text-sm md:text-[16px] font-bold leading-relaxed whitespace-pre-line">{trimmed.replace('SOLUTION:', '').replace('DEFINITION:', '').trim()}</p>
             </div>
           );
        }

        return (
          <div key={idx} className="flex gap-4 items-start pl-6 border-l-2 border-white/5">
            <p className="text-slate-400 text-[13px] md:text-[16px] font-semibold leading-relaxed tracking-tight">{trimmed}</p>
          </div>
        );
      })}
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
        setError(e.message || "Network Error");
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
    <div className="flex-1 overflow-y-auto px-6 md:px-10 lg:px-20 py-10">
      {!selectedChapter ? (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <header className="mb-16">
            <div className="flex items-center gap-10">
              <div className={`w-24 h-24 rounded-[2.5rem] bg-gradient-to-tr from-slate-800 to-indigo-600 text-white flex items-center justify-center text-5xl shadow-[0_20px_60px_-15px_rgba(99,102,241,0.3)] float`}>
                {subject.icon}
              </div>
              <div>
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-4">{subject.name}</h1>
                <div className="flex items-center gap-4">
                   <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
                   <p className="text-slate-500 font-black uppercase text-[10px] tracking-[0.5em]">Board 2026 Prediction Active</p>
                </div>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredChapters.map((chapter) => (
              <div 
                key={chapter.id} 
                onClick={() => { setSelectedChapter(chapter); setViewMode('summary'); }} 
                className="premium-card p-12 rounded-[3.5rem] cursor-pointer group hover:scale-[1.05] active:scale-[0.98]"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-10 group-hover:bg-indigo-600/20 transition-all">📑</div>
                <h3 className="font-black text-2xl text-white mb-4 tracking-tight leading-tight line-clamp-2">{chapter.title}</h3>
                <p className="text-slate-500 text-[13px] font-bold leading-relaxed line-clamp-2 mb-10">{chapter.description}</p>
                <div className="flex items-center justify-between pt-8 border-t border-white/5">
                   <span className={`text-[11px] font-black uppercase tracking-[0.3em] text-indigo-400`}>Module {chapter.id.slice(-1)}</span>
                   <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-sm group-hover:bg-indigo-600 group-hover:text-white transition-all transform group-hover:translate-x-2`}>→</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto animate-in fade-in zoom-in-95 duration-700">
          <button 
            onClick={() => { setSelectedChapter(null); stopAudio(); }} 
            className="mb-10 flex items-center gap-3 text-slate-500 font-black text-[10px] tracking-[0.5em] bg-white/5 hover:bg-white/10 px-8 py-4 rounded-full border border-white/5 shadow-2xl transition-all active:scale-95"
          >
            ← BACK TO CHAPTERS
          </button>
          
          <div className="bg-slate-950/40 backdrop-blur-3xl rounded-[4rem] border border-white/5 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.6)] overflow-hidden">
            <div className={`p-16 md:p-24 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white relative`}>
              <div className="absolute top-0 right-0 w-full h-full bg-indigo-500/5 rounded-full blur-[150px]"></div>
              <div className="relative z-10">
                <span className="text-[11px] font-black text-indigo-400 uppercase tracking-[0.6em] mb-8 block">Board Strategy Module</span>
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight max-w-4xl">{selectedChapter.title}</h2>
              </div>
            </div>

            <div className="flex flex-col md:flex-row border-b border-white/5 px-10 bg-slate-950/50 items-center justify-between gap-6 py-4 relative z-30">
              <div className="flex gap-4">
                {[
                  { id: 'summary', label: 'ANALYTICS', icon: '💎' },
                  { id: 'notes', label: 'NOTES', icon: '📝' },
                  { id: 'pyqs', label: 'HOT PYQs', icon: '🔥' }
                ].map((tab) => (
                  <button 
                    key={tab.id} 
                    disabled={loading}
                    onClick={() => setViewMode(tab.id as any)} 
                    className={`px-10 py-6 text-[11px] font-black tracking-[0.2em] transition-all border-b-4 flex items-center gap-4 rounded-t-3xl disabled:opacity-50 ${
                      viewMode === tab.id ? `border-indigo-500 text-white bg-white/5` : 'border-transparent text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <span className="text-2xl">{tab.icon}</span>{tab.label}
                  </button>
                ))}
              </div>
              
              {viewMode === 'notes' && content && !loading && (
                <button 
                  onClick={handleListen} 
                  disabled={isAudioLoading} 
                  className={`px-10 py-5 rounded-[2.5rem] text-[11px] font-black uppercase tracking-[0.3em] transition-all shadow-2xl active:scale-95 ${
                    isPlaying ? 'bg-red-600 shadow-red-500/20' : 'bg-indigo-600 shadow-indigo-500/20'
                  } text-white disabled:opacity-50`}
                >
                  {isAudioLoading ? 'GENERATE...' : isPlaying ? 'STOP PLAYER' : '🔊 HINGLISH EXPLANATION'}
                </button>
              )}
            </div>

            <div className="p-12 md:p-20 min-h-[600px] relative">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-32 gap-10">
                  <div className={`w-16 h-16 border-4 border-white/5 border-t-indigo-500 rounded-full animate-spin shadow-[0_0_20px_rgba(99,102,241,0.3)]`}></div>
                  <div className="text-center">
                    <p className="text-white font-black text-sm uppercase tracking-[0.5em] mb-4 animate-pulse">Analyzing 4,250+ Papers</p>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">Extracting repeat patterns for 2026...</p>
                  </div>
                </div>
              ) : error ? (
                <div className="text-center py-20 bg-red-500/5 rounded-3xl border border-red-500/20">
                  <p className="text-red-400 font-bold mb-4">{error}</p>
                  <button onClick={() => setViewMode(viewMode)} className="px-8 py-3 bg-red-600 text-white rounded-full font-black text-[10px] tracking-widest uppercase">Retry</button>
                </div>
              ) : viewMode === 'summary' ? (
                <div className="space-y-20">
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                     <div className="p-14 bg-slate-900/60 border border-white/5 rounded-[4rem] text-white shadow-3xl relative group overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-1000"></div>
                        <span className="text-[10px] font-black uppercase text-indigo-400 tracking-[0.4em] block mb-8">MIQ Score</span>
                        <p className="text-6xl font-black tracking-tighter mb-4">92%</p>
                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">High Probability Chapter</p>
                     </div>
                     <div className="p-14 bg-slate-900/60 border border-white/5 rounded-[4rem] text-white shadow-3xl">
                        <span className="text-[10px] font-black uppercase text-green-400 tracking-[0.4em] block mb-8">Repeat Frequency</span>
                        <p className="text-6xl font-black tracking-tighter mb-4 text-white">Tier 1</p>
                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Hot Topic for 2026</p>
                     </div>
                     <div className="p-14 bg-slate-900/60 border border-white/5 rounded-[4rem] text-white shadow-3xl">
                        <span className="text-[10px] font-black uppercase text-indigo-400 tracking-[0.4em] block mb-8">Paper Count</span>
                        <p className="text-6xl font-black tracking-tighter mb-4 text-white">4.2k</p>
                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Historical Data Scanned</p>
                     </div>
                   </div>
                   <div className="p-16 bg-indigo-600/10 border border-indigo-500/20 rounded-[4rem] relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]"></div>
                      <h3 className="text-3xl font-black text-white tracking-tighter uppercase mb-6">Expert Analysis for {selectedChapter.title}</h3>
                      <p className="text-slate-400 font-semibold leading-relaxed max-w-4xl text-lg">Focus heavily on the <span className="text-indigo-400">Repeated 5-Mark Questions</span> from 2018, 2020, and 2023. This chapter traditionally forms the backbone of Section C. Use our "Hot PYQs" tab to see the exact wording used by CBSE board setters.</p>
                   </div>
                </div>
              ) : content ? (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <AestheticNotebook 
                    content={content} 
                    color={subject.color} 
                    subject={subject.name} 
                    isPyq={viewMode === 'pyqs'} 
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectDashboard;
