import { useNavigate } from 'react-router-dom';
import '../styles/listdesign.css';
import photo from '../assets/hero.png';
import cover from '../assets/image.png';

function Home() {
  const navigate = useNavigate();

  function handleMouseOver(e) {
    e.target.src = cover;
  }

  function handleMouseOut(e) {
    e.target.src = photo;
  }

  return (
    <main>
      <div className="hero">
        <div className="hero-photo">
          <img
            src={photo}
            alt="Lucky Bautista"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </div>

        <div className="hero-right">
          <h1 className="name">
            Lucky
            <br />
            Pili
            <br />
            Bautista
          </h1>
          <p className="about-title">Full Stack Developer</p>
          <p className="about-text">
            Passionate developer with a strong foundation in both front-end and
            back-end technologies. Skilled in building responsive web
            applications, creating RESTful APIs, and connecting object-oriented
            backends to modern frontends. Eager to contribute to innovative
            projects and collaborate with cross-functional teams to deliver
            high-quality software solutions.
          </p>
          <div className="circles">
            <button
              className="circle c-resume"
              onClick={() => navigate('/resume')}
            >
              Resume
            </button>
            <button
              className="circle c-projects"
              onClick={() => navigate('/projects')}
            >
              Projects
            </button>
            <button
              className="circle c-contact"
              onClick={() => navigate('/contact')}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
