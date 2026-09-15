"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const videos = [
  {
    title: "YouTube Videos",
    desc: "Elevate your online presence with our YouTube video expertise. We craft compelling long-form content designed to inform, entertain, and engage your audience effectively.",
    img: "/images/Yt.jpg", 
    size: "large",
  },
  {
    title: "Documentaries",
    desc: "We bring real-life stories to life. Our documentaries inform, entertain, and educate on diverse subjects, ensuring your message is captivatingly conveyed.",
    img: "https://res.cloudinary.com/davlyosj1/image/upload/v1784634587/photo_1_zzclqp.jpg", // dark cinema screen
    size: "small",
  },
  {
    title: "Shorts & Reels",
    desc: "Stay on-trend and engage your audience with our dynamic social media content designed for maximum impact and shareability.",
    img: "https://res.cloudinary.com/davlyosj1/image/upload/v1784634641/photo_2_puzl3a.jpg", // phone filming vertical dark
    size: "small",
  },
  {
    title: "Mid-Level Ads",
    desc: "Drive engagement with our seamless mid-production ads. Designed to blend naturally into content, these ads ensure a smooth, non-intrusive experience.",
    img: "https://res.cloudinary.com/davlyosj1/image/upload/v1784634641/photo_3_virfpw.jpg", // camera lens dark moody
    size: "small",
  },
  {
    title: "Commercials & Ads",
    desc: "Make a memorable impression. Our short, attention-grabbing videos showcase your products, services, or brand identity effectively.",
    img: "https://res.cloudinary.com/davlyosj1/image/upload/v1784634642/Photo_4_oueqzi.jpg", // product commercial shoot
    size: "small",
  },
  {
    title: "User-Generated Content",
    desc: "Build trust with authentic UGC. We help brands leverage relatable, real-world content that resonates with audiences and boosts credibility.",
    img: "https://res.cloudinary.com/davlyosj1/image/upload/v1784634642/photo_5_dxoiyc.jpg", // people filming phone authentic
    size: "small",
  },
  {
    title: "Drone / FPV Content",
    desc: "Capture breathtaking moments with our cutting-edge drone footage that reaches angles others simply cannot.",
    img: "https://res.cloudinary.com/davlyosj1/image/upload/v1784634642/Photo_6_m1weec.jpg", // aerial mountain cinematic
    size: "small",
  },
];

function VideoCard({
  video,
  large = false,
}: {
  video: (typeof videos)[0];
  large?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered((h) => !h)}
      className={`relative overflow-hidden rounded-2xl cursor-pointer ${
        large ? "h-90" : "h-50"
      }`}
    >
      {/* Background image — always visible */}
      <Image
        src={video.img}
        alt={video.title}
        fill
        sizes={large ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
        className="object-cover transition-transform duration-700 ease-out"
        style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
      />

      {/* Dark overlay — always present, darkens more on hover */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.75) 100%)",
          opacity: hovered ? 1 : 0.7,
        }}
      />

      {/* Title — always at bottom left */}
      <div className="absolute inset-0 p-5 flex flex-col justify-between">
        <div />
        <div>
          <h3
            className={`font-bold text-white transition-all duration-300 ${
              large ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
            }`}
          >
            {video.title}
          </h3>

          {/* Description — slides up on hover */}
          <div
            className="overflow-hidden transition-all duration-500 ease-out"
            style={{
              maxHeight: hovered ? "120px" : "0px",
              opacity: hovered ? 1 : 0,
              marginTop: hovered ? "8px" : "0px",
            }}
          >
            <p className="text-white/80 text-sm leading-relaxed">{video.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VideoTypes() {
  const [bigCard] = useState(videos[0]);
  const smallCards = videos.slice(1);

  return (
    <section className="bg-black py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Title — centered, single line */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
          Experienced in Various Video Types
        </h2>

        {/* Row 1 — Big card left + 2 small cards right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Big card — spans 2 columns */}
          <div className="md:col-span-2">
            <VideoCard video={bigCard} large />
          </div>
          {/* 2 small cards stacked right */}
          <div className="flex flex-col gap-4">
            <VideoCard video={smallCards[0]} />
            <VideoCard video={smallCards[1]} />
          </div>
        </div>

        {/* Row 2 — 4 equal small cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {smallCards.slice(2).map((v, i) => (
            <VideoCard key={i} video={v} />
          ))}
        </div>

        {/* Explore button */}
<div className="mt-12 text-center">
  <Link
    href="/projects"
    className="inline-flex items-center gap-3 bg-red-500 hover:bg-white hover:text-black text-white text-[11px] tracking-widest uppercase px-10 py-5 rounded-full cursor-pointer transition-all duration-300 hover:scale-75"
  >
    Explore All Categories
    <span className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center text-sm transition-all duration-300 group-hover:border-black/40">
      →
    </span>
  </Link>
</div>
      </div>
    </section>
  );
}