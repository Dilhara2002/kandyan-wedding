import SectionTitle from "@/components/SectionTitle";
import { weddingData } from "@/data/weddingData";

export default function WeddingDetails() {
  return (
    <section id="details" className="bg-[#efe4d6] px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Wedding Details"
          title="Join Us for the Celebration"
          description="We warmly invite you to be part of our special day and witness the beginning of our forever in a celebration inspired by Kandyan elegance."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#c8a96b]">
              Couple
            </p>
            <h3 className="text-2xl font-semibold text-[#2c1810]">
              {weddingData.coupleNames}
            </h3>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#c8a96b]">
              Date
            </p>
            <h3 className="text-2xl font-semibold text-[#2c1810]">
              {weddingData.weddingDateText}
            </h3>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#c8a96b]">
              Time
            </p>
            <h3 className="text-2xl font-semibold text-[#2c1810]">
              {weddingData.weddingTimeText}
            </h3>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#c8a96b]">
              Venue
            </p>
            <h3 className="text-2xl font-semibold text-[#2c1810]">
              {weddingData.venue}
            </h3>
            <p className="mt-3 leading-7 text-[#5c4638]">
              {weddingData.venueAddress}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-[#dccab7] bg-[#f8f3ec] p-8">
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#c8a96b]">
              Ceremony
            </p>
            <p className="text-lg leading-8 text-[#5c4638]">
              A graceful Kandyan-inspired celebration filled with tradition,
              blessings, and joyful moments.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#dccab7] bg-[#f8f3ec] p-8">
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#c8a96b]">
              Dress Code
            </p>
            <p className="text-lg leading-8 text-[#5c4638]">
              Elegant traditional or formal attire is warmly welcomed for this
              special occasion.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#dccab7] bg-[#f8f3ec] p-8">
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#c8a96b]">
              Blessings
            </p>
            <p className="text-lg leading-8 text-[#5c4638]">
              Your presence, love, and blessings will make our day even more
              memorable and meaningful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}