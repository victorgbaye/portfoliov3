import victor from '../assets/Victor.jpeg'
import SkillsSection from '../components/SkillsSection';
import Agbalumo from '../assets/Agbalumo.svg'
import figplug from '../assets/figplug.svg'

const projectData = [
  {
    id: 1,
    title: "TheFigPlug",
    description: "Description of Project 1...",
    imageUrl: figplug
  },
  {
    id: 2,
    title: "Agbalumotunes",
    description: "Description of Project 2...",
    imageUrl: Agbalumo
  },
  {
    id: 3,
    title: "Proform",
    description: "Description of Project 3...",
    imageUrl: victor
  },
  {
    id: 4,
    title: "Booknow",
    description: "Description of Project 3...",
    imageUrl: victor
  },
  {
    id: 5,
    title: "Primis-UI",
    description: "Description of Project 3...",
    imageUrl: victor
  },
];
const Home = () => {
  return (
    <div>
        <section className="home-hero-container">
          <div className="hero">
            <h3>
                <strong className="bold-text-1">HI, I'M VICTOR GBAYE</strong>
            </h3>
            <h2 className="bold-text-2">Software Engineer and Developer.<br/> I create software solutions that deliver <br/>exceptional user experiences. </h2>
          </div>
        </section>
        <SkillsSection/>
        <section className='featured-projects-header'>
          <h3>
              <strong className="bold-text-subhead">FEATURED PROJECTS</strong>
          </h3>
        </section>
        <section className="featured-projects">
          
        <div className="projects-container">
          {projectData.map(project => (
            <div className="project-card" key={project.id}>
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
    </section>
    </div>
  )
}

export default Home