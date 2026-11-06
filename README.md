# Sanket Gabhane — Portfolio (Next.js + SCSS)

Next.js 15 (App Router) · React 19 · TypeScript · SCSS · GSAP + Lenis · lucide-react

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where things are
- `data/content.ts` — all your content (profile, jobs, projects, toolbox). Edit text here.
- `app/page.tsx` — page markup (server component). `app/layout.tsx` — SEO metadata, fonts, JSON-LD.
- `components/` — `Motion` (smooth scroll + reveals), `ContactForm` (opens mail app), `Chips`, `SectionHeading`.
- `styles/globals.scss` — all styles (colour tokens at the top).

## Before publishing
- Set `SITE_URL` in `data/content.ts` to your real domain.
- `public/og-image.jpg` is the social share image.
