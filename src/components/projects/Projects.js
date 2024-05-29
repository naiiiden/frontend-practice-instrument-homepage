import "animate.css";
import WOW from "wow.js";
import BtnLink from "../shared/button/Button";
import SingleProject from "../shared/singleProject/SingleProject";
import art1 from "../../images/art1.jpg";
import art2 from "../../images/art2.jpg";

const Projects = ({ darkMode }) => {
    new WOW().init();

    const data = {
        "headingText": "Explore a few of our most impactful projects",
        "linkText": "Our work",
        "projects": [
            {
                "href": "https://www.instrument.com/work/eames-institute",
                "src": art1,
                "headingText": "Eames Institute",
                "pText": "Ray and Charles Eames laid the foundation for modern design and created work that has transcended time. With an aspiration to bring the Eameses’ timeless methodologies to a modern audience, the Eames Institute enlisted Instrument to co-create a digital platform to unveil their vast collection to the world."
            },
            {
                "href": "https://www.instrument.com/work/dropbox-award-submission",
                "src": art2,
                "headingText": "Dropbox &quot;For All Things Worth Saving&quot;",
                "pText": "To evolve and mature how Dropbox engages with their customers, we developed a multi-year brand platform as well as launched its first campaign titled 'For All Things Worth Saving' — an ecosystem of branded experiences aimed to remind people of the inherent value of their digital files."
            }
        ]
    }
    
    return (
        <section className={`projects--section ${darkMode ? "" : "projects--light"}`}>
            <div className="projects--heading--work--container wow animate__animated animate__fadeIn" data-wow-offset="200">
                <h2 className="projects--heading">{data.headingText}</h2>
                <BtnLink href="https://www.instrument.com/work" text={data.linkText} className={`${darkMode ? "" : "btn--light"}`}/>
            </div>
            <div className="projects--works--container wow animate__animated animate__fadeIn" data-wow-offset="300">
                {data.projects.map((item, i) => (
                    <SingleProject
                        key={i}
                        href={item.href}
                        src={item.src}
                        h3={item.headingText}
                        p={item.pText}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects;