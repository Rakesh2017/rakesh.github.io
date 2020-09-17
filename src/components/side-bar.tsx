import React from "react";
import profileImage from '../images/profile.jpg'

const SideBar = () => {
  
  function toggle_side_bar(): any {
    document.querySelector('.toggle-con-1')?.classList.toggle('active')
    document.querySelector('.toggle-con-2')?.classList.toggle('active')
    document.querySelector('.toggle-con-3')?.classList.toggle('active')
    document.querySelector('.side-bar-con')?.classList.toggle('maximized')
  }

  return (
    <div className="side-bar-con minimized">
      <div className="cross-con">
        <i
          id="bar-btn"
          onClick={(event) => {
            toggle_side_bar();
          }}
          className="fas fa-bars"
        ></i>
      </div>
      <div className="content-con">
        {/* name */}
        <div className="name-con">
          <h1 className="name-h1">Rakesh</h1>
        </div>
        {/* profile image */}
        <div className="image-con disable toggle-con-1">
          <img
            src={profileImage}
            alt="profile image"
          />
        </div>
        <div className="info-con disable toggle-con-2">
          <p className="info-p">
            Hi, My name is rakesh. I welcome you to my portfolio website. I am
            Web and Mobile Application Developer.
          </p>
        </div>
        <div className="resume-con disable toggle-con-3">
          <button className="view-resume-btn">&nbsp;View Resume</button>
          <button className="download-resume-btn">&nbsp;Save Resume</button>
          <button className="hire-me-btn">&nbsp;Hire Me</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
