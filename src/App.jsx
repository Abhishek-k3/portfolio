import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="background-gradient" style={{ transform: `translateY(${scrollY * 0.5}px)` }}></div>
      <div className="background-shapes">
        <div className="shape shape-1" style={{ transform: `translateY(${scrollY * 0.3}px)` }}></div>
        <div className="shape shape-2" style={{ transform: `translateY(${scrollY * -0.2}px)` }}></div>
        <div className="shape shape-3" style={{ transform: `translateY(${scrollY * 0.4}px)` }}></div>
      </div>

      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand">Abhishek K</div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text" style={{ transform: `translateY(${scrollY * -0.2}px)` }}>
            <span className="greeting animate-fade-in">Welcome to my portfolio</span>
            <h1 className="hero-title">Hi, I'm Abhishek K</h1>
            <p className="hero-subtitle">Senior Software Developer</p>
            <p className="hero-description">3+ years building scalable, AI-powered solutions</p>
            <div className="hero-buttons">
              <a href="#contact" className="cta-button primary">Get In Touch</a>
              <a href="#experience" className="cta-button secondary">View My Work</a>
            </div>
          </div>
          <div className="scroll-indicator">
            <span>Scroll to explore</span>
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-card about-main">
              <p>Senior Software Developer with 3+ years of experience in building scalable API-driven applications and AI-powered solutions across InsurTech and EdTech domains.</p>
              <p>Skilled in Node.js, Python (FastAPI), React.js, AWS, and SQL, with proven expertise in document extraction, microservices, and cloud-based deployments.</p>
            </div>
            <div className="about-card about-highlight">
              <h3>Key Achievements</h3>
              <ul>
                <li>Reduced overhead costs by 23% through system redesign</li>
                <li>Increased application closure rate by 20%</li>
                <li>Built AI/ML document processing pipelines</li>
                <li>Designed universal integration platform</li>
                <li>Recognized with performance awards</li>
              </ul>
            </div>
          </div>
          <div className="contact-info-box">
            <div className="info-item">
              <span className="icon">📍</span>
              <p>Bengaluru, Karnataka 560062</p>
            </div>
            <div className="info-item">
              <span className="icon">📞</span>
              <p>+91 8296604013</p>
            </div>
            <div className="info-item">
              <span className="icon">📧</span>
              <p>abhisheku3u@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="section-container">
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3>Senior Software Developer</h3>
                  <span className="company">Riskcovry, Bengaluru</span>
                  <span className="period">Sep 2023 - Present</span>
                </div>
                <p>Building scalable API-driven insurance solutions enabling seamless partner integrations. Developed document extraction services with Python, LangChain, AWS Textract & FastAPI.</p>
                <ul className="experience-bullets">
                  <li>Automated processing of Motor, Health & COI documents</li>
                  <li>Built and optimized Node.js microservices for policy creation</li>
                  <li>Integrated AI/ML-powered PDF & image pipelines</li>
                  <li>Enhanced performance with optimized queries & reusable utilities</li>
                </ul>
                <div className="tech-stack">
                  <span>Node.js</span>
                  <span>Python</span>
                  <span>FastAPI</span>
                  <span>React.js</span>
                  <span>AWS</span>
                  <span>Docker</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3>Associate SDE</h3>
                  <span className="company">LeadSquared, Bengaluru</span>
                  <span className="period">Apr 2022 - Sep 2023</span>
                </div>
                <p>Redesigned and refactored custom application structures, reducing overhead costs by 23% and lowering churn rate. Increased application closure rate by 20%.</p>
                <ul className="experience-bullets">
                  <li>Built ML model for SOW creation improving team efficiency</li>
                  <li>Designed & developed universal connector platform</li>
                  <li>Delivered cloud-based AWS project leveraging Lambda Functions</li>
                  <li>Recognized with Dashing Debut Award for outstanding performance</li>
                </ul>
                <div className="tech-stack">
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>Python</span>
                  <span>AWS Lambda</span>
                  <span>SQL</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3>IoT Engineer</h3>
                  <span className="company">Bytestorm Techno Solutions</span>
                  <span className="period">Jul 2020 - Mar 2022</span>
                </div>
                <p>Supervised team of seven during Smart India Hackathon. Developed RetroFit product that garnered recognition and secured additional funding for further development.</p>
                <ul className="experience-bullets">
                  <li>Engaged in multiple hackathons and conferences</li>
                  <li>Prepared detailed technical reports and presentations</li>
                  <li>Developed product that secured company recognition and funding</li>
                </ul>
                <div className="tech-stack">
                  <span>IoT</span>
                  <span>Machine Learning</span>
                  <span>Team Leadership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="section-container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Backend Development</h3>
              <div className="skills-list">
                <div className="skill-item">Node.js</div>
                <div className="skill-item">Python (FastAPI)</div>
                <div className="skill-item">Microservices</div>
                <div className="skill-item">API Development</div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <div className="skills-list">
                <div className="skill-item">React.js</div>
                <div className="skill-item">JavaScript</div>
                <div className="skill-item">HTML/CSS</div>
                <div className="skill-item">Responsive Design</div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Cloud & DevOps</h3>
              <div className="skills-list">
                <div className="skill-item">AWS</div>
                <div className="skill-item">Docker</div>
                <div className="skill-item">CI/CD</div>
                <div className="skill-item">Kubernetes</div>
              </div>
            </div>
            <div className="skill-category">
              <h3>AI/ML & Document Processing</h3>
              <div className="skills-list">
                <div className="skill-item">LangChain</div>
                <div className="skill-item">AWS Textract</div>
                <div className="skill-item">pdfPlumber</div>
                <div className="skill-item">Tesseract OCR</div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Database Management</h3>
              <div className="skills-list">
                <div className="skill-item">PostgreSQL</div>
                <div className="skill-item">MySQL</div>
                <div className="skill-item">SQLAlchemy</div>
                <div className="skill-item">Query Optimization</div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Certifications</h3>
              <div className="skills-list">
                <div className="skill-item">Data Science (IBM)</div>
                <div className="skill-item">IT Automation</div>
                <div className="skill-item">MTA - Python</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-subtitle">I'm always interested in hearing about new projects and opportunities.</p>
          <div className="contact-methods">
            <a href="mailto:abhisheku3u@gmail.com" className="contact-card email">
              <span className="contact-icon">✉️</span>
              <h3>Email</h3>
              <p>abhisheku3u@gmail.com</p>
            </a>
            <a href="tel:+918296604013" className="contact-card phone">
              <span className="contact-icon">📱</span>
              <h3>Phone</h3>
              <p>+91 8296604013</p>
            </a>
            <div className="contact-card social">
              <span className="contact-icon">🔗</span>
              <h3>Social</h3>
              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Abhishek K. All rights reserved. Built with React & passion.</p>
      </footer>
    </div>
  )
}

export default App
