import React from "react";
import brand from "../../../assets/images/brand-logo.png";
import {useNavigate} from 'react-router-dom'

function ConfirmPassword() {
  const navigation = useNavigate()
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
                type="password"
                name="fname"
                placeholder="New Password"
              />
              <input
                className="form-control"
                type="password"
                name="fname"
                placeholder="Confirm Password"
              />
              <h6>
                Your ID has been verified you can now change your password.
              </h6>
              <button className="form-btn" onClick={() => navigation('/forgotSuccess')}>Confirm</button>&gt;
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

export default ConfirmPassword;
