export type TaskPriority = "High" | "Medium" | "Low";

export type Task = {
  id: string;
  title: string;
  notes: string;
  priority: TaskPriority;
  completed: boolean;
};

type TaskCardProps = {
  task: Task;
  onToggle: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
};

const priorityStyles: Record<TaskPriority, string> = {
  High: "border-red-400/50 text-red-200 bg-red-500/10",
  Medium: "border-amber-300/50 text-amber-100 bg-amber-400/10",
  Low: "border-cyan-300/50 text-cyan-100 bg-cyan-400/10",
};

export function TaskCard({ task, onToggle, onEdit, onDelete }: TaskCardProps) {
  return (
    <article className="rounded-2xl border border-raphael-line bg-white/[0.045] p-4 transition hover:border-raphael-cyan/40 hover:bg-white/[0.06]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className={`break-words text-lg font-semibold ${task.completed ? "text-slate-500 line-through" : "text-white"}`}>{task.title}</h3>
            <span className={`rounded-full border px-2.5 py-1 text-xs ${priorityStyles[task.priority]}`}>{task.priority}</span>
          </div>
          {task.notes ? <p className="mt-2 break-words text-sm leading-6 text-slate-300">{task.notes}</p> : null}
        </div>
        <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap lg:justify-end">
          <button type="button" onClick={() => onToggle(task.id)} className="rounded-full border border-raphael-cyan/40 px-3 py-2 text-xs text-raphael-cyan transition hover:bg-raphael-cyan/10">
            {task.completed ? "Reopen" : "Complete"}
          </button>
          <button type="button" onClick={() => onEdit(task)} className="rounded-full border border-white/20 px-3 py-2 text-xs text-slate-200 transition hover:bg-white/10">
            Edit
          </button>
          <button type="button" onClick={() => onDelete(task.id)} className="rounded-full border border-red-300/30 px-3 py-2 text-xs text-red-200 transition hover:bg-red-500/10">
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}
