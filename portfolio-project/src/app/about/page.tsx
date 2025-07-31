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
      <main className="min-h-screen font-sora mx-8 dark:text-white text-black">
        <div className="h-screen m-auto max-w-1/2 flex flex-col justify-center items-center px-8 text-center text-lg">
          <Intro pageFlag="detailed" />
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce dark:text-gray-200 text-black flex flex-col items-center">
          <h2>scroll down for more!</h2>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="max-w-1/2 text-xs px-8 py-8 bg-white text-black rounded-xl shadow-xl mx-auto">
          <Skills />
          <Projects />
          <Experience />
          <Education />
        </div>
      </main>
    </>
  );
}
