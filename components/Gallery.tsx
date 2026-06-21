"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const galleryItems = [
  { name: "Max", breed: "Goldendoodle" },
  { name: "Bella", breed: "Yorkshire Terrier" },
  { name: "Charlie", breed: "Labrador Retriever" },
  { name: "Luna", breed: "Australian Shepherd" },
  { name: "Cooper", breed: "Standard Poodle" },
  { name: "Daisy", breed: "Shih Tzu" },
];

function ImagePlaceholder({
  label,
  alt,
  className,
}: {
  label: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center rounded-xl overflow-hidden aspect-square ${className}`}
    >
      <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider text-[#0F172A]/40 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full z-10">
        {label}
      </span>
      <Camera className="h-8 w-8 text-[#0F172A]/15" aria-hidden="true" />
      <span className="sr-only">{alt}</span>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 bg-white py-20 md:py-32 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[#F97316] uppercase tracking-wider mb-4">
            Gallery
          </p>
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-tight text-[#0F172A] mb-5">
            Before &amp; after
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Real transformations from real appointments.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="break-inside-avoid"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="group relative rounded-2xl overflow-hidden bg-[#FFF8F0] border border-[#0F172A]/5 hover:shadow-lg transition-shadow">
                {/* Before/After pair */}
                <div className="grid grid-cols-2 gap-px bg-[#0F172A]/5">
                  <ImagePlaceholder
                    label="Before"
                    alt={`${item.name} before grooming`}
                    className="bg-[#FFF8F0]"
                  />
                  <ImagePlaceholder
                    label="After"
                    alt={`${item.name} after grooming`}
                    className="bg-white"
                  />
                </div>
                {/* Label */}
                <div className="p-4">
                  <p className="font-semibold text-[#0F172A] text-sm">
                    {item.name}
                  </p>
                  <p className="text-xs text-[#0F172A]/40 mt-0.5">
                    {item.breed}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
