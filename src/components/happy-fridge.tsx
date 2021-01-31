import React from "react";
import image from "../images/happy-fridge.png";

const HappyFridge = () => {
  return (
    <div className="lovenders-con featured-work-subject-con">
      <div className="image-con">
        <img src={image} alt="app-screenshot" />
      </div>
      <div className="info-con">
        <div className="title-con">
          <h4 className="title-h4">Happy Fridge</h4>
          <p className="date-p">Dec 2020 - Current</p>
        </div>
        {/* <a
          className="website-link-a link-android"
          href="https://apkpure.com/lovenders/com.united.lovender"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;https://apkpure.com/lovenders/com.united.lovender
        </a> */}
        <p className="info-p">
          Happy Fridge recommends a recipe automatically based on maximization of
          user's leftovers. It has dashboard  where users can keep track of their leftover usage histories. <br />
          <br />
          • Used expo to build the application <br />
          • Developed frontend of  an app using react JSX components and hooks. <br />
          • Implement the backend connections with apollo graphql client. <br />
          {/* <span className='note-span'>Note: For some reasons company decided to take down the App in late July 2020.</span> */}
        </p>
        <nav className="tags-nav">
          <ul>
            <li>react native</li>
            <li>apollo graphql</li>
            <li>JSX</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HappyFridge;
