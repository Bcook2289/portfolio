import { projectData } from "../utils/projectData";

const Projects = () => {
    return (
        <>
            <section className="py-8">
                <h2 className="text-2xl font-semibold mb-4">Projects</h2>
                    <div className="grid grid-cols-1">
                        {
                            projectData.slice().reverse().map((project, index) => {
                                return (
                                    <div key={index} className="mb-4">
                                        <div className="flex"> 
                                            <h3 className="text-xl font-semibold mb-1 mr-4">{project.title}</h3>
                                            <h4 className="text-lg">{project.role}</h4>
                                        </div>
                                        <p className="mb-4">{project.desc}</p>
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