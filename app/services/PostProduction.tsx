


"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Scissors,
  Palette,
  AudioWaveform,
  Music2,
  Sparkles,
  Wand2,
  Box,
  Captions,
  MonitorPlay,
  Database,
} from "lucide-react";

const postProductionItems = [
  {
    icon: Scissors,
    title: "Video Editing",
    desc: "Professional editing for commercials, films, podcasts, documentaries, reels, and branded content.",
  },
  {
    icon: Palette,
    title: "Color Grading",
    desc: "Crafting cinematic moods with professional color workflows.",
  },
  {
    icon: AudioWaveform,
    title: "Sound Design",
    desc: "Immersive audio that enhances storytelling and audience engagement.",
  },
  {
    icon: Music2,
    title: "Audio Mixing & Mastering",
    desc: "Crystal-clear dialogue, music balancing, and broadcast-ready audio.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    desc: "Dynamic animations that make content engaging and informative.",
  },
  {
    icon: Wand2,
    title: "Visual Effects (VFX)",
    desc: "Advanced visual enhancements that elevate production quality.",
  },
  {
    icon: Box,
    title: "3D Animation & CGI",
    desc: "Photorealistic visuals, product animations, architectural visualization, and cinematic effects.",
  },
  {
    icon: Captions,
    title: "Subtitles & Accessibility",
    desc: "Professional subtitles, multilingual captions, and accessibility-ready content.",
  },
  {
    icon: MonitorPlay,
    title: "Content Optimization",
    desc: "Preparing videos for cinema, television, YouTube, OTT platforms, websites, and social media.",
  },
  {
    icon: Database,
    title: "Digital Asset Management",
    desc: "Secure organization, backup, and delivery of your production files.",
  },
];

function SpinIcon({ Icon }: { Icon: typeof Scissors }) {
  const [spin, setSpin] = useState(false);

  return (
    <div
      onMouseEnter={() => setSpin(true)}
      onAnimationEnd={() => setSpin(false)}
      className={spin ? "spin-once" : ""}
    >
      <Icon className="w-6 h-6 text-orange-500" />
    </div>
  );
}

export default function PostProduction() {
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!imagesRef.current) return;
      const rect = imagesRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const moveAmount = Math.max(0, window.innerHeight - sectionTop) * 0.15;
      imagesRef.current.style.transform = `translateY(-${moveAmount}px)`;
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="px-6 md:px-16 py-20 bg-black">
      <div className="bg-[#0d0d0d] text-white rounded-3xl px-8 md:px-12 py-14 grid md:grid-cols-2 gap-10 relative">
        {/* Left side - sticky text + images pinned at bottom */}
        <div className="relative">
          <div className="sticky top-24 flex flex-col justify-between h-[calc(100vh-8rem)]">
            {/* Text - top */}
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Post-Production</h2>
              <p className="text-gray-300 mb-6">
                Editing isn&apos;t just about cutting footage—it&apos;s about shaping emotions.
Our post-production team transforms raw footage into polished cinematic experiences through precision, creativity, and attention to detail.

              </p>
              <p className="text-2xl">
                <span className="text-gray-500">Our approach</span>{" "}
                blends technical mastery with an eye for detail, ensuring every
                cut, color, and sound decision serves the story you set out to
                tell.
              </p>
            </div>

            {/* Images - pinned to bottom, slide behind text on overlap */}
            <div
              ref={imagesRef}
              className="grid grid-cols-2 gap-4 -z-10 relative"
              style={{ transition: "transform 0.1s linear" }}
            >
              <div className="relative h-56 rounded-xl overflow-hidden">
                <Image
                  src="/images/ColorGrading.jpg"
                  alt="Color grading"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-56 rounded-xl overflow-hidden">
                <Image
                  src="/images/drone.jpg"
                  alt="3D animation and CGI"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right side - icon list */}
        <div className="space-y-8">
          {postProductionItems.map((item, i) => (
            <div key={i} className="flex gap-4">
              <SpinIcon Icon={item.icon} />
              <div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
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