import React from "react";
import image from "../images/lovenders.png";

const Lovenders = () => {
  return (
    <div className="lovenders-con featured-work-subject-con">
      <div className="image-con">
        <img src={image} alt="app-screenshot" />
      </div>
      <div className="info-con">
        <h4 className="title-h4">Lovenders</h4>
        <a className="website-link-a" href="https://www.lovenders.com" target="_blank"
                rel='noopener noreferrer'>
<!-- TODO:  need changes in web url, redirect to https://apkpure.com/lovenders/com.united.lovender  -->
          &nbsp;https://www.lovenders.com
        </a>
        <p className="info-p">
          Lovenders is a Native dating Android Application build on JAVA. I mainly worked on frontend and backend of application where as datbase and APIs(built on php) was taken care by DA team. As of May 2020, it has more than 35,000 active users. <br/><br/>
          • I worked on JAVA to build a backend application. <br/>
          • XML as frontend. <br/>
          • Login/ Authentication integrations (google, phone, facebook).
          <br/>
          {/* <span className='note-span'>Note: For some reasons company decided to take down the App in late July 2020.</span> */}
        </p>
        <nav className="tags-nav">
          <ul>
            <li>Java</li>
            <li>Firebase</li>
            <li>PHP</li>
            <li>REST API</li>
            <li>GCF</li>
            <li>XML</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Lovenders;
