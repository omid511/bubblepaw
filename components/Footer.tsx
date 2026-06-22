"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { content } from "@/config/content";
import { contact } from "@/config/contact";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

const { hours, serviceArea, copyright } = content.footer;

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/bubblepaws",
    icon: InstagramIcon,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/bubblepaws",
    icon: FacebookIcon,
  },
] as const;

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Footer() {
  return (
    <footer
      className="bg-[#0F172A] px-6 md:px-12 pt-16 pb-8 text-white relative overflow-hidden"
    >
      {/* Decorative paw print row at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F97316]/20 to-transparent pointer-events-none" aria-hidden="true" />
      <div className="absolute top-4 left-0 right-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="flex justify-center gap-8 md:gap-16 opacity-[0.06]">
          {["🐾", "🐾", "🐾", "🐾", "🐾", "🐾", "🐾", "🐾"].map((p, i) => (
            <span key={i} className="text-xl select-none" style={{ transform: `rotate(${(i * 15) - 50}deg)` }}>🐾</span>
          ))}
        </div>
      </div>
      {/* Floating bubbles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="bubble size-[50px] top-[20%] left-[5%] !bg-white/[0.02] !border-white/[0.03]" style={{ animationDelay: "0s" }} />
        <div className="bubble size-[70px] top-[50%] right-[10%] !bg-white/[0.02] !border-white/[0.03]" style={{ animationDelay: "2s" }} />
        <div className="bubble size-[30px] top-[75%] left-[30%] !bg-white/[0.02] !border-white/[0.03]" style={{ animationDelay: "4s" }} />
      </div>
      {/* Color accent blobs */}
      <div className="absolute top-[15%] right-[25%] w-[200px] h-[200px] rounded-full bg-[#F97316]/[0.04] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-[20%] left-[10%] w-[150px] h-[150px] rounded-full bg-[#E0F2FE]/[0.03] pointer-events-none" aria-hidden="true" />
      <div className="absolute top-[60%] right-[5%] w-[120px] h-[120px] rounded-full bg-[#F3E8FF]/[0.03] pointer-events-none" aria-hidden="true" />
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">🐾</span>
              <span className="font-[var(--font-display)] text-2xl font-normal tracking-tight">
                Bubble Paws
              </span>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed">
              Professional grooming that comes to you. One dog at a time, no cages,
              no stress — just a clean, happy pup and a groomer who remembers their name.
            </p>
            <div className="flex items-center gap-3 mt-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${s.name}`}
                  className="flex size-10 items-center justify-center rounded-xl bg-white/5 text-white/70 transition-all hover:bg-white/10 hover:text-white"
                >
                  <s.icon className="size-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
              >
                <Phone className="size-3.5 shrink-0" aria-hidden="true" />
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
              >
                <Mail className="size-3.5 shrink-0" aria-hidden="true" />
                {contact.email}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="size-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p>{serviceArea}</p>
                  <p className="mt-1">{hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">{copyright}</p>
          <div className="flex items-center gap-4 text-sm text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
