import "./hero.scss";
import React from "react";
import { motion } from "framer-motion";
import Tech from "../tech/Tech";

fetch('https://hungereats-backend.onrender.com/health')
  .then(response => {
    if (response.ok) {
      console.log('Render backend is awake!');
    } else {
      console.error('Failed to wake up Render backend:', response.status);
    }
  })
  .catch(error => {
    console.error('Error waking up Render backend:', error);
  });

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollbutton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
};

const sliderVariants = {
    initial: {
        x: 0
    },
    animate: {
        x: window.innerWidth <= 738 ? "-1920%" : (window.innerWidth >= 739 && window.innerWidth <= 1024 ? "-1070%" : "-325%"),
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const buttonContainerVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>GURKIRAT SINGH</motion.h2>
                    <motion.h1 variants={textVariants}>Web Developer</motion.h1>
                    <motion.div className="buttons" variants={buttonContainerVariants}>
                        <a href="#About">
                            <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.95}} variants={textVariants}>About Me</motion.button>
                        </a>
                        <a href="#Contact">
                            <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.95}} variants={textVariants}>Contact Me</motion.button>
                        </a>
                    </motion.div>
                    <a href="#Services">
                    <motion.img variants={textVariants} animate="scrollbutton" src="/scroll.png" alt="" /></a>
                </motion.div>
            </div>
            <div className="techContainer">
            <Tech/>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Front-End Developer
            </motion.div>
        </div>
    );
};

export default Hero;
