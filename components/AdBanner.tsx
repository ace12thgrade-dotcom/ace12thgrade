
import React, { useEffect, useRef } from 'react';

const AdBanner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptExecutedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || scriptExecutedRef.current) return;

    const adContainer = containerRef.current;
    
    const loadAd = () => {
      try {
        // Clear previous content to ensure a fresh load
        adContainer.innerHTML = '';

        const adKey = '22f76c9da64add65e5b5d83a9e570782';
        const atOptions = {
          'key': adKey,
          'format': 'iframe',
          'height': 300,
          'width': 160,
          'params': {}
        };

        // Ensure global options are isolated to this execution
        (window as any).atOptions = atOptions;

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `https://www.highperformanceformat.com/${adKey}/invoke.js`;
        script.async = true;
        
        // Error handling for the script itself
        script.onerror = () => {
          console.warn('Ad script failed to load, keeping placeholder clean.');
          if (adContainer) adContainer.style.opacity = '0.5';
        };

        adContainer.appendChild(script);
        scriptExecutedRef.current = true;
      } catch (e) {
        console.error('Ad initialization error:', e);
      }
    };

    // 1-second delay for stability
    const timeoutId = setTimeout(loadAd, 1000);

    return () => {
      clearTimeout(timeoutId);
      if (adContainer) adContainer.innerHTML = '';
      scriptExecutedRef.current = false;
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-3 py-4 w-full select-none">
      <div className="flex items-center gap-3 opacity-30">
        <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-slate-500"></div>
        <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.4em]">ADVERTISEMENT</span>
        <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-slate-500"></div>
      </div>
      
      <div 
        ref={containerRef} 
        className="w-[160px] h-[300px] bg-slate-950/40 backdrop-blur-md border border-white/5 rounded-3xl flex items-center justify-center overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] relative z-10 mx-auto transition-opacity duration-500"
      >
        {/* Minimalist Loading State */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-slate-900/10">
          <div className="w-6 h-6 rounded-full border-2 border-indigo-500/5 border-t-indigo-500/40 animate-spin mb-4"></div>
          <div className="space-y-1">
            <div className="h-1 w-12 bg-white/5 rounded-full mx-auto"></div>
            <div className="h-1 w-8 bg-white/5 rounded-full mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
