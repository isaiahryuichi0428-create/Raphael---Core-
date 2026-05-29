import { DashboardCard } from "@/components/DashboardCard";
import { PromptTemplateCard } from "@/components/PromptTemplateCard";
import { promptTemplates } from "@/lib/constants";

const modules = [
  "Review of Related Literature: organize athlete credibility, endorsements, fan engagement, and sports marketing evidence.",
  "Hypothesis: connect data-driven endorsement signals with perceived athlete credibility.",
  "Theoretical framework: map credibility theory, source attractiveness, and digital influence models.",
  "Variables: define independent, dependent, mediating, and control variables before collecting data.",
  "Methodology: document sample, instrument, analysis plan, ethics, and limitations clearly.",
];

export default function ResearchPage() {
  return (
    <div className="space-y-6">
      <DashboardCard title="Research command file" eyebrow="Active title" accent="cyan">
        <p className="text-lg font-semibold text-white">“The Data-Driven Endorsement: Redefining Athlete Credibility in the Philippine Volleyball Boom”</p>
        <p className="mt-3">RAPHAEL Core keeps this project structured, source-aware, and careful about APA 7th edition details. Missing source data should be flagged instead of guessed.</p>
      </DashboardCard>
      <div className="grid gap-5 lg:grid-cols-2">
        {modules.map((module) => (
          <DashboardCard key={module} title={module.split(":")[0]} accent="blue">
            <p>{module}</p>
          </DashboardCard>
        ))}
      </div>
      <DashboardCard title="Research prompt templates" eyebrow="RRL + APA support" accent="cyan">
        <div className="grid gap-4 lg:grid-cols-3">
          {promptTemplates.research.map((template) => <PromptTemplateCard key={template.title} {...template} />)}
        </div>
      </DashboardCard>
    </div>
  );
}
