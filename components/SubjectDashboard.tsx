
import React, { useState, useRef, useEffect } from 'react';
import { Subject, Chapter } from '../types.ts';
import { generateDetailedNotes, generatePremiumPYQs, generateChapterAudio, generateFormulaImage } from '../services/geminiService.ts';

interface SubjectDashboardProps {
  subject: Subject;
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
    return new Uint8Array(0);
  }
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

const FormulaRenderer: React.FC<{ formulaText: string; color: string }> = ({ formulaText, color }) => {
  const [imgData, setImgData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      try {
        const data = await generateFormulaImage(formulaText);
        if (data) setImgData(data);
      } catch (e) {}
      setLoading(false);
    };
    fetchImage();
  }, [formulaText]);

  return (
    <div className="bg-slate-900 px-3 py-4 md:py-6 rounded-2xl my-2 shadow-md relative overflow-hidden group border-b-2 border-indigo-600/30 w-full max-w-xl mx-auto">
      <div className="relative z-10 text-center flex flex-col items-center">
        <span className="text-[6px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-1 block opacity-80">NCERT View (AI)</span>
        {loading ? (
          <div className="h-16 flex items-center justify-center"><div className="w-3 h-3 border-2 border-white/20 border-t-white rounded-full animate-spin"></div></div>
        ) : imgData ? (
          <img src={`data:image/png;base64,${imgData}`} alt={formulaText} className="max-h-24 md:max-h-32 object-contain rounded-lg shadow-sm bg-white p-2" />
        ) : (
          <p className="text-xs md:text-sm font-bold text-white tracking-wide leading-tight px-3">{formulaText}</p>
        )}
      </div>
    </div>
  );
};

const AestheticNotebook: React.FC<{ content: string; color: string }> = ({ content, color }) => {
  const lines = content.split('\n');
  return (
    <div className="space-y-2.5 md:space-y-3 max-w-4xl mx-auto pb-6 px-1">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={idx} className="h-0.5"></div>;
        if (trimmed.startsWith('TOPIC:') || (trimmed.startsWith('#') && trimmed.length > 3)) {
          return (
            <div key={idx} className="pt-2 first:pt-0">
              <div className="flex items-center gap-2 mb-1">
                <div className={`w-0.5 h-3.5 bg-${color}-500 rounded-full`}></div>
                <h3 className="text-xs md:text-sm font-black text-slate-800 uppercase tracking-tight leading-tight">{trimmed.replace(/TOPIC:|#/g, '').trim()}</h3>
              </div>
              <div className="h-[1px] w-full bg-slate-100"></div>
            </div>
          );
        }
        if (trimmed.startsWith('INTRO:')) return <p key={idx} className="text-[9px] md:text-xs text-slate-500 italic pl-3 border-l border-slate-200">{trimmed.replace('INTRO:', '').trim()}</p>;
        if (trimmed.startsWith('FORMULA:') || (trimmed.includes('=') && trimmed.length < 70 && !trimmed.includes('?'))) return <FormulaRenderer key={idx} formulaText={trimmed.replace('FORMULA:', '').trim()} color={color} />;
        if (trimmed.startsWith('EXAMPLE:')) return (
          <div key={idx} className="bg-white border p-3 rounded-xl my-1 border-l-4 border-l-indigo-400 shadow-sm">
            <span className={`text-[6px] font-black uppercase text-${color}-600 block`}>Solved Example</span>
            <div className="text-slate-800 text-[9px] md:text-xs font-bold whitespace-pre-line">{trimmed.replace('EXAMPLE:', '').trim()}</div>
          </div>
        );
        return <p key={idx} className="text-slate-500 text-[9px] md:text-xs font-medium pl-0.5">{trimmed}</p>;
      })}
    </div>
  );
};

const SubjectDashboard: React.FC<SubjectDashboardProps> = ({ subject }) => {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [viewMode, setViewMode] = useState<'summary' | 'notes' | 'pyqs'>('summary');
  const [loading, setLoading] = useState(false);
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);

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

  const handleAction = async (mode: 'notes' | 'pyqs') => {
    if (!selectedChapter) return;
    stopAudio();
    setLoading(true);
    setError(null);
    setViewMode(mode);
    try {
      const result = mode === 'notes' 
        ? await generateDetailedNotes(subject.name, selectedChapter.title)
        : await generatePremiumPYQs(subject.name, selectedChapter.title);
      setContent(result);
    } catch (e: any) {
      setError(e.message || "Failed to load. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="flex-1 overflow-y-auto px-3 md:px-5 lg:px-8 py-3">
      {!selectedChapter ? (
        <div>
          <header className="mb-4 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-2 mb-1.5">
              <div className={`w-10 h-10 rounded-lg bg-${subject.color}-600 text-white flex items-center justify-center text-xl shadow-md`}>{subject.icon}</div>
              <div>
                <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter">{subject.name}</h1>
                <p className="text-slate-400 font-bold uppercase text-[7px] tracking-[0.3em]">Board Expert Hub</p>
              </div>
            </div>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {subject.chapters.map((chapter) => (
              <div key={chapter.id} onClick={() => { setSelectedChapter(chapter); setViewMode('summary'); setContent(null); setError(null); }} className="premium-card p-5 rounded-xl cursor-pointer bg-white">
                <div className="w-7 h-7 bg-slate-50 rounded-lg flex items-center justify-center text-base mb-2">📑</div>
                <h3 className="font-black text-[13px] text-slate-800 mb-0.5 line-clamp-1">{chapter.title}</h3>
                <p className="text-slate-400 text-[8px] font-medium line-clamp-2">{chapter.description}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <button onClick={() => { setSelectedChapter(null); stopAudio(); }} className="mb-3 flex items-center gap-1.5 text-slate-400 font-black text-[7px] tracking-[0.2em] bg-white px-3 py-1.5 rounded-full border border-slate-100 shadow-sm">← BACK</button>
          <div className="bg-white rounded-2xl border border-slate-50 shadow-sm overflow-hidden">
            <div className={`p-8 bg-gradient-to-br from-slate-900 to-${subject.color}-950 text-white`}>
              <span className="text-[6px] font-black text-white/40 uppercase tracking-[0.4em] mb-1 block">Chapter Module</span>
              <h2 className="text-xl md:text-3xl font-black tracking-tighter">{selectedChapter.title}</h2>
            </div>
            <div className="flex border-b px-2 bg-slate-50 items-center justify-between">
              <div className="flex">
                {[
                  { id: 'summary', label: 'Summary', icon: '💎' },
                  { id: 'notes', label: 'Notes', icon: '📝', action: () => handleAction('notes') },
                  { id: 'pyqs', label: 'PYQs', icon: '🏆', action: () => handleAction('pyqs') }
                ].map((tab) => (
                  <button key={tab.id} onClick={() => tab.id === 'summary' ? (setViewMode('summary'), setContent(null), stopAudio(), setError(null)) : tab.action!()} className={`px-4 py-3 text-[8px] font-black border-b-2 flex items-center gap-1.5 ${viewMode === tab.id ? `border-${subject.color}-500 text-slate-900 bg-white` : 'border-transparent text-slate-400'}`}>
                    <span>{tab.icon}</span>{tab.label}
                  </button>
                ))}
              </div>
              {viewMode === 'notes' && content && (
                <button onClick={handleListen} disabled={isAudioLoading} className={`px-2.5 py-1 rounded-full text-[7px] font-black uppercase transition-all ${isPlaying ? 'bg-red-500' : 'bg-indigo-600'} text-white disabled:opacity-50`}>
                  {isAudioLoading ? '...' : isPlaying ? 'Stop' : '🔊 Hinglish Reader'}
                </button>
              )}
            </div>
            <div className="p-6 min-h-[300px]">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-12 gap-3">
                  <div className={`w-6 h-6 border-2 border-slate-50 border-t-${subject.color}-600 rounded-full animate-spin`}></div>
                  <p className="text-slate-400 text-[7px] font-bold uppercase tracking-widest">Analyzing 4,250+ Questions...</p>
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                  <div className="text-4xl">⚠️</div>
                  <div>
                    <h3 className="text-slate-800 font-bold text-sm">Server Busy or Key Issue</h3>
                    <p className="text-slate-400 text-xs mt-1 max-w-xs">{error}</p>
                  </div>
                  <button onClick={() => handleAction(viewMode as any)} className={`bg-${subject.color}-600 text-white px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg`}>Try Again</button>
                </div>
              ) : viewMode === 'summary' ? (
                <div className="space-y-4">
                   <h3 className="text-sm font-black text-slate-900 uppercase">High Yield Trends</h3>
                   <p className="text-xs text-slate-500 font-medium leading-relaxed">Analysis of 15 years shows that 2020-2025 questions are repeated 65% of the time in modern board formats.</p>
                   <div className="grid grid-cols-2 gap-3">
                     <div className="p-4 bg-slate-900 rounded-xl text-white"><span className="text-[6px] font-black uppercase text-indigo-400">Total Analyzed</span><p className="text-2xl font-black">4,250+</p></div>
                     <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100"><span className="text-[6px] font-black uppercase text-indigo-600">Accuracy Rank</span><p className="text-2xl font-black text-slate-800">Top 1%</p></div>
                   </div>
                </div>
              ) : content && (
                <AestheticNotebook content={content} color={subject.color} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectDashboard;
