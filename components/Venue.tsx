import SectionTitle from "@/components/SectionTitle";
import { weddingData } from "@/data/weddingData";

export default function Venue() {
  return (
    <section id="venue" className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Venue"
          title="Celebrate With Us in Kandy"
          description="Join us at a beautiful setting where tradition, elegance, and heartfelt celebration come together."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#e8d8c7] bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#c8a96b]">
              Wedding Venue
            </p>
            <h3 className="text-3xl font-semibold text-[#2c1810]">
              {weddingData.venue}
            </h3>
            <p className="mt-4 leading-8 text-[#5c4638]">
              {weddingData.venueAddress}
            </p>

            <div className="mt-8">
              <a
                href={weddingData.venueMapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-[#5b1e24] px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#5b1e24] transition hover:bg-[#5b1e24] hover:text-white"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#e8d8c7] bg-[#1b1411] p-8 text-white shadow-sm">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#d4b06a]">
              Event Notes
            </p>

            <div className="space-y-5 leading-8 text-[#f8f3ec]/85">
              <p>
                Kindly arrive a little early to be seated comfortably before the
                ceremony begins.
              </p>
              <p>
                Traditional or formal attire is warmly welcomed to match the
                elegance of the celebration.
              </p>
              <p>
                Your presence and blessings will mean the world to us on this
                unforgettable day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}