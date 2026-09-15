

import Image from "next/image";
import AgencySection from "./AgencySection";
import StorySection from "./StorySection";
import ValuesSection from "./ValuesSection";
import TeamSection from "./TeamSection";
import HowWeWorkSection from "./HowWeWorkSection";
import WhyUsSection from "./WhyUsSection";
import HeroParallax from "./HeroParallax";

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/images/filming.jpg"
          alt="About Hero"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />

        <HeroParallax />
      </section>

      <AgencySection />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <HowWeWorkSection />
      <WhyUsSection />

      <style>{`
        @keyframes scrollLine {
          0%   { transform: translateY(-100%); opacity: 1; }
          50%  { transform: translateY(0%);    opacity: 1; }
          100% { transform: translateY(100%);  opacity: 0; }
        }
      `}</style>

    </main>
  );
}