import { ReactComponent as ArrowFooter } from "../../images/arrow__footer.svg";
import { ReactComponent as Instagram } from "../../images/instagram.svg";
import { ReactComponent as Twitter } from "../../images/twitter.svg";
import { ReactComponent as Linkedin } from "../../images/linkedin.svg";

import data from "./data.json";

const Footer = ({ darkMode, onClick }) => {
    return (
        <footer className={`${darkMode ? "" : "footer--light"}`}>
            <nav aria-label="Footer" className="footer--nav">
                <ul className="footer--nav--ul uppercase">
                    {data.linksRow1.map((item, i) => <li key={i}><a className={item.href === "#top" ? "active" : ""} href={item.href}>{item.name}</a></li>)}
                </ul>
                <ul className="footer--nav--ul uppercase">
                    {data.linksRow2.map((item, i) => <li key={i}><a href={item.href}>{item.name}</a></li>)}
                </ul>
            </nav>
            <div className="newsletter--socials--container">
                <button onClick={onClick} className="uppercase">Newsletter <ArrowFooter className="arrow"/></button>
                <ul className="socials--container">
                    <li><a href="https://instagram.com/instrument" aria-label="Instagram"><Instagram className="social--icon"/></a></li>
                    <li><a href="https://twitter.com/instrument" aria-label="Twitter"><Twitter className="social--icon"/></a></li>
                    <li><a href="https://linkedin.com/company/instrument" aria-label="LinkedIn"><Linkedin className="social--icon"/></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;