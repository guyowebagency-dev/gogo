
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <div className="relative py-40 px-6 overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-[#00FF00]/20 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full grid-background opacity-20 -z-10"></div>
      
      <div className="max-w-5xl mx-auto text-center fade-up">
        <h2 className="font-monument text-5xl md:text-8xl mb-8 leading-[0.9] tracking-tighter">
          YOUR FUTURE CLIENTS <br />
          ARE ALREADY <br />
          <span className="text-[#00FF00]">LOOKING FOR YOU</span>
        </h2>
        
        <p className="text-zinc-400 text-xl md:text-2xl mb-16 max-w-2xl mx-auto">
          The only question is whether they'll find you — or your competitors.
          Stop leaving money on the table.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <a 
            href="mailto:hello@nextrise.agency" 
            className="group relative inline-block bg-[#00FF00] text-black px-16 py-8 rounded-full font-monument text-2xl md:text-3xl green-glow transition-all duration-300 hover:scale-105 active:scale-95"
          >
            BOOK MY FREE STRATEGY CALL
            <div className="absolute -top-4 -right-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full animate-bounce">
              LIMITED SPOTS
            </div>
          </a>
          <div className="flex items-center gap-8 text-zinc-500 font-mono text-sm">
            <span>NO OBLIGATION</span>
            <span>•</span>
            <span>HONEST ADVICE</span>
            <span>•</span>
            <span>CLEAR NEXT STEPS</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#00FF00]/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#00FF00]/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default FinalCTA;
