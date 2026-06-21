"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MenuIcon, XIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

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
          ? "bg-white/70 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      )}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-2xl" aria-hidden="true">🐾</span>
          <span className="font-[var(--font-display)] text-xl font-normal tracking-tight text-[#0F172A]">
            Bubble Paws
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors rounded-full",
                  active === link.href
                    ? "text-[#F97316]"
                    : "text-[#0F172A]/60 hover:text-[#0F172A]"
                )}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-[#F97316]/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#contact">
            <Button
              size="sm"
              variant="ghost"
              className="text-[#F97316] hover:bg-[#F97316]/10 hover:text-[#F97316] rounded-full px-5 text-sm font-semibold transition-colors"
            >
              Book Now
            </Button>
          </a>
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
                      "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      active === link.href
                        ? "bg-[#F97316]/10 text-[#F97316]"
                        : "text-[#0F172A]/70 hover:bg-black/5 hover:text-[#0F172A]"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a href="#contact" onClick={() => setOpen(false)}>
                  <Button className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white rounded-full py-3 text-base font-semibold">
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
