import { useState, useEffect, useRef  } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import InvestCard from '../InvestCard/InvestCard';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // About Us dropdown
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

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


  
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top nav py-3">
        <div className="container">
          <Link to="/homepage">
            <img src={logo1} alt="EasyBilz-logo" width="100" className="img-fluid" />
          </Link>

          <button className="navbar-toggler bg-light" type="button" onClick={handleNavToggle}>
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent"> */}
          <div ref={dropdownRef} className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

              {/* ABOUT US DROPDOWN */}
              <li className={`nav-item dropdown ${isAboutDropdownOpen ? 'show' : ''}`}>
                <button
                  className="nav-link dropdown-toggle text-light bg-transparent border-0"
                  onClick={toggleAboutDropdown}
                >
                  About Us
                </button>
                <ul className={`dropdown-menu ${isAboutDropdownOpen ? 'show' : ''}`}>
                  <li>
                    <ScrollLink className="dropdown-item" to="whoWeAre" smooth duration={500} onClick={handleLinkClick}>
                      Who We Are
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink className="dropdown-item" to="mission" smooth duration={500} onClick={handleLinkClick}>
                      Our Mission
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink className="dropdown-item" to="team" smooth duration={500} onClick={handleLinkClick}>
                      Meet the Team
                    </ScrollLink>
                  </li>
                </ul>
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
                         <InvestCard/>
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

              {/* Contact Us */}
              <li className="nav-item">
                <ScrollLink
                  className="nav-link text-light"
                  to="contact"
                  smooth
                  duration={500}
                  onClick={handleLinkClick}
                >
                  Contact Us
                </ScrollLink>
              </li>

              {/* E-banking */}
              <li className="nav-item">
                <ScrollLink
                  className="nav-link text-light"
                  to="ebanking"
                  smooth
                  duration={500}
                  onClick={handleLinkClick}
                >
                  E-banking
                </ScrollLink>
              </li>
            </ul>

            <div className="d-inline-flex flex-wrap">
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
