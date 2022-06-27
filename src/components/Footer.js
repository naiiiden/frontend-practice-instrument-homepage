import arrow__footer from "../images/arrow__footer.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";

const Footer = () => {
    return (
        <footer>
            <nav className="footer--nav">
                <ul className="footer--nav--ul">
                    <li><a href="#" className="active">HOME</a></li>
                    <li><a href="#">WHAT WE DO</a></li>
                    <li><a href="#">WORK</a></li>
                    <li><a href="#">WHO WE ARE</a></li>
                    <li><a href="#">ARTICLES</a></li>
                </ul>
                <ul className="footer--nav--ul">
                    <li><a href="#">BEING HERE</a></li>
                    <li><a href="#">CAREERS</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#">PRIVACY</a></li>
                </ul>
            </nav>
            <div className="newsletter--socials--container">
                <button>NEWSLETTER <img src={arrow__footer} alt=""/></button>
                <ul className="socials--container">
                    <li><a href="#"><img src={instagram} alt="link to our instagram"/></a></li>
                    <li><a href="#"><img src={twitter} alt="link to our twitter"/></a></li>
                    <li><a href="#"><img src={linkedin} alt="link to our linkedin"/></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;