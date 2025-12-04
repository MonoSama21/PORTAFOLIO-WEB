import './About.css';
import profilePhoto from '../assets/images/foto.png';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <div className="image-background"></div>
              <img src={profilePhoto} alt="Yrvin - QA Engineer" className="profile-photo" />
            </div>
          </div>
          <div className="about-text">
            <p className="about-paragraph">
              Soy un <strong>QA Automation Engineer</strong> con experiencia en automatización de pruebas 
              y desarrollo web full stack. Me apasiona crear soluciones de testing robustas que 
              aseguren la calidad del software.
            </p>
            <p className="about-paragraph">
              Mi enfoque combina conocimientos profundos en <strong>frameworks de automatización </strong> 
              como Selenium, Playwright, Karate DSL y REST Assured, con habilidades en desarrollo frontend y backend, 
              permitiéndome entender el producto desde múltiples perspectivas.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>+100</h3>
                <p>Tests Automatizados</p>
              </div>
              <div className="stat">
                <h3>+10</h3>
                <p>Proyectos Completados</p>
              </div>
              <div className="stat">
                <h3>99%</h3>
                <p>Cobertura de Código</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
