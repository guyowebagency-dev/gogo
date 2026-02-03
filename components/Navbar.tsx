
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[90%] max-w-5xl rounded-full border border-white/10 px-6 py-4 flex items-center justify-between backdrop-blur-xl ${
        isScrolled ? 'bg-black/80 py-3 shadow-2xl' : 'bg-white/5'
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#00FF00] rounded-sm green-glow"></div>
        <span className="font-monument text-lg tracking-tighter pt-1">NEXTRISE</span>
      </div>

      <div className="hidden md:flex items-center gap-10">
        <a href="#work" className="text-sm font-medium tracking-wide hover:text-[#00FF00] transition-colors">WORK</a>
        <a href="#services" className="text-sm font-medium tracking-wide hover:text-[#00FF00] transition-colors">SERVICES</a>
        <a href="#process" className="text-sm font-medium tracking-wide hover:text-[#00FF00] transition-colors">PROCESS</a>
        <a href="#contact" className="text-sm font-medium tracking-wide hover:text-[#00FF00] transition-colors">CONTACT</a>
      </div>

      <a 
        href="#contact" 
        className="bg-[#00FF00] text-black px-6 py-2 rounded-full font-bold text-xs hover:scale-105 hover:bg-[#39FF14] transition-all green-glow-hover active:scale-95"
      >
        GET STARTED
      </a>
    </nav>
  );
};

export default Navbar;
