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
      title: "SacredStore - Religious E-commerce Platform",
      description: "Comprehensive e-commerce solution for religious products with secure checkout, Razorpay integration, admin dashboard, and complete product management system.",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=400&fit=crop",
      technologies: ["Spring Boot", "React.js", "MySQL", "Razorpay"],
      liveUrl: "#",
      githubUrl: "https://github.com/grpansare/SacredStore"
    },
    {
      title: "Smart Car Parking System",
      description: "Full-stack parking management system with real-time slot booking, interactive maps, JWT & Google OAuth authentication, and Razorpay payment integration.",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&h=400&fit=crop",
      technologies: ["React.js", "Spring Boot", "MySQL", "Leaflet Maps", "Razorpay"],
      liveUrl: "#",
      githubUrl: "https://github.com/grpansare/smart_car_parking"
    },
    {
      title: "Big 5 Personality Test",
      description: "Interactive web-based personality assessment tool using the Five-Factor Model. Features score calculation, graphical results, and responsive design with data storage.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
      technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
      liveUrl: "https://big-5-personality-test.netlify.app/",
      githubUrl: "https://github.com/grpansare/big5personalitytest"
    }
  ]

  return (
    <section id="projects" className="section-padding bg-black">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Here are some of my recent projects that showcase my skills and passion for creating 
            meaningful digital experiences.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-violet-500/20 transition-shadow duration-300"
            >
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors text-gray-200"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors text-gray-200"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-violet-900/30 text-violet-300 text-xs sm:text-sm rounded-full"
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