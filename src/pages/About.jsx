import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-header">
        <h1>About Me</h1>
        <p>
          I enjoy combining creativity and technology to design digital
          experiences that are clean, useful, and visually engaging.
        </p>
      </div>

      <div className="about-grid">
        <div className="info-card">
          <h2>My Background</h2>
          <p>
            I am a Digital Media student at UCF with an interest in UX design,
            front-end development, branding, and web design.
          </p>
        </div>

        <div className="info-card">
          <h2>Skills</h2>
          <div className="skills-list">
            <span>React.js</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Figma</span>
            <span>UX Design</span>
            <span>UI Design</span>
            <span>Canva</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;