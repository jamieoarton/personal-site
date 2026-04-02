import Image from "next/image";
import Link from "next/link";
import { getAllArticles, getAllTopics } from "@/lib/content";
import { SubscribeForm } from "@/components/subscribe-form";

export default function Home() {
  const articles = getAllArticles().filter((a) => a.featured).slice(0, 3);
  const topics = getAllTopics();
  return (
    <main>
      {/* Hero - Justin-style two-column intro */}
      <section className="px-6 py-16 md:py-24 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1">
            <h1 className="font-display text-4xl md:text-5xl mb-6">
              Hi, I&apos;m Jamie Oarton
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              I&apos;m an AI strategy advisor and fractional Chief AI Officer
              through{" "}
              <a
                href="https://bramforth.ai"
                className="text-accent hover:text-accent-hover transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bramforth AI
              </a>
              , helping mid-market businesses build AI strategies that actually
              connect to how they make money. I share what I&apos;m learning
              through writing, video, and a growing community of people
              figuring out AI together.
            </p>

            {/* Newsletter form in hero */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-3">
                Subscribe to my newsletter
              </p>
              <SubscribeForm />
            </div>
          </div>

          <div className="flex-shrink-0">
            <Image
              src="/jamie.png"
              alt="Jamie Oarton"
              width={340}
              height={340}
              className="rounded-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* What I do - soft credentials */}
      <section className="bg-surface px-6 py-16 md:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-bg rounded-lg p-6">
            <h3 className="font-medium mb-2">AI Strategy</h3>
            <p className="text-text-secondary text-sm">
              I help leadership teams cut through the hype and build AI
              strategies grounded in business reality - not vendor wishlists.
            </p>
          </div>
          <div className="bg-bg rounded-lg p-6">
            <h3 className="font-medium mb-2">Training &amp; Speaking</h3>
            <p className="text-text-secondary text-sm">
              AI courses and workshops for leadership teams who need to make
              decisions about AI, not just understand it.
            </p>
          </div>
          <div className="bg-bg rounded-lg p-6">
            <h3 className="font-medium mb-2">Fractional CAIO</h3>
            <p className="text-text-secondary text-sm">
              Embedded AI leadership for your organisation. Strategy,
              governance, and capability building - through{" "}
              <a
                href="https://bramforth.ai"
                className="text-accent hover:text-accent-hover transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bramforth AI
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Latest thinking */}
      <section className="px-6 py-16 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl mb-8">
            Latest thinking
          </h2>
          {articles.length === 0 ? (
            <p className="text-text-secondary">Articles coming soon.</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/writing/${article.slug}`}
                  className="border border-border rounded-lg p-6 block group hover:border-accent transition-colors"
                >
                  <h3 className="font-display text-lg mb-2 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-3">
                    {article.description}
                  </p>
                  <span className="text-sm text-text-secondary">
                    {article.readTime}
                  </span>
                </Link>
              ))}
            </div>
          )}
          <div className="mt-8">
            <Link
              href="/writing"
              className="text-accent hover:text-accent-hover font-medium transition-colors"
            >
              See all writing &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Deep dives */}
      {topics.length > 0 && (
        <section className="bg-surface px-6 py-16 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl mb-8">
              Deep dives
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {topics.map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/topics/${topic.slug}`}
                  className="bg-bg rounded-lg p-6 block group hover:border hover:border-accent transition-colors border border-transparent"
                >
                  <h3 className="font-display text-lg mb-2 group-hover:text-accent transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-3">
                    {topic.description}
                  </p>
                  <span className="text-sm text-text-secondary">
                    {topic.readTime}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Social media */}
      <section className="bg-surface px-6 py-12 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-xl mb-6">Follow along</h2>
          <div className="flex flex-wrap gap-4">
            {[
              { href: "https://jamieoarton.substack.com", label: "Substack" },
              { href: "https://linkedin.com/in/joarton", label: "LinkedIn" },
              { href: "https://youtube.com/@jamieoarton", label: "YouTube" },
              { href: "https://tiktok.com/@jamieoarton", label: "TikTok" },
              { href: "https://x.com/jamieoarton", label: "X" },
              { href: "https://instagram.com/jamieoarton", label: "Instagram" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border rounded-lg px-5 py-3 text-sm hover:border-accent hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Compact tiers */}
      <section className="px-6 py-16 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl mb-8">
            Ways to work together
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/writing"
              className="border border-border rounded-lg p-6 block group hover:border-accent transition-colors"
            >
              <p className="text-accent text-sm font-medium mb-1">Free</p>
              <h3 className="font-medium mb-1 group-hover:text-accent transition-colors">
                Follow my thinking
              </h3>
              <p className="text-text-secondary text-sm">
                Articles and newsletter on practical AI strategy.
              </p>
            </Link>
            <a
              href="https://www.skool.com/ai-freedom-finders"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border rounded-lg p-6 block group hover:border-accent transition-colors"
            >
              <p className="text-accent text-sm font-medium mb-1">Community</p>
              <h3 className="font-medium mb-1 group-hover:text-accent transition-colors">
                AI Freedom Finders
              </h3>
              <p className="text-text-secondary text-sm">
                750+ members. Courses, discussions, direct access.
              </p>
            </a>
            <a
              href="https://bramforth.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border rounded-lg p-6 block group hover:border-accent transition-colors"
            >
              <p className="text-accent text-sm font-medium mb-1">Direct</p>
              <h3 className="font-medium mb-1 group-hover:text-accent transition-colors">
                Fractional CAIO
              </h3>
              <p className="text-text-secondary text-sm">
                Embedded AI leadership through Bramforth AI.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter CTA - bottom */}
      <section className="bg-surface px-6 py-16 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl mb-3">
            One actionable AI insight per week
          </h2>
          <p className="text-text-secondary mb-6">
            What&apos;s working, what&apos;s not, and what to do about it.
          </p>
          <SubscribeForm />
        </div>
      </section>
    </main>
  );
}
