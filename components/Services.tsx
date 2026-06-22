"use client";

import { motion } from "framer-motion";
import { Scissors, Droplets, Sparkles, Wind, Heart } from "lucide-react";
import { services } from "@/config/services";

const icons = [Scissors, Droplets, Heart, Sparkles, Wind];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 relative bg-[#F8FAFC] py-20 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute -right-32 top-1/4 w-[500px] h-[500px] rounded-full bg-[#F97316]/[0.08] pointer-events-none hidden md:block" aria-hidden="true" />
      <div className="absolute -left-40 bottom-1/4 w-[450px] h-[450px] rounded-full bg-[#0F172A]/[0.06] pointer-events-none hidden md:block" aria-hidden="true" />
      <div className="absolute top-16 right-[20%] w-[140px] h-[140px] rounded-full bg-[#ECFDF5]/80 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-24 left-[15%] w-[100px] h-[100px] rounded-full bg-[#FEF3E2]/70 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-[50%] right-[8%] w-[80px] h-[80px] rounded-full bg-[#F3E8FF]/60 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-[15%] right-[30%] w-[70px] h-[70px] rounded-full bg-[#E0F2FE]/50 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle, #F97316 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]" aria-hidden="true" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, #0F172A 20px, #0F172A 20.5px)", backgroundSize: "28px 28px" }} />

      <div className="mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24 md:pl-8"
          >
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-wider mb-4 font-[var(--font-accent)]">
              What We Do
            </p>
            <motion.h2
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-[var(--font-display)] text-4xl md:text-5xl font-normal leading-[1.1] tracking-tight text-[#0F172A] mb-6"
            >
              Our Services
            </motion.h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-md">
              Every service is one-on-one in our fully equipped mobile van. We
              bring everything — you just open the door.
            </p>
          </motion.div>

          <div className="flex flex-col">
            {services.map((service, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group"
                >
                  <div className={`flex items-start gap-5 py-7 border-b border-slate-200 last:border-b-0 -mx-4 px-4 rounded-lg group-hover:bg-[#F97316]/[0.05] transition-colors ${index % 2 === 1 ? "md:ml-6" : ""}`}>
                    <div className="shrink-0 size-14 rounded-2xl bg-[#F97316]/12 flex items-center justify-center group-hover:bg-[#F97316]/20 transition-colors">
                      <Icon className="size-6 text-[#F97316] group-hover:text-[#EA580C] transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-[#0F172A] mb-1">
                        {service.name}
                      </h3>
                      <p className="text-base text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 md:h-20 block" preserveAspectRatio="none">
          <path d="M0,50 L200,20 L400,45 L600,10 L800,40 L1000,15 L1200,35 L1440,5 L1440,80 L0,80 Z" fill="#FFFFFF" />
          <path d="M0,50 L200,20 L400,45 L600,10 L800,40 L1000,15 L1200,35 L1440,5" stroke="#F97316" strokeWidth="1.5" opacity="0.15" fill="none" />
        </svg>
      </div>
    </section>
  );
}
