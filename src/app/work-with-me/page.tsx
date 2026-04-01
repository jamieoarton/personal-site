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
        <p className="text-text-secondary text-lg mb-12">
          Everyone&apos;s AI journey is different. Here&apos;s how I can help at each stage.
        </p>

        <div className="space-y-12">
          {/* Free tier */}
          <div className="p-8 rounded-lg border border-border">
            <p className="text-accent font-medium text-sm mb-1">Free</p>
            <h2 className="font-display text-2xl mb-3">Follow my thinking</h2>
            <p className="text-text-secondary mb-4">
              I write about practical AI strategy — what works, what doesn&apos;t, and what
              most people get wrong. No gatekeeping, no upsell. Just useful thinking you can
              act on immediately.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/writing" className="text-accent hover:text-accent-hover text-sm font-medium transition-colors">
                Read my articles →
              </Link>
              <Link href="/newsletter" className="text-accent hover:text-accent-hover text-sm font-medium transition-colors">
                Subscribe to newsletter →
              </Link>
            </div>
          </div>

          {/* Community tier */}
          <div className="p-8 rounded-lg border border-border">
            <p className="text-accent font-medium text-sm mb-1">Community</p>
            <h2 className="font-display text-2xl mb-3">Learn with others</h2>
            <p className="text-text-secondary mb-6">
              AI Freedom Finders is a community of people figuring out AI together.
              Courses, discussions, shared learning, and direct access to me and the group.
            </p>
            <div className="bg-surface rounded-lg p-6 mb-6">
              <h3 className="font-medium mb-3">What you get</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>Structured courses on AI adoption and strategy</li>
                <li>Weekly discussions and Q&amp;A</li>
                <li>A network of people solving the same problems you are</li>
                <li>Direct access to me for questions</li>
              </ul>
            </div>
            <a
              href="https://www.skool.com/ai-freedom-finders"
              className="text-accent hover:text-accent-hover text-sm font-medium transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join AI Freedom Finders →
            </a>
          </div>

          {/* Direct tier */}
          <div className="p-8 rounded-lg border-2 border-accent">
            <p className="text-accent font-medium text-sm mb-1">Direct</p>
            <h2 className="font-display text-2xl mb-3">Work with me directly</h2>
            <p className="text-text-secondary mb-6">
              For organisations that need hands-on AI leadership. Through{" "}
              <a
                href="https://bramforth.ai"
                className="text-accent hover:text-accent-hover transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bramforth AI
              </a>
              , I work as a fractional Chief AI Officer — embedded in your leadership team.
            </p>
            <div className="bg-surface rounded-lg p-6 mb-6">
              <h3 className="font-medium mb-3">What this looks like</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><strong className="text-text">AI Diagnostic</strong> — A focused 2-day audit of where you are, where the gaps are, and what to do first</li>
                <li><strong className="text-text">Strategic engagement</strong> — One day per week embedded with your leadership team, building and executing your AI strategy</li>
                <li><strong className="text-text">Deep embed</strong> — Two days per week for organisations that need hands-on capability building, team training, and multi-initiative oversight</li>
              </ul>
            </div>
            <div className="bg-surface rounded-lg p-6 mb-6">
              <h3 className="font-medium mb-3">Best for</h3>
              <p className="text-text-secondary text-sm">
                UK mid-market companies (£20M–£100M revenue) where the leadership team knows AI matters but
                doesn&apos;t have a clear plan. You&apos;ve probably spent money on tools already. You need
                someone who can sit at the leadership table and connect AI to business outcomes.
              </p>
            </div>
            <a
              href="https://bramforth.ai"
              className="inline-block bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-md transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more at Bramforth AI →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
