"use client";
import * as React from "react";

interface ScrollVideoThreeProps {
  src: string;
  /** kept for API compatibility — no longer used */
  scrollVh?: number;
}

/**
 * Full-screen hero video — exactly 100vh, autoplay + loop.
 * No tall sticky wrapper → zero empty scroll gap.
 * Face stays centred on all screen sizes via object-fit:cover.
 */
export default function ScrollVideoThree({ src }: ScrollVideoThreeProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onReady = () => setReady(true);
    v.addEventListener("loadeddata", onReady);
    v.addEventListener("canplay", onReady);
    const t = setTimeout(() => setReady(true), 1500);
    v.play().catch(() => {});
    return () => {
      v.removeEventListener("loadeddata", onReady);
      v.removeEventListener("canplay", onReady);
      clearTimeout(t);
    };
  }, [src]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0b]" dir="ltr">
      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 18%" }}
      />

      {/* Gradients */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#0a0a0b]/90 to-transparent" />

      {/* Text — bottom-left desktop / bottom-center mobile */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 pb-10 md:pb-14 px-6 md:px-12 flex flex-col items-center md:items-start">
        <div
          className={`f-mono text-[10px] md:text-[11px] tracking-[5px] uppercase text-white/50 mb-4 transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          Visual Storyteller · Al Jazeera
        </div>
        <h1
          className={`f-archivo font-black uppercase leading-[0.88] tracking-[-2px] md:tracking-[-4px] text-white text-[clamp(3.2rem,9vw,8rem)] drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)] transition-all duration-1000 text-center md:text-left ${
            ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Faris
          <br />
          Alkhateeb
        </h1>
        <div
          className={`f-mono text-[10px] md:text-[13px] tracking-[4px] md:tracking-[6px] uppercase text-white/50 mt-4 transition-opacity duration-1000 delay-200 text-center md:text-left ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          Visual Journalist · Editorial Designer
        </div>
      </div>

      {/* Scroll hint */}
      <div className="pointer-events-none absolute top-6 right-6 flex flex-col items-center gap-2 f-mono text-[9px] tracking-[3px] text-white/30">
        <span className="w-px h-8 bg-gradient-to-b from-transparent to-white/30" />
        <span>SCROLL</span>
      </div>
    </section>
  );
}
