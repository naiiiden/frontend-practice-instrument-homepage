import arrow from "../images/arrow.svg";
import dec1 from "../images/dec1.png";
import dec3 from "../images/dec3.jpg";

const Projects = () => {
    return (
        <section className="projects--section">
            <div className="projects--heading--work--container">
                <h2 className="projects--heading">Explore a few of our most impactful projects</h2>
                <a href="#">Our work <img src={arrow} alt=""/></a>
            </div>
            <div className="projects--works--container">
                <a className="projects--work">
                    <img src={dec1} alt=""/>
                    <h3 className="work--heading">Eames Institute</h3>
                    <p>Ray and Charles Eames laid the foundation for modern design and created work that has transcended time. With an aspiration to bring the Eameses’ timeless methodologies to a modern audience, the Eames Institute enlisted Instrument to co-create a digital platform to unveil their vast collection to the world.</p>
                </a>
                <a className="projects--work">
                    <img src={dec3} alt=""/>
                    <h3 className="work--heading">Dropbox "For All Things Worth Saving"</h3>
                    <p>To evolve and mature how Dropbox engages with their customers, we developed a multi-year brand platform as well as launched its first campaign titled 'For All Things Worth Saving' — an ecosystem of branded experiences aimed to remind people of the inherent value of their digital files.</p>
                </a>
            </div>
        </section>
    )
}

export default Projects;