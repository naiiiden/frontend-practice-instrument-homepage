import { useState } from "react";
import { ReactComponent as Logo } from "../images/instrument.svg";
import { ReactComponent as Menu } from "../images/menu.svg";
import { ReactComponent as Close } from "../images/close.svg";
import Dark from "../images/dark.svg";
import Light from "../images/light.svg";


const Header = ({ darkMode, toggleDarkMode }) => {
    const [openMenu, setOpenMenu] = useState(false);

    var prevScrollpos = window.screenY;
        window.onscroll = function() {
        var currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector(".header").style.top = "0";
        } else {
            document.querySelector(".header").style.top = "-110px";
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <header className={`header ${darkMode ? "" : "header--light"}`} id="header">
            <div className="logo--toggle--container">
                <Logo className="logo" alt="Instrument's logo"/>
                <button className="theme--toggle--button" onClick={toggleDarkMode} aria-label={`Toggle ${darkMode ? "light" : "dark"} mode`} aria-live="polite"><img src={darkMode ? Light : Dark} alt=""/></button>
            </div>
            <button className="menu--button" onClick={() => setOpenMenu(!openMenu)}>
                {!openMenu ? <Menu className="menu--icon"/> : <Close className="menu--icon"/>}
            </button>
            <nav aria-label="Header">
                <ul className={`${openMenu ? "show" : null} uppercase`}>
                    <li><a href="https://www.instrument.com/what-we-do">What we do</a></li>
                    <li className="mobile--only"><a href="https://www.instrument.com/work">Work</a></li>
                    <li><a href="https://www.instrument.com/who-we-are">Who we are</a></li>
                    <li><a href="https://www.instrument.com/being-here">Being here</a></li>
                    <li><a href="https://www.instrument.com/careers">Careers</a></li>
                    <li className="mobile--only"><a href="https://www.instrument.com/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;