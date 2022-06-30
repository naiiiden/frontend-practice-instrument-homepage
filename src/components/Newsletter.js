import { ReactComponent as At } from "../images/at.svg";
import { ReactComponent as Arrow__footer } from "../images/arrow__footer.svg";
import { ReactComponent as Close } from "../images/newsletter_close.svg";

const Newsletter = ({ onClick, darkMode }) => {
    return (
        <section className={`newsletter--modal ${darkMode ? "" : "newsletter--light"}`}>
            <div className="heading--close_btn--container">
                <div className="at--heading--container">
                    <At className="at"/>
                    <h3 className="heading">Join Our Newsletter</h3>
                </div>
                <button onClick={onClick}><Close className="close"/></button>
            </div>
            <form className="newsletter--form">
                <input type="email" placeholder="Enter Email Address..." autoFocus={true}/>
                <button type="submit">Subscribe<Arrow__footer className="arrow"/></button>
            </form>
        </section>
    )
}

export default Newsletter;