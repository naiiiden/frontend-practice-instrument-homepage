import Logo from "../images/instrument.svg";
import Menu from "../images/menu.svg";
import Close from "../images/close.svg";
import { useState } from "react";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header>
            <img src={Logo} alt="Instrument's logo"/>
            <button style={{border: "none", background: "none"}} onClick={() => setOpenMenu(!openMenu)}>
                <img src={Menu} alt=""/>
            </button>
            <nav>
                <ul className={`${openMenu ? "show" : null}`}>
                    <li><a href="">WHAT WE DO</a></li>
                    <li><a href="">WHO WE ARE</a></li>
                    <li><a href="">BEING HERE</a></li>
                    <li><a href="">CAREERS</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;