import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../assets/Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = () => {
    setIsNavOpen(false); // Close the navbar after clicking a link
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top nav py-3">
        <div className="container">
          <Link to="/homepage">
            <img src={logo1} alt="EasyBilz-logo" width="100" className="img-fluid" />
          </Link>
          <button
            className="navbar-toggler bg-light"
            type="button"
            onClick={handleNavToggle} // Toggle navbar visibility on click
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <ScrollLink
                  className="nav-link active text-light"
                  aria-current="page"
                  to="aboutUs"
                  smooth={true}
                  duration={500}
                  onClick={handleLinkClick} // Close navbar after link click
                >
                  About Us
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  className="nav-link text-light"
                  to="services"
                  smooth={true}
                  duration={500}
                  onClick={handleLinkClick} // Close navbar after link click
                >
                  What we do
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  className="nav-link text-light"
                  to="contact"
                  smooth={true}
                  duration={500}
                  onClick={handleLinkClick} // Close navbar after link click
                >
                  Contact Us
                </ScrollLink>
              </li>
            </ul>
            <div className="d-inline-flex flex-wrap">
              <Link to="/login" className="btn btn-login border border-dark rounded-pill px-5 mx-2" type="submit">
                Login
              </Link>
              <Link to="/register" className="btn btn-register border border-dark rounded-pill px-5 mx-2 bg-light" type="submit">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;