import React from "react";
import icon1 from "../images/icons/icon1.png";
import icon2 from "../images/icons/icon2.png";
import icon3 from "../images/icons/icon3.png";

const Welcome = () => {
  return (
    <div className="welcome-con">
      {/* about me */}
      <div className="about-me-con">
        <h4 className="title-h4">welcome</h4>
        <p className="info-p">
          Hello, I am backend developer living in Vancouver, Canada. I had
          worked for two years in mobile Application development industry.
          Currently I am pursuing Post-Graduation in Web and Mobile application
          design and development at Langara College, Vancouver, Canada [Will be
          completed by Dec 2020]. <hr className="divider" /> I am open for
          part-time jobs in <span className="keywords">developing Web Applications</span> and{" "}
          <span className="keywords">Native Android Applications</span>. I
          am available for full-time job from January 2021.
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
              <img src={icon1} alt="" />
            </div>
            <h5 className="title-h5">Website Development</h5>
            <p className="info-p">
              Do you want a fully responsive, data driven, dynamic or static Web
              App? You're at right place. I knew the latest technologies used in
              current industry to build a responsive Web Applications. I have a
              knowledge of both backend as well as front end, along with
              databases.
            </p>
          </div>

          {/* 2 */}
          <div className="expertise-two-con info-con">
            <div className="image-con">
              <img src={icon2} alt="" />
            </div>
            <h5 className="title-h5">Android Application Development</h5>
            <p className="info-p">
              Do you want a native, data driven, dynamic or static Android Application?
              I have a experience of 2 years in android application development. I can assure for the quality work and with high standard results in accordance with Software Requirement Specification.
            </p>
          </div>

          {/* 3 */}
          <div className="expertise-three-con info-con">
            <div className="image-con">
              <img src={icon3} alt="" />
            </div>
            <h5 className="title-h5">WordPress</h5>
            <p className="info-p">
              You want your website on wordpress but can not find suitable theme matching with your design UI? No Problem! I can built a custom theme 
              for your wordpress website with custom posts. Additionally, I can manage your already working wordpress website.
            </p>
          </div>
        </div>
      </div>
      {/* experience [ENDS] */}
    </div>
  );
};

export default Welcome;
