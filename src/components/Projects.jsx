import { useState, useEffect } from "react";
import { projects } from "../data/projects";
import {
  FolderGit2Icon,
  GithubIcon,
  ExternalLinkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
} from "./Icons";

function ProjectCard({ project, onOpenLightbox }) {
  const { title, description, tags, githubUrl, liveUrl, thumbnail, isCarousel, carouselImages } = project;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isCarousel || isPaused || !carouselImages?.length) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isCarousel, isPaused, carouselImages]);

  const images = isCarousel ? carouselImages : [thumbnail];
  const activeImage = images[currentSlide] || thumbnail;

  return (
    <div className="modern-card group flex flex-col rounded-3xl overflow-hidden p-5 sm:p-6">
      {/* Image / Carousel Area */}
      <div
        className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex justify-center items-center cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onClick={() => onOpenLightbox(activeImage, title)}
      >
        <img
          src={activeImage}
          alt={title}
          className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Carousel controls (if multiple images) */}
        {isCarousel && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
              }}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide((prev) => (prev + 1) % images.length);
              }}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
              {images.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide(dotIdx);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    currentSlide === dotIdx ? "w-4 bg-cyan-400" : "bg-white/50 hover:bg-white"
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>
          </>
        )}

        <span className="absolute top-2 right-2 text-[10px] font-medium px-2 py-0.5 rounded-full bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Click to Zoom
        </span>
      </div>

      {/* Content */}
      <div className="mt-5 flex flex-col grow">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack Pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto pt-6 flex items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800/80">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="glow-button inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2 rounded-xl transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              Source Code
            </a>
          ) : (
            <span className="text-xs text-slate-400 italic">Internal Repo</span>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              Live Demo
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [lightbox, setLightbox] = useState({ isOpen: false, src: "", title: "" });

  return (
    <section id="projects" className="py-12 px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
          <FolderGit2Icon className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Featured Engineering
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Projects
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onOpenLightbox={(src, title) => setLightbox({ isOpen: true, src, title })}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setLightbox({ isOpen: false, src: "", title: "" })}
        >
          <div className="relative max-w-4xl w-full bg-slate-900 p-4 rounded-2xl shadow-2xl border border-slate-800" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
              <h4 className="text-sm font-semibold text-white truncate">{lightbox.title}</h4>
              <button
                type="button"
                onClick={() => setLightbox({ isOpen: false, src: "", title: "" })}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>
            <img src={lightbox.src} alt={lightbox.title} className="w-full max-h-[75vh] object-contain rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
}
