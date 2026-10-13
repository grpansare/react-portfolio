import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "JavaScript", "TypeScript", "Python", "SQL"],
    },
    {
      title: "Frontend",
      skills: ["React", "Angular", "Redux", "Next.js", "Tailwind CSS", "HTML & CSS"],
    },
    {
      title: "Backend",
      skills: [
        "Spring Boot",
        "Spring Security",
        "Spring Cloud (Eureka, Gateway)",
        "Node.js",
        "Express.js",
        "REST APIs",
        "Kafka",
      ],
    },
    {
      title: "Auth & Payments",
      skills: ["JWT", "OAuth 2.0", "Keycloak", "Razorpay"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Kubernetes", "ArgoCD", "GitHub Actions", "Git & GitHub"],
    },
  ];

  return (
    <section
      id="skills"
      className="section-padding bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Skills & Technologies
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            The stack I use at work and in my projects.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
