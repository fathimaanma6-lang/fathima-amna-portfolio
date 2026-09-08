```tsx
"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    "Manual Testing",
    "Test Case Design",
    "Bug Reporting",
    "API Testing",
    "SQL Testing",
    "Postman",
    "Selenium",
    "Playwright",
  ];

  const projects = [
    {
      title: "Bus On My Way",
      description:
        "A Smart Bus Management and Online Booking System developed as a university group project using Laravel, PHP, MySQL and Bootstrap.",
      tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    },
    {
      title: "Secure Student ID Card System",
      description:
        "A proposed secure digital student identification system designed to improve student identity management using modern web technologies and security practices.",
      tags: ["React", "Node.js", "MySQL", "AWS Security"],
    },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            Amna<span>.</span>
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a href="#journey" onClick={() => setMenuOpen(false)}>
              QA Journey
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">ASPIRING QUALITY ASSURANCE ENGINEER</p>

            <h1>
              Fathima
              <br />
              <span>Amna</span>
            </h1>

            <p className="hero-description">
              BA ICT undergraduate at South Eastern University of Sri Lanka,
              passionate about Software Quality Assurance, Software Testing,
              automation, and building reliable web applications.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button primary">
                View My Projects
              </a>

              <a
                href="https://github.com/fathimaanma6-lang"
                target="_blank"
                rel="noopener noreferrer"
                className="button secondary"
              >
                GitHub
              </a>
            </div>

            <div className="hero-status">
              <span className="status-dot"></span>
              Open to QA internship opportunities
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="section-container">
            <p className="section-label">01 — ABOUT ME</p>

            <h2>Building my career in Software Quality Assurance.</h2>

            <div className="about-grid">
              <div>
                <p className="large-text">
                  I am a third-year BA Information and Communication Technology
                  undergraduate at South Eastern University of Sri Lanka,
                  Faculty of Arts and Culture.
                </p>
              </div>

              <div>
                <p>
                  I am passionate about Quality Assurance and Software Testing,
                  with a strong interest in ensuring that software is reliable,
                  secure, functional and user-friendly.
                </p>

                <p>
                  My current learning journey focuses on manual testing, test
                  case design, defect reporting, API testing, SQL testing and
                  test automation.
                </p>

                <p>
                  I am continuously improving my technical and problem-solving
                  skills through academic projects, practical testing exercises
                  and independent learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section section-dark">
          <div className="section-container">
            <p className="section-label">02 — QA SKILLS</p>

            <h2>Testing Skills & Tools</h2>

            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-card" key={skill}>
                  <span>✓</span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="section-container">
            <p className="section-label">03 — PROJECTS</p>

            <h2>Academic & Technical Projects</h2>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-number">PROJECT</div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* QA JOURNEY */}
        <section id="journey" className="section section-dark">
          <div className="section-container">
            <p className="section-label">04 — QA JOURNEY</p>

            <h2>Learning. Testing. Improving.</h2>

            <div className="journey-grid">
              <div>
                <strong>01</strong>
                <h3>Manual Testing</h3>
                <p>
                  Learning SDLC, STLC, test scenarios, test cases, test
                  execution and defect reporting.
                </p>
              </div>

              <div>
                <strong>02</strong>
                <h3>API Testing</h3>
                <p>
                  Developing practical API testing skills and learning to
                  validate requests and responses using Postman.
                </p>
              </div>

              <div>
                <strong>03</strong>
                <h3>SQL Testing</h3>
                <p>
                  Building database testing knowledge using SQL and MySQL to
                  validate data and application behaviour.
                </p>
              </div>

              <div>
                <strong>04</strong>
                <h3>Test Automation</h3>
                <p>
                  Developing knowledge of browser automation and modern testing
                  frameworks including Selenium and Playwright.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact-section">
          <div className="section-container contact-content">
            <p className="section-label">05 — CONTACT</p>

            <h2>Let's connect.</h2>

            <p>
              I am interested in QA internships, junior opportunities and
              opportunities where I can apply my testing knowledge, learn from
              experienced professionals and contribute to building quality
              software.
            </p>

            <div className="contact-links">
              <a href="mailto:fathimaamnaamanullah@gmail.com">
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/fathima-amna"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/fathimaanma6-lang"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>© {new Date().getFullYear()} Fathima Amna</div>
        <div>BA ICT Undergraduate • Aspiring QA Engineer</div>
      </footer>

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: #080b12;
          color: #f4f7fb;
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          background: rgba(8, 11, 18, 0.95);
          border-bottom: 1px solid #1c2432;
          backdrop-filter: blur(12px);
        }

        .nav-container {
          max-width: 1180px;
          margin: auto;
          padding: 20px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 25px;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .logo span {
          color: #55b7ff;
        }

        .nav-links {
          display: flex;
          gap: 28px;
          color: #aab4c5;
          font-size: 14px;
        }

        .nav-links a:hover {
          color: #ffffff;
        }

        .menu-button {
          display: none;
          background: transparent;
          border: 0;
          color: white;
          font-size: 25px;
          cursor: pointer;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 140px 28px 90px;
          background:
            radial-gradient(
              circle at 80% 20%,
              rgba(46, 139, 230, 0.18),
              transparent 35%
            ),
            #080b12;
        }

        .hero-content {
          max-width: 1180px;
          width: 100%;
          margin: auto;
        }

        .eyebrow,
        .section-label {
          color: #55b7ff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 22px;
        }

        h1 {
          font-size: clamp(60px, 10vw, 120px);
          line-height: 0.94;
          letter-spacing: -5px;
          margin-bottom: 32px;
        }

        h1 span {
          color: #55b7ff;
        }

        .hero-description {
          max-width: 720px;
          color: #aab4c5;
          font-size: 19px;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          gap: 14px;
          margin-top: 38px;
        }

        .button {
          padding: 14px 22px;
          border-radius: 7px;
          font-weight: 700;
          font-size: 14px;
          transition: 0.2s ease;
        }

        .button:hover {
          transform: translateY(-2px);
        }

        .primary {
          background: #55b7ff;
          color: #06101b;
        }

        .secondary {
          border: 1px solid #344154;
          color: white;
        }

        .hero-status {
          margin-top: 55px;
          color: #778399;
          font-size: 13px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #55b7ff;
          border-radius: 50%;
          display: inline-block;
          margin-right: 9px;
        }

        .section {
          padding: 110px 28px;
          border-top: 1px solid #1c2432;
          background: #0b0f17;
        }

        .section-dark {
          background: #080b12;
        }

        .section-container {
          max-width: 1180px;
          margin: auto;
        }

        h2 {
          max-width: 850px;
          font-size: clamp(38px, 6vw, 70px);
          line-height: 1;
          letter-spacing: -3px;
          margin-bottom: 60px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
        }

        .about-grid p {
          color: #aab4c5;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .large-text {
          font-size: 27px;
          color: white;
          line-height: 1.4;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .skill-card {
          border: 1px solid #222d3d;
          padding: 25px;
          color: #c9d2df;
          background: #0d121c;
        }

        .skill-card span {
          color: #55b7ff;
          margin-right: 10px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .project-card {
          border: 1px solid #253043;
          padding: 35px;
          background: #0d121c;
          min-height: 300px;
          transition: 0.2s ease;
        }

        .project-card:hover {
          transform: translateY(-4px);
          border-color: #55b7ff;
        }

        .project-number {
          color: #55b7ff;
          font-size: 11px;
          letter-spacing: 2px;
          margin-bottom: 45px;
        }

        .project-card h3 {
          font-size: 30px;
          margin-bottom: 18px;
        }

        .project-card p {
          color: #9da8b9;
          line-height: 1.7;
          margin-bottom: 28px;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tags span {
          border: 1px solid #303c4f;
          color: #9da8b9;
          padding: 7px 10px;
          border-radius: 4px;
          font-size: 12px;
        }

        .journey-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .journey-grid strong {
          color: #55b7ff;
          font-size: 14px;
        }

        .journey-grid h3 {
          margin: 20px 0 12px;
          font-size: 20px;
        }

        .journey-grid p {
          color: #8f9bad;
          line-height: 1.7;
          font-size: 14px;
        }

        .contact-section {
          text-align: center;
        }

        .contact-content {
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .contact-content h2 {
          margin-bottom: 25px;
        }

        .contact-content > p {
          max-width: 650px;
          color: #9da8b9;
          line-height: 1.7;
        }

        .contact-links {
          display: flex;
          gap: 14px;
          margin-top: 35px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .contact-links a {
          border: 1px solid #344154;
          padding: 13px 20px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 700;
        }

        .contact-links a:hover {
          border-color: #55b7ff;
          color: #55b7ff;
        }

        footer {
          max-width: 1180px;
          margin: auto;
          padding: 28px;
          display: flex;
          justify-content: space-between;
          color: #667287;
          font-size: 12px;
          border-top: 1px solid #1c2432;
          background: #080b12;
        }

        @media (max-width: 900px) {
          .nav-links {
            gap: 18px;
          }

          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .journey-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 800px) {
          .menu-button {
            display: block;
          }

          .nav-links {
            display: none;
            position: absolute;
            top: 69px;
            left: 0;
            width: 100%;
            padding: 25px 28px;
            flex-direction: column;
            gap: 20px;
            background: #080b12;
            border-bottom: 1px solid #1c2432;
          }

          .nav-links.open {
            display: flex;
          }

          .about-grid,
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          h1 {
            letter-spacing: -3px;
          }
        }

        @media (max-width: 500px) {
          .hero {
            padding-left: 20px;
            padding-right: 20px;
          }

          .section {
            padding: 80px 20px;
          }

          .skills-grid,
          .journey-grid {
            grid-template-columns: 1fr;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .button {
            text-align: center;
          }

          footer {
            padding: 25px 20px;
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </>
  );
}
```
