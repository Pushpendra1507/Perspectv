import React from "react";
import brand from "../../../assets/images/brand-logo.png";
import {useNavigate} from 'react-router-dom'
function SendEmail() {
  const navigation = useNavigate();
  return (
    <section id="login-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 text-center">
            <div className="brand-logo">
              <img className="img-fluid" src={brand} alt="brand" />
            </div>

            <form>
              <input
                className="form-control"
                type="text"
                name="fname"
                placeholder="janedoe@gmail.com"
              />

              <h6>
                Enter the email address associated with your account
                <br />
                <br />
                We’ll send you an email. It has a magic code that’ll allow you
                to reset your password.
              </h6>

              <button className="form-btn" onClick={() => navigation('/otp')}  >Submit</button>
              <br />
            </form>
            <p className="login-signup-txt">
              Don’t have an account? <strong onClick={() => navigation('/signup')}>sign up</strong>
            </p>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </section>
  );
}

export default SendEmail;
