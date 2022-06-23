import Build from "../images/build.svg";
import Grow from "../images/grow.svg";
import Serve from "../images/serve.svg";
import Arrow from "../images/arrow.svg";
import "animate.css";
import WOW from "wow.js";


const Hero = () => {
    new WOW().init();

    return (
        <main>
            <h1 className="wow animate__animated animate__fadeIn">
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
            <p className="wow animate__animated animate__fadeIn">We are investing $3 million over the next three years in our Build|Grow|Serve program, created to support and empower Black and underrepresented communities.</p>
            <a className="wow animate__animated animate__fadeIn" href="#">Learn more <img src={Arrow} alt=""/></a>
            <div className="video--player wow animate__animated animate__fadeIn" data-wow-offset="400">
                <iframe src="https://player.vimeo.com/video/428281636?h=be0963aaa9?autoplay=1&muted=1" frameBorder={0} allow="autoplay; fullscreen;"></iframe>
            </div>
        </main>
    )
}

export default Hero;