"use client";

import { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { weddingData } from "@/data/weddingData";
import { getTimeRemaining } from "@/lib/utils";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

/**
 * Sovereign Design Elements:
 * 1. Deep Maroon & Gold Color Palette
 * 2. Liyawela & Binara-Mala subtle textures
 * 3. High-end Editorial Typography
 */

export default function Countdown() {
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setIsMounted(true);
    setTimeLeft(getTimeRemaining(weddingData.weddingDate));
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(weddingData.weddingDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section 
      id="countdown" 
      className="relative bg-[#FAF9F8] px-6 py-32 text-center md:px-10 overflow-hidden"
    >
      {/* Background Textures from Reference Design */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #735C00 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>
      
      <div className="mx-auto max-w-6xl relative z-10">
        <FadeIn y={30} duration={1.2}>
          {/* Custom Section Title Styling to match Sovereign Theme */}
          <div className="mb-16">
            <span className="font-sans text-[0.7rem] uppercase tracking-[0.5em] text-[#735C00] mb-4 block font-bold">
              The Grand Celebration
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#520000] leading-tight mb-6">
              The Journey to <br/>
              <span className="italic font-normal">Our Forever</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#735C00]/30 mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-[#59413d] max-w-xl mx-auto leading-relaxed">
              Every passing second brings us closer to a heritage-steeped union, 
              blessed by time and celebrated with grace.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {items.map((item) => (
            <StaggerItem key={item.label}>
              <div className="group relative overflow-hidden rounded-xl border border-[#e1bfb9] bg-white p-10 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-1">
                
                {/* Decorative Pattern inside the card */}
                <div className="absolute top-0 right-0 w-12 h-12 opacity-5 pointer-events-none transform rotate-45 translate-x-4 -translate-y-4">
                   <div className="w-full h-full bg-[#7B0000]" style={{ maskImage: 'radial-gradient(circle at center, black 1px, transparent 1px)', maskSize: '12px 12px' }}></div>
                </div>

                <div 
                  className="text-5xl font-serif font-bold text-[#520000] md:text-7xl transition-colors duration-500 group-hover:text-[#735C00]" 
                  suppressHydrationWarning
                >
                  {!isMounted ? "00" : String(item.value).padStart(2, "0")}
                </div>

                <div className="mt-6 flex flex-col items-center gap-2">
                    <div className="h-[2px] w-4 bg-[#735C00]/20 group-hover:w-8 transition-all duration-500"></div>
                    <p className="text-[0.65rem] uppercase tracking-[0.4em] text-[#735C00] font-bold">
                        {item.label}
                    </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom Decorative Motif */}
        <div className="mt-20 flex justify-center items-center gap-4 opacity-30">
            <div className="h-[1px] w-12 bg-[#8d706c]"></div>
            <div className="w-3 h-3 rounded-full border border-[#735C00] rotate-45"></div>
            <div className="h-[1px] w-12 bg-[#8d706c]"></div>
        </div>
      </div>
    </section>
  );
}