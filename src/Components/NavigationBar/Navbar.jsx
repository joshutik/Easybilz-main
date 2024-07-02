// import { useEffect } from 'react'
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  // useEffect(() => {
  //   const bootstrap = require('bootstrap');
  //   const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  //     target: '#navbar-example'
  //   });
  // }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top nav py-3">
        <div className="container">
          <Link to={"/homepage"}>
            <img
              src={logo1}
              alt="EasyBilz-logo"
              width="100"
              className="img-fluid"
            />
          </Link>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#aboutUs"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#services">
                  What we do
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="d-inline-flex flex-wrap">
              <Link
                to="/login"
                className="btn btn-login border border-dark rounded-pill px-5 mx-2"
                type="submit"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-register border border-dark rounded-pill px-5 mx-2 bg-light"
                type="submit"
              >
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
