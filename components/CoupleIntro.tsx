"use client";

import SectionTitle from "@/components/SectionTitle";
import { weddingData } from "@/data/weddingData";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

/**
 * Sovereign Heritage Theme Update:
 * - Editorial Bento-style offset
 * - Liyawela subtle background textures
 * - Maroon & Gold accents
 */

export default function CoupleIntro() {
  return (
    <section id="story" className="relative px-6 py-32 md:px-10 bg-[#FAF9F8] overflow-hidden">
      
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237b0000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
           }}>
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        
        <FadeIn y={40} duration={1.2}>
          <div className="text-center mb-20">
            <span className="font-sans text-[0.7rem] uppercase tracking-[0.5em] text-[#735C00] mb-4 block font-bold">
              Our Heritage
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#520000] leading-tight italic">
              A Love Rooted in Tradition
            </h2>
            <div className="mt-8 flex justify-center items-center gap-4">
              <div className="h-[1px] w-12 bg-[#e1bfb9]"></div>
              <div className="w-2 h-2 bg-[#735C00] rotate-45"></div>
              <div className="h-[1px] w-12 bg-[#e1bfb9]"></div>
            </div>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-12 md:grid-cols-2 items-start">
          
          {/* Groom Card - Editorial Offset Left */}
          <StaggerItem>
            <div className="group relative overflow-hidden rounded-sm border border-[#e1bfb9]/50 bg-white p-12 transition-all duration-700 hover:shadow-2xl">
              {/* Corner Accent */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-[#520000]/5 -translate-x-8 -translate-y-8 rotate-45 group-hover:bg-[#520000]/10 transition-colors"></div>
              
              <div className="mb-10 text-center md:text-left">
                <div className="relative inline-block mb-6">
                  <div className="h-24 w-24 flex items-center justify-center rounded-full border border-[#735C00]/20 p-2">
                    <div className="h-full w-full rounded-full bg-[#520000] flex items-center justify-center text-3xl font-serif text-[#FAF9F8] shadow-inner transition-transform duration-500 group-hover:scale-95">
                      {weddingData.groomName.charAt(0)}
                    </div>
                  </div>
                  {/* Decorative dot */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#735C00] border-4 border-white rounded-full"></div>
                </div>

                <p className="text-[0.65rem] uppercase tracking-[0.4em] text-[#735C00] font-bold mb-2">
                  The Groom
                </p>
                <h3 className="text-3xl font-serif font-bold text-[#520000]">
                  {weddingData.groomName}
                </h3>
              </div>

              <div className="relative">
                <span className="absolute -top-4 -left-2 text-6xl font-serif text-[#735C00]/10 pointer-events-none">“</span>
                <p className="text-lg leading-relaxed text-[#59413d] font-serif italic text-center md:text-left">
                  {weddingData.groomDescription}
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Bride Card - Editorial Offset Right (Lowered) */}
          <StaggerItem className="md:translate-y-16">
            <div className="group relative overflow-hidden rounded-sm border border-[#e1bfb9]/50 bg-white p-12 transition-all duration-700 hover:shadow-2xl">
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#735C00]/5 translate-x-8 -translate-y-8 rotate-45 group-hover:bg-[#735C00]/10 transition-colors"></div>

              <div className="mb-10 text-center md:text-left">
                <div className="relative inline-block mb-6">
                  <div className="h-24 w-24 flex items-center justify-center rounded-full border border-[#735C00]/20 p-2">
                    <div className="h-full w-full rounded-full bg-[#520000] flex items-center justify-center text-3xl font-serif text-[#FAF9F8] shadow-inner transition-transform duration-500 group-hover:scale-95">
                      {weddingData.brideName.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#735C00] border-4 border-white rounded-full"></div>
                </div>

                <p className="text-[0.65rem] uppercase tracking-[0.4em] text-[#735C00] font-bold mb-2">
                  The Bride
                </p>
                <h3 className="text-3xl font-serif font-bold text-[#520000]">
                  {weddingData.brideName}
                </h3>
              </div>

              <div className="relative">
                <span className="absolute -top-4 -left-2 text-6xl font-serif text-[#735C00]/10 pointer-events-none">“</span>
                <p className="text-lg leading-relaxed text-[#59413d] font-serif italic text-center md:text-left">
                  {weddingData.brideDescription}
                </p>
              </div>
            </div>
          </StaggerItem>

        </StaggerContainer>

        {/* Floating Decorative Text or Icon */}
        <div className="mt-32 text-center opacity-20 pointer-events-none">
           <span className="font-serif italic text-[#520000] text-lg">Legacy of Excellence</span>
        </div>
      </div>
    </section>
  );
}