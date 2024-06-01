import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const projectDetails = () => {
  return (
    <div>
        <header className="project-details-header">
            <section className="project-header-sectioin-1">
                <div>
                    <h1 className="project-title">Proform</h1>
                    <p className="project-description">Discover high end luxury furniture that bring the best in modern living</p>
                </div>
                <div className="project-detail-video"></div>
            </section>
            <section className="project-header-sectioin-2">
                <div style={{display:'flex', gap:'20px'}}>
                    <button className="project-action-button"><span>Visit Site</span>  <OpenInNewIcon/> </button>
                    <button className="project-action-button">
                        <span>Visit Design Doc</span> <OpenInNewIcon/></button>
                </div>

                <div className="project-stacks-container">
                    <div className="project-stacks">
                        UI/UX Design
                    </div>
                    <div className="project-stacks">
                        E-Commerce
                    </div>
                </div>
            </section>
        </header>
        <main className="projects-main">
            <section>
                <div className="project-pic-1"></div>
                <article className="project-brief-container">
                    <h1 className="project-brief-title">The Brief</h1>
                    <p className="project-brief-description">
                        Fudli App is a new Startup providing restaurants with their own online food
                        ordering website, allowing them to cut the commission from third-party
                        providers and generate direct orders for themselves. The challenge was to
                        develop an innovative web application and an order management system, giving
                        restaurants full freedom to add simple or complex menu items, including a
                        seamless integration with payment providers.
                    </p>
                </article>
            </section>
            <section className="project-pic-grid-container">
                <div className="project-pic-grid-item"></div>
                <div className="project-pic-grid-item"></div>
                <div className="project-pic-grid-item"></div>
                <div className="project-pic-grid-item"></div>
            </section>
        </main>
    </div>
  )
}

export default projectDetails