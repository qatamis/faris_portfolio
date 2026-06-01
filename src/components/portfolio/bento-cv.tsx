"use client";
import * as React from "react";
import { motion } from "framer-motion";

const SKILLS = [
  ["Editorial Design", 98],
  ["Adobe Suite", 95],
  ["Visual Storytelling", 96],
  ["Infographics & Maps", 95],
  ["Motion & Video", 88],
  ["AI & Generative", 99],
] as const;

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: [0.2, 0.9, 0.3, 1] as const },
};

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      {...reveal}
      className={`relative overflow-hidden rounded-[26px] border border-white/15 bg-white/[0.04] backdrop-blur-xl p-8 before:content-[''] before:absolute before:top-0 before:inset-x-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function BentoCv() {
  return (
    <section id="cv" className="py-20 px-6 max-w-[1300px] mx-auto">
      <div className="f-mono text-xs tracking-[0.3em] text-neutral-500 uppercase mb-8 flex items-center gap-3 before:content-[''] before:w-7 before:h-0.5 before:bg-white">
        Curriculum Vitae
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Profile */}
        <Card className="flex gap-7 flex-col sm:flex-row items-center sm:items-start text-center sm:text-right">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/IMG_1616.jpg"
            alt="Faris Alkhateeb"
            className="w-[150px] h-[185px] rounded-2xl object-cover border border-white/15 shrink-0 grayscale-[30%] contrast-[1.05]"
          />
          <div>
            <h2 className="f-archivo font-extrabold text-2xl tracking-wide uppercase mb-2">
              Faris Alkhateeb
            </h2>
            <div className="f-mono text-[11px] tracking-[2px] text-neutral-500 uppercase mb-5 leading-relaxed">
              Visual Journalist &<br />
              Editorial Designer
            </div>
            <p className="text-sm leading-[1.85] text-neutral-400">
              صانع محتوى بصري متخصص في تحويل القصص الصحفية إلى تجارب رقمية مؤثرة،
              بخبرة تتجاوز 16 عاماً في صناعة المحتوى البصري للصحافة والإعلام
              الرقمي — من التصميم والإنفوغراف إلى الخرائط والتغطيات التفاعلية.
            </p>
          </div>
        </Card>

        {/* Skills */}
        <Card>
          <h3 className="f-archivo font-bold text-2xl mb-7">Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-9 gap-y-6">
            {SKILLS.map(([name, pct], i) => (
              <div key={name}>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="f-mono text-[11px] uppercase tracking-wide">
                    {name}
                  </span>
                  <span className="f-mono text-[11px] text-neutral-500">
                    {pct}%
                  </span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-white rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.3, delay: i * 0.05, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Experience: Newsroom */}
        <Card>
          <h3 className="f-archivo font-bold text-2xl mb-8 flex items-center gap-2.5">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="6" width="14" height="12" rx="2" />
              <path d="M16 10l5-3v10l-5-3z" />
            </svg>
            Experience
          </h3>
          <div className="relative ps-6 before:content-[''] before:absolute before:start-[5px] before:top-2.5 before:bottom-2.5 before:w-px before:bg-white/15">
            <TimelineItem
              title="Visual Editor / Multimedia"
              date="2010 — NOW"
              company="Aljazeera Media Network"
              text="إنتاج وتطوير المحتوى البصري للمنصات الرقمية — التصميم، المونتاج، الإنفوغراف، الخرائط، التغطيات التفاعلية، والمعالجات البصرية للتحقيقات والملفات الخاصة."
            />
            <TimelineItem
              title="Visual Workflow Lead"
              date="Newsroom"
              company="Editorial Design Ops"
              text="إدارة سير العمل البصري داخل غرف الأخبار وضمان تكامل الهوية البصرية مع متطلبات السرد التحريري عبر المنصات."
              last
            />
          </div>
        </Card>

        {/* Experience: Independent */}
        <Card>
          <h3 className="f-archivo font-bold text-2xl mb-8 flex items-center gap-2.5">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="4" width="20" height="16" rx="3" />
              <circle cx="12" cy="12" r="4" />
            </svg>
            Independent
          </h3>
          <div className="relative ps-6 before:content-[''] before:absolute before:start-[5px] before:top-2.5 before:bottom-2.5 before:w-px before:bg-white/15">
            <TimelineItem
              title="Visual Designer · Freelance"
              date="2008 — OPEN"
              company="Selected Projects"
              text="مشاريع مستقلة في التصميم البصري، الهويات الرقمية، إنتاج الفيديو، والتصاميم التحريرية بما يخدم طبيعة كل منصة وجمهورها."
            />
            <TimelineItem
              title="AI-Powered Visual Workflows"
              date="2023 — NOW"
              company="Generative · Prompt Engineering"
              text="توظيف أدوات الذكاء الاصطناعي التوليدي في إنتاج ومعالجة المحتوى البصري وتسريع سير العمل الإبداعي مع الحفاظ على الدقة التحريرية."
              last
            />
          </div>
        </Card>

        {/* Highlight */}
        <Card className="flex items-center justify-between">
          <div>
            <h4 className="f-archivo font-bold text-xl mb-1">16+ Years of Craft</h4>
            <div className="f-mono text-[10px] tracking-wide text-neutral-500 uppercase">
              3000+ Visual Projects
            </div>
          </div>
          <span className="f-mono text-[10px] bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
            2010 — 2026
          </span>
        </Card>

        {/* Languages */}
        <Card className="flex items-center justify-around">
          <div className="text-center">
            <div className="text-4xl mb-2.5">🇶🇦</div>
            <div className="f-mono text-xs tracking-[3px] text-neutral-500 uppercase">
              Arabic
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2.5">🇬🇧</div>
            <div className="f-mono text-xs tracking-[3px] text-neutral-500 uppercase">
              English
            </div>
          </div>
        </Card>

        {/* Portfolio / Instagram */}
        <Card className="lg:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
          <span className="f-archivo font-bold text-2xl shrink-0">Portfolio</span>
          <a
            href="https://www.instagram.com/fares_m3/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-white text-center py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all hover:scale-[1.01] hover:brightness-110"
            style={{
              background:
                "linear-gradient(90deg,#feda75,#fa7e1e 25%,#d62976 55%,#962fbf 80%,#4f5bd5)",
            }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Instagram · @fares_m3
          </a>
        </Card>

        {/* Contact bar */}
        <Card className="lg:col-span-2 !p-0">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <ContactItem label="Name" value="Faris Alkhateeb">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </ContactItem>
            <ContactItem label="Email" value="khatebf@aljazeera.net" href="mailto:khatebf@aljazeera.net" border>
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 5L2 7" />
            </ContactItem>
            <ContactItem label="Location" value="Doha · Qatar">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </ContactItem>
          </div>
        </Card>
      </div>
    </section>
  );
}

function TimelineItem({
  title,
  date,
  company,
  text,
  last = false,
}: {
  title: string;
  date: string;
  company: string;
  text: string;
  last?: boolean;
}) {
  return (
    <div className={`relative ${last ? "" : "mb-7"}`}>
      <span className="absolute -start-6 top-1.5 w-[11px] h-[11px] rounded-full bg-white" />
      <div className="flex justify-between items-baseline gap-4 flex-wrap mb-1">
        <h4 className="f-archivo font-bold text-base">{title}</h4>
        <span className="f-mono text-[10px] bg-white/5 px-3 py-1 rounded-md border border-white/10 whitespace-nowrap">
          {date}
        </span>
      </div>
      <div className="f-mono text-[10px] tracking-wide text-neutral-500 uppercase mb-2">
        {company}
      </div>
      <p className="text-[13px] leading-relaxed text-neutral-400">{text}</p>
    </div>
  );
}

function ContactItem({
  label,
  value,
  href,
  border = false,
  children,
}: {
  label: string;
  value: string;
  href?: string;
  border?: boolean;
  children: React.ReactNode;
}) {
  const inner = (
    <div
      className={`flex items-center gap-4 p-8 ${
        border ? "sm:border-x border-white/10" : ""
      }`}
    >
      <div className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center shrink-0 text-neutral-400">
        <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {children}
        </svg>
      </div>
      <div className="min-w-0">
        <div className="f-mono text-[10px] tracking-[2px] text-neutral-500 uppercase mb-1">
          {label}
        </div>
        <div className="text-[15px] break-words">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
