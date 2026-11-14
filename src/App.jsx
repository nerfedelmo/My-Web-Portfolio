import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-custom-body font-sans transition-colors duration-250">
      <Navbar />
      <main>
        {/* Section 1: Hero (Frost Gray / Deep Navy) */}
        <section id="home" className="w-full bg-slate-100/70 dark:bg-[#070b14] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-250">
          <Hero />
        </section>

        {/* Section 2: Experience (Clean White / Slate Dark) */}
        <section id="experience" className="w-full bg-white dark:bg-[#0c111d] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-250">
          <Experience />
        </section>

        {/* Section 3: Projects (Frost Gray / Deep Navy) */}
        <section id="projects" className="w-full bg-slate-100/70 dark:bg-[#070b14] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-250">
          <Projects />
        </section>

        {/* Section 4: Activities (Clean White / Slate Dark) */}
        <section id="activities" className="w-full bg-white dark:bg-[#0c111d] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-250">
          <Activities />
        </section>

        {/* Section 5: Contact (Frost Gray / Deep Navy - matching portfolio design system) */}
        <section id="contact" className="w-full bg-slate-100/70 dark:bg-[#070b14] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-250">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
