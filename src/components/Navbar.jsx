import { useEffect } from "react";
import { navLinks } from "../data/navLinks";

const darkModeSVG = `<svg width="32px" height="32px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><title>dark-mode</title><g id="Layer_2" data-name="Layer 2"><g id="Icons"><g><rect width="48" height="48" fill="none" /><g><path d="M14,24A10,10,0,0,0,24,34V14A10,10,0,0,0,14,24Z" /><path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM6,24A18.1,18.1,0,0,1,24,6v8a10,10,0,0,1,0,20v8A18.1,18.1,0,0,1,6,24Z" /></g></g></g></g></svg>`;

export default function Navbar() {
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  function handleDarkModeToggle() {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  return (
    <header className="px-10 sticky top-0 z-50 flex justify-center items-center py-1 font-sans">
      <nav className="flex items-center gap-4 bg-[#d1d1d11a] backdrop-blur-2xl p-2 rounded-3xl border border-gray-400 mt-4">
        {navLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="group relative flex flex-col items-center px-3 py-2.5 rounded-xl transition-all duration-300 cursor-pointer"
          >
            <span className="bg-reveal"></span>
            <div dangerouslySetInnerHTML={{ __html: item.icon }} />
            <span className="absolute -bottom-10 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-[#1e1e1e] border border-white/10 text-gray-300 text-[16px] px-2.5 py-1 rounded-md pointer-events-none">
              {item.label}
            </span>
          </a>
        ))}

        <div
          id="dark-mode-toggle"
          onClick={handleDarkModeToggle}
          className="group relative flex flex-col items-center px-3 py-2.5 rounded-xl transition-all duration-300 cursor-pointer"
        >
          <span className="bg-reveal"></span>
          <div dangerouslySetInnerHTML={{ __html: darkModeSVG }} />
          <span className="absolute -bottom-10 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-[#1e1e1e] border border-white/10 text-gray-300 text-[16px] px-2.5 py-1 rounded-md pointer-events-none">
            Dark Mode
          </span>
        </div>
      </nav>
    </header>
  );
}
