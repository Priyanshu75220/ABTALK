import { ArrowUpRight } from "lucide-react";

function Track({
  number,
  title,
  description,
}) {
  return (
    <div className="group rounded-[24px] border border-black/5 bg-[#F7F7F5] p-5 transition hover:-translate-y-1 hover:bg-[#F0EDFF]">

      <div className="flex items-center justify-between">

        <span className="text-xs font-bold text-black/25">
          {number}
        </span>

        <ArrowUpRight
          size={17}
          className="text-black/20 transition group-hover:text-[#6C4EFF]"
        />

      </div>

      <h3 className="mt-10 text-xl font-black">
        {title}
      </h3>

      <p className="mt-1 text-xs text-black/40">
        {description}
      </p>

    </div>
  );
}

export default Track;