import React,{useEffect} from "react";
import "../../Style/LandAndBuilding.scss";
import LnBModals from "./LnBModals";

import VisibilitySensor from "react-visibility-sensor";
import $ from "jquery";

function LandAndBuilding() {
  function onChange(isVisible) {
    if (isVisible) {
      $(".Navbar").removeClass("fixed-top");
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <LnBModals />
      <div className="LandAndBuilding">
        <VisibilitySensor onChange={onChange} scrollCheck={true}>
          <h1>Land And Building</h1>
        </VisibilitySensor>
        
        <div className="grid-container1">
          <img className="banner" src="https://res.cloudinary.com/lbs-harda/image/upload/v1643389158/image6_gh82xy.png" alt="" />
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390235/img4_ff3ogl.jpg" alt="quadrangle" />
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390235/img3_rys0qc.jpg" alt="staff" />
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390234/img2_uu2rl8.jpg" alt="main-view" />
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390235/img1_egqwvv.jpg" alt="entrance" />
        </div>

        <h6>Certificates</h6>

        <ol className="pdfList">
          <li>
            <div data-toggle="modal" data-target="#one" className="d-flex">
              Land Registration
              <i className="fas fa-file-pdf mx-2"></i>
            </div>
          </li>
          <li>
            <div data-toggle="modal" data-target="#two" className="d-flex">
              Approved Building Plans
              <i className="fas fa-file-pdf mx-2"></i>
            </div>
          </li>
          <li>
            <div data-toggle="modal" data-target="#three" className="d-flex">
              Diversion Certificate
              <i className="fas fa-file-pdf mx-2"></i>
            </div>
          </li>
          <li>
            <div data-toggle="modal" data-target="#four" className="d-flex">
              Khasra B1 Nakal (Commercially Diverted)
              <i className="fas fa-file-pdf mx-2"></i>
            </div>
          </li>
          <li>
            <div data-toggle="modal" data-target="#five" className="d-flex">
              Land Use Certificate
              <i className="fas fa-file-pdf mx-2"></i>
            </div>
          </li>
          <li>
            <div data-toggle="modal" data-target="#six" className="d-flex">
              Building Completion Block A, B & C
              <i className="fas fa-file-pdf mx-2"></i>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default LandAndBuilding;
