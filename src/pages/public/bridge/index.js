import React from "react";
import topLogo from '../../../assets/images/logo-icon-blk.png'
import arrowIcon from '../../../assets/images/right-arrow.png'
import {useNavigate} from 'react-router-dom'
import Walkthrough from "../../../components/atoms/walkthrough";
function BridgePage() {
  const navigation = useNavigate()
  return (
    <section id="discover-personality-steps">

<Walkthrough />
      <div className="discover-personality-top-cnt">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <img src = {topLogo} alt="topLogo"/>
              <h1 className="login-module-heading">What we see depends on what we look for</h1>
              <p>
                Discover how we use AI to shape the future of recruitment and
                turn problems into possibilities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div
          className="row text-center"
          style= {{position: 'relative', zIndex : 2}}
        >
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <h3 className="login-module-heading">I am a...</h3>
            <div className="login-screen-btn tabs-btn">
              <ul>
                <li>
                  <a href="#"  onClick= {() => navigation('/landing')}>Job Seeker</a>
                </li>
                <li>
                  <a href="#">Job Poster</a>
                </li>
              </ul>
            </div>
            {/* <!--tabs-btn--> */}

            {/* <!-- Button trigger modal --> */}
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img src= {arrowIcon} alt="arrowIcon"/>
            </button>
          </div>
          {/* <!--col-8-close--> */}
          <div className="col-lg-2"></div>
        </div>
      </div>
     <Walkthrough />
      {/* <!-- Modal -->  tabindex="-1" */}
     
      {/* <!--modal--> */}
    </section>
    
  );
}

export default BridgePage;
