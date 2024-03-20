import "./app.scss"
import Navbar from "./components/navbar/Navbar"; 

const App = () => {
  return <div>
    <section id="Homepage">
       <Navbar/>     
    </section>
    <section>Parallax</section>
    <section id="Services">Services</section>
    <section id="Portfolio">Portfolio1</section>
    <section>Portfolio2</section>
    <section id="Contact">Contact</section>
    <section id="About">About</section>
  </div>;
};

export default App;
