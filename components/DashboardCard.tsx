import type { ReactNode } from "react";

type DashboardCardProps = {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  accent?: "blue" | "cyan" | "white";
};

const accentStyles = {
  blue: "border-raphael-blue/45 shadow-blue-500/10",
  cyan: "border-raphael-cyan/45 shadow-cyan-300/10",
  white: "border-white/20 shadow-white/5",
};

export function DashboardCard({ title, eyebrow, children, accent = "blue" }: DashboardCardProps) {
  return (
    <section className={`rounded-3xl border bg-white/[0.045] p-5 shadow-2xl backdrop-blur ${accentStyles[accent]}`}>
      {eyebrow ? <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-raphael-cyan">{eyebrow}</p> : null}
      <h2 className="mb-4 text-xl font-semibold text-white">{title}</h2>
      <div className="text-sm leading-6 text-slate-300">{children}</div>
    </section>
  );
}
