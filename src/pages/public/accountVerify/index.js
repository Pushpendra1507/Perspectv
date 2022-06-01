import React from "react";
import brand from "../../../assets/images/brand-logo.png";
// style="background-position: 0px -238px;" 6
import {useNavigate} from 'react-router-dom'

function AccountVerify() {
  const navigation = useNavigate()
  return (
    <section id="login-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 text-center">
            <div className="brand-logo">
              <img className="img-fluid" src={brand} />
            </div>
            <form>
              <br />
              <br />
              <br />
              <h3>Your account has been verified..</h3>
              <br />
              <br />
              <button className="form-btn" onClick={() => navigation('/login')}>Done</button>
            </form>
            <p className="login-signup-txt">
              Don’t have an account? <strong >sign up</strong>
            </p>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </section>
  );
}

export default AccountVerify;
