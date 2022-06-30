import { ReactComponent as Arrow__footer } from "../images/arrow__footer.svg";
import { ReactComponent as Instagram } from "../images/instagram.svg";
import { ReactComponent as Twitter } from "../images/twitter.svg";
import { ReactComponent as Linkedin } from "../images/linkedin.svg";
import Newsletter from "./Newsletter";
import { useState } from "react";


const Footer = ({ darkMode }) => {
    const [openModal, setOpenModal] = useState(false);

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
                <button onClick={() => setOpenModal(true)}>NEWSLETTER <Arrow__footer className="arrow"/></button>
                <ul className="socials--container">
                    <li><a href="https://instagram.com/instrument"><Instagram className="social--icon"/></a></li>
                    <li><a href="https://twitter.com/instrument"><Twitter className="social--icon"/></a></li>
                    <li><a href="https://linkedin.com/company/instrument"><Linkedin className="social--icon"/></a></li>
                </ul>
            </div>
            {openModal === true ? <Newsletter className="test" onClick={() => setOpenModal(false)}/> : ""}
        </footer>
    )
}

export default Footer;