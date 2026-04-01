# jamieoarton.com — Site Design

**Date:** 2026-03-31
**Status:** Approved
**Design brief:** Obsidian `Strategy/Personal-Brand-Strategy/03-SITE-DESIGN-BRIEF.md`
**Personality synthesis:** Obsidian `Strategy/Personal-Brand-Strategy/Personality-Profiles/00-PERSONALITY-SYNTHESIS.md`

---

## One-Line Brief

A warm, bold, content-led site where the visitor is the hero and Jamie is the guide — built for authority, not vanity.

---

## Design Principles (ranked — higher wins conflicts)

1. **The customer is the hero.** Jamie is Obi-Wan, not Luke. Every headline frames the visitor's problem and Jamie's guidance.
2. **Bold and direct over quiet and subtle.** Loud confidence now. Quiet confidence earned later.
3. **Done beats perfect.** 80% shipped beats 100% never.
4. **Warm, not cold.** Light background, warm palette, human energy.
5. **Proof through demonstration.** Content IS the credibility.
6. **One path, one message.** No audience routing. One story, one scroll.
7. **Alive but not a treadmill.** Evergreen pages do the heavy lifting. Light "what's new" layer.
8. **Strategic Jamie, not natural Jamie.** Direct and authoritative, grounded in warmth and service.

---

## Tech Stack & Infrastructure

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Content:** MDX files in `/content/` directory
- **Hosting:** Vercel Pro (auto-deploy from `main` branch)
- **Domain:** jamieoarton.com (registered at names.co.uk, DNS pointed to Vercel)
- **Analytics:** GA4 + Microsoft Clarity + Vercel Analytics + Vercel Speed Insights
- **Email:** Substack embed/integration (no custom email infra)
- **Fonts:** Confident serif headlines + clean sans body (prototype options in browser)

---

## Site Structure

```
jamieoarton.com/
├── /                        Homepage (single scroll)
├── /about                   Guide story — why Jamie can help
├── /writing                 Blog index — topic clusters, not date archive
│   └── /writing/[slug]      Individual articles (MDX)
├── /videos                  YouTube embed gallery
├── /work-with-me            Three tiers: content, community, fractional
└── /newsletter              Substack landing/integration
```

**Future (built as content accumulates):**
```
├── /topics/[topic]          AISEO hub pages
└── /tools/[tool]            Free value tools
```

---

## Homepage Scroll Order

1. **Hero** — Visitor's problem + Jamie as guide. Primary CTA: newsletter. Secondary: work with me.
2. **Problem validation** — 3 cards: AI Advice Gap, Shadow AI, Strategy vs Tools. Empathy, not services. *(Testable — can toggle on/off)*
3. **How I help** — Three tiers: free content, community (AIFF), fractional (Bramforth link). Guide-framed.
4. **Latest thinking** — 2-3 content cards from /writing
5. **Latest video** — Single YouTube embed
6. **Newsletter CTA** — Substack embed. "Get my thinking in your inbox."
7. **Brief about** — 2 sentences + headshot + link to /about
8. **Footer** — Social links, Bramforth link, legal

---

## Core Pages

### /about
- Guide story, not biography. "Why I can help *you*"
- Government AI background (no employer named)
- "We're all human, all flawed" philosophy — the anti-guru differentiator
- Headshot, social links, newsletter CTA at bottom

### /writing
- All articles, filterable by topic tags
- Cards: title, description, read time, topics
- No pagination until 20+ articles

### /videos
- Curated YouTube embed gallery (not auto-sync)
- Simple grid, grows over time

### /work-with-me
- Three tiers, guide-framed ("choose your depth" not "choose your price"):
  - Free: writing, videos, newsletter
  - Community: AI Freedom Finders (Skool link)
  - Fractional: Bramforth AI (link out, not a duplicate services page)
- No prices shown

### /newsletter
- Dedicated Substack landing page
- What to expect, frequency, embed form
- Sample article links as proof of quality

---

## Content System (MDX)

### Directory structure
```
/content/
├── writing/
│   ├── three-people-three-sources.mdx
│   ├── shadow-ai-what-it-means.mdx
│   └── ai-strategy-not-a-list-of-tools.mdx
└── topics/          (future: AISEO hub pages)
```

### Article frontmatter
```yaml
---
title: "Article title"
description: "One-line description"
date: 2026-03-30
topics: ["ai-governance", "shadow-ai"]
featured: true
readTime: 8
canonical: null
crossPostedTo:
  - bramforth.ai/thinking/shadow-ai
schema: Article
---
```

### Content flow
1. Write as MDX → commit → push → Vercel deploys → live
2. Cross-post to Substack for email subscribers
3. May also appear on bramforth.ai/thinking/ (canonical stays on jamieoarton.com)

---

## Visual Design Tokens

### Colour system
| Token | Role | Direction |
|---|---|---|
| `background` | Page bg | Warm off-white |
| `surface` | Cards, contrast sections | Slightly different from bg |
| `text-primary` | Body text | Warm near-black |
| `text-secondary` | Meta, subtitles | Warm grey |
| `accent` | CTAs, links | Bold and warm (prototype options) |
| `accent-hover` | Hover states | Variant of accent |
| `border` | Dividers | Light warm grey |

### Typography
| Token | Role | Candidates |
|---|---|---|
| `font-display` | Headlines | Instrument Serif, Source Serif 4, Fraunces |
| `font-body` | Body, UI | Inter, Geist Sans, DM Sans |
| `font-mono` | Code blocks | Geist Mono |

### Other
- **Spacing:** Generous
- **Corners:** Slightly rounded (4-8px)
- **Shadows:** Subtle, warm-toned
- **Motion:** Subtle hover transitions only

---

## SEO & Meta

- JSON-LD schema markup on all pages (Person, Article, WebSite)
- Auto-generated meta tags from MDX frontmatter
- Open Graph + Twitter Card tags
- Canonical URL handling
- Structured heading hierarchy (H1 → H2 → H3)
- FAQ component available in MDX (with FAQPage schema)
- AISEO-specific tactics: separate research workstream before implementation

---

## Analytics (from day one)

- **Vercel Analytics** — Core Web Vitals, performance
- **Vercel Speed Insights** — real user monitoring
- **Google Analytics 4** — traffic, acquisition, conversions
- **Microsoft Clarity** — heatmaps, session recordings, scroll depth

---

## Photography

**Current:** One headshot (used everywhere)

**Needed (shoot brief for when ready):**
1. Relaxed headshot — warm, direct eye contact, slight smile
2. Three-quarter body — approachable, confident
3. Working shot — laptop, coffee, natural environment
4. Talking/gesturing — mid-conversation energy
5. Walking shot — movement, outdoor backdrop

**Mood:** "Trusted friend who happens to be brilliant at AI"
**Setting:** Real location, natural light, no studio

---

## Not Building

- No e-commerce or payments
- No login/members area
- No CMS (MDX in repo)
- No chat widget
- No multi-language
- No dark mode
