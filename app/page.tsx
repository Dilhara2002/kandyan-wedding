"use client";

import { useState } from "react";
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

  return (
    <>
      {!isInvitationOpen && (
        <InvitationGate onOpen={() => setIsInvitationOpen(true)} />
      )}

      <main className="bg-[#f8f3ec] text-[#2c1810]">
        <Navbar />
        <Hero />
        <CoupleIntro />
        <WeddingDetails />
        <Countdown />
        <StoryTimeline />
        <Gallery />
        <Venue />
        <RSVP />
        <FamilySection />
        <Footer />
        <MusicPlayer />
        <FloatingInviteButton />
      </main>
    </>
  );
}