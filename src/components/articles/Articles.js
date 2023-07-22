import dec2 from "../../images/dec2.jpg";
import dec4 from "../../images/dec4.png";
import dec5 from "../../images/dec5.jpg";
import "animate.css";
import WOW from "wow.js";
import SingleArticle from "../shared/singleArticle/SingleArticle";


const Articles = ({ darkMode }) => {
    new WOW().init();

    return (
        <section className={`articles--section ${darkMode ? "" : "articles--light"}`}>
            <h2 className="wow animate__animated animate__fadeIn articles--heading">We enrich human lives through the thoughtful application of design and technology</h2>
            <SingleArticle
                src={dec2}
                alt="Instrument's next CEO Kara Place"
                pText="It is with great excitement that we announce Kara Place as Instrument’s next CEO."
                href="https://www.instrument.com/articles/kara-place-ceo"
                bText="Read More"
                darkMode={darkMode}
            />
            <SingleArticle
                reverse={true}
                src={dec4}
                pText="In the summer of 2020, we reported our representation data and committed to doing so annually. One year later, we are pleased to share an update on our goals, our progress, and the work that still needs to be done."
                href="https://www.instrument.com/edi"
                bText="Learn More"
                darkMode={darkMode}
            />
            <SingleArticle
                src={dec5}
                pText="As a full-service partner to the world’s most ambitious companies, we create transformational change through best-in-class digital products and communications."
                href="https://www.instrument.com/what-we-do"
                bText="What we do"
                darkMode={darkMode}
            />
        </section>
    )
}

export default Articles;