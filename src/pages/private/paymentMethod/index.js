import React from "react";
import { useNavigate } from 'react-router-dom'
import brand from '../../../assets/images/logo-icon-blk.png' 
import ArrowIcon from '../../../assets/images/right-arrow.png'
import circlePlus from  "../../../assets/images/circle-plus.svg"
function PaymentMethod() {
 
  const navigation = useNavigate()

  return (
    <section id="red-graphics-bg" className="upload-your-video">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <img src= {brand}  alt = 'brand' />
            {/* style="color:white; font-weight: bold;" */}
            <h3 >Payment</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-3 col-sm-2"></div>
          <div className="col-lg-4 col-md-6 col-sm-8 text-center">
            <div className="form-group add-payment-method">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Payment Method
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          <a href="#">
                            Add New Card
                            <img src={circlePlus} alt = ''/>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Add Paypal Account
                            <img src={circlePlus} alt = ''/>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Add Apple Pay Account
                            <img src={circlePlus} alt = '' />{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Payment History
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          <a href="#">
                            <span>No Transaction</span>{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Payment Details
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          <a href="#">
                            <span>$35 Free for enhanced Profile Video</span>{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <p>
              {" "}
              <a href="#" onClick={() => navigation('/addCard')}>
                {" "}
                <img src={ArrowIcon} alt='right' />
              </a>
            </p>
          </div>

          <div className="col-lg-4 col-md-3 col-sm-2"></div>
        </div>
      </div>
    </section>
  );
}

export default PaymentMethod;
