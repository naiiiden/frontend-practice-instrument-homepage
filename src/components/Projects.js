import arrow from "../images/arrow.svg";
import dec1 from "../images/dec1.png";
import dec3 from "../images/dec3.jpg";
import "animate.css";
import WOW from "wow.js";


const Projects = () => {
    new WOW().init();
    
    return (
        <section className="projects--section">
            <div className="projects--heading--work--container wow animate__animated animate__fadeIn" data-wow-offset="200">
                <h2 className="projects--heading">Explore a few of our most impactful projects</h2>
                <a href="https://www.instrument.com/work">Our work <img src={arrow} alt=""/></a>
            </div>
            <div className="projects--works--container wow animate__animated animate__fadeIn" data-wow-offset="300">
                <a className="projects--work" href="https://www.instrument.com/work/eames-institute">
                    <img src="https://images.prismic.io/instrument-v5/f2206e32-32cf-42f8-875b-245741d153c7_Group+34583.png?auto=compress,format&w=1280" alt=""/>
                    <div className="text--container">
                        <h3 className="work--heading">Eames Institute</h3>
                        <p>Ray and Charles Eames laid the foundation for modern design and created work that has transcended time. With an aspiration to bring the Eameses’ timeless methodologies to a modern audience, the Eames Institute enlisted Instrument to co-create a digital platform to unveil their vast collection to the world.</p>
                    </div>
                </a>
                <a className="projects--work" href="https://www.instrument.com/work/dropbox-award-submission">
                    <img src="https://images.prismic.io/instrument-v5/71b85f31-4930-43a6-80f0-2bdad6da7420_Frame+5393.jpg?auto=compress,format&w=1280" alt=""/>
                    <div className="text--container">
                        <h3 className="work--heading">Dropbox "For All Things Worth Saving"</h3>
                        <p>To evolve and mature how Dropbox engages with their customers, we developed a multi-year brand platform as well as launched its first campaign titled 'For All Things Worth Saving' — an ecosystem of branded experiences aimed to remind people of the inherent value of their digital files.</p>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Projects;