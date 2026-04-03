import { weddingData } from "@/data/weddingData";

export default function Footer() {
  return (
    <footer className="border-t border-[#e8d8c7] bg-[#f8f3ec] px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <h3 className="text-2xl font-semibold text-[#2c1810]">
            {weddingData.coupleNames}
          </h3>
          <p className="mt-2 text-[#5c4638]">
            Thank you for being part of our special day.
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-[#c8a96b]">
            Wedding Venue
          </p>
          <p className="mt-2 text-[#5c4638]">{weddingData.venue}</p>
          <p className="text-[#5c4638]">{weddingData.venueAddress}</p>
        </div>
      </div>
    </footer>
  );
}