import React, { useEffect, useState } from 'react';
import './App.css';
import { 
   
  Database, 
  Globe, 
  Mail,
  Github, 
  Linkedin, 
  ChevronDown,
  Server,
  Layout,
  Coffee
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const name = "Swamy Das ";
  const lastName ="Gouri"

  // Split the name into an array of letters
  const nameLetters = name.split('');
  const Lastletter = lastName.split('')

  return (
    <div className="app-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className={`hero-content ${isVisible ? 'visible' : 'hidden'}`}>
          <h1 className="name">
            {nameLetters.map((letter, index) => (
              <span key={index} className="letter" style={{ animationDelay: `${index * 0.1}s` }}>
                {letter}
              </span>
            ))}
            <span>&nbsp;</span> {/* Non-breaking space between first name and surname */}
            {Lastletter.map((letter, index) => (
              <span key={`surname-${index}`} className="letter" style={{ animationDelay: `${(name.length + index) * 0.1}s` }}>
                {letter}
              </span>
            ))}
          </h1>
          <p className="subtitle">Java Full Stack Developer</p>
          <div className="social-icons">
            <a href="https://github.com/justin-643" className="social-icon">
              <Github className="icon" />
            </a>
            <a href="https://github.com/justin-643" className="social-icon">
              <Linkedin className="icon" />
            </a>
            <a href="https://github.com/justin-643" className="social-icon">
              <Mail className="icon" />
            </a>
          </div>
          <div className="chevron">
            <ChevronDown className="icon" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="about-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate Full Stack Developer specializing in Java and modern web technologies.
                With a strong foundation in both backend and frontend development, I create scalable
                and efficient solutions that solve real-world problems.
              </p>
              <p>
                My expertise includes Spring Boot, React, and cloud technologies, allowing me to
                build complete applications from the ground up.
              </p>
            </div>
            <div className="skills">
              <div className="skill-card">
                <Server className="icon" />
                <h3>Backend</h3>
                <p>Java, Spring Boot, Microservices</p>
              </div>
              <div className="skill-card">
                <Layout className="icon" />
                <h3>Frontend</h3>
                <p>React, Tailwind</p>
              </div>
              <div className="skill-card">
                <Database className="icon" />
                <h3>Database</h3>
                <p>MySQL, PostgreSQL, MongoDB</p>
              </div>
              <div className="skill-card">
                <Globe className="icon" />
                <h3>DevOps</h3>
                <p>Docker, AWS, CI/CD</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-section">
        <div className="projects-container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {[1, 2, 3].map((project) => (
              <div key={project} className="project-card">
                <img 
                  src={`https://source.unsplash.com/800x600/?programming,technology${project}`} 
                  alt="Project Preview"
                  className="project-image"
                />
                <div className="project-details">
                  <h3>Project {project}</h3>
                  <p>
                    A full-stack application built with Spring Boot and React.
                  </p>
                  <div className="tech-tags">
                    <span className="tech-tag">Java</span>
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">AWS</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="contact-container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-text">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="contact-button"
          >
            <Mail className="icon" />
            Get in Touch
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <Coffee className="icon" />
          <p>Built with passion by Swamy Das Gouri</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
