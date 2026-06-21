"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

interface GalleryLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  image: { src: string; name: string; breed: string } | null;
}

export function GalleryLightbox({ isOpen, onClose, image }: GalleryLightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-white/80 hover:text-white transition-colors"
          >
            <X className="size-8" />
          </button>

          {/* Image container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative z-10 max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-h-[80vh] rounded-2xl overflow-hidden bg-white shadow-2xl">
              <Image
                src={image.src}
                alt={`${image.name} - ${image.breed}`}
                width={1200}
                height={900}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-semibold text-white">{image.name}</h3>
              <p className="text-white/70">{image.breed}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
