# Badiger Tours & Travels

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

Marketing and booking-enquiry website for **Badiger Tours & Travels**, a chauffeur-driven cab service based in Bengaluru offering local sightseeing, outstation round trips and one-way drops.

Built with the **Next.js App Router** and written in **TypeScript** — Next.js is the framework, TypeScript is just the language it's written in (GitHub's language bar shows "TypeScript" for that reason, not because it isn't a Next.js app).

## Tech stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router) + React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI components:** [shadcn/ui](https://ui.shadcn.com/) on Radix primitives
- **Forms:** React Hook Form + Zod
- **Motion:** GSAP, Motion
- **Carousels:** Embla
- **Notifications:** Sonner
- **Testing:** Playwright + axe-core

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # ESLint
```

## Project structure

```
app/            Next.js App Router pages and layouts
components/     Shared UI, layout, booking, fleet and pricing components
  ui/           shadcn/ui components
config/         Business/site configuration (contact details, WhatsApp links, etc.)
data/           Static content data (vehicles, destinations, services, FAQs, nav)
lib/            Shared utilities
public/         Static assets — images, video
legacy-static/  Archived copy of the previous static HTML site
```

## Pages

- `/` — Homepage
- `/about`, `/fleet`, `/services`, `/services/[slug]`
- `/destinations`, `/destinations/[slug]`
- `/tariffs`, `/contact`, `/privacy`
