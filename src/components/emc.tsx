import React from "react";
import image from "../images/emc.png";

const EMC = () => {
  return (
    <div className="emc-con featured-work-subject-con">
      <div className="image-con">
        <img src={image} alt="app-screenshot" />
      </div>
      <div className="info-con">
        <div className='title-con'>
          <h4 className="title-h4">E.M.C</h4>
          {/* <p className='date-p'>May 2021 - Current</p> */}
        </div>
        <a
          className="website-link-a link-android"
          href="https://www.yibeivip.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;https://www.yibeivip.com
        </a>
        <div className="coming-soon-div">
        <button className="demo-btn">
          <a
            className="link-demo"
            href="https://drive.google.com/file/d/1_-oOMbDVOCDuhZmMXVLv1SRut7Ae0o-1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quick Demo&nbsp;&nbsp;
          </a>
          <i className="fas fa-video icon-demo"></i>
        </button>
        </div>
        <p className="info-p">
          EMC is a live sports betting and streaming App. It has betting and streaming available for hundreds of leagues played in various games around the globe. <br /> 
           <br />
          • Collaborated with a team of fifteen members composed of android developers, back-end developers, UI/UX developers, and product manager. Team worked on agile software development process	 with routine and weekly sprints. Every development was documented properly at end of the day. <br />
          • App extensively requires complex data handling and manipulation with absolute handling of financial calculations. To manage this, I have learned and implemented optimal data structures which can handle large sets of data and calculations.<br />
          • Mainly worked on MVP and MVVM architecture built on Kotlin. <br />
          • Implemented best practices to reduce redundancy and increase efficiency. <br />
          • Connect the APIs using Retrofit and android life-cycle aware components.{" "}<br />
          • Used the latest methodologies suggested by android development architecture documentation.<br />        
        </p>
        <nav className="tags-nav">
          <ul>
            <li>Kotlin</li>
            <li>JAVA</li>
            <li>MVVM/MVP</li>
            <li>Retrofit/ REST APIs</li>
            <li>Live Data</li>
            <li>XML</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default EMC;
