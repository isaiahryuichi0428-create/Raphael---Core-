export const assistantName = "RAPHAEL Core";

export const safetyRules = [
  "Never send emails without user confirmation.",
  "Never create, edit, or delete calendar events without user confirmation.",
  "Never share, delete, or edit Drive files without user confirmation.",
  "Show only the minimum necessary personal information.",
  "Ask for confirmation before external actions.",
  "Do not guess if information is unclear.",
];

export const promptTemplates = {
  academic: [
    {
      title: "Assignment Clarifier",
      prompt:
        "RAPHAEL Core, explain this assignment in Japanese first, then create a step-by-step plan, checklist, and copy-paste-ready answer outline: [paste instructions].",
    },
    {
      title: "Presentation Builder",
      prompt:
        "Create a clear presentation script in Japanese-first style with English key terms, slide-by-slide bullets, transitions, and a confident closing for: [topic].",
    },
    {
      title: "English Improvement",
      prompt:
        "Correct my English while preserving my meaning. Show: 1) polished version, 2) grammar notes in Japanese, 3) stronger academic vocabulary: [paste text].",
    },
  ],
  research: [
    {
      title: "RRL Matrix Builder",
      prompt:
        "Build an RRL matrix for this topic. Include author/year, context, methods, findings, gap, and how it supports my study. Use APA 7 guidance: [topic and sources].",
    },
    {
      title: "APA 7 Citation Support",
      prompt:
        "Format these references in APA 7th edition and flag missing details instead of guessing: [paste source information].",
    },
    {
      title: "Hypothesis Refinement",
      prompt:
        "Review my research title, variables, and hypothesis. Explain in Japanese first, then provide polished academic wording: [paste details].",
    },
  ],
};
