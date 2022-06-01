import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowIcon from '../../../assets/images/right-arrow.png'
import Blk from '../../../assets/images/logo-icon-blk.png'
import ProfileIcon from '../../../assets/images/profile-img.png'
import UploadIcon from '../../../assets/images/profile-img-upload-icon.png'
function HardStepFive() {
  const navigation = useNavigate()
  return (
    <section id="feel-suite-best">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <img src={Blk} alt = 'blk'/>
            <h3>Upload your CV and add a mugshot</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 upload-your-profile text-center">
            <h4>Add a photo</h4>
            <div className="profile-img">
              <img className="img-fluid" src={ProfileIcon} alt = {'profile'}/>
              <div className="file">
                <img src={UploadIcon} alt = 'upload' />
                <input type="file" name="file" />
              </div>
            </div>
            <h6>CV Upload</h6>
            <div className="form-group upload-cv-col">
              <div className="input-group">
                <div className="custom-file">
                  <div>
                    <p>Attach Document</p>
                    <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01"
                    />
                  </div>
                  <label className="custom-file-label" for="inputGroupFile01">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </label>
                </div>
              </div>
            </div>

            <p>
              {" "}
              <a href="#" onClick={() => navigation('/profileComplete')}>
                {" "}
                <img src={ArrowIcon} alt='right' />
              </a>
            </p>
          </div>

          <div className="col-lg-2"></div>
        </div>
      </div>
    </section>
  );
}

export default HardStepFive;
