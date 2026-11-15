import { useState } from "react";
import { activities } from "../data/activities";
import FadeIn from "./FadeIn";
import {
  AwardIcon,
  ExternalLinkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  XIcon,
} from "./Icons";

function ActivityCard({ item, onOpenLightbox }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = item.isCarousel ? item.carouselImages : [item.thumbnail];
  const activeImage = images[currentSlide] || item.thumbnail;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group flex flex-col rounded-3xl overflow-hidden p-5 shadow-xs hover:border-cyan-500/40 hover:shadow-md transition-all duration-300">
      {/* Media Box - Actual Certificate or Event Photo */}
      <div
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex justify-center items-center cursor-pointer group/img"
        onClick={() => onOpenLightbox(activeImage, item.title)}
      >
        <img
          src={activeImage}
          alt={item.title}
          className="w-full h-full object-contain p-1.5 transition-transform duration-500 group-hover/img:scale-105"
        />

        {/* Carousel controls if multiple images (Convergence / Hackathons / CTF) */}
        {item.isCarousel && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
              }}
              aria-label="Previous"
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80 cursor-pointer"
            >
              <ChevronLeftIcon className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide((prev) => (prev + 1) % images.length);
              }}
              aria-label="Next"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80 cursor-pointer"
            >
              <ChevronRightIcon className="w-3.5 h-3.5" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide(i);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    currentSlide === i ? "bg-cyan-400 w-3.5" : "bg-white/60 hover:bg-white"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        <span className="absolute top-2 right-2 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-sm opacity-0 group-hover/img:opacity-100 transition-opacity pointer-events-none">
          Click to Zoom
        </span>
      </div>

      {/* Content */}
      <div className="mt-4 flex flex-col grow">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {item.title}
          </h3>
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 shrink-0">
            {item.date}
          </span>
        </div>

        <p className="text-xs text-slate-700 dark:text-slate-300 whitespace-pre-line mt-1 line-clamp-2 font-normal">
          {item.issuer}
        </p>

        {item.theme && (
          <p className="text-[11px] text-cyan-700 dark:text-cyan-400 mt-1 italic font-medium">
            Theme: {item.theme}
          </p>
        )}

        {/* Tags */}
        {item.tags && (
          <div className="mt-3 flex flex-wrap gap-1">
            {item.tags.map((t, idx) => (
              <span
                key={idx}
                className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/60"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Footer Actions */}
        <div className="mt-auto pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onOpenLightbox(activeImage, item.title)}
            className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            Preview Document
          </button>

          {item.badgeUrl ? (
            <a
              href={item.badgeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              Verify Credential
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-[11px] text-slate-400 italic">Verified Document</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Activities() {
  const [lightbox, setLightbox] = useState({ isOpen: false, src: "", title: "" });
  const [isExpanded, setIsExpanded] = useState(false);

  const INITIAL_COUNT = 6;
  const visibleActivities = isExpanded ? activities : activities.slice(0, INITIAL_COUNT);
  const remainingCount = activities.length - INITIAL_COUNT;

  const handleToggle = () => {
    if (isExpanded) {
      setIsExpanded(false);
      const section = document.getElementById("activities");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-8 lg:px-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-400">
          <AwardIcon className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            Verified Credentials & Achievements
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Certifications & Activities
          </h2>
        </div>
      </div>

      {/* Grid: 3 columns on large screens (displays first 2 rows initially) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleActivities.map((item, index) => (
          <FadeIn key={item.title + index} delay={(index % 3) * 80} threshold={0.05} className="h-full">
            <ActivityCard
              item={item}
              onOpenLightbox={(src, title) => setLightbox({ isOpen: true, src, title })}
            />
          </FadeIn>
        ))}
      </div>

      {/* Expand / Collapse Button */}
      {activities.length > INITIAL_COUNT && (
        <div className="mt-10 flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={handleToggle}
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-slate-900 text-white dark:bg-slate-800 dark:text-slate-100 hover:bg-slate-800 dark:hover:bg-slate-700 border border-slate-700/50 dark:border-slate-700 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-sm font-semibold hover:border-cyan-500/50"
          >
            {isExpanded ? (
              <>
                <span>Show Less</span>
                <ChevronUpIcon className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
              </>
            ) : (
              <>
                <span>Show All Credentials</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold">
                  +{remainingCount}
                </span>
                <ChevronDownIcon className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
              </>
            )}
          </button>
        </div>
      )}

      {/* High-Res Document Lightbox Modal */}
      {lightbox.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setLightbox({ isOpen: false, src: "", title: "" })}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 p-4 rounded-2xl shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
              <h4 className="text-sm font-semibold text-white truncate max-w-md sm:max-w-xl">
                {lightbox.title}
              </h4>
              <button
                type="button"
                onClick={() => setLightbox({ isOpen: false, src: "", title: "" })}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="flex justify-center items-center overflow-auto max-h-[80vh] p-2 bg-slate-950/50 rounded-xl">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="w-auto h-auto max-h-[75vh] max-w-full object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
