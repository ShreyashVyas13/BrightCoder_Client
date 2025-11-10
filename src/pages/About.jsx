import "./about.css";

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About LearnHub</h1>
        <p>
          At LearnHub, we make coding magical. We simplify learning with
          tutorials, blogs, and examples — so you can learn, build, and grow
          with confidence.
        </p>
      </section>

      {/* Mission & Vision (Timeline style) */}
      <section className="timeline">
        <div className="timeline-item left">
          <div className="content glass">
            <h2>🚀 Our Mission</h2>
            <p>
              To empower students and professionals by providing high-quality
              resources. Our goal is to make coding fun, visual, and accessible
              to everyone.
            </p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="content glass">
            <h2>🌌 Our Vision</h2>
            <p>
              To create a global galaxy of learners where coding knowledge is
              limitless, free-flowing, and shared across borders.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values">
        <h2>✨ Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card glass">
            <h3>💡 Innovation</h3>
            <p>We experiment, evolve, and bring fresh ways of learning.</p>
          </div>
          <div className="value-card glass">
            <h3>🤝 Collaboration</h3>
            <p>A strong community where everyone learns and grows together.</p>
          </div>
          <div className="value-card glass">
            <h3>🌱 Growth</h3>
            <p>Helping you turn small steps into big leaps in your career.</p>
          </div>
          <div className="value-card glass">
            <h3>📚 Simplicity</h3>
            <p>Breaking down complex ideas into fun, simple learning paths.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
