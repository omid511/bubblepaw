"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/config/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 relative bg-[#0F172A] py-12 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 md:h-20 block" preserveAspectRatio="none">
          <path d="M0,30 C120,55 240,15 360,40 C480,65 600,10 720,35 C840,58 960,20 1080,45 C1200,68 1320,25 1440,38 L1440,0 L0,0 Z" fill="#0F172A" />
        </svg>
      </div>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[8%] left-[10%] w-1.5 h-1.5 rounded-full bg-[#F97316]/[0.20]" />
        <div className="absolute top-[15%] right-[20%] w-1 h-1 rounded-full bg-white/[0.15]" />
        <div className="absolute top-[25%] left-[45%] w-1.5 h-1.5 rounded-full bg-[#F97316]/[0.18]" />
        <div className="absolute top-[35%] right-[8%] w-1 h-1 rounded-full bg-white/[0.12]" />
        <div className="absolute top-[50%] left-[20%] w-2 h-2 rounded-full bg-[#F97316]/[0.15]" />
        <div className="absolute top-[55%] right-[35%] w-1 h-1 rounded-full bg-white/[0.15]" />
        <div className="absolute top-[65%] left-[60%] w-1.5 h-1.5 rounded-full bg-[#F97316]/[0.15]" />
        <div className="absolute top-[75%] left-[12%] w-1 h-1 rounded-full bg-white/[0.12]" />
        <div className="absolute top-[80%] right-[15%] w-1.5 h-1.5 rounded-full bg-[#F97316]/[0.18]" />
        <div className="absolute top-[88%] left-[40%] w-1 h-1 rounded-full bg-white/[0.15]" />
        <div className="absolute top-[42%] left-[75%] w-1 h-1 rounded-full bg-[#0EA5E9]/[0.20]" />
        <div className="absolute top-[20%] left-[70%] w-1.5 h-1.5 rounded-full bg-[#F3E8FF]/[0.15]" />
        <div className="absolute top-[70%] right-[50%] w-1 h-1 rounded-full bg-[#ECFDF5]/[0.18]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/0 via-[#0F172A]/0 to-[#0F172A]/50 pointer-events-none" aria-hidden="true" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-white/[0.04] pointer-events-none hidden md:block" aria-hidden="true" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-[#F97316]/[0.06] pointer-events-none hidden md:block" aria-hidden="true" />

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 md:h-20 block" preserveAspectRatio="none">
          <path d="M0,20 C180,60 360,10 540,40 C720,70 900,15 1080,45 C1200,60 1320,30 1440,35 L1440,80 L0,80 Z" fill="#FFF8F0" />
        </svg>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#FFF8F0] to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-[#F97316] uppercase tracking-wider mb-4 font-[var(--font-accent)]">
            Testimonials
          </p>
          <motion.h2
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-tight text-white"
          >
            What our customers say
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col ${i === 0 ? "md:row-span-2" : ""}`}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                className="text-[#F97316]/20 text-5xl md:text-[80px] leading-none font-[var(--font-display)] select-none"
                aria-hidden="true"
              >
                &ldquo;
              </motion.span>
              <blockquote className={`text-lg text-white/90 leading-relaxed font-light -mt-8 mb-4 ${i === 0 ? "text-xl" : ""}`}>
                {t.quote}
              </blockquote>
              <div className="mt-auto">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-slate-300">{t.dog}</p>
                <div className="flex gap-0.5 mt-2">
                  {[...Array(5)].map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 + j * 0.05, type: "spring", stiffness: 500, damping: 20 }}
                    >
                      <Star className="size-4 fill-[#F97316] text-[#F97316]" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
