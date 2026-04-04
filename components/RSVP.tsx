"use client";

import { FormEvent, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { weddingData } from "@/data/weddingData";
import FadeIn from "@/components/animations/FadeIn";

/**
 * Sovereign Heritage RSVP Theme:
 * - Royal Stationery Look (Ivory Card on Maroon Background)
 * - Liyawela subtle texture on inputs
 * - Deep Maroon (#520000) & Heritage Gold (#735C00)
 */

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="relative bg-[#520000] px-6 py-32 md:px-10 overflow-hidden">
      
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      </div>

      <div className="mx-auto max-w-4xl relative z-10">
        <FadeIn y={30} duration={1}>
          <div className="text-center mb-16">
            <span className="font-sans text-[0.7rem] uppercase tracking-[0.5em] text-[#ffe088] mb-4 block font-bold">
              Join the Celebration
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white italic">
              RSVP
            </h2>
            <p className="mt-6 text-[#ffdad4]/70 font-serif italic max-w-lg mx-auto">
              "We would be honored by your presence as we celebrate a union rooted in love and heritage."
            </p>
          </div>
        </FadeIn>

        {/* RSVP Card Style Wrapper */}
        <div className="relative rounded-sm bg-[#FAF9F8] p-8 md:p-16 shadow-2xl border-t-4 border-[#735C00]">
          
          {/* Internal Motif Decor */}
          <div className="absolute top-4 right-4 w-12 h-12 opacity-5 pointer-events-none" 
               style={{ backgroundColor: '#735C00', maskImage: 'radial-gradient(circle at center, black 1px, transparent 1px)', maskSize: '12px 12px' }}>
          </div>

          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-[#735C00]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                 <span className="material-symbols-outlined text-[#735C00] text-3xl">check</span>
              </div>
              <h3 className="text-3xl font-serif font-bold text-[#520000]">
                Ayubowan!
              </h3>
              <p className="mx-auto mt-4 max-w-sm leading-relaxed text-[#59413d] font-serif italic">
                Your presence is the greatest gift. We have received your response and look forward to seeing you.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-8 md:grid-cols-2">
              
              {/* Name Input */}
              <div className="md:col-span-1">
                <label className="mb-3 block text-[0.65rem] uppercase tracking-[0.3em] text-[#735C00] font-bold">
                  Guest Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full border-b border-[#e1bfb9] bg-transparent py-3 text-[#520000] outline-none focus:border-[#735C00] transition-colors placeholder:text-[#59413d]/20 font-serif"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Input */}
              <div className="md:col-span-1">
                <label className="mb-3 block text-[0.65rem] uppercase tracking-[0.3em] text-[#735C00] font-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full border-b border-[#e1bfb9] bg-transparent py-3 text-[#520000] outline-none focus:border-[#735C00] transition-colors placeholder:text-[#59413d]/20 font-serif"
                  placeholder="Enter your email"
                />
              </div>

              {/* Attendance Select */}
              <div className="md:col-span-1">
                <label className="mb-3 block text-[0.65rem] uppercase tracking-[0.3em] text-[#735C00] font-bold">
                  Attendance
                </label>
                <select className="w-full border-b border-[#e1bfb9] bg-transparent py-3 text-[#520000] outline-none focus:border-[#735C00] appearance-none font-serif cursor-pointer">
                  <option>Joyfully Accept</option>
                  <option>Regretfully Decline</option>
                </select>
              </div>

              {/* Guests Count */}
              <div className="md:col-span-1">
                <label className="mb-3 block text-[0.65rem] uppercase tracking-[0.3em] text-[#735C00] font-bold">
                  Number of Guests
                </label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  className="w-full border-b border-[#e1bfb9] bg-transparent py-3 text-[#520000] outline-none focus:border-[#735C00] font-serif"
                  placeholder="1"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="mb-3 block text-[0.65rem] uppercase tracking-[0.3em] text-[#735C00] font-bold">
                  Wishes & Messages
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-[#e1bfb9]/40 bg-white/50 p-4 text-[#520000] outline-none focus:border-[#735C00] transition-colors placeholder:text-[#59413d]/20 font-serif italic"
                  placeholder="Leave a lovely message for the couple"
                />
              </div>

              {/* Actions */}
              <div className="md:col-span-2 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between pt-6">
                <button
                  type="submit"
                  className="px-12 py-5 bg-gradient-to-br from-[#520000] to-[#7B0000] text-white rounded-sm font-sans text-[0.65rem] tracking-[0.3em] uppercase shadow-xl shadow-[#520000]/20 hover:scale-[1.02] transition-all duration-300"
                >
                  Confirm Attendance
                </button>

                <a
                  href={`mailto:${weddingData.contactEmail}`}
                  className="text-[0.65rem] uppercase tracking-[0.3em] text-[#735C00] font-bold border-b border-[#735C00]/30 hover:border-[#735C00] transition-all"
                >
                  Contact Us
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}