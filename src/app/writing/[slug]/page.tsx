import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllArticles, getArticleBySlug } from "@/lib/content";
import { JsonLd, articleSchema } from "@/components/schema";

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
      <JsonLd data={articleSchema(article.meta)} />
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="font-display text-3xl md:text-5xl mb-4 leading-tight">{article.meta.title}</h1>
          <div className="flex gap-4 text-sm text-text-secondary">
            <time>{new Date(article.meta.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</time>
            <span>{article.meta.readTime}</span>
          </div>
        </header>
        <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-text prose-p:text-text-secondary prose-p:leading-relaxed prose-a:text-accent hover:prose-a:text-accent-hover prose-strong:text-text prose-blockquote:border-accent prose-blockquote:text-text-secondary">
          <MDXRemote source={article.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </div>
      </article>
    </main>
  );
}
