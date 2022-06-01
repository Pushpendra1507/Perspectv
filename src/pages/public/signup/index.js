import React from "react";
import brand from "../../../assets/images/brand-logo.png";
import {useNavigate} from 'react-router-dom'

function SignupPage() {
  const navigation = useNavigate()

  return (
    <section id="signup-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 text-center">
            <div className="brand-logo">
              <img className="img-fluid" src={brand} alt="brand" />
            </div>
            <form>
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="signup-input-bx">
                    <label>Full Name</label>
                    <input type="text" id="name" name="name" required="" />
                  </div>
                  {/* <!--signup-input-bx--> */}
                </div>
                {/* <!--col-6--> */}

                <div className="col-lg-6 col-sm-6">
                  <div className="signup-input-bx">
                    <label>Location</label>
                    <input type="text" id="name" name="name" required="" />
                  </div>
                  {/* <!--signup-input-bx--> */}
                </div>
                {/* <!--col-6--> */}

                <div className="col-lg-12">
                  <div className="signup-input-bx">
                    <label>Email Address</label>
                    <input type="text" id="name" name="name" required="" />
                  </div>
                  {/* <!--signup-input-bx--> */}
                </div>
                {/* <!--col-12--> */}

                <div className="col-lg-6 col-sm-6">
                  <div className="signup-input-bx">
                    <label>Enter Password</label>
                    <input type="password" id="name" name="name" required="" />
                  </div>
                  {/* <!--signup-input-bx--> */}
                </div>
                {/* <!--col-6--> */}

                <div className="col-lg-6 col-sm-6">
                  <div className="signup-input-bx">
                    <label>Confirm Password</label>
                    <input type="password" id="name" name="name" required="" />
                  </div>
                  {/* <!--signup-input-bx--> */}
                </div>
                {/* <!--col-6--> */}
              </div>
              {/* <!--row--> */}
              <br />
              <p>
                by signing up you accept the <a href="#">terms of service</a>{" "}
                and <a href="#">privacy policy</a>
              </p>
              <button className="form-btn" onClick={() => navigation('/emailPhoneVerify')} >Sign up</button>
            </form>
            <br />
            <p className="login-signup-txt">
              Don’t have an account? <strong onClick={() => navigation('/login')}>Login</strong>
            </p>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </section>
  );
}

export default SignupPage;
