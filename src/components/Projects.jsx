import { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Automation Suite Playwright',
      description: 'Suite completa de pruebas automatizadas para plataforma educativa con mas de 50 casos de prueba automatizados.',
      technologies: ['Cypress', 'JavaScript', 'CI/CD'],
      category: 'automation',
      image: '🛒',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Automation Suite Karate DSL',
      description: 'Suite completa de pruebas automatizadas para APIs RESTful utilizando Karate DSL y reportes detallados.',
      technologies: ['Postman', 'Newman', 'JavaScript'],
      category: 'automation',
      image: '🔌',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Performance Testing Dashboard',
      description: 'Dashboard interactivo para visualizar métricas de performance testing en tiempo real.',
      technologies: ['React', 'JMeter', 'Node.js'],
      category: 'fullstack',
      image: '📊',
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Test Management System',
      description: 'Sistema para gestión de casos de prueba, ejecución y reportes de defectos.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      category: 'fullstack',
      image: '📋',
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Selenium Grid Setup',
      description: 'Configuración de Selenium Grid con Docker para ejecución paralela de pruebas cross-browser.',
      technologies: ['Selenium', 'Docker', 'Java'],
      category: 'automation',
      image: '🤖',
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'Mobile Testing Framework',
      description: 'Framework de automatización para testing de aplicaciones móviles iOS y Android.',
      technologies: ['Appium', 'Python', 'pytest'],
      category: 'automation',
      image: '📱',
      github: '#',
      demo: '#'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Proyectos Destacados</h2>
        <p className="section-subtitle">
          Selección de proyectos de automatización y desarrollo
        </p>

        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Todos
          </button>
          <button 
            className={`filter-btn ${filter === 'automation' ? 'active' : ''}`}
            onClick={() => setFilter('automation')}
          >
            Automatización
          </button>
          <button 
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link">
                    <span>GitHub</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </a>
                  <a href={project.demo} className="project-link">
                    <span>Demo</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                      <path d="M1 8h14M8 1l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
