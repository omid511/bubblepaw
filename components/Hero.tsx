"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, PawPrint } from "lucide-react";
import { contact } from "@/config/contact";
import { useMagneticCursor } from "@/hooks/useMagneticCursor";

export default function Hero({ isReady = false }: { isReady?: boolean }) {
  const magnetic = useMagneticCursor();
  return (
    <section
      id="home"
      className="scroll-mt-20 relative min-h-screen flex items-center bg-[#FFF8F0]"
    >
      {/* Floating bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="bubble size-[60px] top-[15%] left-[10%]" style={{ animationDelay: "0s" }} />
        <div className="bubble size-[35px] top-[25%] right-[15%]" style={{ animationDelay: "1.5s" }} />
        <div className="bubble size-[80px] top-[60%] left-[20%]" style={{ animationDelay: "3s" }} />
        <div className="bubble size-[25px] top-[40%] left-[50%]" style={{ animationDelay: "4.5s" }} />
        <div className="bubble size-[45px] top-[70%] right-[25%]" style={{ animationDelay: "2s" }} />
        <div className="bubble size-[30px] top-[85%] left-[40%]" style={{ animationDelay: "5s" }} />
      </div>

      {/* Organic gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="organic-blob w-[300px] md:w-[500px] h-[300px] md:h-[500px] -top-20 -left-20 bg-[#F97316]" />
        <div className="organic-blob w-[350px] md:w-[600px] h-[350px] md:h-[600px] top-1/4 -right-20 md:-right-40 bg-[#0F172A]" />
        <div className="organic-blob w-[250px] md:w-[400px] h-[250px] md:h-[400px] -bottom-20 left-1/3 bg-[#F97316]" />
      </div>

      {/* Wave transition into white (about) */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="#FFFFFF" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 py-24 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6 max-w-xl">
            <motion.h1
              className="font-[var(--font-display)] text-4xl sm:text-6xl md:text-8xl font-normal leading-[1.15] tracking-tight text-[#0F172A]"
            >
              {["Grooming without", "the car ride."].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 40, filter: "blur(20px)", scale: 1.1 }}
                  animate={isReady ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 } : {}}
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
              className="text-lg text-[#475569] max-w-md leading-relaxed"
            >
              Professional dog grooming at your doorstep. Stress-free for dogs,
              convenient for owners.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <div
                ref={magnetic.ref as React.RefObject<HTMLDivElement>}
                onMouseMove={magnetic.handleMouseMove}
                onMouseLeave={magnetic.handleMouseLeave}
              >
                <a href="#contact">
                  <motion.button
                    whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(249,115,22,0.45)" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="bg-[#F97316] hover:bg-[#EA580C] text-white text-base px-8 py-4 rounded-full font-semibold shadow-md transition-colors"
                  >
                    Book Now
                  </motion.button>
                </a>
              </div>
              <a
                href={`tel:+15125550123`}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#0F172A]/70 hover:text-[#F97316] border border-[#0F172A]/15 hover:border-[#F97316]/30 rounded-lg px-4 py-2 transition-colors"
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
              {/* Rotated decorative element behind image */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[#F97316]/8 rotate-3" />
              {/* Background decorative circles */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#FFF8F0] via-[#FEF3E2] to-[#F1F5F9] shadow-xl" />
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#F97316]/15" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#0F172A]/8" />

              {/* Main card */}
              <div className="relative m-8 rounded-2xl overflow-hidden h-[calc(100%-4rem)] shadow-[0_12px_60px_rgba(0,0,0,0.15)]">
                <Image
                  src="/images/dog in van.png"
                  alt="Happy dog in mobile grooming van"
                  fill
                  className="object-cover"
                />
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
                  <p className="text-xs text-[#475569]">
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
