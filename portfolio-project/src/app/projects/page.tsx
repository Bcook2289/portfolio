import { m } from "framer-motion";
import NavBar from "../../components/NavBar";
import Image from "next/image";
import Link from "next/link";

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
        tech: ["Express.js", "Node.js", "React.js", "Knex.js", "PostgreSQL", "JavaScript", "TypeScript"],
        image: "/project-captures/Hato.JPG",
        link: "https://github.com/hato-app"
    },
    {
        title: "Dokushojo",
        desc: "A Language Learning app focusing on listening comprehension",
        tech: ["Express.js", "Node.js", "React.js", "Knex.js", "Bootstrap CSS", "PostgreSQL", "Vite", "TypeScript"],
        image: "/project-captures/DSJ.JPG",
        link: "https://github.com/Planet-DokuShojo/"
    },
    {
        title: "VitaeAggregate",
        desc: "A community app designed around critiquing and building ATS friendly resumes",
        tech: ["Cypress", "Node.js", "Svelte.js", "Django", "PostgreSQL", "Python", "TypeScript", "Pytest", "Docker", "Vercel"],
        image: "/project-captures/VitaeAggregate.JPG",
        link: "https://github.com/vitaeaggregate"
    },
    {
        title: "Portfolio Site",
        desc: "A portfolio showcasing my work",
        tech: ["Next.js", "Tailwind", "TypeScript", "Vercel"],
        image: "/project-captures/Bandpage.JPG",
        link: "https://github.com/Bcook2289/portfolio"
    },
    {
        title: "Freelance Landing Site",
        desc: "A freelance responsive, mobile-first homepage built for a local musical act in the Tokyo area. ",
        tech: ["Next.js", "Tailwind", "TypeScript", "Vercel"],
        image: "/project-captures/Bandpage.JPG",
        link: "https://github.com/sentient-band-site"
    },

];

const techIcons: { [key: string] : string } = {
    "Express.js" : "/svg-icons/expressjs-dark.svg",
    "Next.js" : "/svg-icons/nextjs.svg",
    "Bootstrap CSS" : "/svg-icons/bootstrap.svg",
    "Cypress" : "/svg-icons/cypress.svg",
    "Django" : "/svg-icons/django.svg",
    "JavaScript" : "/svg-icons/javascript.svg",
    "Docker" : "/svg-icons/docker.svg",
    "Knex.js" : "/svg-icons/knexjs.svg",
    "Node.js" : "/svg-icons/nodejs.svg",
    "PostgreSQL" : "/svg-icons/postgresql.svg",
    "Pytest" : "/svg-icons/pytest.svg",
    "Python" : "/svg-icons/python.svg",
    "React.js" : "/svg-icons/reactjs.svg",
    "Svelte.js" : "/svg-icons/sveltejs.svg",
    "TypeScript" : "/svg-icons/typescript.svg",
    "Vite" : "/svg-icons/vite.svg",
    "Tailwind" : "/svg-icons/tailwindcss.svg",
    "Vercel" : "/svg-icons/vercel-dark.svg",
}

export default function ProjectsPage() {
    return (
        <>
            <NavBar/>
            <div className="flex justify-center">
                {projectData.map((project, index) => (
                    <div 
                        key={index} 
                        className="rounded-2xl shadow-lg overflow-hidden font-sora bg-gray-300 text-black dark:bg-white p-4 m-4 w-70"
                    >
                        <div className="flex flex-col justify-center">
                            <Link href={project.link}>{project.title}</Link>
                            <Image alt= {project.title} src={project.image} width={200} height={200}/>
                        </div>
                        <p>{ project.desc }</p>
                        <div>
                            <h3>Tech Stack:</h3>
                            <ul className="flex gap-2 flex-wrap items-center">
                                {project.tech.map((techItem : string, techIndex) => (
                                    <li key={techIndex}>
                                        <Image alt={techItem} src={techIcons[techItem]} title={techItem} width={24} height={24}/>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}