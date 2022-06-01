import React from "react";
import { useNavigate } from 'react-router-dom'
import brand from '../../../assets/images/logo-icon-blk.png'
import ArrowIcon from '../../../assets/images/right-arrow.png'
function UploadVideo() {
  const navigation = useNavigate()
  return (
    <section id="red-graphics-bg" className="upload-your-video">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <img src= {brand}  alt = 'brand' />
            {/* style="color:white;" */}
            <h3 >Upload a short video of yourself</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 text-center">
            <h4>
              This is a fantasitc way to present yourself to the job poster.
            </h4>

            <div className="form-group upload-cv-col">
              <div className="input-group">
                <div className="custom-file">
                  <div>
                    <p>Attach your Video</p>
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
            <br />
            <br />
            <p>
              {" "}
              <a href="#" onClick={() => navigation('/paymentMethod')}>
                {" "}
                <img src={ArrowIcon} alt='right' />
              </a>
            </p>
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

export default UploadVideo;
