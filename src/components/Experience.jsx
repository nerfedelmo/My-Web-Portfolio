import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mb-50 px-10">
      <h1 className="text-3xl font-black mb-10 text-center xl:text-left xl:pl-60">
        WORK EXPERIENCE
        <div className="grow h-0.5 bg-slate-400 mt-4"></div>
      </h1>

      <div className="max-w-7xl mx-auto xl:w-1/2">
        <div className="edu-card relative border-l-2 border-slate-400 ml-3 space-y-10">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-8">
              <div className="absolute -left-2.25 top-2 w-4 h-4 rounded-full bg-slate-900 border-2 border-white ring-2 ring-slate-300"></div>
              <div className="edu-card-bg bg-white p-6 rounded-xl border border-slate-400 shadow-[4px_4px_15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="whiteText text-md font-bold uppercase tracking-tight">
                      {item.company}
                    </h3>
                    <p className="smallText text-sm mt-1">{item.role}</p>
                  </div>
                  <span className="smallText text-sm font-medium italic whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
