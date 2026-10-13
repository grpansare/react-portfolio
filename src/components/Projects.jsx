import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "TaskFlow - Distributed Task Management",
      description: "JIRA-style task manager built as 7+ Spring Boot microservices behind an API Gateway with Eureka discovery. Kanban boards, Keycloak IAM with RBAC and Google/GitHub social login, and Kafka-driven notifications. Deployed on Kubernetes via ArgoCD (GitOps). Team project.",
      image: "",
      technologies: ["Spring Boot", "Microservices", "Keycloak", "Kafka", "Docker", "Kubernetes", "ArgoCD"],
      liveUrl: "",
      githubUrl: ""
    },
    {
      title: "SacredStore - Religious E-commerce Platform",
      description: "Comprehensive e-commerce solution for religious products with secure checkout, Razorpay integration, admin dashboard, and complete product management system.",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=400&fit=crop",
      technologies: ["Spring Boot", "React.js", "MySQL", "Razorpay"],
      liveUrl: "https://sacredstore-2.onrender.com/",
      githubUrl: "https://github.com/grpansare/SacredStore"
    },
    {
      title: "Smart Car Parking System",
      description: "Full-stack parking platform with real-time slot booking, map-based search, JWT & Google OAuth authentication, Razorpay payments, and role-based dashboards for users, parking owners and admins.",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&h=400&fit=crop",
      technologies: ["React.js", "Spring Boot", "MySQL", "Leaflet Maps", "Razorpay"],
      liveUrl: "",
      githubUrl: "https://github.com/grpansare/smart_car_parking"
    },
    {
      title: "Big 5 Personality Test",
      description: "Personality assessment app based on the Five-Factor Model, with graphical results, secure profiles, JWT authentication and email OTP verification via Nodemailer.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
      technologies: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
      liveUrl: "https://big-5-personality-test.netlify.app/",
      githubUrl: "https://github.com/grpansare/big5personalitytest"
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Here are some of my recent projects that showcase my skills and passion for creating 
            meaningful digital experiences.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-violet-500/20 transition-shadow duration-300"
            >
              <div className="relative group">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-violet-600 to-indigo-800 px-6 text-center">
                    <span className="text-2xl font-bold text-white">
                      {project.title.split(" - ")[0]}
                    </span>
                  </div>
                )}
                {(project.liveUrl || project.githubUrl) && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="p-2 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-gray-200"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} source code on GitHub`}
                        className="p-2 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-gray-200"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                )}
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs sm:text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects