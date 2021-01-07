import React from "react";
import image from "../images/lovenders.png";

const Lovenders = () => {
  return (
    <div className="lovenders-con featured-work-subject-con">
      <div className="image-con">
        <img src={image} alt="app-screenshot" />
      </div>
      <div className="info-con">
      <div className='title-con'>
          <h4 className="title-h4">Lovenders</h4>
          <p className='date-p'>Nov 2018 - Mar 2019</p>
        </div>
        <a
          className="website-link-a link-android"
          href="https://apkpure.com/lovenders/com.united.lovender"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;https://apkpure.com/lovenders/com.united.lovender
        </a>
        <p className="info-p">
          Lovenders is a Native dating Android Application build on JAVA. As of May 2020, it
          has more than 35,000 active users. <br />
          <br />
          • Developed Whole Android client part. <br />
          • Implement Right Left Swipe Actions with cards. <br />
          • Integrated Google in app purchases supported for three currencies. <br />
          • Built Chatting Feature on firebase. <br />
          • Used Google SDK to integrate Google Login, Facebook endpoints to integrate Facebook login, Firebase Auth for Phone login.
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
