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

export default function Home() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  // Prevent scrolling when the luxury gate is active
  useEffect(() => {
    if (!isInvitationOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isInvitationOpen]);

  return (
    <>
      {/* 1. Luxury Invitation Gate Layer */}
      <AnimatePresence mode="wait">
        {!isInvitationOpen && (
          <motion.div
            key="gate"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[200]"
          >
            <InvitationGate onOpen={() => setIsInvitationOpen(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Main Wedding Website Layer */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isInvitationOpen ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="bg-[#f8f3ec] text-[#2c1810]"
      >
        <Navbar />
        <Hero />
        
        {/* Decorative Divider for Luxury Feel */}
        <div className="flex justify-center py-10 bg-[#f8f3ec]">
          <div className="h-[1px] w-24 bg-[#d4b06a]/30" />
        </div>

        <CoupleIntro />
        <WeddingDetails />
        
        {/* Countdown component should now be fixed from hydration errors */}
        <Countdown />
        
        <StoryTimeline />
        <Gallery />
        <Venue />
        <RSVP />
        <FamilySection />
        <Footer />
        
        {/* Utility Components */}
        <MusicPlayer />
        <FloatingInviteButton />
      </motion.main>
    </>
  );
}