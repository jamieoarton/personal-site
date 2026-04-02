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
    title: "Get the Shadow AI Policy Template",
    description:
      "A ready-to-adapt AI usage policy with data classification framework for UK businesses.",
    bullets: [
      "Complete AI acceptable use policy template",
      "Data classification framework (4 levels)",
      "Approved tool evaluation criteria",
      "UK GDPR compliance checklist",
    ],
    keyword: "POLICY",
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
];

export function getLeadMagnet(slug: string): LeadMagnet | undefined {
  return leadMagnets.find((lm) => lm.slug === slug);
}
