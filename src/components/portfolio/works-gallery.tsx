"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORKS = [
  "work1.png",
  "work2.png",
  "work3.jpeg",
  "work4.png",
  "work5.png",
  "work6.png",
  "work7.png",
  "work8.png",
  "work9.png",
  "work10.png",
  "work11.png",
  "work12.png",
  "work13.png",
  "work14.jpeg",
  "work15.jpeg",
];
const FEATURED = new Set([0, 7]);

export default function WorksGallery() {
  const [active, setActive] = React.useState<string | null>(null);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
  }, [active]);

  return (
    <section id="work" className="py-16 px-6 max-w-[1300px] mx-auto">
      <div className="mb-8">
        <div className="f-mono text-xs tracking-[0.3em] text-neutral-500 uppercase mb-2 flex items-center gap-3 before:content-[''] before:w-7 before:h-0.5 before:bg-white">
          Portfolio
        </div>
        <h2 className="f-archivo font-extrabold text-3xl md:text-5xl tracking-tight">
          Work
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {WORKS.map((img, i) => (
          <motion.button
            key={img}
            type="button"
            onClick={() => setActive(img)}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.2, 0.9, 0.3, 1] }}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#161617] cursor-pointer transition-[transform,border-color] duration-500 hover:-translate-y-1.5 hover:border-white/20 ${
              FEATURED.has(i) ? "lg:col-span-2" : ""
            }`}
          >
            <div
              className={`relative overflow-hidden bg-black ${
                FEATURED.has(i) ? "aspect-[16/9]" : "aspect-[4/3]"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/works/${img}`}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-[#060607]/96 backdrop-blur-xl" />
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="fixed top-6 right-6 z-[10001] w-12 h-12 rounded-xl border border-white/15 bg-[#161617] text-white text-2xl flex items-center justify-center transition-all hover:bg-white hover:text-black hover:rotate-90"
            >
              ×
            </button>
            <motion.div
              className="relative z-[10000] max-w-[960px] w-full flex items-center justify-center"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.2, 0.9, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/works/${active}`}
                alt=""
                className="max-w-full max-h-[88vh] object-contain rounded-xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
