"use client";
import { useEffect, useRef, useState } from "react";

export default function IntroLoader() {
  const [visible, setVisible] = useState(() => !sessionStorage.getItem("intro-played"));
  const [fading, setFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!visible) return;
    const dismiss = () => {
      sessionStorage.setItem("intro-played", "1");
      setFading(true);
      setTimeout(() => setVisible(false), 600);
    };
    const fallback = setTimeout(dismiss, 6000);
    const video = videoRef.current;
    video?.addEventListener("ended", dismiss);
    return () => {
      clearTimeout(fallback);
      video?.removeEventListener("ended", dismiss);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-100 bg-black flex items-center justify-center transition-opacity duration-600"
      style={{ opacity: fading ? 0 : 1, transitionDuration: "600ms" }}
    >
      <video
        ref={videoRef}
        src="/Animate-logo.mp4"
        autoPlay
        muted
        playsInline
        className="max-w-[60vw] max-h-[60vh] w-auto h-auto object-contain"
      />
    </div>
  );
}
