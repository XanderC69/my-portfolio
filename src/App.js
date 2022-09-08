import "./App.css";
import Navbar from "./components/navbar";

import Intro from "./components/intro";
import Education from "./components/education";
import Footer from "./components/footer";
import Work from "./components/work";
import Skill from "./components/skills"


function App() {
  return <div className="App">
    <Navbar/>
    <Intro/>
    <Skill/>
    <Education/>
    
    <Work/>
    <Footer/>
  </div>;
}

export default App;
