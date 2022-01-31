import React from "react";
import servers from "../images/servers.svg";
import smartphone from "../images/smartphone.svg";
import web from "../images/web.svg";

const Welcome = () => {
  return (
    <div className="welcome-con">
      {/* about me */}
      <div className="about-me-con">
        <h4 className="title-h4">About Me</h4>
        <p className="info-p">
          🌱 Hi, My name is Rakesh. I{" "}
          {/* am <span style={{borderRadius:'0.1rem', backgroundColor:'#54b689', color:'white', paddingLeft:'0.1rem', paddingRight:'0.1rem'}}>Full Stack Developer</span>  */}{" "}
          live in Vancouver, Canada. Have three years industry experience in
          Mobile Application Development, one year experience in Web
          Development. I have been programming for four years and
          throughout these working experiences, I have learnt optimal coding practices
          and working in team following various software development techniques.
          Checkout some of my work and feel free to contact me via <a
              href="mailto:rakesh22717@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-email"
              title="rakesh22717@gmail.com"
            >email
          </a> or <a
                href="https://www.linkedin.com/in/rakesh07/"
                target="_blank"
                rel="noopener noreferrer"
              className="link-email"
              title="linkedin.com/in/rakesh07/"
            >linkedin
          </a> if you had like to work together.
        </p>
        <hr className="divider" />
        <p className="info-p avaliablity-p">
          {/* {" "}
          I am open for full time job positions of{" "}
          <span className="keywords">
            Mobile Application developer
          </span> and{" "}
          <span className="keywords">Web Application Developer</span>.
          <span className="keywords">Backend Developer</span>. */}

        I am currently employed as <span className="keywords">Android Developer</span> in well reputed organization based in Vancouver Downtown. However, I will be open for full time inter-mediate Android Application Developer position by April 2022.
        </p>
      </div>
      {/* about me  [ENDS]*/}

      {/* experience */}
      <div id="experience" className="expertise-con">
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
              Experience of more than one year in developing Web Applications.
              Worked intensively on React library. During the past year, worked
              on two live projects majorly developed on React, and Node.js.
            </p>
          </div>

          {/* 2 */}
          <div className="expertise-two-con info-con">
            <div className="image-con">
              <img src={smartphone} alt="icon 2" />
            </div>
            <h5 className="title-h5">Mobile Applications</h5>
            <p className="info-p">
              Have industry experience of three years in developing
              native android applications. Excellent understanding of 
              android MVVM and MVP architecture with Kotlin and Java. Have one year of experience in
              Kotlin and two years in Java.
            </p>
          </div>

          {/* 3 */}
          <div className="expertise-three-con info-con">
            <div className="image-con">
              <img src={servers} alt="icon 3" />
            </div>
            <h5 className="title-h5">Backend Development</h5>
            <p className="info-p">
              Experience of one year in backend development. Expertise is in
              Express - Node.js (MVC) with MySQL to create REST APIs.
              Entry-level knowledge of Graphql Apollo Server as well.
            </p>
          </div>
        </div>
      </div>
      {/* experience [ENDS] */}
    </div>
  );
};

export default Welcome;
