import React from "react";
import { ExternalLink, Github, Layers } from "lucide-react";
import { Reveal, SectionHeader, TiltCard } from "./ui";

const projects = [
  {
    title: "TaskFlow",
    subtitle: "Distributed Task Management",
    description:
      "JIRA-style task manager built as 7+ Spring Boot microservices behind an API Gateway with Eureka discovery. Kanban boards, Keycloak IAM with RBAC and Google/GitHub social login, and Kafka-driven notifications. Deployed on Kubernetes via ArgoCD (GitOps).",
    note: "Team project · humancloud training",
    image: "",
    technologies: ["Spring Boot", "Microservices", "Keycloak", "Kafka", "Docker", "Kubernetes", "ArgoCD"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    title: "SacredStore",
    subtitle: "Religious E-commerce Platform",
    description:
      "E-commerce platform for religious products with secure checkout, Razorpay integration, admin dashboard and complete product management.",
    image: "/projects/sacredstore.jpg",
    technologies: ["Spring Boot", "React.js", "MySQL", "Razorpay"],
    liveUrl: "https://sacredstore-2.onrender.com/",
    githubUrl: "https://github.com/grpansare/SacredStore",
  },
  {
    title: "Smart Car Parking",
    subtitle: "Parking Booking System",
    description:
      "Real-time slot booking with map-based search, JWT & Google OAuth, Razorpay payments, and role-based dashboards for users, owners and admins.",
    image: "/projects/smartparking.jpg",
    technologies: ["React.js", "Spring Boot", "MySQL", "Leaflet", "Razorpay"],
    liveUrl: "https://parkeasein.netlify.app/",
    githubUrl: "https://github.com/grpansare/smart_car_parking",
  },
  {
    title: "Big 5 Personality Test",
    subtitle: "Personality Assessment App",
    description:
      "Five-Factor Model assessment with graphical results, secure profiles, JWT authentication and email OTP verification via Nodemailer.",
    image: "/projects/big5.jpg",
    technologies: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://big-5-personality-test.netlify.app/",
    githubUrl: "https://github.com/grpansare/big5personalitytest",
  },
];

const ProjectLinks = ({ project }) => (
  <div className="mt-auto flex flex-wrap gap-2 pt-5">
    {project.liveUrl && (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700 transition-colors"
      >
        <ExternalLink size={15} />
        Live demo
      </a>
    )}
    {project.githubUrl && (
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:border-violet-500 hover:text-violet-700 dark:border-white/15 dark:text-gray-200 dark:hover:border-violet-400 dark:hover:text-violet-300 transition-colors"
      >
        <Github size={15} />
        Code
      </a>
    )}
    {project.note && (
      <span className="inline-flex items-center px-1 py-2 text-sm text-gray-500 dark:text-gray-400">
        {project.note}
      </span>
    )}
  </div>
);

const ProjectImage = ({ project, className }) =>
  project.image ? (
    <img
      src={project.image}
      alt={`${project.title} screenshot`}
      loading="lazy"
      className={`object-cover object-top ${className}`}
    />
  ) : (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-900 ${className}`}
    >
      <div className="hero-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative text-center text-white">
        <Layers className="mx-auto mb-2 opacity-80" size={32} />
        <span className="font-display text-2xl font-bold">{project.title}</span>
      </div>
    </div>
  );

const Projects = () => (
  <section id="projects" className="section-padding section-alt">
    <div className="container-max">
      <SectionHeader
        index="03"
        title="Projects"
        subtitle="Things I've designed and built end to end."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={(index % 2) * 0.06}
            className={project.featured ? "md:col-span-2 lg:col-span-3" : ""}
          >
            <TiltCard
              as="article"
              max={project.featured ? 3 : 6}
              className={`card flex h-full overflow-hidden ${
                project.featured ? "flex-col md:flex-row" : "flex-col"
              }`}
            >
            <ProjectImage
              project={project}
              className={
                project.featured
                  ? "h-56 w-full md:h-auto md:w-2/5 md:min-h-[320px]"
                  : "h-52 w-full border-b border-gray-200 dark:border-white/10"
              }
            />
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              {project.featured && (
                <span className="mb-3 w-fit rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-700 dark:bg-violet-400/10 dark:text-violet-300">
                  Featured
                </span>
              )}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-violet-700 dark:text-violet-300">
                {project.subtitle}
              </p>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                {project.technologies.map((tech) => (
                  <li key={tech} className="tag">
                    {tech}
                  </li>
                ))}
              </ul>
              <ProjectLinks project={project} />
            </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
