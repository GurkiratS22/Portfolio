import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span
             initial={{opacity: 0, scale: 0.5}}
             animate={{ opacity: 1, scale: 1}}
             transition={{ duration: 0.5 }}
             >Gurkirat Singh | Portfolio</motion.span>
            <div className="social">
                <motion.a whileHover={{scale:1.1}} whileTap={{scale:0.95}} href="https://www.linkedin.com/in/gurkiratsingh22/"><img src="./linkedin.png" alt="" /></motion.a>
                <motion.a whileHover={{scale:1.1}} whileTap={{scale:0.95}} href="https://github.com/GurkiratS22"><img src="./github.png" alt="" /></motion.a>
            </div>
        </div>
    </div>
  )
}

export default Navbar