import React from 'react'
import brand from '../../../assets/images/logo-icon-blk.png'
import { useNavigate } from "react-router-dom";
function RoleStepFour() {
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
                    <h3>Select the level of education you have achieved</h3>

                    <div className="role-wrapper">
                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio28" name="radio" type="radio" />
                          <label for="radio28">Nothing formal</label>
                        </div>
                      </div>
                      {/* <!--role-col--> */}

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio29" name="radio" type="radio" />
                          <label for="radio29">High School</label>
                        </div>
                      </div>
                      {/* <!--role-col--> */}

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio30" name="radio" type="radio" />
                          <label for="radio30">Trade school</label>
                        </div>
                      </div>
                      {/* <!--role-col--> */}

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio31" name="radio" type="radio" />
                          <label for="radio31">Certificate</label>
                        </div>
                      </div>
                      {/* <!--role-col--> */}

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio32" name="radio" type="radio" />
                          <label for="radio32">Dilploma</label>
                        </div>
                      </div>
                      {/* <!--role-col--> */}

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio33" name="radio" type="radio" />
                          <label for="radio33">Batchelors Degree</label>
                        </div>
                      </div>
                      {/* <!--role-col--> */}

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio34" name="radio" type="radio" />
                          <label for="radio34">Masters Degree</label>
                        </div>
                      </div>
                      {/* <!--role-col--> */}

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio35" name="radio" type="radio" />
                          <label for="radio35">Doctorate</label>
                        </div>
                      </div>
                      {/* <!--role-col--> */}

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio36" name="radio" type="radio" />
                          <label for="radio36">Professional</label>
                        </div>
                      </div>
                      {/* <!--role-col--> */}
                    </div>
                    {/* <!--role-wrapper--> */}

                    <div className="enter-job-role">
                      <h5>Don’t see a level you achieved?</h5>
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
                    onClick={() => navigation('/skillLevel')}
                  />
                  <div className="row">
                    <div className="col-12">
                      <h2 className="steps">Question 4/8</h2>
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

export default RoleStepFour
