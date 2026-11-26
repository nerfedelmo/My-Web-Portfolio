import { techStack } from "../data/techStack";
import { education } from "../data/education";
import { ExternalLinkIcon, AwardIcon } from "./Icons";

export default function Hero() {
  return (
    <div className="w-full max-w-[1560px] mx-auto py-12 sm:py-16 xl:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-start justify-center">
        <div className="w-full lg:w-[340px] xl:w-[380px] 2xl:w-[410px] shrink-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 lg:p-7 shadow-sm dark:shadow-none text-center flex flex-col items-center transition-all duration-300">
          <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-md border border-slate-200 dark:border-slate-800 mb-4">
            <img
              src="/images/IMG_2792.jpg"
              alt="Joshua Manansala"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <h1 className="text-2xl sm:text-3xl 2xl:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Joshua N. Manansala
          </h1>
          <p className="text-sm 2xl:text-base font-semibold text-cyan-700 dark:text-cyan-400 mt-1.5">
            Computer Science · Ethical Hacker & Software Engineer
          </p>
          <p className="text-xs 2xl:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Angeles City, Pampanga, Philippines
          </p>

          <div className="mt-6 w-full flex flex-col items-center gap-2.5">
            <div className="rgb-border-wrapper w-full max-w-xs">
              <a
                href="/PDF-Copy/Resume_JoshuaManansala.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full flex gap-2 items-center justify-center text-sm 2xl:text-base font-semibold cursor-pointer bg-slate-900 text-white dark:bg-black dark:text-white px-6 py-2.5 rounded-full transition-transform duration-200 active:scale-95"
              >
                View Resume / CV
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#activities"
              className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 py-1.5 px-4 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800/80 transition-all duration-200 cursor-pointer"
            >
              View Credentials
            </a>
          </div>
        </div>

        {/* Right: Content & Tech Stack */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <div className="mb-8 text-center lg:text-left">
            <span className="text-xs 2xl:text-sm font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
              About & Technical Focus
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-black text-slate-900 dark:text-white mt-1.5 leading-tight">
              Crafting apps, hunting bugs, and building what’s next.
            </h2>
            <p className="text-base sm:text-lg 2xl:text-xl text-slate-700 dark:text-slate-300 mt-4 leading-relaxed font-normal max-w-4xl">
              I am a Computer Science student dedicated to building high-performance,
              user-centric applications. With certifications in AppSec (CAPen) and
              Capture-The-Flag championships, I combine software engineering best practices with
              an offensive security mindset to design resilient digital systems.
            </p>
          </div>

          {/* TECH STACK BADGES */}
          <div className="mb-8">
            <h3 className="text-xs 2xl:text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 text-center lg:text-left">
              Core Technologies & Security Tools
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2.5 2xl:gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5 px-3 py-2 2xl:py-2.5 rounded-xl text-xs sm:text-sm 2xl:text-base font-medium transition-all duration-200 hover:border-cyan-500/40 hover:scale-102 shadow-xs"
                >
                  <img src={tech.src} alt="" className="w-5 h-5 2xl:w-6 2xl:h-6 shrink-0 object-contain" />
                  <span className="truncate text-slate-900 dark:text-slate-100 font-semibold">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 text-center lg:text-left">
              Education
            </h3>
            <div className="relative border-l-2 border-slate-300 dark:border-slate-800 ml-3 space-y-4">
              {education.map((edu) => (
                <div key={edu.school} className="relative pl-6">
                  <div
                    className={`absolute -left-1.75 top-2.5 w-3.5 h-3.5 rounded-full border-2 ${edu.current
                      ? "bg-cyan-600 dark:bg-cyan-500 border-white dark:border-slate-900 ring-2 ring-cyan-500/20"
                      : "bg-slate-400 dark:bg-slate-700 border-white dark:border-slate-900"
                      }`}
                  />
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                          {edu.school}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-0.5">
                          {edu.degree}
                        </p>
                      </div>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 italic">
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
    </div>
  );
}
