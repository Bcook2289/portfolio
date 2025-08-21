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
                <h2 className="about-header">{ header }</h2>
                    {educationDataRaw.map((edu, index) => {
                        return (
                            <div key={index} className="grid grid-cols-2 gap-x-4 text-xs sm:text-lg mb-4 items-start">
                                <div>
                                    <h3 className="font-semibold">{edu.edu}</h3>
                                    <h3>{edu.school}</h3>
                                </div>
                                <div className="text-right">
                                    <h4 className="sm:ml-8">{edu.date}</h4>
                                    <h4 className="sm:ml-8">{edu.location}</h4>
                                </div>
                            </div>
                        );
                    })}
            </section>
        </>
    )
}
export default Education;