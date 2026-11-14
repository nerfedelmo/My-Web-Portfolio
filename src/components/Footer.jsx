import { navLinks } from "../data/navLinks";
import { GithubIcon, LinkedinIcon, MailIcon, ArrowUpIcon } from "./Icons";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="w-full bg-white dark:bg-[#0c111d] border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Left Column: Brand & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-600 to-indigo-600 text-white font-extrabold text-sm shadow-md shadow-cyan-500/20">
                JM
              </span>
              <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
                Joshua Manansala
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed font-normal">
              Computer Science Student · Certified AppSec PenTester (CAPen) & Software Engineer based in Pampanga, Philippines.
            </p>
          </div>

          {/* Center Column: Quick Navigation */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors inline-block py-0.5 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Socials & Back to Top */}
          <div className="md:col-span-3 flex flex-col md:items-end space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Connect
            </h4>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/nerfedelmo"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/joshua-manansala-577bb9390/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:jmanansalaaa17@gmail.com"
                aria-label="Email"
                className="p-2.5 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
              >
                <MailIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors pt-2 cursor-pointer"
            >
              Back to top
              <ArrowUpIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Joshua Manansala. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
