import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.section
      className="page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-header">
        <h1>My Projects</h1>
        <p>
          Here are selected projects that highlight my experience in UX design,
          front-end development, and web applications.
        </p>
      </div>

      <div className="projects-grid">
        <div className="card">
          <div className="project-img">🌿</div>

          <div className="card-content">
            <h3>HerBalance App</h3>
            <p>
              A wellness mobile app prototype focused on cycle tracking,
              fitness, nutrition, recipes, and self-care support.
            </p>

            <a
              href="https://www.figma.com/proto/3LM6FuiYA0P2YeYsxk3z81/Her-Balance-Prototype?node-id=104-110&p=f&viewport=-90%2C256%2C0.16&t=Hw8Npk0EJm4hcA6e-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=104%3A110&page-id=104%3A109"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Prototype
            </a>
          </div>
        </div>

        <div className="card">
          <div className="project-img">💪</div>

          <div className="card-content">
            <h3>Exercise Tracker</h3>
            <p>
              A React.js fitness tracker that allows users to monitor workout
              repetitions and timed exercises.
            </p>

            <a
              href="https://marivirv.github.io/exercise-tracker/"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Website
            </a>
          </div>
        </div>

        <div className="card">
          <div className="project-img">💻</div>

          <div className="card-content">
            <h3>Review Dashboard System</h3>
            <p>
              A PHP/MySQL login and review management system featuring user
              authentication, admin access, and database integration.
            </p>

            <a
              href="https://students.gaim.ucf.edu/~ma107498/dig3134c/assignments/assignment04/login.php"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;