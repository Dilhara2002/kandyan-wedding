"use client";

import SectionTitle from "@/components/SectionTitle";
import { weddingData } from "@/data/weddingData";
import FadeIn from "@/components/animations/FadeIn";

/**
 * Sovereign Heritage Theme Update:
 * - Signature Quote Style for Family Blessings
 * - Binara-Mala decorative motifs
 * - High-contrast Deep Maroon background for Groom's side
 */

export default function FamilySection() {
  return (
    <section id="family" className="relative overflow-hidden bg-[#FAF9F8]">
      
      {/* Decorative Divider - Sovereign Style */}
      <div className="flex justify-center pt-24 pb-12">
        <div className="w-full max-w-xs flex items-center gap-4">
          <div className="h-[1px] flex-grow bg-[#e1bfb9]/40"></div>
          <div className="w-4 h-4 opacity-30" style={{ backgroundColor: '#735C00', maskImage: 'radial-gradient(circle at center, black 1px, transparent 1px)', maskSize: '24px 24px' }}></div>
          <div className="h-[1px] flex-grow bg-[#e1bfb9]/40"></div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10 pb-32">
        <FadeIn y={30} duration={1}>
          <div className="text-center mb-16">
            <span className="font-sans text-[0.7rem] uppercase tracking-[0.5em] text-[#735C00] mb-4 block font-bold">
              Heritage & Lineage
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#520000] italic">
              Blessings From Our Families
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-0 md:grid-cols-2 overflow-hidden rounded-sm shadow-2xl border border-[#e1bfb9]/30">
          
          {/* Groom's Side - Deep Royal Theme */}
          <div className="relative bg-[#520000] p-12 md:p-20 text-center overflow-hidden group">
            {/* Subtle Liyawela Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none transition-opacity group-hover:opacity-20" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
            </div>
            
            <div className="relative z-10">
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-[#ffe088] font-bold mb-8">
                Groom's Family
              </p>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 leading-snug">
                {weddingData.parents.groomSide}
              </h3>
              <div className="w-12 h-[1px] bg-[#ffe088]/40 mx-auto mb-8"></div>
              <p className="text-sm leading-relaxed text-[#ffdad4]/80 font-serif italic max-w-xs mx-auto">
                "With heartfelt blessings, they celebrate this special union and welcome this beautiful new beginning."
              </p>
            </div>
          </div>

          {/* Bride's Side - Elegant Ivory Theme */}
          <div className="relative bg-white p-12 md:p-20 text-center overflow-hidden group">
             {/* Subtle Dotted Texture */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                  style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #735C00 1px, transparent 0)`, backgroundSize: '30px 30px' }}></div>

            <div className="relative z-10">
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-[#735C00] font-bold mb-8">
                Bride's Family
              </p>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#520000] mb-6 leading-snug">
                {weddingData.parents.brideSide}
              </h3>
              <div className="w-12 h-[1px] bg-[#735C00]/20 mx-auto mb-8"></div>
              <p className="text-sm leading-relaxed text-[#59413d] font-serif italic max-w-xs mx-auto">
                "With love and gratitude, they join in this celebration and share their blessings for a meaningful future."
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Ethos Quote */}
        <div className="mt-20 text-center">
            <p className="font-serif italic text-[#520000]/60 text-base">
                "True luxury is in the quiet depth of the legacy we build together."
            </p>
        </div>
      </div>
    </section>
  );
}