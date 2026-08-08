function Activity({
  icon,
  title,
  description,
  time,
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-[#F7F7F5] p-3.5">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#6C4EFF]">
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <p className="truncate text-sm font-bold">
          {title}
        </p>

        <p className="mt-0.5 truncate text-xs text-black/40">
          {description}
        </p>

      </div>

      <span className="shrink-0 text-[10px] text-black/25">
        {time}
      </span>

    </div>
  );
}

export default Activity;