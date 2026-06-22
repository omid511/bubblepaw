"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2, Phone, Mail, Clock, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contact } from "@/config/contact";
import { content } from "@/config/content";
import { isDemo } from "@/lib/demo";

const DOG_SIZES = [
  "Small (under 20 lbs)",
  "Medium (20-50 lbs)",
  "Large (50+ lbs)",
] as const;

const SERVICE_PACKAGES = [
  "Full Groom (~90 min)",
  "Bath & Brush (~60 min)",
  "Nail Trim Only (~20 min)",
  "Teeth Brushing Add-on (~15 min)",
  "De-shed Treatment Add-on (~30 min)",
  "Not sure yet",
] as const;

const SERVICE_SLUGS: Record<string, string> = {
  "full-groom": "Full Groom (~90 min)",
  "bath-brush": "Bath & Brush (~60 min)",
  "nail-trim": "Nail Trim Only (~20 min)",
  "teeth-brushing": "Teeth Brushing Add-on (~15 min)",
  "de-shed": "De-shed Treatment Add-on (~30 min)",
};

type FormData = {
  servicePackage: string;
  name: string;
  phone: string;
  email: string;
  dogBreed: string;
  dogSize: string;
  notes: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const INITIAL_FORM: FormData = {
  servicePackage: "",
  name: "",
  phone: "",
  email: "",
  dogBreed: "",
  dogSize: "",
  notes: "",
};

function validate(fields: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!fields.servicePackage)
    errors.servicePackage = "Please select a service package.";
  if (!fields.name || fields.name.trim().length < 2)
    errors.name = "Name must be at least 2 characters.";
  if (
    !fields.phone ||
    !/^\+?1?\d{10,14}$/.test(fields.phone.replace(/[\s\-()]/g, ""))
  )
    errors.phone = "Enter a valid phone number.";
  if (
    !fields.email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)
  )
    errors.email = "Enter a valid email address.";
  if (!fields.dogBreed || fields.dogBreed.trim().length < 2)
    errors.dogBreed = "Dog breed must be at least 2 characters.";
  if (!fields.dogSize) errors.dogSize = "Please select a dog size.";
  return errors;
}

const fieldFade = {
  hidden: { opacity: 0, x: -16, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Contact() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<keyof FormData>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    const slug = searchParams.get("service");
    if (slug && SERVICE_SLUGS[slug]) {
      setForm((prev) => ({ ...prev, servicePackage: SERVICE_SLUGS[slug] }));
    }
  }, [searchParams]);

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched.has(field)) {
      const updated = { ...form, [field]: value };
      const fieldErrors = validate(updated);
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
    }
  }

  function handleBlur(field: keyof FormData) {
    setTouched((prev) => new Set(prev).add(field));
    const fieldErrors = validate(form);
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);
    const allErrors = validate(form);
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      setTouched(new Set(Object.keys(form) as (keyof FormData)[]));
      const firstErrorField = (
        Object.keys(allErrors) as (keyof FormData)[]
      )[0];
      const el = document.getElementById(firstErrorField);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);

    if (isDemo) {
      await new Promise((r) => setTimeout(r, 1500));
      console.log("Contact form (demo):", form);
      setSubmitted(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "Email service is not configured. Please call us directly."
        );
      }
      await emailjs.send(
        serviceId,
        templateId,
        {
          service_package: form.servicePackage,
          from_name: form.name,
          from_phone: form.phone,
          from_email: form.email,
          dog_breed: form.dogBreed,
          dog_size: form.dogSize,
          notes: form.notes,
        },
        publicKey
      );
      setSubmitted(true);
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or call us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function resetForm() {
    setForm(INITIAL_FORM);
    setErrors({});
    setTouched(new Set());
    setSubmitted(false);
    setSubmitError(null);
  }

  if (submitted) {
    return (
      <section id="contact" className="scroll-mt-20 bg-[#FFF8F0] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="mx-auto max-w-lg rounded-3xl bg-white p-10 text-center shadow-xl border border-[#0F172A]/5"
          >
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="mb-3 text-2xl font-[var(--font-display)] text-[#0F172A]">
              Message sent!
            </h2>
            <p className="mb-8 text-slate-500 leading-relaxed">
              Thanks! We&apos;ll get back to you within 24 hours. Need help
              sooner? Call us at{" "}
              <a
                href={`tel:${contact.phone}`}
                className="font-medium text-[#F97316] hover:underline"
              >
                {contact.phone}
              </a>
            </p>
            <Button
              onClick={resetForm}
              variant="outline"
              className="rounded-full"
            >
              Send another message
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  const inputFields: {
    id: keyof FormData;
    label: string;
    type?: string;
    placeholder?: string;
    autoComplete?: string;
    spellCheck?: boolean;
  }[] = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Your name",
      autoComplete: "name",
    },
    {
      id: "phone",
      label: "Phone",
      type: "tel",
      placeholder: "(512) 555-0123",
      autoComplete: "tel",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "you@example.com",
      autoComplete: "email",
      spellCheck: false,
    },
    {
      id: "dogBreed",
      label: "Dog Breed",
      type: "text",
      placeholder: "e.g. Golden Retriever",
    },
  ];

  return (
    <section id="contact" className="scroll-mt-20 bg-[#FFF8F0] py-20 md:py-32 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-20">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-wider mb-4">
                Get in Touch
              </p>
              <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-tight text-[#0F172A] mb-5">
                Let&apos;s get your pup booked
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Fill out the form and we&apos;ll reach out within 24 hours to
                schedule your appointment.
              </p>
            </div>

            <div className="space-y-5">
              <a
                href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-4 group"
              >
                <div className="size-12 rounded-2xl bg-[#F97316]/10 flex items-center justify-center group-hover:bg-[#F97316]/20 transition-colors">
                  <Phone className="size-5 text-[#F97316]" />
                </div>
                <div>
                  <p className="text-xs text-[#0F172A]/40 uppercase tracking-wider">
                    Phone
                  </p>
                  <p className="font-medium text-[#0F172A]">
                    {contact.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="size-12 rounded-2xl bg-[#0EA5E9]/10 flex items-center justify-center group-hover:bg-[#0EA5E9]/20 transition-colors">
                  <Mail className="size-5 text-[#0EA5E9]" />
                </div>
                <div>
                  <p className="text-xs text-[#0F172A]/40 uppercase tracking-wider">
                    Email
                  </p>
                  <p className="font-medium text-[#0F172A]">
                    {contact.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="size-12 rounded-2xl bg-[#0F172A]/5 flex items-center justify-center shrink-0">
                  <Clock className="size-5 text-[#0F172A]/40" />
                </div>
                <div>
                  <p className="text-xs text-[#0F172A]/40 uppercase tracking-wider">
                    Hours
                  </p>
                  <p className="font-medium text-[#0F172A]">
                    {content.footer.hours}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="size-12 rounded-2xl bg-[#F97316]/10 flex items-center justify-center shrink-0">
                  <MapPin className="size-5 text-[#F97316]" />
                </div>
                <div>
                  <p className="text-xs text-[#0F172A]/40 uppercase tracking-wider">
                    Service Area
                  </p>
                  <p className="font-medium text-[#0F172A]">
                    {content.footer.serviceArea}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white rounded-3xl p-8 shadow-xl border border-[#0F172A]/5"
            >
              <div className="space-y-5">
                {/* Service Package select */}
                <motion.div
                  custom={0}
                  variants={fieldFade}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Label htmlFor="servicePackage">Service Package</Label>
                  <Select
                    value={form.servicePackage}
                    onValueChange={(val) =>
                      handleChange("servicePackage", val ?? "")
                    }
                  >
                    <SelectTrigger
                      id="servicePackage"
                      aria-required
                      aria-invalid={!!errors.servicePackage}
                      aria-describedby={
                        errors.servicePackage
                          ? "servicePackage-error"
                          : undefined
                      }
                      className="w-full mt-1.5 rounded-xl"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICE_PACKAGES.map((pkg) => (
                        <SelectItem key={pkg} value={pkg}>
                          {pkg}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.servicePackage && (
                    <p
                      id="servicePackage-error"
                      className="mt-1.5 text-xs text-red-500"
                      role="alert"
                    >
                      {errors.servicePackage}
                    </p>
                  )}
                </motion.div>

                {inputFields.map((field, i) => (
                  <motion.div
                    key={field.id}
                    custom={i}
                    variants={fieldFade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <Label htmlFor={field.id}>{field.label}</Label>
                    <Input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.id]}
                      onChange={(e) =>
                        handleChange(field.id, e.target.value)
                      }
                      onBlur={() => handleBlur(field.id)}
                      autoComplete={field.autoComplete}
                      spellCheck={field.spellCheck}
                      aria-required
                      aria-invalid={!!errors[field.id]}
                      aria-describedby={
                        errors[field.id]
                          ? `${field.id}-error`
                          : undefined
                      }
                      className="mt-1.5 rounded-xl"
                    />
                    {errors[field.id] && (
                      <p
                        id={`${field.id}-error`}
                        className="mt-1.5 text-xs text-red-500"
                        role="alert"
                      >
                        {errors[field.id]}
                      </p>
                    )}
                  </motion.div>
                ))}

                {/* Dog Size select */}
                <motion.div
                  custom={4}
                  variants={fieldFade}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Label htmlFor="dogSize">Dog Size</Label>
                  <Select
                    value={form.dogSize}
                    onValueChange={(val) =>
                      handleChange("dogSize", val ?? "")
                    }
                  >
                    <SelectTrigger
                      id="dogSize"
                      aria-required
                      aria-invalid={!!errors.dogSize}
                      aria-describedby={
                        errors.dogSize ? "dogSize-error" : undefined
                      }
                      className="w-full mt-1.5 rounded-xl"
                    >
                      <SelectValue placeholder="Select a size" />
                    </SelectTrigger>
                    <SelectContent>
                      {DOG_SIZES.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.dogSize && (
                    <p
                      id="dogSize-error"
                      className="mt-1.5 text-xs text-red-500"
                      role="alert"
                    >
                      {errors.dogSize}
                    </p>
                  )}
                </motion.div>

                {/* Notes */}
                <motion.div
                  custom={5}
                  variants={fieldFade}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any special requests or notes..."
                    value={form.notes}
                    onChange={(e) =>
                      handleChange("notes", e.target.value)
                    }
                    className="mt-1.5 rounded-xl"
                  />
                </motion.div>

                {submitError && (
                  <p className="text-sm text-red-500" role="alert">
                    {submitError}
                  </p>
                )}

                <motion.div
                  custom={6}
                  variants={fieldFade}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white rounded-full py-6 text-base font-semibold shadow-[0_4px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_6px_28px_rgba(249,115,22,0.4)] transition-all"
                  >
                    {isSubmitting && (
                      <Loader2 className="mr-2 size-4 animate-spin" />
                    )}
                    {!isSubmitting && (
                      <Send className="mr-2 size-4" />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
