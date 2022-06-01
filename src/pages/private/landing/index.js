import React from 'react'
import eagle from '../../../assets/images/eagle-img.png'
import bulk from '../../../assets/images/logo-icon-blk.png'
import { useNavigate } from 'react-router-dom'
function LandingPage() {

  const navigation = useNavigate()

  return (
    <section id="get-started-page">
        
    <div className="container">
        <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 text-center">
                <div className="brand-logo">
                    <img className="img-fluid" src={bulk} alt='bulk'/>
                </div>
                
                <h6>Let’s build your personal bio so we can find the perfect job for you </h6>
                
               <div className="get-strarted-button">
                <br/>
                   <br/>
                 <button className="graphics-btn" onClick={() => navigation('/jobRole')}>Get Started</button>
                   <br/>
                   <br/>
                   <br/>
                <p><a href="#">Skip</a></p>
                
                </div>
                
                <img className="img-fluid" src={eagle} alt='eagle'/>
            
            </div>
            {/* // <!--col-8--> */}
            <div className="col-lg-2"></div>
        </div>
        {/* <!--row--> */}
    </div>

</section>
  )
}

export default LandingPage
