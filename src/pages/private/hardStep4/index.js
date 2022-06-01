import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowIcon from '../../../assets/images/right-arrow.png'
import Blk from '../../../assets/images/logo-icon-blk.png'
function HardStepFour() {
  const navigation = useNavigate()
  return (
    <section id="feel-suite-best">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <img src={Blk} alt = 'blk' />
            <h3>Select 1 that you feel suits you the best</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 suite-best-wrapper yellow-hvr-checkbox">
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="inputGroup">
                  <input id="check1" name="checkbox" type="checkbox" />
                  <label for="check1">working in a team that can execute</label>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-12">
                <div className="inputGroup">
                  <input id="check2" name="checkbox" type="checkbox" />
                  <label for="check2">tackling problems as they arise </label>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-12">
                <div className="inputGroup">
                  <input id="check3" name="checkbox" type="checkbox" />
                  <label for="check3">
                    discovering and using new things and ideas
                  </label>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="inputGroup">
                  <input id="check4" name="checkbox" type="checkbox" />
                  <label for="check4">enjoy thinking on my feet </label>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-12">
                <div className="inputGroup">
                  <input id="check5" name="checkbox" type="checkbox" />
                  <label for="check5">leading by example</label>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-12">
                <div className="inputGroup">
                  <input id="check6" name="checkbox" type="checkbox" />
                  <label for="check6">
                    rolling up my sleeves and getting stuck in
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 text-center">
            <a href="#" onClick={() => navigation('/hardStep5')}>
              {" "}
              <img src={ArrowIcon} alt='right' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HardStepFour;
