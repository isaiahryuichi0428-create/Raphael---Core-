import Link from "next/link";

const navItems = [
  { href: "/", label: "Dashboard", icon: "◈" },
  { href: "/chat", label: "Chat", icon: "✦" },
  { href: "/study", label: "Study", icon: "◌" },
  { href: "/research", label: "Research", icon: "◇" },
  { href: "/life-management", label: "Life", icon: "◎" },
  { href: "/tasks", label: "Tasks", icon: "✓" },
  { href: "/settings", label: "Settings", icon: "⚙" },
];

export function Sidebar() {
  return (
    <aside className="sticky top-0 z-30 border-b border-raphael-line/80 bg-raphael-navy/90 p-3 backdrop-blur-xl lg:fixed lg:inset-y-0 lg:left-0 lg:w-72 lg:border-b-0 lg:border-r lg:p-6">
      <Link href="/" className="flex items-center gap-3 rounded-2xl px-1 py-1">
        <div className="grid size-10 shrink-0 place-items-center rounded-2xl border border-raphael-cyan/60 bg-raphael-cyan/10 text-raphael-cyan shadow-glow lg:size-11">R</div>
        <div className="min-w-0">
          <p className="truncate text-base font-bold text-white lg:text-lg">RAPHAEL Core</p>
          <p className="truncate text-[0.65rem] uppercase tracking-[0.24em] text-raphael-soft lg:text-xs">Student AI OS</p>
        </div>
      </Link>
      <nav aria-label="Primary navigation" className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:mt-6 lg:grid lg:grid-cols-1 lg:overflow-visible lg:pb-0">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="group flex shrink-0 items-center gap-2 rounded-2xl border border-transparent px-3 py-2.5 text-sm text-slate-300 transition hover:border-raphael-cyan/40 hover:bg-white/[0.06] hover:text-white lg:gap-3 lg:py-3">
            <span className="text-raphael-cyan">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-6 hidden rounded-3xl border border-raphael-blue/30 bg-raphael-blue/10 p-4 text-sm leading-6 text-slate-300 lg:block">
        <p className="font-semibold text-white">Safety-first mode active</p>
        <p className="mt-2">External actions stay disabled until you review and confirm them.</p>
      </div>
    </aside>
  );
}
