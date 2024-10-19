import React,{useEffect} from "react";
import "../.././Style/AboutUs/AboutUs.scss";
import "../.././Style/AboutUs/Awards.scss";
import VisibilitySensor from "react-visibility-sensor";
import $ from "jquery";

function Awards() {
  function onChange(isVisible) {
    if (isVisible) {
      $(".Navbar").removeClass("fixed-top");
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div id="LKPS" className="aboutHead">
      <VisibilitySensor onChange={onChange} scrollCheck={true}>
        <h1>LATE SHRI RAMESH PRASAD KHARE SMRITI AWARD</h1>
      </VisibilitySensor>
      <div className="awards">
        <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643389472/Shri_Ramesh_Prasad_Khare_fsf53l.png" alt="" />

        <h4>Lt. Shri Ramesh Prasad Khare</h4>
        <p>
          This was started in 2011. The object of this award is to promote and
          honour the condivibution of an individual towards the society in the
          field of Social Work, Sports, Education etc. <br />
          <span>Lt. Shri Ramesh Prasad Khare</span> was one of the founder
          member of the society running this college. He was a kind person and
          played very important role in getting LBS at such heights. The name of
          the person for the award is selected by a committee having renowned
          and dedicated persons as its members.
        </p>
      </div>
      <div className="awr">
        <h3>OUR AWARD WINNERS ARE:</h3>
        <div className="awardsList">
          <div className="adm-box">
            <div className="procedure">
              <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643392239/2016_brnf5t.jpg" alt="img1" className="awardImg" />
            </div>
            <div className="procedure-con">
              <h4>SHRI RAMESH PRASAD KHARE SMRITI AWARD 2016 :</h4>
              <p>
                Shri Sanjay Mamu Tenguriya for his devotion in sports specially
                “Arts“.
              </p>
            </div>
          </div>

          <div className="adm-box">
            <div className="procedure">
              <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643392239/2015_z4rdoo.jpg" alt="img1" className="awardImg" />
            </div>
            <div className="procedure-con">
              <h4>SHRI RAMESH PRASAD KHARE SMRITI AWARD 2015 :</h4>
              <p>Smt. Usha Goyal for his devotion in “Social Work“.</p>
            </div>
          </div>

          <div className="adm-box">
            <div className="procedure">
              <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643392239/2014_llxvdm.jpg" alt="img1" className="awardImg" />
            </div>
            <div className="procedure-con">
              <h4>SHRI RAMESH PRASAD KHARE SMRITI AWARD 2014 :</h4>
              <p>Shree Manohar Garg (Mama) for devotion in “Social Work“.</p>
            </div>
          </div>

          <div className="adm-box">
            <div className="procedure">
              <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643392240/2013_rmqiif.jpg" alt="img1" className="awardImg" />
            </div>
            <div className="procedure-con">
              <h4>SHRI RAMESH PRASAD KHARE SMRITI AWARD 2013 :</h4>
              <p>
                Shri Shree Prakash Navle(Prakash Dada) for devotion in “Sports
                divaining“.
              </p>
            </div>
          </div>

          <div className="adm-box">
            <div className="procedure">
              <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643392240/2012_rik04b.jpg" alt="img1" className="awardImg" />
            </div>
            <div className="procedure-con">
              <h4>SHRI RAMESH PRASAD KHARE SMRITI AWARD 2012 :</h4>
              <p>
                Shri Shivraj Singh Rajput for his devotion in sports specially
                “Kabbadi“.
              </p>
            </div>
          </div>

          <div className="adm-box">
            <div className="procedure">
              <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643392240/2011_zm8ryg.jpg" alt="img1" className="awardImg" />
            </div>
            <div className="procedure-con">
              <h4>SHRI RAMESH PRASAD KHARE SMRITI AWARD 2011 :</h4>
              <p>Shree Narayan Das Mundra for devotion in “Social Work“.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
