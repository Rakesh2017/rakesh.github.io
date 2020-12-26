import React from "react";
import image from "../images/carbonfootprint.png";

const CarbonPrint = () => {
  return (
    <div className="carbon-print-con featured-work-subject-con">
      <div className="image-con">
        <img src={image} alt="app-screenshot" />
      </div>
      <div className="info-con">
        <h4 className="title-h4">Carbon Print</h4>
        <a
          className="website-link-a"
          href="https://www.carbonprint.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;https://www.carbonprint.ca
        </a>
        <p className="info-p">
          Carbon print is a web platform where an individual can calculate the
          amount of carbon footprint they produced in relation to their daily
          activities. <br /> <br />
          • Orchestrated the team of eight members. <br />
          • Developed the backend on nodeJS. <br />
          • Implemented google Places APIs to autocomplete the field as user types.  <br />
          • Built the database on MySQL. Database is hosted on plesk server. <br />• Frontend structuring on react
          JSX. 
        </p>
        <nav className="tags-nav">
          <ul>
            <li>ReactJS</li>
            <li>ExpressJS</li>
            <li>CanvasJS</li>
            <li>NodeJS</li>
            <li>REST API</li>
            <li>Visualizations</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CarbonPrint;
