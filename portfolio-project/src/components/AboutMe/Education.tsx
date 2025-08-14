"use client"

import { useTranslations } from "next-intl";
import { educationData } from "../utils/educationData";

interface education {
    edu: string,
    school: string,
    date: string,
    location: string
}
const Education = () => {
    const t = useTranslations()
    const educationDataRaw = t.raw("education") as education[];
    const header = t("sectionHeader.education")
    return (
        <>
            <section>
                <h2 className="text-2xl font-semibold mb-4 bg-gray-100 text-center">{ header }</h2>
                    {educationDataRaw.map((edu, index) => {
                        return (
                            <div key={index} className="flex mb-4 justify-between">
                                <h3>{edu.edu}, {edu.school}</h3>
                                <h4 className="ml-8">{edu.date}, {edu.location}</h4>
                            </div>
                        );
                    })}
            </section>
        </>
    )
}
export default Education;