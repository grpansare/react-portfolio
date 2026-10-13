import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { contact } from "../data/profile";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: contact.github,
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: contact.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <Mail size={20} />,
      href: `mailto:${contact.email}`,
      label: "Email",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 dark:bg-black text-gray-100 dark:text-white transition-colors duration-300"
    >
      <div className="container-max py-8 sm:py-12">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-violet-600 dark:text-violet-400 mb-3 sm:mb-4">
              Ganesh Pansare
            </h3>
            <p className="text-sm sm:text-base text-gray-200 dark:text-gray-300 mb-4 sm:mb-6">
              Junior Software Engineer at humancloud, building scalable
              full-stack web applications.
            </p>

            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  {...(link.href.startsWith("http") && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="text-gray-300 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-100 dark:text-white mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-sm sm:text-base text-gray-200 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-100 dark:text-white mb-3 sm:mb-4">
              Get In Touch
            </h4>
            <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-200 dark:text-gray-300">
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
              <p>{contact.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 dark:border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 dark:text-gray-400 text-xs sm:text-sm">
            © {currentYear} Ganesh Pansare. All rights reserved.
          </p>
          <p className="text-gray-300 dark:text-gray-400 text-xs sm:text-sm flex items-center mt-3 sm:mt-4 md:mt-0">
            Made with <Heart size={16} className="text-red-500 mx-1" /> using
            React & Tailwind CSS
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
