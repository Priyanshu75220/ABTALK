import { Check, ChevronRight } from "lucide-react";

function TaskItem({
  number,
  title,
  description,
  completed = false,
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white p-3">

      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
          completed
            ? "bg-[#6C4EFF] text-white"
            : "bg-[#F0EDFF] text-[#6C4EFF]"
        }`}
      >
        {completed ? <Check size={16} /> : number}
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-sm font-bold">
          {title}
        </p>

        <p className="mt-0.5 truncate text-xs text-black/40">
          {description}
        </p>

      </div>

      <ChevronRight
        size={17}
        className="text-black/20"
      />

    </div>
  );
}

export default TaskItem;