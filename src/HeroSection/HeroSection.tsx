import React from "react"; // rafce

export const HeroSection: React.FC = () => {
  return (
    // Add return statement
    <div className="hero-section mt-2">
      <div className="container mx-auto align-items-center row d-flex justify-content-between">
        <div className="text col-12 col-md-6">
          <div className="text-1 mt-2">WELCOME TO DOCTORCARE👋</div>
          <div className="text-2 mt-2">Simplified healthcare for all</div>
          <div className="text-3 mt-2">
            DoctorCare doctors go beyond symptoms to treat the root cause of
            your illness and provide long-term healing.
          </div>
          <div className="d-flex my-2">
            <a
              href="#"
              className="btn button border mx-auto mx-md-0 border-2 ram"
              role="button"
              aria-disabled="true"
            >
              <i className="bi bi-whatsapp mx-2"></i>
              Schedule appointment
            </a>
          </div>
        </div>
        <div className="col-12 col-md-5 img-fluid">
          <img
            className="img-1"
            src="images/image.svg"
            alt="background image"
          />
        </div>
      </div>
    </div>
  );
};
