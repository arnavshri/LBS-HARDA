import React,{useEffect} from "react";
import "../../Style/Library.scss";

import VisibilitySensor from "react-visibility-sensor";
import $ from "jquery";

function Library() {
  function onChange(isVisible) {
    if (isVisible) {
      $(".Navbar").removeClass("fixed-top");
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="library">
      <div id="lib-flex">
        <VisibilitySensor onChange={onChange} scrollCheck={true}>
          <h1 className="lib-heading">LIBRARY</h1>
        </VisibilitySensor>
      </div>
      <div className="lib-content">
        <h1>Central Library of LBS College</h1>
        <p>
          The Central Library of LBS provides vital support for on-going Courses
          and Programmes. The library is rapidly developing its collection of
          books, reference books, periodicals, journals and electronic
          resources. At present the library has a collection of over 8,500+
          books, which includes textbooks and reference books and a selected
          collection of books on Sports, Art & Craft, Music, Gardening, Physical
          Education, Child Psychology and General Knowledge. The magazine and
          newspaper section includes includes popular magazines and newspapers
          both in English and Hindi languages.
          <br />
          <br />
        </p>
        <span className="lib-staff">
          <b>Head Librarian : </b>Shri Vinod Yadav (B.Com, B.Lib.)
          <br />
          <b>Assistant : </b>Shri Om Prakash Yadav <br />
          <b>Timings of the library : </b>9:30am to 1:30pm
        </span>
        <h1>Library Photos</h1>
        <div className="grid-container3">
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390382/lib1_xjbhgz.jpg" alt="" classname="item1" />
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390378/lib2_g5zqjd.jpg" alt="" classname="item2" />
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390379/lib3_wxntxl.jpg" alt="" classname="item3" />
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390381/lib4_iorfaz.jpg" alt="" classname="item4" />
        </div>
      </div>
    </div>
  );
}

export default Library;
