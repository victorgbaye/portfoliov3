type CardProps = {
    icon: string;
    title: string;
    description: string;
    backgroundColor: string;

  };
const SkillCard: React.FC<CardProps> = ({ icon, title, description, backgroundColor }) => {
  return (
    <div className="skill-card" style={{ backgroundColor }}>
    <div className="skill-card-icon">
      <img src={icon} alt={`${title} icon`} />
    </div>
    <div className="skill-card-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>

  )
}

export default SkillCard