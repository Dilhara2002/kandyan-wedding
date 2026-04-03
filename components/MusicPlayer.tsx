"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/wedding-theme.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed right-5 bottom-24 z-40 rounded-full border border-[#d4b06a]/30 bg-[#1b1411] px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-[#f8f3ec] shadow-lg backdrop-blur-sm transition hover:border-[#d4b06a] hover:text-[#d4b06a]"
      >
        {playing ? "Pause Music" : "Play Music"}
      </button>
    </>
  );
}