import Build from "../images/build.svg";
import Grow from "../images/grow.svg";
import Serve from "../images/serve.svg";
import Arrow from "../images/arrow.svg";

const Hero = () => {
    return (
        <main>
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
            <p>We are investing $3 million over the next three years in our Build|Grow|Serve program, created to support and empower Black and underrepresented communities.</p>
            <a href="#">Learn more <img src={Arrow} alt=""/></a>
            <div className="video--player">
                <iframe src="https://player.vimeo.com/video/428281636?h=be0963aaa9" frameBorder={0}/>
            </div>
        </main>
    )
}

export default Hero;