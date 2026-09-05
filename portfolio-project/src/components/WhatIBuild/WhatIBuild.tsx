"use client"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import ScrollAnimation from "../UI/ScrollAnimation";

const buildAreas = [
        {
            number: "01",
            title: "webApplications",
            description: "webApplicationsDescription",
            details: "webApplicationsDetails",
            evidence: "webApplicationsEvidence"
        },
        {
            number: "02",
            title: "crossPlatform",
            description: "crossPlatformDescription",
            details: "crossPlatformDetails",
            evidence: "crossPlatformEvidence"
        },
        {
            number: "03",
            title: "systemsAndArchitecture",
            description: "systemsAndArchitectureDescription",
            details: "systemsAndArchitectureDetails",
            evidence: "systemsAndArchitectureEvidence"
        },
        {
            number: "04",
            title: "technicalDelivery",
            description: "technicalDeliveryDescription",
            details: "technicalDeliveryDetails",
            evidence: "technicalDeliveryEvidence"
        },
];


const WhatIBuild = () => {
    const t = useTranslations("buildAreas");
    const [expanded, setExpanded] = useState<string | null>(null);

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
                    {buildAreas.map((area) => {
                        const isExpanded = expanded === area.number;
                        return (
                            <motion.div 
                                key={area.number}
                                layout
                                className={`
                                    border-t 
                                    border-black 
                                    dark:border-white
                                    transition-colors
                                    duration-300
                                    ${ isExpanded ? "bg-black text-white dark:bg-white dark:text-black" : "" }
                                `}
                            >
                                <button
                                    type="button"
                                    onClick={() => 
                                        setExpanded(
                                            isExpanded ? null : area.number
                                        )
                                    }
                                    className="
                                        group 
                                        w-full 
                                        text-left
                                        transition-colors
                                        duration-300
                                        hover:bg-black
                                        hover:text-white
                                        dark:hover:bg-white
                                        dark:hover:text-black
                                    "
                                >
                                    <div className="grid grid-cols-[3rem_1fr] gap-4 py-6 px-6 sm:grid-cols-[4rem_1fr] sm:gap-8 sm:py-8">
                                        {/* NUMBER */}
                                        <span className="font-jetbrains text-xs tracking-wider sm:text-sm">
                                            {area.number}
                                        </span>
                                        {/* TITLE & DESCRIPTION */}
                                        <div className="grid gap-2 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:gap-12">
                                            <h2 className="font-sora text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl">
                                                <span
                                                    aria-hidden="true"
                                                    className="
                                                        mr-3
                                                        inline-block
                                                        -translate-x-4
                                                        opacity-0
                                                        transition-all duration-300 ease-out
                                                        group-hover:translate-x-0
                                                        group-hover:opacity-100
                                                    " 
                                                >
                                                    [
                                                </span>
                                                    {t(area.title)}
                                                <span
                                                    aria-hidden="true"
                                                    className="
                                                        ml-3
                                                        inline-block
                                                        translate-x-4
                                                        opacity-0
                                                        transition-all duration-300 ease-out
                                                        group-hover:translate-x-0
                                                        group-hover:opacity-100
                                                    "
                                                >
                                                    ]
                                                </span>
                                            </h2>
                                            <p className="max-w-md font-sora text-sm leading-relaxed sm:text-base">
                                                {t(area.description)}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                                <AnimatePresence initial={false}>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{height: 0, opacity: 0}}
                                            animate={{height: "auto", opacity: 1}}
                                            exit={{height: 0, opacity: 0}}
                                            transition={{duration: 0.25}}
                                            className="overflow-hidden"
                                        >
                                            <div className="grid grid-cols-[3rem_1fr] gap-4 pb-8 sm:grid-cols-[4rem_1fr] sm:gap-8">
                                                <div />
                                                <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:gap-12">
                                                    <p className="max-w-xl font-sora text-sm leading-relaxed sm:text-base">
                                                        {t(area.details)}
                                                    </p>
                                                    <div>
                                                        <span className="font-jetbrains text-xs tracking-wider">
                                                            RELEVANT WORK
                                                        </span>
                                                        <p className="mt-2 font-sora text-sm sm:text-base">
                                                            {t(area.evidence)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                    {/* CLOSING BORDER */}
                    <div className="border-t border-black dark:border-white" />
                </div>

                {/* SCROLL INDICATOR */}
                <div className="flex justify-center pt-10">
                    <ScrollAnimation/>
                </div>
            </div>
        </section>
    );
};

export default WhatIBuild;