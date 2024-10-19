import React from "react";
import "../.././Style/LandingPage/Aboutus.scss";

function AboutUS() {
  
  return (
    <div className="AboutUs">
      <h1>About Us:</h1>
      <div className="images">
        <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643389158/image6_gh82xy.png"alt=""/>
      </div>

      <div className="content">
        <div className="english"></div>
        <p>
          Lal Bahadur Shastri Vyavsayik Adhyayan Mahavidyalaya, Harda was
          established on 1st July 2000, with the objective of providing
          education among the poor and educationally backward class.
          <br />
          <span
            style={{
              textAlign: "right",
              fontSize: "1.2rem",
              color: "#216FDB",
              cursor: "pointer",
            }}
            data-toggle="modal"
            data-target="#aboutUsModalLong"
          >
            {/* Read more {">"}
            {">"} */}
          </span>
        </p>

        <p id="hindi">
          लाल बहादुर शास्त्री व्यावसायिक अध्ययन महाविद्यालय, हरदा में आपका
          स्वागत है। हम आपकी प्रवेश प्रक्रिया और महाविद्यालयीन शिक्षा को आसान और
          उच्च स्तरीय बनाने हेतु प्रतिबद्ध हैं। हमें पूर्ण विश्वास है कि यह
          संस्थान आपको जीवन में ऊँचाइयाँ हासिल करने में महत्वपूर्ण भूमिका अदा
          करेगा।
        </p>
      </div>
    </div>
  );
}

export default AboutUS;
