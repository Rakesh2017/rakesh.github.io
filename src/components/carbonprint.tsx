import React from "react";

const CarbonPrint = () => {
  return (
    <div className="carbon-print-con featured-work-subject-con">
      <div className="image-con">
        <img
          src="https://i.insider.com/5deaa13ffd9db220c4570004?width=1136&format=jpeg"
          alt=""
        />
      </div>
      <div className="info-con">
        <h4 className="title-h4">Carbon Print</h4>
        <a className="website-link-a" href="https://www.carbonprint.ca">
          &nbsp;www.carbonprint.ca
        </a>
        <p className="info-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ea
          aperiam repellendus dolorem expedita enim odio illum, consequatur
          nobis, repellat nostrum doloremque ullam unde porro quia placeat
          cupiditate corrupti neque.
        </p>
        <nav className="tags-nav">
          <ul>
            <li>ReactJS</li>
            <li>ExpressJS</li>
            <li>canvasJS</li>
            <li>nodeJS</li>
            <li>REST API</li>
            <li>Visualizations</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CarbonPrint;
