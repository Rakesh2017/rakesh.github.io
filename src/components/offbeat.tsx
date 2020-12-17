import React from "react";
import image from "../images/offbeat.jpg";

const Offbeat = () => {
  return (
    <div className="lovenders-con featured-work-subject-con">
      <div className="image-con">
        <img src={image} style={{ borderRadius: "8%" }} alt="app-screenshot" />
      </div>
      <div className="info-con">
        <h4 className="title-h4">OFFbeat</h4>
        <a
          className="website-link-a link-android"
          href="https://offbeatapp.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;https://www.offbeatapp.ca/
        </a>
        <p className="info-p">
          With OFFbeat, you can turn your travel journeys into an amazing personal
          adventure journal and even share it with world. <br /> <br />
          • I develop the backend with nodejs. <br />
          • Used OAuth 2.0 for authentication. <br />
          • Followed MVC pattern to develop REST APIs. <br />
          • For database, I have used MySql. <br />
          • Database and backend hosted on AWS EC2.
          <br />
        </p>
        <nav className="tags-nav">
          <ul>
            <li>react native</li>
            <li>react native CLI</li>
            <li>nodejs</li>
            <li>mysql</li>
            <li>oauth 2.0</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Offbeat;
