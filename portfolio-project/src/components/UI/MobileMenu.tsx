"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
import LocaleSwitcher from "./LocaleSwitcher";
import { li } from "framer-motion/client";

type NavItem = {
    label: string;
    href: string;
};

type MobileMenuProps = {
    navItems: NavItem[];
}

const MobileMenu = ({ navItems }: MobileMenuProps) => {
    const t = useTranslations("navbar");
    const [ menuOpen, setMenuOpen ] = useState(false);

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
                        {navItems.map((link) => (
                            <li
                                key={link.href}
                                className="border-b border-black dark:border-white"
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block px-6 py-4 sm:px-10"
                                >
                                    {t(link.label)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
    );
};

export default MobileMenu;