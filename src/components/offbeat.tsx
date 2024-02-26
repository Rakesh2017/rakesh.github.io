import React from "react";
import image from "../images/offbeat.jpg";

const Offbeat = () => {
  return (
    <div className="lovenders-con featured-work-subject-con">
      <div className="image-con">
        <img src={image} style={{ borderRadius: "8%" }} alt="app-screenshot" />
      </div>
      <div className="info-con">
        <div className="title-con">
          <h4 className="title-h4">OFFbeat</h4>
          {/* <p className="date-p">Sep 2020 - Dec 2020</p> */}
        </div>
        <a
          className="website-link-a link-android"
          href="https://offbeatapp.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;https://www.offbeatapp.ca/
        </a>
        <button
          className="demo-btn"
        >
          <a
            className="link-demo"
            href="https://drive.google.com/file/d/1mNFcq2OdlBtbaK-kxMU_7OEPpwP9_cW3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quick Demo&nbsp;&nbsp;
          </a>
          <i className="fas fa-video icon-demo"></i>
        </button>
        <p className="info-p">
          With OFFbeat, you can turn your travel journeys into an amazing
          personal adventure journal and even share it with world. <br /> <br />
          • Developed the backend with nodeJS. <br />
          • Followed MVC pattern to develop REST APIs. <br />
          • Implemented OAuth 2.0 for authentication. <br />
          • For database, used MySql. <br />
          • Database and backend hosted on AWS EC2.
          <br />
        </p>
        <nav className="tags-nav">
          <ul>
            <li>React Native</li>
            <li>React Native CLI</li>
            <li>Redux</li>
            <li>NodeJS</li>
            <li>MySQL</li>
            <li>OAuth 2.0</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Offbeat;
