import React from "react";
import { useNavigate } from 'react-router-dom'
import brand from '../../../assets/images/logo-icon-blk.png' 
import ArrowIcon from '../../../assets/images/right-arrow.png'
function PurchaseComplete() {
  const navigation = useNavigate()
  return (
    // style="padding:50px 0;"
    <section id="red-graphics-bg" >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <img src= {brand}  alt = 'brand' />
            {/* style="color:white; font-weight: bold;" */}
            <h3 >Success</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2"></div>
          <div className="col-lg-8 col-md-8 col-sm-8 text-center payment-success">
            <h4>
              Payment confirmed
              <br />
              <br />
              Continue to your home page and see your job
            </h4>

            <br />
            <br />
            <p>
              {" "}
              <a href="#">
                {" "}
                <img src={ArrowIcon} alt='right' />
              </a>
            </p>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-2"></div>
        </div>
      </div>
    </section>
  );
}

export default PurchaseComplete;
