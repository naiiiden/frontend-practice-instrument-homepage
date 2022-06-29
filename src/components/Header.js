import { useState } from "react";
import { ReactComponent as Logo } from "../images/instrument.svg";
import { ReactComponent as Menu } from "../images/menu.svg";
import { ReactComponent as Close } from "../images/close.svg";


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
            {/* <img src={Logo} alt="Instrument's logo" className="logo"/> */}
            <Logo className="logo" alt="Instrument's logo"/>
            <button className="menu--button" onClick={() => setOpenMenu(!openMenu)}>
                {/* <img src={!openMenu ? Menu : Close} alt=""/> */}
                {!openMenu ? <Menu className="menu--icon"/> : <Close className="menu--icon"/>}
            </button>
            <button onClick={toggleDarkMode}>TEST</button>
            <nav>
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