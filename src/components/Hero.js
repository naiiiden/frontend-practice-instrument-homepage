import Build from "../images/build.svg";
import Grow from "../images/grow.svg";
import Serve from "../images/serve.svg";
import "animate.css";
import WOW from "wow.js";
import BtnLink from "./Button";
import Paragraph from "./Paragraph";


const Hero = ({ darkMode }) => {
    new WOW().init();

    return (
        <div className={`main ${darkMode ? "" : "hero--light"} wow animate__animated animate__fadeIn`}>
            <h1>
                <span>
                    Build.
                    <img src={Build} alt="" className="build--svg"/>
                </span>
                <span>
                    Grow.
                    <img src={Grow} alt="" className="grow--svg"/>
                </span>
                <span>
                    Serve.
                    <img src={Serve} alt="" className="serve--svg"/>
                </span>
            </h1>
            <Paragraph text="We are investing $3 million over the next three years in our Build|Grow|Serve program, created to support and empower Black and underrepresented communities."/>
            <BtnLink href="#" text="Learn more" className={`${darkMode ? "" : "btn--light"}`}/>
            <div className="video--player wow animate__animated animate__fadeIn" data-wow-offset="400">
                <iframe src="https://player.vimeo.com/video/428281636?h=be0963aaa9?autoplay=1&muted=1" frameBorder={0} allow="autoplay; fullscreen;" title="Instrument's 2021 Showcase Reel"></iframe>
            </div>
        </div>
    )
}

export default Hero;