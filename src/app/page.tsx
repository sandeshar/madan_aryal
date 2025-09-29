import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Stats from "@/components/stats";

export default function Home() {
  return (
    <>
      <section id="hero" className="scroll-mt-24">
        <Hero />
      </section>

      <section id="stats" className="scroll-mt-24">
        <Stats />
      </section>

      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>

      <section id="footer" className="scroll-mt-24">
        <Footer />
      </section>
    </>
  );
}
