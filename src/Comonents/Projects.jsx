import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';

const projectData = [
    {
      "title": "AtoZStore - E-commerce Website",
      "description": "A full-stack e-commerce website built with Angular, spring boot, and MySQL. Features include user authentication, product listings, cart management, and payment integration.",
      "link": "https://github.com/grpansare/atoz_store",
      "img": "atozstore.png"
    },
    {
      "title": "Big Five Personality Test",
      "description": "A web-based personality assessment tool using React and Node.js, allowing users to analyze their traits based on the Big Five psychological model.",
      "link": "https://github.com/grpansare/big5personalitytest",
      "img": "big5.png"
    },
    {
      "title": "School Management System",
      "description": "A Spring Boot-based system for managing students, teachers, and courses. Includes role-based authentication, student records management, and attendance tracking.",
      "link": "https://github.com/grpansare/SchoolProject",
      "img": "school.png"
    }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay each child animation
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const Projects = () => {
  return (
    <motion.div 
      className='projects-container'
      variants={containerVariants}
      initial="hidden" // Initial state for grid
      whileInView="visible" // Trigger animation when the grid is in view
      viewport={{  amount: 0.3 }} 
    >
      <h3 className='projects-title'>Projects</h3>
      <motion.div className="projects-grid">
        {projectData.map((project, index) => (
          <motion.div 
            className="project-card" 
            key={index}
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="image">
              <img src={project.img} className='rounded img' alt={project.title} />
            </div>
            <h4>{project.title}</h4>
            <p className='text-sm'>{project.description}</p>
            <a href={project.link} className="project-link">View Project</a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Projects;
