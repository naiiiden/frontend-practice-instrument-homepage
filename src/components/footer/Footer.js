import { ReactComponent as ArrowFooter } from "../../images/arrow__footer.svg";
import Instagram from "../../images/instagram.svg";
import Twitter from "../../images/twitter.svg";
import Linkedin from "../../images/linkedin.svg";

import data from "./data.json";

const Footer = ({ darkMode, onClick }) => {
    const linksSocials = [
        {
            "name": "Instagram",
            "href": "",
            "img": Instagram
        },
        {
            "name": "Twitter",
            "href": "",
            "img": Twitter
        },
        {
            "name": "LinkedIn",
            "href": "",
            "img": Linkedin
        }
    ]    
    
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
                <button onClick={onClick} className="uppercase">{data.newsletterText} <ArrowFooter className="arrow"/></button>
                <ul className="socials--container">
                    {linksSocials.map((item, i) => <li key={i}><a href={item.href}><img style={{ "filter": darkMode ? "invert(1)" : "" }} src={item.img} alt={item.name}/></a></li>)}
                </ul>
            </div>
        </footer>
    )
}

export default Footer;