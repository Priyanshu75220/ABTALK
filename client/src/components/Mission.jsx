function Mission({
  number,
  title,
  description,
}) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-4">

      <div className="flex items-start gap-3">

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F0EDFF] text-xs font-black text-[#6C4EFF]">
          {number}
        </div>

        <div>

          <h3 className="text-sm font-bold">
            {title}
          </h3>

          <p className="mt-1 text-xs leading-5 text-black/45">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
}

export default Mission;