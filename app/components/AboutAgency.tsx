"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutAgency() {
  return (
    <section className="bg-black py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
             About Pahadi Bhula Production
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-6">
             At Pahadi Bhula Production, we believe every brand has a story worth telling. Our purpose is simple—we serve emotions, not just images. We create meaningful visual experiences that inspire, connect, and leave a lasting impact.

            </p>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Founded with roots in the mountains of Uttarakhand, Pahadi Bhula Production is a full-service creative studio specializing in cinematic filmmaking, commercial advertising, photography, branding, UI/UX design, and digital content creation. By blending creativity, 
            </p>
            <Link
              href="/about"
              className="flex items-center gap-3 bg-red-500 hover:bg-white hover:text-black text-white text-sm tracking-widest uppercase px-10 py-5 rounded-full transition-all duration-300 hover:scale-75 group w-fit"
            >
  Know More About Us
  <span className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center transition-all duration-300">
    →
  </span>
</Link>
          </div>

          {/* Right — Image grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative rounded-2xl overflow-hidden h-36 sm:h-52 md:h-64">
              <Image src="/images/Agency.jpg" alt="Agency" fill sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-36 sm:h-52 md:h-64 mt-4 sm:mt-6 md:mt-8">
              <Image src="https://res.cloudinary.com/davlyosj1/image/upload/v1784634647/photo_16_fgh8we.jpg" alt="Agency" fill sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-28 sm:h-40 md:h-48 -mt-2 sm:-mt-3 md:-mt-4">
              <Image src="https://res.cloudinary.com/davlyosj1/image/upload/v1784634643/photo_12_tnicsj.jpg" alt="Agency" fill sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-28 sm:h-40 md:h-48">
              <Image src="https://res.cloudinary.com/davlyosj1/image/upload/v1784634643/photo_13_edvcs3.jpg" alt="Agency" fill sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}