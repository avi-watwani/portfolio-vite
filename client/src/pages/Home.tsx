import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ClientWork from "@/components/ClientWork";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import { consumePendingHomeScroll } from "@/lib/scroll-to-section";

export default function Home() {
  useEffect(() => {
    // Allow layout to paint after navigating from another route (e.g. /cdr-viewer).
    const id = window.setTimeout(() => consumePendingHomeScroll(), 50);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <ClientWork />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
