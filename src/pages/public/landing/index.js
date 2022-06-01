import React from 'react'
import topLogo from '../../../assets/images/logo-icon-blk.png'
import {useNavigate} from 'react-router-dom'

function LandingPage() {
    const navigation = useNavigate()
  return (
    <section id="perspectv-login-screen">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <img src={topLogo} alt = 'top'/>
                <h1 className="login-module-heading" >Welcome to Perspectv!</h1>
                <p>The smart new way to hire and get hired.</p>
                <div className="login-screen-btn tabs-btn">
                    <ul>
                        <li>
                            <a href="#" onClick={() => navigation('/signup') }>Sign up</a>
                        </li>
                        
                        <li>
                            <a href="#" onClick={() => navigation('/login')}>Login</a>
                        </li>
                    </ul>
                
                </div>
                {/* <!--tabs-btn--> */}
            </div>
            {/* <!--col-close--> */}
        </div>    
    </div>
</section>
  )
}

export default LandingPage
