import "./style/general.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Articles from "./components/Articles";
import Projects from "./components/Projects";
import Partners from "./components/Partners";
import Cta from "./components/Cta";

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Articles/>
      <Projects/>
      <Partners/>
      <Cta/>
    </div>
  )
}

export default App;
