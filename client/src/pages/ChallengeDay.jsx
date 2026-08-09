import {
  ArrowLeft,
  Check,
  Flame,
  Send,
} from "lucide-react";

import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import BuildItem from "../components/BuildItem";
import Mission from "../components/Mission";
import Submission from "../components/SubmissionCard";

/* =====================================================
   CHALLENGE DATA
===================================================== */

const challengeDays = {
  1: {
    title: "Build your first web page.",
    description:
      "Create a simple web page using HTML and CSS and focus on clean structure.",
    missionTitle: "Start building.",
    missionDescription:
      "Create your first responsive web page. Focus on structure, typography and spacing.",
    nextTitle: "Build a personal profile card.",
  },

  2: {
    title: "Build a personal profile card.",
    description:
      "Create a clean profile card using HTML and CSS.",
    missionTitle: "Make a profile worth showing.",
    missionDescription:
      "Build a profile card with an image, name, bio and social links.",
    nextTitle: "Build a responsive navbar.",
  },

  3: {
    title: "Build a responsive navbar.",
    description:
      "Create a responsive navigation bar that works on mobile and desktop.",
    missionTitle: "Make navigation simple.",
    missionDescription:
      "Build a clean responsive navbar with navigation links and a mobile-friendly layout.",
    nextTitle: "Build a pricing card.",
  },

  4: {
    title: "Build a pricing card.",
    description:
      "Create a modern pricing card for a fictional product.",
    missionTitle: "Design for decisions.",
    missionDescription:
      "Create pricing cards with clear hierarchy, features and a strong CTA.",
    nextTitle: "Build a login form.",
  },

  5: {
    title: "Build a login form.",
    description:
      "Create a clean and accessible login interface.",
    missionTitle: "Make forms feel simple.",
    missionDescription:
      "Build a login form with email, password, validation states and a clear CTA.",
    nextTitle: "Build a landing page hero.",
  },

  6: {
    title: "Build a landing page hero.",
    description:
      "Create a strong hero section for a fictional startup.",
    missionTitle: "Make the first impression count.",
    missionDescription:
      "Create a hero section with a strong headline, supporting text and CTA.",
    nextTitle: "Build a feature section.",
  },

  7: {
    title: "Build a feature section.",
    description:
      "Create a section that explains three important product features.",
    missionTitle: "Explain the product visually.",
    missionDescription:
      "Build three feature cards with icons, headings and useful descriptions.",
    nextTitle: "Build a responsive footer.",
  },

  8: {
    title: "Build a responsive footer.",
    description:
      "Create a footer that works beautifully across screen sizes.",
    missionTitle: "Finish the experience.",
    missionDescription:
      "Build a responsive footer with navigation, social links and useful information.",
    nextTitle: "Build a dashboard card.",
  },

  9: {
    title: "Build a dashboard card.",
    description:
      "Create a reusable statistics card for a dashboard.",
    missionTitle: "Turn data into UI.",
    missionDescription:
      "Create reusable cards that display numbers, labels and progress information.",
    nextTitle: "Build a progress tracker.",
  },

  10: {
    title: "Build a progress tracker.",
    description:
      "Create a visual component that shows user progress.",
    missionTitle: "Make progress visible.",
    missionDescription:
      "Build a progress tracker that clearly communicates completion and remaining work.",
    nextTitle: "Build a portfolio section.",
  },

  11: {
    title: "Build a portfolio section.",
    description:
      "Create a project section that showcases your best work.",
    missionTitle: "Show what you can build.",
    missionDescription:
      "Create a portfolio section with project cards, descriptions and links.",
    nextTitle: "Build a responsive landing page.",
  },

  12: {
    title: "Build a responsive landing page.",
    description:
      "Today you'll build a responsive landing page that looks great on mobile and desktop.",
    missionTitle: "Build something worth showing.",
    missionDescription:
      "Create a responsive landing page for a fictional product or startup. Focus on hierarchy, spacing, typography and responsive design.",
    nextTitle: "Build a reusable dashboard component.",
  },

  13: {
    title: "Build a reusable dashboard component.",
    description:
      "Create a clean dashboard component with cards, statistics and responsive layouts.",
    missionTitle: "Turn information into a useful interface.",
    missionDescription:
      "Build a dashboard that presents important information clearly using reusable UI components.",
    nextTitle: "Build an interactive quiz interface.",
  },

  14: {
    title: "Build an interactive quiz interface.",
    description:
      "Create a clean quiz interface with questions, options and a progress indicator.",
    missionTitle: "Make learning interactive.",
    missionDescription:
      "Build a responsive quiz experience that is easy to understand and enjoyable to use.",
    nextTitle: "Build a profile page.",
  },
};


/* =====================================================
   PAGE
===================================================== */

function ChallengeDay() {
  const { day } = useParams();

  const currentDay = Number(day) || 1;

  const challenge =
    challengeDays[currentDay] || challengeDays[1];

  const nextDay = currentDay + 1;

  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!github.trim() || !linkedin.trim()) {
      alert("Please submit both GitHub and LinkedIn proof.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#111]">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar dashboard />

      <main className="mx-auto max-w-4xl px-5 py-7 sm:px-8 sm:py-10">

        {/* =================================================
            BACK
        ================================================= */}

        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 text-xs font-bold text-black/40 transition hover:text-black"
        >
          <ArrowLeft size={15} />
          Back to dashboard
        </Link>


        {/* =================================================
            HEADER
        ================================================= */}

        <section className="mt-7">

          <div className="flex flex-wrap items-center gap-2">

            <span className="rounded-full bg-[#EDE9FF] px-3 py-1.5 text-[10px] font-bold text-[#6C4EFF]">
              DAY {currentDay}
            </span>

            <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-black/40">
              WEB DEVELOPMENT
            </span>

            <span className="flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-black/40">
              <Flame size={12} />
              {Math.max(currentDay - 1, 0)} day streak
            </span>

          </div>


          <h1 className="mt-5 text-[40px] font-black leading-[0.95] tracking-[-2px] sm:text-6xl">
            {challenge.title}
          </h1>


          <p className="mt-5 max-w-2xl text-sm leading-6 text-black/50 sm:text-base">
            {challenge.description}
          </p>

        </section>


        {/* =================================================
            MISSION
        ================================================= */}

        <section className="mt-8 rounded-[28px] bg-[#111] p-6 text-white sm:p-8">

          <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/35">
            TODAY'S MISSION
          </p>

          <h2 className="mt-3 text-2xl font-black sm:text-3xl">
            {challenge.missionTitle}
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/45">
            {challenge.missionDescription}
          </p>

        </section>


        {/* =================================================
            WHAT TO BUILD
        ================================================= */}

        <section className="mt-5">

          <p className="text-[10px] font-bold uppercase tracking-[2px] text-black/30">
            WHAT YOU NEED TO BUILD
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Your build checklist
          </h2>


          <div className="mt-5 space-y-3">

            <BuildItem
              title="Plan your interface"
              description="Decide the structure, content and main user experience."
            />

            <BuildItem
              title="Build the main section"
              description="Create the core interface required by today's challenge."
            />

            <BuildItem
              title="Responsive layout"
              description="Make sure the design works properly on a 390px mobile screen."
            />

            <BuildItem
              title="Final polish"
              description="Check spacing, typography, buttons and visual hierarchy."
            />

          </div>

        </section>


        {/* =================================================
            REQUIREMENTS
        ================================================= */}

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


        {/* =================================================
            SUBMISSION
        ================================================= */}

        <section className="mt-8">

          <Submission
            githubUrl={github}
            linkedinUrl={linkedin}
            onGithubChange={setGithub}
            onLinkedinChange={setLinkedin}
            githubSubmitted={Boolean(github)}
            linkedinSubmitted={Boolean(linkedin)}
          />


          {/* SUBMIT BUTTON */}

          <button
            onClick={handleSubmit}
            disabled={submitted}
            className={`mt-5 flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-bold text-white transition ${
              submitted
                ? "cursor-default bg-green-600"
                : "bg-[#111] hover:bg-[#222]"
            }`}
          >

            {submitted ? (
              <>
                <Check size={18} />
                Day {currentDay} Completed
              </>
            ) : (
              <>
                <Send size={17} />
                Submit Day {currentDay}
              </>
            )}

          </button>


          {/* SUCCESS */}

          {submitted && (
            <div className="mt-4 rounded-2xl bg-[#EAF8EF] p-4 text-center text-sm font-semibold text-green-700">
              🎉 Great work! Your Day {currentDay} proof has been submitted.
            </div>
          )}

        </section>


        {/* =================================================
            NEXT DAY
        ================================================= */}

        {challengeDays[nextDay] ? (
          <section className="mt-8 rounded-[28px] border border-black/5 bg-white p-6">

            <p className="text-[10px] font-bold uppercase tracking-[2px] text-black/30">
              UP NEXT
            </p>

            <h2 className="mt-2 text-xl font-black">
              Day {nextDay}
            </h2>

            <p className="mt-2 text-sm text-black/40">
              {challengeDays[nextDay].nextTitle ||
                challengeDays[nextDay].title}
            </p>

            <Link
              to={`/day/${nextDay}`}
              className="mt-5 inline-flex rounded-xl bg-[#111] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#222]"
            >
              Continue to Day {nextDay}
            </Link>

          </section>
        ) : (
          <section className="mt-8 rounded-[28px] bg-[#6C4EFF] p-6 text-white">

            <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/50">
              CHALLENGE COMPLETE
            </p>

            <h2 className="mt-2 text-2xl font-black">
              You completed all 14 days 🎉
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/70">
              Great work. Your consistency is becoming visible proof of
              your learning.
            </p>

            <Link
              to="/dashboard"
              className="mt-5 inline-flex rounded-xl bg-white px-4 py-3 text-xs font-bold text-[#111]"
            >
              Back to Dashboard
            </Link>

          </section>
        )}

      </main>

    </div>
  );
}

export default ChallengeDay;