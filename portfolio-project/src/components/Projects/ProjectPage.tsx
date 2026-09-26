"use client";
import { Project } from "../../types/ProjectPage";

type ProjectPageProps = {
    project: Project;
}

const ProjectPage = ({ project }: ProjectPageProps) => {
    return (
        <main>
            <header className="mx-auto max-w-6xl pt-16">
                <div className="mb-10 flex items-center gap-4">
                    <span className="font-jetbrains text-xs font-medium tracking-wider sm:text-sm">
                        01 / PROJECT
                    </span>

                    <span className="h-px flex-1 bg-black dark:bg-white"/>
                </div>

                <div>
                    <h1 className="font-sora text-5xl font-semibold tracking-tight sm:text-7xl">
                        {project.title}
                    </h1>

                    <div className="mt-6 flex flex-col gap-2 font-jetbrains text-xs sm:flex-row sm:gap-8">
                        <span>{project.role}</span>
                        <span>{project.period}</span>
                    </div>

                    <p className="mt-10 max-w-3xl font-sora text-lg leading-relaxed">
                        {project.description}
                    </p>
                </div>
            </header>
            <section className="mx-auto mt-24 max-w-6xl">
                <div className="flex flex-col">
                    {project.sections.map((section) => (
                        <section key={section.id} className="border-t border-black py-16 dark:border-white">
                            <h2 className="font-jetbrains text-xs font-medium uppercase tracking-wider sm:text-sm">
                                {section.title}
                            </h2>

                            <div className="mt-8 max-w-3xl">
                                {section.content.map((paragraph, index) => (
                                    <p 
                                        key={index}
                                        className="mb-6 font-sora text-base leading-relaxed last:mb-0"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default ProjectPage;