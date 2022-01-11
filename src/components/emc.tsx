import React from "react";
import image from "../images/carbonfootprint.png";

const EMC = () => {
  return (
    <div className="emc-con featured-work-subject-con">
      <div className="image-con">
        <img src={image} alt="app-screenshot" />
      </div>
      <div className="info-con">
        <div className='title-con'>
          <h4 className="title-h4">E.M.C</h4>
          <p className='date-p'>May 2021 - Current</p>
        </div>
        <a
          className="website-link-a"
          href="https://www.carbonprint.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;https://www.carbonprint.ca
        </a>
        <p className="info-p">
          EMC is a live sports betting and streaming App. It has betting and streaming available for hundreds of leagues played in various games around the globe. <br /> <br />
          • Worked in a team of twelve android developers, backend developers and UI/UX developers. <br />
          • Mainly worked on MVP and MVVM architecture built on Kotlin. <br />
          • Implemented best practices to reduce redundancy and increase efficiency. <br />
          • Connect the APIs using Retrofit and android life-cycle aware components.{" "}
          <br />• Used the latest methodologies suggested by android development architecture documentation.
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
