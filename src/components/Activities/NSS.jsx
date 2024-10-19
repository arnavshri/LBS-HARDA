import React,{useEffect} from "react";
import "../../Style/Activities/NSS.scss";
import Marquee from "react-fast-marquee";
import VisibilitySensor from "react-visibility-sensor";
import $ from "jquery";

function NSS() {
  function onChange(isVisible) {
    if (isVisible) {
      $(".Navbar").removeClass("fixed-top");
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="NSS">
      <VisibilitySensor onChange={onChange} scrollCheck={true}>
        <div className="row nss-row">
          <div className="col-3 nss-col">
            <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390956/NSS1_mmppv2.png" alt="NSS1" />
          </div>
          <div className="col-6 nss-col">
            <h4>राष्‍ट्रीय सेवा योजना</h4>
            <h4>National Service Scheme</h4>
            <h4>युवा कार्यक्रम और खेल मंत्रालय</h4>
            <h4>Ministry of Youth Affairs and Sports</h4>
          </div>
          <div className="col-3 nss-col">
            <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390956/NSS2_gcyept.png" alt="NSS2" />
          </div>
        </div>
      </VisibilitySensor>

      <div className="hr"></div>

      <div className="content-nss">
        <h1>National Service Scheme</h1>
        <h5>NSS Unit of LBS</h5>

        <p>
          The National Service Scheme (NSS) is available in this college since
          2005-2006 academic year. In this scheme a special camp of ten days
          duration is organized for students. Students of this college were
          selected at the state level, at the University level and also at
          National level. Regular programme are organized in this scheme at
          “Gokul Gram”, “Nirmal Gram” and at the “Adopted Gram” in the area.
        </p>

        <h3>What is NSS?</h3>

        <p>
          National Service Scheme, under the Ministry of Youth Affairs & Sports
          Govt. of India, popularly known as NSS was launched in Gandhiji’s
          Birth Centenary Year 1969, in 37 Universities involving 40,000
          students with primary focus on the development of personality of
          students through community service. Today, NSS has more than 3.2
          million student volunteers on its roll spread over 298 Universities
          and 42 (+2) Senior Secondary Councils and Directorate of Vocational
          Education all over the country. From its inception, more than 3.75
          crores students from Universities, Colleges and Institutions of higher
          learning have benefited from the NSS activities, as student
          volunteers.
        </p>
      </div>

      <div className="row programs">
        <div className="col-6 program">
          <h3>Objectives behind the NSS:</h3>
          <ul>
            <li>
              To enable the students to understand the community in which they
              work.
            </li>
            <li>To understand themselves in relation to their community.</li>
            <li>
              To identify the needs & problems in the community in the solution
              of which they can be involved.
            </li>
            <li>
              To develop among themselves a sense of social and civic
              responsibility.
            </li>
            <li>
              To apply their education in finding practical solution to
              individual and community problems.
            </li>
            <li>
              To develop competence required for group living and sharing
              responsibilities.
            </li>
            <li>Gain skills in mobilizing community participation.</li>
            <li>To acquire leadership qualities and democratic attitude.</li>
            <li>
              To develop capacity to meet emergencies and national disasters
            </li>
            <li>To practice national integration.</li>
          </ul>
        </div>

        <div className="col-6 program">
          <h3>Routine programs</h3>
          <p>
            Routine programs are organized in the campus of the institute as per
            the list of programs and mentioned in the calendar provided by the
            university. Some of these programs are as given:
          </p>
          <ul>
            <li>
              Orientation program at the beginning of session to introduce the
              students and newcomers about N.S.S.
            </li>
            <li>Plantation program</li>
            <li>Communal harmony day program</li>
            <li>N.S.S foundation day program</li>
            <li>Literacy awareness program</li>
            <li>Anti–tobacco and anti–drugs program</li>
            <li>World Aids day</li>
            <li>Blood donation program</li>
            <li>Youth week etc.</li>
          </ul>
        </div>
      </div>

      <div className="row NSSboxes">
        <Marquee gradient={false} pauseOnHover={true}>
          <div className="col-3 NSSbox">
            <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390956/NSS_01_lvebye.jpg" alt="NSS1" />
          </div>
          <div className="col-3 NSSbox">
            <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390956/NSS_02_n5qwud.jpg" alt="NSS2" />
          </div>
          <div className="col-3 NSSbox">
            <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390956/NSS_03_zbj38s.jpg" alt="NSS3" />
          </div>
          <div className="col-3 NSSbox">
            <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643390956/NSS_04_xzksxw.jpg" alt="NSS4" />
          </div>
        </Marquee>
      </div>

      <div className="content-nss my-5">
        <h3>One day camp and Seven days residential rural camp</h3>

        <p>
          In the whole session some of outdoor programs and activities are
          organized in the surrounding areas of the city and out of the city i.e
          in the rural areas. Two one day camps are conducted in the slums and
          poor locality areas which are thrust of basic facilities. In this camp
          programs related to awareness about water conservation, cleanliness,
          education to every children, money saving, save baby girls, duties for
          the nation, traffic awareness, anti–liquor and other intoxicant
          substances, polythene free areas etc are conducted.
        </p>

        <p>
          Seven days rural residential camp conducted in the village is the main
          activity of N.S.S . In this camp N.S.S volunteers takes part very
          strongly and waits every year for participation in such camp. As per
          the norms maximum 50 students can participate in the one day camp and
          seven days rural camp. The seven days rural residential camp helps the
          students to know about the rural life and to create awareness about
          problems facing by village people. In these camp volunteers conduct
          rallies in which the students give message through slogans related to
          social problems, short term play (nukkad natak) and printed material
          related to aids awareness are distributed. Clean environment, save
          baby girls, anti–tobacco, money saving and other activities are also a
          part of this camp. General Health check–up camp is also conducted with
          the help of government agencies for the old age and needy people of
          villages. This rural camp brings a lot of positive change among the
          N.S.S volunteers which create confidence and overall development among
          them. At the end of the camp, participants get certificates from
          village panchayat which helps to motivate them.
        </p>
      </div>
    </div>
  );
}

export default NSS;
