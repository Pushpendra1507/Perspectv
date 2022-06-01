import React from "react";
import brand from '../../../assets/images/brand-logo.png'
import smsIcon from '../../../assets/images/sms-icon.png'
import emailIcon from '../../../assets/images/email-icon.png'
// style="text-transform: capitalize; padding: 0 7%;"
import {useNavigate} from 'react-router-dom'

function EmailPhoneVerify() {
  const navigation = useNavigate()

  return (
    <section id="signup-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 text-center">
            <div className="brand-logo">
              <img className="img-fluid" src={brand} alt='brand' />
            </div>
            <form>
              <div className="row">
                <div className="col-lg-12">
                  <br />
                  <p>
                    Please verify your account in order to get the best out of
                    your experience with Perspectv
                  </p>
                  <br />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="signup-input-bx">
                    <label>Mobile Number</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="signup-input-bx">
                    <label>Email Address</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                </div>

                <div className="col-lg-12 signup-verification-col">
                  <p>How would you like to recieve your verification code?</p>

                  <div className="wrapper">
                    <input type="radio" name="select" id="option-1" checked />
                    <input type="radio" name="select" id="option-2" />
                    <label for="option-1" className="option option-1">
                      <div className="dot"></div>
                      <div>
                        <h6>
                          <img src={smsIcon} alt='sms'/>
                          sms
                        </h6>
                        <p>You will recieve a code via SMS.</p>
                      </div>
                    </label>
                    <label for="option-2" className="option option-2">
                      <div className="dot"></div>
                      <div>
                        <h6>
                          <img src= {emailIcon} alt = 'email'/>
                          email address
                        </h6>
                        <p>You will recieve a code via Email</p>
                      </div>
                    </label>
                  </div>
                </div>
                <br />
                <br />
                <p>
                  by signing up you accept the <a href="#">terms of service</a>{" "}
                  and <a href="#">privacy policy</a>
                </p>
              </div>
              <button className="form-btn" onClick={() => navigation('/emailPhoneOtp')}>Sign up</button>
            </form>
            <br />
            <p className="login-signup-txt">
              Don’t have an account? <strong>Login</strong>
            </p>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </section>
  );
}

export default EmailPhoneVerify;
