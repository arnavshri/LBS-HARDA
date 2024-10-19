import "./App.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TeacherCourses from "./components/CoursesAndRecognition/TeacherCourses";
import LandingPage from "./components/LandingPage/LandingPage";
import LandAndBuilding from "./components/Infrastructure/LandAndBuilding";
import Library from "./components/Infrastructure/Library";
import Classrooms from "./components/Infrastructure/Classrooms";
import Laboratories from "./components/Infrastructure/Laboratories";
import ContactUs from "./components/ContactUs";
import PageNotFound from "./components/PageNotFound";
import PrincipalMsg from "./components/AboutUs/PrincipalMsg";
import GoverningBody from "./components/AboutUs/GoverningBody";
import About from "./components/AboutUs/About";
import Awards from "./components/AboutUs/Awards";
import Committees from "./components/AboutUs/Committees";
import UGAndPG from "./components/CoursesAndRecognition/UGAndPG";
import NSS from "./components/Activities/NSS";
import Galary from "./components/Activities/Galary";
import Admission from "./components/Admission/Admission";
import BEd from "./components/Admission/BEd";
import DElEd from "./components/Admission/DElEd";
import OnlineAdm from "./components/Admission/OnlineAdm";
import OnlinePayment from "./components/OnlinePayment";
import { useEffect } from "react";
import jQuery from "jquery";
import BA from "./components/CoursesAndRecognition/BA";
import Other from "./components/Infrastructure/Other";
import News from "./components/LandingPage/News";

function App() {

  jQuery.noConflict();
  useEffect(() => {
    window.$('#ytModal').modal('show');
  }, [])

  return (
    <Router>
      <div className="App">
        <Navbar />
        
          <div id="ytModal" className="modal fade">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">LBS Harda</h4>
                  <button type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true">×</button>
                </div>
                <div className="modal-body">
                  <iframe id="Geeks3" className="responsive-iframe"
                    src=
                    "https://www.youtube.com/embed/dDIebJPcKig" title="modalYT"
                    frameBorder="0" allowFullScreen allow='autoplay'>
                  </iframe>
                </div>
              </div>
            </div>
          </div>

        <Switch>
          {/* Landing Page  */}
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/pay">
            <OnlinePayment />
          </Route>

          {/* News  */}
          <Route exact path="/news">
            <News/>
          </Route>


          {/* Departments  */}
          <Route exact path="/tc">
            <TeacherCourses />
          </Route>
          <Route exact path="/ugnpg">
            <UGAndPG />
          </Route>
          <Route exact path="/ba">
            <BA/>
          </Route>

          {/* Infrastructure  */}
          <Route exact path="/lnb">
            <LandAndBuilding />
          </Route>
          <Route exact path="/lib">
            <Library />
          </Route>
          <Route exact path="/classroom">
            <Classrooms />
          </Route>
          <Route exact path="/laboratory">
            <Laboratories />
          </Route>
          <Route exact path="/oi">
            <Other/>
          </Route>

          {/* Admission */}
          <Route exact path="/adm">
            <Admission />
          </Route>
          <Route exact path="/bed">
            <BEd />
          </Route>
          <Route exact path="/deled">
            <DElEd />
          </Route>
          <Route exact path="/online">
            <OnlineAdm />
          </Route>

          {/* Activities  */}
          <Route exact path="/nss">
            <NSS />
          </Route>
          <Route exact path="/pg">
            <Galary />
          </Route>

          {/* About Us  */}
          <Route exact path="/pm">
            <PrincipalMsg />
          </Route>
          <Route exact path="/agb">
            <GoverningBody />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/awr">
            <Awards />
          </Route>
          <Route exact path="/com">
            <Committees />
          </Route>

          {/* Contact Us  */}
          <Route exact path="/contact">
            <ContactUs />
          </Route>

          {/* 404 Page Not Found  */}
          <Route exact path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
