import {
  ArrowRight,
  Flame,
  GitBranch,
  Check,
} from "lucide-react";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Step from "../components/Step";
import Proof from "../components/Proof";
import Track from "../components/Track";

function Landing() {
  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#111]">

      <Navbar />

      <main>

        {/* HERO */}

        <section className="px-5 pb-16 pt-12 sm:px-8 md:pt-20 lg:px-10 lg:pb-24">

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-[#EEEBFF] px-3.5 py-2 text-xs font-bold text-[#6046E8]">
                <Flame size={14} />
                60 DAY CODING CHALLENGE
              </div>

              <h1 className="mt-7 text-[55px] font-black leading-[0.9] tracking-[-3px] sm:text-7xl lg:text-[90px]">
                Don't just
                <br />
                <span className="text-[#6C4EFF]">
                  learn.
                </span>
                <br />
                Build.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-black/50 sm:text-lg">
                Build something every day for 60 days.
                Turn your learning into visible proof of
                consistency that recruiters can see.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/dashboard"
                  className="flex items-center justify-center gap-3 rounded-2xl bg-[#111] px-6 py-4 text-sm font-bold text-white"
                >
                  Start the challenge
                  <ArrowRight size={18} />
                </Link>

                <a
                  href="#how"
                  className="flex items-center justify-center rounded-2xl border border-black/10 bg-white px-6 py-4 text-sm font-bold"
                >
                  See how it works
                </a>

              </div>

              <div className="mt-5 flex flex-wrap gap-3 text-xs text-black/35">
                <span>● Student-focused</span>
                <span>·</span>
                <span>Free to join</span>
                <span>·</span>
                <span>Build in public</span>
              </div>

            </div>

            {/* HERO CARD */}

            <div className="relative">

              <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-[#6C4EFF]/20 blur-3xl" />

              <div className="relative rounded-[32px] bg-[#111] p-6 text-white shadow-2xl sm:p-8">

                <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/30">
                  THE CHALLENGE
                </p>

                <div className="mt-4 flex items-start justify-between">

                  <div>

                    <h2 className="text-4xl font-black">
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

                <div className="mt-12">

                  <div className="flex justify-between">

                    <div>

                      <p className="text-[10px] uppercase text-white/30">
                        YOUR JOURNEY
                      </p>

                      <p className="mt-1 text-2xl font-black">
                        Day 01
                      </p>

                    </div>

                    <span className="text-sm text-white/50">
                      0%
                    </span>

                  </div>

                  <div className="mt-4 h-2 rounded-full bg-white/10">

                    <div className="h-full w-[3%] rounded-full bg-[#8B78FF]" />

                  </div>

                </div>

                <div className="mt-8 grid grid-cols-3 gap-2">

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

              </div>

            </div>

          </div>

        </section>

        {/* HOW IT WORKS */}

        <section
          id="how"
          className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
        >

          <div className="mx-auto max-w-7xl">

            <p className="text-xs font-bold tracking-[2px] text-[#6C4EFF]">
              HOW IT WORKS
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-[-2px] sm:text-6xl">
              Your learning.
              <br />
              <span className="text-black/25">
                Made visible.
              </span>
            </h2>

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

        {/* PROOF */}

        <section
          id="proof"
          className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
        >

          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-xs font-bold tracking-[2px] text-[#6C4EFF]">
                PROOF OF WORK
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-[-2px] sm:text-6xl">
                Don't say
                <br />
                <span className="text-black/25">
                  you built it.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-6 text-black/45 sm:text-base">
                Show it. Every day becomes a small,
                verifiable piece of your learning journey.
              </p>

            </div>

            <div className="rounded-[30px] border border-black/5 bg-white p-5 shadow-sm sm:p-7">

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
                    <span className="font-black">
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

        {/* TRACKS */}

        <section
          id="tracks"
          className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
        >

          <div className="mx-auto max-w-7xl">

            <p className="text-xs font-bold tracking-[2px] text-[#6C4EFF]">
              FIND YOUR TRACK
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-[-2px] sm:text-6xl">
              What will
              <br />
              you build?
            </h2>

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

        {/* CTA */}

        <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

          <div className="mx-auto max-w-7xl">

            <div className="rounded-[32px] bg-[#6C4EFF] p-7 text-white sm:p-12">

              <p className="text-xs font-bold tracking-[2px] text-white/50">
                YOUR NEXT 60 DAYS
              </p>

              <h2 className="mt-4 text-5xl font-black leading-[0.9] tracking-[-2px] sm:text-7xl">
                Consistency
                <br />
                beats talent.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-6 text-white/65">
                You don't need to be the best student.
                You just need to keep showing up.
              </p>

              <Link
                to="/dashboard"
                className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm font-bold text-[#111]"
              >
                Start Day 01
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </section>

      </main>

      <footer className="border-t border-black/5 bg-white px-5 py-8">

        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <div className="font-black">
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

function MiniStat({ value, label }) {
  return (
    <div className="rounded-2xl bg-white/5 p-3">

      <p className="text-xl font-black">
        {value}
      </p>

      <p className="mt-1 text-[9px] text-white/30">
        {label}
      </p>

    </div>
  );
}

export default Landing;