
import React from 'react';

const TestimonialVideo: React.FC<{ thumb: string; name: string; business: string; large?: boolean }> = ({ thumb, name, business, large }) => (
  <div className={`relative group cursor-pointer overflow-hidden rounded-3xl border border-white/5 fade-up ${large ? 'lg:col-span-2 aspect-[16/9]' : 'aspect-square md:aspect-[4/3]'}`}>
    <img src={thumb} alt={name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
    
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-20 h-20 bg-[#00FF00] rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-500 shadow-2xl">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
      </div>
    </div>
    
    <div className="absolute bottom-8 left-8">
      <div className="font-monument text-lg">{name}</div>
      <div className="text-[#00FF00] font-mono text-xs uppercase tracking-widest mt-1">{business}</div>
    </div>
  </div>
);

const VideoTestimonials: React.FC = () => {
  return (
    <div className="py-32 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 fade-up">
          <h2 className="font-monument text-4xl md:text-6xl mb-6">WHAT BUSINESS OWNERS SAY</h2>
          <p className="text-zinc-500 text-xl max-w-3xl mx-auto">
            These aren't marketers. They're business owners who wanted more clients — 
            and finally got a website that delivers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          <TestimonialVideo 
            thumb="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
            name="MARK ROBERTS" 
            business="CEO @ BUILDERPRO"
          />
          <TestimonialVideo 
            thumb="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
            name="SARAH CHEN" 
            business="FOUNDER @ ZENSPACE"
          />
          <TestimonialVideo 
            large
            thumb="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1200" 
            name="JAMESON DRAKE" 
            business="MANAGING DIRECTOR @ VISTA GROUP"
          />
        </div>
        
        <div className="text-center fade-up mt-16">
          <a href="#contact" className="text-[#00FF00] font-monument text-2xl hover:underline underline-offset-8">
            I WANT RESULTS LIKE THIS
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonials;
