

// import Image from "next/image";

// const steps = [
//   {
//     number: "01",
//     title: "Discover",
//     desc: "We understand your brand, audience, and objectives to build a strong creative foundation.",
//     rotate: "-rotate-3",
//     tape: "bg-[#e8392a]",
//     position: "md:mt-0",
//   },
//   {
//     number: "02",
//     title: "Strategy",
//     desc: "Our team develops concepts, scripts, mood boards, and creative direction that align with your vision.",
//     rotate: "rotate-2",
//     tape: "bg-white/70",
//     position: "md:mt-16",
//   },
//   {
//     number: "03",
//     title: "Create",
//     desc: "Whether it's filming, designing, editing, or developing digital experiences, we bring every idea to life with precision and passion.",
//     rotate: "-rotate-2",
//     tape: "bg-white/70",
//     position: "md:-mt-4",
//   },
//   {
//     number: "04",
//     title: "Deliver",
//     desc: "We refine every detail until the final result exceeds expectations and creates meaningful impact.",
//     rotate: "rotate-3",
//     tape: "bg-[#e8392a]",
//     position: "md:mt-20",
//   },
// ];

// export default function HowWeWorkSection() {
//   return (
//     <section className="bg-[#0a0a0a] py-24 px-6 md:px-16">
//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <div className="flex flex-col gap-2 mb-16 text-center md:text-left">
//           <h2 className="text-white text-3xl md:text-4xl font-bold">How We Work</h2>
//           <p className="text-white/55 text-sm md:text-base leading-relaxed">
//             Every great story begins with a conversation.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 relative">

//           {/* Dashed connector line - desktop only */}
//           <svg
//             className="hidden lg:block absolute top-1/2 left-0 w-full h-40 -translate-y-1/2 pointer-events-none"
//             viewBox="0 0 1000 120"
//             fill="none"
//           >
//             <path
//               d="M60,90 C220,-10 300,120 480,30 C620,-40 700,110 940,40"
//               stroke="rgba(255,255,255,0.15)"
//               strokeWidth="2"
//               strokeDasharray="6 8"
//             />
//           </svg>

//           {steps.map((s, i) => (
//             <div
//               key={i}
//               className={`relative ${s.position} ${s.rotate} hover:rotate-0 transition-transform duration-300`}
//             >
//               {/* Tape */}
//               <div
//                 className={`absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-5 rounded-sm ${s.tape} rotate-6 shadow-md z-10`}
//               />

//               {/* Card */}
//               <div className="bg-[#111111] border border-white/10 rounded-2xl px-6 py-8 shadow-xl">
//                 <span className="text-[#e8392a] font-extrabold text-sm tracking-widest">
//                   ({s.number})
//                 </span>
//                 <h4 className="text-white font-semibold text-lg mt-3 mb-2">
//                   {s.title}
//                 </h4>
//                 <p className="text-white/55 text-sm leading-relaxed">
//                   {s.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Closing line */}
//         <p className="text-white/55 text-sm leading-relaxed mt-20 max-w-2xl mx-auto text-center md:text-left">
//           Throughout the journey, we keep communication transparent and
//           collaborative because the best ideas are built together.
//         </p>

//         {/* Optional supporting image */}
//         <div
//           className="relative rounded-2xl overflow-hidden w-full max-w-3xl mx-auto mt-12"
//           style={{ aspectRatio: "16/7" }}
//         >
//           <Image
//             src="/images/filming.jpg"
//             alt="How We Work"
//             fill
//             className="object-cover object-center"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }



import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Discover",
    desc: "We understand your brand, audience, and objectives to build a strong creative foundation.",
    rotate: "-rotate-1",
    tape: "bg-[#e8392a]",
    position: "md:mt-0",
  },
  {
    number: "02",
    title: "Strategy",
    desc: "Our team develops concepts, scripts, mood boards, and creative direction that align with your vision.",
    rotate: "rotate-1",
    tape: "bg-white/70",
    position: "md:mt-8",
  },
  {
    number: "03",
    title: "Create",
    desc: "Whether it's filming, designing, editing, or developing digital experiences, we bring every idea to life with precision and passion.",
    rotate: "-rotate-1",
    tape: "bg-white/70",
    position: "md:mt-0",
  },
  {
    number: "04",
    title: "Deliver",
    desc: "We refine every detail until the final result exceeds expectations and creates meaningful impact.",
    rotate: "rotate-1",
    tape: "bg-[#e8392a]",
    position: "md:mt-8",
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex flex-col gap-2 mb-16 text-center md:text-left">
          <h2 className="text-white text-3xl md:text-4xl font-bold">How We Work</h2>
          <p className="text-white/55 text-sm md:text-base leading-relaxed">
            Every great story begins with a conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-10 relative">

          {/* Dashed connector line - desktop only */}
          <svg
            className="hidden lg:block absolute top-1/2 left-0 w-full h-40 -translate-y-1/2 pointer-events-none"
            viewBox="0 0 1000 120"
            fill="none"
          >
            <path
              d="M60,90 C220,-10 300,120 480,30 C620,-40 700,110 940,40"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="2"
              strokeDasharray="6 8"
            />
          </svg>

          {steps.map((s, i) => (
            <div
              key={i}
              className={`relative ${s.position} ${s.rotate} hover:rotate-0 transition-transform duration-300`}
            >
              {/* Tape */}
              <div
                className={`absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-5 rounded-sm ${s.tape} rotate-3 shadow-md z-10`}
              />

              {/* Card */}
              <div className="bg-[#111111] border border-white/10 rounded-2xl px-6 py-8 shadow-xl">
                <span className="text-[#e8392a] font-extrabold text-sm tracking-widest">
                  ({s.number})
                </span>
                <h4 className="text-white font-semibold text-lg mt-3 mb-2">
                  {s.title}
                </h4>
                <p className="text-white/55 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p className="text-white/55 text-sm leading-relaxed mt-20 max-w-2xl mx-auto text-center md:text-left">
          Throughout the journey, we keep communication transparent and
          collaborative because the best ideas are built together.
        </p>

        {/* Optional supporting image */}
        <div
          className="relative rounded-2xl overflow-hidden w-full max-w-3xl mx-auto mt-12"
          style={{ aspectRatio: "16/7" }}
        >
          <Image
            src="/images/filming.jpg"
            alt="How We Work"
            fill
            className="object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
}