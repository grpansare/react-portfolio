import React from "react";
import { Reveal, SectionHeader } from "./ui";

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

const Skills = () => (
  <section id="skills" className="section-padding section-base">
    <div className="container-max">
      <SectionHeader
        index="04"
        title="Skills"
        subtitle="The stack I use at work and in my projects."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <Reveal
            key={category.title}
            delay={(index % 3) * 0.06}
            className="card p-6"
          >
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-800 dark:border-white/10 dark:bg-white/5 dark:text-gray-100"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
