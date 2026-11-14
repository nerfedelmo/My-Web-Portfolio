import { techStack } from "../data/techStack";
import { education } from "../data/education";
import { featuredAccolades } from "../data/activities";
import { ShieldCheckIcon, TrophyIcon, ExternalLinkIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="home" className="py-6 sm:py-10 px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto">
      {/* Strategic Positioning: Top Accolades Banner */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuredAccolades.map((accolade, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 dark:border-cyan-400/20 bg-gradient-to-r from-cyan-500/5 via-indigo-500/5 to-transparent p-4 sm:p-5 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                {idx === 0 ? <ShieldCheckIcon className="w-6 h-6" /> : <TrophyIcon className="w-6 h-6" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    {accolade.type}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {accolade.date}
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {accolade.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 line-clamp-2">
                  {accolade.description}
                </p>

                {/* Tags & Action */}
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {accolade.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {accolade.badgeUrl && (
                    <a
                      href={accolade.badgeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
                    >
                      Verify Badge
                      <ExternalLinkIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Hero Grid */}
      <div className="flex flex-col xl:flex-row gap-8 items-start justify-center">
        {/* Left: Profile Card */}
        <div className="w-full xl:w-1/3 modern-card rounded-3xl p-6 sm:p-7 overflow-hidden text-center flex flex-col items-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for Internships & Full-Time
          </div>

          <div className="relative mb-4">
            <img
              src="/images/AI_Joshua.png"
              alt="Joshua Manansala"
              className="w-56 h-72 sm:w-64 sm:h-80 object-cover rounded-2xl shadow-xl shadow-black/10 dark:shadow-black/30 border border-slate-200 dark:border-slate-800"
            />
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Joshua N. Manansala
          </h1>
          <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400 mt-1">
            Computer Science · Ethical Hacker & Software Engineer
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Angeles City, Pampanga, Philippines
          </p>

          <div className="mt-6 w-full flex justify-center">
            <div className="rgb-border-wrapper w-full max-w-xs">
              <a
                href="/PDF-Copy/Resume_JoshuaManansala.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full flex gap-2 items-center justify-center text-sm font-semibold cursor-pointer bg-slate-900 text-white dark:bg-black dark:text-white px-6 py-2.5 rounded-full transition-transform duration-200 active:scale-95"
              >
                View Resume / CV
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Content & Tech Stack */}
        <div className="w-full xl:w-2/3 flex flex-col justify-center">
          <div className="mb-6 text-center xl:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              About & Technical Focus
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mt-1 leading-tight">
              Crafting apps, hunting bugs, and building what’s next.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
              I am a Computer Science student dedicated to building high-performance,
              user-centric applications. With hands-on certifications in AppSec (CAPen) and
              Capture-The-Flag championships, I combine software engineering best practices with
              an offensive security mindset to design resilient digital systems.
            </p>
          </div>

          {/* TECH STACK BADGES */}
          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 text-center xl:text-left">
              Core Technologies & Security Tools
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="modern-card flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 hover:border-cyan-500/40 hover:scale-102"
                >
                  <img src={tech.src} alt="" className="w-5 h-5 shrink-0 object-contain" />
                  <span className="truncate text-slate-800 dark:text-slate-200 font-semibold">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 text-center xl:text-left">
              Education
            </h3>
            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 space-y-4">
              {education.map((edu) => (
                <div key={edu.school} className="relative pl-6">
                  <div
                    className={`absolute -left-1.75 top-2.5 w-3.5 h-3.5 rounded-full border-2 ${
                      edu.current
                        ? "bg-cyan-500 border-white dark:border-slate-900 ring-2 ring-cyan-500/20"
                        : "bg-slate-300 dark:bg-slate-700 border-white dark:border-slate-900"
                    }`}
                  />
                  <div className="modern-card p-4 rounded-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                          {edu.school}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                          {edu.degree}
                        </p>
                      </div>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 italic">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
