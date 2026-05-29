import { DashboardCard } from "@/components/DashboardCard";

const daily = ["What did I finish today?", "What is still open?", "What is the single most important next action?", "What should I stop doing tomorrow?"];
const weekly = ["Choose top three school outcomes.", "Block research time before low-priority tasks.", "Prepare presentation or English practice windows.", "Protect rest, exercise, and family time."];

export default function LifeManagementPage() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <DashboardCard title="Daily review checklist" eyebrow="Reset" accent="cyan">
        <ul className="space-y-3">{daily.map((item) => <li key={item}>□ {item}</li>)}</ul>
      </DashboardCard>
      <DashboardCard title="Weekly planning checklist" eyebrow="Strategy" accent="blue">
        <ul className="space-y-3">{weekly.map((item) => <li key={item}>□ {item}</li>)}</ul>
      </DashboardCard>
      <DashboardCard title="Habit tracker placeholder" eyebrow="Coming later" accent="white">
        <p>Future MVP+ versions can track sleep, reading, exercise, English practice, and research writing streaks locally before any cloud sync is considered.</p>
      </DashboardCard>
    </div>
  );
}
