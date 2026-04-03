type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-[#c8a96b]">
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-3xl font-semibold tracking-wide md:text-5xl ${
          light ? "text-[#f8f3ec]" : "text-[#2c1810]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base leading-8 md:text-lg ${
            light ? "text-[#f8f3ec]/80" : "text-[#5c4638]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}