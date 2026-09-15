"use client";

import { useEffect, useRef } from "react";

export default function HeroParallax() {
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
    <div
      ref={heroContentRef}
      className="relative z-10 h-full flex flex-col justify-start pt-28 sm:pt-36 md:pt-48 px-6 md:px-16 max-w-7xl"
      style={{ transition: "transform 0.05s linear" }}
    >
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white leading-tight mb-4 sm:mb-6">
        About Us
      </h1>
      <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed">
        We Are Serving Your Emotions, Not Just an Image.
        Welcome to Pahadi Bhula Production—a creative studio born in the mountains of Uttarakhand, where stories, ideas, and emotions come together to create unforgettable experiences.
      </p>

      {/* Scroll Indicator */}
      <div className="mt-6 sm:mt-8 md:mt-10 w-fit self-start flex flex-col items-center gap-2">
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
    </div>
  );
}