import { Check } from "lucide-react";

function Proof({
  icon,
  title,
  text,
  completed = true,
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-[#F7F7F5] p-3.5">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
        {icon}
      </div>

      <div className="flex-1">

        <p className="text-sm font-bold">
          {title}
        </p>

        <p className="text-xs text-black/40">
          {text}
        </p>

      </div>

      {completed && (
        <Check
          size={17}
          className="text-green-600"
        />
      )}

    </div>
  );
}

export default Proof;