import { useState } from "react";
import "./Login.css";
import topPattern from "../assets/upPattern.png";
import bottomPattern from "../assets/Patterns.png";
import logo from "../assets/Logo.png";
import { TailSpin } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";

const apiHostname = import.meta.env.VITE_API_HOSTNAME || 'https://easybilz-api.onrender.com';
// const apiHostname = import.meta.env.VITE_API_HOSTNAME || 'http://127.0.0.1:9090';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${apiHostname}/user/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, remember_me: rememberMe }),
      });

      if (!response.ok) {
        throw new Error("Authentication failed");
      }

      const data = await response.json();

      // Handle successful login, e.g., set user session/token
      // console.log("Login successful:", data);
      localStorage.setItem("authtoken", data.access_token);
      localStorage.setItem("user", data.user_id);
      localStorage.setItem("firstName", data.firstName);
      // localStorage.setItem("middleName", data.middleName);
      // localStorage.setItem("otherName", data.otherName);
      navigate("/membership-page");

     

    } catch (err) {
      setError("Invalid email or password. Please try again.");
      console.error("Login error:", err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <div className="container-fluid z-3">
        <form onSubmit={handleSubmit}>
          <div className="row align-items-center min-vh-100 login-bg position-relative">
            <div className="container-fluid col-md-6 col-sm-12">
              <div className="container text-light mt-5">
                <div className="position-absolute top-0 bottom-0 mt-4 ms-auto ms-lg-5">
                  <Link to={'/homepage'}>
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
                  Savings catch you when life throws challenges; wise
                  investments secure your family’s future. 🌟👨‍👩‍👧‍👦😊
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 px-0">
              <div className="tp-pattern">
                <img src={topPattern} alt="top pattern" className="img-fluid" />
              </div>
              <div className="container my-5">
                <p className="ms-5">Hi, welcome back</p>
              </div>

              <h2 className="fw-bold text-center">Login</h2>
              <div className="w-75 mx-auto">
                <div className="form-group my-4">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control rounded-5 my-2"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control rounded-5 my-2"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="container d-flex justify-content-between flex-wrap">
                  <div>
                    <input 
                      type="checkbox" 
                      checked={rememberMe} 
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span className="ms-2 rem">Remember me</span>
                  </div>
                  <div className="">
                    <a href="#" className="forgot">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="container mt-5 text-center">
                  <button
                    type="submit"
                    className="bg btn btn-primary border-0 login-btn rounded-5 px-5 fw-bold"
                  >
                    {loading ? (
                      <TailSpin color="#fff" height={24} width={24} />
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
                <div className="container">
                  {error && <div className="alert alert-danger">{error}</div>}
                </div>
                <div className="text-center">
                  <p className="mt-lg-5 mt-md-3 mb-5 pb-5">
                    Don&apos;t have an account? No worries.{" "}
                    <Link className="register fw-bold" to="/register">
                      Register now
                    </Link>
                  </p>
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
        </form>
      </div>
    </div>
  );
};

export default Login;
