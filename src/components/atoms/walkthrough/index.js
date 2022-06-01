import React from "react";

function Walkthrough() {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      // tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="card">
              <form id="msform">
                <fieldset className="login-pop-step-1">
                  <div className="form-card">
                    <div className="login-pop-cnt">
                      <img
                        className="img-fluid"
                        src="images/login-popup-img-1.png"
                      />
                      <h3>We look beyond your skills and experience</h3>
                      <p>
                        Your personality is what makes you special and unique.
                        Knowing what personality type you are helps us identify
                        the ideal job andwork environment for you.
                      </p>
                    </div>
                  </div>
                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    value=""
                  />
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Skip
                  </button>
                </fieldset>

                <fieldset className="login-pop-step-2">
                  <div className="form-card">
                    <div className="login-pop-cnt">
                      <img
                        className="img-fluid"
                        src="images/login-popup-img-2.png"
                      />
                      <h3>Get direct access for faster esults</h3>
                      <p>
                        When Perspectv identifies strong matches, it’ll connect
                        &amp; introduce you directly to those Job Posters.
                      </p>
                    </div>
                  </div>

                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    value=""
                  />

                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Skip
                  </button>
                </fieldset>

                <fieldset className="login-pop-step-3">
                  <div className="form-card">
                    <div className="login-pop-cnt">
                      <img
                        className="img-fluid"
                        src="images/login-popup-img-3.png"
                      />
                      <h3>Find your perfect job with Perspectv</h3>
                      <p>
                        Our sophisticated algorithm uses your unique profile,
                        skills, experience and personality traits to find the
                        perfect jobs for you
                      </p>
                    </div>
                  </div>
                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    value=""
                  />

                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Skip
                  </button>
                </fieldset>
                <fieldset className="login-pop-step-4">
                  <div className="form-card">
                    <div className="login-pop-cnt">
                      <img
                        className="img-fluid"
                        src="images/login-popup-img-4.png"
                      />
                      <br />
                      <br />
                      <p>
                        Complete your profile, define what you’re looking for
                        and Perspectv will get to work and start finding you
                        suitable matches quickly.
                      </p>
                    </div>
                  </div>
                  <button className="next action-button">Next</button>
                  <br />
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Skip
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Walkthrough;
