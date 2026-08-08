import { ArrowRight, Flame, Github, Linkedin, Check } from "lucide-react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#111]">
      {/* Navbar */}
      <header className="flex items-center justify-between px-5 py-5">
        <div className="text-xl font-bold tracking-tight">
          AB<span className="text-[#6C4EFF]">Talks</span>
        </div>

        <button className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium">
          Login
        </button>
      </header>

      <main>
        {/* Hero */}
        <section className="px-5 pt-10 pb-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#EDE9FF] px-3 py-1.5 text-xs font-semibold text-[#6046E8]">
            <Flame size={14} />
            60 DAY CODING CHALLENGE
          </div>

          <h1 className="text-[48px] font-bold leading-[0.95] tracking-[-2.5px]">
            Build.
            <br />
            Show up.
            <br />
            <span className="text-[#6C4EFF]">Get noticed.</span>
          </h1>

          <p className="mt-6 max-w-[340px] text-[17px] leading-7 text-black/60">
            Build something every day for 60 days and turn your
            learning into visible proof of work.
          </p>

          <Link
            to="/dashboard"
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#111] px-5 py-4 text-base font-semibold text-white"
          >
            Start the 60-Day Challenge
            <ArrowRight size={18} />
          </Link>

          <p className="mt-3 text-center text-xs text-black/40">
            Free · Student-focused · Build in public
          </p>
        </section>

        {/* Social proof */}
        <section className="px-5 pb-10">
          <div className="rounded-3xl bg-[#111] p-5 text-white">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/50">
                  The goal
                </p>
                <p className="mt-1 text-3xl font-bold">60 days</p>
              </div>

              <p className="text-right text-sm text-white/50">
                One build.
                <br />
                Every day.
              </p>
            </div>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[20%] rounded-full bg-[#8B78FF]" />
            </div>

            <div className="mt-2 flex justify-between text-xs text-white/40">
              <span>Day 1</span>
              <span>Day 60</span>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="px-5 py-10">
          <p className="text-sm font-semibold text-[#6C4EFF]">
            HOW IT WORKS
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Learning becomes
            <br />
            visible.
          </h2>

          <div className="mt-7 space-y-3">
            <Step
              number="01"
              title="Pick your track"
              description="Choose what you want to build and improve."
            />

            <Step
              number="02"
              title="Build every day"
              description="Complete one practical challenge each day."
            />

            <Step
              number="03"
              title="Share your proof"
              description="Submit your GitHub commit and LinkedIn post."
            />

            <Step
              number="04"
              title="Build your streak"
              description="60 days of consistency becomes your portfolio."
            />
          </div>
        </section>

        {/* Proof */}
        <section className="px-5 py-10">
          <div className="rounded-3xl border border-black/10 bg-white p-6">
            <p className="text-sm font-semibold text-black/40">
              YOUR DAILY PROOF
            </p>

            <div className="mt-5 space-y-3">
              <Proof
                icon={<Github size={19} />}
                title="GitHub"
                text="Commit your work"
              />

              <Proof
                icon={<Linkedin size={19} />}
                title="LinkedIn"
                text="Share your progress"
              />

              <Proof
                icon={<Check size={19} />}
                title="ABTalks"
                text="Build your public streak"
              />
            </div>
          </div>
        </section>

        {/* Tracks */}
        <section className="px-5 py-10">
          <p className="text-sm font-semibold text-[#6C4EFF]">
            CHOOSE YOUR PATH
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            What will you
            <br />
            build?
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <Track title="Web Development" emoji="◈" />
            <Track title="AI / ML" emoji="✦" />
            <Track title="DSA" emoji="⌘" />
            <Track title="App Development" emoji="▣" />
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-5 pt-10 pb-16">
          <div className="rounded-[28px] bg-[#6C4EFF] p-6 text-white">
            <p className="text-sm font-medium text-white/60">
              YOUR NEXT 60 DAYS
            </p>

            <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight">
              Start before
              <br />
              you're ready.
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/70">
              You don't need to be perfect. You just need to show up
              tomorrow.
            </p>

            <Link
              to="/dashboard"
              className="mt-7 flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 font-semibold text-[#111]"
            >
              Start Building
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

function Step({ number, title, description }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-black/10 bg-white p-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EDE9FF] text-xs font-bold text-[#6C4EFF]">
        {number}
      </div>

      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm leading-5 text-black/50">
          {description}
        </p>
      </div>
    </div>
  );
}

function Proof({ icon, title, text }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-[#F7F7F5] p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
        {icon}
      </div>

      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-black/50">{text}</p>
      </div>

      <Check className="ml-auto text-green-600" size={18} />
    </div>
  );
}

function Track({ title, emoji }) {
  return (
    <div className="min-h-[110px] rounded-2xl border border-black/10 bg-white p-4">
      <span className="text-xl">{emoji}</span>
      <p className="mt-5 text-sm font-semibold">{title}</p>
    </div>
  );
}

export default Landing;