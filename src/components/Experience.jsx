import { experience } from "../data/experience";
import { BriefcaseIcon } from "./Icons";

export default function Experience() {
  return (
    <section id="experience" className="py-12 px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
          <BriefcaseIcon className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Career Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Work Experience
          </h2>
        </div>
      </div>

      <div className="max-w-3xl">
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 space-y-6">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-6">
              <div className="absolute -left-1.75 top-2.5 w-3.5 h-3.5 rounded-full bg-cyan-500 border-2 border-white dark:border-slate-900 ring-2 ring-cyan-500/20" />
              <div className="modern-card p-5 sm:p-6 rounded-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                      {item.company}
                    </h3>
                    <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                      {item.role}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full self-start sm:self-auto">
                    {item.period}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2">
                  Developed strong professional communication, real-time problem-solving, and cross-functional team collaboration skills in a high-demand enterprise support environment.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
