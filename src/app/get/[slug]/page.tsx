import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { leadMagnets, getLeadMagnet } from "@/lib/lead-magnets";
import { BeehiivForm } from "@/components/beehiiv-form";
import { JsonLd } from "@/components/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return leadMagnets.map((lm) => ({ slug: lm.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const lm = getLeadMagnet(slug);
  if (!lm) return {};

  return {
    title: lm.title,
    description: lm.description,
    openGraph: {
      title: lm.title,
      description: lm.description,
      type: "website",
      images: [{ url: "/jamie.png", width: 1024, height: 1024, alt: "Jamie Oarton" }],
    },
    twitter: {
      card: "summary_large_image",
      title: lm.title,
      description: lm.description,
    },
  };
}

export default async function LeadMagnetPage({ params }: PageProps) {
  const { slug } = await params;
  const lm = getLeadMagnet(slug);
  if (!lm) notFound();

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: lm.title,
    description: lm.description,
    url: `https://jamieoarton.com/get/${lm.slug}`,
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

  return (
    <>
      <JsonLd data={webPageSchema} />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-surface border-b border-border">
          <div className="max-w-2xl mx-auto px-6 py-16 sm:py-24 text-center">
            <p className="text-accent font-medium text-sm uppercase tracking-wide mb-4">
              Free resource
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-text mb-4 leading-tight">
              {lm.title}
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              {lm.description}
            </p>
          </div>
        </section>

        {/* What you get */}
        <section className="max-w-2xl mx-auto px-6 py-12 sm:py-16">
          <h2 className="font-display text-xl font-semibold text-text mb-6">
            What&apos;s inside
          </h2>
          <ul className="space-y-4 mb-10">
            {lm.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-text leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Email capture */}
          <div className="bg-surface border border-border rounded-lg p-6 sm:p-8">
            <p className="font-display font-semibold text-text mb-1">
              Get it free — straight to your inbox
            </p>
            <p className="text-text-secondary text-sm mb-5">
              Free. No spam. Unsubscribe anytime.
            </p>
            <BeehiivForm source={`lead-magnet-${lm.slug}`} />
          </div>

          {/* Keyword hint */}
          <p className="text-text-secondary/50 text-xs text-center mt-6">
            Came from LinkedIn? The keyword was{" "}
            <span className="font-mono font-medium text-text-secondary">
              {lm.keyword}
            </span>
          </p>
        </section>

        {/* Who is Jamie */}
        <section className="border-t border-border">
          <div className="max-w-2xl mx-auto px-6 py-12">
            <div className="flex items-start gap-4">
              <Image
                src="/jamie.png"
                alt="Jamie Oarton"
                width={64}
                height={64}
                className="rounded-full flex-shrink-0"
              />
              <div>
                <p className="font-medium mb-1">Jamie Oarton</p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  AI strategy advisor and fractional Chief AI Officer through{" "}
                  <a
                    href="https://bramforth.ai"
                    className="text-accent hover:text-accent-hover transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bramforth AI
                  </a>
                  . Helping UK mid-market businesses build AI strategies that
                  connect to how they make money.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
