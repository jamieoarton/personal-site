import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles, getAllTopics } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing",
  description: "Articles on AI strategy, governance, and practical adoption.",
};

export default function Writing() {
  const articles = getAllArticles();
  const topics = getAllTopics();
  return (
    <main className="px-6 py-16 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl mb-4">Writing</h1>
        <p className="text-text-secondary text-lg mb-12">Practical thinking on AI strategy, governance, and adoption.</p>

        {articles.length === 0 ? (
          <p className="text-text-secondary">Articles coming soon.</p>
        ) : (
          <div className="space-y-8">
            {articles.map((article) => (
              <article key={article.slug} className="border-b border-border pb-8">
                <Link href={`/writing/${article.slug}`} className="block group">
                  <h2 className="font-display text-xl md:text-2xl mb-2 group-hover:text-accent transition-colors">{article.title}</h2>
                  <p className="text-text-secondary mb-3">{article.description}</p>
                  <div className="flex gap-4 text-sm text-text-secondary">
                    <span>{article.readTime}</span>
                    {article.topics.map((topic) => (<span key={topic} className="text-accent">{topic}</span>))}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}

        {topics.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-xl mb-6">Deep dives</h2>
            <div className="space-y-4">
              {topics.map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/topics/${topic.slug}`}
                  className="block border border-border rounded-lg p-4 hover:border-accent transition-colors group"
                >
                  <h3 className="font-medium group-hover:text-accent transition-colors">{topic.title}</h3>
                  <p className="text-text-secondary text-sm mt-1">{topic.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
