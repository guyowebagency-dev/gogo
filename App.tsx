
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import ProblemAwareness from './components/ProblemAwareness';
import SolutionSection from './components/SolutionSection';
import ProcessSection from './components/ProcessSection';
import VideoTestimonials from './components/VideoTestimonials';
import WrittenTestimonials from './components/WrittenTestimonials';
import ServicesSection from './components/ServicesSection';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative selection:bg-[#00FF00] selection:text-black">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="video-results">
          <VideoSection />
        </section>
        
        <section id="problem">
          <ProblemAwareness />
        </section>
        
        <section id="solution">
          <SolutionSection />
        </section>
        
        <section id="process">
          <ProcessSection />
        </section>
        
        <section id="work">
          <VideoTestimonials />
        </section>
        
        <section>
          <WrittenTestimonials />
        </section>
        
        <section id="services">
          <ServicesSection />
        </section>
        
        <section id="faq">
          <FAQSection />
        </section>
        
        <section id="contact">
          <FinalCTA />
        </section>
      </main>
      
      <footer className="bg-black py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-monument text-xl tracking-tighter">NEXTRISE</div>
          <p className="text-zinc-500 text-sm font-mono">© 2025 NEXTRISE WEB AGENCY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-400 hover:text-[#00FF00] transition-colors text-sm">Privacy</a>
            <a href="#" className="text-zinc-400 hover:text-[#00FF00] transition-colors text-sm">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
