import type { ReactNode } from "react";

type EmptyStateProps = {
  title: string;
  description: string;
  action?: ReactNode;
};

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="rounded-[2rem] border border-dashed border-raphael-cyan/35 bg-raphael-cyan/[0.04] p-6 text-center shadow-inner shadow-cyan-300/5">
      <div className="mx-auto grid size-12 place-items-center rounded-2xl border border-raphael-cyan/40 bg-raphael-cyan/10 text-xl text-raphael-cyan">＋</div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-400">{description}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
