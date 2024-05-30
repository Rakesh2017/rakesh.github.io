import React from "react";
import image from "../images/offbeat.jpg";

const Offbeat = () => {
  return (
    <div className="lovenders-con featured-work-subject-con">
      <div className="image-con">
        <img src={image} style={{ borderRadius: "8%" }} alt="app-screenshot" />
      </div>
      <div className="info-con">
        <div className="title-con">
          <h4 className="title-h4">OFFbeat</h4>
          {/* <p className="date-p">Sep 2020 - Dec 2020</p> */}
        </div>
        <a
          className="website-link-a link-android"
          href="https://offbeatapp.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;https://www.offbeatapp.ca/
        </a>
        <button
          className="demo-btn"
        >
          <a
            className="link-demo"
            href="https://drive.google.com/file/d/1mNFcq2OdlBtbaK-kxMU_7OEPpwP9_cW3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quick Demo&nbsp;&nbsp;
          </a>
          <i className="fas fa-video icon-demo"></i>
        </button>
        <p className="info-p">
          With OFFbeat, you can turn your travel journeys into an amazing
          personal adventure journal and even share it with world. <br /> <br />
          <ul>
            <li>Implemented OAuth 2.0 for secure authentication, ensuring that user credentials are protected and allowing for safe access to the application.</li>
            <li>Integrated Google Maps SDK to provide comprehensive location and map support, enabling users to select precise location metadata for clicked pictures, enhancing the contextual accuracy of the application.</li>
            <li>Utilized MySQL for the local database, efficiently managing extensive CRUD (Create, Read, Update, Delete) operations and ensuring data integrity and reliability.</li>
            <li>Hosted the database and backend on AWS EC2, leveraging Amazon's robust infrastructure to ensure high availability, scalability, and performance of the application.</li>
            <li>Played a key role in developing the backend using Node.js, focusing on creating a responsive and efficient server-side environment that handles client requests seamlessly.</li>
            <li>Followed the MVC (Model-View-Controller) pattern to structure and develop REST APIs, promoting organized code, ease of maintenance, and separation of concerns in the application's architecture.</li>
          </ul>
          <br />
        </p>
        <nav className="tags-nav">
          <ul>
            <li>React Native</li>
            <li>React Native CLI</li>
            <li>Redux</li>
            <li>Hooks</li>
            <li>NodeJS</li>
            <li>MySQL</li>
            <li>OAuth 2.0</li>
            <li>TypeScript</li>
            <li>EXList</li>
            <li>Jest</li>
            <li>RTK Query</li>
            <li>Styled-Components</li>
            <li>Next.js</li>
            <li>Cypress</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Offbeat;
