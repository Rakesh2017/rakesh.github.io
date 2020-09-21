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
          &nbsp;https://www.lovenders.com
        </a>
        <p className="info-p">
          Lovenders is a dating App. I built the front-end as well as back-end of Android App. I built this app for company (nrimb.com) based in Toronto.
          As of December 2019, it has more than 35,000 active users. <br/>
          <span className='note-span'>Note: Company decided to take down the App in late May 2020.</span>
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
