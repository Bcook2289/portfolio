"use client"

import { useTranslations } from "next-intl";
import { professionalExperienceData } from "../utils/professionalExperienceData";

interface professionalExperience {
    role: string,
    company: string,
    date: string,
    keyPoints: string[]
}

const Experience = () => {
    const t = useTranslations();
    const professionalExperienceDataRaw = t.raw("experience") as professionalExperience[];
    const expHeader = t("sectionHeader.professionalExperience")

    return (
        <>
            <section>
                <h2 className="about-header">{t(expHeader)}</h2>
                {
                    professionalExperienceDataRaw.map((exp, index) => {
                        return (
                            <div key={index} className="mb-2">
                                <div className="flex flex-col sm:flex-row">
                                    <h3 className="text-xs sm:text-lg font-semibold mr-2 whitespace-nowrap">{exp.role}, {exp.company}</h3>
                                    <h4 className="text-xs sm:text-lg whitespace-nowrap">{exp.date}</h4>
                                </div>
                                <ul className="text-xs sm:text-md list-disc space-y-1 pl-4">
                                    {
                                        exp.keyPoints.map((keyPoint, keyPointIndex) => {
                                            return (
                                                <li key={keyPointIndex}>{ keyPoint }</li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        );
                    })
                }
            </section>
        </>
    )
} 
export default Experience;