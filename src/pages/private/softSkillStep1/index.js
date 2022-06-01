import React from "react";
import { useNavigate } from "react-router-dom";
import brand from '../../../assets/images/logo-icon-blk.png'
function SoftSkillOne() {
  const navigation = useNavigate()
  return (
    <section id="soft-skills-steps">
      <div className="discover-personality-top-cnt">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <img src={brand} alt='brand'/>
              <h3>What job title best suits the role you’re looking for?</h3>
            </div>
          </div>
        </div>
      </div>

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
                        <strong>Soft skills</strong> are the personal habits and
                        traits that shape how you work on your own and with
                        others.
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
                    onClick={() => navigation('/softSkillStep2')}
                  />
                </fieldset>
              </form>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </section>
  );
}

export default SoftSkillOne;
