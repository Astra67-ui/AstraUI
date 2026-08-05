import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/listdesign.css';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav>
      <Link className="nav-brand" to="/" onClick={() => navigate('/')}>
        <span className="nav-name">LPB</span>
      </Link>
      <ul className="nav-links">
        <li>
          <Link
            to="/resume"
            className={location.pathname === '/resume' ? 'active' : ''}
          >
            Resume
          </Link>
        </li>
        <li className="nav-sep"></li>
        <li>
          <Link
            to="/projects"
            className={location.pathname === '/projects' ? 'active' : ''}
          >
            Projects
          </Link>
        </li>
        <li className="nav-sep"></li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
