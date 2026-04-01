import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work With Me",
  description: "Choose your depth — free content, community, or direct fractional CAIO engagement.",
};

export default function WorkWithMe() {
  return (
    <main className="px-6 py-16 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl mb-4">Choose your depth</h1>
        <p className="text-text-secondary text-lg mb-12">Everyone&apos;s AI journey is different. Here&apos;s how I can help at each stage.</p>
        <div className="space-y-8">
          {/* Free tier */}
          <div className="p-8 rounded-lg border border-border">
            <p className="text-accent font-medium text-sm mb-1">Free</p>
            <h2 className="font-display text-2xl mb-3">Follow my thinking</h2>
            <p className="text-text-secondary mb-4">I write and create videos about practical AI strategy — what works, what doesn&apos;t, and what most people get wrong. No gatekeeping, no upsell. Just useful thinking.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/writing" className="text-accent hover:text-accent-hover text-sm font-medium transition-colors">Read my articles →</Link>
              <Link href="/videos" className="text-accent hover:text-accent-hover text-sm font-medium transition-colors">Watch videos →</Link>
              <Link href="/newsletter" className="text-accent hover:text-accent-hover text-sm font-medium transition-colors">Subscribe to newsletter →</Link>
            </div>
          </div>
          {/* Community tier */}
          <div className="p-8 rounded-lg border border-border">
            <p className="text-accent font-medium text-sm mb-1">Community</p>
            <h2 className="font-display text-2xl mb-3">Learn with others</h2>
            <p className="text-text-secondary mb-4">AI Freedom Finders is a community of people figuring out AI together. Courses, discussions, shared learning, and direct access to me and the group.</p>
            <a href="https://www.skool.com/ai-freedom-finders" className="text-accent hover:text-accent-hover text-sm font-medium transition-colors" target="_blank" rel="noopener noreferrer">Join AI Freedom Finders →</a>
          </div>
          {/* Direct tier */}
          <div className="p-8 rounded-lg border border-border">
            <p className="text-accent font-medium text-sm mb-1">Direct</p>
            <h2 className="font-display text-2xl mb-3">Work with me directly</h2>
            <p className="text-text-secondary mb-4">For organisations that need hands-on AI leadership. Through <a href="https://bramforth.ai" className="text-accent hover:text-accent-hover transition-colors" target="_blank" rel="noopener noreferrer">Bramforth AI</a>, I work as a fractional Chief AI Officer — embedded in your leadership team, building strategy, governance, and internal capability.</p>
            <a href="https://bramforth.ai" className="text-accent hover:text-accent-hover text-sm font-medium transition-colors" target="_blank" rel="noopener noreferrer">Learn about Bramforth AI →</a>
          </div>
        </div>
      </div>
    </main>
  );
}
