import React from "react";
import image from "../images/tablo.png";

const Tablo = () => {
  return (
    <div className="emc-con featured-work-subject-con">
      <div className="image-con">
        <img src={image} alt="app-screenshot" />
      </div>
      <div className="info-con">
        <div className='title-con'>
          <h4 className="title-h4">Tablo TV</h4>
          {/* <p className='date-p'>May 2021 - Current</p> */}
        </div>
        <a
          className="website-link-a link-android"
          href="https://play.google.com/store/apps/details?id=com.nuvyyo.TabloCordova"
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
          Tablo TV stands as a live streaming application that empowers users to seamlessly stream both OTA and OTT channels through their home WiFi network. <br />
          <br />
          <ul>
            <li>Led a comprehensive UI overhaul using Jetpack Compose UI, significantly enhancing the visual experience and gaining proficiency in modern Android UI design techniques.</li>
            <li>Streamlined and optimized the performance of the live TV grid, managing the complexity of thousands of shows. Implemented an efficient algorithm to handle scrolling and click interactions effectively, which honed my skills in performance optimization and algorithm design.</li>
            <li>Collaborated effectively within an 11-member team, working within a dynamic 2-week scrum framework. This experience strengthen my teamwork and agile project management skills.</li>
            <li>Worked closely with the Team Lead to architect project scope, facilitate PIP planning, conduct sprint retrospectives, and manage overall project strategies. This provided me with invaluable insights into project coordination and leadership dynamics, further developing my project management and leadership skills.</li>
            <li>Established a robust connection between Tablo (a physical device) and Android devices using both WiFi protocols and Ethernet connectivity. This breakthrough allowed users to seamlessly access OTA and OTT channels via their home WiFi network, deepening my understanding of network protocols and device communication.</li>
          </ul>
        </p>
        <nav className="tags-nav">
          <ul>
            <li>Kotlin</li>
            <li>Jetpack Compose</li>
            <li>MVVM-usecase</li>
            <li>Retrofit</li>
            <li>Moshi</li>
            <li>RxKotlin</li>
            <li>Room</li>
            <li>Analytics+Crashlytics</li>
            <li>Dagger Hilt</li>
            <li>Reactive Programming</li>
            <li>Coroutines & Flows</li>
            <li>Wifi Protocols</li>
            <li>Leanback</li>
            <li>Live TV Grid</li>
            <li>Server controlled UI</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Tablo;
