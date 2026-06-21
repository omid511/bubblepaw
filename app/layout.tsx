import type { Metadata } from "next";
import { Lora, Quicksand, Caveat } from "next/font/google";
import "./globals.css";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-quicksand" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

export const metadata: Metadata = {
  title: {
    default: "Bubble Paws — Mobile Dog Grooming in South Austin",
    template: "%s | Bubble Paws",
  },
  description:
    "Professional mobile dog grooming that comes to you. Stress-free for dogs, convenient for owners. Serving South Austin.",
  openGraph: {
    title: "Bubble Paws — Mobile Dog Grooming in South Austin",
    description:
      "Professional mobile dog grooming that comes to you. Stress-free for dogs, convenient for owners.",
    type: "website",
    locale: "en_US",
    siteName: "Bubble Paws",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bubble Paws — Mobile Dog Grooming in South Austin",
    description:
      "Professional mobile dog grooming that comes to you. Stress-free for dogs, convenient for owners.",
  },
  other: {
    "theme-color": "#F97316",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bubble Paws",
  description:
    "Professional mobile dog grooming that comes to you. Stress-free for dogs, convenient for owners.",
  areaServed: "South Austin, TX",
  openingHours: "Mo-Sa 08:00-18:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen antialiased ${lora.variable} ${quicksand.variable} ${caveat.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-[#E8722A] focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
