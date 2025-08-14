"use client";

import { useTranslations } from "next-intl";
import { skillsData } from "../utils/skillsData";

const Skills = () => {
    const t = useTranslations("skills");
    
    return (
        <>
            <section>
                <h2 className="text-xl font-semibold my-4 bg-gray-200 text-center">{t("skill")}</h2>
                <div className="flex flex-wrap gap-1">
                    {
                        Object.entries(skillsData).map(([category, skills]) => {
                            return (
                                <div key={category} className="flex flex-wrap items-center">
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