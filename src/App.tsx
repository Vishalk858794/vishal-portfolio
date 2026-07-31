
function App() { 
  
  return (
    <div className="app">

      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          Vishal<span>.</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Hire Me
        </a>
      </header>

      {/* Hero */}
      
     <section id="home" className="hero">
  <div className="hero-content">

    <p className="hero-small">HELLO, I'M</p>

    <h1>
      Vishal <span>Kumar</span>
    </h1>

    <h2>Motion Graphics Designer & Video Editor</h2>

    <p className="hero-description">
      I create engaging motion graphics, cinematic video edits,
      logo animations, promotional videos and creative digital
      experiences.
    </p>

    <div className="hero-buttons">
      <a href="#portfolio" className="primary-button">
        View Portfolio
      </a>
<a
  href="/Vishal-Kumar-Resume.pdf"
  download
  className="secondary-button"
>
  Download CV
</a>
      <a href="#contact" className="secondary-button">
        Hire Me
      </a>
    </div>

    <div className="social-links">
      <a
        href="https://www.behance.net/gallery/236738799/Motion-Graphic-Designer"
        target="_blank"
        rel="noreferrer"
      >
        Behance
      </a>

      <a
        href="https://www.linkedin.com/in/vishal-kumar-1b3162199/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>

      <a
        href="YOUR-YOUTUBE-LINK"
        target="_blank"
        rel="noreferrer"
      >
        YouTube
      </a>
    </div>

  </div>

  <div className="hero-visual">
    <div className="glow-circle"></div>

    <div className="profile-card">
      <img src="/vishal.png" alt="Vishal Kumar" />
    </div>
  </div>
</section>

      {/* About */}
      <section id="about" className="section">
        <p className="section-label">ABOUT ME</p>

        <h2 className="section-title">
          Turning Ideas Into <span>Visual Stories</span>
        </h2>

        <p className="section-text">
          I am a Motion Graphics Designer and Video Editor focused on
          creating engaging visual content, animations and modern video
          experiences for brands and digital platforms.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <p className="section-label">MY SKILLS</p>

        <h2 className="section-title">
          Tools & <span>Expertise</span>
        </h2>

        <div className="skills-grid">
          <div className="skill-card">Adobe After Effects</div>
          <div className="skill-card">Adobe Premiere Pro</div>
          <div className="skill-card">Photoshop</div>
          <div className="skill-card">Illustrator</div>
          <div className="skill-card">Motion Graphics</div>
          <div className="skill-card">Video Editing</div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <p className="section-label">EXPERIENCE</p>

        <h2 className="section-title">
          My <span>Journey</span>
        </h2>

        <div className="experience-card">
          <h3>Motion Graphics Designer</h3>
          <p>
            Creating animations, motion graphics and creative visual
            content for digital platforms.
          </p>
        </div>

        <div className="experience-card">
          <h3>Video Editor</h3>
          <p>
            Editing promotional videos, social media content and
            digital videos.
          </p>
        </div>
      </section>

    {/* Portfolio */}
<section id="portfolio" className="section portfolio-section">

  <p className="section-label">MY WORK</p>

  <h2 className="section-title">
    Featured <span>Projects</span>
  </h2>

  <p className="portfolio-intro">
    A selection of motion graphics, video editing and visual
    content created for digital platforms and brands.
  </p>

  <div className="portfolio-grid">

    {/* Project 1 */}
    <div className="portfolio-card">
      <div className="portfolio-media">
        <video muted loop playsInline controls>
          <source src="/videos/project1.mp4" type="video/mp4" />
        </video>

        <div className="project-overlay">
          <span>01</span>
          <a
            href="https://www.behance.net/gallery/236738799/Motion-Graphic-Designer"
            target="_blank"
            rel="noreferrer"
          >
            View Project →
          </a>
        </div>
      </div>

      <div className="portfolio-info">
        <h3>Creative Motion Design</h3>
        <p>
          Motion graphics and visual animation created for digital
          content and promotional media.
        </p>
      </div>
    </div>

    {/* Project 2 */}
    <div className="portfolio-card">
      <div className="portfolio-media">
        <video muted loop playsInline controls>
          <source src="/videos/project2.mp4" type="video/mp4" />
        </video>

        <div className="project-overlay">
          <span>02</span>
          <a
            href="https://www.behance.net/gallery/236738799/Motion-Graphic-Designer"
            target="_blank"
            rel="noreferrer"
          >
            View Project →
          </a>
        </div>
      </div>

      <div className="portfolio-info">
        <h3>Cinematic Video Edit</h3>
        <p>
          Professional video editing with cinematic pacing,
          transitions and visual storytelling.
        </p>
      </div>
    </div>

    {/* Project 3 */}
    <div className="portfolio-card">
      <div className="portfolio-media">
        <video muted loop playsInline controls>
          <source src="/videos/project3.mp4" type="video/mp4" />
        </video>

        <div className="project-overlay">
          <span>03</span>
          <a
            href="https://www.behance.net/gallery/236738799/Motion-Graphic-Designer"
            target="_blank"
            rel="noreferrer"
          >
            View Project →
          </a>
        </div>
      </div>

      <div className="portfolio-info">
        <h3>Brand Animation</h3>
        <p>
          Modern brand animation and visual identity motion design.
        </p>
      </div>
    </div>

    {/* Project 4 */}
    <div className="portfolio-card">
      <div className="portfolio-media">
        <video muted loop playsInline controls>
          <source src="/videos/project4.mp4" type="video/mp4" />
        </video>

        <div className="project-overlay">
          <span>04</span>
          <a
            href="https://www.behance.net/gallery/236738799/Motion-Graphic-Designer"
            target="_blank"
            rel="noreferrer"
          >
            View Project →
          </a>
        </div>
      </div>

      <div className="portfolio-info">
        <h3>Digital Content</h3>
        <p>
          Creative short-form content designed for social media
          and digital platforms.
        </p>
      </div>
    </div>

    {/* Project 5 */}
    <div className="portfolio-card">
      <div className="portfolio-media">
        <video muted loop playsInline controls>
          <source src="/videos/project5.mp4" type="video/mp4" />
        </video>

        <div className="project-overlay">
          <span>05</span>
          <a
            href="https://www.behance.net/gallery/236738799/Motion-Graphic-Designer"
            target="_blank"
            rel="noreferrer"
          >
            View Project →
          </a>
        </div>
      </div>

      <div className="portfolio-info">
        <h3>Creative Visual Project</h3>
        <p>
          Creative motion and visual content created for digital platforms.
        </p>
      </div>
    </div>

    {/* Project 6 */}
    <div className="portfolio-card">
      <div className="portfolio-media">
        <video muted loop playsInline controls>
          <source src="/videos/project6.mp4" type="video/mp4" />
        </video>

        <div className="project-overlay">
          <span>06</span>
          <a
            href="https://www.behance.net/gallery/236738799/Motion-Graphic-Designer"
            target="_blank"
            rel="noreferrer"
          >
            View Project →
          </a>
        </div>
      </div>

      <div className="portfolio-info">
        <h3>Digital Motion Project</h3>
        <p>
          Modern visual content and animation for digital media.
        </p>
      </div>
    </div>

  </div>

</section>

      {/* Contact */}
<section id="contact" className="section contact-section">

  <p className="section-label">GET IN TOUCH</p>

  <h2 className="section-title">
    Let's Create Something <span>Great</span>
  </h2>

  <p className="contact-text">
    Have a project, collaboration or job opportunity?
    Let's connect and create something amazing together.
  </p>

  <div className="contact-links">

    <a href="mailto:vishalk2401@gmail.com">
      📧 Email
    </a>

    <a
      href="https://www.linkedin.com/in/vishal-kumar-1b3162199/"
      target="_blank"
      rel="noreferrer"
    >
      💼 LinkedIn
    </a>

    <a
      href="https://www.behance.net/gallery/236738799/Motion-Graphic-Designer"
      target="_blank"
      rel="noreferrer"
    >
      🎨 Behance
    </a>

    <a
      href="YOUR-YOUTUBE-LINK"
      target="_blank"
      rel="noreferrer"
    >
      ▶ YouTube
    </a>

    <a href="https://wa.me/8587940682" target="_blank" rel="noreferrer">
      💬 WhatsApp
    </a>

  </div>

  <a
    href="mailto:your-email@example.com"
    className="primary-button contact-button"
  >
    Send Message
  </a>

</section>

      {/* Footer */}
      <footer className="footer">

  <div className="footer-logo">
    Vishal<span>.</span>
  </div>

  <p>
    Motion Graphics Designer & Video Editor
  </p>

  <div className="footer-links">
    <a
      href="https://www.behance.net/gallery/236738799/Motion-Graphic-Designer"
      target="_blank"
      rel="noreferrer"
    >
      Behance
    </a>

    <a
      href="https://www.linkedin.com/in/vishal-kumar-1b3162199/"
      target="_blank"
      rel="noreferrer"
    >
      LinkedIn
    </a>

    <a href="#home">
      Back to Top
    </a>
  </div>

  <small>
    © 2026 Vishal Kumar. All Rights Reserved.
  </small>

</footer>

    </div>
  );
}

export default App;