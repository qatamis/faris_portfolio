import ScrollVideoThree from "@/components/ui/scroll-video-three";

export default function ScrollPage() {
  return (
    <main className="relative bg-[#08070d]">
      {/* Clean gradient background (fixed, behind everything) */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(120%_120%_at_50%_0%,#1b1430_0%,#0d0a18_45%,#08070d_100%)]" />

      {/* Scroll-driven Three.js video */}
      <ScrollVideoThree src="/hero-seek.mp4" scrollVh={500} />

      {/* Closing section */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-32">
        <h2 className="f-archivo font-black text-4xl md:text-6xl tracking-tight text-white mb-6">
          Every frame, a story.
        </h2>
        <p className="f-mono text-sm tracking-[3px] uppercase text-white/50 max-w-md leading-relaxed">
          16+ years turning complex stories into clear visuals.
        </p>
        <a
          href="mailto:khatebf@aljazeera.net"
          className="mt-10 f-mono text-[13px] tracking-wide px-8 py-3.5 rounded-full border border-white/20 text-white transition-all hover:bg-white hover:text-black"
        >
          khatebf@aljazeera.net
        </a>
      </section>
    </main>
  );
}
