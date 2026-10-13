import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { contact, stats } from "../data/profile";

const texts = [
  "Software Engineer",
  "Full Stack Developer",
  "Spring Boot & React Developer",
  "Microservices Enthusiast",
];

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[currentIndex];
    let delay = isDeleting ? 40 : 80;
    if (!isDeleting && currentText === current) delay = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === current) {
        setIsDeleting(true);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      } else {
        setCurrentText(
          current.substring(0, currentText.length + (isDeleting ? -1 : 1))
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay, ease: "easeOut" },
  });

  const socials = [
    { icon: Github, href: contact.github, label: "GitHub" },
    { icon: Linkedin, href: contact.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${contact.email}`, label: "Email" },
  ];

  return (
    <section
      id="home"
      className="relative section-base overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-24"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl dark:bg-violet-600/20"
        aria-hidden="true"
      />

      <div className="container-max relative grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.a
            {...fadeUp(0)}
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1.5 text-sm text-gray-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Currently @ humancloud
          </motion.a>

          <motion.h1
            {...fadeUp(0.05)}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-gray-900 dark:text-white"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent dark:from-violet-400 dark:to-indigo-300">
              Ganesh Pansare
            </span>
          </motion.h1>

          {/* Fixed height so the typing animation never shifts the layout */}
          <motion.p
            {...fadeUp(0.1)}
            className="mt-4 h-9 sm:h-10 font-mono text-xl sm:text-2xl text-gray-700 dark:text-gray-300"
          >
            <span className="sr-only">Software Engineer and Full Stack Developer</span>
            <span aria-hidden="true">
              <span className="text-violet-600 dark:text-violet-400">&gt;</span>{" "}
              {currentText}
              <span className="ml-0.5 inline-block w-[2px] h-6 align-middle bg-violet-600 dark:bg-violet-400 animate-pulse motion-reduce:animate-none" />
            </span>
          </motion.p>

          <motion.p
            {...fadeUp(0.15)}
            className="mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-400"
          >
            Junior Software Engineer at humancloud, building scalable web apps
            with React, Angular, Spring Boot and microservices.
          </motion.p>

          <motion.div {...fadeUp(0.2)} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
            <a
              href={contact.resume}
              download="Ganesh_Pansare_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-2 py-3 font-medium text-gray-700 underline-offset-4 hover:text-violet-700 hover:underline dark:text-gray-300 dark:hover:text-violet-300"
            >
              <Download size={16} />
              Resume
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.25)} className="mt-8 flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith("http") && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="rounded-lg p-2.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
                aria-label={label}
              >
                <Icon size={22} />
              </a>
            ))}
          </motion.div>

          <motion.dl
            {...fadeUp(0.3)}
            className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-gray-200 pt-6 dark:border-white/10"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </dt>
                <dd className="order-first font-display text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto w-full max-w-xs sm:max-w-sm"
        >
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-500/40 to-indigo-500/10 blur-xl"
              aria-hidden="true"
            />
            <img
              src="/profile.jpg"
              alt="Ganesh Pansare"
              className="relative aspect-[4/5] w-full rounded-[1.75rem] border border-white/20 object-cover shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
