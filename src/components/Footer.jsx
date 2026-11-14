export default function Footer() {
  return (
    <footer className="max-w-full py-5 font-sans pt-8 shadow-[-0px_-0px_20px_rgba(255,255,255,0.3)]">
      <div className="smallText max-w-7xl mx-auto flex flex-col items-center gap-2">
        <div className="flex justify-center items-center text-center">
          <span className="text-sm tracking-wide">
            © 2026 · Built with React, Vite &amp; Tailwind CSS · Crafted in VS Code
          </span>
        </div>
        <div className="flex justify-center items-center text-center">
          <span className="smallText text-sm font-medium uppercase tracking-widest">
            Developed By <strong>Joshua Manansala</strong> · City College of Angeles
          </span>
        </div>
      </div>
    </footer>
  );
}
