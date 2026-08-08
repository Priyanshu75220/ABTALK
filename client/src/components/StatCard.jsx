function StatCard({
  icon,
  label,
  value,
  suffix,
  highlight = false,
}) {
  return (
    <div
      className={`rounded-[22px] border p-4 sm:p-5 ${
        highlight
          ? "border-[#6C4EFF]/10 bg-[#F0EDFF]"
          : "border-black/5 bg-white"
      }`}
    >

      <div
        className={`flex h-9 w-9 items-center justify-center rounded-xl ${
          highlight
            ? "bg-[#6C4EFF] text-white"
            : "bg-[#F7F7F5] text-black/50"
        }`}
      >
        {icon}
      </div>

      <p className="mt-5 text-[10px] font-bold uppercase tracking-[1px] text-black/30">
        {label}
      </p>

      <div className="mt-1 flex items-baseline gap-1">

        <span className="text-2xl font-black sm:text-3xl">
          {value}
        </span>

        {suffix && (
          <span className="text-xs font-semibold text-black/30">
            {suffix}
          </span>
        )}

      </div>

    </div>
  );
}

export default StatCard;