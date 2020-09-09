import React from "react";

const SideBar = () => {
  return (
    <div className="side-bar-con">
      {/* name */}
      <div className="name-con">
        <h1 className="name-h1">Rakesh</h1>
      </div>
      {/* profile image */}
      <div className="image-con">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuZfZq9tllEgk_3z9bFGx-NLTS2vRcpSdB0Q&usqp=CAU"
          alt="profile image"
        />
      </div>
      <div className="info-con">
        <p className="info-p">
          Hi, My name is rakesh. I welcome you to my portfolio website. I am Web
          and mobile Application Developer.
        </p>
      </div>
      <div className="resume-con">
        <button className="view-resume-btn">&nbsp;View Resume</button>
        <button className="download-resume-btn">&nbsp;Save Resume</button>
        <button className="hire-me-btn">&nbsp;Hire Me</button>
      </div>
    </div>
  );
};

export default SideBar;
