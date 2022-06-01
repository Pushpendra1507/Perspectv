import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowIcon from '../../../assets/images/right-arrow.png'
import Blk from '../../../assets/images/logo-icon-blk.png'
function HardStepOne() {
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
          <div className="col-lg-12 suite-best-wrapper">
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
                  <label for="check3">Big picture</label>
                </div>
              </div>
              <div className="col">
                <div className="inputGroup">
                  <input id="check4" name="checkbox" type="checkbox" />
                  <label for="check4">Competent</label>
                </div>
              </div>

              <div className="col">
                <div className="inputGroup">
                  <input id="check5" name="checkbox" type="checkbox" />
                  <label for="check5">Analytical</label>
                </div>
              </div>

              <div className="col">
                <div className="inputGroup">
                  <input id="check6" name="checkbox" type="checkbox" />
                  <label for="check6">Consisitant</label>
                </div>
              </div>

              <div className="col">
                <div className="inputGroup">
                  <input id="check7" name="checkbox" type="checkbox" />
                  <label for="check7">Critical</label>
                </div>
              </div>

              <div className="col">
                <div className="inputGroup">
                  <input id="check8" name="checkbox" type="checkbox" />
                  <label for="check8">Decisive</label>
                </div>
              </div>

              <div className="col">
                <div className="inputGroup">
                  <input id="check9" name="checkbox" type="checkbox" />
                  <label for="check9">Direct</label>
                </div>
              </div>

              <div className="col">
                <div className="inputGroup">
                  <input id="check10" name="checkbox" type="checkbox" />
                  <label for="check10">Driven</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 text-center">
            <a href="#"   onClick={() => navigation('/hardStep2')}>
              {" "}
              <img src={ArrowIcon} alt='right' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HardStepOne;
