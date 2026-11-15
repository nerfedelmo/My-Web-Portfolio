import { useEffect, useState } from "react";
import { navLinks } from "../data/navLinks";
import {
  HomeIcon,
  BriefcaseIcon,
  FolderGit2Icon,
  AwardIcon,
  MailIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";

const iconMap = {
  Home: HomeIcon,
  Briefcase: BriefcaseIcon,
  FolderGit2: FolderGit2Icon,
  Award: AwardIcon,
  Mail: MailIcon,
};

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    if (initialDark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  function handleDarkModeToggle() {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <header className="px-10 sticky top-0 z-50 flex justify-center items-center py-1">
      <nav className="flex items-center gap-1 sm:gap-1.5 bg-[#d1d1d11a] backdrop-blur-2xl p-1.5 rounded-full border border-gray-400/60 dark:border-gray-500/40 mt-4 shadow-sm transition-all duration-300">
        {navLinks.map((item) => {
          const Icon = iconMap[item.icon] || HomeIcon;
          const isActive = activeSection === item.href.replace("#", "");

          return (
            <a
              key={item.label}
              href={item.href}
              className={`group relative flex items-center gap-1.5 px-3 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs"
                  : "text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="hidden md:inline">{item.label}</span>

              {/* Tooltip on mobile */}
              <span className="md:hidden absolute -bottom-9 left-1/2 -translate-x-1/2 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 bg-slate-900 text-white dark:bg-slate-800 dark:text-slate-200 text-xs px-2 py-0.5 rounded shadow pointer-events-none whitespace-nowrap z-50">
                {item.label}
              </span>
            </a>
          );
        })}

        <div className="h-4 w-px bg-slate-300 dark:bg-slate-800 mx-1" />

        <button
          type="button"
          onClick={handleDarkModeToggle}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="flex items-center justify-center p-2 rounded-full text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          {isDark ? <SunIcon className="w-4 h-4 text-amber-400" /> : <MoonIcon className="w-4 h-4 text-slate-700" />}
        </button>
      </nav>
    </header>
  );
}
