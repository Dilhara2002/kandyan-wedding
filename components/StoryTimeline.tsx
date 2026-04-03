import SectionTitle from "@/components/SectionTitle";
import { weddingData } from "@/data/weddingData";

export default function StoryTimeline() {
  return (
    <section id="timeline" className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Timeline"
          title="Our Journey Together"
          description="A few meaningful moments that shaped the beautiful story we now celebrate with love and gratitude."
        />

        <div className="space-y-6">
          {weddingData.timeline.map((item, index) => (
            <div
              key={item.title}
              className="grid gap-4 rounded-[2rem] border border-[#e8d8c7] bg-white p-8 shadow-sm md:grid-cols-[120px_1fr]"
            >
              <div className="flex items-start">
                <div className="rounded-full bg-[#5b1e24] px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#2c1810]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-8 text-[#5c4638]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}