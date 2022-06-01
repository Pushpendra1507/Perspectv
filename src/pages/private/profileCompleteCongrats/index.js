import React from "react";
import { useNavigate } from 'react-router-dom'
import brand from '../../../assets/images/logo-icon-blk.png' 
import ArrowIcon from '../../../assets/images/right-arrow.png'
import congratsIcon from '../../../assets/images/congrats-img.png'

function CompanyProfile() {

  const navigation = useNavigate()
  return (
    <section id="congrts-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 text-center">
            <div className="brand-logo">
              <img className="img-fluid" src= {brand}  alt = 'brand'/>
            </div>

            <h6>Congrats! You’ve reached the end</h6>
            <br />
            <p>
              At this stage we have everything we need to start searching for
              your perfect job. Everyday we continue to discover better ways to
              connect the right people to the right roles. We’ll notify you as
              soon as we find the perfect match for you.
            </p>
            <br />
            <br />

            <img src={congratsIcon}  alt = ''/>

            <div className="congrats-button text-center mt-5">
              <img src={ArrowIcon} alt='right'  onClick={() => navigation('/enhanceProfile')}/>
              <br />
              <br />
              <p>
              {/* style="text-decoration: none; color:white;" */}
                <a href="#" >
                  Skip
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </section>
  );
}

export default CompanyProfile;
