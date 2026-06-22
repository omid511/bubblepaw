"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { GalleryLightbox } from "./GalleryLightbox";

const images = [
  { src: "/images/1.png", name: "Max", breed: "Goldendoodle" },
  { src: "/images/2.png", name: "Bella", breed: "Yorkshire Terrier" },
  { src: "/images/3.png", name: "Charlie", breed: "Labrador Retriever" },
  { src: "/images/4.png", name: "Luna", breed: "Australian Shepherd" },
  { src: "/images/5.png", name: "Cooper", breed: "Standard Poodle" },
  { src: "/images/6.png", name: "Daisy", breed: "Shih Tzu" },
];

const allImages = [...images, ...images];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; name: string; breed: string } | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const didDrag = useRef(false);
  const startX = useRef(0);
  const totalDrag = useRef(0);
  const dragOffset = useRef(0);
  const animOffset = useRef(0);
  const animFrame = useRef<number>(0);
  const speed = useRef(0.5);

  const updatePosition = useCallback(() => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = `translateX(${animOffset.current + dragOffset.current}px)`;
  }, []);

  useEffect(() => {
    let lastTime = performance.now();

    function tick(now: number) {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      if (!isDragging.current && trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth / 2;
        animOffset.current -= speed.current * dt * 100;
        if (animOffset.current <= -trackWidth) {
          animOffset.current += trackWidth;
        }
        updatePosition();
      }
      animFrame.current = requestAnimationFrame(tick);
    }

    animFrame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrame.current);
  }, [updatePosition]);

  function handlePointerDown(e: React.PointerEvent) {
    if (!wrapperRef.current) return;
    isDragging.current = true;
    didDrag.current = false;
    totalDrag.current = 0;
    startX.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (!isDragging.current) return;
    const delta = e.clientX - startX.current;
    startX.current = e.clientX;
    dragOffset.current += delta;
    totalDrag.current += Math.abs(delta);
    updatePosition();
  }

  function handlePointerUp() {
    isDragging.current = false;
    if (totalDrag.current > 5) {
      didDrag.current = true;
      setTimeout(() => { didDrag.current = false; }, 50);
    }
  }

  return (
    <section id="gallery" className="scroll-mt-20 relative bg-[#FFF8F0] py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <p className="text-sm font-semibold text-[#F97316] uppercase tracking-wider mb-4 font-[var(--font-accent)]">
            See the difference
          </p>
          <motion.h2
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-tight text-[#0F172A] mb-5"
          >
            Before &amp; after
          </motion.h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            Real transformations from real appointments.
          </p>
        </motion.div>
      </div>

      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(254,243,226,1)_0%,_rgba(255,248,240,1)_100%)] pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative overflow-hidden"
      >
        <div
          ref={wrapperRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="cursor-grab active:cursor-grabbing select-none"
        >
          <div ref={trackRef} className="gallery-track py-4">
            {allImages.map((img, i) => (
              <div
                key={`${img.name}-${i}`}
                className="shrink-0 group"
                onClick={() => { if (!didDrag.current) setSelectedImage(img); }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_50px_rgba(0,0,0,0.18)] transition-shadow">
                  <img
                    src={img.src}
                    alt={`${img.name} before and after grooming`}
                    className="h-[250px] sm:h-[300px] md:h-[350px] w-auto max-w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    draggable={false}
                  />
                  <span className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                    Before
                  </span>
                  <span className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                    After
                  </span>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 pt-10">
                    <p className="text-white font-semibold text-lg leading-tight">{img.name}</p>
                    <p className="text-white/70 text-sm">{img.breed}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FFF8F0] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FFF8F0] to-transparent z-10" />
      </motion.div>

      <div className="h-16 md:h-20 bg-gradient-to-b from-[#FFF8F0] to-white" aria-hidden="true" />

      <GalleryLightbox
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        image={selectedImage}
      />
    </section>
  );
}
