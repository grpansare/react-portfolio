import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { contact } from "../data/profile";

const socialLinks = [
  { icon: Github, href: contact.github, label: "GitHub" },
  { icon: Linkedin, href: contact.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${contact.email}`, label: "Email" },
];

const Footer = () => (
  <footer className="section-base border-t border-gray-200 dark:border-white/10">
    <div className="container-max flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Ganesh Pansare · Built with React & Tailwind CSS
      </p>
      <div className="flex items-center gap-1">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            {...(href.startsWith("http") && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
            className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
