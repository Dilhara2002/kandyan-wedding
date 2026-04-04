"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type InvitationGateProps = {
  onOpen: () => void;
};

/**
 * Sovereign Heritage Gate:
 * - Deep Maroon (#520000) & Heritage Gold (#735C00)
 * - Liyawela subtle pattern on the envelope
 * - Wax seal inspired interactive button
 */

export default function InvitationGate({ onOpen }: InvitationGateProps) {
  const [isUnfolding, setIsUnfolding] = useState(false);

  const handleOpen = () => {
    setIsUnfolding(true);
    setTimeout(() => {
      if (onOpen) onOpen();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center bg-[#FAF9F8] overflow-hidden">
      {/* Background with Sovereign Texture */}
      <div className="absolute inset-0 bg-[#FAF9F8]" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #735C00 1px, transparent 0)`, backgroundSize: '40px 40px' }} />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.5, ease: "easeOut" }} 
        className="relative perspective-[2500px]"
      >
        <AnimatePresence>
          <motion.div
            animate={isUnfolding ? { y: -100, opacity: 0, scale: 1.05, filter: "blur(20px)" } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="relative w-[340px] h-[480px] md:w-[460px] md:h-[620px]"
          >
            {/* Inner Card (The actual invitation content showing through) */}
            <div className="absolute inset-0 bg-white shadow-2xl rounded-sm flex flex-col items-center justify-center p-12 text-center border border-[#e1bfb9]/30">
               <div className="border-[1px] border-[#735C00]/20 absolute inset-4 pointer-events-none" />
               <div className="border-[0.5px] border-[#735C00]/10 absolute inset-6 pointer-events-none" />
               
               <p className="text-[#735C00] tracking-[0.6em] uppercase text-[10px] mb-6 font-bold">The Royal Union</p>
               <h2 className="text-[#520000] font-serif text-4xl md:text-6xl font-bold italic leading-tight">
                 Ishan <br/> <span className="text-2xl md:text-3xl font-normal opacity-40">&</span> <br/> Ashini
               </h2>
            </div>

            {/* Folding Top Cover (The Envelope Flap) */}
            <motion.div
              style={{ transformOrigin: "top", transformStyle: "preserve-3d" }}
              animate={isUnfolding ? { rotateX: 160 } : { rotateX: 0 }}
              transition={{ duration: 1.6, ease: [0.45, 0, 0.55, 1] }}
              className="absolute inset-0 z-20"
            >
              {/* Envelope Exterior */}
              <div className="absolute inset-0 bg-[#520000] border border-[#735C00]/20 shadow-2xl flex flex-col items-center justify-center backface-hidden rounded-t-sm">
                {/* Liyawela Style Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.08]" 
                     style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
                
                {/* Royal Wax Seal Style Button */}
                <motion.div 
                  whileHover={{ scale: 1.08 }} 
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOpen} 
                  className="relative z-30 cursor-pointer group"
                >
                  <div className="w-28 h-28 bg-[#735C00] rounded-full shadow-[0_0_30px_rgba(115,92,0,0.3)] border-[1px] border-[#ffe088]/40 flex items-center justify-center relative overflow-hidden">
                    {/* Inner texture of the seal */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#fff_0%,_transparent_100%)]" />
                    
                    {/* Wedding Icon/Logo */}
                    <svg viewBox="0 0 24 24" className="w-14 h-14 text-[#ffe088] transition-transform duration-500 group-hover:rotate-12" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  
                  {/* Glowing Ring */}
                  <div className="absolute inset-0 rounded-full border border-[#ffe088]/20 animate-ping opacity-20 group-hover:hidden" />
                </motion.div>
                
                <p className="mt-12 text-[#ffe088] font-sans font-bold tracking-[1em] uppercase text-[10px] opacity-60">
                  Open Invitation
                </p>
              </div>

              {/* Envelope Interior (When opened) */}
              <div className="absolute inset-0 bg-[#3d0000]" style={{ transform: "rotateX(180deg)", backfaceVisibility: "hidden" }}>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at center, #735C00 1px, transparent 1px)`, backgroundSize: '12px 12px' }} />
              </div>
            </motion.div>

            {/* Bottom Half of Envelope */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#520000] border-t border-white/5 z-10 rounded-b-sm overflow-hidden shadow-inner">
               <div className="absolute inset-0 opacity-[0.05]" 
                     style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}