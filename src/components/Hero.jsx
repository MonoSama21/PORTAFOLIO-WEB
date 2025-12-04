import './Hero.css';
import profilePhoto from '../assets/images/foto.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img src={profilePhoto} alt="Yrvin - QA Automation Engineer" className="hero-profile-photo" />
            <div className="hero-image-border"></div>
          </div>
        </div>
        <div className="hero-text">
          <h1 className="hero-title">
            Hola, soy <span className="highlight">Yrvin</span>
          </h1>
          <h2 className="hero-subtitle">QA Automation Engineer & Full Stack Developer</h2>
          <p className="hero-description">
            Especializado en automatización de pruebas con frameworks modernos como 
            Selenium, Cypress y Playwright. Apasionado por la calidad del software 
            y el desarrollo full stack.
          </p>
          <div className="hero-buttons">
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary"
            >
              Ver Proyectos
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-secondary"
            >
              Contáctame
            </button>
          </div>
        </div>
        <div className="hero-animation">
          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="window-title">test_automation.js</span>
            </div>
            <div className="code-content">
              <pre>
{`describe('Portfolio Tests', () => {
  it('should load successfully', () => {
    cy.visit('/portfolio')
    cy.get('.hero-title')
      .should('be.visible')
      .and('contain', 'Yrvin')
    
    cy.get('.skills-grid')
      .children()
      .should('have.length.gt', 0)
  })
})`}
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Desliza</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
