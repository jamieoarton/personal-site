import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDir = path.join(process.cwd(), "content", "writing");
const topicsDir = path.join(process.cwd(), "content", "topics");

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  topics: string[];
  featured: boolean;
  readTime: string;
  canonical: string | null;
  crossPostedTo: string[];
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));
  const articles = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(contentDir, filename), "utf-8");
    const { data, content } = matter(raw);
    const stats = readingTime(content);
    return {
      slug,
      title: data.title ?? slug,
      description: data.description ?? "",
      date: data.date ?? "",
      topics: data.topics ?? [],
      featured: data.featured ?? false,
      readTime: stats.text,
      canonical: data.canonical ?? null,
      crossPostedTo: data.crossPostedTo ?? [],
    };
  });
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export interface TopicMeta {
  slug: string;
  title: string;
  description: string;
  readTime: string;
}

export function getAllTopics(): TopicMeta[] {
  if (!fs.existsSync(topicsDir)) return [];
  const files = fs.readdirSync(topicsDir).filter((f) => f.endsWith(".mdx"));
  return files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(topicsDir, filename), "utf-8");
    const { data, content } = matter(raw);
    const stats = readingTime(content);
    return {
      slug,
      title: data.title ?? slug,
      description: data.description ?? "",
      readTime: stats.text,
    };
  });
}

export function getTopicBySlug(slug: string) {
  const filePath = path.join(topicsDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);
  return {
    meta: {
      slug,
      title: data.title ?? slug,
      description: data.description ?? "",
      readTime: stats.text,
    } as TopicMeta,
    content,
  };
}

export function getArticleBySlug(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);
  return {
    meta: {
      slug,
      title: data.title ?? slug,
      description: data.description ?? "",
      date: data.date ?? "",
      topics: data.topics ?? [],
      featured: data.featured ?? false,
      readTime: stats.text,
      canonical: data.canonical ?? null,
      crossPostedTo: data.crossPostedTo ?? [],
    } as ArticleMeta,
    content,
  };
}
