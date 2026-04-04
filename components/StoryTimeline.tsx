"use client";

import SectionTitle from "@/components/SectionTitle";
import { weddingData } from "@/data/weddingData";
import FadeIn from "@/components/animations/FadeIn";

/**
 * Sovereign Heritage Timeline Theme:
 * - Vertical Continuity Line (Heritage Thread)
 * - Gold Badge numbering
 * - Clean Serif Typography
 * - Subtle Liya-wel Patterning
 */

export default function StoryTimeline() {
  return (
    <section id="timeline" className="relative px-6 py-32 md:px-10 bg-[#FAF9F8] overflow-hidden">
      
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #735C00 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>

      <div className="mx-auto max-w-5xl relative z-10">
        <FadeIn y={30} duration={1}>
          <SectionTitle
            eyebrow="Our Legacy"
            title="A Journey Through Time"
            description="Moments that shaped our story, carved by love and preserved in our hearts forever."
          />
        </FadeIn>

        <div className="relative mt-20 space-y-12">
          {/* Vertical Connecting Line (The Heritage Thread) */}
          <div className="absolute left-[27px] top-0 h-full w-[1px] bg-gradient-to-b from-[#735C00]/40 via-[#e1bfb9] to-transparent md:left-1/2 md:-translate-x-1/2 hidden md:block" />

          {weddingData.timeline.map((item, index) => (
            <FadeIn 
              key={item.title} 
              delay={index * 0.15} 
              y={20}
              className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Content Card */}
              <div className="w-full md:w-1/2">
                <div className="group relative rounded-sm border border-[#e1bfb9]/40 bg-white p-8 md:p-10 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-[#735C00]/30">
                  
                  {/* Decorative Motif inside card */}
                  <div className="absolute top-0 right-0 w-12 h-12 opacity-[0.03] pointer-events-none group-hover:opacity-10 transition-opacity" 
                       style={{ backgroundColor: '#735C00', maskImage: 'radial-gradient(circle at center, black 1px, transparent 1px)', maskSize: '10px 10px' }}>
                  </div>

                  <span className="text-[0.6rem] uppercase tracking-[0.4em] text-[#735C00] font-bold mb-3 block">
                    Chapter {String(index + 1).padStart(2, "0")}
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#520000] mb-4">
                    {item.title}
                  </h3>
                  
                  <div className="w-10 h-[1px] bg-[#e1bfb9] mb-4 group-hover:w-20 transition-all duration-500"></div>
                  
                  <p className="text-sm md:text-base leading-relaxed text-[#59413d] font-serif italic">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Center Icon/Marker */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex h-14 w-14 items-center justify-center rounded-full border border-[#FAF9F8] bg-[#520000] shadow-lg z-20">
                 <div className="h-10 w-10 rounded-full border border-[#ffe088]/30 flex items-center justify-center text-[#ffe088] text-xs font-bold font-sans">
                    {String(index + 1).padStart(2, "0")}
                 </div>
              </div>

              {/* Empty Spacer for desktop alignment */}
              <div className="hidden md:block md:w-1/2" />
            </FadeIn>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-24 text-center">
            <div className="inline-block w-2 h-2 bg-[#735C00] rotate-45 mb-4"></div>
            <p className="font-serif italic text-[#520000]/40 text-sm">And the story continues...</p>
        </div>
      </div>
    </section>
  );
}