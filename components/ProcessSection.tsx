
import React from 'react';

const ProcessStep: React.FC<{ num: number; title: string; desc: string }> = ({ num, title, desc }) => (
  <div className="relative group flex-1">
    <div className="absolute top-6 left-0 w-full h-[1px] bg-white/5 -z-10 hidden lg:block"></div>
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
      <div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center font-monument text-lg text-[#00FF00] mb-6 group-hover:scale-110 group-hover:green-glow transition-all duration-500 font-black">
        {num}
      </div>
      <h3 className="font-monument text-[18px] md:text-[20px] mb-2.5 font-bold tracking-tight">{title}</h3>
      <p className="text-zinc-500 text-[14px] leading-relaxed max-w-xs">{desc}</p>
    </div>
  </div>
);

const ProcessSection: React.FC = () => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="font-monument text-2xl md:text-[36px] mb-4 tracking-tight">A SIMPLE, PROVEN PROCESS</h2>
          <p className="text-zinc-500 text-[17px] font-normal">No fluff. No delays. Just progress.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between fade-up">
          <ProcessStep 
            num={1} 
            title="STRATEGY FIRST" 
            desc="We don't draw pixels until we understand your business goals and exactly who we are selling to." 
          />
          <ProcessStep 
            num={2} 
            title="CONVERSION DESIGN" 
            desc="We build a visual identity that doesn't just look pretty—it builds deep psychological trust." 
          />
          <ProcessStep 
            num={3} 
            title="LAUNCH & SUPPORT" 
            desc="We deploy your high-performance machine and ensure it stays running at peak efficiency 24/7." 
          />
        </div>
        
        <p className="text-zinc-400 text-center text-[15px] mt-16 max-w-lg mx-auto leading-relaxed">Each step is optimized to move you from initial contact to a live, lead-generating asset in as little as 4 weeks.</p>
      </div>
    </div>
  );
};

export default ProcessSection;
