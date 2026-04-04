export interface LeadMagnet {
  slug: string;
  title: string;
  description: string;
  bullets: string[];
  keyword: string;
}

export const leadMagnets: LeadMagnet[] = [
  {
    slug: "ai-diagnostic",
    title: "Get the AI Diagnostic Checklist",
    description:
      "The 15 questions every mid-market leadership team should answer before investing in AI.",
    bullets: [
      "6-dimension AI readiness scorecard",
      "Score your organisation 1-30",
      "Cited stats to benchmark against your peers",
      "Clear next steps based on your score",
    ],
    keyword: "DIAGNOSTIC",
  },
  {
    slug: "shadow-ai-policy",
    title: "Get The \"Yes, Safely\" AI Playbook",
    description:
      "A 12-slide blueprint for governing AI in your organisation. Data classification, approved tools, acceptable use, and an employee decision tree.",
    bullets: [
      "12-slide visual governance playbook",
      "Data classification protocol (4 levels)",
      "AI tool authorisation matrix",
      "Employee decision tree for daily AI use",
      "Accountability framework and review cycle",
    ],
    keyword: "PLAYBOOK",
  },
  {
    slug: "ai-strategy-compass",
    title: "Get the AI Strategy Compass",
    description:
      "The 6-point framework to test whether your organisation has a real AI strategy or just a list of tools.",
    bullets: [
      "6-point AI strategy self-assessment",
      "Score each dimension 1-5",
      "One-page strategy test template",
      "Benchmark against the research",
    ],
    keyword: "COMPASS",
  },
  {
    slug: "content-engine",
    title: "Get the 1-Hour AI Content Engine",
    description:
      "Turn one 10-minute voice recording into a week of content across LinkedIn, newsletter, TikTok, and YouTube.",
    bullets: [
      "5-step system from recording to published",
      "Which AI tools to use at each step",
      "Weekly content schedule you can copy",
      "The prompts to convert one transcript into 7-10 pieces",
    ],
    keyword: "CONTENT",
  },
];

export function getLeadMagnet(slug: string): LeadMagnet | undefined {
  return leadMagnets.find((lm) => lm.slug === slug);
}
