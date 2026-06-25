import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="badge">
          🚀 Learn • Build • Grow
        </span>

        <h1>
          Master Future Skills
          <br />
          with <span>SkillPath</span>
        </h1>

        <p>
          Unlock your career with industry-ready courses,
          expert mentors, hands-on projects and certification.
        </p>

        <div className="hero-buttons">

          <button className="btn-primary">
            Get Started
          </button>

          <button className="btn-secondary">
            Explore Courses
          </button>

        </div>

      </div>

      <div className="hero-card">

        <div className="glass-card">

          <h2>📚 500+</h2>

          <p>Courses Available</p>

        </div>

        <div className="glass-card">

          <h2>👨🎓 25K+</h2>

          <p>Students</p>

        </div>

        <div className="glass-card">

          <h2>⭐ 4.9</h2>

          <p>Average Rating</p>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;
