import React from "react";
import image from "../images/lovenders.png";

const Lovenders = () => {
  return (
    <div className="lovenders-con featured-work-subject-con">
      <div className="image-con">
        <img src={image} alt="" />
      </div>
      <div className="info-con">
        <h4 className="title-h4">Lovenders</h4>
        <a className="website-link-a" href="https://www.lovenders.com">
          &nbsp;https://www.lovenders.com
        </a>
        <p className="info-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ea
          aperiam repellendus dolorem expedita enim odio illum, consequatur
          nobis, repellat nostrum doloremque ullam unde porro quia placeat
          cupiditate corrupti neque.
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
