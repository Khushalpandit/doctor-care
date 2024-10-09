import React from "react"; // rafce

export const Appointment: React.FC = () => {
  return (
    <div className="section-4 pt-3" id="appointment">
      <div className="container d-flex flex-column-reverse flex-md-row align-items-center justify-content-center gx-5">
        <div className="text col-12 col-md-6 mt-5 text-center text-md-start">
          <div className="text-1 mt-2">Get in touch with us!</div>

          <div className="text-last mt-2">
            <p>
              <i className="bi bi-geo-alt-fill mx-2"></i>R. Amauri Souza, 346
            </p>
            <p>
              <i className="bi bi-envelope mx-2"></i>contato@doctorcare.com
            </p>
          </div>
          <div className="mt-2">
            <a
              href="#"
              className="btn more border-2"
              role="button"
              aria-disabled="true"
            >
              <i className="bi bi-whatsapp mx-2"></i>
              Schedule appointment
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-2 text-center">
          <img
            className="img-man img-fluid"
            src="images/man.png"
            alt="background image"
          />
        </div>
      </div>
      <div className="pb-5"></div>
    </div>
  );
};
