

"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const skills = [
  { title: "VFX", img: "https://res.cloudinary.com/davlyosj1/image/upload/v1784634642/photo_7_w0qxex.jpg" },
  { title: "Filming", img: "/images/filming.jpg" },
  { title: "Scriptwriting", img: "https://res.cloudinary.com/davlyosj1/image/upload/v1784634642/photo_8_rmmvwo.jpg" },
  { title: "Sound Design", img: "https://res.cloudinary.com/davlyosj1/image/upload/v1784634642/photo_9_xqbbwg.jpg" },
  { title: "Color Grading", img: "/images/ColorGrading.jpg" },
  { title: "Motion Graphics", img: "https://res.cloudinary.com/davlyosj1/image/upload/v1784634643/photo10_zigzjh.jpg" },
];

export default function SkillsGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, i: number) => {
    const card = cardRefs.current[i];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="bg-black py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <p className="text-white/40 text-center text-sm tracking-widest uppercase mb-4">
          Not limited to video,
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          we're your creative comrades.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, i) => {
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={i}
                ref={(el) => { cardRefs.current[i] = el; }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseMove={(e) => handleMouseMove(e, i)}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{ height: "280px" }}
              >
                <Image
                  src={skill.img}
                  alt={skill.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />

                {/* Spotlight */}
                {isHovered && (
                  <div
                    style={{
                      position: "absolute",
                      left: mousePos.x,
                      top: mousePos.y,
                      width: "350px",
                      height: "350px",
                      transform: "translate(-50%, -50%)",
                      background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
                      pointerEvents: "none",
                      zIndex: 10,
                      borderRadius: "50%",
                    }}
                  />
                )}

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6" style={{ zIndex: 20 }}>
                  <h3 className="text-white font-bold text-xl group-hover:translate-y-0 translate-y-1 transition-transform duration-300">
                    {skill.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}