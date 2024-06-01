import figplug from '../assets/figplug.svg'
import Agbalumo from '../assets/Agbalumo.svg'
import proform from '../assets/proform.svg'
import bookme from '../assets/bookme.svg'

const Projects = () => {
  return (
    <div className="projects-page-container">
        <section className="project-page-header">
            <div>
                <h1 className="project-title">Works</h1>
            </div>
            {/* <div className="project-detail-video"></div> */}
                <p className="project-description">I'm always building something. Here's a curated list of user and developer-based SaaS products I'm working on.</p>
        </section>

        <section className="project-pic-grid-container">
            <div className="project-pic-grid-item">
            <div className="background-image"  style={{ backgroundImage: `url(${figplug})` }}></div>

                {/* <img src={figplug} alt={"title"} className="card-image" style={{position:'absolute', width:'fit-content',maxWidth:'100%', height:'100%', objectFit:'contain'}}/> */}
                <div className="project-item-details">
                    <h2>Proform</h2>
                    <span>
                        <p>Web development</p>
                        <p>Web development</p>
                        <p>Web development</p>
                    </span>
                </div>
            </div>
            <div className="project-pic-grid-item" >
            <div className="background-image"  style={{ backgroundImage: `url(${Agbalumo})` }}></div>

                 {/* <img src={figplug} alt={"title"} className="card-image" style={{position:'absolute', width:'fit-content',maxWidth:'100%', height:'100%', objectFit:'contain'}}/> */}
                 <div className="project-item-details">
                    <h2>Proform</h2>
                    <span>
                        <p>Web development</p>
                        <p>Web development</p>
                        <p>Web development</p>

                    </span>
                </div>
            </div>
            <div className="project-pic-grid-item">
            <div className="background-image"  style={{ backgroundImage: `url(${bookme})` }}></div>

                 {/* <img src={figplug} alt={"title"} className="card-image" style={{position:'absolute', width:'fit-content',maxWidth:'100%', height:'100%', objectFit:'contain'}}/> */}
                 <div className="project-item-details">
                    <h2>Proform</h2>
                    <span>
                        <p>Web development</p>
                        <p>Web development</p>
                        <p>Web development</p>

                    </span>
                </div>
            </div>
            <div className="project-pic-grid-item">
            <div className="background-image"  style={{ backgroundImage: `url(${proform})` }}></div>
                 {/* <img src={figplug} alt={"title"} className="card-image" style={{position:'absolute', width:'fit-content',maxWidth:'100%', height:'100%', objectFit:'contain'}}/> */}
                 <div className="project-item-details">
                    <h2>Proform</h2>
                    <span>
                        <p>Web development</p>
                        <p>Web development</p>
                        <p>Web development</p>

                    </span>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Projects