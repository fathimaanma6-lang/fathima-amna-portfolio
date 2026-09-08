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
        "A Smart Bus Management and Online Booking System developed with Laravel, PHP and MySQL.",
      tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    },
    {
      title: "Secure Student ID Card System",
      description:
        "A proposed secure digital student identification system using modern web technologies and security practices.",
      tags: ["React", "Node.js", "MySQL", "Security"],
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

          <div
            className={menuOpen ? "nav-links open" : "nav-links"}
          >
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
            <p className="eyebrow">
              ASPIRING QUALITY ASSURANCE ENGINEER
            </p>

            <h1>
              Hi, I&apos;m <span>Fathima Amna</span>
            </h1>

            <h2>Building Quality Into Every Application.</h2>

            <p className="hero-text">
              BA ICT undergraduate at South Eastern University of Sri Lanka,
              passionate about Software Quality Assurance, Software Testing,
              automation, and building reliable web applications.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                View My Projects
              </a>

              <a href="#contact" className="btn secondary">
                Contact Me
              </a>
            </div>

            <div className="availability">
              <span className="status-dot"></span>
              Open to QA internship opportunities
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="section-container">
            <p className="section-label">ABOUT ME</p>

            <h2 className="section-title">
              Passionate About Software Quality
            </h2>

            <div className="about-grid">
              <div>
                <p>
                  I&apos;m a third-year BA Information and Communication
                  Technology undergraduate at the South Eastern University of
                  Sri Lanka, Faculty of Arts and Culture.
                </p>

                <p>
                  My career goal is to become a Quality Assurance Engineer. I
                  am developing practical skills in manual testing, test case
                  design, defect reporting, API testing, SQL testing and test
                  automation.
                </p>

                <p>
                  I enjoy understanding how applications work, identifying
                  defects, improving reliability and ensuring a better
                  experience for users.
                </p>
              </div>

              <div className="about-card">
                <div className="card-icon">QA</div>

                <h3>Quality First</h3>

                <p>
                  My goal is to help create reliable, secure and user-friendly
                  software through effective testing and continuous learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section section-dark">
          <div className="section-container">
            <p className="section-label">QA SKILLS</p>

            <h2 className="section-title">
              Testing &amp; Technology
            </h2>

            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-card" key={skill}>
                  <span className="skill-check">✓</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>

            <div className="journey">
              <h3>My QA Learning Journey</h3>

              <div className="journey-grid">
                <div className="journey-item">
                  <strong>01</strong>
                  <span>Manual Testing</span>
                </div>

                <div className="journey-item">
                  <strong>02</strong>
                  <span>API Testing</span>
                </div>

                <div className="journey-item">
                  <strong>03</strong>
                  <span>SQL Testing</span>
                </div>

                <div className="journey-item">
                  <strong>04</strong>
                  <span>Test Automation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="section-container">
            <p className="section-label">PROJECTS</p>

            <h2 className="section-title">
              Projects &amp; Experience
            </h2>

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

        {/* CURRENT FOCUS */}
        <section className="section section-dark">
          <div className="section-container">
            <p className="section-label">CURRENT FOCUS</p>

            <h2 className="section-title">
              Continuously Learning
            </h2>

            <div className="focus-grid">
              <div className="focus-card">
                <div className="focus-number">01</div>
                <h3>ISTQB</h3>
                <p>
                  Studying the ISTQB Certified Tester Foundation Level
                  syllabus.
                </p>
              </div>

              <div className="focus-card">
                <div className="focus-number">02</div>
                <h3>API Testing</h3>
                <p>
                  Developing practical API testing skills using Postman.
                </p>
              </div>

              <div className="focus-card">
                <div className="focus-number">03</div>
                <h3>Automation</h3>
                <p>
                  Exploring Selenium, Playwright and modern automation
                  practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact-section">
          <div className="section-container contact-container">
            <p className="section-label">CONTACT</p>

            <h2 className="section-title">
              Let&apos;s Connect
            </h2>

            <p className="contact-text">
              I&apos;m open to QA internships, junior opportunities and
              collaborations. If you are looking for a motivated ICT
              undergraduate passionate about software quality, let&apos;s
              connect.
            </p>

            <div className="contact-buttons">
              <a
                href="mailto:fathimaamnaamanullah@gmail.com"
                className="btn primary"
              >
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/fathima-amna"
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/fathimaanma6-lang"
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>
          © {new Date().getFullYear()} Fathima Amna. Built with Next.js.
        </p>
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
          line-height: 1.6;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(8, 11, 18, 0.94);
          border-bottom: 1px solid #202633;
          backdrop-filter: blur(12px);
        }

        .nav-container {
          max-width: 1150px;
          margin: 0 auto;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 26px;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .logo span {
          color: #55b7ff;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-links a {
          color: #aeb8c7;
          font-size: 14px;
          font-weight: 600;
          transition: 0.2s ease;
        }

        .nav-links a:hover {
          color: #55b7ff;
        }

        .menu-button {
          display: none;
          border: 0;
          background: transparent;
          color: #ffffff;
          font-size: 28px;
          cursor: pointer;
        }

        .hero {
          min-height: 88vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: rgba(45, 151, 255, 0.08);
          filter: blur(80px);
          top: 80px;
          right: 5%;
        }

        .hero-content {
          max-width: 1150px;
          width: 100%;
          margin: 0 auto;
          padding: 100px 24px;
          position: relative;
          z-index: 1;
        }

        .eyebrow,
        .section-label {
          color: #55b7ff;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 3px;
          margin-bottom: 18px;
        }

        .hero h1 {
          font-size: clamp(44px, 7vw, 82px);
          line-height: 1.05;
          letter-spacing: -3px;
          max-width: 900px;
        }

        .hero h1 span {
          color: #55b7ff;
        }

        .hero h2 {
          margin-top: 22px;
          font-size: clamp(24px, 4vw, 40px);
          color: #d8e0eb;
          font-weight: 600;
        }

        .hero-text {
          max-width: 700px;
          margin-top: 24px;
          color: #9da8b8;
          font-size: 17px;
        }

        .hero-buttons,
        .contact-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 34px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 13px 22px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 14px;
          transition: 0.2s ease;
        }

        .btn.primary {
          background: #55b7ff;
          color: #07101a;
        }

        .btn.primary:hover {
          transform: translateY(-2px);
        }

        .btn.secondary {
          border: 1px solid #354052;
          color: #dce5f0;
        }

        .btn.secondary:hover {
          border-color: #55b7ff;
          color: #55b7ff;
        }

        .availability {
          margin-top: 30px;
          color: #9da8b8;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .status-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #52d273;
          display: inline-block;
          box-shadow: 0 0 12px rgba(82, 210, 115, 0.6);
        }

        .section {
          padding: 100px 24px;
          background: #080b12;
        }

        .section-dark {
          background: #0d111a;
          border-top: 1px solid #161d29;
          border-bottom: 1px solid #161d29;
        }

        .section-container {
          max-width: 1150px;
          margin: 0 auto;
        }

        .section-title {
          font-size: clamp(32px, 5vw, 52px);
          line-height: 1.1;
          letter-spacing: -1.5px;
          margin-bottom: 45px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .about-grid p {
          color: #aeb8c7;
          font-size: 16px;
          margin-bottom: 20px;
        }

        .about-card {
          border: 1px solid #293242;
          background: #10151f;
          border-radius: 14px;
          padding: 30px;
        }

        .card-icon {
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(85, 183, 255, 0.1);
          border: 1px solid #55b7ff;
          color: #55b7ff;
          border-radius: 10px;
          font-weight: 800;
          margin-bottom: 22px;
        }

        .about-card h3 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .about-card p {
          margin: 0;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .skill-card {
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #293242;
          background: #10151f;
          padding: 18px;
          border-radius: 10px;
          color: #d9e2ed;
          font-size: 14px;
          font-weight: 600;
        }

        .skill-check {
          color: #55b7ff;
          font-weight: 900;
        }

        .journey {
          margin-top: 65px;
        }

        .journey h3 {
          font-size: 24px;
          margin-bottom: 25px;
        }

        .journey-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .journey-item {
          padding: 25px;
          border-left: 2px solid #55b7ff;
          background: #10151f;
        }

        .journey-item strong {
          display: block;
          color: #55b7ff;
          font-size: 13px;
          margin-bottom: 8px;
        }

        .journey-item span {
          color: #dbe4ef;
          font-weight: 700;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
        }

        .project-card {
          border: 1px solid #293242;
          background: #10151f;
          border-radius: 14px;
          padding: 32px;
          transition: 0.25s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: #55b7ff;
        }

        .project-number {
          color: #55b7ff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 15px;
        }

        .project-card h3 {
          font-size: 28px;
          margin-bottom: 14px;
        }

        .project-card p {
          color: #aeb8c7;
          margin-bottom: 24px;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tags span {
          padding: 7px 10px;
          background: #19202c;
          border: 1px solid #303b4d;
          border-radius: 6px;
          color: #bcd1e5;
          font-size: 12px;
        }

        .focus-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .focus-card {
          border: 1px solid #293242;
          background: #10151f;
          padding: 30px;
          border-radius: 12px;
        }

        .focus-number {
          color: #55b7ff;
          font-size: 14px;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .focus-card h3 {
          font-size: 23px;
          margin-bottom: 10px;
        }

        .focus-card p {
          color: #aeb8c7;
          font-size: 14px;
        }

        .contact-section {
          text-align: center;
        }

        .contact-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-text {
          max-width: 700px;
          color: #aeb8c7;
          font-size: 16px;
        }

        .contact-buttons {
          justify-content: center;
        }

        footer {
          border-top: 1px solid #202633;
          padding: 25px 24px;
          text-align: center;
          color: #718096;
          font-size: 13px;
          background: #080b12;
        }

        @media (max-width: 800px) {
          .menu-button {
            display: block;
          }

          .nav-links {
            display: none;
            position: absolute;
            top: 67px;
            left: 0;
            right: 0;
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
            background: #0d111a;
            border-bottom: 1px solid #293242;
          }

          .nav-links.open {
            display: flex;
          }

          .nav-links a {
            width: 100%;
            padding: 16px 24px;
            border-top: 1px solid #202633;
          }

          .hero-content {
            padding: 80px 24px;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .journey-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .focus-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 500px) {
          .skills-grid,
          .journey-grid {
            grid-template-columns: 1fr;
          }

          .hero h1 {
            letter-spacing: -2px;
          }

          .section {
            padding: 75px 20px;
          }
        }
      `}</style>
    </>
  );
}
