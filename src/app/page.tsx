import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Stats from "@/components/stats";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
