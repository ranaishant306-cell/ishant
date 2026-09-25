

import Image from "next/image";
import InfiniteSpiral from "../components/InfiniteSpiral";
import {
  Clapperboard,
  BookOpen,
  Camera,
  Package,
  Share2,
  Mic,
  Building2,
  Music,
  LayoutGrid,
  Globe,
  Fingerprint,
  Sparkles,
} from "lucide-react";

const collage = [
  { src: "/images/filming.jpg", alt: "Filming" },
  { src: "/images/post.jpg", alt: "Post Production" },
  { src: "/images/perfume.jpg", alt: "Perfume Shoot" },
  { src: "/images/ColorGrading.jpg", alt: "Color Grading" },
  { src: "/images/Agency.jpg", alt: "Agency" },
];

const whatWeCreate = [
  { label: "Commercial Films", icon: Clapperboard, featured: true },
  { label: "Brand Storytelling", icon: BookOpen, featured: true },
  { label: "Photography", icon: Camera },
  { label: "Product Shoots", icon: Package },
  { label: "Social Media Content", icon: Share2 },
  { label: "Podcasts", icon: Mic },
  { label: "Corporate Films", icon: Building2 },
  { label: "Music Videos", icon: Music },
  { label: "UI/UX Design", icon: LayoutGrid },
  { label: "Website Design", icon: Globe },
  { label: "Brand Identity", icon: Fingerprint },
  { label: "Motion Graphics", icon: Sparkles, featured: true },
];

export default function StorySection() {
  return (
    <section className="bg-[#0a0a0a] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl border border-white/10 overflow-hidden bg-[#111111] px-8 md:px-12 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-10 items-center">

            {/* Left — text + tags */}
            <div>
              <h3 className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">
                What We Create
              </h3>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                Turning ideas into
                <br />
                <span className="text-red-500 italic">visual stories.</span>
              </h2>
              <p className="text-white/50 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                We&apos;re the storytellers, visionaries, and creative dreamers
                who turn your ideas into cinematic adventures. With us, work
                feels like play, and every project is a chance to make magic
                happen.
              </p>

              <div className="flex flex-wrap gap-3">
                {whatWeCreate.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={i}
                      className={`flex items-center gap-2 text-sm rounded-lg px-4 py-2.5 backdrop-blur-md border transition-all duration-200 cursor-default
                        ${
                          item.featured
                            ? "bg-red-500/10 border-red-500/30 text-white hover:bg-red-500/15 hover:border-red-500/50"
                            : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/25 hover:text-white"
                        }
                        hover:-translate-y-0.5`}
                    >
                      <Icon size={14} className={item.featured ? "text-red-400" : "text-white/50"} />
                      {item.label}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Right — infinite spiral gallery (desktop) */}
            <div className="hidden md:block relative h-[480px]">
              {/* Ambient glow */}
              <div className="absolute top-0 right-8 w-64 h-64 bg-red-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

              <InfiniteSpiral
                items={collage}
                animationMode="all"
                speed={0.55}
                radius={170}
                cardWidth={140}
                cardHeight={140}
                verticalSpacing={70}
                perspective={1000}
                cardRadius={14}
                centerScale={1.2}
                edgeBlur={6}
                cardsPerTurn={collage.length}
                pauseOnHover
              />
            </div>

            {/* Right — simple grid (mobile/tablet fallback) */}
            <div className="grid md:hidden grid-cols-2 gap-3">
              {collage.map((img, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl overflow-hidden h-40 sm:h-48 ${i === 0 ? "col-span-2 h-48 sm:h-56" : ""}`}
                >
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 50vw, 40vw" className="object-cover" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
