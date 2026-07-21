


// // "use client";

// // import { useState } from "react";
// // import Image from "next/image";

// // const items = [
// //   { label: "VFX", image: "/images/vfx-preview.jpg" },
// //   { label: "Filming", image: "/images/filming-preview.jpg" },
// //   { label: "Scriptwriting", image: "/images/scriptwriting-preview.jpg" },
// //   { label: "Sound Design", image: "/images/sound-preview.jpg" },
// // ];

// // export default function ServicesMarquee() {
// //   const [hovered, setHovered] = useState<number | null>(null);
// //   const [mouse, setMouse] = useState({ x: 0, y: 0 });

// //   return (
// //     <section
// //       className="relative bg-black py-32 overflow-hidden"
// //       onMouseMove={(e) => {
// //         const rect = e.currentTarget.getBoundingClientRect();
// //         setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
// //       }}
// //     >
// //       {/* Floating preview image that follows cursor */}
// //       {hovered !== null && (
// //         <div
// //           className="pointer-events-none absolute z-20 w-48 h-32 rounded-xl overflow-hidden shadow-2xl"
// //           style={{
// //             left: mouse.x - 96,
// //             top: mouse.y - 64,
// //             transform: "rotate(-8deg)",
// //             transition: "transform 0.15s ease-out",
// //           }}
// //         >
// //           <Image
// //             src={items[hovered].image}
// //             alt={items[hovered].label}
// //             fill
// //             className="object-cover"
// //             unoptimized
// //           />
// //         </div>
// //       )}

// //       <div className="flex items-center justify-center gap-2 md:gap-5 whitespace-nowrap px-6 overflow-x-auto md:overflow-visible">
// //         {items.map((item, i) => (
// //           <div key={i} className="flex items-center gap-2 md:gap-5 shrink-0">
// //             <h3
// //               onMouseEnter={() => setHovered(i)}
// //               onMouseLeave={() => setHovered(null)}
// //               className={`text-xl md:text-3xl lg:text-4xl font-bold cursor-pointer transition-colors duration-300 ${
// //                 hovered === i
// //                   ? "text-white"
// //                   : "text-transparent [text-stroke:1px_#555] [-webkit-text-stroke:1px_#555]"
// //               }`}
// //             >
// //               {item.label}
// //             </h3>
// //             {i !== items.length - 1 && (
// //               <span className="w-2.5 h-2.5 rounded-full bg-orange-600 inline-block shrink-0" />
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { useState } from "react";
// import Image from "next/image";

// const items = [
//   { label: "VFX", image: "/images/vfx-preview.jpg" },
//   { label: "Filming", image: "/images/filming-preview.jpg" },
//   { label: "Scriptwriting", image: "/images/scriptwriting-preview.jpg" },
//   { label: "Sound Design", image: "/images/sound-preview.jpg" },
// ];

// export default function ServicesMarquee() {
//   const [hovered, setHovered] = useState<number | null>(null);
//   const [mouse, setMouse] = useState({ x: 0, y: 0 });

//   return (
//     <section
//       className="relative bg-black py-16 md:py-32 overflow-hidden"
//       onMouseMove={(e) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
//       }}
//     >
//       {/* Floating preview image that follows cursor - desktop/mouse only */}
//       {hovered !== null && (
//         <div
//           className="hidden md:block pointer-events-none absolute z-20 w-48 h-32 rounded-xl overflow-hidden shadow-2xl"
//           style={{
//             left: mouse.x - 96,
//             top: mouse.y - 64,
//             transform: "rotate(-8deg)",
//             transition: "transform 0.15s ease-out",
//           }}
//         >
//           <Image
//             src={items[hovered].image}
//             alt={items[hovered].label}
//             fill
//             className="object-cover"
//             unoptimized
//           />
//         </div>
//       )}

//       <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-x-3 gap-y-4 md:gap-5 px-4 sm:px-6 md:overflow-visible">
//         {items.map((item, i) => (
//           <div key={i} className="flex items-center gap-3 md:gap-5 shrink-0">
//             <h3
//               onMouseEnter={() => setHovered(i)}
//               onMouseLeave={() => setHovered(null)}
//               onClick={() => setHovered(hovered === i ? null : i)}
//               className={`text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold cursor-pointer transition-colors duration-300 ${
//                 hovered === i
//                   ? "text-white"
//                   : "text-transparent [text-stroke:1px_#555] [-webkit-text-stroke:1px_#555]"
//               }`}
//             >
//               {item.label}
//             </h3>
//             {i !== items.length - 1 && (
//               <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-orange-600 inline-block shrink-0" />
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Small preview shown inline on mobile/tap, since cursor-follow doesn't apply */}
//       {hovered !== null && (
//         <div className="md:hidden mt-8 flex justify-center px-6">
//           <div className="relative w-40 h-28 rounded-xl overflow-hidden shadow-xl">
//             <Image
//               src={items[hovered].image}
//               alt={items[hovered].label}
//               fill
//               className="object-cover"
//               unoptimized
//             />
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }




"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const items = [
  { label: "VFX", image: "/images/vfx-preview.jpg" },
  { label: "Filming", image: "/images/filming-preview.jpg" },
  { label: "Scriptwriting", image: "/images/scriptwriting-preview.jpg" },
  { label: "Sound Design", image: "/images/sound-preview.jpg" },
];

export default function ServicesMarquee() {
  const [hovered, setHovered] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  const animate = () => {
    // Ease current position toward target position each frame (smooth follow)
    currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.15;
    currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.15;

    if (previewRef.current) {
      previewRef.current.style.transform = `translate3d(${
        currentPos.current.x - 96
      }px, ${currentPos.current.y - 64}px, 0) rotate(-8deg)`;
    }

    rafId.current = requestAnimationFrame(animate);
  };

  const startFollowing = () => {
    if (rafId.current === null) {
      rafId.current = requestAnimationFrame(animate);
    }
  };

  const stopFollowing = () => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  };

  return (
    <section
      className="relative bg-black py-16 md:py-32 overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        targetPos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      }}
    >
      {/* Floating preview image that follows cursor - desktop/mouse only */}
      {hovered !== null && (
        <div
          ref={previewRef}
          className="hidden md:block pointer-events-none absolute top-0 left-0 z-20 w-48 h-32 rounded-xl overflow-hidden shadow-2xl will-change-transform"
        >
          <Image
            src={items[hovered].image}
            alt={items[hovered].label}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-x-3 gap-y-4 md:gap-5 px-4 sm:px-6 md:overflow-visible">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 md:gap-5 shrink-0">
            <h3
              onMouseEnter={() => {
                setHovered(i);
                startFollowing();
              }}
              onMouseLeave={() => {
                setHovered(null);
                stopFollowing();
              }}
              onClick={() => setHovered(hovered === i ? null : i)}
              className={`text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold cursor-pointer transition-colors duration-300 ${
                hovered === i
                  ? "text-white"
                  : "text-transparent [text-stroke:1px_#555] [-webkit-text-stroke:1px_#555]"
              }`}
            >
              {item.label}
            </h3>
            {i !== items.length - 1 && (
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-orange-600 inline-block shrink-0" />
            )}
          </div>
        ))}
      </div>

      {/* Small preview shown inline on mobile/tap, since cursor-follow doesn't apply */}
      {hovered !== null && (
        <div className="md:hidden mt-8 flex justify-center px-6">
          <div className="relative w-40 h-28 rounded-xl overflow-hidden shadow-xl">
            <Image
              src={items[hovered].image}
              alt={items[hovered].label}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}