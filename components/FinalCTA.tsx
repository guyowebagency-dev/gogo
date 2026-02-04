
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <div className="relative py-32 px-6 overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-[#00FF00]/10 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full grid-background opacity-20 -z-10"></div>
      
      <div className="max-w-4xl mx-auto text-center fade-up">
        <h2 className="font-monument text-3xl md:text-[44px] mb-6 leading-[1.2] tracking-tighter">
          YOUR FUTURE CLIENTS <br />
          ARE ALREADY <br />
          <span className="text-[#00FF00]">LOOKING FOR YOU</span>
        </h2>
        
        <p className="text-zinc-400 text-lg md:text-[18px] mb-12 max-w-xl mx-auto leading-relaxed">
          The only question is whether they'll find you — or your competitors.
          Stop leaving money on the table and start booking more business.
        </p>
        
        <div className="flex flex-col items-center gap-5">
          <a 
            href="mailto:hello@nextrise.agency" 
            className="group relative inline-block bg-[#00FF00] text-black px-12 py-5 rounded-full font-monument text-lg md:text-[16px] font-black green-glow transition-all duration-300 hover:scale-105 active:scale-95"
          >
            BOOK MY FREE STRATEGY CALL
            <div className="absolute -top-3 -right-3 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded-full animate-bounce">
              LIMITED SPOTS
            </div>
          </a>
          <div className="flex items-center gap-6 text-zinc-500 font-mono text-[13px] font-medium">
            <span>NO OBLIGATION</span>
            <span className="opacity-20">•</span>
            <span>HONEST ADVICE</span>
            <span className="opacity-20">•</span>
            <span>CLEAR NEXT STEPS</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#00FF00]/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#00FF00]/5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default FinalCTA;
