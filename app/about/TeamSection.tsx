
import { LanyardScene } from "../components/Lanyard";

export default function TeamSection() {
  const team = [
    { name: "Ishant Rana", role: "CEO", img: "https://res.cloudinary.com/davlyosj1/image/upload/v1784620877/Ishant_rana_CEO_PhotoGrid_wb1awe.png" },
    { name: "Trisha Das", role: "Marketing Head", img: "https://res.cloudinary.com/davlyosj1/image/upload/v1784117063/trisha_Das_Marketing_Head_wfceol.jpg" },
  ];

  return (
    <section className="bg-[#0a0a0a] py-14 px-4 sm:py-16 sm:px-6 md:py-20 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-10 md:mb-12">
          Peek Behind the Curtain: Meet Our Fantastic Team!
        </h2>

        <div className="relative w-full h-150 sm:h-175 md:h-200">
          <LanyardScene
            position={[0, 0, 22]}
            cards={team.map((m) => ({
              frontImage: m.img,
              backImage: "/logo.png",
              imageFit: "contain",
            }))}
          />
        </div>

        <div className="grid grid-cols-2 -mt-32 sm:-mt-44 md:-mt-56 pointer-events-none">
          {team.map((m) => (
            <div key={m.name} className="text-center">
              <p className="text-white font-semibold text-sm sm:text-base">{m.role}</p>
              <p className="text-white/70 text-sm sm:text-base">{m.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}