import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate(); // Hook for navigation
  const location = useLocation(); // Hook to get current location

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    // You can use the location here if needed
    console.log("Current location:", location.pathname);
    // For example, navigate to another route or perform some action
    navigate("/Module1");
  };

  return (
    <div className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav
        className={`navbar container-fluid navbar-expand-lg ${
          isScrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            Doctor<b>Care</b>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <ScrollLink
                  to="services"
                  className="nav-link"
                  smooth={true}
                  duration={100}
                  offset={-50}
                >
                  Start
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="aboutUs"
                  className="nav-link"
                  smooth={true}
                  duration={100}
                  offset={-50}
                >
                  On
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="appointment"
                  className="nav-link"
                  smooth={true}
                  duration={100}
                  offset={-50}
                >
                  Services
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="footer"
                  className="nav-link"
                  smooth={true}
                  duration={100}
                  offset={-50}
                >
                  Testimonials
                </ScrollLink>
              </li>
            </ul>
          </div>

          <button
            className="btn d-none d-lg-block Agendar"
            onClick={handleButtonClick}
            id="navbarNav1"
          >
            Schedule appointment
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
