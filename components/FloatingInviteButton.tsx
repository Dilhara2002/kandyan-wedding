"use client";

/**
 * Sovereign Heritage Theme Update:
 * - Deep Maroon to Crimson Gradient
 * - Glassmorphism Backdrop Blur
 * - Elevated Shadow with Primary Tint
 * - Tracking-widest Typography
 */

export default function FloatingInviteButton() {
  return (
    <a
      href="#rsvp"
      className="fixed right-6 bottom-8 z-50 flex items-center gap-3 rounded-full 
                 bg-gradient-to-br from-[#520000] to-[#7B0000] 
                 px-8 py-4 text-[0.65rem] font-bold uppercase tracking-[0.3em] 
                 text-white shadow-2xl shadow-[#520000]/40 
                 transition-all duration-500 hover:scale-105 hover:-translate-y-1 
                 active:scale-95 group border border-white/10 backdrop-blur-sm"
    >
      {/* Subtle Shine Effect */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
      
      <span className="relative z-10">RSVP Now</span>
      
      {/* Decorative Icon from Reference Style */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="14" 
        height="14" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="relative z-10 transition-transform duration-500 group-hover:translate-x-1"
      >
        <path d="M5 12h14m-7-7 7 7-7 7"/>
      </svg>
    </a>
  );
}