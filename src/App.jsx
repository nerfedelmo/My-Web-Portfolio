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
        <section id="home" className="w-full bg-slate-100/70 dark:bg-[#070b14] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-250">
          <Hero />
        </section>
        <section id="experience" className="w-full bg-white dark:bg-[#0c111d] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-250">
          <Experience />
        </section>
        <section id="projects" className="w-full bg-slate-100/70 dark:bg-[#070b14] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-250">
          <Projects />
        </section>
        <section id="activities" className="w-full bg-white dark:bg-[#0c111d] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-250">
          <Activities />
        </section>
        <section id="contact" className="w-full bg-slate-100/70 dark:bg-[#070b14] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-250">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
