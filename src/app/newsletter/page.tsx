import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Practical AI strategy thinking delivered to your inbox. No spam, no hype.",
};

export default function Newsletter() {
  return (
    <main className="px-6 py-16 md:px-8">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="font-display text-4xl md:text-5xl mb-4">Get my thinking in your inbox</h1>
        <p className="text-text-secondary text-lg mb-8">I write about practical AI strategy — what works, what doesn&apos;t, and what most businesses get wrong. Direct, useful, no fluff.</p>
        <a href="https://jamieoarton.substack.com" className="inline-block bg-accent hover:bg-accent-hover text-white font-medium px-8 py-3 rounded-md transition-colors mb-8" target="_blank" rel="noopener noreferrer">
          Subscribe on Substack
        </a>
        <p className="text-text-secondary text-sm">Free. Unsubscribe anytime. No spam, ever.</p>
      </div>
    </main>
  );
}
