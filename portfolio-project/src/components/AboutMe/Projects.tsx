import { projectData } from "../utils/projectData";
import Image from "next/image";

const Projects = () => {
    return (
        <>
            <section className="py-4">
                <h2 className="text-xl font-semibold mb-4 bg-gray-100 text-center">Projects</h2>
                    <div className="grid grid-cols-1">
                        {
                            projectData.slice().reverse().slice(0, 3).map((project, index) => {
                                return (
                                    <div key={index} className="mb-2">
                                        <div className="flex"> 
                                            <h3 className="text-lg font-semibold mr-2">{project.title}</h3>
                                            <h4 className="text-lg italic">
                                                <a href={project.link} className="flex">
                                                    {project.role} 
                                                    <Image alt="link" src={"/svg-icons/link-light.svg"} width={10} height={10} className="ml-2"/>
                                                </a>
                                            </h4>
                                        </div>
                                        <p className="">{project.desc}</p>
                                        <ul className="list-disc list-inside space-y-1 pl-4">
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