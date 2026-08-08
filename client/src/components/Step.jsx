function Step({
  number,
  title,
  text,
}) {
  return (
    <div className="rounded-[24px] border border-black/5 bg-white p-5">

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0EDFF] text-xs font-black text-[#6C4EFF]">
        {number}
      </div>

      <h3 className="mt-5 text-lg font-black">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-black/45">
        {text}
      </p>

    </div>
  );
}

export default Step;