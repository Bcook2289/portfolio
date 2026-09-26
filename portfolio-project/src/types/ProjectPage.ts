export type ProjectSection = {
    id: string;
    title: string;
    content: string[];
}

export type Project = {
    id: string;
    title: string;
    role: string;
    period: string;
    description: string;
    technologies: string[];
    sections: ProjectSection[];
}