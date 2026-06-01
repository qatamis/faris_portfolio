import ScrollVideoThree from "@/components/ui/scroll-video-three";
import { PhotoGallery } from "@/components/ui/gallery";
import BentoCv from "@/components/portfolio/bento-cv";
import { ScrollTiltedGrid } from "@/components/ui/scroll-tilted-grid";
import { AuroraBackground } from "@/components/ui/animated-background";

export default function Home() {
  return (
    <main className="relative bg-[#0a0a0b] text-[#f4f4f3] overflow-x-hidden">
      {/* Clean gradient backdrop behind everything */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(120%_120%_at_50%_0%,#1b1430_0%,#0d0a18_45%,#08070d_100%)]" />

      {/* ===== HERO — scroll-driven video ===== */}
      <ScrollVideoThree src="/hero-seek.mp4" scrollVh={160} />

      {/* ===== PHOTO GALLERY TEASER ===== */}
      <PhotoGallery animationDelay={0.3} />

      {/* ===== CV — aurora background ===== */}
      <AuroraBackground>
        {/* Fade top/bottom to blend with page */}
        <div className="absolute inset-x-0 top-0    h-32 bg-gradient-to-b from-[#0a0a0b] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0b] to-transparent z-20 pointer-events-none" />
        <BentoCv />
      </AuroraBackground>

      {/* ===== WORKS — aurora background + tilted grid ===== */}
      <AuroraBackground>
        {/* Fade top/bottom to blend */}
        <div className="absolute inset-x-0 top-0    h-40 bg-gradient-to-b from-[#0a0a0b] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0b] to-transparent z-20 pointer-events-none" />

        {/* Header */}
        <section className="relative pt-16 pb-0 px-6 text-center z-20">
          <div className="f-mono text-xs tracking-[0.3em] text-neutral-500 uppercase mb-4 flex items-center justify-center gap-3">
            <span className="w-7 h-px bg-white" />
            Selected Work
            <span className="w-7 h-px bg-white" />
          </div>
          <h2 className="f-archivo font-black text-4xl md:text-6xl tracking-tight">
            Visual Work
          </h2>
          <p className="mt-4 max-w-md mx-auto text-sm text-neutral-400 leading-relaxed">
            أعمال بصرية تجمع بين التصميم التحريري، الإنفوغراف، الخرائط، والتغطيات التفاعلية.
          </p>
        </section>

        <div className="relative z-20">
          <ScrollTiltedGrid />
        </div>
      </AuroraBackground>

      {/* ===== FOOTER ===== */}
      <footer className="py-8 px-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 f-mono text-[11px] text-neutral-600 max-w-[1300px] mx-auto">
        <span>© 2026 FARIS ALKHATEEB</span>
        <span>VISUAL JOURNALIST · DOHA</span>
      </footer>
    </main>
  );
}
