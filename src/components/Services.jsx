import React from "react";
import { Globe, LayoutDashboard, CreditCard, Check, ArrowRight } from "lucide-react";
import { Reveal, SectionHeader, TiltCard } from "./ui";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description:
      "Fast, mobile-friendly websites for shops, clinics, coaching classes and startups.",
    points: [
      "React / Next.js, responsive on every screen",
      "Contact form, Google Maps, WhatsApp button",
      "SEO basics and link-preview setup",
      "Hosting and domain set up for you",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Web Apps & Dashboards",
    description:
      "Custom apps and admin panels that replace spreadsheets and manual work.",
    points: [
      "Login, user roles and admin panel",
      "REST APIs with Spring Boot or Node.js",
      "MySQL, PostgreSQL or MongoDB",
      "Reports, search and file uploads",
    ],
  },
  {
    icon: CreditCard,
    title: "Booking & Payments",
    description:
      "Online booking and ordering with secure payments, like my ParkEase and SacredStore projects.",
    points: [
      "Razorpay payment integration",
      "Slots, orders and email confirmations",
      "Customer and owner dashboards",
      "Secure auth with JWT / OAuth 2.0",
    ],
  },
];

const steps = [
  ["Discuss", "A quick call to understand what you need."],
  ["Plan & quote", "A clear scope, timeline and fixed price."],
  ["Build", "Regular demos so you see progress as it happens."],
  ["Launch & support", "Deployment, handover and help after launch."],
];

const Services = () => (
  <section id="services" className="section-padding section-base">
    <div className="container-max">
      <SectionHeader
        index="06"
        title="Services"
        subtitle="Available for freelance projects. Here's what I can build for you."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {services.map(({ icon: Icon, title, description, points }, i) => (
          <Reveal key={title} delay={i * 0.06}>
            <TiltCard max={5} className="card group flex h-full flex-col p-6 sm:p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600 ring-1 ring-violet-100 transition-colors group-hover:bg-violet-600 group-hover:text-white dark:bg-violet-400/10 dark:text-violet-300 dark:ring-violet-400/20">
                <Icon size={22} />
              </span>
              <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
              <ul className="mt-5 space-y-2.5">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-violet-600 dark:text-violet-400"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-12">
        <h3 className="mb-5 font-mono text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
          How I work
        </h3>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, text], i) => (
            <li key={title} className="card p-5">
              <span className="font-mono text-sm text-violet-600 dark:text-violet-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-1 font-semibold text-gray-900 dark:text-white">{title}</p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{text}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal
        delay={0.12}
        className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-ink-900 p-7 sm:flex-row sm:items-center sm:p-9 dark:bg-white/5 dark:ring-1 dark:ring-white/10"
      >
        <div>
          <p className="text-2xl font-bold text-white">Have a project in mind?</p>
          <p className="mt-2 text-gray-400">
            Tell me what you need and I&apos;ll reply with a plan and a quote, free.
          </p>
        </div>
        <a href="#contact" className="btn-primary shrink-0">
          Get a free quote
          <ArrowRight size={18} />
        </a>
      </Reveal>
    </div>
  </section>
);

export default Services;
