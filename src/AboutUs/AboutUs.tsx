import React from "react"; // rafce

export const AboutUS: React.FC = () => {
  return (
    <>
      <div className="section-3 pt-2 " id="aboutUs">
        <div className="container px-4 text-center">
          <div className="row flex-column-reverse flex-md-row gx-5">
            <div className="col-12 col-md-6">
              <div className="p-3 mt-5">
                <div className="img mt-4 ">
                  <img
                    src="images/doctor.png"
                    className="img-fluid"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-5">
              <div className="p-3">
                <div className="head-text">
                  <p>ABOUT US</p>
                </div>
                <div className="middle-text">
                  Understand who we are and why we exist
                </div>
                <div className="mt-3">
                  <p>
                    They are very soft and don't leave anywhere there is any
                    pain. He would like to provide services for his family. They
                    are very soft and don't leave anywhere there is any pain. He
                    would like to provide services for his family. They are very
                    soft and don't leave anywhere there is any pain. He would
                    like to provide services for his family. They are very soft
                    and don't leave anywhere there is any pain. He would like to
                    provide services for his family. They are very soft and
                    don't leave anywhere there is any pain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
