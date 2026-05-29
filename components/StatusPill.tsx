type StatusPillProps = {
  label: string;
  value: string;
  tone?: "cyan" | "blue" | "white";
};

const toneStyles = {
  cyan: "border-raphael-cyan/45 bg-raphael-cyan/10 text-raphael-cyan",
  blue: "border-raphael-blue/45 bg-raphael-blue/10 text-raphael-soft",
  white: "border-white/15 bg-white/[0.06] text-slate-200",
};

export function StatusPill({ label, value, tone = "cyan" }: StatusPillProps) {
  return (
    <div className={`rounded-2xl border px-4 py-3 ${toneStyles[tone]}`}>
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] opacity-75">{label}</p>
      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}
