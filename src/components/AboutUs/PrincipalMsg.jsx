import React,{useEffect} from "react";
import "../.././Style/AboutUs/AboutUs.scss";
import "../.././Style/AboutUs/PrincipalMsg.scss";
import VisibilitySensor from "react-visibility-sensor";
import $ from "jquery";

function PrincipalMsg() {
  function onChange(isVisible) {
    if (isVisible) {
      $(".Navbar").removeClass("fixed-top");
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="PrincipalMsg aboutHead">
      <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643389235/Principal_uz27lh.png" className="prinImg" alt=""></img>
      <div className="TopSection">
        <VisibilitySensor onChange={onChange} scrollCheck={true}>
          <h1>PRINCIPAL'S MESSAGE</h1>
        </VisibilitySensor>
        <div className="hl"></div>
        <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643389235/Principal_uz27lh.png" className="mobPrinImg" alt=""></img>
      </div>

      <div className="message">
        <div className="pvl"></div>

        <div className="msgContent">
          <p>
            The academic year 2021-2022 is the 22 Year Completion of Lal
            Bahadur Shastri Vyavsayik Adhayayan Mahavidyalaya, Harda. On this
            occasion, I wish to congratulate its Ex Principals Mr R. S.
            Khirwadkar and Dr G.M.A. Ramani, Teaching and Non-Teaching Staff, Ex
            and Present Students for their commendable achievement. I have great
            pleasure in conveying my best wishes to all of you.
          </p>
          <p>
            Lal Bahadur Shastri Vyavsayik Adhayayan Mahavidyalaya, Harda has
            a reputation for attracting the best students in their chosen
            faculty. It is a matter of great pride that the College has made
            consistent progress, year on year, in academic and co-curricular
            activities.
          </p>
          <p>
            Lal Bahadur Shastri Vyavsayik Adhayayan Mahavidyalaya, Harda is
            known as No.1 college in Harda District and amongst the top 10
            colleges of Madhya Pradesh. This is a tribute to its standard of
            excellence in academics and commitment to quality education.
          </p>
          <p>
            The role played by its management and staff in the overall
            development of the personality of students which has been enabled by
            the various co-curricular and cultural activities taking place in
            the College is also appreciated.
          </p>
          <p>
            Challenges and Opportunities are two sides of the same coin.
            Modern education, curriculum development and teaching methodologies
            are the key features of our success. The manager, businessman and
            the entrepreneur of today needs and many more weapons are there in
            our Institution’s armoury.
          </p>
          <p>
            Overall development of the individual is the goal of education
            and we all have to ensure that there is no stone left unturned to
            equip the student of today for the challenges of life. This will
            require tremendous self-motivation on the part of all concerned but
            will be fulfilling for the student as well as the faculty.
          </p>
          <p>
            The faculty and curriculum of the College has always been a trend
            setter but what has also been noteworthy is the excellent support
            and commitment of the non-teaching staff. I wish to congratulate the
            entire faculty and other staff for encouraging and guiding the
            students in all aspects of their well rounded development.
          </p>
          <p>
            I wish you all the best for achieving greater success and scaling
            newer heights in your education and career ahead.
          </p>
          <div className="designation">
            <h5>May God bless us all.</h5>
            <h5>Dr. Rajeev Kumar Khare</h5>
            <h5>(Principal)</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrincipalMsg;
