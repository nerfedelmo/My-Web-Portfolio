import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";

export default function App() {
  return (
    <div className="min-h-screen bg-custom-body font-sans transition-colors duration-250">
      <Navbar />
      <main>
        <section id="home" className="w-full bg-slate-100/70 dark:bg-[#070b14] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-250">
          <FadeIn>
            <Hero />
          </FadeIn>
        </section>
        <section id="experience" className="w-full bg-white dark:bg-[#0c111d] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-250">
          <FadeIn>
            <Experience />
          </FadeIn>
        </section>
        <section id="projects" className="w-full bg-slate-100/70 dark:bg-[#070b14] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-250">
          <FadeIn>
            <Projects />
          </FadeIn>
        </section>
        <section id="activities" className="w-full bg-white dark:bg-[#0c111d] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-250">
          <FadeIn>
            <Activities />
          </FadeIn>
        </section>
        <section id="contact" className="w-full bg-slate-100/70 dark:bg-[#070b14] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-250">
          <FadeIn>
            <Contact />
          </FadeIn>
        </section>
      </main>
      <Footer />
    </div>
  );
}
