
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ServicesHero() {
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (heroContentRef.current) {
        heroContentRef.current.style.transform = `translateY(-${scrollY * 0.3}px)`;
        heroContentRef.current.style.opacity = `${1 - scrollY / 600}`;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="bg-black min-h-screen">

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/images/filming.jpg"
          alt="Services Hero"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />

        {/* Hero Content */}
        <div
          ref={heroContentRef}
          className="relative z-10 h-full flex flex-col justify-start pt-48 px-6 md:px-16 max-w-7xl"
          style={{ transition: "transform 0.05s linear" }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight mb-6">
            Services
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
           We Create Experiences. Not Just Content.
At Pahadi Bhula Production, every project begins with an idea and ends with a story that people remember. As a full-fledged Media Production House & Creative Studio, we bring together filmmaking, photography, branding, design, and digital experiences under one roof.
From concept development to the final delivery, we create work that inspires, connects, and makes an impact.

          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-6 md:left-16 z-10 flex flex-col items-center gap-2">
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