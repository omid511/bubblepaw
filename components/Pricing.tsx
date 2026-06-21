"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricing } from "@/config/pricing";

const mainServices = pricing.filter(
  (p) => !p.name.startsWith("Teeth") && !p.name.startsWith("De-shed")
);
const addOns = pricing.filter(
  (p) => p.name.startsWith("Teeth") || p.name.startsWith("De-shed")
);

const SERVICE_SLUGS: Record<string, string> = {
  "Full Groom": "full-groom",
  "Bath & Brush": "bath-brush",
  "Nail Trim Only": "nail-trim",
  "Teeth Brushing": "teeth-brushing",
  "De-shed Treatment": "de-shed",
};

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-white py-20 md:py-32 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[#F97316] uppercase tracking-wider mb-4">
            Pricing
          </p>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl font-normal leading-[1.1] tracking-tight text-[#0F172A] mb-5">
            Simple, honest pricing
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Every quote is upfront — no surprises. Final price depends on breed,
            size, and coat condition.
          </p>
        </motion.div>

        {/* Main services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {mainServices.map((item, index) => {
            const isPopular = index === 0;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-xl p-7 transition-shadow flex flex-col ${
                  isPopular
                    ? "bg-[#0F172A] text-white shadow-2xl md:scale-[1.03]"
                    : "bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-md"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F97316] text-white text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                {isPopular ? (
                  <h3 className="text-xl text-white mb-1">
                    {item.name}
                  </h3>
                ) : (
                  <h3 className="text-xl font-semibold text-[#0F172A] mb-1">
                    {item.name}
                  </h3>
                )}

                <p
                  className={`text-sm mb-1 ${
                    isPopular ? "text-white/60" : "text-slate-500"
                  }`}
                >
                  {item.idealFor}
                </p>

                <div className="flex items-baseline gap-1.5 mt-4 mb-4">
                  <span
                    className={`text-4xl font-semibold ${
                      isPopular ? "text-white" : "text-[#0F172A]"
                    }`}
                  >
                    ${item.price}
                  </span>
                  <span
                    className={`text-sm ${
                      isPopular ? "text-white/50" : "text-slate-400"
                    }`}
                  >
                    starting at
                  </span>
                </div>

                <p
                  className={`text-sm mb-5 ${
                    isPopular ? "text-white/50" : "text-slate-400"
                  }`}
                >
                  {item.duration}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {item.included.map((line) => (
                    <li key={line} className="flex items-start gap-2.5">
                      <Check
                        className={`size-4 mt-0.5 shrink-0 ${
                          isPopular ? "text-[#F97316]" : "text-[#F97316]"
                        }`}
                      />
                      <span
                        className={`text-sm leading-snug ${
                          isPopular ? "text-white/80" : "text-slate-600"
                        }`}
                      >
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`?service=${SERVICE_SLUGS[item.name] ?? ""}#contact`}
                  className={`mt-auto block w-full text-center rounded-full py-3 text-sm font-semibold transition-all ${
                    isPopular
                      ? "bg-[#F97316] hover:bg-[#EA580C] text-white shadow-[0_2px_12px_rgba(249,115,22,0.4)]"
                      : "bg-[#0F172A]/5 hover:bg-[#0F172A]/10 text-[#0F172A]"
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

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm font-semibold text-[#0F172A]/40 uppercase tracking-wider mb-4 text-center">
            Add-ons
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {addOns.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-4 bg-white rounded-2xl px-6 py-4 border border-slate-200 shadow-sm"
              >
                <div className="size-8 rounded-full bg-[#FFF8F0] flex items-center justify-center shrink-0 border border-[#F97316]/10">
                  <Check className="size-4 text-[#F97316]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0F172A]">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    +${item.price} · {item.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-slate-400 mt-10 max-w-lg mx-auto"
        >
          All prices are starting rates. Final pricing depends on breed, size,
          and coat condition.
        </motion.p>
      </div>
    </section>
  );
}
