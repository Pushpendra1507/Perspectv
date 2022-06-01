import React from 'react'
import brand from '../../../assets/images/logo-icon-blk.png'
import { useNavigate } from "react-router-dom";
function RoleStepSix() {
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
                    <h3>Where would you prefer the job to be located?</h3>

                    <div className="enter-job-role">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Type your job location here..."
                        required=""
                      />

                      <label className="steps-checkbox">
                        <input type="checkbox" ckecked="cheked" />
                        <span className="checkmark"></span>
                        Remote working
                      </label>
                      {/* <!--steps-checkbox--> */}
                    </div>
                  </div>
                  {/* <!--form-card--> */}

                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    value=""
                    onClick={() => navigation('/companySize')}
                  />
                  <div className="row">
                    <div className="col-12">
                      <h2 className="steps">Question 6/8</h2>
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

export default RoleStepSix

