import arrow from "../images/arrow.svg";

const Cta = () => {
    return (
        <section className="cta--section">
            <h2 className="cta--heading">We’d love to be your partner</h2>
            <a href="https://www.instrument.com/contact">Get in touch <img src={arrow} alt=""/></a>
        </section>
    )
}

export default Cta;