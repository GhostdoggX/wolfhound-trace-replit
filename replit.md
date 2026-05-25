# Wolfhound Trace

Professional OSINT and digital intelligence investigation services website, migrated from Next.js to Vite + React.

## Run & Operate

- Start the site: use the `artifacts/wolfhound-trace: web` workflow
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind v4 (`@tailwindcss/vite`)
- Routing: Wouter
- Animations: GSAP + ScrollTrigger, Framer Motion
- Smooth scroll: Lenis
- Fonts: IBM Plex Sans, IBM Plex Mono, Bebas Neue (Google Fonts)

## Where things live

- `artifacts/wolfhound-trace/` — the entire frontend site
- `artifacts/wolfhound-trace/src/index.css` — design tokens (oklch colors, font vars, grid-bg, pulseGlow)
- `artifacts/wolfhound-trace/src/App.tsx` — top-level router
- `artifacts/wolfhound-trace/src/pages/` — route pages: home, about, story, privacy
- `artifacts/wolfhound-trace/src/components/` — all section and UI components
- `artifacts/wolfhound-trace/public/images/` — wolfhound-logo.png, wolfhound-vigilant.jpg, wolfhound-wireframe.jpg

## Architecture decisions

- Pure frontend — no backend/API needed; all pages are static React components
- Tailwind v4 with `@tailwindcss/vite` (no postcss.config.mjs — conflicts with v4)
- Uses oklch() color values throughout (not HSL) for perceptually uniform color
- `next/link` replaced with `wouter` Link; `"use client"` directives removed
- Wouter `<Router base>` strips the Vite BASE_URL prefix for correct path-based routing in Replit proxy

## Product

- 4 routes: `/` (full single-page scrollable site), `/about`, `/story`, `/privacy`
- Hero section with animated split-flap display tiles (WOLFHOUND / TRACE), optional sound effects
- Horizontal-scrolling Intel and Services sections with GSAP scroll animations
- Principles section with highlight parallax text effects
- Side navigation dots + floating dropdown menu with active-section tracking
- Dark monochrome + orange (#f97316) design throughout

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Do NOT run `pnpm dev` at root; use `restart_workflow` for the `artifacts/wolfhound-trace: web` workflow
- Tailwind v4: no postcss.config.mjs needed — it conflicts with `@tailwindcss/vite`
- Original theme uses `oklch()` values, not `hsl()` — keep them as-is in index.css
- The `--font-bebas` CSS variable is referenced in components as `font-[var(--font-bebas)]`

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- Migration backup lives in `.migration-backup/` — original Next.js source
