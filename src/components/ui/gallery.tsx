"use client";

import { Ref, forwardRef, useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { motion, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "left" | "right";

/* ─── Photo card ─── */
function getRandomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const MotionImage = motion(
  forwardRef(function MI(props: ImageProps, ref: Ref<HTMLImageElement>) {
    return <Image ref={ref} {...props} />;
  })
);

export const Photo = ({
  src,
  alt,
  className,
  direction,
  width,
  height,
}: {
  src: string;
  alt: string;
  className?: string;
  direction?: Direction;
  width: number;
  height: number;
}) => {
  const [rotation, setRotation] = useState(0);
  const x = useMotionValue(110);
  const y = useMotionValue(110);

  useEffect(() => {
    setRotation(getRandomInRange(1, 4) * (direction === "left" ? -1 : 1));
  }, [direction]);

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileTap={{ scale: 1.2, zIndex: 9999 }}
      whileHover={{ scale: 1.08, rotateZ: 2 * (direction === "left" ? -1 : 1), zIndex: 9999 }}
      whileDrag={{ scale: 1.1, zIndex: 9999 }}
      initial={{ rotate: 0 }}
      animate={{ rotate: rotation }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      onMouseLeave={() => { x.set(110); y.set(110); }}
      style={{ width, height, perspective: 400 }}
      className={cn(
        "relative mx-auto shrink-0 cursor-grab active:cursor-grabbing",
        "select-none",
        className
      )}
      draggable={false}
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-lg shadow-black/40 ring-1 ring-white/10">
        <MotionImage
          className="rounded-2xl object-cover"
          fill
          src={src}
          alt={alt}
          draggable={false}
        />
      </div>
    </motion.div>
  );
};

/* ─── Gallery ─── */
const WORK_IMAGES = [
  "/works/work1.png",
  "/works/work2.png",
  "/works/work3.jpeg",
  "/works/work4.png",
  "/works/work5.png",
  "/works/work6.png",
  "/works/work7.png",
  "/works/work8.png",
  "/works/work9.png",
  "/works/work10.png",
  "/works/work11.png",
  "/works/work12.png",
  "/works/work13.png",
  "/works/work14.jpeg",
  "/works/work15.jpeg",
];

const PHOTOS: {
  id: number;
  order: number;
  x: string;
  y: string;
  zIndex: number;
  direction: Direction;
  src: string;
}[] = [
  { id: 1, order: 0, x: "-310px", y: "10px",  zIndex: 50, direction: "left",  src: WORK_IMAGES[0]  },
  { id: 2, order: 1, x: "-155px", y: "28px",  zIndex: 40, direction: "left",  src: WORK_IMAGES[4]  },
  { id: 3, order: 2, x: "0px",    y: "6px",   zIndex: 30, direction: "right", src: WORK_IMAGES[8]  },
  { id: 4, order: 3, x: "155px",  y: "20px",  zIndex: 20, direction: "right", src: WORK_IMAGES[12] },
  { id: 5, order: 4, x: "310px",  y: "38px",  zIndex: 10, direction: "left",  src: WORK_IMAGES[14] },
];

export const PhotoGallery = ({ animationDelay = 0.3 }: { animationDelay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded]   = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setIsVisible(true), animationDelay * 1000);
    const t2 = setTimeout(() => setIsLoaded(true),  (animationDelay + 0.4) * 1000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [animationDelay]);

  const containerVariants = {
    hidden:   { opacity: 1 },
    visible:  { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const photoVariants = {
    hidden: () => ({ x: 0, y: 0, scale: 1 }),
    visible: (custom: { x: string; y: string; order: number }) => ({
      x: custom.x,
      y: custom.y,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 70, damping: 12, mass: 1, delay: custom.order * 0.15 },
    }),
  };

  return (
    <div className="relative py-20">
      {/* Grid backdrop */}
      <div className="absolute inset-0 top-[140px] -z-10 h-[260px] w-full max-md:hidden bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Label */}
      <p className="f-mono text-center text-[10px] tracking-[5px] uppercase text-neutral-500 mb-3">
        Visual Work · 15 Projects
      </p>

      {/* Heading */}
      <h3 className="f-archivo font-black text-center text-4xl md:text-6xl tracking-tight mb-2">
        Visual{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-white to-rose-400">
          Work
        </span>
      </h3>
      <p className="text-center text-sm text-neutral-500 f-mono mb-6 tracking-wide">
        أعمال بصرية تجمع بين التصميم التحريري، الإنفوغراف، الخرائط، والتغطيات التفاعلية.
      </p>

      {/* Fan of photos */}
      <div className="relative h-[280px] sm:h-[300px] w-full flex items-center justify-center overflow-hidden">
        <motion.div
          className="relative mx-auto flex w-full max-w-7xl justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="relative flex w-full justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <div className="relative h-[210px] w-[210px] scale-[0.42] sm:scale-[0.7] md:scale-100">

              {[...PHOTOS].reverse().map((photo) => (
                <motion.div
                  key={photo.id}
                  className="absolute left-0 top-0"
                  style={{ zIndex: photo.zIndex }}
                  variants={photoVariants}
                  custom={{ x: photo.x, y: photo.y, order: photo.order }}
                >
                  <Photo
                    width={210}
                    height={210}
                    src={photo.src}
                    alt={`Work ${photo.id}`}
                    direction={photo.direction}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-4">
        <a
          href="#work"
          className="f-mono text-[13px] tracking-wide px-7 py-3 rounded-full inline-flex items-center gap-2.5 border border-white/15 bg-white/5 backdrop-blur-md transition-all hover:bg-white hover:text-black hover:-translate-y-0.5"
        >
          View All Work
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </div>
  );
};
