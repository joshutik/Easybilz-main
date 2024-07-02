// // import { useEffect } from 'react'
// import "./MembershipNavBar.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import logo1 from "../assets/Logo.png";
// import userpng from "../assets/user.png";
// import { Link } from "react-router-dom";

// const MembershipNavbar = () => {
//   // useEffect(() => {
//   //   const bootstrap = require('bootstrap');
//   //   const scrollSpy = new bootstrap.ScrollSpy(document.body, {
//   //     target: '#navbar-example'
//   //   });
//   // }, []);

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg fixed-top nav py-3">
//         <div className="container">
//           <Link to={"/homepage"}>
//             <img
//               src={logo1}
//               alt="EasyBilz-logo"
//               width="100"
//               className="img-fluid"
//             />
//           </Link>
//           <button
//             className="navbar-toggler bg-light"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a
//                   className="nav-link active text-light"
//                   aria-current="page"
//                   href="#aboutUs"
//                 >
//                   About Us
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link text-light" href="#services">
//                   What we do
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link text-light" href="#contact">
//                   Contact Us
//                 </a>
//               </li>
//             </ul>

//             <div className="text-lg-end w-50">
//               <div className="container  mx-0 d-flex">
//                 <img
//                   src={userpng}
//                   alt="avater"
//                   className="img-fluid avater ms-lg-auto"
//                 />
//                 <div className="d-block text-light">
//                   <span className="d-block">Sophia Bello</span>
//                   <span className="d-block text-small">Active member</span>
//                 </div>
//                 <a href="">
//                   <i className="bi bi-chevron-down text-light"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default MembershipNavbar;

import  { useState } from 'react';
import "./MembershipNavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo1 from "../assets/Logo.png";
import userpng from "../assets/user.png";
import { Link } from "react-router-dom";

const MembershipNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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

            <div className="text-lg-end w-50 position-relative">
              <div className="container mx-0 d-flex align-items-center px-sm-0">
                <img
                  src={userpng}
                  alt="avatar"
                  className="img-fluid avatar ms-lg-auto"
                />
                <div className="d-block text-light px-1">
                  <span className="d-block main-name py-0 fw-bold">Sophia Bello</span>
                  <span className="d-block text-small me-2 m-0">Active member</span>
                </div>
                <i
                  className="bi bi-chevron-down fw-bold ms-0"
                  onClick={toggleDropdown}
                  style={{ cursor: 'pointer' }}
                ></i>
              </div>
              {showDropdown && (
                <div className="dropdown-menu dropdown-menu-end show ">
                  <Link className="dropdown-item bg-secondary my-2 fw-bold" to="/profile"><i className="bi bi-person-circle"> </i>My Account</Link>
                  <Link className="dropdown-item bg-secondary fw-bold" to="/logout"><i className="bi bi-box-arrow-left"> </i>Logout</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MembershipNavbar;
