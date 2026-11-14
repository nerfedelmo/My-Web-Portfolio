import { techStack } from "../data/techStack";
import { education } from "../data/education";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-custom-body flex flex-col xl:flex-row px-10 lg:px-40 justify-center-safe items-center bg-slate-50 py-2"
    >
      {/* Profile Card */}
      <div className="profile-card-bg w-full xl:w-1/3 xl:mx-20 rounded-4xl px-6 py-8 shadow-[10px_10px_40px_rgba(0,0,0,0.7)] ring-1 ring-slate-900/5 bg-white transition-all duration-300 hover:scale-103 overflow-hidden">
        <div className="flex justify-center items-center">
          <img
            src="/images/AI_Joshua.png"
            alt="Joshua Manansala"
            className="w-80 h-110 xl:w-80 xl:h-110 rounded-4xl object-cover mb-3 shadow-2xl"
          />
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl font-bold mb-2">Joshua N. Manansala</h1>
          <p className="text-lg mb-3">
            Computer Science Student | Aspiring Penetration Tester and Software Engineer
          </p>
          <small className="smallText text-md">Angeles City, Pampanga, Philippines</small>
        </div>
        <div className="flex justify-center items-center m-2 p-4">
          <div className="rgb-border-wrapper">
            <a
              href="/PDF-Copy/Resume_JoshuaManansala.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex gap-3 items-center text-md font-bold cursor-pointer bg-black text-white px-8 py-2 rounded-4xl transition-transform duration-200 active:scale-95"
            >
              View my CV
              <img
                src="/images/new-window-svgrepo-com.png"
                alt="Open in New Tab"
                className="w-5 h-5 invert"
              />
            </a>
          </div>
        </div>
      </div>

      {/* right side content */}
      <div className="w-full xl:w-2/3 m-5 xl:mx-20 flex flex-col justify-center">
        <h1 className="text-center xl:text-left text-4xl lg:text-5xl font-black mb-2 sm:mt-10 leading-tight">
          Crafting apps, hunting bugs, and building what’s next
        </h1>
        <p className="whiteText text-center xl:text-left text-xl mb-5 text-slate-600 leading-relaxed">
          I am a Computer Science student and aspiring Software Engineer
          dedicated to building functional, user-centric applications. Beyond
          development, I am an Ethical Hacker focused on identifying
          vulnerabilities and understanding the mechanics of digital security.
        </p>

        <h2 className="text-2xl sm:text-2xl font-black mb-2 text-center md:text-left">
          TECH STACK
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="techstack flex justify-center items-center gap-2 p-2 rounded-4xl transition-all duration-300 hover:scale-110 hover:text-white group bg-white"
            >
              <span className="bg-reveal"></span>
              <img src={tech.src} alt={`${tech.name} Logo`} width="20px" height="20px" />
              <small className="text-md font-bold">{tech.name}</small>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-black mt-5 mb-2 text-center md:text-left">
          EDUCATION
        </h2>

        <div className="relative border-l-2 border-slate-400 ml-3 space-y-10">
          {education.map((edu) => (
            <div key={edu.school} className="relative pl-8">
              <div
                className={`absolute -left-2.25 top-2 w-4 h-4 rounded-full ${
                  edu.current
                    ? "bg-slate-900 border-2 border-white ring-2 ring-slate-300"
                    : "bg-slate-400 border-2 border-white"
                }`}
              ></div>

              <div className="edu-card-bg bg-white p-6 rounded-xl shadow-[4px_4px_15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="whiteText text-md font-bold uppercase tracking-tight">
                      {edu.school}
                    </h3>
                    <p className="smallText text-sm mt-1">{edu.degree}</p>
                  </div>
                  <span className="smallText text-sm font-medium italic whitespace-nowrap">
                    {edu.period}
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
