"use client";

import { motion } from "framer-motion";
import { Scissors, Droplets, Sparkles, Wind, Heart } from "lucide-react";
import { services } from "@/config/services";

const icons = [Scissors, Droplets, Heart, Sparkles, Wind];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-[#FFF8F0] py-20 md:py-32 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          {/* Left: Heading and intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-wider mb-4">
              What We Do
            </p>
            <h2 className="font-[var(--font-display)] text-4xl md:text-5xl font-normal leading-[1.1] tracking-tight text-[#0F172A] mb-6">
              Our Services
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed max-w-md">
              Every service is one-on-one in our fully equipped mobile van. We
              bring everything — you just open the door.
            </p>
          </motion.div>

          {/* Right: Service list */}
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
                  <div className="flex items-start gap-5 py-7 border-b border-slate-200 last:border-b-0 -mx-4 px-4 rounded-lg">
                    <div className="shrink-0 size-12 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:bg-[#F97316]/10 transition-colors">
                      <Icon className="size-5 text-[#0F172A]/60 group-hover:text-[#F97316] transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-[#0F172A] mb-1">
                        {service.name}
                      </h3>
                      <p className="text-base text-slate-500 leading-relaxed">
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
    </section>
  );
}
