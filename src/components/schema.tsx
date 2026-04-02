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
  image: "https://jamieoarton.com/jamie.png",
  description:
    "AI strategy advisor and fractional Chief AI Officer helping UK mid-market businesses build AI strategies that work.",
  jobTitle: "Fractional Chief AI Officer",
  knowsAbout: [
    "AI Strategy",
    "Fractional CAIO",
    "AI Governance",
    "Shadow AI",
    "AI Adoption",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Bramforth AI",
    url: "https://bramforth.ai",
  },
  sameAs: [
    "https://jamieoarton.substack.com",
    "https://linkedin.com/in/joarton",
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
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    image: "https://jamieoarton.com/jamie.png",
    url: `https://jamieoarton.com${meta.url}`,
    author: {
      "@type": "Person",
      name: "Jamie Oarton",
      url: "https://jamieoarton.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Bramforth AI",
      url: "https://bramforth.ai",
    },
  };
}

export function faqSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://jamieoarton.com${item.url}`,
    })),
  };
}
