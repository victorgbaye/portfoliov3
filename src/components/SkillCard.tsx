type CardProps = {
    icon: string;
    title: string;
    description: string;
  };
const SkillCard: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="card">
    <div className="card-icon">
      <img src={icon} alt={`${title} icon`} />
    </div>
    <div className="card-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>

  )
}

export default SkillCard