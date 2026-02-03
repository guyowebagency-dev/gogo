
import React from 'react';

const ProcessStep: React.FC<{ num: number; title: string; desc: string }> = ({ num, title, desc }) => (
  <div className="relative group flex-1">
    <div className="absolute top-8 left-0 w-full h-[2px] bg-white/5 -z-10 hidden lg:block"></div>
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
      <div className="w-16 h-16 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center font-monument text-2xl text-[#00FF00] mb-8 group-hover:scale-110 group-hover:green-glow transition-all duration-500">
        {num}
      </div>
      <h3 className="font-monument text-xl mb-4">{title}</h3>
      <p className="text-zinc-500 max-w-xs">{desc}</p>
    </div>
  </div>
);

const ProcessSection: React.FC = () => {
  return (
    <div className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 fade-up">
          <h2 className="font-monument text-4xl md:text-6xl mb-6">A SIMPLE, PROVEN PROCESS</h2>
          <p className="text-zinc-500 text-xl">No fluff. No delays. Just progress.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 justify-between fade-up">
          <ProcessStep 
            num={1} 
            title="STRATEGY FIRST" 
            desc="We don't draw pixels until we understand your business, your goals, and exactly who we are selling to." 
          />
          <ProcessStep 
            num={2} 
            title="CONVERSION DESIGN" 
            desc="We build a visual identity that doesn't just look pretty—it builds psychological trust and authority." 
          />
          <ProcessStep 
            num={3} 
            title="LAUNCH & SUPPORT" 
            desc="We deploy your high-performance machine and ensure it stays running at peak efficiency 24/7." 
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
