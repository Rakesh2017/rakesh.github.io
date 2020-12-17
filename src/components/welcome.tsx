import React from "react";
import servers from "../images/servers.svg";
import android from "../images/android.svg";
import web from "../images/web.svg";

const Welcome = () => {
  return (
    <div className="welcome-con">
      {/* about me */}
      <div className="about-me-con">
        <h4 className="title-h4">welcome</h4>
        <p className="info-p">
          Hello, I am Full Stack Developer living in Vancouver, Canada. I have
          two years industry experience in native android application
          development. Whereas I have more than 1 year experience in Web
          Application and Backend development.
        </p>
        <hr className="divider" />
        <p className="info-p avaliablity-p">
          {" "}
          I am open for full time jobs as{" "}
          <span className="keywords">Android developer</span>
          {", "}
          <span className="keywords">Web Application Developer</span> and{" "}
          <span className="keywords">Backend Developer</span>.
        </p>
      </div>
      {/* about me  [ENDS]*/}

      {/* experience */}
      <div className="expertise-con">
        <div>
          <h4 className="title-h4">Area of Experience</h4>
        </div>

        <div className="expertise-main-con">
          {/* 1 */}
          <div className="expertise-one-con info-con">
            <div className="image-con">
              <img src={web} alt="icon 1" />
            </div>
            <h5 className="title-h5">Web Applications</h5>
            <p className="info-p">
              I have experience of more than one year in developing Web
              Applications. I have worked intensively on reactJS library. During
              the past year, I worked on two live projects majorly developed on
              reactJS with SASS.
            </p>
          </div>

          {/* 2 */}
          <div className="expertise-two-con info-con">
            <div className="image-con">
              <img src={android} alt="icon 2" />
            </div>
            <h5 className="title-h5">Android Development</h5>
            <p className="info-p">
              I have industry experience of more than two years in developing
              native android applications. I majorly worked on JAVA and google
              API services.
            </p>
          </div>

          {/* 3 */}
          <div className="expertise-three-con info-con">
            <div className="image-con">
              <img src={servers} alt="icon 3" />
            </div>
            <h5 className="title-h5">Backend Development</h5>
            <p className="info-p">
              I have experience of more than one year in backend development. My
              expertise is in nodeJS (MVC methodology) to create REST APIs. I
              have entry-level knowledge of Graphql Apollo Server as well.
            </p>
          </div>
        </div>
      </div>
      {/* experience [ENDS] */}
    </div>
  );
};

export default Welcome;
