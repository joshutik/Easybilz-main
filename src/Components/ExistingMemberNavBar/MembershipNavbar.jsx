import { useState, useEffect, useRef } from 'react';
import "./MembershipNavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo1 from "../assets/Logo.png";
import userpng from "../assets/user.png";
import { Link } from "react-router-dom";

const MembershipNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [userName, setUserName] = useState('');

    // Our Services dropdown
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  
  // Nested dropdowns inside Our Services
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

   const dropdownRef = useRef(null);
  
    const handleNavToggle = () => setIsNavOpen(!isNavOpen);
  
  
    const handleLinkClick = () => {
      setIsNavOpen(false);
      setIsAboutDropdownOpen(false);
      setIsServicesDropdownOpen(false);
      setActiveSubDropdown(null);
    };
  
    const toggleAboutDropdown = () => {
      setIsAboutDropdownOpen(!isAboutDropdownOpen);
      setIsServicesDropdownOpen(false);
    };
  
    const toggleServicesDropdown = () => {
      setIsServicesDropdownOpen(!isServicesDropdownOpen);
      setIsAboutDropdownOpen(false);
    };
  
    
  
    const toggleSubDropdown = (dropdownName) => {
      setActiveSubDropdown(activeSubDropdown === dropdownName ? null : dropdownName);
    };
  
      // ✅ Close dropdown when clicking outside

  useEffect(() => {
    // Retrieve the user's first name from localStorage
    const firstName = localStorage.getItem('firstName');
    if (firstName) {
      setUserName(firstName);
    }

        const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsAboutDropdownOpen(false);
          setIsServicesDropdownOpen(false);
          setActiveSubDropdown(null);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
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
              {/* OUR SERVICES DROPDOWN */}
              <li className={`nav-item dropdown ${isServicesDropdownOpen ? 'show' : ''}`}>
                <button
                  className="nav-link dropdown-toggle text-light bg-transparent border-0"
                  onClick={toggleServicesDropdown}
                >
                  Our Services
                </button>

                <ul className={`dropdown-menu ${isServicesDropdownOpen ? 'show' : ''}`}>
                  {/* Sub-dropdown: Invest with us */}
                  <li className={`dropdown-submenu ${activeSubDropdown === 'invest' ? 'show' : ''}`}>
                    <button className="dropdown-item dropdown-toggle" onClick={() => toggleSubDropdown('invest')}>
                      Invest with Us
                    </button>
                    <ul className={`dropdown-menu ${activeSubDropdown === 'invest' ? 'show' : ''}`}>
                      <li>
                        <ScrollLink
                          className="dropdown-item"
                          to="investmentPlans"
                          smooth
                          duration={500}
                          onClick={handleLinkClick}
                        >
                          <InvestCard />
                        </ScrollLink>
                      </li>

                    </ul>
                  </li>

                  {/* Sub-dropdown: subscription */}
                  <li className={`dropdown-submenu ${activeSubDropdown === 'grow' ? 'show' : ''}`}>
                    <button className="dropdown-item dropdown-toggle" onClick={() => toggleSubDropdown('grow')}>
                      Easybillz subscription
                    </button>
                    <ul className={`dropdown-menu ${activeSubDropdown === 'grow' ? 'show' : ''}`}>
                      {/* <p>
                                      Never Miss a Payment Again. Simplify your life with Stress-Free Bill Automation. Choose the recurring fees you want us to pay automatically.
                                  </p> */}
                      <li>
                        <ScrollLink
                          className="dropdown-item"
                          to="loanProcess"
                          smooth
                          duration={500}
                          onClick={handleLinkClick}
                        >
                          Cable TV
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          className="dropdown-item"
                          to="loanProcess"
                          smooth
                          duration={500}
                          onClick={handleLinkClick}
                        >
                          Electricity Bills
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          className="dropdown-item"
                          to="loanProcess"
                          smooth
                          duration={500}
                          onClick={handleLinkClick}
                        >
                          Shop for the house
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          className="dropdown-item"
                          to="eligibility"
                          smooth
                          duration={500}
                          onClick={handleLinkClick}
                        >
                          Office materials and equipments
                        </ScrollLink>
                      </li>
                    </ul>
                  </li>
                  {/* Sub-dropdown: Grow Your Business */}
                  <li className={`dropdown-submenu ${activeSubDropdown === 'grow' ? 'show' : ''}`}>
                    <button className="dropdown-item dropdown-toggle" onClick={() => toggleSubDropdown('grow')}>
                      Grow Your Business (SME Loans)
                    </button>
                    <ul className={`dropdown-menu ${activeSubDropdown === 'grow' ? 'show' : ''}`}>
                      <li>
                        <ScrollLink
                          className="dropdown-item"
                          to="loanProcess"
                          smooth
                          duration={500}
                          onClick={handleLinkClick}
                        >
                          Loan Process
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          className="dropdown-item"
                          to="eligibility"
                          smooth
                          duration={500}
                          onClick={handleLinkClick}
                        >
                          Eligibility Criteria
                        </ScrollLink>
                      </li>
                    </ul>
                  </li>

                  {/* Sub-dropdown: Partner with Us */}
                  <li className={`dropdown-submenu ${activeSubDropdown === 'partner' ? 'show' : ''}`}>
                    <button className="dropdown-item dropdown-toggle" onClick={() => toggleSubDropdown('partner')}>
                      Partner with Us (Easybillz Guilder)
                    </button>
                    <ul className={`dropdown-menu ${activeSubDropdown === 'partner' ? 'show' : ''}`}>
                      <li>
                        <ScrollLink
                          className="dropdown-item"
                          to="affiliate"
                          smooth
                          duration={500}
                          onClick={handleLinkClick}
                        >
                          Become an Affiliate
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          className="dropdown-item"
                          to="benefits"
                          smooth
                          duration={500}
                          onClick={handleLinkClick}
                        >
                          Partner Benefits
                        </ScrollLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#contact">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#contact">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#contact">
                  Forms
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
                  <span className="d-block main-name py-0 fw-bold text-center">{userName}</span>
                  <span className="d-block text-small me-2 m-0">Active member</span>
                </div>
                <i
                  className="bi bi-chevron-down fw-bold ms-0"
                  onClick={toggleDropdown}
                  style={{ cursor: 'pointer' }}
                ></i>
              </div>
              {showDropdown && (
                <div className="dropdown-menu dropdown-menu-end show rounded-4">
                  <Link className="dropdown-item  my-2 fw-bold" to="/profile"><i className="bi bi-person-circle"> </i>My Account</Link>
                  <Link className="dropdown-item text-danger fw-bold log" to="/logout"><i className="bi bi-box-arrow-left"> </i>Logout</Link>
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


