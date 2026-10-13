import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { contact } from "../data/profile";

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
    let delay = isDeleting ? 50 : 100;
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 15px rgba(139, 92, 246, 0.6)",
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300"
    >
      <div className="container-max text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            Hi, I'm{" "}
            <motion.span
              className="text-violet-600 dark:text-violet-400 inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Ganesh Pansare
            </motion.span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 flex items-baseline justify-center gap-2"
          >
            <span className="text-gray-900 dark:text-white">I'm a</span>
            <span className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 inline-block">
              {currentText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  repeatType: "reverse",
                }}
              >
                |
              </motion.span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4"
          >
            Junior Software Engineer at humancloud, building scalable web apps
            with React, Angular, Spring Boot and microservices.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            <motion.a
              href="#projects"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-full transition-colors flex items-center gap-2 group shadow-lg"
            >
              View My Work
            </motion.a>
            <motion.a
              href={contact.resume}
              download="Ganesh_Pansare_Resume.pdf"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-full transition-colors flex items-center gap-2 group shadow-lg"
            >
              Download Resume
              <motion.span
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Download className="w-5 h-5" />
              </motion.span>
            </motion.a>
            <motion.a
              href="#contact"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-full transition-colors flex items-center gap-2 group shadow-lg"
            >
              Get In Touch
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowDown className="w-5 h-5" />
              </motion.span>
            </motion.a>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="mt-12 sm:mt-16 flex justify-center space-x-6"
          >
            {[
              {
                icon: <Github className="w-8 h-8 sm:w-10 sm:h-10" />,
                href: contact.github,
                label: "GitHub",
              },
              {
                icon: <Linkedin className="w-8 h-8 sm:w-10 sm:h-10" />,
                href: contact.linkedin,
                label: "LinkedIn",
              },
              {
                icon: <Mail className="w-8 h-8 sm:w-10 sm:h-10" />,
                href: `mailto:${contact.email}`,
                label: "Email",
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                aria-label={social.label}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  scale: 1.1,
                  color: "rgb(139, 92, 246)",
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="animate-bounce mt-8"
          >
            <a
              href="#about"
              aria-label="Scroll to About section"
              className="text-violet-600 dark:text-violet-400 inline-block"
            >
              <ArrowDown size={32} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
