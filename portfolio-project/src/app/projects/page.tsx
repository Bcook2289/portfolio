import { m } from "framer-motion";
import NavBar from "../../components/NavBar";
import Image from "next/image";

// data structure
// project title
// description
// tech stack
// image url
// project link
const projectData = [
    {
        title: "Hato",
        desc: "A social media app designed around flashcards",
        tech: ["Express.js", "Node.js", "React.js", "Knex.js", "PostgreSQL", "JavaScript", "Typescript"],
        image: "/project-captures/Hato.JPG",
        link: "https://github.com/hato-app"
    },
    {
        title: "Dokushojo",
        desc: "A Language Learning app focusing on listening comprehension",
        tech: ["Express.js", "Node.js", "React.js", "Knex.js", "Bootstrap CSS", "PostgreSQL", "Vite", "Typescript"],
        image: "/project-captures/DSJ.JPG",
        link: "https://github.com/Planet-DokuShojo/"
    },
    {
        title: "VitaeAggregate",
        desc: "A community app designed around critiquing and building ATS friendly resumes",
        tech: ["Cypress", "Node.js", "Svelte", "DjangoRest", "PostgreSQL", "Python", "Typescript", "pytest", "Docker"],
        image: "/project-captures/Hato.JPG",
        link: "https://github.com/vitaeaggregate"
    },
    {
        title: "Portfolio Site",
        desc: "A portfolio showcasing my work",
        tech: ["Next.js", "Tailwind", "Tailwind"],
        image: "/project-captures/VitaeAggregate.JPG",
        link: "https://github.com/Bcook2289/portfolio"
    },

];

export default function ProjectsPage() {
    return (
        <>
            <NavBar/>
            <div>
                <h1>All Projects</h1>
            </div>
        </>
    )
}