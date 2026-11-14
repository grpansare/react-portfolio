import React from "react";
import { experience } from "../data/profile";
import { Reveal, SectionHeader } from "./ui";

const Experience = () => (
  <section id="experience" className="section-padding section-base">
    <div className="container-max">
      <SectionHeader
        index="02"
        title="Experience"
        subtitle="Where I've been building software professionally."
      />

      <div className="space-y-6">
        {experience.map((job, index) => (
          <Reveal
            key={job.company}
            delay={index * 0.05}
            className="card grid gap-4 p-6 sm:p-8 md:grid-cols-[200px_1fr] md:gap-8"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {job.company}
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {job.location}
              </p>
            </div>

            {/* Roles at the same company form a mini timeline */}
            <ol className="relative space-y-6 border-l border-gray-200 pl-6 dark:border-white/10">
              {job.roles.map((role) => (
                <li key={role.title} className="relative">
                  <span
                    className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-violet-600 ring-4 ring-white dark:bg-violet-400 dark:ring-ink-800"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {role.title}
                    </h4>
                    <span className="font-mono text-sm text-violet-700 dark:text-violet-300 whitespace-nowrap">
                      {role.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {role.type}
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300 marker:text-violet-500">
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
