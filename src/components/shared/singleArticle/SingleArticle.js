import React from 'react'
import Paragraph from '../paragraph/Paragraph'
import BtnLink from '../button/Button'

const SingleArticle = ({ reverse, src, alt, pText, href, bText, darkMode }) => {
    return (
        <article className={`article--container ${reverse ? 'reverse' : null}`}>
            <img src={src} alt={alt} className="dec--img wow animate__animated animate__fadeIn"/>
            <div className="article--text--container wow animate__animated animate__fadeIn" data-wow-delay=".35s">
                <Paragraph text={pText}/>
                <BtnLink href={href} text={bText} className={`${darkMode ? "" : "btn--light"}`}/>
            </div>
        </article>
    )
}

export default SingleArticle