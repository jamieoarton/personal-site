import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos",
  description: "Video content on AI strategy, governance, and practical adoption.",
};

export default function Videos() {
  return (
    <main className="px-6 py-16 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl mb-4">Videos</h1>
        <p className="text-text-secondary text-lg mb-12">Video content on AI strategy and practical adoption. Coming soon.</p>
      </div>
    </main>
  );
}
