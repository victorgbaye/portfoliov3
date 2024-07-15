import React from 'react';
import arrow from '../assets/Arrow.svg'
type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, link }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={`${title} project`} />
      </div>
      <div className="project-content">
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <a href={link} className="project-link">
          <span><img src={arrow}/></span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
