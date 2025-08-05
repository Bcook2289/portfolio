import { motion } from "framer-motion";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import { techIcons } from "../../components/utils/techIcons";
import { projectData } from "../../components/utils/projectData";

export default function ProjectsPage() {
    return (
        <div className="text-black dark:text-white bg-white dark:bg-black flex flex-col h-screen">

            <NavBar/>
            <main className="flex flex-wrap justify-center items-center py-24 flex-grow">
                {projectData.map((project, index) => (
                    <div 
                    key={index} 
                    className="rounded-2xl h-10/12 shadow-lg overflow-hidden font-sora bg-gray-300 text-black p-4 m-4 w-80"
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
            </main>
        </div>
        
    )
}