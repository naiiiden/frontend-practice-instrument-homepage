import "./style/general.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Articles from "./components/Articles";
import Projects from "./components/Projects";
import Partners from "./components/Partners";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

  return (
    <div className={`App ${darkMode ? "" : "body--light"}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Hero darkMode={darkMode}/>
      <Articles darkMode={darkMode}/>
      <Projects darkMode={darkMode}/>
      <Partners darkMode={darkMode}/>
      <Cta darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  )
}

export default App;
