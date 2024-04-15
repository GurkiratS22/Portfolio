import "./about.scss";
import { useRef } from "react";
import {motion, useInView} from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 1.1,
        },
    },
}

const About = () => {
    
    const ref = useRef()

    const isInView = useInView(ref, {margin:"-100px"})

    return (
        <motion.div className="about" variants={variants} initial="initial" ref={ref} animate={ window.innerWidth<= 738 ? "animate" : isInView && "animate"}>
            <div className="container">
                <div className="about-content">
                    <div className="text-background"></div>
                    <h2>About Me</h2>
                    <p>Hey there! I'm Gurkirat, a dedicated web developer on a mission to craft immersive digital experiences. With a keen eye for detail and a passion for clean, efficient code, I specialize in full-stack development using the MERN stack.</p>
                    <p>Equipped with a background in Computer Information Systems and hands-on experience in programming, I thrive on bringing designs to life with JavaScript, HTML, and CSS. From intuitive user interfaces to seamless interactions, I prioritize both functionality and aesthetics to deliver top-notch results.</p>
                    <p>I'm a firm believer in continuous learning and collaboration. Whether it's diving into new technologies or collaborating with teams to tackle challenges, I'm always up for the next adventure. Beyond coding, you can find me exploring industry trends, brainstorming project ideas, or enjoying downtime with loved ones.</p>
                    <p>Thanks for dropping by! Let's connect and build something extraordinary together.</p>
                </div>
            </div>
            <div className="imageContainer">
                <img src="./pic.jpg" alt=""/>
            </div>
        </motion.div>
    )
}

export default About