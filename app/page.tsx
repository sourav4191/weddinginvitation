"use client";

import HeroSection from "./components/HeroSection";
import InvitationSection from "./components/InvitationSection";
import EventsSection from "./components/EventsSection";
import StorySection from "./components/StorySection";
import RSVPSection from "./components/RSVPSection";
import ThingsToKnowSection from "./components/ThingsToKnowSection";
import SocialMediaSection from "./components/SocialMediaSection";
import CountdownSection from "./components/CountdownSection";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <HeroSection />
      <InvitationSection />
      <EventsSection />
      <StorySection />
      <RSVPSection />
      <ThingsToKnowSection />
      <SocialMediaSection />
      <CountdownSection />
    </main>
  );
}

