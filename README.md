# NAED SOFTWARES — naedsoftwares.online

A premium, original software showcase and portfolio site for NAED SOFTWARES, built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Stack

- Next.js (App Router, Turbopack)
- React 19 + TypeScript (strict)
- Tailwind CSS v4 with a custom CSS-variable design system
- Framer Motion for the handful of deliberate motion moments (mobile menu, hero architecture diagram)
- Lucide React for iconography (with three custom-drawn social glyphs — see note below)
- Self-hosted fonts via `@fontsource` (Sora, Inter, IBM Plex Mono) — no external font requests

## Getting started

```bash
npm install
npm dev

## Build

```bash
npm run build
npm run start
```

settings

1. **Social & contact links** — `lib/config.ts` contains placeholder GitHub, LinkedIn, Facebook and email addresses (`github.com/naedsoftwares`, etc.). Replace these with your real profile URLs and inbox before going live.
2. **Live demo URLs** — as projects go live, add a `liveUrl` to the relevant entry in `data/projects.ts`. The project detail page will automatically swap the "Live Demo Coming Soon" badge for a working "Open Live Demo" button.
3. **Formspree endpoint** — the feedback form posts to the endpoint in `lib/config.ts` (`formspreeEndpoint`). It's already set to the one you provided; change it there if it ever changes.
4. **Favicon / OG image** — a default Next.js favicon ships in `app/favicon.ico`. Swap it for a NAED SOFTWARES mark before launch, and consider adding a dedicated `opengraph-image` for richer link previews.

## Project structure

```
app/                  Routes (home, projects, project detail, about, contact, feedback)
components/           UI building blocks, organized by feature area
data/projects.ts      Single source of truth for all project content
lib/config.ts         Site-wide config: brand, links, Formspree endpoint
lib/utils.ts          cn() class-merging helper
public/projects/      Original abstract cover art (SVG) per project
```

## Adding a new project

Add an entry to the `projects` array in `data/projects.ts`, then add a matching mockup component under `components/project-preview/mockups/` and register it in `components/project-preview/project-preview.tsx`. The rest of the site (grid, cards, detail page, sitemap, feedback dropdown) picks it up automatically.

## Notes on originality

- All five project "posters" are custom-built dashboard mockups made from React/Tailwind (stat cards, tables, bar charts) — not screenshots or stock photography.
- The GitHub/LinkedIn/Facebook icons are hand-drawn minimal glyphs, because `lucide-react` v1 removed brand icons. They live in `components/ui/social-icons.tsx`.
- The visual identity (deep graphite background, amber/cyan accent pairing, Sora/Inter/IBM Plex Mono type system) was designed specifically for this brief.

## Deploying

The project is a standard Next.js app and deploys to Vercel with zero configuration. Push to a Git repo and import it in Vercel, or run `vercel` from this directory.
