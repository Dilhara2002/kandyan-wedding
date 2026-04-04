"use client";

import { weddingData } from "@/data/weddingData";

/**
 * Sovereign Heritage Navbar:
 * - Floating Glassmorphism design
 * - Deep Maroon (#520000) brand text
 * - Heritage Gold (#735C00) active state
 * - High-tracking Editorial Typography
 */

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#FAF9F8]/80 backdrop-blur-md border-b border-[#e1bfb9]/20 transition-all duration-500">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-8 py-6 md:px-12">
        
        {/* Brand/Couple Names Section */}
        <div className="flex items-center gap-6">
          <button className="text-[#520000] transition-transform duration-300 hover:scale-110 md:hidden">
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
          <a
            href="#home"
            className="text-sm md:text-base font-serif font-bold tracking-[0.3em] text-[#520000] uppercase"
          >
            {weddingData.coupleNames}
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-10 md:flex">
          {weddingData.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative text-[0.65rem] font-bold tracking-[0.4em] text-[#59413d] uppercase transition-colors duration-300 hover:text-[#735C00]"
            >
              {link.label}
              {/* Sovereign Underline Effect */}
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#735C00] transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Side Accent/CTA */}
        <div className="flex items-center gap-6">
          <a
            href="#rsvp"
            className="hidden md:block rounded-sm border border-[#735C00]/30 px-6 py-2 text-[0.6rem] font-bold uppercase tracking-[0.3em] text-[#735C00] transition-all duration-300 hover:bg-[#735C00] hover:text-white"
          >
            RSVP
          </a>
          <div className="h-2 w-2 rounded-full bg-[#735C00]/20 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
}