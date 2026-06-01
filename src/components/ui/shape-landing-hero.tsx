"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function HeroGeometric({
  badge = "Visual Journalist",
  title1 = "Faris",
  title2 = "Alkhateeb",
  subtitle = "صانع محتوى بصري · مدير إبداعي",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
  subtitle?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-end justify-center overflow-hidden bg-[#0a0a0b]">
      {/* Soft colour wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.04] via-transparent to-rose-500/[0.04] blur-3xl" />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.12]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.12]"
          className="right-[-5%] md:right-[0%] top-[60%] md:top-[65%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.12]"
          className="left-[5%] md:left-[10%] bottom-[8%] md:bottom-[12%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.12]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.12]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pb-[11vh] px-6 text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8"
        >
          <Circle className="h-2 w-2 fill-rose-500/80" />
          <span className="text-sm text-white/60 tracking-widest uppercase font-mono">
            {badge}
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <h1
            className="font-black uppercase leading-[0.88] tracking-[-3px] mb-4"
            style={{
              fontFamily: "var(--font-archivo)",
              fontSize: "clamp(3rem,11vw,8.5rem)",
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              {title1}
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
              {title2}
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <p
            className="text-base md:text-lg text-white/40 mb-10 leading-relaxed font-light tracking-widest uppercase"
            style={{ fontFamily: "var(--font-mono2)" }}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex gap-4 flex-wrap justify-center"
        >
          <a
            href="#work"
            className="font-mono text-[13px] tracking-wide px-7 py-3.5 rounded-full inline-flex items-center gap-2.5 border border-white/15 bg-white/5 backdrop-blur-md transition-all hover:bg-white hover:text-black hover:border-white hover:-translate-y-0.5"
            style={{ fontFamily: "var(--font-mono2)" }}
          >
            View Work
            <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href="#cv"
            className="font-mono text-[13px] tracking-wide px-7 py-3.5 rounded-full inline-flex items-center gap-2.5 border border-white/15 bg-white/5 backdrop-blur-md transition-all hover:bg-white hover:text-black hover:border-white hover:-translate-y-0.5"
            style={{ fontFamily: "var(--font-mono2)" }}
          >
            View CV
            <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
              <path d="M14 3v6h6M9 13h6M9 17h6" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Bottom fade into page */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-[#0a0a0b]/60 pointer-events-none" />
    </div>
  );
}

export { HeroGeometric, ElegantShape };
