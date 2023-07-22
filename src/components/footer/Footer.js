import { ReactComponent as ArrowFooter } from "../../images/arrow__footer.svg";
import { ReactComponent as Instagram } from "../../images/instagram.svg";
import { ReactComponent as Twitter } from "../../images/twitter.svg";
import { ReactComponent as Linkedin } from "../../images/linkedin.svg";

const Footer = ({ darkMode, onClick }) => {
    return (
        <footer className={`${darkMode ? "" : "footer--light"}`}>
            <nav aria-label="Footer" className="footer--nav">
                <ul className="footer--nav--ul uppercase">
                    <li><a href="#top" className="active">Home</a></li>
                    <li><a href="https://www.instrument.com/what-we-do">What we do</a></li>
                    <li><a href="https://www.instrument.com/work">Work</a></li>
                    <li><a href="https://www.instrument.com/who-we-are">Who we are</a></li>
                    <li><a href="https://www.instrument.com/articles">Articles</a></li>
                </ul>
                <ul className="footer--nav--ul uppercase">
                    <li><a href="https://www.instrument.com/being-here">Being here</a></li>
                    <li><a href="https://www.instrument.com/careers">Careers</a></li>
                    <li><a href="https://www.instrument.com/contact">Contact</a></li>
                    <li><a href="https://www.instrument.com/privacy">Privacy</a></li>
                </ul>
            </nav>
            <div className="newsletter--socials--container">
                <button onClick={onClick} className="uppercase">Newsletter <ArrowFooter className="arrow"/></button>
                <ul className="socials--container">
                    <li><a href="https://instagram.com/instrument" aria-label="Our Instagram"><Instagram className="social--icon"/></a></li>
                    <li><a href="https://twitter.com/instrument" aria-label="Our Twitter"><Twitter className="social--icon"/></a></li>
                    <li><a href="https://linkedin.com/company/instrument" aria-label="Our LinkedIn"><Linkedin className="social--icon"/></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;