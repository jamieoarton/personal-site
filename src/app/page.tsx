import Image from "next/image";
import Link from "next/link";
import { getAllArticles } from "@/lib/content";

export default function Home() {
  const articles = getAllArticles().filter((a) => a.featured).slice(0, 3);
  return (
    <main>
      {/* Hero — Jamie front and centre */}
      <section className="px-6 py-16 md:py-24 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-shrink-0">
            <Image
              src="/jamie.png"
              alt="Jamie Oarton"
              width={320}
              height={320}
              className="rounded-2xl"
              priority
            />
          </div>
          <div>
            <h1 className="font-display text-4xl md:text-5xl mb-4 leading-tight">
              Jamie Oarton
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-6 leading-relaxed">
              AI strategy advisor. Former UK government &amp; military. Helping businesses get AI right.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/newsletter"
                className="bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-md transition-colors text-center"
              >
                Get the Weekly AI Briefing
              </Link>
              <Link
                href="/work-with-me"
                className="border border-border hover:border-accent text-text font-medium px-6 py-3 rounded-md transition-colors text-center"
              >
                Work With Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credential cards */}
      <section className="px-6 pb-16 md:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-surface rounded-lg p-6">
            <p className="font-medium mb-1">Government &amp; Defence</p>
            <p className="text-text-secondary text-sm">
              AI strategy advisor at the highest levels of UK government, military, and diplomatic services.
            </p>
          </div>
          <div className="bg-surface rounded-lg p-6">
            <p className="font-medium mb-1">Training &amp; Education</p>
            <p className="text-text-secondary text-sm">
              Delivered AI courses to senior British Army officers and business leadership teams.
            </p>
          </div>
          <div className="bg-surface rounded-lg p-6">
            <p className="font-medium mb-1">Fractional CAIO</p>
            <p className="text-text-secondary text-sm">
              Co-founder of{" "}
              <a href="https://bramforth.ai" className="text-accent hover:text-accent-hover transition-colors" target="_blank" rel="noopener noreferrer">Bramforth AI</a>
              . Embedded AI leadership for UK mid-market companies.
            </p>
          </div>
        </div>
      </section>

      {/* Latest thinking — content is the proof */}
      <section className="bg-surface px-6 py-16 md:px-8">
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
                  className="bg-bg rounded-lg p-6 block group"
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

      {/* Newsletter — woven in */}
      <section className="px-6 py-16 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl mb-3">
            One actionable AI insight per week
          </h2>
          <p className="text-text-secondary mb-6">
            What&apos;s working, what&apos;s not, and what to do about it.
          </p>
          <iframe
            src="https://jamieoarton.substack.com/embed"
            width="100%"
            height="150"
            className="rounded-md border-0"
            frameBorder="0"
            scrolling="no"
          />
        </div>
      </section>

      {/* Compact tiers */}
      <section className="bg-surface px-6 py-16 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/writing" className="bg-bg rounded-lg p-6 block group">
              <p className="text-accent text-sm font-medium mb-1">Free</p>
              <h3 className="font-medium mb-1 group-hover:text-accent transition-colors">Follow my thinking</h3>
              <p className="text-text-secondary text-sm">Articles, newsletter, and videos on practical AI strategy.</p>
            </Link>
            <a href="https://www.skool.com/ai-freedom-finders" target="_blank" rel="noopener noreferrer" className="bg-bg rounded-lg p-6 block group">
              <p className="text-accent text-sm font-medium mb-1">Community</p>
              <h3 className="font-medium mb-1 group-hover:text-accent transition-colors">Learn with others</h3>
              <p className="text-text-secondary text-sm">750+ members figuring out AI together. Courses, discussions, direct access.</p>
            </a>
            <a href="https://bramforth.ai" target="_blank" rel="noopener noreferrer" className="bg-bg rounded-lg p-6 block group">
              <p className="text-accent text-sm font-medium mb-1">Direct</p>
              <h3 className="font-medium mb-1 group-hover:text-accent transition-colors">Work with me</h3>
              <p className="text-text-secondary text-sm">Fractional CAIO for your organisation, through Bramforth AI.</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
