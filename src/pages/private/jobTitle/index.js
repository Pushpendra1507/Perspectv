import React from 'react'
import brand from '../../../assets/images/logo-icon-blk.png'
import { useNavigate } from "react-router-dom";
function JobTitle() {
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
                        What job title best suits the role you’re looking for?
                      </h3>
  
                      <div className="role-wrapper red-radio-btn">
                        <div className="role-col">
                          <div className="inputGroup">
                            <input id="radio10" name="radio" type="radio" />
                            <label for="radio10">Executive Assistant</label>
                          </div>
                        </div>
                        {/* <!--role-col--> */}
  
                        <div className="role-col">
                          <div className="inputGroup">
                            <input id="radio11" name="radio" type="radio" />
                            <label for="radio11">Recruitment</label>
                          </div>
                        </div>
                        {/* <!--role-col--> */}
  
                        <div className="role-col">
                          <div className="inputGroup">
                            <input id="radio12" name="radio" type="radio" />
                            <label for="radio12">Human Resources</label>
                          </div>
                        </div>
                        {/* <!--role-col--> */}
  
                        <div className="role-col">
                          <div className="inputGroup">
                            <input id="radio13" name="radio" type="radio" />
                            <label for="radio13">People Operations</label>
                          </div>
                        </div>
                        {/* <!--role-col--> */}
  
                        <div className="role-col">
                          <div className="inputGroup">
                            <input id="radio14" name="radio" type="radio" />
                            <label for="radio14">Law Firm Administrator</label>
                          </div>
                        </div>
                        {/* <!--role-col--> */}
  
                        <div className="role-col">
                          <div className="inputGroup">
                            <input id="radio15" name="radio" type="radio" />
                            <label for="radio15">Attorney</label>
                          </div>
                        </div>
                        {/* <!--role-col--> */}
  
                        <div className="role-col">
                          <div className="inputGroup">
                            <input id="radio16" name="radio" type="radio" />
                            <label for="radio16">Arbitrator</label>
                          </div>
                        </div>
                        {/* <!--role-col--> */}
  
                        <div className="role-col">
                          <div className="inputGroup">
                            <input id="radio17" name="radio" type="radio" />
                            <label for="radio17">Case manager</label>
                          </div>
                        </div>
                        {/* <!--role-col--> */}
  
                        <div className="role-col">
                          <div className="inputGroup">
                            <input id="radio18" name="radio" type="radio" />
                            <label for="radio18">Engineering</label>
                          </div>
                        </div>
                        {/* <!--role-col--> */}
                      </div>
                      {/* <!--role-wrapper--> */}
  
                      <div className="enter-job-role">
                        <h5>Don’t see a job title you looking for?</h5>
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
                      onClick={() => navigation('/chooseIndustry')}
                    />
                    <div className="row">
                      <div className="col-12">
                        <h2 className="steps">Question 2/8</h2>
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

export default JobTitle
