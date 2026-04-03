import { weddingData } from "@/data/weddingData";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#home"
          className="text-lg font-semibold tracking-[0.2em] text-[#f8f3ec] uppercase"
        >
          {weddingData.coupleNames}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {weddingData.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm tracking-[0.18em] text-[#f8f3ec]/90 uppercase transition hover:text-[#d4b06a]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}