export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jamie Oarton",
  url: "https://jamieoarton.com",
  jobTitle: "Fractional Chief AI Officer",
  worksFor: {
    "@type": "Organization",
    name: "Bramforth AI",
    url: "https://bramforth.ai",
  },
  sameAs: [
    "https://jamieoarton.substack.com",
    "https://linkedin.com/in/jamieoarton",
    "https://youtube.com/@jamieoarton",
    "https://x.com/jamieoarton",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Jamie Oarton",
  url: "https://jamieoarton.com",
  author: { "@type": "Person", name: "Jamie Oarton" },
};

export function articleSchema(meta: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    url: `https://jamieoarton.com/writing/${meta.slug}`,
    author: {
      "@type": "Person",
      name: "Jamie Oarton",
      url: "https://jamieoarton.com",
    },
    publisher: {
      "@type": "Person",
      name: "Jamie Oarton",
    },
  };
}
