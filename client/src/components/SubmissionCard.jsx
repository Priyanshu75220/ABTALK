import { Check, ExternalLink } from "lucide-react";

function Submission({
  githubUrl = "",
  linkedinUrl = "",
  onGithubChange,
  onLinkedinChange,
  githubSubmitted = false,
  linkedinSubmitted = false,
}) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm">

      {/* Header */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#6C4EFF]">
          SUBMIT PROOF
        </p>

        <h2 className="mt-2 text-2xl font-black tracking-tight">
          Show your work.
        </h2>

        <p className="mt-2 text-sm leading-6 text-black/45">
          Submit your GitHub work and LinkedIn post to complete today's challenge.
        </p>
      </div>


      {/* ================= GITHUB ================= */}
      <div className="mt-7">

        <div className="mb-2 flex items-center justify-between">

          <div className="flex items-center gap-3">

            {/* GitHub Logo - NO lucide */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111] text-white">
              <span className="text-lg font-black">
                GH
              </span>
            </div>

            <div>
              <p className="text-sm font-bold">
                GitHub
              </p>

              <p className="text-xs text-black/40">
                Repository or commit
              </p>
            </div>

          </div>

          {githubSubmitted && (
            <div className="flex items-center gap-1 text-xs font-semibold text-green-600">
              <Check size={15} />
              Submitted
            </div>
          )}

        </div>


        <div className="flex gap-2">

          <input
            type="url"
            value={githubUrl}
            onChange={(e) =>
              onGithubChange?.(e.target.value)
            }
            placeholder="https://github.com/username/repository"
            className="min-w-0 flex-1 rounded-xl border border-black/10 bg-[#F7F7F5] px-4 py-3 text-sm outline-none transition focus:border-[#6C4EFF] focus:ring-2 focus:ring-[#6C4EFF]/10"
          />

          <button
            type="button"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#111] text-white"
          >
            <ExternalLink size={17} />
          </button>

        </div>

      </div>


      {/* ================= LINKEDIN ================= */}
      <div className="mt-7">

        <div className="mb-2 flex items-center justify-between">

          <div className="flex items-center gap-3">

            {/* LinkedIn Logo - NO lucide */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A66C2] text-white">
              <span className="text-sm font-black">
                in
              </span>
            </div>

            <div>
              <p className="text-sm font-bold">
                LinkedIn
              </p>

              <p className="text-xs text-black/40">
                Your progress post
              </p>
            </div>

          </div>

          {linkedinSubmitted && (
            <div className="flex items-center gap-1 text-xs font-semibold text-green-600">
              <Check size={15} />
              Submitted
            </div>
          )}

        </div>


        <div className="flex gap-2">

          <input
            type="url"
            value={linkedinUrl}
            onChange={(e) =>
              onLinkedinChange?.(e.target.value)
            }
            placeholder="https://linkedin.com/posts/..."
            className="min-w-0 flex-1 rounded-xl border border-black/10 bg-[#F7F7F5] px-4 py-3 text-sm outline-none transition focus:border-[#6C4EFF] focus:ring-2 focus:ring-[#6C4EFF]/10"
          />

          <button
            type="button"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#111] text-white"
          >
            <ExternalLink size={17} />
          </button>

        </div>

      </div>


      {/* ================= INFO ================= */}
      <div className="mt-6 rounded-2xl bg-[#F5F2FF] p-4">

        <div className="flex gap-3">

          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6C4EFF] text-xs font-bold text-white">
            i
          </div>

          <p className="text-xs leading-5 text-black/55">
            Keep your GitHub repository and LinkedIn post public.
            Your daily proof helps build a visible learning streak.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Submission;