# Bubble Paws Mobile Dog Grooming Website

Single-page marketing site for Bubble Paws — a mobile dog grooming business in South Austin. Professional, mobile-first, and easy for the client to update.

**Live Demo:** [bubblepaw.vercel.app](https://bubblepaw.vercel.app)

---

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19)
- **Styling:** Tailwind CSS 4
- **Components:** shadcn/ui
- **Animation:** Framer Motion
- **Forms:** EmailJS
- **Testing:** Playwright
- **Deployment:** Vercel

---

## Features

- 10-section single-page site (Hero, About, Services, Pricing, Testimonials, Gallery, Contact, Footer)
- Mobile-first responsive design
- Contact form with validation (EmailJS in production)
- Before & after photo gallery
- Framer Motion scroll-reveal animations with `prefers-reduced-motion` support
- SEO: metadata, JSON-LD structured data, semantic HTML, sitemap
- Accessible: skip-to-content, ARIA labels, focus traps, WCAG AA contrast
- Demo mode for previews without backend setup

---

## Getting Started

```bash
git clone https://github.com/omid5/bubblepaw.git
cd bubblepaw
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
├── app/              # Next.js App Router pages
├── components/       # React UI components
├── config/           # Editable content (no code changes needed)
│   ├── content.ts    # Hero, about, footer text
│   ├── pricing.ts    # Service prices
│   ├── services.ts   # Service descriptions
│   ├── testimonials.ts # Customer reviews
│   └── contact.ts    # Phone, email
├── docs/             # PRD, design system, config guide
├── public/           # Static assets (images, favicon)
└── playwright/       # E2E tests
```

---

## Configuration

All page content lives in `config/`. Edit values, push to GitHub, Vercel auto-deploys.

```ts
// config/pricing.ts
export const pricing = [
  { name: "Full Groom", description: "Bath, haircut, nail trim, ear clean", price: 65 },
];
```

See [docs/CONFIG-GUIDE.md](docs/CONFIG-GUIDE.md) for the full editing guide.

---

## Demo Mode

Set `NEXT_PUBLIC_DEMO=true` to run without EmailJS:

```bash
NEXT_PUBLIC_DEMO=true npm run dev
```

Demo mode fakes form submissions (1.5s spinner + success message, logs to console).

---

## Deployment

1. Push to GitHub
2. Connect the repo on [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js and deploys on every push

Environment variables (production only):
- `NEXT_PUBLIC_DEMO` — leave unset or `false`
- EmailJS keys if using real form submissions

---

## License

MIT
