"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, PawPrint } from "lucide-react";
import { contact } from "@/config/contact";

export default function Hero({ isReady = false }: { isReady?: boolean }) {
  return (
    <section
      id="home"
      className="scroll-mt-20 relative min-h-screen flex items-center overflow-hidden bg-[#FFF8F0]"
    >
      <div className="relative mx-auto max-w-7xl px-6 md:px-12 py-24 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6 max-w-xl">
            <motion.h1
              className="font-[var(--font-display)] text-6xl md:text-8xl font-normal leading-[0.95] tracking-tight text-[#0F172A]"
            >
              {["We come to", "you."].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                  animate={isReady ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-lg text-[#64748B] max-w-md leading-relaxed"
            >
              Professional dog grooming at your doorstep. Stress-free for dogs,
              convenient for owners.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <a href="#contact">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(249,115,22,0.45)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="bg-[#F97316] hover:bg-[#EA580C] text-white text-base px-8 py-4 rounded-full font-semibold shadow-[0_4px_20px_rgba(249,115,22,0.35)] transition-colors"
                >
                  Book Now
                </motion.button>
              </a>
              <a
                href={`tel:+15125550123`}
                className="flex items-center gap-2 text-sm text-[#64748B] hover:text-[#0F172A] transition-colors py-3"
              >
                <Phone className="size-4" />
                {contact.phone}
              </a>
            </motion.div>
          </div>

          {/* Right: Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isReady ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[420px] h-[420px]">
              {/* Background decorative circles */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#FFF8F0] via-[#FEF3E2] to-[#F1F5F9]" />
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#F97316]/10" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#0F172A]/5" />

              {/* Main card */}
              <div className="relative m-8 rounded-2xl bg-gradient-to-br from-[#FFF8F0] to-[#F1F5F9] flex items-center justify-center h-[calc(100%-4rem)]">
                <PawPrint className="size-24 text-[#F97316]/30" strokeWidth={1} />
              </div>

              {/* Floating accent */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
              >
                <div className="size-10 rounded-full bg-[#F97316]/10 flex items-center justify-center">
                  <PawPrint className="size-5 text-[#F97316]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#0F172A]">
                    Stress-free
                  </p>
                  <p className="text-xs text-[#64748B]">
                    One-on-one grooming
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
