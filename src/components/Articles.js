import arrow from "../images/arrow.svg";
import dec2 from "../images/dec2.jpg";
import dec4 from "../images/dec4.png";
import dec5 from "../images/dec5.jpg";

const Articles = () => {
    return (
        <section className="articles--section">
            <h2 className="articles--heading">We enrich human lives through the thoughtful application of design and technology</h2>
            <article className="article--container">
                <img src={dec2} alt="Instrument's next CEO Kara Place" className="dec--img"/>
                <div className="article--text--container">
                    <p>It is with great excitement that we announce Kara Place as Instrument’s next CEO.</p>
                    <a href="https://www.instrument.com/articles/kara-place-ceo">Read More <img src={arrow} alt=""/></a>
                </div>
            </article>
            <article className="article--container reverse">
                <img src={dec4} alt="" className="dec--img"/>
                <div className="article--text--container">
                    <p>In the summer of 2020, we reported our representation data and committed to doing so annually. One year later, we are pleased to share an update on our goals, our progress, and the work that still needs to be done.</p>
                    <a href="https://www.instrument.com/edi">Learn More <img src={arrow} alt=""/></a>
                </div>
            </article>
            <article className="article--container">
                <img src={dec5} alt="" className="dec--img"/>
                <div className="article--text--container">
                    <p>As a full-service partner to the world’s most ambitious companies, we create transformational change through best-in-class digital products and communications.</p>
                    <a href="https://www.instrument.com/what-we-do">What we do <img src={arrow} alt=""/></a>
                </div>
            </article>
        </section>
    )
}

export default Articles;