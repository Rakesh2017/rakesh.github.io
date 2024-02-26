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
          href="https://play.google.com/store/search?q=tablo&c=apps"
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
          • Worked on a comprehensive UI overhaul utilizing Jetpack Compose UI, enhancing the visual experience. <br />
          • Established a robust connection between Tablo (a physical device) and Android device, leveraging both WiFi protocols and Ethernet connectivity. This breakthrough enables users to seamlessly access OTA and OTT channels via their home WiFi network.<br />
          • Streamlined and optimized the performance of the live TV grid, a task of high complexity given the potential combination of thousands of shows. Implemented a efficient algorithm to manage scrolling and click interactions effectively. <br />
          • Collaborated harmoniously within an 11-member team, operating within a dynamic 2-week scrum framework. <br />
          • Collaboratively engaged with the Team Lead to architect project scope, facilitate PIP planning, conduct sprint retrospectives, and orchestrate overarching project management strategies. This experience provided invaluable insights into project coordination and leadership dynamics.<br />  
        </p>
        <nav className="tags-nav">
          <ul>
            <li>Kotlin</li>
            <li>Jetpack Compose Functions</li>
            <li>MVVM-usecase</li>
            <li>Retrofit/ Moshi</li>
            <li>RxKotlin</li>
            <li>Reactive Programming</li>
            <li>Coroutines</li>
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
