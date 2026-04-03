"use client";

import { FormEvent, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { weddingData } from "@/data/weddingData";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="bg-[#1b1411] px-6 py-20 md:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="RSVP"
          title="We Would Be Honored by Your Presence"
          description="Please let us know if you will be joining us for our special day."
          light
        />

        <div className="rounded-[2rem] border border-[#d4b06a]/20 bg-white/5 p-8 backdrop-blur-sm md:p-10">
          {submitted ? (
            <div className="text-center">
              <h3 className="text-3xl font-semibold text-[#f8f3ec]">
                Thank You
              </h3>
              <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#f8f3ec]/80">
                Your response has been noted for this demo design. Later api meka
                real database ekakata connect karamu.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#d4b06a]">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-[#f8f3ec] outline-none placeholder:text-[#f8f3ec]/40"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#d4b06a]">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-[#f8f3ec] outline-none placeholder:text-[#f8f3ec]/40"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#d4b06a]">
                  Attendance
                </label>
                <select className="w-full rounded-2xl border border-white/10 bg-[#2c201b] px-4 py-3 text-[#f8f3ec] outline-none">
                  <option>Joyfully Accept</option>
                  <option>Regretfully Decline</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#d4b06a]">
                  Number of Guests
                </label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-[#f8f3ec] outline-none placeholder:text-[#f8f3ec]/40"
                  placeholder="1"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#d4b06a]">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-[#f8f3ec] outline-none placeholder:text-[#f8f3ec]/40"
                  placeholder="Leave a lovely message for the couple"
                />
              </div>

              <div className="md:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="rounded-full border border-[#d4b06a] bg-[#d4b06a] px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#1a120e] transition hover:scale-[1.02]"
                >
                  Send RSVP
                </button>

                <a
                  href={`mailto:${weddingData.contactEmail}`}
                  className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#f8f3ec] transition hover:border-[#d4b06a] hover:text-[#d4b06a]"
                >
                  Email Us
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}