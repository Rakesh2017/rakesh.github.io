import React from "react";
import image from "../images/miinga.png";

const Miinga = () => {
  return (
    <div className="emc-con featured-work-subject-con">
      <div className="image-con">
        <img src={image} alt="app-screenshot" />
      </div>
      <div className="info-con">
        <div className='title-con'>
          <h4 className="title-h4">Miinga</h4>
          {/* <p className='date-p'>May 2021 - Current</p> */}
        </div>
        <a
          className="website-link-a link-android"
          href="https://play.google.com/store/apps/details?id=ca.iversoft.nunavutssm"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp; Android Play Store
        </a>
        {/* <div className="coming-soon-div">
        <button className="demo-btn">
          <a
            className="link-demo"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Quick Demo&nbsp;&nbsp;
          </a>
          <i className="fas fa-video icon-demo"></i>
        </button>
        </div> */}
        <p className="info-p">
          Miinga provides users with a variety of mental health resources and emergency services to choose from including healing by talking, medical travel, social services and much more. <br />
          <br />
          <ul>
            <li>Employed Jetpack Compose UI exclusively, showcasing proficiency in modern UI development.</li>
            <li>Engaged in client discussions to understand project specifications and effectively translated them into actionable tasks, highlighting strong communication skills.</li>
            <li>Ensured seamless online and offline functionality of the application by implementing local data storage using Room, optimized for efficient CRUD operations on extensive datasets.</li>
            <li>Played a pivotal role in enhancing the overall user experience of the application, collaborating closely with the UI and UX teams.</li>
            <li>Implemented a comprehensive CI/CD process for the app, including setting up triggers from Bitbucket to Azure DevOps for automated builds, deployment to App Center, and automated ticket progression based on DevOps builds.</li>
            <li>Established a streamlined mechanism for deploying draft APKs to the Play Store for release.</li>
          </ul>
        </p>
        <nav className="tags-nav">
          <ul>
            <li>Kotlin</li>
            <li>Jetpack Compose</li>
            <li>MVVM-usecase</li>
            <li>Retrofit</li>
            <li>Moshi</li>
            <li>Flows</li>
            <li>Coroutines</li>
            <li>Room</li>
            <li>CRUD</li>
            <li>Offline Capability</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Miinga;
