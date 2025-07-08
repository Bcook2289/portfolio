import Intro from "../../components/AboutMe/Intro";
import Education from "../../components/AboutMe/Education";
import Skills from "../../components/AboutMe/Skills";
import Experience from "../../components/AboutMe/Experience";
import Projects from "../../components/AboutMe/Projects";

export default function AboutPage(){
    return (
        <>
            <Intro/>
            {/* <Experience/> */}
            <Experience />
            <Education />
            <Projects />
            <Skills />
            {/* <Projects/> */}
            {/* <Skills/> */}
        </>
    )
}