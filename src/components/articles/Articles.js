import dec2 from "../../images/dec2.jpg";
import dec4 from "../../images/dec4.png";
import dec5 from "../../images/dec5.jpg";
import "animate.css";
import WOW from "wow.js";
import SingleArticle from "../shared/singleArticle/SingleArticle";


const Articles = ({ darkMode }) => {
    new WOW().init();

    const data = {
        "headingText": "We enrich human lives through the thoughtful application of design and technology",
        "articles": [
            {
                "reverseFlex": false,
                "img": dec2,
                "imgAlt": "Instrument's next CEO Kara Place",
                "pText": "It is with great excitement that we announce Kara Place as Instrument’s next CEO.",
                "href": "https://www.instrument.com/articles/kara-place-ceo",
                "btnText": "Read More"
            },
            {
                "reverseFlex": true,
                "img": dec4,
                "imgAlt": "",
                "pText": "In the summer of 2020, we reported our representation data and committed to doing so annually. One year later, we are pleased to share an update on our goals, our progress, and the work that still needs to be done.",
                "href": "https://www.instrument.com/edi",
                "btnText": "Learn More"
            },
            {
                "reverseFlex": false,
                "img": dec5,
                "imgAlt": "",
                "pText": "As a full-service partner to the world’s most ambitious companies, we create transformational change through best-in-class digital products and communications.",
                "href": "https://www.instrument.com/what-we-do",
                "btnText": "What we do"

            }
        ]
    }

    return (
        <section className={`articles--section ${darkMode ? "" : "articles--light"}`}>
            <h2 className="wow animate__animated animate__fadeIn articles--heading">{data.headingText}</h2>
            {data.articles.map((item, i) => (
                <SingleArticle
                    key={i}
                    reverse={item.reverseFlex}
                    src={item.img}
                    alt={item.imgAlt}
                    pText={item.pText}
                    href={item.href}
                    bText={item.btnText}
                    darkMode={darkMode}
                />
            ))}
        </section>
    )
}

export default Articles;