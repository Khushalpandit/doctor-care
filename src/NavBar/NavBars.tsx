import React from "react";
import { Link } from "react-scroll";

export const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="header-2">
        <nav className=".navbar-header navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Doctor<b>Care</b>
            </a>

            <button
              className="navbar-toggler-header-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <a
                href="D:\React\doctorcare\src\Module\Module1.tsx"
                className="navbar-toggler-icon-header-2"
              >
                <span className="navbar-toggler-icon-header-2"></span>
              </a>
            </button>

            <div className="collapse navbar-collapse-header-2" id="navbarNav">
              <ul className="navbar-nav-2">
                <li className="nav-item-2">
                  <Link
                    to="services"
                    className="nav-link "
                    smooth={true}
                    duration={100}
                    offset={-50}
                  >
                    Início
                  </Link>
                </li>
                <li className="nav-item-2">
                  <Link
                    to="aboutUs"
                    className="nav-link "
                    smooth={true}
                    duration={100}
                    offset={-50}
                  >
                    Sobre
                  </Link>
                </li>
                <li className="nav-item-2">
                  <Link
                    to="appointment"
                    className="nav-link "
                    smooth={true}
                    duration={100}
                    offset={-50}
                  >
                    Serviços
                  </Link>
                </li>
                <li className="nav-item-2">
                  <Link
                    to="footer"
                    className="nav-link "
                    smooth={true}
                    duration={100}
                    offset={-50}
                    aria-disabled="true"
                  >
                    Depoimentos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
};
