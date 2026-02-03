
import React from 'react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="group p-10 bg-zinc-900 border border-white/5 rounded-3xl hover:border-[#00FF00]/30 transition-all duration-500 hover:-translate-y-3">
    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8 border border-white/5 text-[#00FF00] group-hover:scale-110 transition-transform duration-500 group-hover:green-glow">
      {icon}
    </div>
    <h3 className="font-monument text-xl mb-4 leading-tight">{title}</h3>
    <p className="text-zinc-500 leading-relaxed">{desc}</p>
  </div>
);

const SolutionSection: React.FC = () => {
  return (
    <div className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto text-center mb-24 fade-up">
        <h2 className="font-monument text-4xl md:text-7xl mb-6">
          WE BUILD WEBSITES THAT <br />
          <span className="text-[#00FF00]">BRING YOU CLIENTS</span>
        </h2>
        <p className="text-zinc-500 text-xl max-w-2xl mx-auto">This isn't about design. It's about results.</p>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 fade-up">
        <FeatureCard 
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          title="24/7 SALESPERSON"
          desc="Your website never sleeps, never takes a holiday, and pitches your value perfectly every single time."
        />
        <FeatureCard 
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
          title="INSTANT CREDIBILITY"
          desc="Professional design that screams 'Elite' so you can command premium prices without explanation."
        />
        <FeatureCard 
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" /></svg>}
          title="CLIENT MAGNET"
          desc="Built-in conversion paths that guide visitors naturally from curiosity to 'I need to work with them'."
        />
      </div>
      
      <div className="text-center fade-up">
        <a href="#contact" className="inline-block bg-[#00FF00] text-black px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-all green-glow-hover">
          BUILD MY WEBSITE THE RIGHT WAY
        </a>
      </div>
    </div>
  );
};

export default SolutionSection;
