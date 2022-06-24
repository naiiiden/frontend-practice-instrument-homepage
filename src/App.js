import "./style/general.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Articles from "./components/Articles";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Articles/>
      <Projects/>
    </div>
  )
}

export default App;
