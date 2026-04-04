"use client";

import { useRef, useState } from "react";

/**
 * Sovereign Heritage Music Player:
 * - Minimalist Circular Design
 * - Heritage Gold (#735C00) and Deep Maroon (#520000) accents
 * - Rotating Animation when playing
 * - Subtle Glassmorphism effect
 */

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => {
        console.log("Autoplay was prevented. Please interact with the page first.");
      });
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/wedding-theme.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed right-6 bottom-28 z-50 flex items-center justify-center group"
        aria-label={playing ? "Pause Heritage Music" : "Play Heritage Music"}
      >
        {/* Outer Ring with Pulse effect when playing */}
        <div className={`absolute inset-0 rounded-full border border-[#735C00]/20 transition-transform duration-700 
          ${playing ? "scale-125 opacity-0 animate-ping" : "scale-100 opacity-100"}`} 
        />

        {/* Main Button Body */}
        <div className={`relative flex h-14 w-14 items-center justify-center rounded-full border border-[#e1bfb9]/40 bg-[#FAF9F8]/80 backdrop-blur-md shadow-xl transition-all duration-500 
          ${playing ? "border-[#735C00] shadow-[#735C00]/10" : "hover:border-[#735C00]/50"}`}
        >
          {/* Decorative Liyawela Dot Pattern inside */}
          <div className="absolute inset-2 opacity-[0.05] rounded-full pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #735C00 1px, transparent 0)`, backgroundSize: '8px 8px' }} 
          />

          {/* Icon Wrapper with Rotation */}
          <div className={`transition-transform duration-[3000ms] ease-linear ${playing ? "rotate-180" : "rotate-0"}`}>
            {playing ? (
              // Pause Icon - Custom Sovereign Style
              <div className="flex gap-1">
                <div className="h-4 w-[2px] bg-[#520000] rounded-full animate-pulse" />
                <div className="h-4 w-[2px] bg-[#520000] rounded-full animate-pulse delay-75" />
              </div>
            ) : (
              // Play Icon - Custom Sovereign Style
              <svg 
                viewBox="0 0 24 24" 
                className="h-5 w-5 fill-[#520000] transition-colors group-hover:fill-[#735C00]"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>

          {/* Tooltip Label */}
          <span className="absolute right-16 whitespace-nowrap rounded-sm bg-[#520000] px-3 py-1 text-[0.55rem] font-bold uppercase tracking-[0.3em] text-white opacity-0 transition-all duration-300 group-hover:right-18 group-hover:opacity-100">
            {playing ? "Pause Theme" : "Play Theme"}
          </span>
        </div>
      </button>
    </>
  );
}