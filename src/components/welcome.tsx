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
          completed by Dec 2020].
        </p>
        <hr className="divider" />
        <p className="info-p avaliablity-p">
          {" "}
          I am open for part-time jobs in developing{" "}
          <span className="keywords">Web Applications</span> and{" "}
          <span className="keywords">Native Android Applications</span>. I will be
          available for full-time job from January 2021.
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
              <img src={icon1} alt="icon 1" />
            </div>
            <h5 className="title-h5">Website Development</h5>
            <p className="info-p">
              I have experience of about one year in developing Web Applications. I have worked on reactjs library (I love to work on reactjs coupled with expressjs). For backend I can work on javascript, typescript, nodejs + expressjs(REAST APIs), google cloud functions, firebase, and sql. Whereas for frontend I can work on JSX, HTML, CSS, SASS. 
            </p>
          </div>

          {/* 2 */}
          <div className="expertise-two-con info-con">
            <div className="image-con">
              <img src={icon2} alt="icon 2" />
            </div>
            <h5 className="title-h5">Android Application Development</h5>
            <p className="info-p">
             I have industry experience of more than one year in developing native android applications. I have worked intensively on JAVA with XML to develop android applications. I can work on JAVA, firebase, XML, google cloud functions, firebase/firestore, and mysql and various dependencies. 
            </p>
          </div>

          {/* 3 */}
          <div className="expertise-three-con info-con">
            <div className="image-con">
              <img src={icon3} alt="icon 3" />
            </div>
            <h5 className="title-h5">WordPress</h5>
            <p className="info-p">
              I can built a custom theme for your wordpress website with custom posts. Additionally,
              I can manage your already working wordpress website.
            </p>
          </div>
        </div>
      </div>
      {/* experience [ENDS] */}
    </div>
  );
};

export default Welcome;
