"use client";

import { weddingData } from "@/data/weddingData";

/**
 * Sovereign Heritage Theme Update:
 * - Binara-Mala motif divider
 * - Multi-column Editorial Layout
 * - High-tracking uppercase labels
 * - Warm Off-white (#FAF9F8) background
 */

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#FAF9F8] border-t border-[#e1bfb9]/30">
      
      {/* Decorative Background Motif (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundColor: '#735C00', 
             maskImage: 'radial-gradient(circle at center, black 1px, transparent 1px)', 
             maskSize: '24px 24px' 
           }}>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-20">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:items-start">
          
          {/* Brand/Couple Column */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <h2 className="text-2xl font-serif font-bold tracking-tighter text-[#520000]">
              {weddingData.coupleNames.toUpperCase()}
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-[#59413d]/70 text-center md:text-left font-serif italic">
              "Preserving our heritage through a union of love, tradition, and shared dreams."
            </p>
            <div className="flex gap-4 mt-2">
               {/* Decorative Dot Divider */}
               <div className="w-1.5 h-1.5 rounded-full bg-[#735C00]"></div>
               <div className="w-1.5 h-1.5 rounded-full bg-[#735C00]/40"></div>
               <div className="w-1.5 h-1.5 rounded-full bg-[#735C00]/20"></div>
            </div>
          </div>

          {/* Venue Details Column */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.4em] text-[#735C00]">
              The Grand Venue
            </span>
            <div className="text-center md:text-left">
              <p className="text-sm font-serif font-semibold text-[#520000] mb-1">
                {weddingData.venue}
              </p>
              <p className="text-xs leading-relaxed text-[#59413d]/70 uppercase tracking-wider">
                {weddingData.venueAddress}
              </p>
            </div>
          </div>

          {/* Quick Links / RSVP Column */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.4em] text-[#735C00]">
              Celebration
            </span>
            <nav className="flex flex-col items-center md:items-start gap-3">
              <a href="#story" className="text-[0.7rem] uppercase tracking-widest text-[#59413d]/70 hover:text-[#735C00] transition-colors">Our Story</a>
              <a href="#family" className="text-[0.7rem] uppercase tracking-widest text-[#59413d]/70 hover:text-[#735C00] transition-colors">Family Blessings</a>
              <a href="#rsvp" className="text-[0.7rem] uppercase tracking-widest text-[#59413d]/70 hover:text-[#735C00] transition-colors border-b border-[#735C00]/30 pb-0.5">RSVP Invitation</a>
            </nav>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-20 pt-8 border-t border-[#e1bfb9]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[0.55rem] uppercase tracking-[0.3em] text-[#59413d]/50 font-medium text-center">
            © 2026 {weddingData.coupleNames} Wedding. All Rights Reserved.
          </span>
          <div className="flex gap-8">
             <span className="text-[0.55rem] uppercase tracking-[0.3em] text-[#59413d]/30 italic">
               Heritage Through Love
             </span>
          </div>
        </div>
      </div>
    </footer>
  );
}