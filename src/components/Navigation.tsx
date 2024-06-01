import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <ul className="nav-links">
        <li><a href="#skills">Home</a></li>
        <li><a href="#experience">About</a></li>
        <li><a href="#resume">Skills</a></li>
        <li><a href="#resume">Works</a></li>
        <li><a href="#contact">Github</a></li>
      </ul>
      <button className="hamburger" onClick={toggleMenu}>&#9776;</button>
    </nav>
  );
};

export default Navigation;
