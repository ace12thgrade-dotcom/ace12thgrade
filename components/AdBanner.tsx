
import React, { useEffect, useRef } from 'react';

interface AdBannerProps {
  index?: number;
}

const AdBanner: React.FC<AdBannerProps> = ({ index = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptExecutedRef = useRef(false);

  useEffect(() => {
    // Prevent re-execution if already done
    if (!containerRef.current || scriptExecutedRef.current) return;

    const adContainer = containerRef.current;
    
    const loadAd = () => {
      try {
        // Clear previous content
        adContainer.innerHTML = '';

        const adKey = '22f76c9da64add65e5b5d83a9e570782';
        
        // Staggered global options setup to avoid parallel collision
        const atOptions = {
          'key': adKey,
          'format': 'iframe',
          'height': 300,
          'width': 160,
          'params': {}
        };

        // Inject options into window right before script execution
        (window as any).atOptions = atOptions;

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `https://www.highperformanceformat.com/${adKey}/invoke.js`;
        script.async = true;
        
        script.onerror = () => {
          console.warn(`Ad instance ${index} failed to load.`);
        };

        adContainer.appendChild(script);
        scriptExecutedRef.current = true;
      } catch (e) {
        console.error(`Ad instance ${index} initialization error:`, e);
      }
    };

    // Staggered delay: Each ad loads 1200ms after the previous one
    // Increased delay slightly to ensure Adsterra handles multiple placements better
    const staggeredDelay = 1000 + (index * 1200);
    const timeoutId = setTimeout(loadAd, staggeredDelay);

    return () => {
      clearTimeout(timeoutId);
      if (adContainer) adContainer.innerHTML = '';
      scriptExecutedRef.current = false;
    };
  }, [index]);

  return (
    <div className="flex flex-col items-center gap-3 py-6 w-full select-none animate-in fade-in duration-1000">
      <div className="flex items-center gap-3 opacity-30">
        <div className="h-[1px] w-8 bg-slate-500"></div>
        <span className="text-[7px] font-black text-slate-500 uppercase tracking-[0.4em]">ADVERTISEMENT</span>
        <div className="h-[1px] w-8 bg-slate-500"></div>
      </div>
      
      <div 
        ref={containerRef} 
        className="w-[160px] h-[300px] bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl relative z-10 mx-auto transition-all"
      >
        {/* Placeholder UI while loading */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-slate-950/20">
          <div className="w-5 h-5 rounded-full border-2 border-indigo-500/10 border-t-indigo-500/40 animate-spin mb-3"></div>
          <div className="h-1 w-10 bg-white/5 rounded-full mb-1"></div>
          <div className="h-1 w-6 bg-white/5 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
