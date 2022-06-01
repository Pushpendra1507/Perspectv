import React from 'react'
import brand from '../../../assets/images/brand-logo.png'
import {useNavigate} from 'react-router-dom'

function EmailPhoneOtp() {
 
  const navigation = useNavigate()

  return (
    <section id="login-page"> 
      <div className="container">
        <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 text-center">
                <div className="brand-logo">
                    <img className="img-fluid" src={brand} alt='brand' />
                </div>
            <form>
                <div className="otp-input">
                    <input className="form-control" type="text" name="fname"  placeholder=""/>
                    <input className="form-control" type="text" name="fname"  placeholder=""/>
                    <input className="form-control" type="text" name="fname"  placeholder=""/>
                    <input className="form-control" type="text" name="fname"  placeholder=""/>
                    <input className="form-control" type="text" name="fname"  placeholder=""/>
                    <input className="form-control" type="text" name="fname"  placeholder=""/>
                </div>
                   <h6><strong>RESEND CODE</strong>
                <br />
                <br />
                    Enter the 6 digit code we just sent to your email address    
                </h6>
                <button className="form-btn" onClick={() => navigation('/accountVerify')}  >Verify</button>
             </form>
                <p className="login-signup-txt">Don’t have an account? <strong>sign up</strong></p>
            </div>
            <div className="col-lg-2"></div>
        </div>
     </div>
  </section>
  )
}

export default EmailPhoneOtp
