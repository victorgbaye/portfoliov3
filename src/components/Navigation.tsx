import { useEffect, useState } from 'react';
import hamburger from '../assets/hamburger.svg'
import cancel from '../assets/cancel.svg'
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#technology-section">Technology</a></li>
        <li><a href="#projects">Projects</a></li>
        <p>{isOpen ? '-' : '|'} </p>
        <li><a href="https://github.com/victorgbaye" target="_blank">Github</a></li>
        <li><a href="https://www.linkedin.com/in/victor-gbaye/" target="_blank">Linkedin</a></li>
        <li><a href="https://www.youtube.com/@victorgbayedev" target="_blank">Youtube</a></li>
        <li><a href="https://medium.com/@victorgbayedev" target="_blank">Blog</a></li>

      </ul>
      {/* <button >&#9776;</button> */}

      <img src={isOpen? cancel : hamburger} className="hamburger" onClick={toggleMenu}/>
    </nav>
  );
};

export default Navigation;
