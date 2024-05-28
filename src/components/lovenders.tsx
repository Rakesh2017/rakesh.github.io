import React from "react";
import image from "../images/lovenders.png";

const Lovenders = () => {
  return (
    <div className="lovenders-con featured-work-subject-con">
      <div className="image-con">
        <img src={image} alt="app-screenshot" />
      </div>
      <div className="info-con">
        <div className="title-con">
          <h4 className="title-h4">Lovenders</h4>
          {/* <p className="date-p">Nov 2018 - Mar 2019</p> */}
        </div>
        <a
          className="website-link-a link-android"
          href="https://drive.google.com/file/d/1D97fUiCDvzPg4nBtTiecWg_C_o9WzXRU/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;Download APK
        </a>
        <br />
        <button className="demo-btn">
          <a
            className="link-demo"
            href="https://drive.google.com/file/d/1VA_pPG8EuWUVzDdUE_4UWOqPkPdfvlTd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quick Demo&nbsp;&nbsp;
          </a>
          <i className="fas fa-video icon-demo"></i>
        </button>

        <p className="info-p">
          Lovenders is a dating Android Application build on JAVA. As of May
          2022, it has more than 35,000 active users. <br />
          <br />
          <ul>
            <li>Developed Whole Android client part.</li>
            <li>Implemented Right Left Swipe Actions with cards.</li>
            <li>Integrated Google in-app purchases supported for three currencies.</li>
            <li>Built Chatting Feature on Firebase.</li>
            <li>Used Google SDK to integrate Google Login, Facebook endpoints to integrate Facebook login, Firebase Auth for Phone login.</li>
          </ul>
          {/* <span className='note-span'>Note: For some reasons company decided to take down the App in late July 2020.</span> */}
        </p>
        <nav className="tags-nav">
          <ul>
            <li>Java</li>
            <li>Firebase</li>
            <li>PHP</li>
            <li>REST API</li>
            <li>Google cloud functions</li>
            <li>Google APIs</li>
            <li>Google Maps</li>
            <li>Offline Capabilities</li>
            <li>Google, Facebook and Phone Logins</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Lovenders;
