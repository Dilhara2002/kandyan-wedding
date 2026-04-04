"use client";

import SectionTitle from "@/components/SectionTitle";
import { weddingData } from "@/data/weddingData";
import FadeIn from "@/components/animations/FadeIn";

/**
 * Sovereign Heritage Venue Theme:
 * - High-contrast Bento alignment
 * - Heritage Gold (#735C00) accents
 * - Modern Serif & Editorial Sans-serif mix
 * - Glassmorphism for Event Notes
 */

export default function Venue() {
  return (
    <section id="venue" className="relative px-6 py-32 md:px-10 bg-[#FAF9F8] overflow-hidden">
      
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #735C00 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>

      <div className="mx-auto max-w-6xl relative z-10">
        <FadeIn y={30} duration={1}>
          <SectionTitle
            eyebrow="The Location"
            title="Celebrate With Us"
            description="A setting where ancient heritage meets modern elegance, curated for our most special moments."
          />
        </FadeIn>

        <div className="mt-16 grid gap-0 overflow-hidden rounded-sm shadow-2xl md:grid-cols-2 border border-[#e1bfb9]/30">
          
          {/* Venue Details - Clean Ivory Theme */}
          <div className="relative bg-white p-12 md:p-20 flex flex-col justify-center">
            <span className="material-symbols-outlined text-[#735C00] text-4xl mb-8" data-icon="location_on">
              location_on
            </span>
            
            <p className="mb-4 text-[0.65rem] uppercase tracking-[0.4em] text-[#735C00] font-bold">
              Wedding Venue
            </p>
            
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#520000] leading-tight">
              {weddingData.venue}
            </h3>
            
            <div className="w-12 h-[1px] bg-[#e1bfb9] my-8"></div>
            
            <p className="text-sm md:text-base leading-relaxed text-[#59413d] font-serif italic mb-10">
              {weddingData.venueAddress}
            </p>

            <div>
              <a
                href={weddingData.venueMapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-5 border border-[#e1bfb9] text-[#520000] rounded-sm font-sans text-[0.65rem] tracking-[0.3em] uppercase hover:bg-[#520000] hover:text-white transition-all duration-500"
              >
                View on Map
              </a>
            </div>

            {/* Subtle Texture Overlay */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #735C00 1px, transparent 0)`, backgroundSize: '24px 24px' }}></div>
          </div>

          {/* Event Notes - Deep Maroon Theme */}
          <div className="relative bg-[#520000] p-12 md:p-20 text-white flex flex-col justify-center overflow-hidden group">
            
            {/* Liyawela Style Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-15 transition-opacity" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
            </div>

            <div className="relative z-10">
              <span className="material-symbols-outlined text-[#ffe088] text-4xl mb-8" data-icon="auto_awesome">
                auto_awesome
              </span>
              
              <p className="mb-6 text-[0.65rem] uppercase tracking-[0.4em] text-[#ffe088] font-bold">
                Guest Etiquette
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                    <div className="h-5 w-[1px] bg-[#ffe088]/40 mt-1"></div>
                    <p className="text-sm md:text-base leading-relaxed text-[#ffdad4]/90 font-serif italic">
                      Kindly arrive early to be comfortably seated before the Poruwa ceremony begins.
                    </p>
                </div>
                <div className="flex gap-4">
                    <div className="h-5 w-[1px] bg-[#ffe088]/40 mt-1"></div>
                    <p className="text-sm md:text-base leading-relaxed text-[#ffdad4]/90 font-serif italic">
                      Traditional Kandyan or formal attire is warmly welcomed to match the heritage of our union.
                    </p>
                </div>
                <div className="flex gap-4">
                    <div className="h-5 w-[1px] bg-[#ffe088]/40 mt-1"></div>
                    <p className="text-sm md:text-base leading-relaxed text-[#ffdad4]/90 font-serif italic">
                      Your presence and blessings will be our greatest treasure on this unforgettable day.
                    </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Decorative Motif */}
        <div className="mt-24 flex justify-center items-center gap-4 opacity-30">
            <div className="h-[1px] w-12 bg-[#8d706c]"></div>
            <div className="w-3 h-3 rounded-full border border-[#735C00] rotate-45"></div>
            <div className="h-[1px] w-12 bg-[#8d706c]"></div>
        </div>
      </div>
    </section>
  );
}