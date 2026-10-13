import React from "react";
import { motion } from "framer-motion";

// Fades children in once they enter the viewport. Short and early so sections
// never sit blank while scrolling; disabled by <MotionConfig reducedMotion="user">.
export const Reveal = ({ children, delay = 0, className = "", as = "div" }) => {
  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </Component>
  );
};

export const SectionHeader = ({ index, title, subtitle }) => (
  <Reveal className="mb-12 sm:mb-14">
    <p className="font-mono text-sm text-violet-600 dark:text-violet-400 mb-3">
      {index} <span className="text-gray-400 dark:text-gray-500">·</span>{" "}
      {title.toLowerCase()}
    </p>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-400">
        {subtitle}
      </p>
    )}
  </Reveal>
);
