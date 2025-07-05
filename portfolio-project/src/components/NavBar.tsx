"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];
const NavBar = () => {
  return (
    <nav className="w-full p-4">
      <ul className="flex justify-center space-x-8">
        {navItems.map((link) => (
          <motion.li
            key={link.href}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={link.href}
              className="text-lg font-semibold hover:text-gray-400 transition-colors duration-200"
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;
