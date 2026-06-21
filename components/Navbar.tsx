"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { MenuIcon, XIcon } from "lucide-react"
import { useMagneticCursor } from "@/hooks/useMagneticCursor"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { contact } from "@/config/contact"

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const

export default function Navbar() {
  const [active, setActive] = useState<string>("#home")
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const magnetic = useMagneticCursor()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(`#${id}`)
          }
        },
        { rootMargin: "-20% 0px -70% 0px" }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/70 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      )}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-6 md:px-12">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-2xl" aria-hidden="true">🐾</span>
          <span className="font-[var(--font-display)] text-xl font-normal tracking-tight text-[#0F172A]">
            Bubble Paws
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "relative px-1 py-2 text-sm font-medium transition-colors",
                  active === link.href
                    ? "text-[#F97316] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#F97316] after:rounded-full"
                    : "text-[#0F172A]/60 hover:text-[#0F172A]"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4 ml-auto">
          <a
            href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
            className="text-sm font-medium text-[#0F172A]/70 hover:text-[#0F172A] transition-colors"
          >
            {contact.phone}
          </a>
          <div
            ref={magnetic.ref as React.RefObject<HTMLDivElement>}
            onMouseMove={magnetic.handleMouseMove}
            onMouseLeave={magnetic.handleMouseLeave}
          >
            <a href="#contact">
              <Button
                size="sm"
                className="bg-[#F97316] hover:bg-[#EA580C] text-white rounded-lg px-5 py-2 text-sm font-semibold transition-colors"
              >
                Book Now
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center size-10 rounded-full hover:bg-black/5 transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </button>
      </div>

      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F97316] origin-left"
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-black/5 overflow-hidden"
          >
            <ul className="flex flex-col gap-1 p-5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block px-4 py-3 text-base font-medium transition-colors",
                      active === link.href
                        ? "text-[#F97316] font-semibold border-l-2 border-[#F97316] pl-4"
                        : "text-[#0F172A]/70 hover:bg-black/5 hover:text-[#0F172A]"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a href="#contact" onClick={() => setOpen(false)}>
                  <Button className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white rounded-lg py-3 text-base font-semibold">
                    Book Now
                  </Button>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
