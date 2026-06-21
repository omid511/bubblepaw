"use client";

import { useState, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { PageReveal } from "@/components/PageReveal";

export default function Home() {
  const [revealDone, setRevealDone] = useState(false);

  return (
    <PageReveal onComplete={() => setRevealDone(true)}>
      <Navbar />
      <main id="main-content" className="scroll-mt-20">
        <Hero isReady={revealDone} />
        <TrustBar />
        <About />
        <Services />
        <Pricing />
        <Testimonials />
        <Gallery />
        <Suspense>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </PageReveal>
  );
}
