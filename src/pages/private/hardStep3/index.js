import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowIcon from '../../../assets/images/right-arrow.png'
import Blk from '../../../assets/images/logo-icon-blk.png'
function HardStepThree() {
  const navigation = useNavigate()
  return (
    <section id="feel-suite-best">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <img src={Blk} alt='blk' />
            <h3>Select 2 that you feel suits you the best</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 suite-best-wrapper">
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="inputGroup">
                  <input id="check1" name="checkbox" type="checkbox" />
                  <label for="check1">
                    Doing the things that are hard and necessary
                  </label>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-12">
                <div className="inputGroup">
                  <input id="check2" name="checkbox" type="checkbox" />
                  <label for="check2">Taking on new challenges </label>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-12">
                <div className="inputGroup">
                  <input id="check3" name="checkbox" type="checkbox" />
                  <label for="check3">Living in the moment </label>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="inputGroup">
                  <input id="check4" name="checkbox" type="checkbox" />
                  <label for="check4">Creating value out of nothing </label>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-12">
                <div className="inputGroup">
                  <input id="check5" name="checkbox" type="checkbox" />
                  <label for="check5">Using stories to convey ideas</label>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-12">
                <div className="inputGroup">
                  <input id="check6" name="checkbox" type="checkbox" />
                  <label for="check6">Rallying the troops</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 text-center">
            <a href="#" onClick={() => navigation('/hardStep4')}>
              {" "}
              <img src={ArrowIcon} alt='right' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HardStepThree;
