"use client"

import Intro from "../../../components/AboutMe/Intro";
import Education from "../../../components/AboutMe/Education";
import Skills from "../../../components/AboutMe/Skills";
import Experience from "../../../components/AboutMe/Experience";
import Projects from "../../../components/AboutMe/Projects";
import NavBar from "../../../components/NavBar";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="page-container">
      <NavBar />
      <main className="min-h-screen font-sora m-4 sm:m-8 sm:pb-8">
        <div className="min-h-screen m-auto lg:max-w-1/2 flex flex-col lg:mt-24 items-center px-8 text-center text-xs sm:text-base lg:text-lg leading-relaxed">
          <Intro pageFlag="detailed" />
        </div>
        <div className="flex md:hidden animate-bounce dark:text-gray-200 absolute bottom-2 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="hidden md:flex flex-col items-center absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce dark:text-gray-200">
          <h2>{t("scrollPrompt")}</h2>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="lg:max-w-1/2 px-2 py-2 sm:px-8 sm:py-8 bg-white text-black rounded-xl shadow-xl mx-auto">
          <Skills />
          <Projects />
          <Experience />
          <Education />
        </div>
      </main>
    </div>
  );
}
