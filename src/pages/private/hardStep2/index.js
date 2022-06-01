import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowIcon from '../../../assets/images/right-arrow.png'
import Blk from '../../../assets/images/logo-icon-blk.png'
function HardStepTwo() {
  const navigation = useNavigate()
  return (
    <section id="feel-suite-best">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <img src={Blk} alt = 'blk' />
            <h3>Select 3 that you feel suits you the best</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 suite-best-wrapper yellow-hvr-checkbox">
            <div className="row">
              <div className="col">
                <div className="inputGroup">
                  <input id="check1" name="checkbox" type="checkbox" />
                  <label for="check1">Confident</label>
                </div>
              </div>

              <div className="col">
                <div className="inputGroup">
                  <input id="check2" name="checkbox" type="checkbox" />
                  <label for="check2">Analytical</label>
                </div>
              </div>

              <div className="col">
                <div className="inputGroup">
                  <input id="check3" name="checkbox" type="checkbox" />
                  <label for="check3">Highly motivated</label>
                </div>
              </div>
              <div className="col">
                <div className="inputGroup">
                  <input id="check4" name="checkbox" type="checkbox" />
                  <label for="check4">Adaptable</label>
                </div>
              </div>

              <div className="col">
                <div className="inputGroup">
                  <input id="check5" name="checkbox" type="checkbox" />
                  <label for="check5">Persuasive</label>
                </div>
              </div>

              <div className="col">
                <div className="inputGroup">
                  <input id="check6" name="checkbox" type="checkbox" />
                  <label for="check6">Action oriented</label>
                </div>
              </div>

              <div className="col">
                <div className="inputGroup">
                  <input id="check7" name="checkbox" type="checkbox" />
                  <label for="check7">Tenacious</label>
                </div>
              </div>

              <div className="col">
                <div className="inputGroup">
                  <input id="check8" name="checkbox" type="checkbox" />
                  <label for="check8">Resourceful</label>
                </div>
              </div>

              <div className="col">
                <div className="inputGroup">
                  <input id="check9" name="checkbox" type="checkbox" />
                  <label for="check9">Bright</label>
                </div>
              </div>

              <div className="col">
                <div className="inputGroup">
                  <input id="check10" name="checkbox" type="checkbox" />
                  <label for="check10">Influencial</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 text-center">
            <a href="#" onClick={() => navigation('/hardStep3')}>
              {" "}
              <img src={ArrowIcon} alt='right' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HardStepTwo;
