export interface LeadMagnet {
  slug: string;
  title: string;
  description: string;
  bullets: string[];
  keyword: string;
  automationId?: string;
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
    automationId: "aut_48573b31-6689-41e0-87b3-7077e1acafca",
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
    automationId: "aut_953ffc5f-a40e-4f9e-8cf3-560c675051d5",
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
    automationId: "aut_372dda5d-687d-43d5-91ef-87fd1085fd1e",
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
  {
    slug: "tool-stack",
    title: "Get the AI Tool Stack Cheat Sheet",
    description:
      "Stop comparing fifty tools. Here is the exact stack that works, with a free alternative for everything.",
    bullets: [
      "The right tool for 12 common tasks",
      "Free alternative for every paid tool",
      "3-question test before adding any new tool",
      "Real monthly cost breakdown (under £55)",
    ],
    keyword: "STACK",
  },
  {
    slug: "claude-code-guide",
    title: "Get the Claude Code Setup Guide",
    description:
      "Go from zero to your first useful AI task in 10 minutes. No dev background needed.",
    bullets: [
      "Step-by-step install (Mac, Windows, Linux)",
      "Your first 5 commands to try immediately",
      "What Claude Code is great at (and what it is not)",
      "Pro tips and common mistakes to avoid",
    ],
    keyword: "CODE",
  },
  {
    slug: "second-brain",
    title: "Give Your AI a Memory",
    description:
      "Stop re-explaining yourself every time you open Claude. Set up one folder that compounds your knowledge forever.",
    bullets: [
      "Why your AI starts from zero every session (and the fix)",
      "Step-by-step Obsidian install on Mac with screenshots",
      "How to connect Claude to your vault using Cowork",
      "The one habit that makes the whole system compound",
      "Bonus: Excalidraw for visual thinkers",
    ],
    keyword: "GUIDE",
    automationId: "aut_4fb991c9-23d1-4e0c-9147-ca757c36a99a",
  },
];

export function getLeadMagnet(slug: string): LeadMagnet | undefined {
  return leadMagnets.find((lm) => lm.slug === slug);
}
