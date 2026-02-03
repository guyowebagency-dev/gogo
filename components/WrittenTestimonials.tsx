
import React from 'react';

const testimonials = [
  { quote: "The best investment we made this year.", name: "Alex P." },
  { quote: "Finally a website that actually works.", name: "Sarah J." },
  { quote: "Doubled our leads in 30 days.", name: "Mike T." },
  { quote: "Absolute game changer for our brand.", name: "Elena R." },
  { quote: "The conversion rate is mind-blowing.", name: "David L." },
];

const WrittenTestimonials: React.FC = () => {
  return (
    <div className="py-20 border-y border-white/5 bg-black overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
          <div key={i} className="flex items-center gap-6 px-12 group">
            <span className="text-[#00FF00] font-monument text-3xl opacity-50">"</span>
            <span className="font-monument text-2xl md:text-3xl text-zinc-300 group-hover:text-white transition-colors uppercase tracking-tight">
              {t.quote}
            </span>
            <span className="font-mono text-zinc-600">— {t.name}</span>
            <div className="w-12 h-[1px] bg-zinc-800 ml-6"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WrittenTestimonials;
