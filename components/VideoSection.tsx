
import React, { useRef, useState, useEffect } from 'react';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(console.error);
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#1A1A1A] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="fade-up relative rounded-2xl overflow-hidden group cursor-pointer border border-white/5 shadow-2xl transition-all duration-700 hover:border-[#00FF00]/30 hover:shadow-[#00FF00]/10">
          <video 
            ref={videoRef}
            src="https://joy1.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190301_08_A_L_05_preview.mp4"
            loop
            muted={isMuted}
            playsInline
            className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 md:p-12">
            <h2 className="font-monument text-xl md:text-[36px] mb-3 leading-[1.2]">SEE THE RESULTS</h2>
            <div className="flex items-center gap-4">
              <button 
                onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
                className="bg-[#00FF00] text-black w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform active:scale-90"
              >
                {isMuted ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                )}
              </button>
              <div className="h-[2px] flex-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#00FF00] w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center fade-up">
          <a href="#contact" className="inline-flex items-center gap-3 text-lg md:text-xl font-bold hover:text-[#00FF00] transition-colors group">
            SEE HOW THIS WORKS FOR MY BUSINESS
            <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
