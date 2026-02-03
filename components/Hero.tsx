
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background -z-20 opacity-40"></div>
      
      {/* Animated Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00FF00]/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#39FF14]/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="fade-up max-w-6xl">
        <p className="font-mono text-[#00FF00] text-sm tracking-[0.4em] mb-6 uppercase">
          Websites That Convert
        </p>
        
        <h1 className="font-monument text-5xl md:text-8xl lg:text-9xl leading-[0.9] mb-8 drop-shadow-2xl">
          TURN YOUR BUSINESS <br />
          INTO A <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00FF00] to-white">BOOKING MACHINE</span>
        </h1>
        
        <p className="text-zinc-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          We design high-converting websites for serious businesses 
          that want more clients, more trust, and real growth — 
          without tech headaches or guesswork.
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <a 
            href="#contact" 
            className="group relative bg-[#00FF00] text-black px-12 py-6 rounded-full font-bold text-xl md:text-2xl green-glow-hover transition-all duration-300 hover:scale-105 active:scale-95"
          >
            GET MY WEBSITE BUILT
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
          </a>
          <p className="text-zinc-500 font-mono text-sm">
            Free strategy call • No pressure • Honest advice
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 animate-bounce">
        <span className="font-mono text-xs uppercase tracking-widest vertical-text">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#00FF00] animate-[slide_2s_infinite]"></div>
        </div>
      </div>

      <style>{`
        @keyframes slide {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .vertical-text {
          writing-mode: vertical-rl;
        }
      `}</style>
    </div>
  );
};

export default Hero;
