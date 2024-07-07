
// // export default MembershipNavbar;
// import { useState, useEffect } from 'react';
// import "./AccountNav.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import logo1 from "../assets/Logo.png";
// import userpng from "../assets/user.png";
// import { Link } from "react-router-dom";

// const MembershipNavbar = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [userName, setUserName] = useState('');

//   useEffect(() => {
//     // Retrieve the user's first name from localStorage
//     const firstName = localStorage.getItem('firstName');
//     if (firstName) {
//       setUserName(firstName);
//     }
//   }, []);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

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
//           </div>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <div className="text-lg-end position-relative">
//               <div className="container ms-0 d-flex align-items-center px-sm-0">
//                 <img
//                   src={userpng}
//                   alt="avatar"
//                   className="img-fluid avatar ms-lg-auto"
//                 />
//                 <div className="d-block text-light px-1">
//                   <span className="d-block main-name py-0 fw-bold text-center px-0">{userName}</span>
//                   <span className="d-block text-small me-2 m-0 text-center">Active member</span>
//                 </div>
//                 <i
//                   className="bi bi-chevron-down fw-bold ms-0"
//                   onClick={toggleDropdown}
//                   style={{ cursor: 'pointer' }}
//                 ></i>
//               </div>
//               {showDropdown && (
//                 <div className="dropdown-menu dropdown-menu-end show rounded-4 text-center">
//                   <Link className="dropdown-item my-2 fw-bold text-center" to="/profile"><i className="bi bi-person-circle"> </i>My Account</Link>
//                   <Link className="dropdown-item text-danger fw-bold" to="/logout"><i className="bi bi-box-arrow-left"> </i>Logout</Link>
//                 </div>
//               )}
//             </div>
//           </div>
        
//       </nav>
//     </div>
//   );
// };

// export default MembershipNavbar;


import { useState, useEffect } from 'react';
import "./AccountNav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo1 from "../assets/Logo.png";
import userpng from "../assets/user.png";
import { Link } from "react-router-dom";

const MembershipNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Retrieve the user's first name and last name from localStorage
    const firstName = localStorage.getItem('firstName');
    const middleName = localStorage.getItem('middleName');
    if (firstName && middleName) {
      setUserName(`${firstName} ${middleName}`);
    } else if (firstName) {
      setUserName(firstName);
    } else if (middleName) {
      setUserName(middleName);
    }
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top nav py-3">
        <div className="container">
          <Link to={"/membership-page"}>
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
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="text-lg-end position-relative">
            <div className="container ms-0 d-flex align-items-center px-sm-0">
              <img
                src={userpng}
                alt="avatar"
                className="img-fluid avatar ms-lg-auto"
              />
              <div className="d-block text-light px-1">
                <span className="d-block main-name py-0 fw-bold text-center px-0">{userName}</span>
                <span className="d-block text-small me-2 m-0 text-center">Active member</span>
              </div>
              <i
                className="bi bi-chevron-down fw-bold ms-0"
                onClick={toggleDropdown}
                style={{ cursor: 'pointer' }}
              ></i>
            </div>
            {showDropdown && (
              <div className="dropdown-menu dropdown-menu-end show rounded-4 text-center">
                <Link className="dropdown-item my-2 fw-bold text-center" to="/profile"><i className="bi bi-person-circle"> </i>My Account</Link>
                <Link className="dropdown-item text-danger fw-bold" to="/logout"><i className="bi bi-box-arrow-left"> </i>Logout</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MembershipNavbar;