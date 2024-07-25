import SkillCard from "../components/SkillCard"
import reactlogo from '../assets/react.svg'
import agbalumo from '../assets/Agbalumo.svg'
import figplug from '../assets/figplug.svg'
import rect from '../assets/rect.svg'
import react from '../assets/react.svg'
import nodejs from '../assets/nodejs.svg'
import nextjs from '../assets/nextjs.svg'
import express from '../assets/express.svg'
import git from '../assets/gitsvg.svg'
import figma from '../assets/figma.svg'
import postman from '../assets/postman.svg'
import redux from '../assets/redux.svg'
import spring from '../assets/spring.svg'
import mongo from '../assets/mongo.svg'
import postgresql from '../assets/postgresql.svg';
import mysql from '../assets/mysql.svg';
import docker from '../assets/docker.svg';
import kubernetes from '../assets/kubernetes.svg';
import jenkins from '../assets/jenkins.svg';
import vscode from '../assets/vscode.svg';
import intellij from '../assets/intellij.svg';
import aws from '../assets/aws.svg';




import ProjectCard from "../components/ProjectCard"
const projects = [
    {
      image: agbalumo,
      title: 'Agbalumo tunes',
      description: 'A music application where users can explore various genres of music.',
      link: '/project-details/agbalumo-tunes'
    },
    {
        image: figplug,
        title: 'Fig Plug',
        description: 'A platform that helps speed designers workflow',
        link: '/project-details/agbalumo-tunes'
      },
    // Add more projects as needed
  ];
const Home = () => {
  return (
    <div className="home">
        <header className="hero-section">
            <p className="hero-section-text-small">👋🏾   Hi, I am Victor Gbaye</p>
            <h2>Software Engineer & Developer</h2>
            <p className="hero-section-text">
I create software solutions that deliver exceptional user experiences, focusing on customer-based SaaS products, enterprise software, and finance and payment solutions.</p>
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
        <section className="skill-section about-hero">
        <img src={rect} className="border-square top-left" alt="border square"/>
        <img src={rect} className="border-square top-right" alt="border square"/>
        <img src={rect} className="border-square bottom-left" alt="border square"/>
        <img src={rect} className="border-square bottom-right" alt="border square"/>
          <p className="about-me-text">
          With a solid foundation in software engineering principles and extensive experience in implementing them, I excel in delivering highly scalable and reliable software solutions through the complete software development lifecycle—from requirement definition to development and testing—using industry-standard technology. I am passionate about building enterprise solutions, finance and payment systems, and SaaS products. Continuously driven by curiosity and a desire for growth, I am always learning and adopting new technologies. My programming skills include Java, JavaScript, and Python, allowing me to create comprehensive and innovative software solutions.
          <br/>
          <br/>
As a full-stack developer, I am proficient in both front-end and back-end development, utilizing frameworks such as Node.js, Express.js, React.js, Next.js, Spring, and Spring Boot. My expertise also extends to deployment and CI/CD tools such as Kubernetes and GitLab, cloud services with AWS, and both relational and non-relational databases.
          </p>
        </section>
        <section className="technology-section">
          <h2 className="skill-section-title">Technologies i work with</h2>


          <div className="technology-icon-container">
            <img src={react} className="technology-section-icon"/>
            <img src={nextjs} className="technology-section-icon"/>
            <img src={redux} className="technology-section-icon"/>
            <img src={nodejs} className="technology-section-icon"/>
            <img src={express} className="technology-section-icon"/>
            <img src={spring} className="technology-section-icon"/>
            <img src={git} className="technology-section-icon"/>
            <img src={postman} className="technology-section-icon"/>
            <img src={figma} className="technology-section-icon"/>
            <img src={aws} className="technology-section-icon"/>
            <img src={mongo} className="technology-section-icon"/>
            <img src={postgresql} className="technology-section-icon"/>
            <img src={mysql} className="technology-section-icon"/>
            <img src={docker} className="technology-section-icon"/>
            <img src={kubernetes} className="technology-section-icon"/>
            <img src={jenkins} className="technology-section-icon"/>
            <img src={vscode} className="technology-section-icon"/>
            <img src={intellij} className="technology-section-icon"/>
          </div>
        </section>

        <section className="skill-section">
        <h2 className="skill-section-title">FEATURED PROJECTS</h2>
        <main className="services">
            {projects.map(project => (
            <ProjectCard
            key={project.title}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            />
        ))}
        </main>
        </section>
    </div>

  )
}

export default Home