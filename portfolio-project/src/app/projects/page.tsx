import { motion } from "framer-motion";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import { techIcons } from "../../components/utils/techIcons";
import { projectData } from "../../components/utils/projectData";

// const projectData = [
//     {
//         title: "Hato",
//         desc: "A social media app designed around flashcards",
//         tech: ["Express.js", "Node.js", "React.js", "Knex.js", "PostgreSQL", "JavaScript", "TypeScript"],
//         image: "/project-captures/Hato.JPG",
//         link: "https://github.com/hato-app"
//     },
//     {
//         title: "Dokushojo",
//         desc: "A Language Learning app focusing on listening comprehension",
//         tech: ["Express.js", "Node.js", "React.js", "Knex.js", "Bootstrap CSS", "PostgreSQL", "Vite", "TypeScript"],
//         image: "/project-captures/DSJ.JPG",
//         link: "https://github.com/Planet-DokuShojo/"
//     },
//     {
//         title: "VitaeAggregate",
//         desc: "A community app designed around building ATS friendly resumes",
//         tech: ["Cypress", "Node.js", "Svelte.js", "Django", "PostgreSQL", "Python", "TypeScript", "Pytest", "Docker", "Vercel"],
//         image: "/project-captures/VitaeAggregate.JPG",
//         link: "https://github.com/vitaeaggregate"
//     },
//     {
//         title: "Landing Site",
//         desc: "A responsive, mobile-first homepage built for a local musical act in the Tokyo area. ",
//         tech: ["Next.js", "Node.js", "Tailwind", "TypeScript", "Vercel"],
//         image: "/project-captures/Bandpage.JPG",
//         link: "https://github.com/sentient-band-site"
//     },
//     {
//         title: "Portfolio Site",
//         desc: "A portfolio showcasing my work",
//         tech: ["Next.js", "Node.js", "Tailwind", "TypeScript", "Vercel"],
//         image: "/project-captures/Portfolio.JPG",
//         link: "https://github.com/Bcook2289/portfolio"
//     },

// ];

export default function ProjectsPage() {
    return (
        <>
            <NavBar/>
            <div className="flex justify-center items-center h-screen">
                {projectData.map((project, index) => (
                    <div 
                        key={index} 
                        className="rounded-2xl h-2/3 shadow-lg overflow-hidden font-sora bg-gray-300 text-black dark:bg-white p-4 m-4 w-80"
                    >
                        <Card 
                            title={project.title} 
                            desc={project.desc}
                            link={project.link}
                            image={project.image}
                            tech={project.tech}
                            techIcons={techIcons}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}