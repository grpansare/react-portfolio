import React, { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";

// Thin gradient bar at the very top showing how far down the page you are.
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500"
      aria-hidden="true"
    />
  );
};

// Feeds the pointer position into every .card as --x/--y for the CSS spotlight.
export const useCardSpotlight = () =>
  useEffect(() => {
    const onMove = (e) => {
      const card = e.target.closest?.(".card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

// Tilts towards the mouse in 3D. Mouse only, so touch scrolling is unaffected.
export const TiltCard = ({ children, className = "", as = "div", max = 6 }) => {
  const reduce = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const Component = motion[as];

  const handleMove = (e) => {
    if (reduce || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * max * 2);
    rotateX.set(-py * max * 2);
  };
  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <Component
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </Component>
  );
};

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
