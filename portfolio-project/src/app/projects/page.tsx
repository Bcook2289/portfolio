import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import { techIcons } from "../../components/utils/techIcons";
import { projectData } from "../../components/utils/projectData";

export default function ProjectsPage() {
    return (
        <div className="text-black dark:text-white bg-white dark:bg-black flex flex-col sm:h-screen">
            <NavBar/>
            <main className="flex flex-wrap justify-center items-center sm:py-24 flex-grow">
                {projectData.map((project, index) => 
                    (
                        <div key={index} className="sm:h-11/12">
                            <Card    
                                title={project.title} 
                                desc={project.desc}
                                link={project.link}
                                image={project.image}
                                tech={project.tech}
                                techIcons={techIcons}
                                index={index}
                                />
                        </div>
                    ))}
            </main>
        </div>
        
    )
}