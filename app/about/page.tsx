

import Image from "next/image";
import AgencySection from "./AgencySection";
import StorySection from "./StorySection";
import ValuesSection from "./ValuesSection";
import TeamSection from "./TeamSection";
import HowWeWorkSection from "./HowWeWorkSection";
import WhyUsSection from "./WhyUsSection";
import BlogSection from "./BlogSection";
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-24 left-6 md:left-16 z-10 flex flex-col items-center gap-2">
          <p
            className="text-white/40 text-sm tracking-widest"
            style={{ writingMode: "vertical-rl" }}
          >
            SCROLL
          </p>
          <div className="w-px h-16 overflow-hidden">
            <div
              className="w-full bg-white/40"
              style={{
                height: "100%",
                animation: "scrollLine 1.8s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </section>

      <AgencySection />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <BlogSection />
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