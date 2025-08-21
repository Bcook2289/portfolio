"use client";

import { useTranslations } from "next-intl";
import { skillsData } from "../utils/skillsData";

const Skills = () => {
    const t = useTranslations("skills");
    const header = useTranslations("sectionHeader")
    
    return (
        <>
            <section>
                <h2 className="about-header">{header("skills")}</h2>
                <div className="flex flex-wrap gap-1 text-xs sm:text-sm">
                    {
                        Object.entries(skillsData).map(([category, skills]) => {
                            return (
                                <div key={category} className="flex flex-wrap sm:items-center">
                                    <h3 className="font-semibold">{ t(category) + ": "}</h3>
                                    <div className="flex flex-wrap">
                                    {skills.map(skill => (
                                        <p key={skill} className="mx-1">{t.has(skill) ? t(skill) : skill}</p>
                                    ))}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
} 
export default Skills;