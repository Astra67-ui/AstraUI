import '../styles/projects.css';

function Projects() {
  return (
    <main>
      <h1 className="page-title">Projects</h1>

      <div className="projects-grid">
        <div className="project-card">
          <div className="project-thumb thumb-teal">👤</div>
          <div className="project-body">
            <div className="project-tags">
              <span className="project-tag">JavaScript</span>
              <span className="project-tag">CSS</span>
              <span className="project-tag">HTML</span>
              <span className="project-tag">Java</span>
            </div>
            <div className="project-name">
              LAMPARA User Account Management System
            </div>
            <p className="project-desc">
              A software application that enables users to securely create,
              manage, and maintain their accounts. It provides essential
              features such as user registration, login, profile management,
              password updates, and account administration while ensuring data
              security and controlled access.
            </p>
            <a
              className="project-link"
              href="https://user-account-management-system.vercel.app/"
              target="_blank"
              rel="noopener norefferer"
            >
              View project →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Projects;
