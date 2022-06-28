import at from "../images/at.svg";
import arrow from "../images/arrow__footer.svg";
import close from "../images/newsletter_close.svg";

const Newsletter = ({ onClick }) => {
    return (
        <section className="newsletter--modal">
            <div className="heading--close_btn--container">
                <div className="at--heading--container">
                    <img src={at} alt=""/>
                    <h3>Join Our Newsletter</h3>
                </div>
                <button onClick={onClick}><img src={close} alt=""/></button>
            </div>
            <form className="newsletter--form">
                <input type="email" placeholder="Enter Email Address..."/>
                <button type="submit">Subscribe <img src={arrow} alt=""/></button>
            </form>
        </section>
    )
}

export default Newsletter;