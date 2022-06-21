import Logo from "../images/instrument.svg";
import Menu from "../images/menu.svg";
import Close from "../images/close.svg";
import { useState } from "react";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    {var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector(".header").style.top = "0";
        } else {
            document.querySelector(".header").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }}

    return (
        <header className="header">
            <img src={Logo} alt="Instrument's logo"/>
            <button style={{border: "none", background: "none"}} onClick={() => setOpenMenu(!openMenu)}>
                <img src={!openMenu ? Menu : Close} alt=""/>
            </button>
            <nav>
                <ul className={`${openMenu ? "show" : null}`}>
                    <li><a href="">WHAT WE DO</a></li>
                    <li className="mobile--only"><a href="">WORK</a></li>
                    <li><a href="">WHO WE ARE</a></li>
                    <li><a href="">BEING HERE</a></li>
                    <li><a href="">CAREERS</a></li>
                    <li className="mobile--only"><a href="">CONTACT</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;