

import Image from "next/image";
import { Camera, Lightbulb, Settings2, Target, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    desc: "We understand your brand, audience, and objectives to build a strong creative foundation.",
    image: "/images/filming.jpg",
    icon: Camera,
  },
  {
    number: "02",
    title: "Strategy",
    desc: "Our team develops concepts, scripts, mood boards, and creative direction that align with your vision.",
    image: "https://res.cloudinary.com/davlyosj1/image/upload/v1784634647/photo_16_fgh8we.jpg",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Create",
    desc: "Whether it's filming, designing, editing, or developing digital experiences, we bring every idea to life with precision and passion.",
    image: "https://res.cloudinary.com/davlyosj1/image/upload/v1784634643/Photo_15_ii7mkk.jpg",
    icon: Settings2,
  },
  {
    number: "04",
    title: "Deliver",
    desc: "We refine every detail until the final result exceeds expectations and creates meaningful impact.",
    image: "/images/post.jpg",
    icon: Target,
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto relative">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-white/50 text-xs font-semibold tracking-[0.2em] uppercase">
                Our Process
              </span>
              <span className="w-8 h-px bg-white/30" />
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              How We <span className="italic text-red-500">Work</span>
            </h2>
            <p className="text-white/50 text-sm md:text-base mt-3">
              Every great story begins with a conversation.
            </p>
          </div>

          {/* Handwritten note */}
          <p
            className="hidden md:block text-white/40 text-sm leading-6 italic -rotate-3 mt-2"
            style={{ fontFamily: "cursive" }}
          >
            Ideas &rarr;
            <br />
            Stories &rarr;
            <br />
            Impact &rarr;
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 lg:flex lg:flex-row lg:items-start lg:gap-5 gap-y-16">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="contents lg:flex lg:items-start lg:gap-5">
                <div className="relative group flex-1 min-w-0">
                  {/* Image + badge wrapper */}
                  <div className="relative">
                    <div
                      className={`relative h-44 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:-translate-y-1 ${
                        i % 2 === 0 ? "rotate-2" : "-rotate-2"
                      }`}
                    >
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>

                    {/* Number badge — anchored to the image, not the whole card */}
                    <div className="absolute -bottom-6 left-6 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-20 bg-red-500">
                      {step.number}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="pt-11 pb-2">
                    <Icon className="w-6 h-6 mb-3 text-red-500" />
                    <h4 className="text-white font-bold text-xl mb-2">{step.title}</h4>
                    <p className="text-white/55 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Connector arrow (desktop only, sits in its own gap) */}
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block shrink-0 w-6 h-6 text-white/25 mt-20" />
                )}
              </div>
            );
          })}
        </div>

        {/* Closing line */}
        <p className="text-white/55 text-sm leading-relaxed mt-16 max-w-2xl">
          Throughout the journey, we keep communication transparent and
          collaborative because the best ideas are built together.
        </p>
      </div>
    </section>
  );
}
