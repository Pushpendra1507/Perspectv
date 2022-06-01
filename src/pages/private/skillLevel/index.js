import React from 'react'
import brand from '../../../assets/images/logo-icon-blk.png'
import { useNavigate } from "react-router-dom";
function RoleStepFive() {
  const navigation = useNavigate()
  return (
    <section id="job-role-steps">
      <div className="discover-personality-top-cnt">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <img src = {brand} alt ='brand'/>
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
                {/* <!-- progressbar --> */}
             
                <fieldset>
                  <div className="form-card">
                    <h3>
                      What job level best suits your skills, abilities etc?
                    </h3>

                    <div className="role-wrapper">
                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio37" name="radio" type="radio" />
                          <label for="radio37">Graduate</label>
                        </div>
                      </div>
                      {/* <!--role-col--> */}

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio38" name="radio" type="radio" />
                          <label for="radio38">Internship</label>
                        </div>
                      </div>
                      {/* <!--role-col--> */}

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio39" name="radio" type="radio" />
                          <label for="radio39">Entry Level</label>
                        </div>
                      </div>
                      {/* <!--role-col--> */}

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio40" name="radio" type="radio" />
                          <label for="radio40">Junior (1-2 years)</label>
                        </div>
                      </div>
                      {/* <!--role-col--> */}

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio41" name="radio" type="radio" />
                          <label for="radio41">Mid level (3-5 years)</label>
                        </div>
                      </div>
                      {/* <!--role-col--> */}

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio42" name="radio" type="radio" />
                          <label for="radio42">Senior (5-8 years)</label>
                        </div>
                      </div>
                      {/* <!--role-col--> */}

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio43" name="radio" type="radio" />
                          <label for="radio43">Expert</label>
                        </div>
                      </div>
                      {/* <!--role-col--> */}
                    </div>
                    {/* <!--role-wrapper--> */}

                    <div className="enter-job-role">
                      <h5>Don’t see a level you looking for?</h5>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Type your job role here..."
                        required=""
                      />
                    </div>
                  </div>
                  {/* <!--form-card--> */}

                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    value=""
                    onClick={() => navigation('/location')}
                  />
                  <div className="row">
                    <div className="col-12">
                      <h2 className="steps">Question 5/8</h2>
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
  )
}

export default RoleStepFive
