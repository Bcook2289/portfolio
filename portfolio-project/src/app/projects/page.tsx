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
        image: <><Image src={"/project-captures/Hato.JPG"} alt="Hato"/></>,
        link: "https://github.com/hato-app"
    }
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