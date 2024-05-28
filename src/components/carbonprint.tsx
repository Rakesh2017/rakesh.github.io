import React from "react";
import image from "../images/carbonfootprint.png";

const CarbonPrint = () => {
  return (
    <div className="carbon-print-con featured-work-subject-con">
      <div className="image-con">
        <img src={image} alt="app-screenshot" />
      </div>
      <div className="info-con">
        <div className='title-con'>
          <h4 className="title-h4">Carbon Print</h4>
          {/* <p className='date-p'>April 2020 - Jul 2020</p> */}
        </div>
        <a style={{color:'grey'}}
          className="website-link-a"
          // href="https://www.carbonprint.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;https://www.carbonprint.ca
        </a>
        <p className="info-p">
          Carbon print is a web platform where an individual can calculate the
          amount of carbon footprint they produced in relation to their daily
          activities. <br /> <br />
          <ul>
            <li>Orchestrated the team of eight members.</li>
            <li>Developed the backend on NodeJS.</li>
            <li>Implemented Google Places APIs to autocomplete the field as the user types.</li>
            <li>Built the database on MySQL, hosted on a Plesk server.</li>
            <li>Structured the frontend using React JSX.</li>
          </ul>
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
