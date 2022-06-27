import arrow from "../images/arrow.svg"; 

const BtnLink = ({ href, text }) => {
    return (
        <a href={href} className="BtnLink--component">{text} <img src={arrow} alt=""/></a>
    )
}

export default BtnLink;