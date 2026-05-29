"use client";

import type { FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { EmptyState } from "@/components/EmptyState";
import { TaskCard } from "@/components/TaskCard";
import type { Task, TaskPriority } from "@/components/TaskCard";

const storageKey = "raphael-core-tasks";
const priorities: TaskPriority[] = ["High", "Medium", "Low"];

const starterTasks: Task[] = [
  { id: "starter-1", title: "Draft research RRL matrix", notes: "List five strong sources and identify the research gap.", priority: "High", completed: false },
  { id: "starter-2", title: "Prepare English presentation script", notes: "Create a two-minute draft with simple transitions.", priority: "Medium", completed: false },
];

function isTaskPriority(value: unknown): value is TaskPriority {
  return typeof value === "string" && priorities.includes(value as TaskPriority);
}

function isTask(value: unknown): value is Task {
  if (!value || typeof value !== "object") return false;
  const task = value as Partial<Task>;
  return typeof task.id === "string" && typeof task.title === "string" && typeof task.notes === "string" && isTaskPriority(task.priority) && typeof task.completed === "boolean";
}

function createTaskId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `task-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [priority, setPriority] = useState<TaskPriority>("Medium");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [storageError, setStorageError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (!stored) {
        setTasks(starterTasks);
        return;
      }

      const parsed: unknown = JSON.parse(stored);
      if (!Array.isArray(parsed) || !parsed.every(isTask)) {
        throw new Error("Saved task data was not in the expected format.");
      }

      setTasks(parsed);
    } catch (error) {
      console.error("RAPHAEL Core task storage load failed", error);
      setStorageError("Saved tasks could not be loaded, so RAPHAEL Core restored the starter queue. Your browser may have blocked or corrupted localStorage data.");
      setTasks(starterTasks);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    try {
      window.localStorage.setItem(storageKey, JSON.stringify(tasks));
      setStorageError((current) => current?.startsWith("Saved tasks could not be loaded") ? current : null);
    } catch (error) {
      console.error("RAPHAEL Core task storage save failed", error);
      setStorageError("Tasks are visible now, but RAPHAEL Core could not save them to localStorage. Check private browsing, storage permissions, or available browser space.");
    }
  }, [isLoaded, tasks]);

  const sortedTasks = useMemo(() => {
    const order: Record<TaskPriority, number> = { High: 0, Medium: 1, Low: 2 };
    return [...tasks].sort((a, b) => Number(a.completed) - Number(b.completed) || order[a.priority] - order[b.priority] || a.title.localeCompare(b.title));
  }, [tasks]);

  function resetForm() {
    setTitle("");
    setNotes("");
    setPriority("Medium");
    setEditingId(null);
    setFormError(null);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      setFormError("Add a task title before saving.");
      return;
    }

    if (editingId) {
      setTasks((current) => current.map((task) => task.id === editingId ? { ...task, title: trimmedTitle, notes: notes.trim(), priority } : task));
    } else {
      setTasks((current) => [{ id: createTaskId(), title: trimmedTitle, notes: notes.trim(), priority, completed: false }, ...current]);
    }
    resetForm();
  }

  function handleEdit(task: Task) {
    setEditingId(task.id);
    setTitle(task.title);
    setNotes(task.notes);
    setPriority(task.priority);
    setFormError(null);
  }

  function handleDelete(id: string) {
    setTasks((current) => current.filter((item) => item.id !== id));
    if (editingId === id) resetForm();
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,380px)_1fr]">
      <form onSubmit={handleSubmit} className="h-fit rounded-[2rem] border border-raphael-cyan/30 bg-white/[0.045] p-4 shadow-glow sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-raphael-cyan">Local task memory</p>
        <h2 className="mt-2 text-2xl font-bold text-white">{editingId ? "Edit task" : "Add task"}</h2>
        <label className="mt-5 block text-sm text-slate-300">
          Task title
          <input value={title} onChange={(event) => { setTitle(event.target.value); setFormError(null); }} className="mt-2 w-full rounded-2xl border border-raphael-line bg-raphael-panel px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-raphael-cyan" placeholder="Example: Finish methodology outline" />
        </label>
        <label className="mt-4 block text-sm text-slate-300">
          Notes
          <textarea value={notes} onChange={(event) => setNotes(event.target.value)} className="mt-2 min-h-28 w-full rounded-2xl border border-raphael-line bg-raphael-panel px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-raphael-cyan" placeholder="Add deadline, rubric details, or next action." />
        </label>
        <label className="mt-4 block text-sm text-slate-300">
          Priority
          <select value={priority} onChange={(event) => setPriority(event.target.value as TaskPriority)} className="mt-2 w-full rounded-2xl border border-raphael-line bg-raphael-panel px-4 py-3 text-white outline-none transition focus:border-raphael-cyan">
            {priorities.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        {formError ? <p className="mt-3 rounded-2xl border border-red-300/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">{formError}</p> : null}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button className="flex-1 rounded-2xl bg-raphael-cyan px-4 py-3 font-bold text-raphael-navy transition hover:bg-white">{editingId ? "Save" : "Add"}</button>
          {editingId ? <button type="button" onClick={resetForm} className="rounded-2xl border border-white/20 px-4 py-3 text-white transition hover:bg-white/10">Cancel</button> : null}
        </div>
      </form>

      <section className="space-y-4">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-raphael-cyan">Execution queue</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Tasks</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-400">Stored in this browser with localStorage. No external database is used.</p>
        </div>

        {!isLoaded ? (
          <div className="rounded-[2rem] border border-raphael-line bg-white/[0.04] p-6 text-sm text-slate-300 shadow-2xl">
            <div className="mb-4 h-4 w-44 animate-pulse rounded-full bg-white/10" />
            <div className="space-y-3">
              <div className="h-16 animate-pulse rounded-2xl bg-white/[0.06]" />
              <div className="h-16 animate-pulse rounded-2xl bg-white/[0.04]" />
            </div>
          </div>
        ) : null}

        {storageError && isLoaded ? <p className="rounded-2xl border border-amber-300/35 bg-amber-300/10 px-4 py-3 text-sm leading-6 text-amber-100">{storageError}</p> : null}

        {isLoaded && sortedTasks.length === 0 ? (
          <EmptyState title="No tasks in the queue" description="Add your next assignment, research step, presentation draft, or life admin task. RAPHAEL Core will keep it in this browser only." />
        ) : null}

        {isLoaded && sortedTasks.map((task) => (
          <TaskCard key={task.id} task={task} onEdit={handleEdit} onToggle={(id) => setTasks((current) => current.map((item) => item.id === id ? { ...item, completed: !item.completed } : item))} onDelete={handleDelete} />
        ))}
      </section>
    </div>
  );
}
