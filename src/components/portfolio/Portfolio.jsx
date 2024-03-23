import "./portfolio.scss";
import {motion, useScroll} from "framer-motion";
import {useRef} from "react";

const items = [ 
    {
        id: 1,
        title: "React Commerce",
        img:"https://images.pexels.com/photos/17822918/pexels-photo-17822918/free-photo-of-turtle-swimming-in-the-sea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        description: "Something...",
    },
    {
        id: 2,
        title: "Next.js Blog",
        img:"https://images.pexels.com/photos/19288164/pexels-photo-19288164/free-photo-of-direction.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        description: "Something...",
    },
    {
        id: 3,
        title: "Vanilla JS App",
        img:"https://images.pexels.com/photos/6534399/pexels-photo-6534399.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        description: "Something...",
    },
    {
        id: 4,
        title: "Music App",
        img:"https://images.pexels.com/photos/19518828/pexels-photo-19518828/free-photo-of-close-up-of-flying-seagull.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        description: "Something...",
    },
];

const Single = ({item}) => {
    return (
        <section>
            {item.title}
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"] });
  return (
    <div className='portfolio'>
        <div className="progress">
            <h1>Featured Works</h1>
            <div className="progressBar"></div>
        </div>
        {items.map((item) => (
            <Single item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Portfolio