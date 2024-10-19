import React ,{useEffect}from "react";
import "../../Style/Classrooms.scss";

import VisibilitySensor from "react-visibility-sensor";
import $ from "jquery";

function Classrooms() {
  function onChange(isVisible) {
    if (isVisible) {
      $(".Navbar").removeClass("fixed-top");
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div style={{}}>
      <div id="cls-flex">
        <VisibilitySensor onChange={onChange} scrollCheck={true}>
          <h1 className="cls-heading">CLASSROOMS</h1>
        </VisibilitySensor>
      </div>
      <div className="cls-content">
        <h1 className="clas-heading">Multimedia Classrooms</h1>
        <div className="multi-cls">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
            euismod nisi porta lorem mollis. Curabitur gravida arcu ac tortor
            dignissim convallis aenean et. Magna eget est lorem ipsum dolor sit
            amet consectetur. Integer malesuada nunc vel risus commodo viverra
            maecenas accumsan. Enim ut tellus elementum sagittis. Lacus sed
            turpis tincidunt id. Tortor condimentum lacinia quis vel eros donec
            ac odio. Sit amet commodo nulla facilisi nullam vehicula. Proin nibh
            nisl condimentum id venenatis a condimentum vitae. Amet risus nullam
            eget felis. Fermentum posuere urna nec tincidunt. Odio tempor orci
            dapibus ultrices in iaculis nunc. Est sit amet facilisis magna etiam
            tempor orci. Blandit aliquam etiam erat velit scelerisque in dictum
            non. Aliquet nibh praesent tristique magna sit.Laoreet non curabitur
            gravida arcu. Sit amet consectetur adipiscing elit ut aliquam purus
            sit. Pellentesque adipiscing commodo elit at imperdiet dui.
          </p>
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390496/image7_vynpfr.png" alt="" />
        </div>
        <h1 className="clas-heading" style={{ marginTop: "4%" }}>
          Big Classrooms
        </h1>
        <div className="multi-cls">
          <div className="img-flex">
            <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390496/image8_m4m2hy.png" alt="" />
            <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390495/image9_cgytdd.png" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
            pharetra vel turpis nunc. Mus mauris vitae ultricies leo. Malesuada
            fames ac turpis egestas. Egestas diam in arcu cursus euismod quis.
            Orci ac auctor augue mauris augue neque. Imperdiet proin fermentum
            leo vel.Libero id faucibus nisl tincidunt.Egestas diam in arcu
            cursus euismod quis. Orci ac auctor augue mauris augue neque.
            Imperdiet proin fermentum leo vel.Libero id faucibus nisl
            tincidunt.Egestas diam in arcu cursus euismod quis. Orci ac auctor
            augue mauris augue neque. Imperdiet proin fermentum leo vel.Libero
            id faucibus nisl tincidunt.Egestas diam in arcu cursus euismod quis.
            Orci ac auctor augue mauris augue neque. Imperdiet proin fermentum
            leo vel.Libero id faucibus nisl tincidunt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Classrooms;
