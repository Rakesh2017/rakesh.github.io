import React from "react";
import profileImage from "../images/profile-pic.jpg";

const SideBar = () => {
  // toggle side bar
  function toggle_side_bar(): any {
    document.querySelector(".toggle-con-1")?.classList.toggle("active");
    document.querySelector(".toggle-con-2")?.classList.toggle("active");
    document.querySelector(".toggle-con-3")?.classList.toggle("active");
    document.querySelector(".side-bar-con")?.classList.toggle("maximized");
  }

  // show resume and hide the main/hero container
  function show_resume(): any {
    document.querySelector(".main-resume-con-disable")?.classList.add("main-resume-con-active");
    document.querySelector(".main-resume-con-active")?.classList.remove("main-resume-con-disable");
    document.querySelector(".super-parent-con-active")?.classList.toggle("super-parent-con-disable");
  }

  const resume_download_url = 'https://drive.google.com/file/d/1be5g4NvwbkOC0gZM6185zCJKxdhKwH28/view?usp=sharing'; 
  const cv_url = "https://read.cv/rakesh7"
  
  return (
    <div className="side-bar-con minimized">
      <div className="cross-con">
        <i
          id="bar-btn"
          onClick={() => {
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
          <img src={profileImage} alt="profile" />
        </div>
        <div className="info-con disable toggle-con-2">
          <p className="info-p">
            WELCOME TO MY PORTFOLIO
          </p>
        </div>
        <div className="resume-con disable toggle-con-3">
           {/* view resume */}
          {/* <button
            className="view-resume-btn"
            onClick={() => {
              show_resume();
            }}
          >
            &nbsp;View Resume
          </button> */}
          <button className="download-resume-btn">
            &nbsp;
            <a
              className="download-a"
              target='_blank'
              href={resume_download_url}
              download="resume"
            >
              Download Resume
            </a>
          </button>
          <button className="view-cv-btn">
            &nbsp;
            <a
              className="download-a"
              target='_blank'
              href={cv_url}
              download="resume"
            >
              View CV
            </a>
          </button>
          <button className="hire-me-btn">
            &nbsp;{" "}
            <a className="hire-a" href="#hire-me">
              Get In Touch
            </a>{" "}
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default SideBar
