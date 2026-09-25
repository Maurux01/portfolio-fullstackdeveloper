// ─────────────────────────────────────────────
// Fullstack Portfolio — Mauro Infante (maurux01)
// Customize name, experience, projects, email
// and profiles in src/data/portfolio.ts
// Scalable architecture: each section is a component
// in src/components/* fed by reusable data.
// ─────────────────────────────────────────────
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Projects from "./components/Projects.tsx";
import Services from "./components/Services.tsx";
import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import Reveal from "./components/Reveal.tsx";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] font-sans text-[#fafaf9]">
      <Navbar />
      <main>
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Services />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
