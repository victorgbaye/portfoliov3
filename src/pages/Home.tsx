import SkillCard from "../components/SkillCard"
import reactlogo from '../assets/react.svg'
const Home = () => {
  return (
    <>
        <header className="hero-section">
            <p className="hero-section-text-small">👋🏾   Hi, I am Victor Gbaye</p>
            <h2>Software Engineer & Developer</h2>
            <p className="hero-section-text"> I create software solutions that deliver exceptional user experiences with interests in user-focused SaaS products, enterprise software, and finance and payment solutions. With a passion for innovative technology and a commitment to excellence.</p>
        </header>
        <section className="skill-section">
            <h2 className="skill-section-title">WHAT I DO</h2>
            <main className="services">
                <SkillCard
                icon={reactlogo}
                title="Frontend Development"
                description="Crafting intuitive and engaging interfaces that provide seamless user experiences across all devices."
                backgroundColor="#f8ecec"
                />
                <SkillCard
                icon={reactlogo}
                title="Backend Development"
                description="Crafting intuitive and engaging interfaces that provide seamless user experiences across all devices."
                backgroundColor="rgba(240, 253, 244, 0.70)"
                />
            </main>
        </section>
    </>

  )
}

export default Home