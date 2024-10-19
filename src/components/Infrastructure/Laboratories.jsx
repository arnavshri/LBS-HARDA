import React,{useEffect} from "react";
import "../../Style/Laboratories.scss";

import VisibilitySensor from "react-visibility-sensor";
import $ from "jquery";

function Laboratories() {
  function onChange(isVisible) {
    if (isVisible) {
      $(".Navbar").removeClass("fixed-top");
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="laboratories">
      <div id="lab-flex">
        <VisibilitySensor onChange={onChange} scrollCheck={true}>
          <h1 className="lab-heading">LABORATORIES</h1>
        </VisibilitySensor>
      </div>
      <div className="lab-content">
        <h1>Computer Lab</h1>
        <p className="lab-para-content">
          The computer lab provides computer and internet facilities to students{" "}
          and staff in our college. Computers in computer lab are typically
          equiped with internet access, while scanners and printers may augment
          the lab setup. The computer lab regularly updates the IT facilities
          such as hardware, software and networking as per the requirements.
        </p>
        <div className="lab-img-flex">
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390633/clab_c3dvqf.png" alt="" />
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390615/image18_vx4a5r.png" alt="" />
        </div>
        <h1>Science Lab</h1>
        <p className="lab-para-content">
          The college is proud of its enviable infrastructure int the form of
          well-ventilates classrooms, laboratories(Physics, Chemistry, Botany,
          Zoology). All the labs are provided with latest and sophisticated
          equipment which can be seen in the best of degree college. Experienced
          lab co-ordinators and assistants see that each and every student is
          involved in every experiment and a student should integrate his
          theoretical skill with the practical experience.
        </p>
        <div className="grid-container5">
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390617/image25_tvjfat.png" alt="" className="item11" />
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390615/image19_zqdgey.png" alt="" className="item12" />
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390615/image21_lxbpgk.png" alt="" className="item13" />
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390617/image23_undzip.png" alt="" className="item14" />
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390617/image24_qupgpq.png" alt="" className="item15" />
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390618/image17_deh2t9.png" alt="" className="item16" />
        </div>
        <h1>Music Lab</h1>
        <p className="lab-para-content">
          {" "}
          Music education is a field of study associated with teaching and
          learning of music. It touches on all learning domains, including the
          psychomotor domain, the cognitive domain, and in particular and
          significant ways, the affective domain, the music appreciation and
          sensitivity. Music training from involvement with music is considered
          as a fundamental component of human culture and behavior.
        </p>
        <div className="lab-img-flex">
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390617/image22_p5ys7m.png" alt="" />
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390615/image20_hydlaa.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Laboratories;
