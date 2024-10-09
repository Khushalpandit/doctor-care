import React from "react";

export const Footer: React.FC = () => {
  return (
    <div className="footer pb-5" id="footer">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-md-auto  mt-5">
            <a className="logo" href="#">
              <img src="images/logo.png" alt="logo" />
            </a>
            <div className="f-text">
              <p>©2022 - DoctorCare.</p>
              <p>All rights reserved.</p>
            </div>
          </div>
          <div className="col-12 col-md-auto f-icons d-flex justify-content-center justify-content-md-end">
            <div className="insta mx-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ff bi-instagram"></i>
              </a>
            </div>
            <div className="facebook mx-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ff bi-facebook"></i>
              </a>
            </div>
            <div className="youtube mx-2">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ff bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
