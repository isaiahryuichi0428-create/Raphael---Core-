import { DashboardCard } from "@/components/DashboardCard";
import { PromptTemplateCard } from "@/components/PromptTemplateCard";
import { promptTemplates } from "@/lib/constants";

const sections = [
  { title: "Assignments", content: "Break requirements into rubric, deadline, resources, draft, and final submission checkpoints." },
  { title: "Presentations", content: "Create slide logic, speaker notes, timing, transitions, and Q&A preparation." },
  { title: "Scripts", content: "Generate natural Japanese-first scripts with polished English phrases and confident delivery cues." },
  { title: "Exam review", content: "Convert topics into active recall questions, weak-point drills, and short review cycles." },
];

export default function StudyPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {sections.map((section) => (
          <DashboardCard key={section.title} title={section.title} accent="cyan">
            <p>{section.content}</p>
          </DashboardCard>
        ))}
      </div>
      <DashboardCard title="Academic prompt templates" eyebrow="Copy-paste ready" accent="blue">
        <div className="grid gap-4 lg:grid-cols-3">
          {promptTemplates.academic.map((template) => <PromptTemplateCard key={template.title} {...template} />)}
        </div>
      </DashboardCard>
    </div>
  );
}
