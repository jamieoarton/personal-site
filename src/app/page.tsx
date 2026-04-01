import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl mb-6 leading-tight">
            You know AI matters.
            <br />
            You don&apos;t know where to start.
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

      {/* Problem Validation Section */}
      <section className="bg-surface px-6 py-20 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-12">
            Sound familiar?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-bg rounded-lg p-8">
              <h3 className="font-display text-xl mb-4">
                You&apos;re getting conflicting advice
              </h3>
              <p className="text-text-secondary">
                Your CEO reads one thing, your CTO hears another, your CFO sees
                different numbers. Everyone has a different version of what AI
                means for your business.
              </p>
            </div>
            <div className="bg-bg rounded-lg p-8">
              <h3 className="font-display text-xl mb-4">
                Your team is already using AI — without you
              </h3>
              <p className="text-text-secondary">
                They&apos;re pasting company data into ChatGPT, using tools you
                haven&apos;t approved, making decisions you don&apos;t know
                about. It&apos;s not malicious. It&apos;s just happening.
              </p>
            </div>
            <div className="bg-bg rounded-lg p-8">
              <h3 className="font-display text-xl mb-4">
                You have a list of tools, not a strategy
              </h3>
              <p className="text-text-secondary">
                You&apos;ve bought licences, run pilots, maybe even hired
                someone. But you still can&apos;t answer: what&apos;s the plan?
                What are we actually trying to achieve?
              </p>
            </div>
          </div>
          <p className="text-text-secondary text-center mt-12">
            This isn&apos;t your fault. The advice landscape is broken.
          </p>
        </div>
      </section>

      {/* How I Help Section */}
      <section className="px-6 py-20 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              I can help. Choose your depth.
            </h2>
            <p className="text-text-secondary text-lg">
              Whether you want to learn on your own, with others, or want direct
              hands-on guidance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-border rounded-lg p-8">
              <p className="text-sm text-text-secondary uppercase tracking-wide mb-2">
                Free
              </p>
              <h3 className="font-display text-xl mb-4">Follow my thinking</h3>
              <p className="text-text-secondary mb-6">
                Articles, videos, and a weekly newsletter. Practical AI strategy
                thinking delivered to your inbox.
              </p>
              <Link
                href="/writing"
                className="text-accent hover:text-accent-hover font-medium transition-colors"
              >
                Start reading &rarr;
              </Link>
            </div>
            <div className="border border-border rounded-lg p-8">
              <p className="text-sm text-text-secondary uppercase tracking-wide mb-2">
                Community
              </p>
              <h3 className="font-display text-xl mb-4">Learn with others</h3>
              <p className="text-text-secondary mb-6">
                Join AI Freedom Finders — a community of people figuring out AI
                together. Courses, discussions, shared learning.
              </p>
              <a
                href="https://www.skool.com/ai-freedom-finders"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover font-medium transition-colors"
              >
                Join the community &rarr;
              </a>
            </div>
            <div className="border border-border rounded-lg p-8">
              <p className="text-sm text-text-secondary uppercase tracking-wide mb-2">
                Direct
              </p>
              <h3 className="font-display text-xl mb-4">Work with me</h3>
              <p className="text-text-secondary mb-6">
                Fractional Chief AI Officer for your organisation. Strategy,
                governance, and capability building — through Bramforth AI.
              </p>
              <a
                href="https://bramforth.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover font-medium transition-colors"
              >
                Learn more &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Thinking Section */}
      <section className="bg-surface px-6 py-20 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Latest thinking
          </h2>
          <p className="text-text-secondary">Articles coming soon.</p>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="px-6 py-20 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Get my thinking in your inbox
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Practical AI strategy. No spam, no hype, no fluff.
          </p>
          <a
            href="https://substack.com/@jamieoarton"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-hover text-white font-medium px-8 py-3 rounded-md transition-colors inline-block"
          >
            Subscribe on Substack
          </a>
        </div>
      </section>
    </main>
  );
}
