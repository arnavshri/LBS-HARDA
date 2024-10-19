import React from 'react'
import "../.././Style/LandingPage/Facilities.scss"

function Facilities() {
    return (
        <div className=" facilities container">
        <div className="row">
            
            <div className="col-lg-auto col-sm-3 fLogo">
                <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648914483/mmc_muvpek_-_blue_zaqk4q.png" alt="" />
                <p>Multimedia Classroom</p>
            </div>
                
                
            <div className="col-lg-auto col-sm-3 fLogo">
                <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648914483/cl_c4cw58_-_blue_q717tv.png" alt="" />
                <p>Central Library </p>
            </div>
                  
            <div className="col-lg-auto col-sm-3 fLogo">
                <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648914638/sf_xo48bm_-_blue_o3yjr8.png" alt="" />
                <p>Sports Facility</p>
            </div>

            <div className="col-lg-auto col-sm-3 fLogo">
                <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648914483/aud_dism45_-blue_ha05hw.png" alt="" />
                <p>Auditorium</p>
            </div>

            <div className="col-lg-auto col-sm-3 fLogo">
                <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648914666/wifiIcon_govrzf_-_blue_wnjfki.png" alt="" />
                <p>Wifi Facility </p>
            </div>
            
            <div className="col-lg-auto col-sm-3 fLogo">
                <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648914483/bf_tp3my0_-_blue_mhvedz.png" alt="" />
                <p>Bus Facility</p>
            </div>
            
            <div className="col-lg-auto col-sm-3 fLogo">
                <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648914483/nss_u24qpy_-_blue_iq8lgw.png" alt="" />
                <p>NSS Facility </p>
            </div>
            <div className="col-lg-auto col-sm-3 fLogo" id="digi">
                <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648914483/dsc_qnkvuz_-_blue_ijxwfl.png" alt="" />
                <p>Digitally Secured Campus</p>
            </div>
        </div>
        </div>
    )
}

export default Facilities
