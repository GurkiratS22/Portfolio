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
                    <p>Welcome to my corner of the web! I'm Gurkirat, a passionate and dedicated web developer with a love for crafting seamless digital experiences. Armed with a diverse skill set and an insatiable curiosity for all things tech, I thrive on turning innovative ideas into tangible solutions.</p>                        <p>Driven by a blend of creativity and precision, I specialize in front-end development, where I leverage the latest tools and technologies to bring designs to life with pixel-perfect precision. Whether it's building intuitive user interfaces, optimizing website performance, or solving complex coding challenges, I approach each project with enthusiasm and a commitment to excellence.</p>
                    <p>With a background in Computer Information Systems and hands-on experience in programming, I've honed my abilities in languages like JavaScript, HTML, and CSS, alongside frameworks like React and Three.js. From concept to execution, I pride myself on delivering projects that not only meet but exceed expectations, prioritizing functionality, aesthetics, and user experience every step of the way.</p>
                    <p>Beyond coding, I'm a firm believer in continuous learning and growth. I'm constantly exploring new technologies, attending workshops, and seeking out opportunities to expand my skill set. I'm also a strong advocate for collaboration and open communication, believing that the best results emerge from teamwork and shared expertise.</p>
                    <p>When I'm not coding, you can find me immersing myself in the latest industry trends, experimenting with new project ideas, or enjoying quality time with family and friends. I'm excited about the endless possibilities that technology holds and am eager to contribute my talents to projects that push boundaries and make a positive impact.</p>
                    <p>Thank you for stopping by! I invite you to explore my portfolio and discover the passion and dedication I bring to every project. Let's connect and create something amazing together.</p>
                </div>
            </div>
            <div className="imageContainer">
                <img src="./pic.jpg" alt=""/>
            </div>
        </motion.div>
    )
}

export default About