"use client";
import { useTranslations } from "next-intl";
import NavBar from "../../../../components/UI/NavBar";
import ProjectPage from "../../../../components/Projects/ProjectPage";
import { Project } from "../../../../types/ProjectPage";

export default function VitaeAggregatePage() {
    const t = useTranslations("projects");
    const project = t.raw("vitaeAggregate") as Project;

    if(!project) {
        return null;
    }

    return (
        <div className="page-container">
            <NavBar/>
            <ProjectPage project={project}/>
        </div>
    )
}