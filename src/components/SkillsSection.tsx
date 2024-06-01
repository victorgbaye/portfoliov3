import { useState } from 'react';

const SkillsSection = () => {
    const skillsData = [
        {
            id: "frontend-ui",
            stack: "Frontend/UI Development",
            description: "I create pixel-perfect user interfaces that provide great user experiences. Specializing in React JS and Next JS, I build responsive and accessible web applications that are both visually appealing and functionally robust, ensuring optimal performance across all devices."
        },
        {
            id: "backend-api",
            stack: "Backend Development/API Design",
            description: "I develop robust backend solutions and design scalable APIs using Node.js (Express.js) and Django. My work ensures efficient data handling, secure server-side operations, and seamless integration with third-party API's and frontend technologies for a cohesive user experience."
        },
        {
            id: "systems-design",
            stack: "Systems Design",
            description: "I design secure and scalable systems that perform reliably and adapt to growing demands. My focus is on leveraging cutting-edge technologies to enhance system efficiency and robustness."
        },
        {
            id: "0thers",
            stack: "Others",
            description: "Other skills include Software documentation and Software deployment to Cloud services."
        }
    ];

    const [activeId, setActiveId] = useState<string | null>(null);

    const handleMouseEnter = (id: string) => {
        if (window.innerWidth > 768) { // Only trigger hover on non-mobile devices
            setActiveId(id);
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth > 768) { // Only trigger hover on non-mobile devices
            setActiveId(null);
        }
    };

    const handleClick = (id: string) => {
        if (window.innerWidth <= 768) { // Only trigger click on mobile devices
            setActiveId(activeId === id ? null : id);
        }
    };

    return (
        <div className="skills-container">
            <strong className="bold-text-subhead">MY TOP SKILLS</strong>
            <div className="skills-wrapper">
                <ul className="skills-list">
                    {skillsData.map(skill => (
                        <li key={skill.id}
                            onMouseEnter={() => handleMouseEnter(skill.id)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleClick(skill.id)}
                            className='skills-stack'
                        >
                            {skill.stack}
                        </li>
                    ))}
                </ul>
                <div className="skills-description">
                    {skillsData.map(skill => (
                        <div key={skill.id} className={`description-content ${activeId === skill.id ? 'active' : ''}`}>
                            <h2 className='skill-description-header'>{skill.stack}</h2>
                            <p>{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
