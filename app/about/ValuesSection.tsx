export default function ValuesSection() {
  const values = [
    {
      number: "01",
      title: "Creativity",
      description:
        "We believe creativity is the foundation of every successful brand. Every project is approached with fresh ideas, innovative thinking, and a passion for storytelling..",
      align: "left",
    },
    {
      number: "02",
      title: "Quality",
      description:
        "From pre-production to the final delivery, we maintain the highest standards to ensure every frame, design, and campaign reflects excellence.",
      align: "right",
    },
    {
      number: "03",
      title: "Collaboration",
      description:
        "Great work happens together. We work closely with our clients throughout the creative process, ensuring every project reflects their vision while adding our creative expertise..",
      align: "left",
    },
    {
      number: "04",
      title: "Authenticity",
      description:
        "Our roots inspire everything we create. We believe honest stories build stronger brands, and authenticity is what makes every project meaningful.",
      align: "right",
    },
     {
      number: "05",
      title: "Innovation",
      description:
        "We combine filmmaking, design, branding, and technology to create modern digital experiences that stand out in today's competitive world",
      align: "left",
    },
  ];

  return (
    <section className="bg-[#0a0a0a] py-24 px-6 md:px-16">
      {/* Section heading */}
      <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-24">
        Our Core Values
      </h2>

      {/* Vertical grid lines background */}
      <div className="relative max-w-7xl mx-auto">
        {/* Grid lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 160px)",
          }}
        />

        {/* Values list */}
        <div className="relative z-10 flex flex-col gap-0">
          {values.map((v, i) => (
            <div
              key={i}
              className={`relative flex flex-col py-16 ${
                v.align === "right"
                  ? "items-end text-left pl-8 md:pl-0 md:pr-0"
                  : "items-start"
              }`}
            >
              {/* Big muted number behind */}
              <span
                className="absolute select-none font-bold text-white/10 leading-none"
                style={{
                  fontSize: "clamp(120px, 18vw, 220px)",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: v.align === "left" ? "0" : "auto",
                  right: v.align === "right" ? "0" : "auto",
                  zIndex: 0,
                  letterSpacing: "-4px",
                }}
              >
                {v.number}
              </span>

              {/* Content */}
              <div
                className="relative z-10 max-w-lg"
                style={{
                  marginLeft: v.align === "left" ? "clamp(60px, 10vw, 160px)" : "auto",
                  marginRight: v.align === "right" ? "clamp(60px, 10vw, 160px)" : "auto",
                }}
              >
                <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
                  {v.title}
                </h3>
                <p className="text-white/55 text-base md:text-lg leading-relaxed">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}