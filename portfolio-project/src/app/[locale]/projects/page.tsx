"use client";

import { useTranslations } from "next-intl";
import NavBar from "../../../components/UI/NavBar";
import ProjectListPage from "../../../components/Projects/ProjectListPage";
import { Project } from "../../../types/ProjectPage";

export default function Projects() {
    const t = useTranslations();
    const projects = Object.values(
        t.raw("projects") as Record<string, Project>
    );

    return (
        <div className="page-container">
            <NavBar/>
            <ProjectListPage projects={projects}/>
        </div>
    )
}