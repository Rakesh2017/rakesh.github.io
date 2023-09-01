import React, { useState } from "react";
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
        🌱 Hi, I'm Rakesh, welcome to my portfolio. Experienced Android developer with four years in crafting dynamic and user-centered mobile apps. Passionate about delivering efficient, elegant, and robust code. Collaborative team player skilled in the entire app development lifecycle. Excited to showcase a portfolio reflecting creativity, technical prowess, and a commitment to staying updated with industry trends.
          <br></br>
          Checkout some of my <a href="#work" style={{ textDecoration: 'none', color:"#54b689" }}>work</a> and feel free to contact me via <a
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
      </div>
      {/* about me  [ENDS]*/}

      {/* experience */}
      <div id="experience" className="expertise-con">
        <div>
          <h4 className="title-h4">Area of Experience</h4>
        </div>

        <div className="expertise-main-con">
          {/* 1 */}
          <div className="expertise-two-con info-con">
            <div className="image-con">
              <img src={smartphone} alt="icon 2" />
            </div>
            <h5 className="title-h5">Mobile Applications<br></br><span style={{ color: 'gray' }}>(Android Native & React Native)</span></h5>
            <p className="info-p">
            Possessing a robust four-year track record in the development of native Android applications and one year in React Native within the industry. 
            Demonstrating a profound mastery of Android MVVM and MVP architectures, leveraging both Kotlin and Java languages. 
            <br></br>
            <br></br>
            Committedly engaged in a variety of <a href="#work" style={{ textDecoration: 'none', color:"#54b689" }}>projects</a> that harnessed latest tech-stack including Jetpack Compose, Kotlin Coroutines, RxKotlin, LiveData, Flows, Retrofit, Hilt, and Room.
            </p>
          </div>
          {/* 2 */}
          <div className="expertise-one-con info-con">
            <div className="image-con">
              <img src={web} alt="icon 1" />
            </div>
            <h5 className="title-h5">Web Applications<br></br><span style={{ color: 'gray' }}>(ReactJS)</span></h5>
            <p className="info-p">
            Accumulating over a year of dedicated experience in crafting dynamic Web Applications. Displaying a strong focus on the React library, having engaged in intensive utilization. 
            Over the recent year, actively contributed to the success of two live projects, prominently centered around React and complemented by Node.js backend development.
            </p>
          </div>

        </div>
      </div>
      {/* experience [ENDS] */}
    </div>
  );
};

export default Welcome;