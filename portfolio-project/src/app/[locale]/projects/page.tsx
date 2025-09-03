"use client";

import NavBar from "../../../components/UI/NavBar";
import Card from "../../../components/UI/Card";
import { techIcons } from "../../../utils/techIcons";
import { useTranslations } from "next-intl";

interface Project {
    title: string,
    desc: string,
    role: string,
    keyPoints: string[],
    tech: string[],
    image: string,
    link: string
}

export default function ProjectsPage() {

    const t = useTranslations()
    const projectDataRaw = t.raw("projects") as Project[]

    return (
        <div className="text-black dark:text-white bg-white dark:bg-black flex flex-col sm:h-screen">
            <NavBar/>
            <main className="flex flex-wrap justify-center items-center sm:py-24 flex-grow">
                {projectDataRaw.map((project, index) => 
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