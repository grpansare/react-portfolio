import React from "react";
import { GraduationCap, Award } from "lucide-react";
import { education, certifications } from "../data/profile";
import { Reveal, SectionHeader } from "./ui";

const Education = () => (
  <section id="education" className="section-padding section-alt">
    <div className="container-max">
      <SectionHeader index="05" title="Education" />

      <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
        <div className="space-y-6">
        {education.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 0.06} className="card p-6 sm:p-7">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-400/10 dark:text-violet-300">
              <GraduationCap size={22} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {edu.degree}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{edu.school}</p>
            <p className="mt-3 font-mono text-sm text-violet-700 dark:text-violet-300">
              {edu.period}
              {edu.grade && <span className="text-gray-500 dark:text-gray-400"> · {edu.grade}</span>}
            </p>
          </Reveal>
        ))}
        </div>

        <Reveal delay={0.06} className="card p-6 sm:p-7">
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            Certifications
          </h3>
          <ul className="divide-y divide-gray-200 dark:divide-white/10">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex gap-3 py-3.5">
                <Award
                  size={20}
                  className="mt-0.5 shrink-0 text-violet-600 dark:text-violet-400"
                />
                <div className="flex-1 sm:flex sm:items-baseline sm:justify-between sm:gap-4">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {cert.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {cert.issuer}
                      {cert.credentialId && (
                        <span className="font-mono"> · ID {cert.credentialId}</span>
                      )}
                    </p>
                  </div>
                  <span className="font-mono text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Education;
