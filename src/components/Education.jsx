import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award } from "lucide-react";
import { education, certifications } from "../data/profile";

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="education"
      className="section-padding bg-gray-50 dark:bg-black transition-colors duration-300"
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
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 space-y-4"
          >
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg h-full"
              >
                <div className="text-violet-600 dark:text-violet-400 mb-4">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-2">
                  {edu.school}
                </p>
                <p className="text-sm text-violet-600 dark:text-violet-400 font-medium">
                  {edu.period}
                </p>
              </div>
            ))}
          </motion.div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex gap-3 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md"
              >
                <Award className="w-6 h-6 shrink-0 text-violet-600 dark:text-violet-400" />
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                    {cert.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    {cert.issuer} · {cert.date}
                  </p>
                  {cert.credentialId && (
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Credential ID: {cert.credentialId}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
