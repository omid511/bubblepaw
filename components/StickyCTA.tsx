"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import { useMagneticCursor } from "@/hooks/useMagneticCursor";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const magnetic = useMagneticCursor();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50 max-md:bottom-0 max-md:right-0 max-md:left-0"
        >
          <div
            ref={magnetic.ref as React.RefObject<HTMLDivElement>}
            onMouseMove={magnetic.handleMouseMove}
            onMouseLeave={magnetic.handleMouseLeave}
          >
            <a
              href="#contact"
              className="bg-[#F97316] text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 font-semibold hover:bg-[#EA580C] transition-colors max-md:rounded-none max-md:justify-center max-md:py-4"
            >
              <Calendar className="size-4" />
              Book Now
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
