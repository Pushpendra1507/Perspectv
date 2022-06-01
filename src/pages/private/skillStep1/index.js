import React from "react";
import { useNavigate } from "react-router-dom";
import brand from '../../../assets/images/logo-icon-blk.png'
function SkillOne() {
  const navigation = useNavigate()
  return (
    <section id="skills-steps">
      <div className="discover-personality-top-cnt">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <img src={brand} alt="brand" />
              <h3>What job title best suits the role you’re looking for?</h3>
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
                    <div className="enter-hard-skills">
                      <h5>
                        <strong>Hard skills</strong> are the
                        <br />
                        specific skills you use on the job.
                      </h5>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Type your soft skills here......"
                        required=""
                      />
                    </div>
                  </div>

                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    value=""
                    onClick={() => navigation('/skillStep2')}
                  /> 
                </fieldset>
{/* 
                <fieldset>
                  <div className="form-card">
                    <div className="enter-hard-skills">
                      <h5>
                        <strong>Hard skills</strong> are the
                        <br />
                        specific skills you use on the job.
                      </h5>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Type your job role here..."
                        required=""
                      />
                    </div>

                    <div className="exp-range-slider">
                      <div className="skill-range-slider">
                        <div className="slidecontainer">
                          <h6>Business Management</h6>
                          <input
                            type="range"
                            min="1"
                            max="100"
                            value="50"
                            className="slider"
                            id="myRange"
                          />
                          <p>
                            Entry (<span id="demo">50</span> years){" "}
                          </p>
                        </div>
                      </div>

                      <div className="skill-range-slider">
                        <div className="slidecontainer">
                          <h6>Technical Competency </h6>
                          <input
                            type="range"
                            min="1"
                            max="100"
                            value="50"
                            className="slider"
                            id="myRange"
                          />
                          <p>
                            Mid (<span id="demo"></span> years){" "}
                          </p>
                        </div>
                      </div>

                      <div className="skill-range-slider">
                        <div className="slidecontainer">
                          <h6>Microsoft Office </h6>
                          <input
                            type="range"
                            min="1"
                            max="100"
                            value="50"
                            className="slider"
                            id="myRange"
                          />
                          <p>
                            Senior (<span id="demo"></span> years){" "}
                          </p>
                        </div>
                      </div>

                      <div className="skill-range-slider">
                        <div className="slidecontainer">
                          <h6>Technical Competency</h6>
                          <input
                            type="range"
                            min="1"
                            max="100"
                            value="50"
                            className="slider"
                            id="myRange"
                          />
                          <p>
                            Expert (<span id="demo"></span> years){" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    value=""
                    onClick={() => navigation('/skillStep2')}
                  />  
                </fieldset> */}
              </form>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div> 
    </section>
  );
}

export default SkillOne;
