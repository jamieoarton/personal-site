# Personal Site - Agent Guide

## Project Overview

Personal/brand website for Jamie Oarton (bramforth-ai). Currently in early development
with a style comparison page showcasing four hero design variants (neon, minimal, light,
glassmorphism). No routing beyond the single page yet.

**Owner:** `jamieoarton` GitHub org (personal brand)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (via PostCSS plugin)
- **Fonts:** Geist Sans + Geist Mono (next/font)
- **React:** v19
- **Linting:** ESLint 9 with next/core-web-vitals + next/typescript configs

## Project Structure

```
src/
  app/
    layout.tsx      # Root layout (metadata, fonts, html shell)
    page.tsx        # Main page - style comparison with 4 hero variants
    globals.css     # Global styles / Tailwind imports
public/             # Static assets (SVGs, favicon)
next.config.ts      # Next.js config (currently empty)
eslint.config.mjs   # ESLint flat config
tsconfig.json       # TypeScript config (path alias: @/* -> ./src/*)
postcss.config.mjs  # PostCSS with @tailwindcss/postcss
```

## Commands

| Command          | Description              |
|------------------|--------------------------|
| `npm run dev`    | Start dev server (:3000) |
| `npm run build`  | Production build         |
| `npm run start`  | Serve production build   |
| `npm run lint`   | Run ESLint               |

No test framework is configured yet.

## Conventions and Rules

- **App Router only** - use `src/app/` directory structure with Next.js App Router patterns
- **Client components** must have `"use client"` directive at top of file
- **Path alias** - use `@/*` to import from `src/*`
- **Tailwind v4** - utility-first styling; no separate tailwind.config file (v4 uses CSS-based config)
- **TypeScript strict** - all code must pass strict type checking
- **Metadata** in `layout.tsx` needs updating from default "Create Next App" placeholder
- **No em-dashes** - never use em-dashes (—) in any content, copy, or articles. Use hyphens ( - ), commas, or restructure instead
- Do not commit `.env` files, `node_modules/`, or `.next/` build output
