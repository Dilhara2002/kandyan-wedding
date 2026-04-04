"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CoupleIntro from "@/components/CoupleIntro";
import Countdown from "@/components/Countdown";
import FamilySection from "@/components/FamilySection";
import FloatingInviteButton from "@/components/FloatingInviteButton";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import InvitationGate from "@/components/InvitationGate";
import MusicPlayer from "@/components/MusicPlayer";
import Navbar from "@/components/Navbar";
import RSVP from "@/components/RSVP";
import StoryTimeline from "@/components/StoryTimeline";
import Venue from "@/components/Venue";
import WeddingDetails from "@/components/WeddingDetails";

/**
 * Sovereign Heritage - Main Page Layout
 * Highlights:
 * - Hydration Fix using mounted state
 * - Smooth transition from Invitation Gate to Main Site
 * - Refined Z-index management
 */

export default function Home() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // 1. Fix Hydration Error: Ensure component only renders on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // 2. Prevent scrolling when the luxury gate is active
  useEffect(() => {
    if (mounted && !isInvitationOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isInvitationOpen, mounted]);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) return null;

  return (
    <div className="relative bg-[#FAF9F8] min-h-screen">
      
      {/* 1. Luxury Invitation Gate Layer */}
      <AnimatePresence mode="wait">
        {!isInvitationOpen && (
          <motion.div
            key="gate"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 1.1,
              filter: "blur(20px)" 
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="fixed inset-0 z-[500] bg-[#FAF9F8]" // Z-index increased for safety
          >
            <InvitationGate onOpen={() => setIsInvitationOpen(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Main Wedding Website Layer */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isInvitationOpen ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className={`bg-[#FAF9F8] text-[#1a1c1c] ${!isInvitationOpen ? "h-screen overflow-hidden" : ""}`}
      >
        <Navbar />
        
        {/* Components ordered for the best Heritage Experience */}
        <Hero />
        
        {/* Sovereign Style Section Divider */}
        <div className="flex justify-center py-20 bg-[#FAF9F8]">
          <div className="flex items-center gap-4 opacity-20">
            <div className="h-[1px] w-12 bg-[#8d706c]"></div>
            <div className="w-2 h-2 rotate-45 border border-[#735C00]"></div>
            <div className="h-[1px] w-12 bg-[#8d706c]"></div>
          </div>
        </div>

        <CoupleIntro />
        <WeddingDetails />
        <Countdown />
        <StoryTimeline />
        <Gallery />
        <Venue />
        <RSVP />
        <FamilySection />
        <Footer />
        
        {/* Persistent Floating Utility Components */}
        <div className={`transition-opacity duration-1000 ${isInvitationOpen ? "opacity-100" : "opacity-0"}`}>
          <MusicPlayer />
          <FloatingInviteButton />
        </div>
      </motion.main>
    </div>
  );
}