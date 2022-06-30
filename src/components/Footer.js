import { ReactComponent as ArrowFooter } from "../images/arrow__footer.svg";
import { ReactComponent as Instagram } from "../images/instagram.svg";
import { ReactComponent as Twitter } from "../images/twitter.svg";
import { ReactComponent as Linkedin } from "../images/linkedin.svg";

const Footer = ({ darkMode, onClick }) => {
    return (
        <footer className={`${darkMode ? "" : "footer--light"}`}>
            <nav className="footer--nav">
                <ul className="footer--nav--ul">
                    <li><a href="#top" className="active">HOME</a></li>
                    <li><a href="https://www.instrument.com/what-we-do">WHAT WE DO</a></li>
                    <li><a href="https://www.instrument.com/work">WORK</a></li>
                    <li><a href="https://www.instrument.com/who-we-are">WHO WE ARE</a></li>
                    <li><a href="https://www.instrument.com/articles">ARTICLES</a></li>
                </ul>
                <ul className="footer--nav--ul">
                    <li><a href="https://www.instrument.com/being-here">BEING HERE</a></li>
                    <li><a href="https://www.instrument.com/careers">CAREERS</a></li>
                    <li><a href="https://www.instrument.com/contact">CONTACT</a></li>
                    <li><a href="https://www.instrument.com/privacy">PRIVACY</a></li>
                </ul>
            </nav>
            <div className="newsletter--socials--container">
                <button onClick={onClick}>NEWSLETTER <ArrowFooter className="arrow"/></button>
                <ul className="socials--container">
                    <li><a href="https://instagram.com/instrument"><Instagram className="social--icon"/></a></li>
                    <li><a href="https://twitter.com/instrument"><Twitter className="social--icon"/></a></li>
                    <li><a href="https://linkedin.com/company/instrument"><Linkedin className="social--icon"/></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;