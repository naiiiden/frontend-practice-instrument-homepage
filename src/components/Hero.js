import Build from "../images/build.svg";
import Grow from "../images/grow.svg";
import Serve from "../images/serve.svg";

const Hero = () => {
    return (
        <main>
            <h1>
                <span>
                    Build.
                    <img src={Build} alt=""/>
                </span>
                <span>
                    Grow.
                    <img src={Grow} alt=""/>
                </span>
                <span>
                    Serve.
                    <img src={Serve} alt=""/>
                </span>
            </h1>
        </main>
    )
}

export default Hero;