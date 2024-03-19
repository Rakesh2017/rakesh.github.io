import React, { useState, useEffect, useRef } from "react";
import image from "../images/portfolio-background.jpg";

interface ChildProps {
  scaleValue: number;
}

const Header: React.FC<ChildProps> = ({scaleValue}) => {

  return (
    <header id='#header-me' className="header-con">
      {/* header main container */}
      {/* name and designation BLOCK */}
      <img
        className="header-background-img"
        src={image}
        alt="background"
       style={{ transform: 'scaleY(' + scaleValue + ')'}}
      />
      <div className="header-content-child-con">
        <div>
          {/* designation */}
          <div>
            <h1 className="designation-h1">
              Senior Mobile<br/> Application developer<br/> 
              {/* <span>developer</span> */}
            </h1>
            <span className="designation-p">(Android Native & React Native)</span>
          </div>
          <br/>
          {/* name */}
          <div className="name-con">
            {/* <h3 className="name-h3">rakesh</h3> */}
          </div>
          {/* email */}
          <div className="email-con">
            <p className="email-p">rakesh22717@gmail.com</p>
          </div>
        </div>
        {/* name and designation BLOCK [ENDS] */}

        {/* social links */}
        <nav className="social-links-nav">
          <ul>
            {/* linkdein */}
            <li>
              <a
                className="visually-hidden"
                href="http://linkedin.com/in/rakesh-aa3135117"
                target="_blank"
                rel='noopener noreferrer'
              >
                linkedin
              </a>
              <a
                className="icon-link"
                href="http://linkedin.com/in/rakesh-aa3135117"
                target="_blank"
                rel='noopener noreferrer'
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            {/* github */}
            <li>
              <a
                className="visually-hidden"
                href="https://github.com/Rakesh2017"
                target="_blank"
                rel='noopener noreferrer'
              >
                Github
              </a>
              <a
                className="icon-link"
                href="https://github.com/Rakesh2017"
                target="_blank"
                rel='noopener noreferrer'
              >
                <i className="fab fa-github-square"></i>
              </a>
            </li>
            {/* stack over flow */}
            <li>
              <a
                className="visually-hidden"
                href="https://stackoverflow.com/users/7872344/rakesh-kumar"
                target="_blank"
                rel='noopener noreferrer'
              >
                Stack over flow
              </a>
              <a
                className="icon-link"
                href="https://stackoverflow.com/users/7872344/rakesh-kumar"
                target="_blank"
                rel='noopener noreferrer'
              >
                <i className="fab fa-stack-overflow"></i>
              </a>
            </li>
          </ul>
        </nav>
        {/* social links [ENDS] */}
      </div>
    </header>
  );
};

export default Header;
