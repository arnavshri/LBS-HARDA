import React,{useEffect} from "react";
import "../.././Style/AboutUs/AboutUs.scss";
import "../.././Style/Admission/OnlineAdm.scss";

import VisibilitySensor from "react-visibility-sensor";
import $ from "jquery";

function OnlineAdm() {
  function onChange(isVisible) {
    if (isVisible) {
      $(".Navbar").removeClass("fixed-top");
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="aboutHead" id="onlineAdm">
      <VisibilitySensor onChange={onChange} scrollCheck={true}>
        <h1>Online Admission Process For UG and PG classes</h1>
      </VisibilitySensor>
      <p>
        In all the colleges of Madhya Pradesh admission process in UG and PG
        courses is made online. The whole online admission process is controlled
        by Higher education department of Madhya Pradesh
      </p>
      <p>
        The Online admission process begins immediately after the declaration of
        Higher Secondary Examination results.
      </p>
      <div id="stepMain">
        <div className="step-cont">
          <div className="stepBox">
            <h3>Step 1</h3>
            <p>Online Registration</p>
          </div>
          <div className="steps">
            <div className="Process">
              <p>
                Online admission process begins with online registration. In
                online registration process student has to register himself/
                herself for online admission on higher education portal of
                Madhya Pradesh (epravesh.nic.in) by filling an online
                registration form. At the same time he/she has to specify
                choices for colleges and subjects in combination. A student can
                specify maximum 9 choices. Then student has to pay Rs.100 as
                Registration fee via Bank challan or Net banking to the higher
                education department.
              </p>
            </div>
          </div>
        </div>

        <div className="step-cont">
          <div className="stepBox">
            <h3>Step 2</h3>
            <p>Online Verification</p>
          </div>
          <div className="steps">
            <div className="Process">
              <p>
                Once the student got registered for admission next step is
                online verification. Student has to take 2 printouts of online
                registration form and attach his/her all necessary documents in
                registration form and get them verified from any Govt. College
                with original documents. One set has to be submitted at the
                Verification centre and the other one to be kept for submission
                in the college at the time of admission. Once the verification
                is done online student becomes eligible for online admission.
              </p>
            </div>
          </div>
        </div>

        <div className="step-cont">
          <div className="stepBox">
            <h3>Step 3</h3>
            <p>Online Admission</p>
          </div>
          <div className="steps">
            <div className="Process">
              <p>
                After completion of online registration and verification process
                department releases seat allotment list of students for online
                admission. The student has to report to the college which is
                allotted to him with his/her registration form set in stipulated
                time and submit the admission fee to complete online admission
                process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineAdm;
