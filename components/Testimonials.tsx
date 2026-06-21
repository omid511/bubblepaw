"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/config/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-[#0F172A] py-20 md:py-32 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-[#F97316] uppercase tracking-wider mb-4">
            Testimonials
          </p>
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-tight text-white">
            What our customers say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                className="text-[#F97316]/30 text-[64px] leading-none font-[var(--font-display)] select-none"
                aria-hidden="true"
              >
                &ldquo;
              </motion.span>
              <blockquote className="text-lg text-white/90 leading-relaxed italic font-sans -mt-6 mb-4">
                {t.quote}
              </blockquote>
              <div className="mt-auto">
                <p className="font-sans font-semibold text-white">{t.name}</p>
                <p className="text-sm text-slate-400 font-sans">{t.dog}</p>
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
