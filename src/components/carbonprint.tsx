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
          Carbonprint is an application build on reactjs library with expressjs. In this project, I was appointed as project manager. Although my primary duty was to take care of backend plus database. Entire backend and database was designed and developed by me. <br/> <br/>
          • For backend, I used vanilla javascript. <br/>
          • REST APIs is developed on nodejs with expressjs. <br/>
          • Database is built on mysql.
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
