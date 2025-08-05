"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "./Theme/ThemeSwitcher";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const projectsLinks = [
  { label: "In Progress", href: "/projects/progress" },
  { label: "Roadmaps", href: "/projects/roadmap" },
];

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <nav className="w-full p-4">
        <ul className="flex justify-center space-x-8">
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
                    className="text-lg font-semibold hover:text-gray-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.li>

                <AnimatePresence>
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
                            className="inline-block relative px-4 py-2 font-semibold text-sm text-black hover:text-gray-400 group"
                          >
                            {project.label}
                            <span className="absolute left-0 ml-3 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-[80%]"></span>
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
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
                  className="text-lg font-semibold hover:text-gray-400 transition-colors duration-200"
                >
                  {link.label}
                  <span className="absolute left-0 right-0 -bottom-1 h-[2px] w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.li>
            )
          )}
        </ul>
      </nav>
      <ThemeSwitcher/>
    </>
  );
};
export default NavBar;
