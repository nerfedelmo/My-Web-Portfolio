import { projects } from "../data/projects";

function ProjectCard({ project }) {
  const { title, description, stack, githubUrl, thumbnail, isCarousel, carouselImages } = project;

  return (
    <div className="project-card-bg group flex flex-col w-full rounded-3xl hover:border hover:border-slate-300 transition-all duration-300 hover:scale-105 overflow-hidden shadow-[5px_5px_30px_rgba(0,0,0,0.7)] p-4">
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[linear-gradient(to_bottom_right,#06b6d433,#d946ef33)] flex justify-center items-center">
        {isCarousel ? (
          <>
            <img src={carouselImages[0]} alt={title} className="slider-img-1 absolute h-full opacity-0 transition-transform duration-500 group-hover:scale-125 object-contain" />
            <img src={carouselImages[1]} alt={title} className="slider-img-2 absolute h-full opacity-0 transition-transform duration-500 group-hover:scale-125 object-contain" />
            <img src={carouselImages[2]} alt={title} className="slider-img-3 absolute h-full opacity-0 transition-transform duration-500 group-hover:scale-125 object-contain" />
            <img src={carouselImages[3]} alt={title} className="slider-img-4 absolute h-full opacity-0 transition-transform duration-500 group-hover:scale-125 object-contain" />
          </>
        ) : (
          <img src={thumbnail} alt={title} className="w-1/2 transition-transform duration-500 group-hover:scale-125" />
        )}
      </div>

      <div className="mt-6 flex flex-col grow">
        <h3 className="whiteText text-xl font-bold">{title}</h3>
        <p className="smallText text-sm mt-2 leading-relaxed">{description}</p>
        <div className="mt-auto pt-6 flex justify-between items-center">
          <small className="smallText text-sm hover:underline">{stack}</small>
          <div className="mt-auto pt-6 flex justify-end">
            <a
              href={githubUrl || "#"}
              target="_blank"
              rel="noreferrer"
              className="glow-button flex gap-2 items-center text-sm font-bold cursor-pointer bg-black text-white px-6 py-2 rounded-4xl border border-transparent transition-all duration-300 active:scale-95"
            >
              Github
              <img src="/images/new-window-svgrepo-com.png" alt="Details" className="w-4 h-4 invert" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mb-20 px-10">
      <h1 className="text-3xl font-black mb-10 text-center xl:text-left xl:pl-60">
        PROJECTS
        <div className="grow h-0.5 bg-slate-400 mt-4"></div>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-15 max-w-8xl mx-auto lg:px-50 justify-items-center mb-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
