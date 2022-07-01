// import arrow from "../images/arrow.svg"; 
import { ReactComponent as Arrow } from "../images/arrow.svg";

const BtnLink = ({ href, text, className }) => {
    return (
        <a href={href} className={`BtnLink--component ${className}`}>{text} <Arrow className="arrow"/></a>
    )
}

export default BtnLink;