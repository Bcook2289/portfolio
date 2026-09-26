"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
import LocaleSwitcher from "./LocaleSwitcher";
import { NavItem } from "../../types/navigation";

type MobileMenuProps = {
    navItems: NavItem[];
}

const MobileMenu = ({ navItems }: MobileMenuProps) => {
    const t = useTranslations("navbar");
    const tEvidence = useTranslations("evidence");
    const [ menuOpen, setMenuOpen ] = useState(false);
    const [projectsOpen, setProjectsOpen] = useState(false);

    return (
        <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <LocaleSwitcher />

            <button 
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
                className="ml-l flex h-8 w-8 flex-col items-center justify-center gap-1.5"
            >
                <span
                    className={`block h-px w-5 bg-black transition-transform duration-300 dark:bg-white ${
                        menuOpen ? "translate-y-2 rotate-45" : ""
                        }`}
                />
                <span className={`block h-px w-5 bg-black transition-opacity duration-300 dark:bg-white ${
                        menuOpen ? "opacity-0" : ""
                        }`}
                />
                <span className={`block h-px w-5 bg-black transition-transform duration-300 dark:bg-white ${
                        menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                        }`}
                />
            </button>

            {menuOpen && (
                <motion.div
                    initial={{ opacity:0, y: -10}}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-0 right-0 top-full mt-4 border-t border-black bg-white dark:border-white dark:bg-black"
                >
                    <ul className="flex flex-col font-sora text-sm font-semibold">
                        {navItems.map((item) => (
                            <li
                                key={item.href}
                                className="border-b border-black dark:border-white"
                            >
                                {item.children ? (
                                    <>
                                        <button
                                            type="button"
                                            onClick={() => setProjectsOpen(!projectsOpen)}
                                            className="block w-full px-6 py-4 text-left sm:px-10"
                                        >
                                            {t(item.label)}
                                        </button>

                                        {projectsOpen && (
                                            <ul className="border-t border-black dark:border-white">
                                                {item.children.map((project) => (
                                                    <li key={project.href}>
                                                        <Link
                                                            href={project.href}
                                                            onClick={() => setMenuOpen(false)}
                                                            className="block px-10 py-3 sm:px-14"
                                                            >
                                                                {tEvidence(project.label)}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ): (
                                    <Link
                                        href={item.href!}
                                        onClick={() => setMenuOpen(false)}
                                        className="block px-6 py-4 sm:px-10"
                                        >
                                            {t(item.label)}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
    );
};

export default MobileMenu;