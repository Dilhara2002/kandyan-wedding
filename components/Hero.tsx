"use client";

import { weddingData } from "@/data/weddingData";
import FadeIn from "@/components/animations/FadeIn";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1b1411] px-6 pt-28 pb-16 text-center"
    >
      {/* Background Section with Parallax-like feel */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-25 scale-105 transition-transform duration-[10s] ease-out hover:scale-100" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#2a1a14]/70 to-[#120d0b]" />
      </div>

      {/* Animated Content Wrapper */}
      <FadeIn className="relative z-10 mx-auto max-w-4xl" y={50} duration={1.2}>
        
        {/* Subtle Top Label */}
        <p className="mb-5 text-sm uppercase tracking-[0.4em] text-[#d4b06a] md:text-base opacity-90">
          Kandyan Wedding Invitation
        </p>

        {/* Main Names - Slide up and Fade in */}
        <FadeIn delay={0.3} y={20}>
          <h1 className="text-5xl font-semibold leading-tight text-[#f8f3ec] md:text-7xl font-serif">
            {weddingData.coupleNames}
          </h1>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.5} y={15}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#f8f3ec]/85 md:text-xl font-light italic">
            {weddingData.subtitle}
          </p>
        </FadeIn>

        {/* Date & Venue Info */}
        <FadeIn delay={0.7} y={10}>
          <div className="mt-8 flex flex-col items-center gap-3">
            <span className="text-lg font-medium text-[#d4b06a] md:text-2xl tracking-wider">
              {weddingData.weddingDateText}
            </span>
            <div className="h-[1px] w-12 bg-[#d4b06a]/40 my-1" />
            <span className="text-sm uppercase tracking-[0.25em] text-[#f8f3ec]/75">
              {weddingData.venue}
            </span>
          </div>
        </FadeIn>

        {/* Action Buttons */}
        <FadeIn delay={0.9} y={10}>
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a
              href="#details"
              className="group relative overflow-hidden rounded-full bg-[#d4b06a] px-10 py-4 text-sm font-medium uppercase tracking-[0.18em] text-[#1a120e] transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,176,106,0.4)]"
            >
              <span className="relative z-10">View Details</span>
            </a>

            <a
              href="#rsvp"
              className="rounded-full border border-[#f8f3ec]/30 px-10 py-4 text-sm font-medium uppercase tracking-[0.18em] text-[#f8f3ec] transition-all duration-300 hover:border-[#d4b06a] hover:text-[#d4b06a] hover:bg-[#d4b06a]/5"
            >
              RSVP Now
            </a>
          </div>
        </FadeIn>

      </FadeIn>

      {/* Scroll Indicator Dot (Optional but adds premium feel) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50">
        <div className="flex flex-col items-center gap-2">
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#d4b06a] to-transparent" />
        </div>
      </div>
    </section>
  );
}