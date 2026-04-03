import SectionTitle from "@/components/SectionTitle";
import { weddingData } from "@/data/weddingData";

export default function FamilySection() {
  return (
    <section id="family" className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="With Love From Our Families"
          title="Blessings From Those Closest to Us"
          description="We are deeply grateful for the love, support, and guidance of our families as we begin this beautiful new chapter together."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-[#e8d8c7] bg-white p-8 text-center shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a96b]">
              Groom's Family
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-[#2c1810]">
              {weddingData.parents.groomSide}
            </h3>
            <p className="mt-4 leading-8 text-[#5c4638]">
              With heartfelt blessings and joyful wishes, they celebrate this
              special union and welcome this beautiful beginning.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#e8d8c7] bg-white p-8 text-center shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a96b]">
              Bride's Family
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-[#2c1810]">
              {weddingData.parents.brideSide}
            </h3>
            <p className="mt-4 leading-8 text-[#5c4638]">
              With love and gratitude, they join in this celebration and share
              their blessings for a joyful and meaningful future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}