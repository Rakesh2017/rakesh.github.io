import React from "react";
import resume_image from "../../src/images/resume-rakesh.png";

export default function Resume() {
  function hide_resume(): any {
    document
      .querySelector(".main-resume-con-active")
      ?.classList.add("main-resume-con-disable");
    document
      .querySelector(".main-resume-con-disable")
      ?.classList.remove("main-resume-con-active");

    document
      .querySelector(".super-parent-con-disable")
      ?.classList.add("super-parent-con-active");
    document
      .querySelector(".super-parent-con-active")
      ?.classList.remove("super-parent-con-disable");
  }

  return (
    <div className="main-resume-con main-resume-con-disable">
      <div className="cross-con">
        <p className="resume-p">Resume</p>
        <i
          id="bar-btn"
          onClick={() => {
            hide_resume();
          }}
          className="fas fa-times"
        ></i>
      </div>
      <div className="resume-img-con">
        <img className="resume-img" src={resume_image} alt="resume" />
      </div>
      <button className="download-btn">Download pdf version</button>
    </div>
  );
}
