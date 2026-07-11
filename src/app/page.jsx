import Nav from "@/components/home/Nav";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import WorkExperience from "@/components/home/WorkExperience";
import Education from "@/components/home/Education";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WorkExperience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
