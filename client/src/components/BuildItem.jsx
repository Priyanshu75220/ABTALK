import { Check } from "lucide-react";

function BuildItem({
  title,
  description,
  completed = false,
}) {
  return (
    <div className="flex gap-3">

      <div
        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
          completed
            ? "bg-[#6C4EFF] text-white"
            : "bg-black/5 text-black/30"
        }`}
      >
        {completed ? (
          <Check size={14} />
        ) : (
          <span className="h-2 w-2 rounded-full bg-current" />
        )}
      </div>

      <div>
        <p className="text-sm font-bold">
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-black/40">
          {description}
        </p>
      </div>

    </div>
  );
}

export default BuildItem;