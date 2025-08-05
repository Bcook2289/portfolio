import { motion } from "framer-motion";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import { techIcons } from "../../components/utils/techIcons";
import { projectData } from "../../components/utils/projectData";

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