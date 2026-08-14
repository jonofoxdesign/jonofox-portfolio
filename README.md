# jonofox.com

Personal portfolio for Jono Fox — Principal Product Designer. Case studies, about page, and positioning copy for developer-tools and complex B2B product design work.

Live at [jonofox.com](https://jonofox.com).

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- [next-intl](https://next-intl.dev) for English/German localisation (`/en`, `/de`)
- Dynamic OG images via `next/og` (`opengraph-image.tsx` per route)
- [PostHog](https://posthog.com) for analytics
- Deployed on [Vercel](https://vercel.com)

## Structure

- `src/app/[locale]/` — localised routes (home, `/work`, `/about`, `/contact`, `/resume`, per-case-study pages)
- `src/app/[locale]/work/*` — the five case studies (Aerospike provisioning, Aerospike Voyager, design systems, Sygnum, Goodlife)
- `messages/en.json`, `messages/de.json` — translation strings
- `public/` — images, logos, resume PDFs, case-study assets

Case study copy is authored and versioned in a separate personal vault, not in this repo.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Pushes to `main` deploy automatically via Vercel.
