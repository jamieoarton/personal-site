import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { getAllTopics, getTopicBySlug, getAllArticles, extractFAQs } from "@/lib/content";
import { AuthorBio } from "@/components/author-bio";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const topics = getAllTopics();
  return topics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) return {};

  return {
    title: topic.meta.title,
    description: topic.meta.description,
    openGraph: {
      title: topic.meta.title,
      description: topic.meta.description,
      type: "article",
    },
  };
}

export default async function TopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) notFound();

  const faqs = extractFAQs(topic.content);

  // Find related articles that share this topic slug
  const relatedArticles = getAllArticles().filter((a) =>
    a.topics.some((t) => t === slug || slug.includes(t) || t.includes(slug))
  );

  return (
    <main className="px-6 py-16 md:px-8">
      <JsonLd
        data={articleSchema({
          title: topic.meta.title,
          description: topic.meta.description,
          date: "2026-03-31",
          url: `/topics/${slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Topics", url: "/writing" },
          { name: topic.meta.title, url: `/topics/${slug}` },
        ])}
      />

      {faqs.length > 0 && <JsonLd data={faqSchema(faqs)} />}

      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="font-display text-3xl md:text-5xl mb-4 leading-tight">
            {topic.meta.title}
          </h1>
          <p className="text-text-secondary text-lg">
            {topic.meta.description}
          </p>
          <p className="text-sm text-text-secondary mt-4">
            {topic.meta.readTime} &middot; By Jamie Oarton
          </p>
        </header>

        <div
          className="prose prose-lg max-w-none
          prose-headings:font-display prose-headings:text-text
          prose-p:text-text-secondary prose-p:leading-relaxed
          prose-a:text-accent hover:prose-a:text-accent-hover
          prose-strong:text-text
          prose-blockquote:border-accent prose-blockquote:text-text-secondary
          prose-table:text-sm
          prose-th:text-text prose-th:font-medium
          prose-td:text-text-secondary
        "
        >
          <MDXRemote source={topic.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </div>

        <AuthorBio />

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-12 pt-8 border-t border-border">
            <h2 className="font-display text-xl mb-6">Related reading</h2>
            <div className="space-y-4">
              {relatedArticles.map((article) => (
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
      </article>
    </main>
  );
}
