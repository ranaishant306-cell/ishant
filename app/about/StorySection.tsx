

import Image from "next/image";
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
const images = [
  { src: "/images/filming.jpg",       alt: "Filming" },
  { src: "/images/ColorGrading.jpg",  alt: "Color Grading" },
  { src: "/images/Agency.jpg",        alt: "Agency" },
  { src: "/images/post.jpg",          alt: "Post Production" },
  { src: "/images/perfume.jpg",       alt: "Perfume Shoot" },
  { src: "/images/Product.jpg",       alt: "Product" },
  { src: "/images/Yt.jpg",            alt: "YouTube" },
  // duplicate for seamless loop
  { src: "/images/filming.jpg",       alt: "Filming 2" },
  { src: "/images/ColorGrading.jpg",  alt: "Color Grading 2" },
  { src: "/images/Agency.jpg",        alt: "Agency 2" },
  { src: "/images/post.jpg",          alt: "Post 2" },
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

        {/* Rounded card */}
        <div className="rounded-3xl border border-white/10 overflow-hidden bg-[#111111]">

          {/* Text block */}
          <div className="px-8 md:px-12 pt-12 pb-10">
            <p className="text-white font-bold text-lg md:text-2xl leading-snug max-w-5xl">
              We&apos;re the storytellers, visionaries, and creative dreamers
              who turn your{" "}
              <span className="text-white/35">ideas into cinematic adventures.</span>{" "}
              With us, work feels like play, and every project is a chance to{" "}
              <span className="text-white/35">make magic</span> happen.
            </p>

            <div className="mt-10">
              <h3 className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">
                What We Create
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
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
          </div>

          {/* Auto-scrolling image strip */}
          <div className="relative overflow-hidden">
            <div className="flex gap-3 image-scroll">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="relative shrink-0 rounded-2xl overflow-hidden"
                  style={{ width: "320px", height: "220px" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .image-scroll {
          animation: scrollImages 28s linear infinite;
          width: max-content;
        }

        .image-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes scrollImages {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}