import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/content";
import { SubscribeForm } from "@/components/subscribe-form";

export const metadata: Metadata = {
  title: "Newsletter — Weekly AI Strategy Briefing",
  description: "One actionable AI insight per week. What's working, what's not, and what to do about it.",
};

export default function Newsletter() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <main className="px-6 py-16 md:px-8">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl mb-4">
            One actionable AI insight per week
          </h1>
          <p className="text-text-secondary text-lg">
            What&apos;s working, what&apos;s not, and what to do about it. Straight to your inbox.
          </p>
        </div>

        <div className="mb-4">
          <SubscribeForm />
        </div>
        <p className="text-text-secondary text-sm text-center mb-16">
          Free. Unsubscribe anytime. No spam, ever.
        </p>

        {articles.length > 0 && (
          <div>
            <h2 className="font-display text-xl mb-6">Recent issues</h2>
            <div className="space-y-4">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/writing/${article.slug}`}
                  className="block border border-border rounded-lg p-4 hover:border-accent transition-colors group"
                >
                  <h3 className="font-medium group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-text-secondary text-sm mt-1">
                    {article.readTime}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
