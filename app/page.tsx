
"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ConceptToCreation from "./components/ConceptToCreation";
import VideoTypes from "./components/VideoTypes";
import AboutAgency from "./components/AboutAgency";
import Testimonials from "./components/Testimonials";
import SkillsGrid from "./components/SkillsGrid";
import SplitText from "./components/SplitText";
const clients = [
  { name: "HIT Doon", logo: "/hit-doon.jpeg", width: 220, height: 215 },
  { name: "Rab&Rab", logo: "/rab-rab.jpg", width: 200, height: 200 },
  { name: "paradox", logo: "/paradox.jpg", width: 408, height: 490 },
  { name: "NBC", logo: "https://res.cloudinary.com/davlyosj1/image/upload/v1785128567/WhatsApp_Image_2026-07-22_at_3.10.16_PM_hcrf9j.jpg", width: 447, height: 447 },
  { name: "Dot& key", logo: "/dot-key.png", width: 263, height: 148 },
];

export default function Home() {
  const heroContentRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<"three" | "one">("three");
  const threeVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const oneVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (layout === "three") {
      oneVideoRef.current?.pause();
      threeVideoRefs.current.forEach((v) => v?.play().catch(() => {}));
    } else {
      threeVideoRefs.current.forEach((v) => v?.pause());
      oneVideoRef.current?.play().catch(() => {});
    }
  }, [layout]);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (heroContentRef.current) {
        heroContentRef.current.style.transform = `translateY(-${scrollY * 0.5}px)`;
        heroContentRef.current.style.opacity = `${1 - scrollY / 500}`;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLayout((prev) => (prev === "three" ? "one" : "three"));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-black">

      
      {/* HERO */}
<section className="relative h-screen overflow-hidden">
  <video className="absolute inset-0 w-full h-full object-cover"
    src="https://res.cloudinary.com/davlyosj1/video/upload/q_auto,f_auto,w_1600/v1772777910/hero_umjlne.mp4" autoPlay muted loop playsInline />
  <div className="absolute inset-0 bg-black/55" />
  <div ref={heroContentRef}
    className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-24"
    style={{ transition: "transform 0.05s linear" }}>

    <SplitText
      text="We are serving your emotions"
      tag="h2"
      className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
      splitType="words"
      delay={80}
      duration={1}
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      textAlign="center"
    />
    <SplitText
      text="not just an image."
      tag="span"
      className="text-3xl md:text-4xl lg:text-5xl text-white/40 block mt-4 mb-6"
      splitType="words"
      delay={80}
      duration={1}
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      textAlign="center"
    />

    <p className="text-white/60 text-base sm:text-lg max-w-2xl mb-10 px-4 sm:px-0">
      Helping brands stand out through powerful storytelling, cinematic visuals, and purposeful design.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0">
      <button className="bg-red-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-600 transition-all hover:scale-105 whitespace-nowrap">
        Call - 8439220575
      </button>
      <Link
        href="/contact"
        className="border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all whitespace-nowrap text-center"
      >
        Request a Call
      </Link>
    </div>
  </div>
</section>

      {/* SHOWREEL */}
      <section className="relative bg-black py-4 overflow-hidden">
        <h2 className="text-[13vw] font-black leading-none select-none text-center"
          style={{ color: "rgba(255,255,255,0.88)" }}>
          SHOWREEL
        </h2>
        <div className="px-4 sm:px-8 md:px-16 mt-4 pb-12">
          <div className="relative w-full"
            style={{
              height: layout === "three" ? "clamp(180px, 45vw, 300px)" : "clamp(220px, 55vw, 420px)",
              transition: "height 0.8s cubic-bezier(0.22,1,0.36,1)",
            }}>
            <div className="absolute inset-0 flex gap-2 sm:gap-3"
              style={{
                opacity: layout === "three" ? 1 : 0,
                transform: layout === "three" ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
                pointerEvents: layout === "three" ? "auto" : "none",
                transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
              }}>
             {[
  "https://res.cloudinary.com/davlyosj1/video/upload/q_auto,f_auto,w_800/v1784007614/cafe_2_s3mxdl.mp4",
  "https://res.cloudinary.com/davlyosj1/video/upload/q_auto,f_auto,w_800/v1784007651/Tulips_neckchain_fv7def.mp4",
  "https://res.cloudinary.com/davlyosj1/video/upload/q_auto,f_auto,w_800/v1784007649/Swasha_mgrmqw.mp4",
].map((src, i) => (
                <div key={i} className="flex-1 h-full overflow-hidden rounded-2xl group">
                  <video
                    ref={(el) => { threeVideoRefs.current[i] = el; }}
                    src={src}
                    muted
                    loop
                    playsInline
                    preload={layout === "three" ? "auto" : "metadata"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            <div className="absolute inset-0"
              style={{
                opacity: layout === "one" ? 1 : 0,
                transform: layout === "one" ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
                pointerEvents: layout === "one" ? "auto" : "none",
                transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
              }}>
              <div className="overflow-hidden rounded-2xl h-full">
                <video
                  ref={oneVideoRef}
                  src="https://res.cloudinary.com/davlyosj1/video/upload/q_auto,f_auto,w_1600/v1772777989/doc_glq8jn.mp4"
                  muted
                  loop
                  playsInline
                  preload={layout === "one" ? "auto" : "metadata"}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS MARQUEE */}
      <section className="bg-black py-16">
        <p className="text-center text-white/50 text-sm font-medium mb-10 tracking-widest uppercase">
          Standing Tall with Our Clients
        </p>
        <div
          className="relative overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        >
          <div className="flex items-center gap-8 sm:gap-12 md:gap-16" style={{ animation: "marquee 35s linear infinite", width: "max-content" }}>
            {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
              <Image key={i} src={client.logo} alt={client.name} width={client.width} height={client.height}
                className="shrink-0 h-16 md:h-20 w-auto object-contain rounded-lg grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 select-none" />
            ))}
          </div>
        </div>
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
      </section>

      {/* FROM CONCEPT TO CREATION */}
      <ConceptToCreation />

      {/* VIDEO TYPES */}
      <VideoTypes />

      {/* ABOUT AGENCY */}
      <AboutAgency />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* SKILLS GRID */}
      <SkillsGrid />

    </main>
  );
}