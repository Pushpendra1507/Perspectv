import React from "react";
import { useNavigate } from 'react-router-dom'
import brand from '../../../assets/images/logo-icon-blk.png' 
import ArrowIcon from '../../../assets/images/right-arrow.png'
import UploadIcon from '../../../assets/images/profile-img-upload-icon.png'
import ProfileIcon from '../../../assets/images/profile-img.png'
function ProfileComplete() {
  const navigation = useNavigate()
  return (
    <section id="feel-suite-best">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <img src= {brand}  alt = 'brand' />
            <h3>Upload your CV and add a mugshot</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 upload-your-profile text-center">
            <h4>Add a photo</h4>
            <div className="profile-img">
              <img className="img-fluid" src={ProfileIcon} alt = '' />
              <div className="file">
                <img src= {UploadIcon} alt = ''/>
                <input type="file" name="file" />
              </div>
            </div>
            <h4>Consider Jane</h4>

            <h5>Personal bio</h5>

            <div className="row">
              <div className="col-lg-4 col-sm-6 col-xs-6 col-12 text-left personal-bio-cnt">
                <h6>Desired Job role</h6>
                <p>People ; Legal</p>
              </div>

              <div className="col-lg-4 col-sm-6 col-xs-6 col-12 text-left personal-bio-cnt">
                <h6>Desired Job title</h6>
                <p>Executive assistant; Law firm administrator</p>
              </div>

              <div className="col-lg-4 col-sm-6 col-xs-6 col-12 text-left personal-bio-cnt">
                <h6>Desired industry</h6>
                <p>Fintech; Health care; Entertainment</p>
              </div>

              <div className="col-lg-4 col-sm-6 col-xs-6 col-12 text-left personal-bio-cnt">
                <h6>Education levels</h6>
                <p>Postsecondary non-tertiary; higher crtificate</p>
              </div>

              <div className="col-lg-4 col-sm-6 col-xs-6 col-12 text-left personal-bio-cnt">
                <h6>Skill level</h6>
                <p>Junior (1-2 years)</p>
              </div>

              <div className="col-lg-4 col-sm-6 col-xs-6 col-12 text-left personal-bio-cnt">
                <h6>Location</h6>
                <p>London, Richmond</p>
              </div>

              <div className="col-lg-4 col-sm-6 col-xs-6 col-12 text-left personal-bio-cnt">
                <h6>Prefered Company size</h6>
                <p>1 - 20 employees</p>
              </div>

              <div className="col-lg-4 col-sm-6 col-xs-6 col-12 text-left personal-bio-cnt">
                <h6>Type of employment</h6>
                <p>permanent</p>
              </div>

              <div className="col-lg-4 col-sm-6 col-xs-6 col-12 text-left personal-bio-cnt">
                <h6>Minimum expected pay</h6>
                <p>hourly; £ 35 </p>
              </div>

              <div className="col-lg-4 col-sm-6 col-xs-6 col-12 text-left personal-bio-cnt">
                <h6>Soft skills</h6>
                <p>
                  Organization (3 5);
                  <br />
                  Time management (0-3);
                  <br />
                  Communication (5-10);
                  <br />
                  Adaptability (10+)
                </p>
              </div>

              <div className="col-lg-4 col-sm-6 col-xs-6 col-12 text-left personal-bio-cnt">
                <h6>Hard Skills</h6>
                <p>
                  Technological competency (3 5);
                  <br />
                  Legal knowledge (0-3);
                  <br />
                  Business management skills (5-10);
                  <br />
                  Microsoft office (10+)
                </p>
              </div>
            </div>
            <br />
            <br />
            <p>
              {" "}
              <a href="#" onClick={() => navigation('/profileCompleteCongrats')} >
                {" "}
                <img src={ArrowIcon} alt = 'right' />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileComplete;
