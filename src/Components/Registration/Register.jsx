
import { useState } from "react";
// import './RegPayment.css'
import topPattern from "../assets/upPattern.png";
import bottomPattern from "../assets/Patterns.png";
import logo from "../assets/Logo.png";
import { TailSpin } from "react-loader-spinner";
import {Link, useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [otherNames, setOtherNames] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const apiHostname = import.meta.env.VITE_API_HOSTNAME || 'https://easybilz-api.onrender.com';
  // const apiHostname = import.meta.env.VITE_API_HOSTNAME || 'http://127.0.0.1:9090';


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      //const response = await fetch('https://dummyjson.com/users/add', {
        const response = await fetch(`${apiHostname}/user/create/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          otherNames,
          middleName,
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error details:', errorData);
        throw new Error('Registration failed');
      }

      const data = await response.json();
      console.log('Registration successful:', data);
      navigate('/reg-payment');

      // Redirect or update state to show user is registered
    } catch (err) {
      setError('Registration  . Please try again.');
      console.error('Registration error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit}>
        <div className="row align-items-center min-vh-100 register-bg position-relative">
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
                Freedom starts with financial security. Grow yours today.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 px-0">
            <div className="tp-pattern">
              <img src={topPattern} alt="top pattern" className="img-fluid" />
            </div>
            <div className="container my-5">
              <p className="ms-5">Hello there😊,</p>
            </div>
            <h2 className="fw-bold text-center">Register</h2>
            <div className="w-75 mx-auto">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="form-group my-lg-4">
                    <label htmlFor="fname">First Name</label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-5 my-2"
                      id="fname"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="form-group my-lg-4 my-3">
                    <label htmlFor="onames">Other Names</label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-5 my-2"
                      id="onames"
                      value={otherNames}
                      onChange={(e) => setOtherNames(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="form-group my-lg-4 my-3">
                    <label htmlFor="mname">Middle Name</label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-5 my-2"
                      id="mname"
                      value={middleName}
                      onChange={(e) => setMiddleName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-group my-3">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control border-dark rounded-5 my-3"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control border-dark rounded-5 my-4"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  className="form-control border-dark rounded-5 my-4"
                  id="confirm-password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="container mt-5 text-center">
                <button
                  type="submit"
                  className="bg btn btn-primary border-0 login-btn rounded-5 px-5 fw-bold register-btn"
                  disabled={loading}
                >
                  {loading ? <TailSpin color="#fff" height={24} width={24} /> : "Continue"}
                </button>
              </div>
              <div className="container">
                {error && <div className="alert alert-danger">{error}</div>}
              </div>
              <div className="text-center">
                <p className="mt-lg-5 mt-md-3 mb-5 pb-3">
                  Already have an account? That&apos;s nice. 
                  <Link to={'/login'} className="register fw-bold ms-1">
                    Login
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
  );
};

export default Register;


// import { useState } from 'react';
// import './PersonalDetails.css';
// import Register from '../LoginAccount/LoginAcount';

// const Register = ({ onNext }) => {
//   const [firstName, setFirstName] = useState("");
//   const [otherNames, setOtherNames] = useState("");
//   const [middleName, setMiddleName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }
//     onNext();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="fname">First Name</label>
//         <input
//           type="text"
//           className="form-control"
//           id="fname"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="onames">Other Names</label>
//         <input
//           type="text"
//           className="form-control"
//           id="onames"
//           value={otherNames}
//           onChange={(e) => setOtherNames(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="mname">Middle Name</label>
//         <input
//           type="text"
//           className="form-control"
//           id="mname"
//           value={middleName}
//           onChange={(e) => setMiddleName(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email">Email address</label>
//         <input
//           type="email"
//           className="form-control"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           className="form-control"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="confirm-password">Confirm Password</label>
//         <input
//           type="password"
//           className="form-control"
//           id="confirm-password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//         />
//       </div>
//       {error && <div className="alert alert-danger">{error}</div>}
//       <button type="submit" className="btn btn-primary">Next</button>
//     </form>
//   );
// };

// export default Register;