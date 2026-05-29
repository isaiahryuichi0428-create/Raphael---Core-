"use client";

import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import type { ChatEntry } from "@/components/ChatMessage";
import { EmptyState } from "@/components/EmptyState";

const initialMessages: ChatEntry[] = [
  {
    id: "welcome",
    role: "assistant",
    content: "RAPHAEL Core online. まず状況を整理しましょう。学校、研究、英語、発表、生活管理のどれを進めますか？",
  },
];

function createMessageId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `message-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createMockResponse(input: string) {
  // TODO: Replace this mock response with an OpenAI API route integration after API keys, rate limits, and safety confirmation flows are configured.
  return `了解しました。RAPHAEL Coreとして、まず日本語で整理します。\n\n1. 目的: ${input || "入力内容"} を明確にする。\n2. 次の行動: 必要な条件・期限・提出形式を確認する。\n3. 出力: コピーして使える形で、短く論理的に作成する。\n\n不明な点は推測せず、確認してから進めます。`;
}

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isResponding, setIsResponding] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const responseTimer = useRef<ReturnType<typeof window.setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (responseTimer.current) window.clearTimeout(responseTimer.current);
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) {
      setError("Send a clear question or task so RAPHAEL Core can respond accurately.");
      return;
    }

    setError(null);
    const userMessage: ChatEntry = { id: createMessageId(), role: "user", content: trimmed };
    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsResponding(true);

    responseTimer.current = window.setTimeout(() => {
      try {
        const assistantMessage: ChatEntry = { id: createMessageId(), role: "assistant", content: createMockResponse(trimmed) };
        setMessages((current) => [...current, assistantMessage]);
      } catch (mockError) {
        console.error("RAPHAEL Core mock response failed", mockError);
        setError("RAPHAEL Core could not generate a mock response. Please try again.");
      } finally {
        setIsResponding(false);
      }
    }, 350);
  }

  return (
    <section className="rounded-[2rem] border border-raphael-line bg-white/[0.04] p-4 shadow-2xl md:p-6">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-white">Chat Interface</h2>
        <p className="mt-2 text-sm leading-6 text-slate-300">Mock assistant responses only. OpenAI API integration will be added later behind safe server-side routes.</p>
      </div>
      <div className="mb-4 flex min-h-[52vh] flex-col gap-4 rounded-3xl border border-white/10 bg-black/20 p-3 sm:p-4">
        {messages.length === 0 ? <EmptyState title="No chat messages yet" description="Ask RAPHAEL Core for a study plan, research outline, English correction, or life-management checklist." /> : null}
        {messages.map((message) => <ChatMessage key={message.id} {...message} />)}
        {isResponding ? (
          <div className="w-fit rounded-3xl border border-raphael-cyan/35 bg-raphael-blue/10 px-4 py-3 text-sm text-slate-300">
            <span className="mr-2 inline-block size-2 animate-pulse rounded-full bg-raphael-cyan" />
            RAPHAEL Core is organizing the response...
          </div>
        ) : null}
      </div>
      {error ? <p className="mb-3 rounded-2xl border border-amber-300/35 bg-amber-300/10 px-4 py-3 text-sm text-amber-100">{error}</p> : null}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input value={input} onChange={(event) => { setInput(event.target.value); setError(null); }} placeholder="Ask RAPHAEL Core for a study plan, research outline, English correction..." className="min-h-12 flex-1 rounded-2xl border border-raphael-line bg-raphael-panel px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-raphael-cyan" disabled={isResponding} />
        <button disabled={isResponding} className="rounded-2xl bg-raphael-cyan px-6 py-3 font-bold text-raphael-navy transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60">{isResponding ? "Thinking" : "Send"}</button>
      </form>
    </section>
  );
}
