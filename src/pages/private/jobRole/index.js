import React from "react";
import { useNavigate } from "react-router-dom";
import brand from "../../../assets/images/logo-icon-blk.png";

function JobRole() {
  const navigation = useNavigate()
  return (
    <section id="job-role-steps">
      <div className="discover-personality-top-cnt">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <img src={brand} alt="brand" />
            </div>
          </div>
        </div>
      </div>
      {/* <!--discover-personality-top-cnt--> */}

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="card">
              <form id="msform">
                <fieldset>
                  <div className="form-card">
                    <h3>What kind of role(s) are you looking for?</h3>
                    <div className="role-wrapper">
                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio1" name="radio" type="radio" />
                          <label for="radio1">Administration</label>
                        </div>
                      </div>

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio2" name="radio" type="radio" />
                          <label for="radio2">Design</label>
                        </div>
                      </div>

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio3" name="radio" type="radio" />
                          <label for="radio3">Legal</label>
                        </div>
                      </div>

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio4" name="radio" type="radio" />
                          <label for="radio4">Marketing</label>
                        </div>
                      </div>

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio5" name="radio" type="radio" />
                          <label for="radio5">Sales</label>
                        </div>
                      </div>

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio6" name="radio" type="radio" />
                          <label for="radio6">Engineering</label>
                        </div>
                      </div>

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio7" name="radio" type="radio" />
                          <label for="radio7">Finance</label>
                        </div>
                      </div>

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio8" name="radio" type="radio" />
                          <label for="radio8">Development</label>
                        </div>
                      </div>

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio9" name="radio" type="radio" />
                          <label for="radio9">People</label>
                        </div>
                      </div>
                    </div>

                    <div className="enter-job-role">
                      <h5>Don’t see a job role you looking for?</h5>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Type your job role here..."
                      />
                    </div>
                  </div>

                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    value=""
                    onClick={() => navigation('/jobTitle')}
                  />
                  <div className="row">
                    <div className="col-12">
                      <h2 className="steps">Question 1/8</h2>
                    </div>
                  </div>
                </fieldset>
              </form>

              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </section>
  );
}

export default JobRole;
