"use client";
import { useState } from "react";

const testimonials = [
  {
    name: "HITdoon",
    role: "General Manager Marketing",
    text: "Working with Pahadi Bhula Production has been an exceptional experience. Their team consistently delivers high-quality creative content with professionalism, innovation, and attention to detail. From admission campaigns and promotional films to podcasts, photography, and social media content, they have helped us present the HIT Doon brand in a fresh and impactful way.\n\nWhat truly sets them apart is their ability to understand our vision and transform it into compelling visual stories that connect with students and audiences. Their creativity, timely execution, and collaborative approach have made them a valuable creative partner for our institution. We highly recommend Pahadi Bhula Production to any organization looking for professional media production and branding solutions.\n\n— Himalayan Institute of Technology (HIT Doon)",
  },
  {
    name: "Rab & Rab",
    role: "Rub & Rab Association LLP",
    text: "Partnering with Pahadi Bhula Production has been a fantastic experience. Their team brought creativity, professionalism, and a clear understanding of our vision to every stage of the project. From podcast production to visual storytelling, they delivered high-quality content that reflected our brand with authenticity and impact.\n\nTheir attention to detail, smooth execution, and ability to create engaging visual experiences made the entire collaboration seamless. The team was responsive, innovative, and committed to delivering results beyond our expectations. We appreciate their dedication and look forward to collaborating with Pahadi Bhula Production on many more creative projects in the future.\n\n— Rub & Rab Association LLP",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-black py-24 px-6 md:px-16 overflow-hidden">
      {/* Background image */}
      <div
  className="absolute inset-0 bg-cover bg-center opacity-40"
  style={{ backgroundImage: "url('https://res.cloudinary.com/davlyosj1/image/upload/v1784634647/photo_16_fgh8we.jpg')" }}
/>
<div className="absolute inset-0 bg-linear-to-b from-black via-black/60 to-black" />

      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          What do clients have to say:
        </h2>

        {/* Testimonial card */}
        <div className="bg-zinc-900/60 border border-white/5 rounded-3xl p-10 md:p-14 mb-8">
          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 italic">
            "{testimonials[active].text}"
          </p>
          <div>
            <p className="text-white font-semibold text-lg">{testimonials[active].name}</p>
            <p className="text-white/40 text-sm mt-1">{testimonials[active].role}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${i === active ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/20 hover:bg-white/50"}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
              className="w-12 h-12 rounded-full border border-white/20 text-white/50 hover:border-white hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              ←
            </button>
            <button
              onClick={() => setActive((active + 1) % testimonials.length)}
              className="w-12 h-12 rounded-full border border-white/20 text-white/50 hover:border-white hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}