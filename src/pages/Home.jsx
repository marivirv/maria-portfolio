import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.section
      className="page hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-text">
        <h1>
          Hi, I’m <span>Maria Rios</span>
        </h1>

        <p>
          I am a Digital Media student focused on UX design, web design,
          branding, and creating meaningful digital experiences.
        </p>

        <div className="btn-group">
          <Link to="/projects" className="btn">
            View My Work
          </Link>

          <Link to="/contact" className="secondary-btn">
            Contact Me
          </Link>
        </div>
      </div>

      <div className="hero-card">
        <h3>Portfolio Focus</h3>
        <p>UX/UI Design</p>
        <p>Front-End Development</p>
        <p>Creative Branding</p>
        <p>Responsive Web Design</p>
      </div>
    </motion.section>
  );
}

export default Home;