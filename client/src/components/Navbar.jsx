import {
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar({ dashboard = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F7F7F5]/90 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">

        <Logo />

        {!dashboard && (
          <nav className="hidden items-center gap-8 md:flex">

            <a
              href="#how"
              className="text-sm font-medium text-black/50 transition hover:text-black"
            >
              How it works
            </a>

            <a
              href="#proof"
              className="text-sm font-medium text-black/50 transition hover:text-black"
            >
              Proof of Work
            </a>

            <a
              href="#tracks"
              className="text-sm font-medium text-black/50 transition hover:text-black"
            >
              Tracks
            </a>

          </nav>
        )}

        {dashboard ? (
          <div className="hidden items-center gap-4 md:flex">

            <div className="rounded-full bg-[#F0EDFF] px-4 py-2 text-xs font-bold text-[#6C4EFF]">
              🔥 11 day streak
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111] text-xs font-bold text-white">
              PM
            </div>

          </div>
        ) : (
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
        )}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white md:hidden"
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>

      </div>

      {menuOpen && (
        <div className="border-t border-black/5 bg-[#F7F7F5] px-5 pb-5 pt-3 md:hidden">

          {!dashboard && (
            <div className="space-y-1">

              <a
                href="#how"
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm font-medium"
              >
                How it works
              </a>

              <a
                href="#proof"
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm font-medium"
              >
                Proof of Work
              </a>

              <a
                href="#tracks"
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm font-medium"
              >
                Tracks
              </a>

              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center justify-center rounded-xl bg-[#111] px-4 py-3.5 text-sm font-semibold text-white"
              >
                Start Challenge
              </Link>

            </div>
          )}

          {dashboard && (
            <div className="rounded-2xl bg-white p-4">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111] text-xs font-bold text-white">
                  PM
                </div>

                <div>
                  <p className="text-sm font-bold">
                    Priyanshu
                  </p>

                  <p className="text-xs text-black/40">
                    Web Development
                  </p>
                </div>

              </div>

              <div className="mt-4 rounded-xl bg-[#F0EDFF] px-3 py-3 text-sm font-bold text-[#6C4EFF]">
                🔥 11 day streak
              </div>

            </div>
          )}

        </div>
      )}

    </header>
  );
}

export default Navbar;