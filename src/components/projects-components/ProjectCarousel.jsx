"use client";
import { useState } from "react";
import projects from "@/data/projects";

export default function ProjectCarousel3D() {
  const [position, setPosition] = useState(3);
  const total = projects.length;

  // sizes
  const CARD_W = 850;
  const CARD_H = 450;
  const GAP = 40;
  const CTRLS_H = 100;

  const moveLeft = () => setPosition((p) => (p > 1 ? p - 1 : total));
  const moveRight = () => setPosition((p) => (p < total ? p + 1 : 1));

  return (
    <div className="relative w-full overflow-x-hidden select-none bg-white">
      <div
        className="relative w-full grid"
        style={{
          height: `${CARD_H + CTRLS_H}px`,
          gridTemplateRows: `${CARD_H}px ${CTRLS_H}px`,
          gridTemplateColumns: "1fr repeat(5,30px) 1fr",
          alignItems: "center",
          justifyItems: "center",
          overflow: "visible",
        }}
      >
        {/* Main carousel */}
        <main
          id="carousel"
          className="flex items-center justify-center mx-auto relative"
          style={{
            gridRow: "1 / 2",
            gridColumn: "1 / 8",
            width: "100%",
            maxWidth: "100%",
            height: `${CARD_H}px`,
            transformStyle: "preserve-3d",
            perspective: "600px",
            "--items": total,
            "--middle": 3,
            "--position": position,
            pointerEvents: "none",
            overflow: "visible",
          }}
        >
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="item flex flex-col justify-center items-center text-center rounded-2xl p-6 shadow-xl border bg-white transition-all duration-300"
              style={{
                position: "absolute",
                width: `${CARD_W}px`,
                height: `${CARD_H}px`,
                transformOrigin: "50% 50%",
                "--offset": i + 1,
                "--r": `calc(var(--position) - var(--offset))`,
                "--abs": `max(calc(var(--r) * -1), var(--r))`,
                transform: `rotateY(calc(-10deg * var(--r)))
                            translateX(calc(-${CARD_W + GAP}px * var(--r)))`,
                zIndex: `calc((var(--position) - var(--abs)))`,
              }}
            >
              <h3 className="font-semibold text-2xl mb-3">{p.title}</h3>
              <p className="text-base text-gray-700 max-w-[700px]">
                {p.description}
              </p>
            </div>
          ))}

          {/* ✅ Touchable gradient zones */}
          <div
            className="absolute inset-0 flex pointer-events-auto"
            style={{ height: `${CARD_H}px` }}
          >
{/* Left side */}
<div
  onClick={moveLeft}
  className="w-1/2 h-full cursor-pointer bg-transparent hover:bg-gradient-to-r hover:from-black/10 hover:via-transparent hover:to-transparent transition-all duration-500 ease-in-out"
  title="Previous"
></div>

{/* Right side */}
<div
  onClick={moveRight}
  className="w-1/2 h-full cursor-pointer bg-transparent hover:bg-gradient-to-l hover:from-black/10 hover:via-transparent hover:to-transparent transition-all duration-500 ease-in-out"
  title="Next"
></div>

          </div>
        </main>
      </div>
    </div>
  );
}
