import { useEffect } from "react";
import { createPortal } from "react-dom";
import { XIcon } from "./Icons";

export default function LightboxModal({ isOpen, onClose, src, title, maxWidth = "max-w-5xl" }) {
  useEffect(() => {
    if (!isOpen) return;

    // Lock body scroll when modal is open
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Handle Escape key
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title || "Image Preview"}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`relative ${maxWidth} w-full bg-slate-900 p-4 sm:p-5 rounded-2xl shadow-2xl border border-slate-800 flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
          <h4 className="text-sm sm:text-base font-semibold text-white truncate max-w-xs sm:max-w-xl">
            {title}
          </h4>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image preview"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Image Container */}
        <div className="flex justify-center items-center overflow-auto max-h-[80vh] p-2 bg-slate-950/60 rounded-xl">
          <img
            src={src}
            alt={title}
            className="w-auto h-auto max-h-[75vh] max-w-full object-contain rounded-lg shadow-lg select-none"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
