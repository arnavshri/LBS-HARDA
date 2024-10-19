import { React, useState, useEffect } from "react";
import "../../Style/Activities/Galary.scss";
import axios from "axios";
import Masonry from "react-masonry-component";
import styled from "styled-components";
import ModalImage from "react-modal-image";
import LoadingScreen from "react-loading-screen";
import AOS from "aos";

import VisibilitySensor from "react-visibility-sensor";
import $ from "jquery";

function Galary() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const getImages = async () => {
    setLoading(true);
    await axios.get("https://lbs-harda.herokuapp.com/gallery").then((res) => {
      const data = res.data;
      setImages(data);
    });
    setLoading(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const Content = styled(Masonry)`
    min-height: 80vh;

    & > div {
      margin: 1%;
      width: ${(props) => (100 - 2 * props.columns) / props.columns}%;
    }
  `;

  useEffect(() => getImages(), []);

  AOS.init({
    duration: 2000,
  });

  function onChange(isVisible) {
    if (isVisible) {
      $(".Navbar").removeClass("fixed-top");
    }
  }

  return (
    <div className="Galary">
      <LoadingScreen
        loading={loading}
        bgColor="#ffffff"
        spinnerColor="#01471B"
        textColor="#01471B"
        logoSrc="https://res.cloudinary.com/lbs-harda/image/upload/v1658917314/CollegeLogo_dqno4q.png"
        text="Loading...."
      ></LoadingScreen>

      <VisibilitySensor onChange={onChange} scrollCheck={true}>
        <h2>Gallery</h2>
      </VisibilitySensor>
      
      <Content columns={window.innerWidth <= 990 ? 2 : 4}>
        {images.length > 0
          ? images.map((value, index) => {
              let height = Math.floor(Math.random() * 400 + 200);
              // let width = Math.floor(Math.random() * 400 + 400);
              // data-aos="fade"
              return (
                <div className="imgCont" style={{ height: `${height}px` }}>
                  <ModalImage
                    className="img-fluid"
                    small={
                      value.avatar
                    }
                    large={
                      value.avatar
                    }
                    hideZoom={true}
                    hideDownload={true}
                    alt={`img${index}`}
                  />
                </div>
              );
            })
          : null}
      </Content>
    </div>
  );
}

export default Galary;
