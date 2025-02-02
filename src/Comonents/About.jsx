import React from 'react'
import './About.css'
import { Button, Tab, Tabs } from 'react-bootstrap'
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact } from "react-icons/fa";
import { SiSpringboot, SiHibernate, SiMongodb, SiMysql } from "react-icons/si";
import Education from './Education';
import { motion } from "framer-motion";
import SkillCard from './SkillCard';

const About = () => {
  return (


    <div id="about" className='about p-4 '>
        <h2 className='text-center font-serif mt-3 font-bold text-gray-800'> About Me</h2>


     
        <div className="about-txt mt-3 font-serif ">

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
      
        >
        <p className="about-text">
  My name is Ganesh Pansare. I graduated from Bharati Vidyapeeth. Now, I am looking for my first full-time job. The world is changing rapidly, and I don’t have enough professional experience to be certain about such things. However, I know that I can provide a fresh take and an extraordinary approach to every project. I am always open to challenges and constructive feedback. I am open-minded and learn new things quickly. I want to become a team player and dedicate all my skills and talents to develop high-quality and unique products.
</p>
</motion.div>
   <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
      
        >
            <div className="skill-edu bg-light mt-5 rounded shadow p-4">
            <Tabs defaultActiveKey="Skills" id="styled-tab-example" className="mb-4">
      {/* 🔹 Skills Section */}
      <Tab eventKey="Skills" title="Skills">
        <div className="skills-container">
          {/* 🔹 Frontend Skills */}
          <h5 className="text-success text-center">Frontend</h5>
          <div className="skills-grid d-flex flex-wrap justify-content-center gap-3">
            <SkillCard icon={<FaHtml5 className="text-danger" size={40} />} name="HTML" />
            <SkillCard icon={<FaCss3Alt className="text-primary" size={40} />} name="CSS" />
            <SkillCard icon={<FaJs className="text-warning" size={40} />} name="JavaScript" />
            <SkillCard icon={<FaReact className="text-info" size={40} />} name="React" />
          </div>

          {/* 🔹 Backend Skills */}
          <h5 className="text-success text-center mt-4">Backend</h5>
          <div className="skills-grid d-flex flex-wrap justify-content-center gap-3">
            <SkillCard icon={<FaJava className="text-danger" size={40} />} name="Java" />
            <SkillCard icon={<SiSpringboot className="text-success" size={40} />} name="Spring Boot" />
            <SkillCard icon={<SiHibernate className="text-secondary" size={40} />} name="Hibernate" />
          </div>

          {/* 🔹 Database Skills */}
          <h5 className="text-success text-center mt-4">Database</h5>
          <div className="skills-grid d-flex flex-wrap justify-content-center gap-3">
            <SkillCard icon={<SiMongodb className="text-success" size={40} />} name="MongoDB" />
            <SkillCard icon={<SiMysql className="text-primary" size={40} />} name="MySQL" />
          </div>
        </div>
      </Tab>

      {/* 🔹 Education Section */}
      <Tab eventKey="Education" title="Education">
        <div className="profile-content">
          <h5 className="text-primary">Education</h5>
          <Education />
        </div>
      </Tab>
    </Tabs>
    </div>
  </motion.div>
        </div>


        
       </div>
  )
}

export default About