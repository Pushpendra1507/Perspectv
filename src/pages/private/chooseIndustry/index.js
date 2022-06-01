import React from 'react'
import brand from '../../../assets/images/logo-icon-blk.png'

import { useNavigate } from "react-router-dom";
function ChooseIndustry() {
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
                  <h3>What industry would you like to work in?</h3>

                  <div className="role-wrapper skyblue-radio-btn">
                    <div className="role-col">
                      <div className="inputGroup">
                        <input id="radio19" name="radio" type="radio" />
                        <label for="radio19">Fintech</label>
                      </div>
                    </div>
                    {/* <!--role-col--> */}

                    <div className="role-col">
                      <div className="inputGroup">
                        <input id="radio20" name="radio" type="radio" />
                        <label for="radio20">Healthcare</label>
                      </div>
                    </div>
                    {/* <!--role-col--> */}

                    <div className="role-col">
                      <div className="inputGroup">
                        <input id="radio21" name="radio" type="radio" />
                        <label for="radio21">Education</label>
                      </div>
                    </div>
                    {/* <!--role-col--> */}

                    <div className="role-col">
                      <div className="inputGroup">
                        <input id="radio22" name="radio" type="radio" />
                        <label for="radio22">Insurance</label>
                      </div>
                    </div>
                    {/* <!--role-col--> */}

                    <div className="role-col">
                      <div className="inputGroup">
                        <input id="radio23" name="radio" type="radio" />
                        <label for="radio23">Fashion</label>
                      </div>
                    </div>
                    {/* <!--role-col--> */}

                    <div className="role-col">
                      <div className="inputGroup">
                        <input id="radio24" name="radio" type="radio" />
                        <label for="radio24">Wellbeing</label>
                      </div>
                    </div>
                    {/* <!--role-col--> */}

                    <div className="role-col">
                      <div className="inputGroup">
                        <input id="radio25" name="radio" type="radio" />
                        <label for="radio25">Travel</label>
                      </div>
                    </div>
                    {/* <!--role-col--> */}

                    <div className="role-col">
                      <div className="inputGroup">
                        <input id="radio26" name="radio" type="radio" />
                        <label for="radio26">Security</label>
                      </div>
                    </div>
                    {/* <!--role-col--> */}

                    <div className="role-col">
                      <div className="inputGroup">
                        <input id="radio27" name="radio" type="radio" />
                        <label for="radio27">Entertainment</label>
                      </div>
                    </div>
                    {/* <!--role-col--> */}
                  </div>
                  {/* <!--role-wrapper--> */}

                  <div className="enter-job-role">
                    <h5>Don’t see a industry you want?</h5>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Type your job role here..."
                    />
                  </div>
                </div>
                {/* <!--form-card--> */}

                <input
                  type="button"
                  name="next"
                  className="next action-button"
                  value=""
                  onClick={() => navigation('/educationLevel')}
                />
                <div className="row">
                  <div className="col-12">
                    <h2 className="steps">Question 3/8</h2>
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

export default ChooseIndustry
