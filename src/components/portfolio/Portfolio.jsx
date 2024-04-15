import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import {useRef} from "react";

const items = [ 
    {
        id: 1,
        title: "HungerEats",
        img:"./HungerEats.png",
        description: "My project, named 'HungerEats', is a dynamic web platform designed to revolutionize the food delivery experience. Powered by the MERN (MongoDB, Express.js, React.js, Node.js) stack, HungerEats offers a seamless and intuitive interface for users to discover, order, and enjoy their favorite meals from a variety of local restaurants. With real-time updates, and secure payment processing, HungerEats ensures convenience and satisfaction for both customers and restaurant partners. Whether craving a quick snack or planning a gourmet feast, HungerEats promises to deliver delicious moments with every click.",
        link: "https://hungereats.onrender.com/",
    },
    // {
    //     id: 2,
    //     title: "Next.js Blog",
    //     img:"https://images.pexels.com/photos/19288164/pexels-photo-19288164/free-photo-of-direction.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    //     description: "Something...",
    // },
    // {
    //     id: 3,
    //     title: "Vanilla JS App",
    //     img:"https://images.pexels.com/photos/6534399/pexels-photo-6534399.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    //     description: "Something...",
    // },
    // {
    //     id: 4,
    //     title: "Music App",
    //     img:"https://images.pexels.com/photos/19518828/pexels-photo-19518828/free-photo-of-close-up-of-flying-seagull.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    //     description: "Something...",
    // },
];

const Single = ({item}) => {
    
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y= useTransform(scrollYProgress,[0,1], [-200, 200]);
    
    return (
        <section>
            <div className="container">
                <div className="wrapper">  
                <div className="imageContainer"  ref={ref}>
                <img src={item.img} alt="" />
                </div>  
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <a href={item.link}><motion.button whileHover={{scale:1.1}} whileTap={{scale:0.95}}>See Demo</motion.button></a>
                </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"] });
    
    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping: 30,
    })
  
    return (
    <div className="portfolio">
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
            <Single item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Portfolio