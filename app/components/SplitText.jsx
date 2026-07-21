"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({
  text,
  className = "",
  delay = 50,
  duration = 1,
  ease = "power3.out",
  splitType = "chars", // "chars" | "words"
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  textAlign = "center",
  tag = "p",
  onLetterAnimationComplete = () => {},
}) => {
  const containerRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || !text) return;
    if (animatedRef.current) return;

    const el = containerRef.current;

    // clear old content
    el.innerHTML = "";

    const pieces = splitType === "words" ? text.split(" ") : text.split("");
    const targets = [];

    pieces.forEach((piece, i) => {
      const span = document.createElement("span");
      span.textContent = piece === " " ? "\u00A0" : piece;
      span.style.display = "inline-block";
      span.style.whiteSpace = "pre";
      el.appendChild(span);
      targets.push(span);

      if (splitType === "words" && i !== pieces.length - 1) {
        el.appendChild(document.createTextNode(" "));
      }
    });

    const startPct = (1 - threshold) * 100;

    const tween = gsap.fromTo(
      targets,
      { ...from },
      {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        scrollTrigger: {
          trigger: el,
          start: `top ${startPct}%`,
          once: true,
        },
        onComplete: () => {
          animatedRef.current = true;
          onLetterAnimationComplete?.();
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [text, delay, duration, ease, splitType, threshold]);

  const Tag = tag;

  return (
    <Tag
      ref={containerRef}
      style={{ textAlign, overflow: "hidden", display: "inline-block" }}
      className={className}
    />
  );
};

export default SplitText;