import "./style/general.css";
import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import Articles from "./components/articles/Articles";
import Projects from "./components/projects/Projects";
import Partners from "./components/partners/Partners";
import Cta from "./components/callToAction/Cta";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Newsletter from "./components/Newsletter";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    localStorage.getItem("theme") === "true" ? setDarkMode(!darkMode) : setDarkMode(darkMode);
    // eslint-disable-next-line
  }, [])

  // eslint-disable-next-line
  const toggleDarkMode = () => (setDarkMode(!darkMode), localStorage.setItem("theme", darkMode));
  
  return (
    <div className={`App ${darkMode ? "" : "body--light"}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <main>
        <Hero darkMode={darkMode}/>
        <Articles darkMode={darkMode}/>
        <Projects darkMode={darkMode}/>
        <Partners darkMode={darkMode}/>
        <Cta darkMode={darkMode}/>
      </main>
      <Footer darkMode={darkMode} onClick={() => setOpenModal(true)}/>
      {openModal === true ? <Newsletter darkMode={darkMode} onClick={() => setOpenModal(false)}/> : ""}
    </div>
  )
}

export default App;
