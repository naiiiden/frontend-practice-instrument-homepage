import dec2 from "../images/dec2.jpg";
import dec4 from "../images/dec4.png";
import dec5 from "../images/dec5.jpg";
import "animate.css";
import WOW from "wow.js";
import BtnLink from "./Button";
import Paragraph from "./Paragraph";


const Articles = () => {
    new WOW().init();

    return (
        <section className="articles--section">
            <h2 className="wow animate__animated animate__fadeIn articles--heading">We enrich human lives through the thoughtful application of design and technology</h2>
            <article className="article--container">
                <img src={dec2} alt="Instrument's next CEO Kara Place" className="dec--img wow animate__animated animate__fadeIn"/>
                <div className="article--text--container wow animate__animated animate__fadeIn" data-wow-delay=".35s">
                    <Paragraph text="It is with great excitement that we announce Kara Place as Instrument’s next CEO."/>
                    <BtnLink href="https://www.instrument.com/articles/kara-place-ceo" text="Read More"/>
                </div>
            </article>
            <article className="article--container reverse">
                <img src={dec4} alt="" className="dec--img wow animate__animated animate__fadeIn"/>
                <div className="article--text--container wow animate__animated animate__fadeIn" data-wow-delay=".35s">
                    <Paragraph text="In the summer of 2020, we reported our representation data and committed to doing so annually. One year later, we are pleased to share an update on our goals, our progress, and the work that still needs to be done."/>
                    <BtnLink href="https://www.instrument.com/edi" text="Learn More"/>
                </div>
            </article>
            <article className="article--container">
                <img src={dec5} alt="" className="dec--img wow animate__animated animate__fadeIn"/>
                <div className="article--text--container wow animate__animated animate__fadeIn" data-wow-delay=".35s">
                    <Paragraph text="As a full-service partner to the world’s most ambitious companies, we create transformational change through best-in-class digital products and communications."/>
                    <BtnLink href="https://www.instrument.com/what-we-do" text="What we do"/>
                </div>
            </article>
        </section>
    )
}

export default Articles;