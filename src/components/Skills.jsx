import './Skills.css';

const Skills = () => {
  const skills = {
    automation: [
      { name: 'Selenium', level: 90, icon: '🤖' },
      { name: 'Cypress', level: 85, icon: '🌲' },
      { name: 'Playwright', level: 80, icon: '🎭' },
      { name: 'Jest', level: 85, icon: '🃏' },
      { name: 'Postman', level: 90, icon: '📮' },
      { name: 'JMeter', level: 75, icon: '⚡' }
    ],
    frontend: [
      { name: 'React', level: 85, icon: '⚛️' },
      { name: 'JavaScript', level: 90, icon: '🟨' },
      { name: 'TypeScript', level: 80, icon: '🔷' },
      { name: 'HTML/CSS', level: 90, icon: '🎨' },
      { name: 'Tailwind', level: 80, icon: '💨' }
    ],
    backend: [
      { name: 'Node.js', level: 80, icon: '🟢' },
      { name: 'Python', level: 85, icon: '🐍' },
      { name: 'Java', level: 75, icon: '☕' },
      { name: 'SQL', level: 80, icon: '🗄️' },
      { name: 'REST API', level: 85, icon: '🔌' }
    ],
    tools: [
      { name: 'Git', level: 90, icon: '📦' },
      { name: 'Docker', level: 75, icon: '🐳' },
      { name: 'Jenkins', level: 70, icon: '🔧' },
      { name: 'Jira', level: 85, icon: '📊' },
      { name: 'VS Code', level: 95, icon: '💻' }
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
                  <div className="skill-icon">{skill.icon}</div>
                  <h4>{skill.name}</h4>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-level">{skill.level}%</span>
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
                  <div className="skill-icon">{skill.icon}</div>
                  <h4>{skill.name}</h4>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-level">{skill.level}%</span>
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
                  <div className="skill-icon">{skill.icon}</div>
                  <h4>{skill.name}</h4>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-level">{skill.level}%</span>
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
                  <div className="skill-icon">{skill.icon}</div>
                  <h4>{skill.name}</h4>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-level">{skill.level}%</span>
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
