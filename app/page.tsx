import Link from "next/link";
import { DashboardCard } from "@/components/DashboardCard";
import { StatusPill } from "@/components/StatusPill";

const priorities = [
  "Finish one high-impact school task before opening lower-priority work.",
  "Review research notes and mark source gaps instead of guessing.",
  "Protect one recovery block so productivity stays sustainable.",
];

const systemCards = [
  { title: "Study tasks", eyebrow: "Academic", content: "Assignments, presentation scripts, English corrections, and exam review blocks stay organized from the Study console." },
  { title: "Research progress", eyebrow: "Thesis", content: "RRL, hypothesis, framework, variables, and methodology are grouped for the Philippine volleyball credibility study." },
  { title: "Life management", eyebrow: "Balance", content: "Daily review, weekly planning, and habit placeholders keep the system useful without becoming overwhelming." },
];

export default function DashboardPage() {
  return (
    <div className="space-y-5 md:space-y-6">
      <section className="relative overflow-hidden rounded-[2rem] border border-raphael-cyan/40 bg-gradient-to-br from-raphael-blue/25 via-white/[0.06] to-raphael-cyan/10 p-5 shadow-glow sm:p-8">
        <div className="absolute -right-16 -top-20 size-64 rounded-full border border-raphael-cyan/20 bg-raphael-cyan/10 blur-2xl" />
        <div className="absolute bottom-0 right-0 hidden h-40 w-2/3 bg-[linear-gradient(90deg,transparent,rgba(114,247,255,0.12),transparent)] opacity-70 md:block" />
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.38em] text-raphael-cyan sm:text-sm">RAPHAEL Core Online</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">A clean command center for focused student execution.</h2>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">MVP safe mode is active. Gmail, Google Calendar, and Google Drive integrations remain placeholders until explicit confirmation workflows are implemented.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <StatusPill label="Mode" value="Local-first MVP" />
            <StatusPill label="Assistant" value="Japanese-first" tone="blue" />
            <StatusPill label="External actions" value="Disabled" tone="white" />
          </div>
        </div>
      </section>

      <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <DashboardCard title="Today’s priorities" eyebrow="Focus protocol" accent="cyan">
          <ul className="space-y-3">
            {priorities.map((priority, index) => (
              <li key={priority} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-raphael-cyan/10 text-xs font-bold text-raphael-cyan">{index + 1}</span>
                <span>{priority}</span>
              </li>
            ))}
          </ul>
        </DashboardCard>

        <DashboardCard title="Quick actions" eyebrow="Launchpad" accent="blue">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
            {[
              ["Open chat", "/chat", "Ask for a plan or copy-ready draft."],
              ["Plan study session", "/study", "Use academic templates."],
              ["Review research", "/research", "Check RRL and APA support."],
              ["Manage tasks", "/tasks", "Update the local execution queue."],
            ].map(([label, href, description]) => (
              <Link key={href} href={href} className="rounded-2xl border border-raphael-cyan/25 bg-raphael-cyan/[0.06] px-4 py-3 transition hover:border-raphael-cyan hover:bg-raphael-cyan/10 hover:shadow-glow">
                <span className="block font-semibold text-white">{label}</span>
                <span className="mt-1 block text-xs text-slate-400">{description}</span>
              </Link>
            ))}
          </div>
        </DashboardCard>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {systemCards.map((card) => (
          <DashboardCard key={card.title} title={card.title} eyebrow={card.eyebrow} accent="white">
            <p>{card.content}</p>
          </DashboardCard>
        ))}
      </div>
    </div>
  );
}
