"use client";

import SectionTitle from "@/components/SectionTitle";
import { weddingData } from "@/data/weddingData";
import FadeIn from "@/components/animations/FadeIn";

/**
 * Sovereign Heritage Details Theme:
 * - Editorial Bento Grid (Mixed card sizes)
 * - Deep Maroon (#520000) & Heritage Gold (#735C00)
 * - Subtle Liyawela & Dotted textures
 * - Refined Serif Typography
 */

export default function WeddingDetails() {
  return (
    <section id="details" className="relative bg-[#FAF9F8] px-6 py-32 md:px-10 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #735C00 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        <FadeIn y={30} duration={1}>
          <SectionTitle
            eyebrow="The Celebration"
            title="Wedding Details"
            description="A curated union where ancient Kandyan craftsmanship meets the pinnacle of modern elegance."
          />
        </FadeIn>

        {/* Top Bento Grid - Primary Info */}
        <div className="grid gap-6 md:grid-cols-4 md:grid-rows-1 mt-16">
          
          {/* Couple Card - Maroon Accent */}
          <div className="md:col-span-1 group relative overflow-hidden rounded-sm bg-[#520000] p-8 shadow-lg transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20L0 0h40L20 20z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}></div>
            <p className="mb-4 text-[0.6rem] uppercase tracking-[0.4em] text-[#ffe088] font-bold">The Couple</p>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white leading-tight">
              {weddingData.coupleNames}
            </h3>
          </div>

          {/* Date Card */}
          <div className="md:col-span-1 group relative overflow-hidden rounded-sm bg-white p-8 shadow-sm border border-[#e1bfb9]/40 transition-all duration-500 hover:shadow-xl">
            <p className="mb-4 text-[0.6rem] uppercase tracking-[0.4em] text-[#735C00] font-bold">The Date</p>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-[#520000]">
              {weddingData.weddingDateText}
            </h3>
          </div>

          {/* Time Card */}
          <div className="md:col-span-1 group relative overflow-hidden rounded-sm bg-white p-8 shadow-sm border border-[#e1bfb9]/40 transition-all duration-500 hover:shadow-xl">
            <p className="mb-4 text-[0.6rem] uppercase tracking-[0.4em] text-[#735C00] font-bold">The Time</p>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-[#520000]">
              {weddingData.weddingTimeText}
            </h3>
          </div>

          {/* Venue Card - Gold Accent */}
          <div className="md:col-span-1 group relative overflow-hidden rounded-sm bg-[#FAF9F8] p-8 shadow-sm border-l-4 border-[#735C00] transition-all duration-500 hover:shadow-xl">
            <p className="mb-4 text-[0.6rem] uppercase tracking-[0.4em] text-[#735C00] font-bold">The Venue</p>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-[#520000] mb-2">
              {weddingData.venue}
            </h3>
            <p className="text-[0.65rem] uppercase tracking-widest text-[#59413d]/70 leading-relaxed">
              {weddingData.venueAddress}
            </p>
          </div>
        </div>

        {/* Bottom Bento Grid - Event Notes */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          
          {/* Ceremony Note */}
          <div className="relative group overflow-hidden rounded-sm border border-[#e1bfb9]/40 bg-white p-10 transition-all duration-500 hover:shadow-xl">
            <span className="material-symbols-outlined text-[#735C00] text-3xl mb-6" data-icon="auto_stories">auto_stories</span>
            <p className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-[#735C00] font-bold">Ceremony</p>
            <p className="text-sm leading-relaxed text-[#59413d] font-serif italic">
              A graceful Kandyan-inspired celebration filled with tradition, blessings, and joyful moments.
            </p>
          </div>

          {/* Dress Code Note */}
          <div className="relative group overflow-hidden rounded-sm border border-[#e1bfb9]/40 bg-white p-10 transition-all duration-500 hover:shadow-xl">
            <span className="material-symbols-outlined text-[#735C00] text-3xl mb-6" data-icon="checkroom">checkroom</span>
            <p className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-[#735C00] font-bold">Dress Code</p>
            <p className="text-sm leading-relaxed text-[#59413d] font-serif italic">
              Elegant traditional or formal attire is warmly welcomed to match the elegance of the celebration.
            </p>
          </div>

          {/* Blessings Note */}
          <div className="relative group overflow-hidden rounded-sm border border-[#e1bfb9]/40 bg-white p-10 transition-all duration-500 hover:shadow-xl">
            <span className="material-symbols-outlined text-[#735C00] text-3xl mb-6" data-icon="favorite">favorite</span>
            <p className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-[#735C00] font-bold">Blessings</p>
            <p className="text-sm leading-relaxed text-[#59413d] font-serif italic">
              Your presence, love, and blessings will make our day even more memorable and meaningful.
            </p>
          </div>

        </div>

        {/* Signature Divider */}
        <div className="mt-24 flex justify-center items-center gap-4 opacity-20">
            <div className="h-[1px] w-16 bg-[#8d706c]"></div>
            <div className="w-3 h-3 rounded-full border border-[#735C00] rotate-45"></div>
            <div className="h-[1px] w-16 bg-[#8d706c]"></div>
        </div>

      </div>
    </section>
  );
}