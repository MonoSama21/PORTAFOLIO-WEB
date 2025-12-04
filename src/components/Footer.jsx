import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>&lt;QA Engineer /&gt;</h3>
            <p>
              Construyendo software de calidad a través de la automatización 
              y las mejores prácticas de testing.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><a href="#home">Inicio</a></li>
              <li><a href="#about">Sobre Mí</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Servicios</h4>
            <ul className="footer-links">
              <li>Automatización de Pruebas</li>
              <li>Desarrollo Full Stack</li>
              <li>Testing de Performance</li>
              <li>Consultoría QA</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {currentYear} Yrvin - QA Automation SemiSenior Engineer. Todos los derechos reservados.</p>
          <p className="made-with">
            Hecho con <span className="heart">❤️</span> y <span className="highlight">React</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
