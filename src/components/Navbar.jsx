import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // The hero isn't a nav item; clear the highlight when back at the top.
      if (window.scrollY < window.innerHeight * 0.4) setActive("");
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: highlight the section crossing the upper-middle of the viewport.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkClass = (href) =>
    `relative font-medium transition-colors duration-200 ${
      active === href
        ? "text-violet-700 dark:text-violet-300"
        : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
    }`;

  return (
    <motion.nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-white/85 dark:bg-ink-950/85 backdrop-blur-md border-b border-gray-200 dark:border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container-max">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#home"
            className="font-display text-xl font-bold text-gray-900 dark:text-white"
          >
            Ganesh<span className="text-violet-600 dark:text-violet-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={linkClass(item.href)}
                aria-current={active === item.href ? "true" : undefined}
              >
                {item.name}
                {active === item.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-violet-600 dark:bg-violet-400"
                  />
                )}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white transition-colors"
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 text-gray-600 dark:text-gray-300"
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="rounded-lg p-2 text-gray-700 dark:text-gray-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="md:hidden border-t border-gray-200 dark:border-white/10 bg-white dark:bg-ink-950"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
        >
          <div className="container-max py-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block py-3 text-lg ${linkClass(item.href)}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
