import React from 'react'
import brand from '../../../assets/images/brand-logo.png'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { UserAuth } from '../../../reducers/authSeekerReducers'
import { TYPES } from '../../../actions'


function LoginPage() {
  const navigation = useNavigate()
const dispatch = useDispatch()

  const submitBtnAction = () => {
    //   alert('hi')
    //  dispatch(UserAuth(TYPES.USER_LOGIN , {}))
    dispatch({type: TYPES.USER_LOGIN})
   }
  return (
    <section id="login-page">   
    <div className="container">
        <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 text-center">
                <div className="brand-logo">
                    <img className="img-fluid" src= {brand} alt='brand' />
                </div>
                
            <form>
                <input className="form-control" type="text" name="fname" placeholder="Email"/>
                <input className="form-control" type="password" name="fname" placeholder="Password"/>
                <button className="form-btn"  onClick={() => submitBtnAction()} >Submit</button>
                <div className="login-checkbox">
                   <br />
                    <label className="steps-checkbox">
                        Remember me
                        <input type="checkbox" ckecked="cheked"/>
                        <span className="checkmark"></span>
                    </label>
                    {/* <!--steps-checkbox--> */}
                    <br />
                    <label className="steps-checkbox" onClick={() => navigation('/sendEmail')} >
                        Forgot password?
                        <input type="checkbox" ckecked="cheked"/>
                        <span className="checkmark"></span>
                    </label>
                    {/* <!--steps-checkbox--> */}
                
                </div>
                {/* <!--login-checkbox--> */}
            </form>
                
                <p className="login-signup-txt">Don’t have an account? <strong onClick={() => navigation('/signup')}>sign up</strong></p>
            
            </div>
            <div className="col-lg-2"></div>
        </div>
    </div>
</section>
  )
}

export default LoginPage
