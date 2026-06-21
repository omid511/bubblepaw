"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Heart, Star, Calendar } from "lucide-react";

const items = [
  { icon: ShieldCheck, text: "No cages. Ever.", bg: "bg-[#FEF3E2]/80" },
  { icon: UserCheck, text: "Same groomer every visit.", bg: "bg-[#E0F2FE]/80" },
  { icon: Heart, text: "500+ happy pups groomed", bg: "bg-[#F3E8FF]/80" },
  { icon: Star, text: "5-star rated on Google", bg: "bg-[#ECFDF5]/80" },
  { icon: Calendar, text: "Same-week availability", bg: "bg-[#FEF3E2]/80" },
];

export default function TrustBar() {
  return (
    <section className="relative bg-white py-12 md:py-16 overflow-hidden">
      {/* Top wave from cream (hero) to white (this section) */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 md:h-16 block" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,30 C1380,25 1260,40 1080,20 C720,0 360,50 0,20 Z" fill="#FFF8F0" />
        </svg>
      </div>
      {/* Subtle paw print background pattern */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 38c-1.5 0-3-0.8-3-2.5s1.5-2.5 3-2.5 3 0.8 3 2.5-1.5 2.5-3 2.5zm-8-10c-1.5 0-2.5-1-2.5-2.5s1-2.5 2.5-2.5 2.5 1 2.5 2.5-1 2.5-2.5 2.5zm16 0c-1.5 0-2.5-1-2.5-2.5s1-2.5 2.5-2.5 2.5 1 2.5 2.5-1 2.5-2.5 2.5zm-12-6c-1.5 0-2.5-1-2.5-2.5s1-2.5 2.5-2.5 2.5 1 2.5 2.5-1 2.5-2.5 2.5zm8 0c-1.5 0-2.5-1-2.5-2.5s1-2.5 2.5-2.5 2.5 1 2.5 2.5-1 2.5-2.5 2.5z' fill='%23F97316' opacity='0.035'/%3E%3C/svg%3E\")", backgroundSize: "60px 60px" }} />
      {/* Decorative dots */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-4 left-[12%] size-2 rounded-full bg-[#F97316]/[0.08]" />
        <div className="absolute top-8 right-[18%] size-1.5 rounded-full bg-[#0EA5E9]/[0.1]" />
        <div className="absolute bottom-6 left-[35%] size-1 rounded-full bg-[#F97316]/[0.06]" />
        <div className="absolute bottom-4 right-[40%] size-2.5 rounded-full bg-[#E0F2FE]/60" />
        <div className="absolute top-1/2 left-[5%] size-1.5 rounded-full bg-[#F3E8FF]/60" />
        <div className="absolute top-1/3 right-[8%] size-1 rounded-full bg-[#ECFDF5]/80" />
      </div>

      {/* Horizontal gradient bar */}
      <div
        className="absolute inset-x-0 top-0 bottom-0 bg-gradient-to-r from-transparent via-[#F97316]/[0.06] to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 md:px-12 relative">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
                className="flex flex-col items-center gap-2.5 text-center rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60 shadow-md hover:shadow-lg transition-shadow px-4 py-5"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, type: "spring", stiffness: 500, damping: 20 }}
                >
                  <div className={`size-10 rounded-xl ${item.bg} flex items-center justify-center`}>
                    <Icon className="size-5 text-[#F97316]" />
                  </div>
                </motion.div>
                <span className="text-sm font-semibold text-[#0F172A]">
                  {item.text}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
