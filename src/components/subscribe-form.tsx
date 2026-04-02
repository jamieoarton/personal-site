"use client";

import { useState } from "react";

interface SubscribeFormProps {
  compact?: boolean;
  source?: string;
}

export function SubscribeForm({ compact = false, source = "newsletter" }: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setEmail("");
    } catch {
      // Fallback to Substack if API fails
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
      <p className="text-accent font-medium text-sm">
        You&apos;re in! Check your email.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex ${compact ? "flex-row" : "flex-col sm:flex-row"} gap-3`}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        required
        className="flex-1 px-4 py-3 rounded-md border border-border bg-bg text-text placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors text-sm"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-md transition-colors text-sm whitespace-nowrap disabled:opacity-50"
      >
        {status === "loading" ? "..." : "Subscribe"}
      </button>
    </form>
  );
}
