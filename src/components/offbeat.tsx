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
          <ul>
            <li>Developed the backend with NodeJS.</li>
            <li>Followed MVC pattern to develop REST APIs.</li>
            <li>Implemented OAuth 2.0 for authentication.</li>
            <li>Used MySQL for the database.</li>
            <li>Database and backend hosted on AWS EC2.</li>
          </ul>
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
