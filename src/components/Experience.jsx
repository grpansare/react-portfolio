import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase } from "lucide-react";
import { experience } from "../data/profile";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="experience"
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
            Experience
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Where I've been building software professionally.
          </p>
        </motion.div>

        <ol className="relative max-w-3xl mx-auto border-l-2 border-violet-200 dark:border-violet-900">
          {experience.map((job, index) => (
            <motion.li
              key={`${job.company}-${job.role}`}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="mb-10 ml-6 sm:ml-8 last:mb-0"
            >
              <span className="absolute -left-[13px] flex items-center justify-center w-6 h-6 rounded-full bg-violet-600 dark:bg-violet-500 text-white ring-4 ring-white dark:ring-black">
                <Briefcase size={12} />
              </span>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 rounded-xl shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    {job.role}
                  </h3>
                  <span className="text-sm text-violet-600 dark:text-violet-400 font-medium whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                  {job.company}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {job.type} · {job.location}
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
