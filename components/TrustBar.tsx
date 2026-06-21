"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Heart, Star, Calendar } from "lucide-react";

const items = [
  { icon: ShieldCheck, text: "Fully Insured" },
  { icon: MapPin, text: "Local Austin Business" },
  { icon: Heart, text: "500+ Dogs Groomed" },
  { icon: Star, text: "5-Star Rated" },
  { icon: Calendar, text: "Same-Week Availability" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#FFF8F0] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0">
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
                className={`flex flex-col items-center gap-2 text-center ${
                  i < items.length - 1 ? "md:border-r md:border-[#0F172A]/10" : ""
                }`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, type: "spring", stiffness: 500, damping: 20 }}
                >
                  <Icon className="size-5 text-[#F97316]" />
                </motion.div>
                <span className="text-sm font-medium text-[#0F172A]">
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
