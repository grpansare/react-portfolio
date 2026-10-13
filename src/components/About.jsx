import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Server, Layout, Container } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend & Microservices",
      description:
        "REST APIs and microservices with Spring Boot, Spring Cloud, Kafka and secure auth (JWT, OAuth2, Keycloak).",
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Frontend",
      description:
        "Responsive, maintainable interfaces with React, Angular, Redux and Tailwind CSS.",
    },
    {
      icon: <Container className="w-8 h-8" />,
      title: "DevOps",
      description:
        "Containerised delivery with Docker, Kubernetes and GitOps using ArgoCD.",
    },
  ];

  return (
    <section
      id="about"
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
            About Me
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            I'm Ganesh Pansare, a Junior Software Engineer at humancloud in
            Pune. I build full-stack web applications, with a strong focus on
            backend systems, clean code and scalable architecture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              My Journey
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
              I completed my MCA at MES' IMCC, Pune, and gained hands-on
              experience through internships at Secbyte Technologies, working on
              MySQL, REST APIs and payment gateway integration, and then at
              humancloud, where I now work full-time.
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
              Outside work I build systems end to end, from a Kafka-driven
              microservices task manager deployed with Kubernetes and ArgoCD to
              full-stack apps with Razorpay payments and OAuth login.
            </p>
            <a href="#contact" className="btn-primary">
              Let's Work Together
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-gray-900 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg"
          >
            <img
              src="/profile.jpg"
              alt="Ganesh Pansare"
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg mb-4 sm:mb-6"
            />
            <div className="text-center">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Always Learning
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                IBM-certified in Data Science; exploring AI integration in web
                applications
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              className="text-center p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg hover:shadow-violet-500/20 dark:hover:shadow-violet-500/10 transition-shadow duration-300"
            >
              <div className="text-violet-600 dark:text-violet-400 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
