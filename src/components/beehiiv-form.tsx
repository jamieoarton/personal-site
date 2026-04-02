"use client";

import { useState } from "react";

interface BeehiivFormProps {
  publicationId?: string;
  source?: string;
}

export function BeehiivForm({ publicationId, source }: BeehiivFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const pubId =
    publicationId || process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    // If no publication ID is configured, fall back to redirect
    if (!pubId) {
      window.open(
        `https://jamieoarton.substack.com/subscribe?email=${encodeURIComponent(email)}`,
        "_blank"
      );
      setStatus("success");
      setEmail("");
      return;
    }

    try {
      const res = await fetch(`/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: source || "website" }),
      });

      if (!res.ok) {
        throw new Error("Subscription failed");
      }

      setStatus("success");
      setEmail("");
    } catch {
      // Fallback: redirect to Beehiiv subscribe page
      window.open(
        `https://jamieoarton.substack.com/subscribe?email=${encodeURIComponent(email)}`,
        "_blank"
      );
      setStatus("success");
      setEmail("");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-6">
        <p className="text-accent font-medium text-lg mb-2">
          You&apos;re in! Check your email.
        </p>
        <p className="text-text-secondary text-sm">
          Your download link is on its way.
        </p>
      </div>
    );
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your work email"
          required
          className="flex-1 px-4 py-3 rounded-md border border-border bg-bg text-text placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors text-sm"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-accent hover:bg-accent-hover text-white font-medium px-8 py-3 rounded-md transition-colors text-sm whitespace-nowrap disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Send me the free resource"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
      )}
      <p className="text-text-secondary/60 text-xs mt-3">
        You&apos;ll also receive Jamie&apos;s newsletter. Unsubscribe anytime.
      </p>
    </div>
  );
}
