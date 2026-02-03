
import React, { useEffect, useRef } from 'react';

const AdBanner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Small delay to ensure React has finalized the DOM structure before script injection
    const timer = setTimeout(() => {
      if (!containerRef.current) return;
      
      // Clear any stale content from previous mounts
      containerRef.current.innerHTML = '';

      // Adsterra scripts look for atOptions in the global window scope
      (window as any).atOptions = {
        'key' : '22f76c9da64add65e5b5d83a9e570782',
        'format' : 'iframe',
        'height' : 300,
        'width' : 160,
        'params' : {}
      };

      // Create and inject the invoke.js script
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://www.highperformanceformat.com/22f76c9da64add65e5b5d83a9e570782/invoke.js';
      script.async = true;

      containerRef.current.appendChild(script);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-[9px] font-black text-slate-700 uppercase tracking-[0.4em] select-none">Sponsored</span>
      <div 
        ref={containerRef} 
        className="w-[160px] h-[300px] bg-slate-900/40 border border-white/5 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl relative min-h-[300px] z-10"
      >
        {/* Ad placeholder while invoke.js executes */}
        <div className="text-[10px] text-slate-800 font-bold uppercase tracking-widest animate-pulse text-center px-4">
          Updating Ad Feed...
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
