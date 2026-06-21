"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Wind } from "lucide-react";
import { pricing } from "@/config/pricing";

const mainServices = pricing.filter(
  (p) => !p.name.startsWith("Teeth") && !p.name.startsWith("De-shed")
);
const addOns = pricing.filter(
  (p) => p.name.startsWith("Teeth") || p.name.startsWith("De-shed")
);

const ADDON_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "Teeth Brushing": Sparkles,
  "De-shed Treatment": Wind,
};

const SERVICE_SLUGS: Record<string, string> = {
  "Full Groom": "full-groom",
  "Bath & Brush": "bath-brush",
  "Nail Trim Only": "nail-trim",
  "Teeth Brushing": "teeth-brushing",
  "De-shed Treatment": "de-shed",
};

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 relative bg-white py-20 md:py-32 px-6 md:px-12">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#F97316]/[0.06]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#0F172A]/[0.04]" />
        <div className="absolute top-[30%] left-[5%] w-[150px] h-[150px] rounded-full bg-[#FEF3E2]/80" />
        <div className="absolute bottom-[20%] right-[10%] w-[120px] h-[120px] rounded-full bg-[#E0F2FE]/70" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #F97316 0.8px, transparent 0.8px)", backgroundSize: "32px 32px" }} />
      </div>
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 md:h-20 block" preserveAspectRatio="none">
          <path d="M0,30 C120,55 240,15 360,40 C480,65 600,10 720,35 C840,58 960,20 1080,45 C1200,68 1320,25 1440,38 L1440,80 L0,80 Z" fill="#0F172A" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[#F97316] uppercase tracking-wider mb-4 font-[var(--font-accent)]">
            Pricing
          </p>
          <motion.h2
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-[var(--font-display)] text-4xl md:text-5xl font-normal leading-[1.1] tracking-tight text-[#0F172A] mb-5"
          >
            Simple, honest pricing
          </motion.h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            Every quote is upfront — no surprises. Final price depends on breed,
            size, and coat condition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {mainServices.map((item, index) => {
            const isPopular = index === 0;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={!isPopular ? { y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)", backgroundColor: "#FEF3E2" } : undefined}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-xl p-7 transition-shadow flex flex-col ${
                  isPopular
                    ? "bg-[#0F172A] text-white shadow-[0_12px_60px_rgba(249,115,22,0.25)]"
                    : "bg-white ring-1 ring-slate-200 shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_50px_rgba(0,0,0,0.12)] border-t-2 border-t-[#F97316]/20"
                }`}
              >
                {isPopular && (
                  <>
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#F97316]/25 via-[#FEF3E2]/40 to-[#F97316]/15 blur-sm pointer-events-none -z-10" aria-hidden="true" />
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F97316] text-white text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  </>
                )}

                <h3 className={`text-xl mb-1 ${isPopular ? "text-white" : "font-semibold text-[#0F172A]"}`}>
                  {item.name}
                </h3>

                <p className={`text-sm mb-1 ${isPopular ? "text-white/60" : "text-slate-500"}`}>
                  {item.idealFor}
                </p>

                <div className="flex items-baseline gap-1.5 mt-4 mb-4">
                  <span className={`text-4xl font-semibold ${isPopular ? "text-white" : "text-[#0F172A]"}`}>
                    ${item.price}
                  </span>
                  <span className={`text-sm ${isPopular ? "text-white/50" : "text-slate-500"}`}>
                    starting at
                  </span>
                </div>

                <p className={`text-sm mb-5 ${isPopular ? "text-white/50" : "text-slate-500"}`}>
                  {item.duration}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {item.included.map((line) => (
                    <li key={line} className="flex items-start gap-2.5">
                      <Check className={`size-4 mt-0.5 shrink-0 ${isPopular ? "text-[#F97316]" : "text-[#F97316]"}`} />
                      <span className={`text-sm leading-snug ${isPopular ? "text-white/80" : "text-slate-600"}`}>
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`?service=${SERVICE_SLUGS[item.name] ?? ""}#contact`}
                  className={`mt-auto block w-full text-center rounded-full py-3 text-sm font-semibold transition-all ${
                    isPopular
                      ? "bg-[#F97316] hover:bg-[#EA580C] text-white shadow-md"
                      : "border border-[#F97316]/30 text-[#F97316] hover:bg-[#F97316]/10"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    const slug = SERVICE_SLUGS[item.name] ?? "";
                    window.history.pushState(null, "", `?service=${slug}#contact`);
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Book Now
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm font-semibold text-[#0F172A]/60 uppercase tracking-wider mb-4 text-center font-[var(--font-accent)]">
            Add-ons
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {addOns.map((item) => {
              const AddonIcon = ADDON_ICONS[item.name];
              return (
              <div
                key={item.name}
                className="flex items-center gap-4 bg-[#FFF8F0] rounded-2xl px-6 py-4 border border-[#F97316]/15 shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="size-8 rounded-full bg-[#FFF8F0] flex items-center justify-center shrink-0 border border-[#F97316]/10">
                  {AddonIcon ? <AddonIcon className="size-4 text-[#F97316]" /> : <span className="text-sm text-[#F97316] font-medium">&ndash;</span>}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#0F172A]">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-600">
                    +${item.price} · {item.duration}
                  </p>
                </div>
              </div>
            );
            })}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-slate-500 mt-10 max-w-lg mx-auto"
        >
          All prices are starting rates. Final pricing depends on breed, size,
          and coat condition.
        </motion.p>
      </div>
    </section>
  );
}
