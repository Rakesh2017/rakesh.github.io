import React from "react";
import servers from "../images/servers.svg";
import smartphone from "../images/smartphone.svg";
import web from "../images/web.svg";

const Welcome = () => {
  return (
    <div className="welcome-con">
      {/* about me */}
      <div className="about-me-con">
        <h4 className="title-h4">welcome</h4>
        <p className="info-p">
          Hi, I am Full Stack Developer living in Vancouver, Canada. I have
          two years industry experience in native android application
          development. Whereas I have more than one year experience in Web
          Application and Backend Development.
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
      <div id='experience' className="expertise-con">
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
              reactJS.
            </p>
          </div>

          {/* 2 */}
          <div className="expertise-two-con info-con">
            <div className="image-con">
              <img src={smartphone} alt="icon 2" />
            </div>
            <h5 className="title-h5">Mobile Applications</h5>
            <p className="info-p">
              I have industry experience of more than two years in developing
              native android applications. I worked on JAVA and google
              API services. Whereas I have 6 months experience of developing hybrid mobile applications on react native.
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
              expertise is in expressJS (MVC) with MySQL to create REST APIs. I
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
