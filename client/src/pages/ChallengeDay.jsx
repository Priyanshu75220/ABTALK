import {
  ArrowLeft,
  Check,
  Flame,
  Send,
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import BuildItem from "../components/BuildItem";
import Mission from "../components/Mission";
import Submission from "../components/SubmissionCard";

function ChallengeDay() {
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (!github || !linkedin) {
      alert("Please submit both GitHub and LinkedIn proof.");
      return;
    }

    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#111]">

      {/* ================= NAVBAR ================= */}

      <Navbar dashboard />

      <main className="mx-auto max-w-4xl px-5 py-7 sm:px-8 sm:py-10">

        {/* ================= BACK ================= */}

        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 text-xs font-bold text-black/40 transition hover:text-black"
        >
          <ArrowLeft size={15} />
          Back to dashboard
        </Link>


        {/* ================= HEADER ================= */}

        <section className="mt-7">

          <div className="flex flex-wrap items-center gap-2">

            <span className="rounded-full bg-[#EDE9FF] px-3 py-1.5 text-[10px] font-bold text-[#6C4EFF]">
              DAY 12
            </span>

            <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-black/40">
              WEB DEVELOPMENT
            </span>

            <span className="flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-black/40">
              <Flame size={12} />
              11 day streak
            </span>

          </div>


          <h1 className="mt-5 text-[40px] font-black leading-[0.95] tracking-[-2px] sm:text-6xl">
            Build a responsive
            <br />
            landing page.
          </h1>


          <p className="mt-5 max-w-2xl text-sm leading-6 text-black/50 sm:text-base">
            Today you'll build a responsive landing page
            that looks great on both mobile and desktop.
          </p>

        </section>


        {/* ================= MISSION ================= */}

        <section className="mt-8 rounded-[28px] bg-[#111] p-6 text-white sm:p-8">

          <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/35">
            TODAY'S MISSION
          </p>

          <h2 className="mt-3 text-2xl font-black sm:text-3xl">
            Build something worth showing.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/45">
            Create a responsive landing page for a fictional
            product or startup. Focus on hierarchy, spacing,
            typography and responsive design.
          </p>

        </section>


        {/* ================= WHAT TO BUILD ================= */}

        <section className="mt-5">

          <p className="text-[10px] font-bold uppercase tracking-[2px] text-black/30">
            WHAT YOU NEED TO BUILD
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Your build checklist
          </h2>


          <div className="mt-5 space-y-3">

            <BuildItem
              title="Hero section"
              description="Create a clear headline, supporting text and CTA."
            />

            <BuildItem
              title="Feature section"
              description="Show at least three features or benefits."
            />

            <BuildItem
              title="Responsive layout"
              description="Make sure the design works on 390px mobile screens."
            />

            <BuildItem
              title="Final polish"
              description="Check spacing, typography, buttons and visual hierarchy."
            />

          </div>

        </section>


        {/* ================= REQUIREMENTS ================= */}

        <section className="mt-5">

          <p className="text-[10px] font-bold uppercase tracking-[2px] text-black/30">
            REQUIREMENTS
          </p>


          <div className="mt-4 space-y-3">

            <Mission
              number="01"
              title="Use responsive design"
              description="Your page should work properly on mobile, tablet and desktop."
            />

            <Mission
              number="02"
              title="Keep the UI clean"
              description="Use consistent spacing, typography and visual hierarchy."
            />

            <Mission
              number="03"
              title="Build something original"
              description="Don't simply copy an existing website."
            />

          </div>

        </section>


        {/* ================= SUBMISSION ================= */}

        <section className="mt-8">

          <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#6C4EFF]">
            PROOF OF WORK
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Show what you built.
          </h2>

          <p className="mt-2 text-sm text-black/45">
            Submit both proofs to complete Day 12.
          </p>


          <div className="mt-5 space-y-3">


            {/* ================= GITHUB ================= */}

            <Submission
              icon={
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#111] text-white">
                  <span className="text-xs font-black">
                    GH
                  </span>
                </div>
              }
              title="GitHub"
              description="Paste your repository or commit URL."
              placeholder="https://github.com/username/project"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              submitted={Boolean(github)}
            />


            {/* ================= LINKEDIN ================= */}

            <Submission
              icon={
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0A66C2] text-white">
                  <span className="text-sm font-black">
                    in
                  </span>
                </div>
              }
              title="LinkedIn"
              description="Paste your LinkedIn post URL."
              placeholder="https://linkedin.com/posts/..."
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              submitted={Boolean(linkedin)}
            />

          </div>


          {/* ================= SUBMIT BUTTON ================= */}

          <button
            onClick={handleSubmit}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#111] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#222]"
          >

            {submitted ? (
              <>
                <Check size={18} />
                Day 12 Completed
              </>
            ) : (
              <>
                <Send size={17} />
                Submit Day 12
              </>
            )}

          </button>


          {/* ================= SUCCESS ================= */}

          {submitted && (
            <div className="mt-4 rounded-2xl bg-[#EAF8EF] p-4 text-center text-sm font-semibold text-green-700">
              🎉 Great work! Your Day 12 proof has been submitted.
            </div>
          )}

        </section>


        {/* ================= NEXT DAY ================= */}

        <section className="mt-8 rounded-[28px] border border-black/5 bg-white p-6">

          <p className="text-[10px] font-bold uppercase tracking-[2px] text-black/30">
            UP NEXT
          </p>

          <h2 className="mt-2 text-xl font-black">
            Day 13
          </h2>

          <p className="mt-2 text-sm text-black/40">
            Build a reusable dashboard component.
          </p>

        </section>

      </main>

    </div>
  );
}

export default ChallengeDay;