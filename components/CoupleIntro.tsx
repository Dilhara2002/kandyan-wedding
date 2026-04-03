"use client";

import SectionTitle from "@/components/SectionTitle";
import { weddingData } from "@/data/weddingData";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export default function CoupleIntro() {
  return (
    <section id="story" className="px-6 py-24 md:px-10 bg-[#fdfbf9]">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Title with a soft fade up */}
        <FadeIn y={40} duration={1}>
          <SectionTitle
            eyebrow="Our Story"
            title="A Love Rooted in Tradition"
            description={weddingData.storyIntro}
          />
        </FadeIn>

        {/* Staggered Cards for Groom and Bride */}
        <StaggerContainer className="mt-12 grid gap-10 md:grid-cols-2">
          
          {/* Groom Card */}
          <StaggerItem>
            <div className="group rounded-[2.5rem] border border-[#e8d8c7] bg-white p-10 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="mb-8 flex items-center gap-5">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#5b1e24] text-3xl font-serif font-bold text-white shadow-lg overflow-hidden">
                  <span className="relative z-10">{weddingData.groomName.charAt(0)}</span>
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#c8a96b] font-medium">
                    The Groom
                  </p>
                  <h3 className="mt-1 text-3xl font-serif font-semibold text-[#2c1810]">
                    {weddingData.groomName}
                  </h3>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-[#5c4638] font-light italic">
                "{weddingData.groomDescription}"
              </p>
            </div>
          </StaggerItem>

          {/* Bride Card */}
          <StaggerItem>
            <div className="group rounded-[2.5rem] border border-[#e8d8c7] bg-white p-10 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="mb-8 flex items-center gap-5">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#5b1e24] text-3xl font-serif font-bold text-white shadow-lg overflow-hidden">
                  <span className="relative z-10">{weddingData.brideName.charAt(0)}</span>
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#c8a96b] font-medium">
                    The Bride
                  </p>
                  <h3 className="mt-1 text-3xl font-serif font-semibold text-[#2c1810]">
                    {weddingData.brideName}
                  </h3>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-[#5c4638] font-light italic">
                "{weddingData.brideDescription}"
              </p>
            </div>
          </StaggerItem>

        </StaggerContainer>
      </div>
    </section>
  );
}