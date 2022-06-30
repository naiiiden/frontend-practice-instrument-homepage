import "animate.css";
import WOW from "wow.js";
import BtnLink from "./Button";

const Cta = ({ darkMode }) => {
    new WOW().init();

    return (
        <section className={`cta--section wow animate__animated animate__fadeIn ${darkMode ? "" : "cta--light"}`}>
            <h2 className="cta--heading">We’d love to be your partner</h2>
            <BtnLink href="https://www.instrument.com/contact" text="Get in touch"/>
        </section>
    )
}

export default Cta;