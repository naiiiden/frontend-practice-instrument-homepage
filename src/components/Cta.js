import arrow from "../images/arrow.svg";
import "animate.css";
import WOW from "wow.js";
import BtnLink from "./Button";

const Cta = () => {
    new WOW().init();

    return (
        <section className="cta--section wow animate__animated animate__fadeIn">
            <h2 className="cta--heading">We’d love to be your partner</h2>
            <a href="https://www.instrument.com/contact">Get in touch <img src={arrow} alt=""/></a>
            <BtnLink className="BtnLink--component" href="https://www.instrument.com/contact" text="Get in touch"/>
        </section>
    )
}

export default Cta;