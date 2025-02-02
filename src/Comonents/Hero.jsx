import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import { FaHandPeace, FaRegHandPeace } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";

const Hero = () => {
  return (
    <section   id="home" className="hero py-10 bg-slate-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{y:0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
      
          className="hero-text md:w-1/2 px-5"
        >
          <div className="header-text">
            <h3>Hello, It's Me</h3>
            <h1>
              <span>Ganesh Pansare</span>
            </h1>
            <div>
              <h3 >
                 and I'm a{" "}
                <ReactTypingEffect
                  text={["Front End Developer", "Back End Developer","Creative Problem Solver"]}
                  speed={100}
                  eraseSpeed={50}
                  eraseDelay={800}
                  typingDelay={50}
                  className="text-blue-800"
                />
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
      
        >
        <div className="hero-image md:w-1/2 px-4 w-96  md:mt-0 flex justify-center">
          <img
            src="/profile.jpg"
            alt="Illustration of Big Five Personality Traits"
            className="rounded-2xl shadow-lg"
          />
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;  