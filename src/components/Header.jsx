import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">&lt;QA Engineer /&gt;</span>
        </div>
        <nav className="nav">
          <button onClick={() => scrollToSection('home')} className="nav-link">Inicio</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">Sobre Mí</button>
          <button onClick={() => scrollToSection('skills')} className="nav-link">Habilidades</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">Proyectos</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contacto</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
