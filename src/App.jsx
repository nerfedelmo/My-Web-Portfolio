import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-custom-body font-sans">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
