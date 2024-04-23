import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import {useRef} from "react";

const items = [ 
    {
        id: 1,
        title: "HungerEats",
        img:"./HungerEats.png",
        description: "My project, named 'HungerEats,' is a dynamic web platform designed to revolutionize the food delivery experience. Powered by the MERN (MongoDB, Express.js, React.js, Node.js) stack, HungerEats offers a seamless and intuitive interface for users to discover, order, and enjoy their favorite meals from a variety of local restaurants. With real-time updates, secure payment processing, and features like search, filters, and pagination, HungerEats ensures convenience and satisfaction for both customers and restaurant partners. Whether craving a quick snack or planning a gourmet feast, HungerEats promises to deliver delicious moments with every click.",
        link: "https://hungereats.onrender.com/",
        link2: "https://github.com/GurkiratS22/hungereats",
    },
    {
        id: 2,
        title: "Personal Blog",
        img:"./Blog.png",
        description: "Gurkirat's Blog is a dynamic platform, powered by the MERN stack, Firebase, and Redux, offering users a seamless blogging experience. With intuitive features like search, filters, and pagination, along with dark and light mode options, users can effortlessly explore captivating content. Plus, an admin dashboard allows for easy monitoring and management of posts, users, and comments, ensuring smooth operation and effective content management.",
        link: "https://blog-9cpw.onrender.com/",
        link2: "https://github.com/GurkiratS22/blog",
    },
    {
        id: 3,
        title: "Voom",
        img:"./Voom.png",
        description: "Next.js and TypeScript power my video conferencing platform Voom, providing seamless meetings with real-time controls, scheduling, and recording. Authenticated with Clerk for security, my responsive design ensures a smooth experience across devices.",
        link: "https://voom-three.vercel.app/",
        link2: "https://github.com/GurkiratS22/voom",
    },
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
                    <div className="button-container">
                        <a href={item.link} className="buttons"><motion.button whileHover={{scale:1.1}} whileTap={{scale:0.95}}>See Demo</motion.button></a>
                        <a href={item.link2} className="buttons"><motion.button whileHover={{scale:1.1}} whileTap={{scale:0.95}}>See Repo</motion.button></a>
                    </div>
                </motion.div>
                </div>
            </div>
            <hr/>
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