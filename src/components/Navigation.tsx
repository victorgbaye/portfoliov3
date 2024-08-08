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
        <li><a href="#socials">About</a></li>
        <li><a href="#experience">Technology</a></li>
        <li><a href="#projects">Projects</a></li>
        <p>{isOpen ? '-' : '|'} </p>
        <li><a href="#mail">Github</a></li>
        <li><a href="#call">Linkedin</a></li>
        <li><a href="#cv">Youtube</a></li>
        <li><a href="#cv">Blog</a></li>

      </ul>
      {/* <button >&#9776;</button> */}

      <img src={isOpen? cancel : hamburger} className="hamburger" onClick={toggleMenu}/>
    </nav>
  );
};

export default Navigation;
