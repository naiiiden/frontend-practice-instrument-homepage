import "animate.css";
import WOW from "wow.js";
import BtnLink from "../shared/button/Button";

import data from "./data.json";

const Cta = ({ darkMode }) => {
    new WOW().init();

    return (
        <section className={`cta--section wow animate__animated animate__fadeIn ${darkMode ? "" : "cta--light"}`}>
            <h2 className="cta--heading">{data.headingText}</h2>
            <BtnLink href="https://www.instrument.com/contact" text={data.buttonText} className={`${darkMode ? "" : "btn--light"}`}/>
        </section>
    )
}

export default Cta;