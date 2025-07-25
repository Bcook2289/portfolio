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
      <main className="min-h-screen font-sora text-xs">
        <div className="max-w-1/2 px-8 py-8 bg-white text-black mx-auto">
          <Intro pageFlag="detailed" />
          <Skills />
          <Projects />
          <Experience />
          <Education />
        </div>
      </main>
    </>
  );
}
