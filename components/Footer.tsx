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
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#0F172A] px-6 md:px-12 pt-16 pb-8 text-white"
    >
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
              {content.footer.tagline}. One-on-one grooming in the comfort of
              your driveway.
            </p>
            <div className="flex items-center gap-3 mt-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${s.name}`}
                  className="flex size-10 items-center justify-center rounded-xl bg-white/5 text-white/40 transition-all hover:bg-white/10 hover:text-white"
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
                    className="text-sm text-white/40 hover:text-white transition-colors"
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
                className="flex items-center gap-2.5 text-sm text-white/40 transition-colors hover:text-white"
              >
                <Phone className="size-3.5 shrink-0" aria-hidden="true" />
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2.5 text-sm text-white/40 transition-colors hover:text-white"
              >
                <Mail className="size-3.5 shrink-0" aria-hidden="true" />
                {contact.email}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/40">
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
    </motion.footer>
  );
}
