"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
import LocaleSwitcher from "./LocaleSwitcher";

const navItems = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "projects", href: "/projects" },
  { label: "contact", href: "/contact" },
];

const NavBar = () => {
  const t = useTranslations("navbar");

  return (
    <nav className="nav-container">
      <div className="mx-auto flex w-full max-w-6xl items-center">
        {/* SITE IDENTITY */}
        <Link
          href="/"
          className="font-sora text-sm font-semibold tracking-tight sm:text-base"
        >
          Brandon Cook
        </Link>
        {/* NAVIGATION */}
        <div className="ml-auto flex items-center gap-8">
          <ul className="flex items-center gap-4 font-sora text-xs font-semibold sm:gap-6 sm:text-sm">
            {navItems.map((link) => (
              <motion.li
              key={link.href}
              whileHover={{ scale: 1.05 }}
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
              ))}
          </ul>
          {/* UTILITY CONTROLS */}
          <div className="flex items-center gap-2">
            <ThemeSwitcher/>
            <LocaleSwitcher/>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
