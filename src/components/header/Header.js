import { useState } from "react";
import { ReactComponent as Logo } from "../../images/instrument.svg";
import { ReactComponent as Menu } from "../../images/menu.svg";
import { ReactComponent as Close } from "../../images/close.svg";
import Dark from "../../images/dark.svg";
import Light from "../../images/light.svg";

import data from "./data.json";

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
                    {data.map(((item, i) => <li className={item.hideOnDesktop ? 'mobile--only' : ''} key={i}><a href={item.href}>{item.name}</a></li>))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;