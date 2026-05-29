import { DashboardCard } from "@/components/DashboardCard";
import { assistantName, safetyRules } from "@/lib/constants";

export default function SettingsPage() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <DashboardCard title="Assistant profile" eyebrow="Identity" accent="cyan">
        <dl className="space-y-3">
          <div><dt className="text-slate-400">Assistant name</dt><dd className="font-semibold text-white">{assistantName}</dd></div>
          <div><dt className="text-slate-400">Preferred language</dt><dd className="font-semibold text-white">Japanese-first, with clear English support when needed</dd></div>
          <div><dt className="text-slate-400">Personality</dt><dd className="font-semibold text-white">Calm, logical, clear, helpful, and safety-focused</dd></div>
        </dl>
      </DashboardCard>
      <DashboardCard title="Safety rules" eyebrow="Required confirmations" accent="blue">
        <ul className="space-y-3">{safetyRules.map((rule) => <li key={rule}>• {rule}</li>)}</ul>
      </DashboardCard>
      <DashboardCard title="OpenAI API placeholder" eyebrow="Future integration" accent="white">
        <p>Future versions should call OpenAI from a server-side Next.js route, keep API keys in environment variables, add rate limits, and preserve the Japanese-first RAPHAEL Core system behavior.</p>
      </DashboardCard>
      <DashboardCard title="Google integrations placeholder" eyebrow="Disabled in MVP" accent="cyan">
        <p>Gmail, Google Calendar, and Google Drive are intentionally not connected. Add OAuth, scoped permissions, audit logs, previews, and explicit user confirmation before any external action.</p>
      </DashboardCard>
    </div>
  );
}
