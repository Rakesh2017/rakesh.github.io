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
        <a className="website-link-a" href="https://www.carbonprint.ca" target="_blank"
                rel='noopener noreferrer'>
          &nbsp;https://www.carbonprint.ca
        </a>
        <p className="info-p">
          A Carbon footprint is the number of greenhouse gases, primarily carbon
          dioxide, released into the atmosphere by your daily activities. Carbon
          Print helps you to calculate your carbon emissions produced by food,
          travelling etc. Calculate your carbon footprint in few minutes.
        </p>
        <nav className="tags-nav">
          <ul>
            <li>ReactJS</li>
            <li>ExpressJS</li>
            <li>canvasJS</li>
            <li>nodeJS</li>
            <li>REST API</li>
            <li>Visualizations</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CarbonPrint;
