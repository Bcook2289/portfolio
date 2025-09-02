"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

const navItems = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "projects", href: "/projects" },
  { label: "contact", href: "/contact" },
];

const projectsLinks = [
  { label: "inProgress", href: "/projects/progress" },
  { label: "roadmaps", href: "/projects/roadmap" },
];

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const t = useTranslations("navbar");

  return (
    <>
      <nav className="nav-container">
        <ul className="list-container">
          {navItems.map((link) =>
            link.label === "Projects" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
                  <Link
                    href={link.href}
                    className="hover-logic"
                  >
                    {t(link.label)}
                  </Link>
                </motion.li>

                {/* <AnimatePresence>
                  {isHovered && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-28 bg-white shadow-lg rounded-lg py-2"
                    >
                      {projectsLinks.map((project) => (
                        <motion.li 
                          key={project.href}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            href={project.href}
                            className="inline-block relative px-4 py-2 font-semibold text-sm text-black  hover:text-gray-400 group"
                          >
                            {t(project.label)}
                            <span className="absolute left-0 ml-3 bottom-0 h-[2px] w-0 bg-black dark:text-white transition-all duration-300 group-hover:w-[80%]"></span>
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence> */}
              </div>
            ) : (
              <motion.li
                key={link.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <Link
                  href={link.href}
                  className="hover-logic"
                >
                  {t(link.label)}
                  <span className="span-design"></span>
                </Link>
              </motion.li>
            )
          )}
        </ul>
        <div className="div-container">
          <ThemeSwitcher/>
          <LocaleSwitcher/>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
