import {
  ArrowRight,
  Check,
  Flame,
  GitBranch,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#111]">

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F7F7F5]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">

          {/* Logo */}
          <Link
            to="/"
            className="text-[22px] font-black tracking-[-1.2px]"
          >
            AB<span className="text-[#6C4EFF]">Talks</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#how"
              className="text-sm font-medium text-black/50 transition hover:text-black"
            >
              How it works
            </a>

            <a
              href="#tracks"
              className="text-sm font-medium text-black/50 transition hover:text-black"
            >
              Tracks
            </a>

            <a
              href="#proof"
              className="text-sm font-medium text-black/50 transition hover:text-black"
            >
              Proof of Work
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-full px-4 py-2 text-sm font-semibold text-black/60">
              Login
            </button>

            <Link
              to="/dashboard"
              className="rounded-full bg-[#111] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Start Challenge
            </Link>
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white md:hidden"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="border-t border-black/5 bg-[#F7F7F5] px-5 pb-5 pt-3 md:hidden">
            <div className="space-y-1">

              <a
                href="#how"
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm font-medium"
              >
                How it works
              </a>

              <a
                href="#tracks"
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm font-medium"
              >
                Tracks
              </a>

              <a
                href="#proof"
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm font-medium"
              >
                Proof of Work
              </a>

              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center justify-center rounded-xl bg-[#111] px-4 py-3.5 text-sm font-semibold text-white"
              >
                Start Challenge
              </Link>

            </div>
          </div>
        )}
      </header>

      <main>

        {/* ================= HERO ================= */}
        <section className="px-5 pb-14 pt-10 sm:px-8 md:px-10 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Hero Content */}
            <div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#6C4EFF]/20 bg-[#EEEBFF] px-3.5 py-2 text-[10px] font-bold tracking-[1px] text-[#6046E8] sm:text-xs">
                <Flame size={14} />
                60 DAY CODING CHALLENGE
              </div>

              {/* Heading */}
              <h1 className="mt-7 text-[54px] font-black leading-[0.88] tracking-[-3.5px] sm:text-[66px] md:text-[76px] lg:text-[88px] xl:text-[96px]">
                Don't just
                <br />
                <span className="text-[#6C4EFF]">learn.</span>
                <br />
                Build.
              </h1>

              <p className="mt-7 max-w-xl text-[16px] leading-7 text-black/55 sm:text-[17px] lg:text-lg">
                Build something every day for 60 days.
                Turn your learning into visible proof of
                consistency that recruiters can see.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/dashboard"
                  className="group flex w-full items-center justify-between rounded-[19px] bg-[#111] p-2 pl-5 text-sm font-bold text-white sm:w-auto sm:min-w-[250px]"
                >
                  <span>Start the challenge</span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#6C4EFF] transition-transform group-hover:translate-x-0.5">
                    <ArrowRight size={19} />
                  </span>
                </Link>

                <a
                  href="#how"
                  className="flex items-center justify-center rounded-[19px] border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold"
                >
                  See how it works
                </a>

              </div>

              {/* Trust */}
              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-black/35">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  Student-focused
                </span>

                <span>·</span>

                <span>Free to join</span>

                <span>·</span>

                <span>Build in public</span>
              </div>
            </div>

            {/* Hero Challenge Card */}
            <div className="relative">

              {/* Glow */}
              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#6C4EFF]/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[32px] bg-[#111] p-6 text-white shadow-2xl sm:p-8">

                {/* Decorative */}
                <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[#6C4EFF]/20 blur-2xl" />

                <div className="relative">

                  <div className="flex items-start justify-between">

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/35">
                        THE CHALLENGE
                      </p>

                      <h2 className="mt-3 text-4xl font-black tracking-[-1.5px]">
                        60 days.
                      </h2>

                      <p className="mt-1 text-sm text-white/40">
                        One build at a time.
                      </p>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-xl font-black">
                      60
                    </div>

                  </div>

                  {/* Progress */}
                  <div className="mt-12">

                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[10px] font-bold tracking-[1px] text-white/30">
                          YOUR JOURNEY
                        </p>

                        <p className="mt-1 text-2xl font-black">
                          Day 01
                        </p>
                      </div>

                      <span className="text-sm font-bold text-white/60">
                        0%
                      </span>
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[3%] rounded-full bg-[#8B78FF]" />
                    </div>

                    <div className="mt-3 flex justify-between text-[9px] font-semibold text-white/25">
                      <span>START</span>
                      <span>MILESTONE</span>
                      <span>FINISH</span>
                    </div>

                  </div>

                  {/* Stats */}
                  <div className="mt-8 grid grid-cols-3 gap-2">

                    <Stat
                      value="60"
                      label="Days"
                    />

                    <Stat
                      value="01"
                      label="Build / day"
                    />

                    <Stat
                      value="02"
                      label="Proofs"
                    />

                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ================= STATS ================= */}
        <section className="border-y border-black/5 bg-white">
          <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-black/10">

            <MiniStat
              value="60"
              label="Days"
            />

            <MiniStat
              value="1"
              label="Build / day"
            />

            <MiniStat
              value="2"
              label="Proofs"
            />

          </div>
        </section>


        {/* ================= HOW IT WORKS ================= */}
        <section
          id="how"
          className="px-5 py-16 sm:px-8 md:px-10 lg:px-10 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">

            <div className="max-w-2xl">

              <p className="text-[11px] font-bold tracking-[2px] text-[#6C4EFF]">
                HOW IT WORKS
              </p>

              <h2 className="mt-3 text-[38px] font-black leading-[0.95] tracking-[-2px] sm:text-5xl lg:text-6xl">
                Your learning.
                <br />
                <span className="text-black/30">
                  Made visible.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-6 text-black/45 sm:text-base">
                ABTalks turns daily coding practice into
                something you can actually show.
              </p>

            </div>

            {/* Steps */}
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

              <Step
                number="01"
                title="Pick a track"
                text="Choose what you want to get better at."
              />

              <Step
                number="02"
                title="Build every day"
                text="Complete one practical challenge daily."
              />

              <Step
                number="03"
                title="Show your work"
                text="Commit on GitHub and post on LinkedIn."
              />

              <Step
                number="04"
                title="Build your streak"
                text="Turn 60 days of effort into visible proof."
              />

            </div>

          </div>
        </section>


        {/* ================= PROOF ================= */}
        <section
          id="proof"
          className="px-5 py-12 sm:px-8 md:px-10 lg:px-10 lg:py-20"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">

            {/* Text */}
            <div>

              <p className="text-[11px] font-bold tracking-[2px] text-[#6C4EFF]">
                PROOF OF WORK
              </p>

              <h2 className="mt-3 text-[38px] font-black leading-[0.95] tracking-[-2px] sm:text-5xl lg:text-6xl">
                Don't say
                <br />
                <span className="text-black/30">
                  you built it.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-6 text-black/45 sm:text-base">
                Show it. Every day becomes a small,
                verifiable piece of your learning journey.
              </p>

            </div>

            {/* Proof Card */}
            <div className="rounded-[30px] border border-black/10 bg-white p-5 shadow-sm sm:p-6">

              <p className="text-[10px] font-bold tracking-[2px] text-black/30">
                EVERY DAY
              </p>

              <h3 className="mt-2 text-2xl font-black">
                Your proof of work
              </h3>

              <div className="mt-6 space-y-2">

                <Proof
                  icon={<GitBranch size={18} />}
                  title="GitHub"
                  text="Your code is committed"
                />

                <Proof
                  icon={
                    <span className="text-sm font-black">
                      in
                    </span>
                  }
                  title="LinkedIn"
                  text="Your progress is public"
                />

                <Proof
                  icon={<Check size={18} />}
                  title="ABTalks"
                  text="Your streak gets counted"
                />

              </div>

            </div>

          </div>
        </section>


        {/* ================= TRACKS ================= */}
        <section
          id="tracks"
          className="bg-white px-5 py-16 sm:px-8 md:px-10 lg:px-10 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">

            <div className="flex items-end justify-between gap-5">

              <div>

                <p className="text-[11px] font-bold tracking-[2px] text-[#6C4EFF]">
                  FIND YOUR TRACK
                </p>

                <h2 className="mt-3 text-[38px] font-black leading-[0.95] tracking-[-2px] sm:text-5xl lg:text-6xl">
                  What will
                  <br />
                  you build?
                </h2>

              </div>

              <span className="mb-1 hidden text-xs text-black/30 sm:block">
                04 tracks
              </span>

            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">

              <Track
                number="01"
                title="Web Dev"
                description="Build for the web"
              />

              <Track
                number="02"
                title="AI / ML"
                description="Build with intelligence"
              />

              <Track
                number="03"
                title="DSA"
                description="Think & solve"
              />

              <Track
                number="04"
                title="App Dev"
                description="Build mobile apps"
              />

            </div>

          </div>
        </section>


        {/* ================= FINAL CTA ================= */}
        <section className="px-5 py-16 sm:px-8 md:px-10 lg:px-10 lg:py-24">

          <div className="mx-auto max-w-7xl">

            <div className="overflow-hidden rounded-[32px] bg-[#6C4EFF] p-6 text-white sm:p-10 lg:p-14">

              <div className="grid items-center gap-10 lg:grid-cols-2">

                <div>

                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-[10px] font-bold tracking-[1px]">
                    <Flame size={13} />
                    YOUR NEXT 60 DAYS
                  </div>

                  <h2 className="mt-6 text-[42px] font-black leading-[0.92] tracking-[-2px] sm:text-6xl lg:text-7xl">
                    Consistency
                    <br />
                    beats talent.
                  </h2>

                </div>

                <div>

                  <p className="max-w-md text-sm leading-6 text-white/65 sm:text-base">
                    You don't need to be the best student.
                    You just need to keep showing up.
                  </p>

                  <Link
                    to="/dashboard"
                    className="mt-7 flex max-w-md items-center justify-between rounded-[20px] bg-white p-2 pl-5 text-sm font-bold text-[#111]"
                  >
                    Start Day 01

                    <span className="flex h-12 w-12 items-center justify-center rounded-[15px] bg-[#111] text-white">
                      <ArrowRight size={19} />
                    </span>
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-black/5 bg-white px-5 py-8 sm:px-8 lg:px-10">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="text-lg font-black tracking-tight">
            AB<span className="text-[#6C4EFF]">Talks</span>
          </div>

          <p className="text-[11px] text-black/30">
            60 days · 60 builds · 1 stronger you
          </p>

        </div>

      </footer>

    </div>
  );
}


/* ================= COMPONENTS ================= */

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl bg-white/5 p-3">
      <p className="text-lg font-black">
        {value}
      </p>

      <p className="mt-0.5 text-[9px] text-white/30">
        {label}
      </p>
    </div>
  );
}


function MiniStat({ value, label }) {
  return (
    <div className="px-3 py-5 text-center sm:py-7">
      <p className="text-xl font-black sm:text-2xl">
        {value}
      </p>

      <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-black/30 sm:text-[10px]">
        {label}
      </p>
    </div>
  );
}


function Step({ number, title, text }) {
  return (
    <div className="group rounded-[24px] border border-black/10 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-center justify-between">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEEBFF] text-xs font-black text-[#6C4EFF]">
          {number}
        </div>

        <ArrowRight
          size={16}
          className="text-black/20 transition group-hover:text-[#6C4EFF]"
        />

      </div>

      <h3 className="mt-10 text-[16px] font-black">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-black/40">
        {text}
      </p>

    </div>
  );
}


function Proof({ icon, title, text }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-[#F7F7F5] p-3.5">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
        {icon}
      </div>

      <div className="min-w-0">

        <p className="text-sm font-bold">
          {title}
        </p>

        <p className="mt-0.5 text-xs text-black/40">
          {text}
        </p>

      </div>

      <Check
        size={16}
        className="ml-auto shrink-0 text-green-600"
      />

    </div>
  );
}


function Track({ number, title, description }) {
  return (
    <div className="group min-h-[150px] rounded-[24px] border border-black/10 bg-[#F7F7F5] p-5 transition hover:-translate-y-1 hover:border-[#6C4EFF]/30 hover:shadow-lg">

      <div className="flex items-center justify-between">

        <span className="text-[10px] font-bold text-black/25">
          {number}
        </span>

        <ArrowRight
          size={15}
          className="text-black/20 transition group-hover:text-[#6C4EFF]"
        />

      </div>

      <div className="mt-10">

        <h3 className="text-[16px] font-black">
          {title}
        </h3>

        <p className="mt-1 text-[11px] text-black/40">
          {description}
        </p>

      </div>

    </div>
  );
}

export default Landing;