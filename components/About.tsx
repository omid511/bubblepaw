"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { content } from "@/config/content";

const { title, story, barnabyIntro } = content.about;

export default function About() {
  const paragraphs = story.split("\n\n");

  return (
    <section id="about" className="scroll-mt-20 relative bg-white py-20 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-[#F97316]/[0.08] pointer-events-none hidden md:block" aria-hidden="true" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#0F172A]/[0.06] pointer-events-none hidden md:block" aria-hidden="true" />
      {/* Additional decorative elements */}
      <div className="absolute top-1/4 -right-20 w-[300px] h-[300px] rounded-full bg-[#0EA5E9]/[0.06] pointer-events-none hidden md:block" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-16 w-[200px] h-[200px] rounded-full bg-[#F97316]/[0.06] pointer-events-none hidden md:block" aria-hidden="true" />
      {/* Color accent blobs */}
      <div className="absolute top-20 right-[15%] w-[120px] h-[120px] rounded-full bg-[#FEF3E2]/90 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-40 left-[10%] w-[100px] h-[100px] rounded-full bg-[#E0F2FE]/80 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-[60%] right-[5%] w-[80px] h-[80px] rounded-full bg-[#F3E8FF]/70 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-[35%] left-[8%] w-[60px] h-[60px] rounded-full bg-[#ECFDF5]/80 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-[20%] right-[18%] w-[90px] h-[90px] rounded-full bg-[#FEF3E2]/70 pointer-events-none" aria-hidden="true" />
      {/* Subtle paw accents */}
      <div className="absolute top-20 right-1/4 text-6xl text-[#F97316]/[0.08] rotate-[-15deg] pointer-events-none select-none" aria-hidden="true">🐾</div>
      <div className="absolute bottom-32 left-1/3 text-5xl text-[#0EA5E9]/[0.08] rotate-[20deg] pointer-events-none select-none" aria-hidden="true">🐾</div>
      <div className="absolute top-[45%] right-[12%] text-4xl text-[#F3E8FF]/[0.10] rotate-[35deg] pointer-events-none select-none" aria-hidden="true">🐾</div>
      <div className="absolute top-[70%] left-[15%] text-3xl text-[#ECFDF5]/[0.12] rotate-[-25deg] pointer-events-none select-none" aria-hidden="true">🐾</div>
      {/* Small floating circles */}
      <div className="absolute top-[15%] left-[20%] w-3 h-3 rounded-full bg-[#F97316]/[0.12]" aria-hidden="true" />
      <div className="absolute top-[55%] right-[25%] w-2 h-2 rounded-full bg-[#0EA5E9]/[0.14]" aria-hidden="true" />
      <div className="absolute bottom-[15%] left-[40%] w-4 h-4 rounded-full bg-[#F3E8FF]/[0.14]" aria-hidden="true" />
      <div className="absolute top-[80%] right-[35%] w-2.5 h-2.5 rounded-full bg-[#FEF3E2]/[0.16]" aria-hidden="true" />
      {/* Small bone shapes via CSS */}
      <div className="absolute top-[25%] right-[8%] w-10 h-3 rounded-full bg-[#F97316]/[0.08] rotate-45 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-[30%] left-[5%] w-8 h-2.5 rounded-full bg-[#0EA5E9]/[0.08] -rotate-30 pointer-events-none" aria-hidden="true" />
      {/* Thin decorative lines */}
      <div className="absolute top-1/3 left-0 w-24 h-px bg-gradient-to-r from-transparent to-[#F97316]/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/3 right-0 w-32 h-px bg-gradient-to-l from-transparent to-[#0F172A]/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-2/3 left-0 w-16 h-px bg-gradient-to-r from-transparent to-[#E0F2FE]/20 pointer-events-none" aria-hidden="true" />

      {/* Diagonal Slice transition into cream (services) */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 md:h-20 block" preserveAspectRatio="none">
          <polygon points="0,0 1440,40 1440,80 0,80" fill="#FFF8F0" />
          <line x1="0" y1="0" x2="1440" y2="40" stroke="#F97316" strokeWidth="2" opacity="0.3" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image area with decorative frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative md:-ml-16"
          >
            {/* Background accent */}
            <div className="absolute -inset-4 rounded-3xl bg-[#0EA5E9]/8 -rotate-2" />
            {/* Main image */}
            <div className="relative rounded-2xl aspect-[4/5] overflow-hidden border-2 border-[#F97316]/20 shadow-[0_12px_60px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/woman and van.png"
                alt="Owner with grooming van"
                fill
                className="object-cover"
              />
            </div>
            {/* Stats card overlapping image */}
            <div className="absolute -bottom-6 -right-6 md:-right-10">
              <div className="bg-[#0F172A] text-white rounded-2xl p-5 shadow-[0_8px_40px_rgba(0,0,0,0.2)] max-w-[200px]">
                <p className="text-3xl font-[var(--font-display)]">4+</p>
                <p className="text-sm text-white/70 mt-1">
                  Years serving South Austin
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-wider font-[var(--font-accent)]">
              Our Story
            </p>

            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-tight text-[#0F172A]">
              {title}
            </h2>

            <div className="space-y-5 text-slate-600 leading-relaxed text-base md:text-lg">
              {paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <div className="mt-4 flex items-start gap-4 rounded-2xl bg-[#FFF8F0] p-5 border border-[#F97316]/10">
              <span className="text-3xl shrink-0">🐕</span>
              <div>
                <p className="font-semibold text-[#0F172A] text-sm">
                  Meet Barnaby
                </p>
                <p className="text-sm text-slate-600 mt-1 italic">
                  {barnabyIntro}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
