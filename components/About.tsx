"use client";

import { motion } from "framer-motion";
import { content } from "@/config/content";

const { title, story, barnabyIntro } = content.about;

export default function About() {
  const paragraphs = story.split("\n\n");

  return (
    <section id="about" className="scroll-mt-20 bg-white py-20 md:py-32 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image area with decorative frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background accent */}
            <div className="absolute -inset-4 rounded-3xl bg-[#0EA5E9]/5 -rotate-2" />
            {/* Main image */}
            <div className="relative rounded-2xl bg-gradient-to-br from-[#0EA5E9]/10 to-[#F97316]/10 aspect-[4/5] flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="text-7xl mb-4">🐾</div>
                <p className="text-sm font-medium text-[#0F172A]/30">
                  Barnaby the rescue pup
                </p>
              </div>
            </div>
            {/* Overlapping accent card */}
            <div className="absolute -bottom-6 -right-6 bg-[#0F172A] text-white rounded-2xl p-5 shadow-2xl max-w-[200px]">
              <p className="text-3xl font-[var(--font-display)]">4+</p>
              <p className="text-sm text-white/70 mt-1">
                Years serving South Austin
              </p>
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
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-wider">
              Our Story
            </p>

            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-tight text-[#0F172A]">
              {title}
            </h2>

            <div className="space-y-5 text-slate-500 leading-relaxed text-base md:text-lg">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-4 flex items-start gap-4 rounded-2xl bg-[#FFF8F0] p-5 border border-[#F97316]/10">
              <span className="text-3xl shrink-0">🐕</span>
              <div>
                <p className="font-semibold text-[#0F172A] text-sm">
                  Meet Barnaby
                </p>
                <p className="text-sm text-slate-500 mt-1 italic">
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
