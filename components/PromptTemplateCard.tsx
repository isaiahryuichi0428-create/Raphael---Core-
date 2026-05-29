type PromptTemplateCardProps = {
  title: string;
  prompt: string;
};

export function PromptTemplateCard({ title, prompt }: PromptTemplateCardProps) {
  return (
    <article className="rounded-2xl border border-raphael-line bg-raphael-panel/70 p-4 transition hover:border-raphael-cyan/60 hover:shadow-glow">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-3 rounded-xl bg-black/25 p-3 font-mono text-xs leading-5 text-raphael-soft">{prompt}</p>
    </article>
  );
}
