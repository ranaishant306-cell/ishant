"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "What services does Pahadi Bhula Production offer?",
    answer:
      "We provide end-to-end media production and creative studio services, including filmmaking, photography, podcasts, branding, UI/UX design, website design, motion graphics, VFX, and digital content production.",
  },
  {
    question: "Do you handle complete production from concept to delivery?",
    answer:
      "Absolutely. We produce high-quality content for Instagram, YouTube, LinkedIn, Facebook, and other digital platforms.",
  },
  {
    question: "Can you create content for social media?",
    answer:
      "The production timeline depends on the type and scope of the video. Simple projects may take a few weeks, while more complex ones may take several months. We'll provide you with a detailed production schedule during the planning phase.",
  },
  {
    question: "Do you work outside Uttarakhand?",
    answer:
      "Yes. We undertake projects across India and collaborate with brands, institutions, startups, and creators nationwide.",
  },
  {
    question: "Do you provide drone filming?",
    answer:
      "Yes. We offer professional drone cinematography for commercials, tourism, real estate, documentaries, and events.",
  },
  {
    question: "Can you design websites and digital products?",
    answer:
      "Yes. Our creative studio specializes in UI/UX design, website design, and digital experiences alongside media production",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="px-6 md:px-16 py-20 bg-black">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
      Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqItems.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 md:px-8 py-5 cursor-pointer transition-colors"
              onClick={() => toggle(i)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white text-lg font-medium">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-white shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-400">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}