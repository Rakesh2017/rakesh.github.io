import React from "react";
import reactJS from "../images/logos/react.svg";
import vanillaJS from "../images/logos/js.svg";
import android from "../images/logos/android.svg";
import css from "../images/logos/css.svg";
import java from "../images/logos/java.svg";
import html from "../images/logos/html-5.svg";
import nodejs from "../images/logos/nodejs.svg";
import sql from "../images/logos/sql.svg";
import typescript from "../images/logos/typescript.svg";
import firebase from "../images/logos/firebase.svg";
import sass from "../images/logos/sass.svg";

const Languages = () => {
  return (
    <div className="language-con">
      {/* title */}
      <div className="title-con">
        <h4 className="title-h4">have worked on</h4>
      </div>
      {/* logos */}
      <div className="content-con">
        <div>
          <img className="language-logo-img" src={reactJS} alt="" />
          <p>ReactJS</p>
        </div>
        <div>
          <img className="language-logo-img" src={vanillaJS} alt="" />
          <p>Vanilla JS</p>
        </div>
        <div>
          <img className="language-logo-img" src={typescript} alt="" />
          <p>TypeScript</p>
        </div>
        <div>
          <img className="language-logo-img" src={nodejs} alt="" />
          <p>nodeJS</p>
        </div>
        <div>
          <img className="language-logo-img" src={html} alt="" />
          <p>HTML</p>
        </div>
        <div>
          <img className="language-logo-img" src={css} alt="" />
          <p>CSS</p>
        </div>
        <div>
          <img className="language-logo-img" src={sass} alt="" />
          <p>SASS</p>
        </div>
        <div>
          <img className="language-logo-img" src={android} alt="" />
          <p>Android</p>
        </div>
        <div>
          <img className="language-logo-img" src={java} alt="" />
          <p>JAVA</p>
        </div>
        <div>
          <img className="language-logo-img" src={firebase} alt="" />
          <p>Firebase</p>
        </div>
        <div>
          <img className="language-logo-img" src={sql} alt="" />
          <p>MySQL</p>
        </div>
      </div>
    </div>
  );
};

export default Languages;
