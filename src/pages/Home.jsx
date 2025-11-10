import { motion } from "framer-motion";
import { FaBookOpen, FaLaptopCode, FaUsers } from "react-icons/fa";
import Lottie from "react-lottie-player";
import studyAnimation from "../assets/abc.json"; // 👈 Lottie animation (download karo)
import "./home.css";
import Typewriter from "../components/Typewriter";


function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
<section className="hero">
  {/* Left Text Content */}
  <div className="hero-text">
    <motion.h1
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>
  <Typewriter text="Explore the World of Coding with BRIGHTCODER" loop />
</motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      Unleash the power of Coding. Upgrade your productivity as a fresher in Bright Coder.
    </motion.p>
    <motion.a
      href="/tutorial"
      className="btn-cta"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      Start Learning
    </motion.a>
  </div>

  {/* Right Animation */}
  <motion.div
    className="hero-animation"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <Lottie
      loop
      animationData={studyAnimation}
      play
      style={{ width: 400, height: 400 }}
    />
  </motion.div>
</section>



      {/* Features Section */}
      <section className="features">
        <motion.div
          className="feature-card"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <FaBookOpen size={40} />
          <h3>Interactive Tutorials</h3>
          <p>Step-by-step guides with real-world coding examples.</p>
        </motion.div>

        <motion.div
          className="feature-card"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FaLaptopCode size={40} />
          <h3>Hands-on Practice</h3>
          <p>Code editor integration to test your skills instantly.</p>
        </motion.div>

        <motion.div
          className="feature-card"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <FaUsers size={40} />
          <h3>Community Support</h3>
          <p>Join learners & experts to grow together.</p>
        </motion.div>
      </section>

      {/* Blog Section */}
      <section className="blog-preview">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Latest Blogs ✍️
        </motion.h2>
        <div className="blog-cards">
          <motion.div
            className="blog-card"
            whileHover={{ scale: 1.05 }}
          >
            <h4>Mastering JavaScript</h4>
            <p>Learn the quirks of JavaScript with practical examples.</p>
            <a href="/blog">Read More →</a>
          </motion.div>

          <motion.div
            className="blog-card"
            whileHover={{ scale: 1.05 }}
          >
            <h4>React Made Easy</h4>
            <p>A beginner’s guide to React fundamentals.</p>
            <a href="/blog">Read More →</a>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        className="cta"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Ready to Boost Your Skills?</h2>
        <a href="/register" className="btn-cta">Join Now</a>
      </motion.section>
    </div>
  );
}

export default Home;
