"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "Pre-Production",
    description:
      "Every great shoot starts on paper. We map out the concept, lock the script, scout locations, and line up the crew and gear — so by the time the camera turns on, nothing is left to chance.",
    image: "https://res.cloudinary.com/davlyosj1/image/upload/v1784634643/photo_14_em4q5x.jpg",
  },
  {
    title: "Production",
    description:
      "This is where the vision hits the ground. On set, our team works fast and deliberately — framing every shot, directing every moment, and chasing the light until the story is fully captured.",
    image: "https://res.cloudinary.com/davlyosj1/image/upload/v1784634643/Photo_15_ii7mkk.jpg",
  },
  {
    title: "Post-Production",
    description:
      "The real magic happens after the shoot. We cut, grade, mix, and layer in every detail — shaping raw footage into a story that feels intentional from the very first frame to the last.",
    image: "/images/post.jpg",
  },
];

export default function ConceptToCreation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-black py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex gap-16">
        {/* Sticky heading */}
        <div className="hidden md:block shrink-0" style={{ width: "420px" }}>
          <div className="sticky top-32">
            <h2 className="text-4xl font-bold text-white leading-tight whitespace-nowrap">
  From Concept To Creation
</h2>
          </div>
        </div>

        {/* Cards */}
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="md:hidden text-3xl font-bold text-white mb-4">
            From Concept To Creation
          </h2>

          {services.map((service, i) => {
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  position: "relative",
                  backgroundColor: "rgba(24,24,27,0.8)",
                  borderRadius: "16px",
                  border: isHovered ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(255,255,255,0.05)",
                  overflow: "visible",
                  transition: "border-color 0.4s ease",
                }}
              >
                {/* Image: starts hidden at card's center bottom, rises up to float above center */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    /* Not hovered: image sits AT the top edge of card (hidden below), 
                       Hovered: image floats 160px above the card */
                    top: isHovered ? "-160px" : "0px",
                    transform: isHovered
                      ? "translateX(-50%) translateY(0%) scale(1) rotate(-2deg)"
                      : "translateX(-50%) translateY(0%) scale(0.7) rotate(-2deg)",
                    transformOrigin: "center bottom",
                    width: "240px",
                    height: "160px",
                    borderRadius: "14px",
                    overflow: "hidden",
                    opacity: isHovered ? 1 : 0,
                    transition: [
                      "opacity 0.5s cubic-bezier(0.22,1,0.36,1)",
                      "top 0.55s cubic-bezier(0.22,1,0.36,1)",
                      "transform 0.55s cubic-bezier(0.22,1,0.36,1)",
                    ].join(", "),
                    pointerEvents: "none",
                    zIndex: 30,
                    boxShadow: "0 28px 70px rgba(0,0,0,0.75)",
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="240px"
                    style={{
                      objectFit: "cover",
                      transform: isHovered ? "scale(1)" : "scale(1.15)",
                      transition: "transform 0.65s cubic-bezier(0.22,1,0.36,1)",
                      filter: "grayscale(10%)",
                    }}
                  />
                </div>

                {/* Card content */}
                <div style={{ padding: "40px" }}>
                  <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "16px" }}>
                    {service.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.7, marginBottom: "32px", maxWidth: "600px" }}>
                    {service.description}
                  </p>

                  {/* Learn More button */}
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      padding: "12px 20px",
                      borderRadius: "999px",
                      background: "transparent",
                      cursor: "pointer",
                      transition: "border-color 0.3s, color 0.3s",
                    }}
                  >
                    Learn More
                    <span
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        border: `1px solid ${isHovered ? "#ef4444" : "rgba(255,255,255,0.2)"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "13px",
                        background: isHovered ? "#ef4444" : "transparent",
                        color: isHovered ? "#fff" : "rgba(255,255,255,0.6)",
                        /* Arrow moves UP when hovered */
                        transform: isHovered ? "translateY(-3px)" : "translateY(0px)",
                        transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), background 0.3s, border-color 0.3s, color 0.3s",
                      }}
                    >
                      ↑
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}