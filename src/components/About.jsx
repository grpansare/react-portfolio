import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Zap } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Modern Design",
      description: "Creating beautiful, intuitive interfaces with attention to user experience."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and cross-platform compatibility."
    }
  ]

  return (
    <section id="about" className="section-padding bg-black">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            About Me
          </h2>
         <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
  I'm Ganesh Pansare, currently pursuing my MCA (Master of Computer Applications) in my 2nd year. 
  I'm passionate about software development and constantly learning new technologies to build innovative solutions.
</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
           <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
  My Academic Journey
</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
  Currently in my 2nd year of MCA, I've been diving deep into programming, software engineering, 
  and modern web technologies. My academic journey has equipped me with strong fundamentals in 
  computer science and practical experience in various programming languages.
</p>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
  I'm actively working on projects to apply my theoretical knowledge and build a strong portfolio. 
  My goal is to become a skilled full-stack developer and contribute to meaningful software projects.
</p>
            <a href="#contact" className="btn-primary">
              Let's Work Together
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-900 p-4 sm:p-6 md:p-8 rounded-2xl"
          >
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg mb-4 sm:mb-6"
            />
            <div className="text-center">
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">
                Always Learning
              </h4>
              <p className="text-gray-300">
                Currently exploring AI/ML integration in web applications
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
              className="text-center p-4 sm:p-6 bg-gray-900 rounded-xl hover:shadow-lg hover:shadow-violet-500/10 transition-shadow duration-300"
            >
              <div className="text-violet-400 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About