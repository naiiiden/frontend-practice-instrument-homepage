import { useState } from "react";
import { ReactComponent as Logo } from "../images/instrument.svg";
import { ReactComponent as Menu } from "../images/menu.svg";
import { ReactComponent as Close } from "../images/close.svg";
import Dark from "../images/dark.svg";
import Light from "../images/light.svg";


const Header = ({ darkMode, toggleDarkMode }) => {
    const [openMenu, setOpenMenu] = useState(false);

    {var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector(".header").style.top = "0";
        } else {
            document.querySelector(".header").style.top = "-110px";
        }
        prevScrollpos = currentScrollPos;
    }}

    return (
        <header className={`header ${darkMode ? "" : "header--light"}`} id="header">
            <div className="logo--toggle--container">
                <Logo className="logo" alt="Instrument's logo"/>
                <button className="theme--toggle--button" onClick={toggleDarkMode} aria-label="toggle light/dark mode"><img src={darkMode ? Light : Dark} alt=""/></button>
            </div>
            <button className="menu--button" onClick={() => setOpenMenu(!openMenu)}>
                {!openMenu ? <Menu className="menu--icon"/> : <Close className="menu--icon"/>}
            </button>
            <nav aria-label="Header">
                <ul className={`${openMenu ? "show" : null}`}>
                    <li><a href="https://www.instrument.com/what-we-do">WHAT WE DO</a></li>
                    <li className="mobile--only"><a href="https://www.instrument.com/work">WORK</a></li>
                    <li><a href="https://www.instrument.com/who-we-are">WHO WE ARE</a></li>
                    <li><a href="https://www.instrument.com/being-here">BEING HERE</a></li>
                    <li><a href="https://www.instrument.com/careers">CAREERS</a></li>
                    <li className="mobile--only"><a href="https://www.instrument.com/contact">CONTACT</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;