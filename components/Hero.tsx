"use client";

import { weddingData } from "@/data/weddingData";
import FadeIn from "@/components/animations/FadeIn";

/**
 * Sovereign Heritage Hero Theme:
 * - High-end Editorial Layout (Asymmetrical)
 * - Deep Maroon to Gold accents
 * - Liya-wel texture patterns
 * - Serif & Italic contrast typography
 */

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] md:min-h-screen items-center px-8 md:px-24 overflow-hidden bg-[#FAF9F8]"
    >
      {/* Sovereign Pattern Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #8d706c 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>
      
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center max-w-screen-2xl mx-auto pt-20">
        
        {/* Left Side: Editorial Content */}
        <div className="md:col-span-6 order-2 md:order-1 text-center md:text-left">
          <FadeIn y={30} duration={1.2}>
            <span className="font-sans text-[0.7rem] uppercase tracking-[0.5em] text-[#735C00] mb-6 block font-bold">
              Legacy of Love & Heritage
            </span>
            
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#520000] leading-[1.1] mb-8 -tracking-[0.02em]">
              The Union of <br/>
              <span className="italic font-normal text-[#735C00]">{weddingData.coupleNames}</span>
            </h1>

            <div className="w-20 h-[1px] bg-[#e1bfb9] mb-8 mx-auto md:mx-0"></div>

            <p className="text-base md:text-lg text-[#59413d] max-w-md mb-12 leading-relaxed font-serif italic">
              "{weddingData.subtitle}"
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <a
                href="#details"
                className="px-10 py-5 bg-gradient-to-br from-[#520000] to-[#7B0000] text-white rounded-sm font-sans text-[0.65rem] tracking-[0.3em] uppercase shadow-xl shadow-[#520000]/20 hover:scale-[1.02] transition-transform duration-300"
              >
                View Heritage Details
              </a>
              <a
                href="#rsvp"
                className="px-10 py-5 border border-[#e1bfb9] text-[#520000] rounded-sm font-sans text-[0.65rem] tracking-[0.3em] uppercase hover:bg-[#FAF9F8] hover:border-[#520000] transition-all duration-300"
              >
                RSVP Now
              </a>
            </div>

            {/* Venue & Date Footer in Hero */}
            <div className="mt-16 flex flex-col md:flex-row gap-8 items-center md:items-start text-[#59413d]/60">
                <div className="flex flex-col gap-1">
                    <span className="text-[0.6rem] uppercase tracking-widest font-bold">Wedding Date</span>
                    <span className="text-sm font-serif">{weddingData.weddingDateText}</span>
                </div>
                <div className="hidden md:block w-[1px] h-8 bg-[#e1bfb9]"></div>
                <div className="flex flex-col gap-1">
                    <span className="text-[0.6rem] uppercase tracking-widest font-bold">The Venue</span>
                    <span className="text-sm font-serif">{weddingData.venue}</span>
                </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Side: Featured Imagery / Decorative Space */}
        <div className="md:col-span-6 order-1 md:order-2 relative">
          <FadeIn delay={0.4} scale={1.05} duration={1.5}>
            <div className="aspect-[4/5] md:aspect-[5/6] w-full overflow-hidden rounded-sm shadow-2xl relative border-[12px] border-white">
              <div 
                className="w-full h-full bg-cover bg-center grayscale-[0.2] contrast-[1.1] hover:scale-105 transition-transform duration-[3s]" 
                style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
              />
              {/* Internal Motif Overlay */}
              <div className="absolute bottom-6 right-6 w-16 h-16 opacity-20 pointer-events-none" 
                   style={{ backgroundColor: 'white', maskImage: 'radial-gradient(circle at center, black 1px, transparent 1px)', maskSize: '16px 16px' }}></div>
            </div>
          </FadeIn>
          
          {/* Sovereign Decorative Floating Element */}
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#e9c349]/10 backdrop-blur-3xl rounded-full -z-10"></div>
        </div>

      </div>

      {/* Scroll Indicator Sovereign Style */}
      <div className="absolute bottom-12 left-8 md:left-24 hidden md:flex items-center gap-4">
          <span className="text-[0.6rem] uppercase tracking-[0.4em] text-[#735C00]/40 vertical-text rotate-180" style={{ writingMode: 'vertical-rl' }}>SCROLL TO EXPLORE</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-[#735C00]/40 to-transparent"></div>
      </div>
    </section>
  );
}