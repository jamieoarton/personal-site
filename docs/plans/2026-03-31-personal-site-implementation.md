# jamieoarton.com Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a warm, bold, content-led personal brand site for Jamie Oarton — guide-framed, AISEO-ready, deployed on Vercel.

**Architecture:** Next.js 16 App Router with MDX content files. Design tokens in CSS variables. Reusable layout components (Nav, Footer, Section). MDX pipeline for /writing articles with frontmatter-driven metadata and schema markup. All pages server-rendered by default.

**Tech Stack:** Next.js 16, React 19, TypeScript 5, Tailwind CSS v4, @next/mdx, next-mdx-remote, Vercel Pro

---

## Task 1: Clean Slate — Remove Demo Code, Set Up Design Tokens

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`
- Delete old public SVGs: `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`

**Step 1: Replace `globals.css` with design token system**

```css
@import "tailwindcss";

:root {
  /* Colour tokens — Palette A (warm amber accent) */
  --color-bg: #FAFAF7;
  --color-surface: #F2F0EB;
  --color-text: #1A1A1A;
  --color-text-secondary: #6B6B6B;
  --color-accent: #C2703E;
  --color-accent-hover: #A85C30;
  --color-border: #E5E2DC;

  /* Palette B (warm teal accent) — uncomment to test */
  /* --color-accent: #2A7D6E; */
  /* --color-accent-hover: #1F6358; */

  /* Palette C (terracotta accent) — uncomment to test */
  /* --color-accent: #C4573A; */
  /* --color-accent-hover: #A64830; */

  /* Typography */
  --font-display: var(--font-instrument-serif);
  --font-body: var(--font-inter);
  --font-mono: var(--font-geist-mono);
}

@theme inline {
  --color-bg: var(--color-bg);
  --color-surface: var(--color-surface);
  --color-text: var(--color-text);
  --color-text-secondary: var(--color-text-secondary);
  --color-accent: var(--color-accent);
  --color-accent-hover: var(--color-accent-hover);
  --color-border: var(--color-border);
  --font-display: var(--font-display);
  --font-body: var(--font-body);
  --font-mono: var(--font-mono);
}

body {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body), system-ui, sans-serif;
}
```

**Step 2: Update `layout.tsx` — swap fonts, fix metadata**

```tsx
import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Instrument Serif for display headings
const instrumentSerif = localFont({
  src: "../fonts/InstrumentSerif-Regular.ttf",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jamie Oarton — AI Strategy & Fractional CAIO",
    template: "%s | Jamie Oarton",
  },
  description:
    "Helping businesses navigate AI with clarity. Writer, advisor, and fractional Chief AI Officer.",
  metadataBase: new URL("https://jamieoarton.com"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Jamie Oarton",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

**Step 3: Download Instrument Serif font file**

Run: `mkdir -p src/fonts && curl -L -o src/fonts/InstrumentSerif-Regular.ttf "https://github.com/google/fonts/raw/main/ofl/instrumentserif/InstrumentSerif-Regular.ttf"`

Note: If Instrument Serif doesn't feel right visually, swap for Source Serif 4 or Fraunces later. The variable system makes this a one-line change.

Also try Inter from `next/font/google` — if it doesn't resolve for Next.js 16, use Geist Sans as fallback (already tested and working).

**Step 4: Replace `page.tsx` with a minimal placeholder**

```tsx
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-5xl mb-4">Jamie Oarton</h1>
        <p className="text-text-secondary text-lg">Site under construction</p>
      </div>
    </main>
  );
}
```

**Step 5: Delete unused public SVGs**

Run: `rm public/file.svg public/globe.svg public/next.svg public/vercel.svg public/window.svg`

**Step 6: Verify dev server runs**

Run: `npm run dev`
Expected: Site loads at localhost:3000 with warm off-white background, serif heading, placeholder text.

**Step 7: Commit**

```bash
git add -A
git commit -m "chore: clean slate — remove demo code, add design tokens and fonts"
```

---

## Task 2: Shared Layout Components — Nav & Footer

**Files:**
- Create: `src/components/nav.tsx`
- Create: `src/components/footer.tsx`
- Modify: `src/app/layout.tsx` (add Nav and Footer)

**Step 1: Create Nav component**

```tsx
// src/components/nav.tsx
import Link from "next/link";

const navLinks = [
  { href: "/writing", label: "Writing" },
  { href: "/videos", label: "Videos" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/about", label: "About" },
];

export function Nav() {
  return (
    <nav className="border-b border-border px-6 py-4 md:px-8">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-display text-xl text-text">
          Jamie Oarton
        </Link>
        <div className="hidden md:flex gap-6 text-sm text-text-secondary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-text transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
```

Note: Mobile hamburger menu can be added later. "Done beats perfect" — desktop nav first.

**Step 2: Create Footer component**

```tsx
// src/components/footer.tsx
import Link from "next/link";

const socialLinks = [
  { href: "https://jamieoarton.substack.com", label: "Substack" },
  { href: "https://linkedin.com/in/jamieoarton", label: "LinkedIn" },
  { href: "https://youtube.com/@jamieoarton", label: "YouTube" },
  { href: "https://tiktok.com/@jamieoarton", label: "TikTok" },
  { href: "https://x.com/jamieoarton", label: "X" },
  { href: "https://instagram.com/jamieoarton", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-8 text-sm text-text-secondary">
        <div>
          <p className="font-display text-text text-lg mb-2">Jamie Oarton</p>
          <p>
            Co-founder of{" "}
            <a
              href="https://bramforth.ai"
              className="text-accent hover:text-accent-hover transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bramforth AI
            </a>
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-text transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-4">
          <Link href="/newsletter" className="hover:text-text transition-colors">
            Newsletter
          </Link>
        </div>
      </div>
    </footer>
  );
}
```

Note: Social link URLs are placeholders — Jamie to confirm actual handles. Legal links (privacy, terms) can be added later or link to Bramforth's.

**Step 3: Add Nav and Footer to layout.tsx**

Add imports and wrap `{children}` between `<Nav />` and `<Footer />` in the body.

**Step 4: Verify**

Run: `npm run dev`
Expected: Nav at top with links, footer at bottom with social links, placeholder content between.

**Step 5: Commit**

```bash
git add src/components/nav.tsx src/components/footer.tsx src/app/layout.tsx
git commit -m "feat: add nav and footer layout components"
```

---

## Task 3: Homepage — Hero + Problem + How I Help Sections

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Build the homepage with all scroll sections**

The homepage is a server component (no `"use client"`). All sections in one file to start — extract to components later only if needed.

```tsx
// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="px-6 py-20 md:py-32 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl mb-6 leading-tight">
            You know AI matters.<br />
            You don't know where to start.
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
            I help businesses cut through the noise and build AI strategies
            that actually work. No hype. No jargon. Just clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/newsletter"
              className="bg-accent hover:bg-accent-hover text-white font-medium px-8 py-3 rounded-md transition-colors"
            >
              Get My Latest Thinking
            </Link>
            <Link
              href="/work-with-me"
              className="border border-border hover:border-accent text-text font-medium px-8 py-3 rounded-md transition-colors"
            >
              Work With Me
            </Link>
          </div>
        </div>
      </section>

      {/* Problem validation */}
      <section className="px-6 py-16 md:px-8 bg-surface">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-center mb-12">
            Sound familiar?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "You're getting conflicting advice",
                description:
                  "Your CEO reads one thing, your CTO hears another, your CFO sees different numbers. Everyone has a different version of what AI means for your business.",
              },
              {
                title: "Your team is already using AI — without you",
                description:
                  "They're pasting company data into ChatGPT, using tools you haven't approved, making decisions you don't know about. It's not malicious. It's just happening.",
              },
              {
                title: "You have a list of tools, not a strategy",
                description:
                  "You've bought licences, run pilots, maybe even hired someone. But you still can't answer: what's the plan? What are we actually trying to achieve?",
              },
            ].map((card) => (
              <div key={card.title} className="p-6 rounded-lg border border-border bg-bg">
                <h3 className="font-display text-lg mb-3">{card.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-text-secondary mt-8 text-sm">
            This isn't your fault. The advice landscape is broken.
          </p>
        </div>
      </section>

      {/* How I help */}
      <section className="px-6 py-16 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-center mb-4">
            I can help. Choose your depth.
          </h2>
          <p className="text-center text-text-secondary mb-12 max-w-xl mx-auto">
            Whether you want to learn on your own, with others, or want direct hands-on guidance.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-border">
              <p className="text-accent font-medium text-sm mb-2">Free</p>
              <h3 className="font-display text-lg mb-3">Follow my thinking</h3>
              <p className="text-text-secondary text-sm mb-6">
                Articles, videos, and a weekly newsletter. Practical AI strategy
                thinking delivered to your inbox.
              </p>
              <Link
                href="/writing"
                className="text-accent hover:text-accent-hover text-sm font-medium transition-colors"
              >
                Start reading →
              </Link>
            </div>
            <div className="p-6 rounded-lg border border-border">
              <p className="text-accent font-medium text-sm mb-2">Community</p>
              <h3 className="font-display text-lg mb-3">Learn with others</h3>
              <p className="text-text-secondary text-sm mb-6">
                Join AI Freedom Finders — a community of people figuring out
                AI together. Courses, discussions, shared learning.
              </p>
              <a
                href="https://www.skool.com/ai-freedom-finders"
                className="text-accent hover:text-accent-hover text-sm font-medium transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the community →
              </a>
            </div>
            <div className="p-6 rounded-lg border border-border">
              <p className="text-accent font-medium text-sm mb-2">Direct</p>
              <h3 className="font-display text-lg mb-3">Work with me</h3>
              <p className="text-text-secondary text-sm mb-6">
                Fractional Chief AI Officer for your organisation. Strategy,
                governance, and capability building — through Bramforth AI.
              </p>
              <a
                href="https://bramforth.ai"
                className="text-accent hover:text-accent-hover text-sm font-medium transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest thinking — placeholder until MDX pipeline built */}
      <section className="px-6 py-16 md:px-8 bg-surface">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-center mb-12">
            Latest thinking
          </h2>
          <p className="text-center text-text-secondary">
            Articles coming soon.
          </p>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-6 py-16 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl mb-4">
            Get my thinking in your inbox
          </h2>
          <p className="text-text-secondary mb-8">
            Practical AI strategy. No spam, no hype, no fluff.
          </p>
          <a
            href="https://jamieoarton.substack.com"
            className="inline-block bg-accent hover:bg-accent-hover text-white font-medium px-8 py-3 rounded-md transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe on Substack
          </a>
        </div>
      </section>
    </main>
  );
}
```

Note: "Latest thinking" is a placeholder until the MDX pipeline is built in Task 5. "Latest video" section is deferred — Jamie needs YouTube content to embed. Newsletter CTA links to Substack directly until we embed the form.

**Step 2: Verify**

Run: `npm run dev`
Expected: Full homepage scroll — hero, problem cards, three tiers, placeholder articles, newsletter CTA. Warm colours, serif headings.

**Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: build homepage — hero, problem, how-I-help, newsletter sections"
```

---

## Task 4: Core Pages — About, Work With Me, Videos, Newsletter

**Files:**
- Create: `src/app/about/page.tsx`
- Create: `src/app/work-with-me/page.tsx`
- Create: `src/app/videos/page.tsx`
- Create: `src/app/newsletter/page.tsx`

**Step 1: Create /about page**

```tsx
// src/app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jamie Oarton helps businesses navigate AI with clarity. Fractional CAIO, writer, and advisor.",
};

export default function About() {
  return (
    <main className="px-6 py-16 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl mb-8">
          I help businesses make sense of AI.
        </h1>

        <div className="space-y-6 text-text-secondary leading-relaxed">
          <p>
            Most businesses know AI matters. What they don't have is someone who
            can sit with the leadership team, understand the business, and build
            a strategy that actually connects to how the company makes money.
          </p>
          <p>
            That's what I do. As a fractional Chief AI Officer through{" "}
            <a
              href="https://bramforth.ai"
              className="text-accent hover:text-accent-hover transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bramforth AI
            </a>
            , I work with UK mid-market companies to turn AI confusion into
            clear strategy they can execute.
          </p>
          <p>
            Before this, I spent years advising on AI strategy at the highest
            levels of UK government — navigating the gap between what AI can
            technically do and what organisations actually need it to do.
          </p>
          <p>
            I also write and create content about practical AI strategy. Not
            hype, not predictions — the real, messy, useful stuff that helps
            people make better decisions.
          </p>
          <p>
            I don't believe in gurus. We're all figuring this out. I just
            happen to have been figuring it out in rooms where the stakes were
            very high, and I want to share what I've learned.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="font-display text-xl mb-4">Want to work together?</h2>
          <p className="text-text-secondary mb-6">
            Whether you want to follow my thinking, learn with a community, or
            bring me into your organisation directly.
          </p>
          <Link
            href="/work-with-me"
            className="text-accent hover:text-accent-hover font-medium transition-colors"
          >
            See how we can work together →
          </Link>
        </div>
      </div>
    </main>
  );
}
```

**Step 2: Create /work-with-me page**

```tsx
// src/app/work-with-me/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Choose your depth — free content, community, or direct fractional CAIO engagement.",
};

export default function WorkWithMe() {
  return (
    <main className="px-6 py-16 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl mb-4">
          Choose your depth
        </h1>
        <p className="text-text-secondary text-lg mb-12">
          Everyone's AI journey is different. Here's how I can help at each stage.
        </p>

        <div className="space-y-8">
          <div className="p-8 rounded-lg border border-border">
            <p className="text-accent font-medium text-sm mb-1">Free</p>
            <h2 className="font-display text-2xl mb-3">Follow my thinking</h2>
            <p className="text-text-secondary mb-4">
              I write and create videos about practical AI strategy — what
              works, what doesn't, and what most people get wrong. No
              gatekeeping, no upsell. Just useful thinking.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/writing"
                className="text-accent hover:text-accent-hover text-sm font-medium transition-colors"
              >
                Read my articles →
              </Link>
              <Link
                href="/videos"
                className="text-accent hover:text-accent-hover text-sm font-medium transition-colors"
              >
                Watch videos →
              </Link>
              <Link
                href="/newsletter"
                className="text-accent hover:text-accent-hover text-sm font-medium transition-colors"
              >
                Subscribe to newsletter →
              </Link>
            </div>
          </div>

          <div className="p-8 rounded-lg border border-border">
            <p className="text-accent font-medium text-sm mb-1">Community</p>
            <h2 className="font-display text-2xl mb-3">Learn with others</h2>
            <p className="text-text-secondary mb-4">
              AI Freedom Finders is a community of people figuring out AI
              together. Courses, discussions, shared learning, and direct access
              to me and the group.
            </p>
            <a
              href="https://www.skool.com/ai-freedom-finders"
              className="text-accent hover:text-accent-hover text-sm font-medium transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join AI Freedom Finders →
            </a>
          </div>

          <div className="p-8 rounded-lg border border-border">
            <p className="text-accent font-medium text-sm mb-1">Direct</p>
            <h2 className="font-display text-2xl mb-3">Work with me directly</h2>
            <p className="text-text-secondary mb-4">
              For organisations that need hands-on AI leadership. Through{" "}
              <a
                href="https://bramforth.ai"
                className="text-accent hover:text-accent-hover transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bramforth AI
              </a>
              , I work as a fractional Chief AI Officer — embedded in your
              leadership team, building strategy, governance, and internal
              capability.
            </p>
            <a
              href="https://bramforth.ai"
              className="text-accent hover:text-accent-hover text-sm font-medium transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn about Bramforth AI →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
```

**Step 3: Create /videos page (placeholder)**

```tsx
// src/app/videos/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos",
  description: "Video content on AI strategy, governance, and practical adoption.",
};

export default function Videos() {
  return (
    <main className="px-6 py-16 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl mb-4">Videos</h1>
        <p className="text-text-secondary text-lg mb-12">
          Video content on AI strategy and practical adoption. Coming soon.
        </p>
      </div>
    </main>
  );
}
```

**Step 4: Create /newsletter page**

```tsx
// src/app/newsletter/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Practical AI strategy thinking delivered to your inbox. No spam, no hype.",
};

export default function Newsletter() {
  return (
    <main className="px-6 py-16 md:px-8">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="font-display text-4xl md:text-5xl mb-4">
          Get my thinking in your inbox
        </h1>
        <p className="text-text-secondary text-lg mb-8">
          I write about practical AI strategy — what works, what doesn't, and
          what most businesses get wrong. Direct, useful, no fluff.
        </p>
        <a
          href="https://jamieoarton.substack.com"
          className="inline-block bg-accent hover:bg-accent-hover text-white font-medium px-8 py-3 rounded-md transition-colors mb-8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Subscribe on Substack
        </a>
        <p className="text-text-secondary text-sm">
          Free. Unsubscribe anytime. No spam, ever.
        </p>
      </div>
    </main>
  );
}
```

Note: Once we have a Substack embed widget, replace the link button with an inline email form. For now, the direct link works.

**Step 5: Verify all pages**

Run: `npm run dev`
Visit: `/about`, `/work-with-me`, `/videos`, `/newsletter`
Expected: All pages render with correct content, nav active, footer visible.

**Step 6: Commit**

```bash
git add src/app/about/page.tsx src/app/work-with-me/page.tsx src/app/videos/page.tsx src/app/newsletter/page.tsx
git commit -m "feat: add about, work-with-me, videos, newsletter pages"
```

---

## Task 5: MDX Content Pipeline

**Files:**
- Create: `content/writing/three-people-three-sources.mdx`
- Create: `content/writing/shadow-ai-what-it-means.mdx`
- Create: `content/writing/ai-strategy-not-a-list-of-tools.mdx`
- Create: `src/lib/content.ts` (MDX loading utilities)
- Create: `src/app/writing/page.tsx` (article index)
- Create: `src/app/writing/[slug]/page.tsx` (article page)
- Modify: `next.config.ts` (if needed for MDX)
- Modify: `package.json` (add MDX dependencies)
- Modify: `src/app/page.tsx` (wire up "Latest thinking" section)

**Step 1: Install MDX dependencies**

Run: `npm install next-mdx-remote gray-matter reading-time`

Note: Using `next-mdx-remote` for loading MDX from the filesystem (content directory outside of app/). `gray-matter` parses frontmatter. `reading-time` calculates read times from content.

**Step 2: Create content loading utility**

```ts
// src/lib/content.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDir = path.join(process.cwd(), "content", "writing");

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  topics: string[];
  featured: boolean;
  readTime: string;
  canonical: string | null;
  crossPostedTo: string[];
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const articles = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(contentDir, filename), "utf-8");
    const { data, content } = matter(raw);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title ?? slug,
      description: data.description ?? "",
      date: data.date ?? "",
      topics: data.topics ?? [],
      featured: data.featured ?? false,
      readTime: stats.text,
      canonical: data.canonical ?? null,
      crossPostedTo: data.crossPostedTo ?? [],
    };
  });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticleBySlug(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    meta: {
      slug,
      title: data.title ?? slug,
      description: data.description ?? "",
      date: data.date ?? "",
      topics: data.topics ?? [],
      featured: data.featured ?? false,
      readTime: stats.text,
      canonical: data.canonical ?? null,
      crossPostedTo: data.crossPostedTo ?? [],
    } as ArticleMeta,
    content,
  };
}
```

**Step 3: Create article index page**

```tsx
// src/app/writing/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing",
  description: "Articles on AI strategy, governance, and practical adoption.",
};

export default function Writing() {
  const articles = getAllArticles();

  return (
    <main className="px-6 py-16 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl mb-4">Writing</h1>
        <p className="text-text-secondary text-lg mb-12">
          Practical thinking on AI strategy, governance, and adoption.
        </p>

        {articles.length === 0 ? (
          <p className="text-text-secondary">Articles coming soon.</p>
        ) : (
          <div className="space-y-8">
            {articles.map((article) => (
              <article key={article.slug} className="border-b border-border pb-8">
                <Link href={`/writing/${article.slug}`} className="block group">
                  <h2 className="font-display text-xl md:text-2xl mb-2 group-hover:text-accent transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-text-secondary mb-3">
                    {article.description}
                  </p>
                  <div className="flex gap-4 text-sm text-text-secondary">
                    <span>{article.readTime}</span>
                    {article.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-accent"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
```

**Step 4: Create individual article page**

```tsx
// src/app/writing/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticleBySlug } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.meta.title,
    description: article.meta.description,
    openGraph: {
      title: article.meta.title,
      description: article.meta.description,
      type: "article",
      publishedTime: article.meta.date,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <main className="px-6 py-16 md:px-8">
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="font-display text-3xl md:text-5xl mb-4 leading-tight">
            {article.meta.title}
          </h1>
          <div className="flex gap-4 text-sm text-text-secondary">
            <time>{new Date(article.meta.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}</time>
            <span>{article.meta.readTime}</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none
          prose-headings:font-display prose-headings:text-text
          prose-p:text-text-secondary prose-p:leading-relaxed
          prose-a:text-accent hover:prose-a:text-accent-hover
          prose-strong:text-text
          prose-blockquote:border-accent prose-blockquote:text-text-secondary
        ">
          <MDXRemote source={article.content} />
        </div>
      </article>
    </main>
  );
}
```

Note: This uses `next-mdx-remote/rsc` for React Server Component rendering — no client JS shipped for article content. The `prose` classes require `@tailwindcss/typography` plugin.

**Step 5: Install typography plugin**

Run: `npm install @tailwindcss/typography`

Then add to `globals.css`:
```css
@plugin "@tailwindcss/typography";
```

Note: Tailwind v4 uses `@plugin` in CSS instead of a config file.

**Step 6: Create seed articles from Bramforth drafts**

Copy the three existing articles from the Bramforth Obsidian vault (`Content-Channels/Newsletter-and-Blog/Drafts/`) and convert to MDX with proper frontmatter. The content already exists — just needs reformatting.

Create `content/writing/` directory and add the three `.mdx` files with frontmatter matching the schema from the design doc.

Run: `mkdir -p content/writing`

Then create each article as an MDX file. The body content should be copied from the Bramforth drafts and converted from Markdown to MDX (mostly the same — just ensure no incompatible syntax).

**Step 7: Wire up "Latest thinking" on homepage**

Update the placeholder section in `src/app/page.tsx` to import `getAllArticles()` and render the first 3 featured articles as cards linking to `/writing/[slug]`.

**Step 8: Verify**

Run: `npm run dev`
Visit: `/writing` — should show all 3 articles
Visit: `/writing/three-people-three-sources` — should render full article
Visit: `/` — "Latest thinking" section should show article cards
Expected: Articles render with proper typography, serif headings, warm colours.

**Step 9: Commit**

```bash
git add content/ src/lib/content.ts src/app/writing/ src/app/page.tsx src/app/globals.css package.json package-lock.json
git commit -m "feat: add MDX content pipeline and seed with 3 articles"
```

---

## Task 6: Schema Markup (JSON-LD)

**Files:**
- Create: `src/components/schema.tsx`
- Modify: `src/app/layout.tsx` (add WebSite + Person schema)
- Modify: `src/app/writing/[slug]/page.tsx` (add Article schema)

**Step 1: Create schema component**

```tsx
// src/components/schema.tsx
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jamie Oarton",
  url: "https://jamieoarton.com",
  jobTitle: "Fractional Chief AI Officer",
  worksFor: {
    "@type": "Organization",
    name: "Bramforth AI",
    url: "https://bramforth.ai",
  },
  sameAs: [
    "https://jamieoarton.substack.com",
    "https://linkedin.com/in/jamieoarton",
    "https://youtube.com/@jamieoarton",
    "https://x.com/jamieoarton",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Jamie Oarton",
  url: "https://jamieoarton.com",
  author: { "@type": "Person", name: "Jamie Oarton" },
};

export function articleSchema(meta: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    url: `https://jamieoarton.com/writing/${meta.slug}`,
    author: {
      "@type": "Person",
      name: "Jamie Oarton",
      url: "https://jamieoarton.com",
    },
    publisher: {
      "@type": "Person",
      name: "Jamie Oarton",
    },
  };
}
```

**Step 2: Add WebSite + Person schema to layout.tsx**

Add `<JsonLd data={personSchema} />` and `<JsonLd data={websiteSchema} />` inside `<body>`.

**Step 3: Add Article schema to article page**

In `src/app/writing/[slug]/page.tsx`, add `<JsonLd data={articleSchema(article.meta)} />` inside the `<main>` element.

**Step 4: Verify**

Run: `npm run dev`
View page source on homepage — should see Person and WebSite JSON-LD script blocks.
View page source on an article — should see Article JSON-LD.

**Step 5: Commit**

```bash
git add src/components/schema.tsx src/app/layout.tsx src/app/writing/
git commit -m "feat: add JSON-LD schema markup — Person, WebSite, Article"
```

---

## Task 7: Analytics Integration

**Files:**
- Create: `src/components/analytics.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `package.json` (add Vercel analytics packages)

**Step 1: Install Vercel analytics packages**

Run: `npm install @vercel/analytics @vercel/speed-insights`

**Step 2: Create analytics component**

```tsx
// src/components/analytics.tsx
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

export function Analytics() {
  return (
    <>
      {/* Google Analytics 4 */}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {/* Microsoft Clarity */}
      {CLARITY_ID && (
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      )}
    </>
  );
}
```

**Step 3: Add to layout.tsx**

Import and add `<Analytics />`, `<VercelAnalytics />` (from `@vercel/analytics/react`), and `<SpeedInsights />` (from `@vercel/speed-insights/react`) to the body.

**Step 4: Create `.env.local` template**

Create `.env.example`:
```
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_CLARITY_ID=
```

Add `.env.local` to `.gitignore` (should already be there from Next.js default).

Note: GA4 and Clarity IDs are set via environment variables. On Vercel, set these in the project settings. For dev, create `.env.local` with the values. Analytics won't fire without the env vars — safe to deploy without them initially.

**Step 5: Verify**

Run: `npm run dev`
Expected: No console errors. Analytics scripts only render when env vars are set.

**Step 6: Commit**

```bash
git add src/components/analytics.tsx src/app/layout.tsx .env.example package.json package-lock.json
git commit -m "feat: add analytics — GA4, Clarity, Vercel Analytics, Speed Insights"
```

---

## Task 8: Build Verification & Deployment Prep

**Files:**
- Modify: `.gitignore` (verify correct)
- Modify: `next.config.ts` (if any config needed)

**Step 1: Run production build**

Run: `npm run build`
Expected: Build succeeds with no errors. All pages statically generated.

**Step 2: Run lint**

Run: `npm run lint`
Expected: No lint errors.

**Step 3: Test production server locally**

Run: `npm start`
Visit all pages: `/`, `/about`, `/writing`, `/writing/[slug]`, `/work-with-me`, `/videos`, `/newsletter`
Expected: All pages load correctly with warm palette, serif headings, proper content.

**Step 4: Verify .gitignore**

Ensure `.env.local`, `node_modules/`, `.next/` are all ignored.

**Step 5: Commit any fixes**

```bash
git add -A
git commit -m "chore: build verification and deployment prep"
```

---

## Task 9 (Jamie action): Vercel Deployment & DNS

This is a manual task for Jamie — not code.

**Step 1:** Go to [vercel.com](https://vercel.com), import the `jamieoarton/personal-site` GitHub repo

**Step 2:** Vercel auto-detects Next.js. Accept defaults. Deploy.

**Step 3:** In Vercel project settings → Domains → Add `jamieoarton.com`

**Step 4:** Vercel gives you DNS records (CNAME or A record). Go to names.co.uk and update DNS.

**Step 5:** Set environment variables in Vercel project settings:
- `NEXT_PUBLIC_GA_ID` — create a new GA4 property for jamieoarton.com (or reuse existing)
- `NEXT_PUBLIC_CLARITY_ID` — create a new Clarity project for jamieoarton.com

**Step 6:** Push to `main` → Vercel auto-deploys. Site is live.

---

## Task 10 (Separate workstream): Photography brief

Not a code task. Saved in Obsidian at `Strategy/Personal-Brand-Strategy/03-SITE-DESIGN-BRIEF.md` under "Photography Brief." Jamie to schedule a shoot when ready.

---

## Task 11 (Separate workstream): AISEO Research

Not a code task. Research actual evidence for AISEO-specific tactics before implementing beyond standard SEO best practices. Find papers, studies, and verifiable methodology. Document findings in Obsidian at `Strategy/Personal-Brand-Strategy/02-AISEO-STRATEGY.md`.

---

## Summary

| Task | Type | Estimated Steps |
|---|---|---|
| 1. Clean slate + design tokens | Code | 7 steps |
| 2. Nav + Footer | Code | 5 steps |
| 3. Homepage sections | Code | 3 steps |
| 4. Core pages | Code | 6 steps |
| 5. MDX pipeline + seed articles | Code | 9 steps |
| 6. Schema markup | Code | 5 steps |
| 7. Analytics | Code | 6 steps |
| 8. Build verification | Code | 5 steps |
| 9. Vercel + DNS | Jamie manual | 6 steps |
| 10. Photography | Jamie manual | — |
| 11. AISEO research | Research | — |
