import React,{useEffect} from "react";
import "../../Style/CoursesAndRecognition/TeacherCourses.scss";
import VisibilitySensor from "react-visibility-sensor";
import $ from "jquery"

function BA() {
  function onChange(isVisible) {
    if (isVisible) {
      $(".Navbar").removeClass("fixed-top");
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="tc">
      <VisibilitySensor onChange={onChange} scrollCheck={true}>
        <div className="headingcontainer">
          <h3>Biometric Attendance Data</h3>
        </div>
      </VisibilitySensor>

      <table className="table table-bordered align-middle my-4">
        <thead className="table-light">
          <tr>
            <th>Month</th>
            <th>Classes</th>
            <th>Attachment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>July</td>
            <td>B.Ed</td>
            <td>
              <a href="/">Click here for weekly details</a>
            </td>
          </tr>
          <tr>
            <td>July</td>
            <td>D.El.Ed</td>
            <td>
              <a href="/">Click here for weekly details</a>
            </td>
          </tr>
          <tr>
            <td>August</td>
            <td>B.Ed</td>
            <td>
              <a href="/">Click here for weekly details</a>
            </td>
          </tr>
          <tr>
            <td>August</td>
            <td>D.El.Ed</td>
            <td>
              <a href="/">Click here for weekly details</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BA;
