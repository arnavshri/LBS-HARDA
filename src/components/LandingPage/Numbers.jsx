import React from "react";
import CountUp from "react-countup";
import "../.././Style/LandingPage/Numbers.scss";
import VisibilitySensor from "react-visibility-sensor";

function Numbers() {
  return (
    <div className="numbers">
      <h1>LBS Harda by numbers</h1>
      <div className="groups">
        <div className="group">
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648908480/Vector_1_rq0oip.png" alt="img1" />
          <VisibilitySensor partialVisibility >
            {({ isVisible }) => (
              <div className="counter">
                {isVisible ? (
                  <CountUp
                    start={0}
                    end={2500}
                    duration={5}
                    suffix="+"
                    
                  />
                ) : null}
                <p>Students</p>
              </div>
            )}
          </VisibilitySensor>
        </div>

        <div className="group">
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648908480/Vector-1_flkudj.png" alt="img2" />
          <VisibilitySensor partialVisibility >
            {({ isVisible }) => (
              <div className="counter">
                {isVisible ? (
                  <CountUp
                    start={0}
                    end={50}
                    duration={5}
                    suffix="+"
                    
                  />
                ) : null}
                <p>Faculty Members</p>
              </div>
            )}
          </VisibilitySensor>
        </div>
        <div className="group">
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648908480/Group_1_qwfqus.png" alt="img3" />
          <VisibilitySensor partialVisibility >
            {({ isVisible }) => (
              <div className="counter">
                {isVisible ? (
                  <CountUp
                    start={0}
                    end={100}
                    duration={5}
                    suffix="+"
                    
                  />
                ) : null}
                <p>Staff Members</p>
              </div>
            )}
          </VisibilitySensor>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
