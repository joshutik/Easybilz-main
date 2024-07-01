import { useState, useEffect } from "react";
import "./LoginAcount.css";
import topPattern from "../assets/upPattern.png";
import bottomPattern from "../assets/Patterns.png";
import logo from "../assets/Logo.png";
import thumbs from "../assets/ThumbsUp.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [firstName, setName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('firstName');
    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <div className="container-fluid">
      <form>
        <div className="row align-items-center min-vh-100 register-bg position-relative">
          <div className="container-fluid col-md-6 col-sm-12">
            <div className="container text-light mt-5">
              <div className="position-absolute top-0 bottom-0 mt-4 ms-auto ms-lg-5">
                <Link to={'/'} className="">
                  <img
                    src={logo}
                    alt="EasyBilz"
                    width="170"
                    height="100"
                    className="img-fluid"
                  />
                </Link>
              </div>
              <p className="fs-3 px-4 pt-5 mt-5">
                Freedom starts with financial security. Grow yours today.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 px-0">
            <div className="tp-pattern">
              <img src={topPattern} alt="top pattern" className="img-fluid" />
            </div>
            <div className="container my-5">
              <Link to={'/reg-payment'} className="ms-5 text-decoration-none">
                <i className="bi bi-chevron-left"></i> Go back
              </Link>
            </div>
            <h2 className="fw-bold text-center">Register</h2>
            <div className="w-75 mx-auto">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="container text-center">
                    <div className="img">
                      <img
                        src={thumbs}
                        alt="Thumbs up"
                        className="img-fluid text-center"
                      />
                    </div>
                    <p>
                      Thank you {firstName} and welcome to the Easybillz family. Get
                      ready to manage your money with ease! Check your inbox for a confirmation message and your
                      account details.
                    </p>
                  </div>
                  <div className="container my-5 text-center">
                    <Link to={'/login-account'}
                      type="submit"
                      className="bg btn btn-primary border-0 login-btn rounded-5 px-5 fw-bold register-btn"
                    >
                      Login to account
                    </Link>
                  </div>
                </div>
              </div>
              <div className="partarn position-absolute bottom-0 start-50 translate-middle-x">
                <img
                  src={bottomPattern}
                  alt="bottom pattern"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
