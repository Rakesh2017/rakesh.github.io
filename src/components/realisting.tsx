import React from "react";
import image from "../images/realisting.png";

const Realisting = () => {
  return (
    <div className="realisting-con featured-work-subject-con">
      <div className="image-con">
        <img src={image} alt="app-screenshot" />
      </div>
      <div className="info-con">
        <div className="title-con">
          <h4 className="title-h4">Realisting</h4>
          {/* <p className="date-p">Jan 2020 - Mar 2020</p> */}
        </div>
        <a
          className="website-link-a"
          href="https://realistings.wmdd.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;https://realistings.wmdd.ca
        </a>
        <p className="info-p">
          Realisting is a platform (build on wordpress) which provides a one-stop solution to all the
          problems and needs that come your way in buying or selling any
          property. <br />
          <br />
          • Developed the custom theme and design along with carousel. <br />
        </p>
        <nav className="tags-nav">
          <ul>
            <li>Wordpress</li>
            <li>Wordpress Custom theme</li>
            <li>PHP</li>
            <li>Phonegap</li>
            <li>Firebase</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Realisting;
