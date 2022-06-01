import React from 'react'
import brand from '../../../assets/images/logo-icon-blk.png'
import { useNavigate } from "react-router-dom";
function RoleStepSeven() {
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
                    <h3>What size company best suits you?</h3>

                    <div className="role-wrapper">
                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio44" name="radio" type="radio" />
                          <label for="radio44">1-20 employees</label>
                        </div>
                      </div>
                      {/* <!--role-col--> */}

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio45" name="radio" type="radio" />
                          <label for="radio45">21-50 employees</label>
                        </div>
                      </div>
                      {/* <!--role-col--> */}

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio46" name="radio" type="radio" />
                          <label for="radio46">51-100 employees</label>
                        </div>
                      </div>
                      {/* <!--role-col--> */}

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio47" name="radio" type="radio" />
                          <label for="radio47">101-250 employees</label>
                        </div>
                      </div>
                      {/* <!--role-col--> */}

                      <div className="role-col">
                        <div className="inputGroup">
                          <input id="radio48" name="radio" type="radio" />
                          <label for="radio48">251+ employees</label>
                        </div>
                      </div>
                      {/* <!--role-col--> */}
                    </div>
                    {/* <!--role-wrapper--> */}
                  </div>
                  {/* <!--form-card--> */}

                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    value=""
                    onClick={() => navigation('/salary')}
                  />
                  <div className="row">
                    <div className="col-12">
                      <h2 className="steps">Question 7/8</h2>
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

export default RoleStepSeven
