import React from "react";
import { Server, Layout, Container } from "lucide-react";
import { Reveal, SectionHeader } from "./ui";

const focusAreas = [
  {
    icon: Server,
    title: "Backend & Microservices",
    description:
      "REST APIs and microservices with Spring Boot, Spring Cloud, Kafka and secure auth (JWT, OAuth2, Keycloak).",
  },
  {
    icon: Layout,
    title: "Frontend",
    description:
      "Responsive, maintainable interfaces with React, Angular, Redux and Tailwind CSS.",
  },
  {
    icon: Container,
    title: "DevOps",
    description:
      "Containerised delivery with Docker, Kubernetes and GitOps using ArgoCD.",
  },
];

const About = () => (
  <section id="about" className="section-padding section-alt">
    <div className="container-max">
      <SectionHeader index="01" title="About" />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="space-y-5 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          <p>
            I'm a{" "}
            <strong className="font-semibold text-gray-900 dark:text-white">
              Junior Software Engineer at humancloud
            </strong>{" "}
            in Pune. I build full-stack web applications, with a strong focus on
            backend systems, clean code and scalable architecture.
          </p>
          <p>
            I completed my MCA at MES' IMCC, Pune, and gained hands-on
            experience through internships at Secbyte Technologies, working on
            MySQL, REST APIs and payment gateway integration, and then at
            humancloud, where I now work full-time.
          </p>
          <p>
            Outside work I build systems end to end, from a Kafka-driven
            microservices task manager deployed with Kubernetes and ArgoCD to
            full-stack apps with Razorpay payments and OAuth login. I'm
            IBM-certified in Data Science and exploring AI integration in web
            applications.
          </p>
        </Reveal>

        <div className="space-y-4">
          {focusAreas.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 0.06} className="card flex gap-4 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-400/10 dark:text-violet-300">
                <Icon size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-1 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
