import Intro from "../../components/AboutMe/Intro";
import Education from "../../components/AboutMe/Education";
import Skills from "../../components/AboutMe/Skills";
import Experience from "../../components/AboutMe/Experience";
import Projects from "../../components/AboutMe/Projects";
import NavBar from "../../components/NavBar";

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen px-8 py-16">
        <Intro pageFlag="detailed" />
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </main>
    </>
  );
}
