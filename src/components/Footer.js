import arrow__footer from "../images/arrow__footer.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import Newsletter from "./Newsletter";
import { useState } from "react";

const Footer = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <footer>
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
                <button onClick={() => setOpenModal(true)}>NEWSLETTER <img src={arrow__footer} alt=""/></button>
                <ul className="socials--container">
                    <li><a href="https://instagram.com/instrument"><img src={instagram} alt="link to our instagram"/></a></li>
                    <li><a href="https://twitter.com/instrument"><img src={twitter} alt="link to our twitter"/></a></li>
                    <li><a href="https://linkedin.com/company/instrument"><img src={linkedin} alt="link to our linkedin"/></a></li>
                </ul>
            </div>
            {openModal === true ? <Newsletter onClick={() => setOpenModal(false)}/> : ""}
        </footer>
    )
}

export default Footer;