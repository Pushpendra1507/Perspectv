import React from "react";
import { useNavigate } from 'react-router-dom'
import brand from '../../../assets/images/logo-icon-blk.png'
import ArrowIcon from '../../../assets/images/right-arrow.png'
function AddCard() {
const navigation = useNavigate()

  return (
    <section id="form-page" className="red-graphics-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-3 col-sm-2"></div>
          <div className="col-lg-4 col-md-6 col-sm-8 text-center">
            <div className="brand-logo">
              <img src= {brand}  alt = 'brand' />
              <br />
              <br />
              {/* style="color:white; font-weight: bold;" */}
              <h3 >Add new card</h3>
            </div>

            <form>
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <div className="signup-input-bx">
                    <label>Name of Card</label>
                    <input type="text" id="name" name="name" required="" />
                  </div>
                </div>

                <div className="col-lg-12 col-sm-12">
                  <div className="signup-input-bx">
                    <label>Card Number</label>
                    <input type="text" id="name" name="name" required="" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="signup-input-bx">
                    <label>Expiry Date</label>
                    <input type="text" id="name" name="name" required="" />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="signup-input-bx">
                    <label>CVV</label>
                    <input type="password" id="name" name="name" required="" />
                  </div>
                </div>

                <div className="col-lg-12 col-sm-12 add_card-checkbox">
                  <label className="switch">
                    Remember Card
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            </form>
            <br />
            <br />
            <br />
            <p>
              {" "}
              <a href="#"  onClick={() => navigation('/purchaseComplete')}>
                {" "}
                <img src={ArrowIcon} alt = 'arrow' />
              </a>
            </p>
          </div>
          <div className="col-lg-4 col-md-3 col-sm-2"></div>
        </div>
      </div>
    </section>
  );
}

export default AddCard;
