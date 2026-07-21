

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Megaphone,
  Film,
  Building2,
  BookOpen,
  Share2,
  Mic,
  Camera,
  Shirt,
  PartyPopper,
  Plane,
  Users,
  Move,
  Radio,
} from "lucide-react";

const productionItems = [
  {
    icon: Megaphone,
    title: "Commercial Production",
    desc: "Television commercials, digital advertisements, product launches, and branded campaigns.",
  },
  {
    icon: Film,
    title: "Brand Films",
    desc: "Authentic films that communicate your purpose, culture, and identity.",
  },
  {
    icon: Building2,
    title: "Corporate Films",
    desc: "Professional storytelling for businesses, institutions, startups, and organizations.",
  },
  {
    icon: BookOpen,
    title: "Documentary Production",
    desc: "Human-centered documentaries that capture real stories with authenticity.",
  },
  {
    icon: Share2,
    title: "Social Media Content",
    desc: "Short-form content designed for Instagram, YouTube, Facebook, LinkedIn, and emerging platforms.",
  },
  {
    icon: Mic,
    title: "Podcast Production",
    desc: "Complete audio and video podcast production with professional multi-camera setups.",
  },
  {
    icon: Camera,
    title: "Product Photography & Videography",
    desc: "Studio-quality visuals for e-commerce, fashion, food, lifestyle, and consumer brands.",
  },
  {
    icon: Shirt,
    title: "Fashion & Lifestyle Shoots",
    desc: "Creative campaigns that elevate brands through premium visuals.",
  },
  {
    icon: PartyPopper,
    title: "Event Coverage",
    desc: "Corporate events, concerts, educational institutions, festivals, product launches, and live experiences.",
  },
  {
    icon: Plane,
    title: "Drone Cinematography",
    desc: "Certified aerial production that adds cinematic scale and perspective.",
  },
  {
    icon: Users,
    title: "Multi-Camera Production",
    desc: "Professional productions with synchronized camera systems for interviews, podcasts, events, and live sessions.",
  },
  {
    icon: Move,
    title: "Gimbal & Cinematic Camera Movement",
    desc: "Smooth, immersive visuals using advanced stabilization systems.",
  },
  {
    icon: Radio,
    title: "Live Streaming",
    desc: "Broadcast your events, conferences, launches, and webinars to audiences worldwide.",
  },
];

function SpinIcon({ Icon }: { Icon: typeof Megaphone }) {
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

export default function Production() {
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
        {/* Left side - icon list */}
        <div className="space-y-8 order-2 md:order-1">
          {productionItems.map((item, i) => (
            <div key={i} className="flex gap-4">
              <SpinIcon Icon={item.icon} />
              <div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - sticky heading/text with images pinned at bottom */}
        <div className="order-1 md:order-2 relative">
          <div className="flex flex-col gap-10 md:gap-0 md:justify-between md:sticky md:top-24 md:h-[calc(100vh-8rem)]">
            {/* Text - top */}
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Production</h2>
              <p className="text-gray-300 mb-6">
                Where Ideas Become Reality.
              </p>
              <p className="text-2xl">
                <span className="text-gray-500">Production</span> is where imagination meets execution. Our experienced crew combines cinematic techniques with modern technology to create powerful visual storytelling.
              </p>
            </div>

            {/* Images - pinned to bottom of the sticky box */}
            <div
              ref={imagesRef}
              className="grid grid-cols-2 gap-4 -z-10 relative"
              style={{ transition: "transform 0.1s linear" }}
            >
              <div className="relative h-56 rounded-xl overflow-hidden">
                <Image
                  src="/images/drone.jpg"
                  alt="Drone videography"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-56 rounded-xl overflow-hidden">
                <Image
                  src="/images/gimbal.jpg"
                  alt="Gimbal work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
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