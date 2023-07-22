import "animate.css";
import WOW from "wow.js";
import BtnLink from "../shared/button/Button";
import SingleProject from "../shared/singleProject/SingleProject";

const Projects = ({ darkMode }) => {
    new WOW().init();
    
    return (
        <section className={`projects--section ${darkMode ? "" : "projects--light"}`}>
            <div className="projects--heading--work--container wow animate__animated animate__fadeIn" data-wow-offset="200">
                <h2 className="projects--heading">Explore a few of our most impactful projects</h2>
                <BtnLink href="https://www.instrument.com/work" text="Our work" className={`${darkMode ? "" : "btn--light"}`}/>
            </div>
            <div className="projects--works--container wow animate__animated animate__fadeIn" data-wow-offset="300">
                <SingleProject
                    href="https://www.instrument.com/work/eames-institute"
                    src="https://images.prismic.io/instrument-v5/f2206e32-32cf-42f8-875b-245741d153c7_Group+34583.png?auto=compress,format&w=1280"
                    h3="Eames Institute"
                    p="Ray and Charles Eames laid the foundation for modern design and created work that has transcended time. With an aspiration to bring the Eameses’ timeless methodologies to a modern audience, the Eames Institute enlisted Instrument to co-create a digital platform to unveil their vast collection to the world."
                />
                <SingleProject
                    href="https://www.instrument.com/work/dropbox-award-submission"
                    src="https://images.prismic.io/instrument-v5/71b85f31-4930-43a6-80f0-2bdad6da7420_Frame+5393.jpg?auto=compress,format&w=1280"
                    h3="Dropbox &quot;For All Things Worth Saving&quot;"
                    p="To evolve and mature how Dropbox engages with their customers, we developed a multi-year brand platform as well as launched its first campaign titled 'For All Things Worth Saving' — an ecosystem of branded experiences aimed to remind people of the inherent value of their digital files."
                />
            </div>
        </section>
    )
}

export default Projects;