import React from 'react'

const SingleProject = ({ href, src, h3, p }) => {
    return (
        <a className="projects--work" href={href}>
            <img src={src} alt=""/>
            <div className="text--container">
                <h3 className="work--heading">{h3}</h3>
                <p>{p}</p>
            </div>
        </a>
    )
}

export default SingleProject