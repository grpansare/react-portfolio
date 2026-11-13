import React, { useState } from "react";
import { Code2, LayoutTemplate, Server, ShieldCheck, Database, Container } from "lucide-react";
import { Reveal, SectionHeader, TiltCard } from "./ui";

// Logos come from devicon (pinned version). Skills without a logo get a dot.
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";
const logo = (slug) => `${DEVICON}/${slug}/${slug}-original.svg`;

// Black logos that disappear on the dark background.
const INVERT_DARK = new Set(["nextjs", "express", "apachekafka", "githubactions"]);

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      ["Java", "java"],
      ["JavaScript", "javascript"],
      ["TypeScript", "typescript"],
      ["Python", "python"],
      ["SQL", "azuresqldatabase"],
    ],
  },
  {
    title: "Frontend",
    icon: LayoutTemplate,
    skills: [
      ["React", "react"],
      ["Angular", "angular"],
      ["Redux", "redux"],
      ["Next.js", "nextjs"],
      ["Tailwind CSS", "tailwindcss"],
      ["HTML & CSS", "html5"],
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      ["Spring Boot", "spring"],
      ["Spring Security", "spring"],
      ["Spring Cloud", "spring"],
      ["Node.js", "nodejs"],
      ["Express.js", "express"],
      ["REST APIs"],
      ["Kafka", "apachekafka"],
    ],
  },
  {
    title: "Auth & Payments",
    icon: ShieldCheck,
    skills: [["JWT"], ["OAuth 2.0", "oauth"], ["Keycloak"], ["Razorpay"]],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      ["MySQL", "mysql"],
      ["PostgreSQL", "postgresql"],
      ["MongoDB", "mongodb"],
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Container,
    skills: [
      ["Docker", "docker"],
      ["Kubernetes", "kubernetes"],
      ["ArgoCD", "argocd"],
      ["GitHub Actions", "githubactions"],
      ["Git & GitHub", "git"],
    ],
  },
];

// One logo per technology for the scrolling strip.
const marqueeItems = [
  ...new Map(
    skillCategories
      .flatMap((c) => c.skills)
      .filter(([, slug]) => slug && slug !== "azuresqldatabase" && slug !== "oauth")
      .map(([name, slug]) => [slug, [slug === "spring" ? "Spring" : name, slug]])
  ).values(),
];

const SkillLogo = ({ slug, className = "h-5 w-5" }) => {
  const [failed, setFailed] = useState(false);
  if (!slug || failed) {
    return <span className="h-1.5 w-1.5 rounded-full bg-violet-500" aria-hidden="true" />;
  }
  return (
    <img
      src={logo(slug)}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${className} ${INVERT_DARK.has(slug) ? "dark:invert" : ""}`}
    />
  );
};

const Marquee = () => (
  <div
    className="relative mb-10 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    aria-hidden="true"
  >
    <div className="flex w-max animate-marquee motion-reduce:animate-none">
      {[...marqueeItems, ...marqueeItems].map(([name, slug], i) => (
        <div
          key={i}
          className="flex items-center gap-2.5 pr-10 text-sm font-medium text-gray-500 grayscale transition hover:text-gray-900 hover:grayscale-0 dark:text-gray-400 dark:hover:text-white"
        >
          <SkillLogo slug={slug} className="h-7 w-7" />
          {name}
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" className="section-padding section-base">
    <div className="container-max">
      <SectionHeader
        index="04"
        title="Skills"
        subtitle="The stack I use at work and in my projects."
      />

      <Marquee />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Reveal key={category.title} delay={(index % 3) * 0.06}>
              <TiltCard max={5} className="card group h-full p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600 ring-1 ring-violet-100 transition-colors group-hover:bg-violet-600 group-hover:text-white dark:bg-violet-400/10 dark:text-violet-300 dark:ring-violet-400/20">
                      <Icon size={20} />
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-gray-400">
                    {String(category.skills.length).padStart(2, "0")}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map(([name, slug]) => (
                    <li
                      key={name}
                      className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-400 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-gray-100 dark:hover:border-violet-400/60"
                    >
                      <SkillLogo slug={slug} className="h-4 w-4" />
                      {name}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
