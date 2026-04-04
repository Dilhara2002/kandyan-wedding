"use client";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
};

/**
 * Sovereign Heritage Section Title:
 * - High-tracking Editorial Eyebrow
 * - Serif Bold Title with Italic support (if needed)
 * - Heritage Gold (#735C00) accents
 * - Responsive spacing
 */

export default function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-16 max-w-4xl text-center px-4">
      {eyebrow && (
        <p className={`mb-5 text-[0.65rem] md:text-[0.7rem] font-bold uppercase tracking-[0.5em] transition-colors duration-500 ${
          light ? "text-[#ffe088]" : "text-[#735C00]"
        }`}>
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-4xl font-serif font-bold tracking-tight md:text-6xl leading-[1.1] transition-colors duration-500 ${
          light ? "text-white" : "text-[#520000]"
        }`}
      >
        {title}
      </h2>

      {/* Decorative Sovereign Divider */}
      <div className="mt-8 mb-8 flex justify-center items-center gap-4 opacity-40">
        <div className={`h-[1px] w-12 ${light ? "bg-white/30" : "bg-[#e1bfb9]"}`}></div>
        <div className={`w-2 h-2 rotate-45 border ${light ? "border-white/50" : "border-[#735C00]"}`}></div>
        <div className={`h-[1px] w-12 ${light ? "bg-white/30" : "bg-[#e1bfb9]"}`}></div>
      </div>

      {description && (
        <p
          className={`mx-auto max-w-2xl text-sm md:text-base leading-relaxed font-serif italic transition-opacity duration-500 ${
            light ? "text-[#ffdad4]/80" : "text-[#59413d]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}