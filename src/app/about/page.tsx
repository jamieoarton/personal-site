import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Jamie Oarton helps businesses navigate AI with clarity. Fractional CAIO, writer, and advisor.",
};

export default function About() {
  return (
    <main className="px-6 py-16 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl mb-8">
          I help businesses make sense of AI.
        </h1>
        <div className="space-y-6 text-text-secondary leading-relaxed">
          <p>Most businesses know AI matters. What they don't have is someone who can sit with the leadership team, understand the business, and build a strategy that actually connects to how the company makes money.</p>
          <p>That's what I do. As a fractional Chief AI Officer through <a href="https://bramforth.ai" className="text-accent hover:text-accent-hover transition-colors" target="_blank" rel="noopener noreferrer">Bramforth AI</a>, I work with UK mid-market companies to turn AI confusion into clear strategy they can execute.</p>
          <p>Before this, I spent years advising on AI strategy at the highest levels of UK government — navigating the gap between what AI can technically do and what organisations actually need it to do.</p>
          <p>I also write and create content about practical AI strategy. Not hype, not predictions — the real, messy, useful stuff that helps people make better decisions.</p>
          <p>I don't believe in gurus. We're all figuring this out. I just happen to have been figuring it out in rooms where the stakes were very high, and I want to share what I've learned.</p>
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="font-display text-xl mb-4">Want to work together?</h2>
          <p className="text-text-secondary mb-6">Whether you want to follow my thinking, learn with a community, or bring me into your organisation directly.</p>
          <Link href="/work-with-me" className="text-accent hover:text-accent-hover font-medium transition-colors">
            See how we can work together →
          </Link>
        </div>
      </div>
    </main>
  );
}
