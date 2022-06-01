import React from 'react'
import brand from '../../../assets/images/logo-icon-blk.png'
import currency from '../../../assets/images/pound-icon.png'
import { useNavigate } from "react-router-dom";

function RoleStepEight() {
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
                  <h3>What employment length are you looking for?</h3>

                  <div className="role-wrapper skyblue-radio-btn">
                    <div className="role-col">
                      <div className="inputGroup">
                        <input id="radio49" name="radio" type="radio" />
                        <label for="radio49">Permanent</label>
                      </div>
                    </div>
                    {/* <!--role-col--> */}

                    <div className="role-col">
                      <div className="inputGroup">
                        <input id="radio50" name="radio" type="radio" />
                        <label for="radio50">Contract</label>
                      </div>
                    </div>
                    {/* <!--role-col--> */}

                    <div className="role-col">
                      <div className="inputGroup">
                        <input id="radio51" name="radio" type="radio" />
                        <label for="radio51">Freelance</label>
                      </div>
                    </div>
                    {/* <!--role-col--> */}

                    <div className="role-col">
                      <div className="inputGroup">
                        <input id="radio52" name="radio" type="radio" />
                        <label for="radio52">Junior (1-2 years)</label>
                      </div>
                    </div>
                    {/* <!--role-col--> */}
                  </div>
                  {/* <!--role-wrapper--> */}

                  <h3>What is the minimum you asking for?</h3>

                  <div className="role-wrapper">
                    <div className="role-col">
                      <div className="inputGroup">
                        <input id="radio53" name="radio" type="radio" />
                        <label for="radio53">Hourly Rate</label>
                      </div>
                    </div>
                    {/* <!--role-col--> */}

                    <div className="role-col">
                      <div className="inputGroup">
                        <input id="radio54" name="radio" type="radio" />
                        <label for="radio54">Monthly</label>
                      </div>
                    </div>
                    {/* <!--role-col--> */}

                    <div className="role-col">
                      <div className="inputGroup">
                        <input id="radio55" name="radio" type="radio" />
                        <label for="radio55">Annual</label>
                      </div>
                    </div>

                    <div className="range-slider">
                      <div className="slidecontainer">
                        <input
                          type="range"
                          min="1"
                          max="100"
                          value="50"
                          className="slider"
                          id="myRange"
                        />
                        <p>
                          <img src = {currency} alt = ''/>{" "}
                          <span id="demo">50</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!--role-wrapper--> */}
                </div>
                {/* <!--form-card--> */}

                <input
                  type="button"
                  name="next"
                  className="next action-button"
                  value=""
                  onClick={() => navigation('/roleStepComplete')}
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

export default RoleStepEight
