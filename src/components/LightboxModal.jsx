import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from "./Icons";

export default function LightboxModal({
  isOpen,
  onClose,
  images,
  src,
  initialIndex = 0,
  title,
  maxWidth = "max-w-5xl",
}) {
  const imageList = Array.isArray(images) && images.length > 0 ? images : src ? [src] : [];
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Sync currentIndex when initialIndex changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(Math.max(0, Math.min(initialIndex, imageList.length - 1)));
    }
  }, [isOpen, initialIndex, imageList.length]);

  const hasMultiple = imageList.length > 1;

  const handlePrev = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isOpen) return;

    // Lock body scroll when modal is open
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Handle Keyboard events
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        if (hasMultiple) handlePrev();
      } else if (e.key === "ArrowRight") {
        if (hasMultiple) handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, hasMultiple]);

  if (!isOpen || typeof document === "undefined" || imageList.length === 0) return null;

  const currentImage = imageList[currentIndex] || imageList[0];

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title || "Image Preview"}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`relative ${maxWidth} w-full bg-slate-900 p-4 sm:p-5 rounded-2xl shadow-2xl border border-slate-800 flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
          <div className="flex items-center gap-2.5 min-w-0 pr-2">
            <h4 className="text-sm sm:text-base font-semibold text-white truncate max-w-xs sm:max-w-xl">
              {title}
            </h4>
            {hasMultiple && (
              <span className="shrink-0 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                {currentIndex + 1} / {imageList.length}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image preview"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image View Area with Overlay Navigation */}
        <div className="relative flex justify-center items-center overflow-hidden max-h-[80vh] p-2 bg-slate-950/60 rounded-xl group/viewer">
          <img
            key={currentImage}
            src={currentImage}
            alt={`${title} - view ${currentIndex + 1}`}
            className="w-auto h-auto max-h-[75vh] max-w-full object-contain rounded-lg shadow-lg select-none transition-opacity duration-200"
          />

          {/* Previous Button */}
          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous image (Left Arrow)"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/70 hover:bg-black/95 text-white backdrop-blur-md border border-white/10 shadow-xl transition-all duration-150 hover:scale-110 active:scale-95 cursor-pointer z-10"
              >
                <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next image (Right Arrow)"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/70 hover:bg-black/95 text-white backdrop-blur-md border border-white/10 shadow-xl transition-all duration-150 hover:scale-110 active:scale-95 cursor-pointer z-10"
              >
                <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Bottom Carousel Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 z-10">
                {imageList.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(i);
                    }}
                    className={`transition-all duration-200 cursor-pointer rounded-full ${
                      currentIndex === i
                        ? "bg-cyan-400 w-5 h-2"
                        : "bg-white/40 hover:bg-white/80 w-2 h-2"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
