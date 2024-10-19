import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../.././Style/LandingPage/Announcement.scss";
import VisibilitySensor from "react-visibility-sensor";
import $ from "jquery";
import axios from "axios";

function Announcement(props) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function onChange(isVisible) {
    if (isVisible) {
      $(".Navbar").removeClass("fixed-top");
    }
  }

  const [images, setImages] = useState([]);
  // const [loading, setLoading] = useState(true);

  const getImages = async () => {
    // setLoading(true);
    await axios.get("https://lbs-harda.herokuapp.com/corousel").then((res) => {
      const data = res.data;
      setImages(data);
    });
    // setLoading(false);
  };

  useEffect(() => getImages(), []);

  return (
    <VisibilitySensor onChange={onChange} scrollCheck={true}>
      <div className="main">
        <Slider {...settings}>
          {images.length > 0
            ? images.map((value, index) => {
                return (
                  <div>
                    <img
                      src={value.avatar}
                      className="Campus"
                      alt={`capmus-${index}`}
                    />
                  </div>
                );
              })
            : null}
        </Slider>
      </div>
    </VisibilitySensor>
  );
}

export default Announcement;
