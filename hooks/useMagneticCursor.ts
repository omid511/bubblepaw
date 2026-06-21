"use client";
import { useRef, useCallback, type RefObject } from "react";

export function useMagneticCursor(strength = 0.15) {
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    ref.current.style.transition = "transform 0.15s cubic-bezier(0.23, 1, 0.32, 1)";
  }, [strength]);

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
    ref.current.style.transform = "translate(0, 0)";
    setTimeout(() => {
      if (ref.current) ref.current.style.transition = "";
    }, 500);
  }, []);

  return { ref: ref as unknown as RefObject<HTMLElement>, handleMouseMove, handleMouseLeave };
}
