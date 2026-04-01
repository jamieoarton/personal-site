"use client";

import { useState } from "react";

interface SubscribeFormProps {
  compact?: boolean;
}

export function SubscribeForm({ compact = false }: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Substack doesn't have a public API for subscriptions,
    // so we redirect to the Substack subscribe page with email pre-filled
    window.open(
      `https://jamieoarton.substack.com/subscribe?email=${encodeURIComponent(email)}`,
      "_blank"
    );
    setStatus("success");
    setEmail("");
  }

  if (status === "success") {
    return (
      <p className="text-accent font-medium text-sm">
        Check your email to confirm your subscription.
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
