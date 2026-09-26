"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
import LocaleSwitcher from "./LocaleSwitcher";
import MobileMenu from "./MobileMenu";
import BracketHover from "./BracketHover";
import { NavItem } from "../../types/navigation";

const navItems: NavItem[] = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  {
    label: "projects", 
    children: [
      { label: "calmAnchor", href: "/projects/calm-anchor" },
      { label: "cms", href: "/projects/cms" },
      { label: "myVirtualFridge", href: "/projects/my-virtual-fridge" },
      { label: "vitaeAggregate", href: "/projects/vitae-aggregate" },
    ]
  },
  { label: "contact", href: "/#contact" },
];

const NavBar = () => {
  const t = useTranslations("navbar");
  const tEvidence = useTranslations("evidence")

  return (
    <nav className="nav-container">
      <div className="mx-auto flex w-full max-w-6xl items-center">
        {/* SITE IDENTITY */}
        <Link
          href="/"
          className="font-sora text-xs font-semibold leading-tight tracking-tight sm:text-base"
        >
          Brandon Cook
        </Link>
        {/* RIGHT SIDE - DESKTOP NAVIGATION*/}
        <div className="ml-auto hidden items-center gap-8 sm:flex">
          {/* NAVIGATION */}
          <ul className="flex items-center gap-4 font-sora text-xs font-semibold sm:gap-6 sm:text-sm">
            {navItems.map((item) => (
              <li key={item.label} className="relative">
                {item.children ? (
                  <div className="relative group">
                    <button type="button" className="hover-logic">
                      <BracketHover>
                        {t(item.label)}
                      </BracketHover>
                    </button>

                    <div className="absolute left-0 top-full hidden pt-3 group-hover:block">
                      <ul className="border border-black bg-white p-3 dark:border-white dark:bg-black">
                        {item.children.map((project) => (
                          <li key={project.href}>
                            <Link href={project.href}>
                              <BracketHover>
                                {tEvidence(project.label)}
                              </BracketHover>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link href={item.href!} className="hover-logic">
                    <BracketHover>
                      {t(item.label)}
                    </BracketHover>
                  </Link>
                )}
              </li>
              ))}
          </ul>
          {/* UTILITY CONTROLS */}
          <div className="flex items-center gap-2">
            <ThemeSwitcher/>
            <LocaleSwitcher/>
          </div>
        </div>
        {/* RIGHT SIDE - MOBILE NAVIGATION */}
        <div className="ml-auto sm:hidden">
          <MobileMenu navItems={navItems}/>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
