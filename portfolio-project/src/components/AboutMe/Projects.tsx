import { useTranslations } from "next-intl";
import Image from "next/image";

interface Project {
    title: string,
    desc: string,
    role: string,
    keyPoints: string[],
    tech: string[],
    image: string,
    link: string
}

const Projects = () => {
    const t = useTranslations();
    const projectDataRaw = t.raw("projects") as Project[];
    const header = t("sectionHeader.projects")

    return (
        <>
            <section className="py-4">
                <h2 className="about-header">{ header }</h2>
                    <div className="grid grid-cols-1">
                        {
                            projectDataRaw.slice().reverse().slice(0, 3).map((project, index) => {
                                return (
                                    <div key={index} className="sm:mb-2">
                                        <div className="flex"> 
                                            <h3 className="text-xs sm:text-md md:text-lg font-semibold mr-2">{project.title}</h3>
                                            <h4 className="text-xs sm:text-md md:text-lg italic">
                                                <a href={project.link} className="flex justify-between cursor-pointer">
                                                    {project.role} 
                                                    <Image alt="link" src={"/svg-icons/link-light.svg"} width={10} height={10} className="ml-2"/>
                                                </a>
                                            </h4>
                                        </div>
                                        <p className="text-xs sm:text-md">{project.desc}</p>
                                        <ul className="text-xs sm:text-md list-disc list-inside space-y-1 pl-4">
                                            {project.keyPoints.map((point, index) => {
                                                return (
                                                    <li key={index} className="">{point}</li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
            </section>
        </>
    )
} 
export default Projects;