import {
  Award,
  Check,
  Flame,
  GitBranch,
  Target,
  Trophy,
} from "lucide-react";

import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import TaskItem from "../components/TaskItem";
import Activity from "../components/Activity";

import { Link } from "react-router-dom";

function Dashboard() {
  const student = {
    name: "Priyanshu",
    track: "Web Development",
    streak: 11,
    currentDay: 12,
    totalDays: 60,
    completedDays: 12,
  };

  const progress = Math.round(
    (student.completedDays / student.totalDays) * 100
  );

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#111]">

      <Navbar dashboard />

      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">

        {/* HEADER */}

        <section>

          <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#6C4EFF]">
            STUDENT DASHBOARD
          </p>

          <h1 className="mt-3 text-[38px] font-black leading-none tracking-[-2px] sm:text-5xl">
            Hey, {student.name} 👋
          </h1>

          <p className="mt-3 text-sm text-black/45 sm:text-base">
            Keep showing up. You're on day{" "}
            <b className="text-black">
              {student.currentDay}
            </b>
            .
          </p>

        </section>

        {/* STATS */}

        <section className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">

          <StatCard
            icon={<Flame size={19} />}
            label="Current streak"
            value={student.streak}
            suffix="days"
            highlight
          />

          <StatCard
            icon={<Target size={19} />}
            label="Challenge day"
            value={student.currentDay}
            suffix="/ 60"
          />

          <StatCard
            icon={<Check size={19} />}
            label="Completed"
            value={student.completedDays}
            suffix="days"
          />

          <StatCard
            icon={<Trophy size={19} />}
            label="Completion"
            value={`${progress}%`}
          />

        </section>

        {/* MAIN */}

        <section className="mt-5 grid gap-5 lg:grid-cols-[1.5fr_1fr]">

          {/* TODAY TASK */}

          <div className="rounded-[28px] bg-[#111] p-6 text-white sm:p-8">

            <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/35">
              TODAY'S CHALLENGE
            </p>

            <p className="mt-5 text-sm font-semibold text-white/35">
              DAY {student.currentDay}
            </p>

            <h2 className="mt-1 max-w-xl text-[30px] font-black leading-tight tracking-[-1px] sm:text-4xl">
              Build a responsive landing page
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-white/45">
              Create a clean responsive landing page using
              HTML, CSS and JavaScript.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">

              <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/60">
                Web Development
              </span>

              <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/60">
                ~45 min
              </span>

            </div>

            <Link
              to="/day/12"
              className="mt-7 flex w-full items-center justify-center rounded-2xl bg-white px-5 py-4 text-sm font-bold text-[#111] sm:max-w-[280px]"
            >
              Open today's challenge →
            </Link>

          </div>

          {/* STREAK */}

          <div className="rounded-[28px] border border-black/5 bg-white p-6 sm:p-7">

            <div className="flex items-start justify-between">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[2px] text-black/30">
                  YOUR STREAK
                </p>

                <h2 className="mt-2 text-4xl font-black">
                  {student.streak}
                </h2>

                <p className="text-sm text-black/40">
                  consecutive days
                </p>

              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0EDFF] text-[#6C4EFF]">
                <Flame size={22} />
              </div>

            </div>

            <div className="mt-7 grid grid-cols-7 gap-2">

              {["M", "T", "W", "T", "F", "S", "S"].map(
                (day, index) => (
                  <div
                    key={index}
                    className="text-center"
                  >

                    <p className="mb-2 text-[9px] font-bold text-black/25">
                      {day}
                    </p>

                    <div
                      className={`flex aspect-square items-center justify-center rounded-xl ${
                        index < 6
                          ? "bg-[#6C4EFF] text-white"
                          : "border border-dashed border-black/10"
                      }`}
                    >
                      {index < 6 && <Check size={13} />}
                    </div>

                  </div>
                )
              )}

            </div>

            <p className="mt-5 text-xs leading-5 text-black/35">
              Complete today's task before midnight to keep
              your streak alive.
            </p>

          </div>

        </section>

        {/* PROGRESS */}

        <section className="mt-5 grid gap-5 md:grid-cols-2">

          <div className="rounded-[28px] border border-black/5 bg-white p-6">

            <div className="flex items-end justify-between">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[2px] text-black/30">
                  CHALLENGE PROGRESS
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  {student.completedDays} of {student.totalDays}
                </h2>

              </div>

              <span className="text-2xl font-black text-[#6C4EFF]">
                {progress}%
              </span>

            </div>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-black/5">

              <div
                className="h-full rounded-full bg-[#6C4EFF]"
                style={{ width: `${progress}%` }}
              />

            </div>

            <div className="mt-3 flex justify-between text-[10px] font-bold text-black/25">
              <span>DAY 1</span>
              <span>DAY 30</span>
              <span>DAY 60</span>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-[#F7F7F5] p-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#6C4EFF]">
                <Award size={18} />
              </div>

              <div>

                <p className="text-sm font-bold">
                  Great progress!
                </p>

                <p className="text-xs text-black/40">
                  48 more days to finish.
                </p>

              </div>

            </div>

          </div>

          {/* ACHIEVEMENTS */}

          <div className="rounded-[28px] border border-black/5 bg-white p-6">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[2px] text-black/30">
                  ACHIEVEMENTS
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  Keep collecting.
                </h2>

              </div>

              <Trophy
                size={21}
                className="text-[#6C4EFF]"
              />

            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">

              <Achievement
                emoji="🔥"
                title="First Week"
                unlocked
              />

              <Achievement
                emoji="⚡"
                title="10 Days"
                unlocked
              />

              <Achievement
                emoji="🏆"
                title="30 Days"
              />

            </div>

          </div>

        </section>

        {/* TASK LIST */}

        <section className="mt-5 rounded-[28px] border border-black/5 bg-white p-6">

          <p className="text-[10px] font-bold uppercase tracking-[2px] text-black/30">
            TODAY
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Build checklist
          </h2>

          <div className="mt-5 space-y-3">

            <TaskItem
              number="01"
              title="Create page structure"
              description="Set up the HTML sections."
              completed
            />

            <TaskItem
              number="02"
              title="Build responsive layout"
              description="Make the page work on mobile."
              completed
            />

            <TaskItem
              number="03"
              title="Add final styling"
              description="Typography, spacing and polish."
            />

          </div>

        </section>

        {/* ACTIVITY */}

        <section className="mt-5 rounded-[28px] border border-black/5 bg-white p-6">

          <p className="text-[10px] font-bold uppercase tracking-[2px] text-black/30">
            RECENT ACTIVITY
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Your proof of work
          </h2>

          <div className="mt-5 space-y-3">

            <Activity
              icon={<Check size={17} />}
              title="Day 11 completed"
              description="Portfolio card component"
              time="Yesterday"
            />

            <Activity
              icon={<GitBranch size={17} />}
              title="GitHub proof submitted"
              description="Commit verified successfully"
              time="Yesterday"
            />

          </div>

        </section>

        {/* CTA */}

        <section className="mt-5 rounded-[28px] bg-[#6C4EFF] p-6 text-white sm:p-8">

          <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/50">
            KEEP GOING
          </p>

          <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight">
            Consistency beats talent.
          </h2>

          <p className="mt-3 max-w-lg text-sm leading-6 text-white/65">
            You don't need to be perfect. You just need to
            keep showing up.
          </p>

          <Link
            to="/day/1"
            className="mt-6 inline-flex items-center rounded-2xl bg-white px-5 py-3.5 text-sm font-bold text-[#111]"
          >
            Continue Day 1 →
          </Link>

        </section>

      </main>

    </div>
  );
}


/* Achievement is local to this page because
   there is no separate Achievement component
   in your current component list. */

function Achievement({
  emoji,
  title,
  unlocked = false,
}) {
  return (
    <div
      className={`rounded-2xl p-3 text-center ${
        unlocked
          ? "bg-[#F3F0FF]"
          : "bg-[#F7F7F5] opacity-40"
      }`}
    >

      <div className="text-2xl">
        {emoji}
      </div>

      <p className="mt-2 text-[10px] font-bold">
        {title}
      </p>

      {unlocked && (
        <p className="mt-1 text-[8px] font-bold uppercase text-[#6C4EFF]">
          Unlocked
        </p>
      )}

    </div>
  );
}

export default Dashboard;