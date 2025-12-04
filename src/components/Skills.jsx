import './Skills.css';
import seleniumLogo from '../assets/images/selenium.png';
import cypressLogo from '../assets/images/cypress-1.svg';
import playwrightLogo from '../assets/images/playwright.png';
import postmanLogo from '../assets/images/postman.webp';
import jmeterLogo from '../assets/images/jmter.png';
import restAssuredLogo from '../assets/images/Rest Assured.png';
import javascriptLogo from '../assets/images/javascript.png';
import typescriptLogo from '../assets/images/typescript.svg';
import htmlCssLogo from '../assets/images/html css.png';
import tailwindLogo from '../assets/images/tailwind.webp';
import bootstrapLogo from '../assets/images/boostrap.svg';
import pythonLogo from '../assets/images/python.png';
import javaLogo from '../assets/images/java-seeklogo.png';
import sqlLogo from '../assets/images/sql server.png';
import gitLogo from '../assets/images/git.png';
import jiraLogo from '../assets/images/jira-logo-png_seeklogo-338597.png';
import vscodeLogo from '../assets/images/visual studio code.png';
import intellijLogo from '../assets/images/IntelliJ_IDEA_Icon.svg.png';
import karateLogo from '../assets/images/karate.png';

const Skills = () => {
  const skills = {
    automation: [
      { name: 'Selenium', icon: seleniumLogo },
      { name: 'Cypress', icon: cypressLogo },
      { name: 'Playwright', icon: playwrightLogo },
      { name: 'Rest Assured', icon: restAssuredLogo },
      { name: 'Karate DSL', icon: karateLogo },
      { name: 'Postman', icon: postmanLogo },
      { name: 'JMeter', icon: jmeterLogo }
    ],
    frontend: [
      { name: 'JavaScript', icon: javascriptLogo },
      { name: 'TypeScript', icon: typescriptLogo },
      { name: 'HTML/CSS', icon: htmlCssLogo },
      { name: 'Tailwind', icon: tailwindLogo },
      { name: 'Bootstrap', icon: bootstrapLogo }
    ],
    backend: [
      { name: 'Python', icon: pythonLogo },
      { name: 'Java', icon: javaLogo },
      { name: 'SQL Server', icon: sqlLogo }
    ],
    tools: [
      { name: 'Git', icon: gitLogo },
      { name: 'Jira', icon: jiraLogo },
      { name: 'VS Code', icon: vscodeLogo },
      { name: 'IntelliJ IDEA', icon: intellijLogo }
    ]
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Habilidades Técnicas</h2>
        <p className="section-subtitle">
          Herramientas y tecnologías con las que trabajo diariamente
        </p>

        <div className="skills-categories">
          <div className="skill-category">
            <h3 className="category-title">
              <span className="category-icon">🧪</span>
              Automatización de Pruebas
            </h3>
            <div className="skills-grid">
              {skills.automation.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-icon">
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  <h4>{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">
              <span className="category-icon">🎨</span>
              Frontend Development
            </h3>
            <div className="skills-grid">
              {skills.frontend.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-icon">
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  <h4>{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">
              <span className="category-icon">⚙️</span>
              Backend Development
            </h3>
            <div className="skills-grid">
              {skills.backend.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-icon">
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  <h4>{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">
              <span className="category-icon">🛠️</span>
              Herramientas & DevOps
            </h3>
            <div className="skills-grid">
              {skills.tools.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-icon">
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  <h4>{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
