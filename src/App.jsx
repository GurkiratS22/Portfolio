import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero"; 
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import About from "./components/about/About";
import Tech from "./components/tech/Tech";

const App = () => {
  return <div>
    <Cursor/>
    <section id="Homepage">
       <Navbar/>
       <Hero/>    
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section id="About"><About/></section>
    {/* <section><Services/></section> */}
    {/* <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/> */}
    <section id="Contact"><Contact/></section>
  </div>;
};

export default App;
