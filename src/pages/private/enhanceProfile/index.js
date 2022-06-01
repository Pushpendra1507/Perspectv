import React from "react";
import { useNavigate } from 'react-router-dom'
import brand from '../../../assets/images/logo-icon-blk.png' 
import enhancedIcon from '../../../assets/images/enhanced-profile-title.png' 

function EnhanceProfile() {
const navigation = useNavigate()

  return (
    <section id="enhanced-profile">
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 text-center">
            <div className="brand-logo">
              <img className="img-fluid" src= {brand}  alt = 'brand'/>
            </div>
            <img className="img-fluid" src= {enhancedIcon}  alt = ''/>

            <br />
            {/* style="color:white;" */}
            <p className="mt-5" >
              Enhance your profile and get ranked higher on the job listings. It
              is a once off fee.{" "}
            </p>
            <br />
            <br />
            <button className="next action-button" onClick={() => navigation('/uploadVideo')}>Next</button>
            <p className="mt-4">
              {/* style="text-decoration: none; color:#000;" */}
              <a href="#" >
                Skip
              </a>
            </p>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </section>
  );
}

export default EnhanceProfile;
