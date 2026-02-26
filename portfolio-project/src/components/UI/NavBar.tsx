"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
// import {Link} from "@/navigation";
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
        <div className="div-container flex flex-row sm:flex-col">
          <ThemeSwitcher/>
          <LocaleSwitcher/>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
