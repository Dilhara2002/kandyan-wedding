"use client";

import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { weddingData } from "@/data/weddingData";
import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";

/**
 * Sovereign Heritage Gallery Theme:
 * - Asymmetrical Bento Grid (Mixed heights)
 * - Liyawela Texture Overlays
 * - Grayscale-to-color Hover transitions
 * - Heritage Maroon & Gold accents
 */

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-[#FAF9F8] px-6 py-32 md:px-10 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #735C00 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        <FadeIn y={30} duration={1}>
          <div className="text-center mb-20">
            <span className="font-sans text-[0.7rem] uppercase tracking-[0.5em] text-[#735C00] mb-4 block font-bold">
              Visual Heritage
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#520000] leading-tight italic">
              Moments We Cherish
            </h2>
            <div className="mt-8 flex justify-center items-center gap-4 opacity-40">
              <div className="h-[1px] w-20 bg-[#e1bfb9]"></div>
              <div className="w-2 h-2 border border-[#735C00] rotate-45"></div>
              <div className="h-[1px] w-20 bg-[#e1bfb9]"></div>
            </div>
          </div>
        </FadeIn>

        {/* Sovereign Style Bento Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[900px]">
          {weddingData.gallery.slice(0, 5).map((image, index) => {
            // Logic to create an asymmetrical Bento effect
            const isLarge = index === 0;
            const isWide = index === 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-sm bg-white shadow-sm transition-all duration-700 hover:shadow-2xl 
                  ${isLarge ? "md:col-span-2 md:row-span-2 h-[500px] md:h-full" : ""}
                  ${isWide ? "md:col-span-2 h-[300px] md:h-auto" : "h-[300px] md:h-auto"}
                `}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale-[0.3] contrast-[1.1] transition duration-[1.5s] ease-out group-hover:scale-110 group-hover:grayscale-0"
                  />
                  
                  {/* Subtle Gradient & Texture Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#520000]/40 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  
                  {/* Liyawela Decorative Frame (Visible on Hover) */}
                  <div className="absolute inset-4 border border-white/20 opacity-0 transition-all duration-700 group-hover:opacity-100 pointer-events-none transform scale-110 group-hover:scale-100">
                    <div className="absolute top-2 right-2 w-8 h-8 opacity-40" 
                         style={{ backgroundColor: 'white', maskImage: 'radial-gradient(circle at center, black 1px, transparent 1px)', maskSize: '8px 8px' }}>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Motif */}
        <div className="mt-24 text-center">
            <button className="px-12 py-5 border border-[#e1bfb9] text-[#520000] rounded-sm font-sans text-[0.65rem] tracking-[0.4em] uppercase hover:bg-[#520000] hover:text-white transition-all duration-500">
                View Full Collection
            </button>
        </div>
      </div>
    </section>
  );
}