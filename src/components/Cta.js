import arrow from "../images/arrow.svg";
import "animate.css";
import WOW from "wow.js";

const Cta = () => {
    return (
        <section className="cta--section wow animate__animated animate__fadeIn">
            <h2 className="cta--heading">We’d love to be your partner</h2>
            <a href="https://www.instrument.com/contact">Get in touch <img src={arrow} alt=""/></a>
        </section>
    )
}

export default Cta;