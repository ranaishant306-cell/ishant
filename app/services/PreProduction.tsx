

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Compass,
  Target,
  Lightbulb,
  FileText,
  BookOpen,
  Palette,
  CalendarCheck,
  MapPin,
  ScanFace,
} from "lucide-react";

const preProductionItems = [
  {
    icon: Compass,
    title: "Creative Discovery",
    desc: "We understand your brand, audience, and objectives to develop a creative direction that reflects your story.",
  },
  {
    icon: Target,
    title: "Creative Strategy",
    desc: "Every production starts with a strategy that aligns visuals, messaging, and audience engagement.",
  },
  {
    icon: Lightbulb,
    title: "Concept Development",
    desc: "From brainstorming sessions to campaign ideation, we create concepts that are meaningful, original, and visually compelling.",
  },
  {
    icon: FileText,
    title: "Scriptwriting",
    desc: "Whether it's a commercial, brand film, podcast, documentary, or social campaign, we craft scripts that communicate with clarity and emotion.",
  },
  {
    icon: BookOpen,
    title: "Storyboarding",
    desc: "We visualize every scene before production begins, allowing clients to experience the creative direction before the first shot is captured.",
  },
  {
    icon: Palette,
    title: "Creative Direction",
    desc: "From mood boards and visual references to art direction and styling, we define the visual language of your project.",
  },
  {
    icon: CalendarCheck,
    title: "Production Planning",
    desc: "Scheduling, crew management, budgeting, equipment planning, permissions, and logistics—all handled seamlessly by our production team.",
  },
  {
    icon: MapPin,
    title: "Location Scouting",
    desc: "Finding the perfect environment to complement your story, whether it's urban, natural, studio-based, or remote.",
  },
  {
    icon: ScanFace,
    title: "Talent & Casting",
    desc: "From professional actors and presenters to influencers and creators, we source talent that best represents your vision.",
  },
];

function SpinIcon({ Icon }: { Icon: typeof Lightbulb }) {
  const [spin, setSpin] = useState(false);

  return (
    <div
      onMouseEnter={() => setSpin(true)}
      onAnimationEnd={() => setSpin(false)}
      className={spin ? "spin-once" : ""}
    >
      <Icon className="w-5 h-5 md:w-6 md:h-6 text-orange-500 shrink-0" />
    </div>
  );
}

export default function PreProduction() {
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!imagesRef.current) return;
      // Parallax only makes sense once the section is sticky (md breakpoint+)
      if (window.innerWidth < 768) {
        imagesRef.current.style.transform = "translateY(0)";
        return;
      }
      const rect = imagesRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const moveAmount = Math.max(0, window.innerHeight - sectionTop) * 0.15;
      imagesRef.current.style.transform = `translateY(-${moveAmount}px)`;
    };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="px-4 sm:px-6 md:px-16 py-12 md:py-20 bg-black">
      <div className="bg-[#0d0d0d] text-white rounded-2xl md:rounded-3xl px-5 sm:px-8 md:px-12 py-10 md:py-14 grid md:grid-cols-2 gap-10 relative">
        {/* Left side - sticky text + images pinned at bottom, behind text */}
        <div className="relative">
          <div className="flex flex-col gap-8 md:gap-0 md:justify-between md:sticky md:top-24 md:h-[calc(100vh-8rem)]">
            {/* Text - top, stays in front */}
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                Pre-Production
              </h2>
              <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6">
                Every Great Story Begins Before the Camera Rolls.
              </p>
              <p className="text-base sm:text-lg md:text-2xl leading-relaxed">
                The strongest productions are built on thoughtful planning.
                Our pre-production process transforms ideas into a clear
                creative vision, ensuring every project starts with purpose.
              </p>
            </div>

            {/* Images - pinned to bottom, slide behind text on overlap */}
            <div
              ref={imagesRef}
              className="grid grid-cols-2 gap-3 md:gap-4 -z-10 relative mt-6 md:mt-0"
              style={{ transition: "transform 0.1s linear" }}
            >
              <div className="relative h-36 sm:h-48 md:h-64 rounded-lg md:rounded-xl overflow-hidden">
                <Image
                  src="/images/storyboard-sketch.jpg"
                  alt="Storyboard sketch"
                  fill
                  className="object-cover"
                />
              </div>
             <div className="relative h-36 sm:h-48 md:h-64 rounded-lg md:rounded-xl overflow-hidden">
                <Image
                  src="/images/wood-texture.jpg"
                  alt="Wood texture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right side - icon list */}
        <div className="space-y-6 md:space-y-8">
          {preProductionItems.map((item, i) => (
            <div key={i} className="flex gap-3 md:gap-4">
              <SpinIcon Icon={item.icon} />
              <div>
                <h3 className="font-semibold text-base md:text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin-once {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .spin-once {
          display: inline-block;
          animation: spin-once 1s cubic-bezier(0.45, 0, 0.15, 1);
        }
      `}</style>
    </section>
  );
}