"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const categories = ["All", "Reels", "Mid-Level Ads", "Commercials", "Documentaries"];

const projects = [
  { title: "Tulips Neckchain", client: "TULIPS", category: "Reels", video: "https://res.cloudinary.com/davlyosj1/video/upload/v1784007651/Tulips_neckchain_fv7def.mp4" },
  { title: "Swasha", client: "SWASHA", category: "Reels", video: "https://res.cloudinary.com/davlyosj1/video/upload/v1784007649/Swasha_mgrmqw.mp4" },
  { title: "Jewelry Showcase", client: "JEWELRY", category: "Reels", video: "https://res.cloudinary.com/davlyosj1/video/upload/v1784007648/jewlwry_video_ftwlcu.mp4" },
  { title: "Handloom", client: "HANDLOOM", category: "Reels", video: "https://res.cloudinary.com/davlyosj1/video/upload/v1784007634/Handloom_wmyr1m.mp4" },
  { title: "Handloom Pashmina", client: "HANDLOOM", category: "Reels", video: "https://res.cloudinary.com/davlyosj1/video/upload/v1784007632/Handloom_Pasmina_zxahzj.mp4" },
  { title: "Cafe Campaign 1", client: "CAFE", category: "Commercials", video: "https://res.cloudinary.com/davlyosj1/video/upload/v1784007614/cafe_1_drkufw.mp4" },
  { title: "Cafe Campaign 2", client: "CAFE", category: "Commercials", video: "https://res.cloudinary.com/davlyosj1/video/upload/v1784007614/cafe_2_s3mxdl.mp4" },
  { title: "Karachi Bakery", client: "KARACHI BAKERY", category: "Commercials", video: "https://res.cloudinary.com/davlyosj1/video/upload/v1784007597/Karachi_Bakery_e0thxr.mp4" },
  { title: "Karachi Bakery 2", client: "KARACHI BAKERY", category: "Commercials", video: "https://res.cloudinary.com/davlyosj1/video/upload/v1784007593/Karachi_Baker2_igrnti.mp4" },
  { title: "Hypen", client: "HYPEN", category: "Mid-Level Ads", video: "https://res.cloudinary.com/davlyosj1/video/upload/v1784007557/Hypen_rwu7jr.mp4" },
  { title: "Dot Key", client: "DOT KEY", category: "Mid-Level Ads", video: "https://res.cloudinary.com/davlyosj1/video/upload/v1784007554/Dot_key_hutf92.mp4" },
  { title: "Documentary", client: "DOC", category: "Documentaries", video: "https://res.cloudinary.com/davlyosj1/video/upload/v1772777989/doc_glq8jn.mp4" },
  { title: "Advertisement", client: "ADVER", category: "Mid-Level Ads", video: "https://res.cloudinary.com/davlyosj1/video/upload/v1772777880/Adver_worzni.mp4" },
  { title: "Hero Film", client: "HERO", category: "Commercials", video: "https://res.cloudinary.com/davlyosj1/video/upload/v1772777910/hero_umjlne.mp4" },
  { title: "Teaser", client: "TEASER", category: "Documentaries", video: "https://res.cloudinary.com/davlyosj1/video/upload/v1772777980/Teaser_rrk5fp.mov" },
];

const getThumbnail = (videoUrl?: string) =>
  videoUrl ? videoUrl.replace("/upload/", "/upload/so_1/").replace(/\.(mp4|mov)$/, ".jpg") : "";

type Project = {
  title: string;
  client: string;
  category: string;
  video?: string;
};

export default function ProjectsPage() {
  const heroContentRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
const [activeVideo, setActiveVideo] = useState<Project | null>(null);
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (heroContentRef.current) {
        heroContentRef.current.style.transform = `translateY(-${scrollY * 0.3}px)`;
        heroContentRef.current.style.opacity = `${1 - scrollY / 600}`;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-black min-h-screen">

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <Image src="/images/post.jpg" alt="Projects Hero" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div
          ref={heroContentRef}
          className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-7xl"
          style={{ transition: "transform 0.05s linear" }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight mb-6">Our Projects</h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            From coming up with creative concepts to delivering outstanding campaigns,
            we're your friendly, fun-loving crew ready to turn your project dreams into reality!
          </p>
        </div>
        <div className="absolute bottom-10 left-6 md:left-16 z-10 flex flex-col items-center gap-2">
          <p className="text-white/40 text-sm tracking-widest" style={{ writingMode: "vertical-rl" }}>SCROLL</p>
          <div className="w-px h-16 overflow-hidden">
            <div className="w-full bg-white/40" style={{ height: "100%", animation: "scrollLine 1.8s ease-in-out infinite" }} />
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="bg-black py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm tracking-wide transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white/60 border-white/20 hover:border-white/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {filtered.map((project, i) => (
<div
  key={i}
  onClick={() => project.video && setActiveVideo(project)}
  className="group relative overflow-hidden rounded-2xl cursor-pointer bg-zinc-900"
  onMouseEnter={(e) => {
  const vid = e.currentTarget.querySelector("video");
  if (vid) vid.play().catch(() => {});
}}
onMouseLeave={(e) => {
  const vid = e.currentTarget.querySelector("video");
  if (vid) { vid.pause(); vid.currentTime = 0; }
}}
  >
    <div className="relative overflow-hidden" style={{ height: "260px" }}>
     <Image
  src={getThumbnail(project.video)}
  alt={project.title}
  fill
  sizes="(max-width: 768px) 100vw, 33vw"
  className="object-cover transition-transform duration-700 group-hover:scale-105"
/>
      {project.video && (
        <video
          src={project.video}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      )}
      <div className="absolute top-4 left-4 z-10">
        <span className="bg-black/60 backdrop-blur-sm text-white text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-white/10">
          {project.category}
        </span>
      </div>
    </div>
    <div className="p-5">
      <p className="text-white/40 text-xs tracking-widest uppercase mb-1">{project.client}</p>
      <h3 className="text-white font-semibold text-lg">{project.title}</h3>
    </div>
  </div>
))}
          </div>

          {/* All Projects button */}
          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-3 bg-red-500 hover:bg-white hover:text-black text-white text-[11px] tracking-widest uppercase px-10 py-5 rounded-full cursor-pointer transition-all duration-300 hover:scale-75">
              All Projects
              <span className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center text-sm">→</span>
            </button>
          </div>

        </div>
      </section>


{/* VIDEO MODAL */}
{activeVideo && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
    onClick={() => setActiveVideo(null)}
  >
    <div
      className="relative w-full max-w-4xl mx-4 rounded-2xl overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setActiveVideo(null)}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
      >
        ✕
      </button>
      <video
        src={activeVideo.video}
        controls
        autoPlay
        className="w-full rounded-2xl"
        style={{ maxHeight: "80vh" }}
      />
      <div className="bg-zinc-900 px-6 py-4">
        <p className="text-white/40 text-xs tracking-widest uppercase">{activeVideo.client}</p>
        <h3 className="text-white font-semibold text-lg">{activeVideo.title}</h3>
      </div>
    </div>
  </div>
)}




      <style>{`
        @keyframes scrollLine {
          0%   { transform: translateY(-100%); opacity: 1; }
          50%  { transform: translateY(0%);    opacity: 1; }
          100% { transform: translateY(100%);  opacity: 0; }
        }
      `}</style>

    </main>
  );
}