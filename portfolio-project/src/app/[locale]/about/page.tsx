import Intro from "../../../components/AboutMe/Intro";
import Education from "../../../components/AboutMe/Education";
import Skills from "../../../components/AboutMe/Skills";
import Experience from "../../../components/AboutMe/Experience";
import Projects from "../../../components/AboutMe/Projects";
import NavBar from "../../../components/NavBar";

export default function AboutPage() {
  return (
    <div className="dark:text-white text-black bg-white dark:bg-black w-full">
      <NavBar />
      <main className="min-h-screen font-sora m-4 sm:m-8 sm:pb-8">
        <div className="h-screen m-auto sm:max-w-1/2 flex flex-col sm:mt-24 items-center px-8 text-center text-sm sm:text-lg leading-relaxed">
          <Intro pageFlag="detailed" />
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce dark:text-gray-200 flex flex-col items-center">
          <h2>scroll down for more!</h2>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="sm:max-w-1/2 text-xs px-8 py-8 bg-white text-black rounded-xl shadow-xl mx-auto">
          <Skills />
          <Projects />
          <Experience />
          <Education />
        </div>
      </main>
    </div>
  );
}
