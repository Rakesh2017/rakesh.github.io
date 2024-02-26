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
          href="https://www.emc89.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;https://www.emc89.com/
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
          
          EMC stands out as a live sports betting and streaming platform, offering a diverse range of betting options and live streams for hundreds of leagues across various sports worldwide. <br /> 
           <br />
          • Collaborated closely with a multidisciplinary team of fifteen members, including Android and backend developers, UI/UX designers, and a product manager, adhering to an agile software development methodology with regular sprints and meticulous daily documentation. <br />
          • Managed complex data processing and intricate financial calculations within the app, leveraging advanced data structures to efficiently handle large datasets and computations.<br />
          • Specialized in implementing MVP and MVVM architecture using Kotlin, focusing on optimizing performance and reducing redundancy through industry best practices. <br />
          • Integrated APIs seamlessly using Retrofit and Android lifecycle-aware components to ensure robust connectivity and responsiveness. <br />
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
