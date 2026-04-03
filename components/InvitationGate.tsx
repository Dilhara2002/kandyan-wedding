"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type InvitationGateProps = {
  onOpen: () => void;
};

export default function InvitationGate({ onOpen }: InvitationGateProps) {
  const [isUnfolding, setIsUnfolding] = useState(false);

  const handleOpen = () => {
    setIsUnfolding(true);
    setTimeout(() => {
      if (onOpen) onOpen();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1c1714_0%,_#050505_100%)]" />
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} className="relative perspective-[2000px]">
        <AnimatePresence>
          <motion.div
            animate={isUnfolding ? { y: -50, opacity: 0, scale: 1.1, filter: "blur(15px)" } : {}}
            className="relative w-[320px] h-[460px] md:w-[420px] md:h-[580px]"
          >
            {/* Inner Card */}
            <div className="absolute inset-0 bg-[#fdfcfb] shadow-2xl rounded-sm flex flex-col items-center justify-center p-12 text-center border border-[#d4b06a]/10">
               <div className="border-[0.5px] border-[#d4b06a]/40 absolute inset-6 pointer-events-none" />
               <p className="text-[#d4b06a] tracking-[0.6em] uppercase text-[9px] mb-4">Invitation</p>
               <h2 className="text-[#1a120e] font-serif text-3xl md:text-5xl italic font-light">Ishan & Ashini</h2>
            </div>

            {/* Folding Top Cover */}
            <motion.div
              style={{ transformOrigin: "top", transformStyle: "preserve-3d" }}
              animate={isUnfolding ? { rotateX: 150 } : { rotateX: 0 }}
              transition={{ duration: 1.4, ease: [0.45, 0, 0.55, 1] }}
              className="absolute inset-0 z-20"
            >
              <div className="absolute inset-0 bg-[#1a1512] border border-[#d4b06a]/20 shadow-2xl flex flex-col items-center justify-center backface-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <motion.div whileHover={{ scale: 1.05 }} onClick={handleOpen} className="relative z-30 cursor-pointer">
                  <div className="w-24 h-24 bg-[#8a1818] rounded-full shadow-2xl border-[3px] border-[#9c2222] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#d4b06a]" fill="currentColor">
                      <path d="M12,2C10,2 4,6 4,12C4,18 12,22 12,22C12,22 20,18 20,12C20,6 14,2 12,2M12,18C12,18 7,14 7,10C7,8 8,6 10,6C11,6 11.5,6.5 12,7C12.5,6.5 13,6 14,6C16,6 17,8 17,10C17,14 12,18 12,18Z" />
                    </svg>
                  </div>
                </motion.div>
                <p className="mt-10 text-[#d4b06a] font-light tracking-[0.8em] uppercase text-[10px]">Open</p>
              </div>
              <div className="absolute inset-0 bg-[#241e1a]" style={{ transform: "rotateX(180deg)", backfaceVisibility: "hidden" }} />
            </motion.div>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#1a1512] border-t border-[#d4b06a]/10 z-10" />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}