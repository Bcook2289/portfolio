"use client"
import { useTranslations } from "next-intl";
import ScrollAnimation from "../UI/ScrollAnimation";

const buildAreas = [
        {
            number: "01",
            title: "webApplications",
            description: "webApplicationsDescription",
        },
        {
            number: "02",
            title: "crossPlatform",
            description: "crossPlatformDescription",
        },
        {
            number: "03",
            title: "systemsAndArchitecture",
            description: "systemsAndArchitectureDescription",
        },
        {
            number: "04",
            title: "technicalDelivery",
            description: "technicalDeliveryDescription",
        },
];


const WhatIBuild = () => {
    const t = useTranslations("buildAreas");

    return (
        <section className="min-h-screen px-6 py-20 sm:px-10 lg:px-16">
            <div className="mx-auto flex min-h-[calc(100vh-10rem)] w-full max-w-6xl flex-col">
                {/* SECTION LABEL */}
                <div className="mb-12 flex items-center gap-4">
                    <span className="font-jetbrains text-xs font-medium tracking-wider sm:text-sm">
                        02 / WHAT I BUILD
                    </span>
                    <span className="h-px flex-1 bg-black dark:bg-white"/>
                </div>
                {/* BUILD AREAS */}
                <div className="flex flex-1 flex-col justify-center">
                    {buildAreas.map((area) => (
                        <div 
                            key={area.number}
                            className="grid grid-cols-[3em_1fr] gap-4 border-t border-black py-6 dark:border-white sm:grid-cols-[4rem_1fr] sm:gap-8 sm:py-8"
                        >
                            <span className="font-jetbrains text-xs tracking-wider sm:text-sm">
                                {area.number}
                            </span>
                            <div className="grid gap-2 md:grid-cols-[1fr_1fr] md:gap-12">
                                <h2 className="font-sora text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl">
                                    {t(area.title)}
                                </h2>
                                <p className="max-w-md font-sora text-sm leading-relaxed sm:text-base">
                                    {t(area.description)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* SCROLL INDICATOR */}
                <div className="flex justify-center pt-10">
                    <ScrollAnimation/>
                </div>
            </div>
        </section>
    )
}

export default WhatIBuild;