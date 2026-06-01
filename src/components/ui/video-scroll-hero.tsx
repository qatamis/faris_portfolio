"use client";
import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface VideoScrollHeroProps {
  src: string;
  scrollHeight?: number;
}

export default function VideoScrollHero({
  src,
  scrollHeight = 800,
}: VideoScrollHeroProps) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  // Clip path: starts with 8% inset, expands to full on scroll
  const clip = useTransform(scrollYProgress, [0, 1], [8, 0]);
  const clipPath = useTransform(
    clip,
    (v) => `polygon(${v}% ${v}%, ${100 - v}% ${v}%, ${100 - v}% ${100 - v}%, ${v}% ${100 - v}%)`
  );

  // Scale: subtle zoom-out on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  // Opacity fade near bottom
  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0.4]);

  return (
    <div
      ref={wrapperRef}
      style={{ height: `calc(${scrollHeight}px + 100vh)` }}
      className="relative w-full"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0a0a0b]">
        <motion.div
          className="absolute inset-0"
          style={{ clipPath, opacity }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ scale }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover object-top"
            >
              <source src={src} type="video/mp4" />
            </video>
            {/* Dark overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
