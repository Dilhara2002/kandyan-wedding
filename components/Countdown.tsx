"use client";

import { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { weddingData } from "@/data/weddingData";
import { getTimeRemaining } from "@/lib/utils";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

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
    <section id="countdown" className="bg-[#1b1411] px-6 py-24 text-center md:px-10 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <FadeIn y={30} duration={1}>
          <SectionTitle
            eyebrow="Countdown"
            title="Counting Down to Our Forever"
            description="Every moment brings us closer to a day filled with love, blessings, and beautiful new beginnings."
            light
          />
        </FadeIn>

        <StaggerContainer className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {items.map((item) => (
            <StaggerItem key={item.label}>
              <div className="group relative rounded-[2.5rem] border border-[#d4b06a]/20 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-[#d4b06a]/50 hover:bg-white/10">
                <div className="absolute inset-0 -z-10 bg-[#d4b06a]/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="text-4xl font-serif font-semibold text-[#f8f3ec] md:text-6xl" suppressHydrationWarning>
                  {!isMounted ? "00" : String(item.value).padStart(2, "0")}
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.4em] text-[#d4b06a] font-medium">{item.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}