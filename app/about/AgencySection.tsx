export default function AgencySection() {
  return (
    <section className="bg-[#0a0a0a] relative overflow-hidden py-32 px-6 md:px-16">

      {/* Subtle vertical grid lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-white/4"
            style={{ left: `${(i + 1) * 12.5}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-16 md:gap-24 items-start">

        {/* Left — heading */}
        <div>
          <h2 className="text-white font-bold text-2xl md:text-3xl leading-snug">
          About Our Media House 
          </h2>
        </div>

        {/* Right — content */}
        <div className="flex flex-col gap-8">
          <p className="text-white font-semibold text-xl md:text-5xl leading-tight tracking-tight">
            We&apos;re more than a production house. We&apos;re a team of filmmakers, designers, strategists, photographers, and storytellers who believe that every brand deserves a story worth remembering.
          </p>
          <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-4xl">
            From cinematic films and commercial advertisements to branding, UI/UX design, photography, podcasts, and social media campaigns, we create experiences that connect people with brands through creativity and emotion.
Every project starts with understanding your vision. Every frame is crafted with intention. Every design is built to create impact.
At Pahadi Bhula Production, we don&apos;t create content just to fill screens—we create stories that people feel.

          </p>
        </div>

      </div>
    </section>
  );
}