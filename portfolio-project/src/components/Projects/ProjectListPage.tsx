import Link from "next/link";
import { Project } from "../../types/ProjectPage";

type ProjectListPageProps = {
    projects: Project[];
};

const projectRoutes: Record<string, string> = {
    calmAnchor: "/projects/calm-anchor",
    cms: "/projects/cms",
    myVirtualFridge: "/projects/my-virtual-fridge",
    vitaeAggregate: "/projects/vitae-aggregate",
}

const ProjectListPage = ({projects}: ProjectListPageProps) => {
    return (

        <main className="px-6 pb-24 pt-20 sm:px-10 lg:px-16">
            <div className="mx-auto w-full max-w-6xl">
                {/* SECTION LABEL */}
                <div className="flex items-center gap-4">
                    <span className="font-jetbrains text-xs font-medium tracking-wider sm:text-sm">
                        01 / PROJECTS
                    </span>

                    <span className="h-px flex-1 bg-black dark:bg-white"/>
                </div>
                {/* INTRO */}
                <div className="mt-16 max-w-3xl">
                    <h1 className="font-sora text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        What I Build
                    </h1>
                    <p className="mt-6 font-sora text-sm leading-relaxed sm:text-base">
                        A selection of software projects spanning web applications, cross-platform applications, and technical delivery.
                    </p>
                </div>

                {/* PROJECTS LIST */}
                <div className="mt-20">
                    {projects.map((project, index) => {
                        const href = projectRoutes[project.id];
                        return (
                            <Link
                                key={project.id}
                                href={href}
                                className="group block border-t border-black p-10 transition-colors duration-200 hover:text-white hover:bg-black dark:border-white dark:hover:bg-white dark:hover:text-black sm:py-12"
                            >
                                <div className="grid gap-8 md:grid-cols-[80px_minmax(0,1fr)_180px] lg:grid-cols-[100px_minmax(0,1fr)_220px]">
                                    {/* NUMBER */}
                                    <div className="font-jetbrains text-xs tracking-wider sm:text-sm">
                                        {String(index + 1).padStart(2,"0")}
                                    </div>
                                    {/* CONTENT */}
                                    <div>
                                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                                            <h2 className="font-sora text-2xl font-semibold tracking-tight transition-transform duration-200 group-hover:translate-x-1 sm:text-3xl">
                                                {project.title}
                                            </h2>
                                            <span className="font-jetbrains text-xs tracking-wide text-neutral-500 dark:text-neutral-400">
                                                {project.period}
                                            </span>
                                        </div>
                                        <p className="mt-4 max-w-2xl font-sora text-sm leading-relaxed sm:text-base">
                                            {project.description}
                                        </p>

                                        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                                            {project.technologies.map((technology) => (
                                                <span 
                                                    key={technology}
                                                    className="font-jetbrains text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 sm:text-xs"
                                                >
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    {/* ROLE / LINK */}
                                    <div className="flex flex-col justify-between gap-6 md:items-end md:text-right">
                                        <span className="font-jetbrains text-xs uppercase tracking-wider">
                                            {project.role}
                                        </span>
                                        <span className="font-jetbrains text-xs tracking-wider transition-transform duration-200 group-hover:translate-x-1">
                                            View project →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}

export default ProjectListPage;