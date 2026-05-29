export type ChatRole = "user" | "assistant";

export type ChatEntry = {
  id: string;
  role: ChatRole;
  content: string;
};

export function ChatMessage({ role, content }: ChatEntry) {
  const isAssistant = role === "assistant";

  return (
    <div className={`flex ${isAssistant ? "justify-start" : "justify-end"}`}>
      <div className={`max-w-[86%] rounded-3xl border px-4 py-3 text-sm leading-6 sm:max-w-[72%] ${isAssistant ? "border-raphael-cyan/40 bg-raphael-blue/10 text-slate-100" : "border-white/15 bg-white/10 text-white"}`}>
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-raphael-cyan">{isAssistant ? "RAPHAEL Core" : "You"}</p>
        <p className="whitespace-pre-wrap">{content}</p>
      </div>
    </div>
  );
}
