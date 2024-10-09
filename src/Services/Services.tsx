import React from "react"; // rafce

export const Services: React.FC = () => {
  return (
    <>
      <div className="section-2" id="services">
        <div className="head-text d-flex justify-content-center">SERVICES</div>
        <div className="title d-flex justify-content-center mt-2">
          How can we help you feel better?
        </div>
        <div className="card-section">
          <div className="services pb-5">
            <div className="container">
              <div className="pt-5">
                <h2 className="vc_custom_heading ico_header"></h2>

                <div className="row khushal gap-3">
                  <div className="col-md-3">
                    <div className="investor-box">
                      <i className="bi bi-check-circle-fill"></i>

                      <h2 className="mt-2">Digestive problems</h2>
                      <p>
                        They are very soft and don't leave anywhere there is any
                        pain. He would like to provide services for his family.
                      </p>
                      <div className="flip-view">
                        <a href="#">
                          Read More{" "}
                          <i className="fas fa-chevron-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="investor-box">
                      <i className="bi bi-check-circle-fill"></i>
                      <h2 className="mt-2">Hormonal Health</h2>
                      <p>
                        They are very soft and don't leave anywhere there is any
                        pain. He would like to provide services for his family.
                      </p>
                      <div className="flip-view">
                        <a href="#">
                          Read More{" "}
                          <i className="fas fa-chevron-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="investor-box">
                      <i className="bi bi-check-circle-fill"></i>
                      <h2 className="mt-2">Mental well-being</h2>
                      <p>
                        They are very soft and don't leave anywhere there is any
                        pain. He would like to provide services for his family.
                      </p>
                      <div className="flip-view">
                        <a href="#">
                          Read More{" "}
                          <i className="fas fa-chevron-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* next boxs */}
                  <div className="col-md-3">
                    <div className="investor-box">
                      <i className="bi bi-check-circle-fill"></i>
                      <h2 className="mt-2">Pediatric Care</h2>
                      <p>
                        They are very soft and don't leave anywhere there is any
                        pain. He would like to provide services for his family.
                      </p>
                      <div className="flip-view">
                        <a href="#">
                          Read More{" "}
                          <i className="fas fa-chevron-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 pb-2">
                    <div className="investor-box">
                      <i className="bi bi-check-circle-fill"></i>
                      <h2 className="mt-2 ">Autoimmune & Inflammation</h2>
                      <p>
                        They are very soft and don't leave anywhere there is any
                        pain. He would like to provide services for his family.
                      </p>
                      <div className="flip-view">
                        <a href="#">
                          Read More{" "}
                          <i className="fas fa-chevron-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="investor-box">
                      <i className="bi bi-check-circle-fill"></i>
                      <h2 className="mt-2">Heart Health</h2>
                      <p>
                        They are very soft and don't leave anywhere there is any
                        pain. He would like to provide services for his family.
                      </p>
                      <div className="flip-view">
                        <a href="#">
                          Read More{" "}
                          <i className="fas fa-chevron-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
