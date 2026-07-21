

"use client";

import Image from "next/image";
import { useState } from "react";

const features = [
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#e8392a" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "Exceptional Creativity",
    desc: "Clients choose us for our unparalleled creative prowess. We breathe life into ideas, turning them into visually stunning, memorable videos.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#e8392a" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Proven Track Record",
    desc: "Our portfolio is a testament to our success. We've consistently delivered outstanding results, earning the trust of clients time and again.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#e8392a" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Collaborative Approach",
    desc: "We don't just work for our clients; we work with them. Our collaborative spirit ensures that each project is a true partnership, vision coming to life.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#e8392a" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Innovative Solutions",
    desc: "We're known for pushing boundaries and finding innovative solutions. Clients appreciate our ability to think outside the box and deliver beyond expectations.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#e8392a" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Exceptional Team",
    desc: "Our team is a powerhouse of talent, experience, and passion. Clients choose us for the depth of expertise and dedication we bring to every project.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#e8392a" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
      </svg>
    ),
    title: "Attention to Detail",
    desc: "We obsess over the finer points. Every frame, every edit, every sound is carefully crafted to ensure the highest quality and maximum impact.",
  },
];

export default function WhyUsSection() {
  const [spinning, setSpinning] = useState<number | null>(null);

  const handleIconClick = (index: number) => {
    if (spinning !== null) return; // agar pehle se koi spin ho raha hai toh ignore karo
    setSpinning(index);
    setTimeout(() => setSpinning(null), 600); // 600ms baad reset
  };

  return (
    <>
      {/* CSS for spin animation */}
      <style>{`
        @keyframes spin-once {
          0%   { transform: rotate(0deg);   }
          100% { transform: rotate(360deg); }
        }
        .icon-spin {
          animation: spin-once 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .icon-wrapper {
          cursor: pointer;
          display: inline-flex;
          transition: transform 0.2s;
        }
        .icon-wrapper:hover {
          transform: scale(1.15);
        }
      `}</style>

      <section className="bg-[#0a0a0a] py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-[#111111] px-8 md:px-12 py-12">

            {/* Top: Image Left + Text Right */}
            <div className="flex flex-col md:flex-row gap-10 items-start mb-16">

              {/* Left - Image */}
              <div
                className="relative shrink-0 rounded-2xl overflow-hidden w-full md:w-105"
                style={{ aspectRatio: "4/5" }}
              >
                <Image
                  src="/images/Agency.jpg"
                  alt="Why Us"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Right - Text */}
              <div className="flex-1 flex flex-col gap-5 justify-center">
                <h2 className="text-white text-2xl font-bold">Why Choose Pahadi Bhula Production?</h2>

                <p className="text-white/55 text-sm leading-relaxed">
                 We&apos;re not just another production house.
We&apos;re your creative partner.
People choose us because we combine storytelling, strategy, design, and technology under one roof.

                </p>

                <p className="text-white/55 text-sm leading-relaxed">
                 Every project receives our full attention, whether its a startup launching its first brand or an established business looking to create a bigger impact.
We believe in building relationships—not just delivering projects.

                </p>

               <h3 className="text-white text-3xl md:text-4xl font-extrabold leading-tight">
  Where hills meet the{" "}
  <span className="text-white/30">art of storytelling.</span>
</h3>

<p className="text-white/55 text-sm leading-relaxed">
  Rooted in the spirit of the mountains, Pahadi Bhula Production blends raw
  authenticity with cinematic craft. From concept to final cut, we bring a
  fresh perspective that helps brands stand out and stories connect.
</p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 mb-12" />

            {/* Wait! There's more */}
            <h3 className="text-white text-2xl font-bold text-center mb-10">
              Wait! There&apos;s more....
            </h3>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col gap-3">
                  {/* Clickable Icon */}
                  <div
                    className={`icon-wrapper ${spinning === i ? "icon-spin" : ""}`}
                    onClick={() => handleIconClick(i)}
                  >
                    {f.icon}
                  </div>
                  <h4 className="text-white font-semibold text-base">{f.title}</h4>
                  <p className="text-white/45 text-sm leading-relaxed">{f.desc}</p>
                </div> 
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}