import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          {/* Use Link from react-router-dom for navigation */}
          <NavLink to="/Module1" className="navbar-brand"></NavLink>

          <div className="collapse navbar-collapse navbarNav" id="navbarNav">
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
              <li className="d-lg-none">
                <NavLink
                  to="/Module1"
                  className="btn Agendar navbarNav"
                  role="button"
                  id="navbarNav1"
                  aria-disabled="true"
                >
                  Schedule appointment
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            to="/Module1"
            className="btn d-none d-lg-block Agendar navbarNav"
            role="button"
            id="navbarNav1"
            aria-disabled="true"
          >
            Schedule appointment
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
