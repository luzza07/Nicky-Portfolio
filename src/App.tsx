import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project/Project";
import Skills from "./components/Skills";

function App() {
  return <>
  <NavBar/>
  <Home/>
  <About/>
  <Skills/>
  <Experience/>
  <Project/>
  <Footer/>

  </>;
}

export default App;
