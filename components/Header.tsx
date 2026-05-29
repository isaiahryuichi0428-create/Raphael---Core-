export function Header() {
  return (
    <header className="mb-5 flex flex-col justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur md:mb-8 md:flex-row md:items-center md:p-5">
      <div>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-raphael-cyan md:text-xs">Command Interface</p>
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">RAPHAEL Core</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">Calm, logical, Japanese-first support for school, research, presentations, English, and life management.</p>
      </div>
      <div className="w-fit rounded-2xl border border-raphael-cyan/40 px-4 py-3 text-xs font-semibold text-raphael-cyan shadow-glow md:text-sm">
        ONLINE · MVP SAFE MODE
      </div>
    </header>
  );
}
