import React from "react";
import Blk from '../../../assets/images/logo-icon-blk.png'
import Eye from '../../../assets/images/speed-eye-img.png'
import ArrowIcon from '../../../assets/images/right-arrow.png'
import {useNavigate} from 'react-router-dom'
function RoleStepComplete() {

    const navigation = useNavigate()
  return (
    <section id="design-speed-screen">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="discover-main-screen-cnt">
              <img src={Blk} alt = {'blk'}/>
              <h6>
                Congrats you’re a legend!
                <br />
                <br />
                Now let’s see what skills you have....
              </h6>
              <br />
              <br />
              <div className="discover-hand-icon">
                <img src={Eye} alt='eye'/>
              </div>
              <a href="#" onClick={() => navigation('/skillStep1')}>
                <img src= {ArrowIcon} />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoleStepComplete;
