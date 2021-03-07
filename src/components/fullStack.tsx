import React from "react";
import reactJS from "../images/logos/react.svg";
import vanillaJS from "../images/logos/js.svg";
import android from "../images/logos/android.svg";
import html from "../images/logos/html-5.svg";
import nodejs from "../images/logos/nodejs.svg";
import sql from "../images/logos/sql.svg";
import firebase from "../images/logos/firebase.svg";
import graphQL from "../images/logos/graphql.svg";
import typescript from "../images/logos/typescript.svg";

const FullStack = () => {
  return (
    <div id="fullstack" className="stack-con">
      <div className="stack-con">
        <h4 className="stack-h3">Technologies</h4>
      </div>
      <div className="stack-content-con">
        {/* mobile */}
        <div>
          <h5 className="stack-title-h5">Mobile Applications</h5>
          <div className="mobile-con subject-con">
            <div className="tech-con">
              <img src={android} alt="" />
              <p className="language-p">Native Android</p>
            </div>
            <div className="tech-con">
              <img src={reactJS} alt="" />
              <p className="language-p">React Native</p>
            </div>
          </div>
        </div>

        {/* front end */}
        <div>
          <h5 className="stack-title-h5">Languages/ Libraries</h5>
          <div className="front-con subject-con">
            <div className="tech-con">
              <img src={reactJS} alt="" />
              <p className="language-p">React</p>
            </div>
            <div className="tech-con">
              <img src={vanillaJS} alt="" />
              <p className="language-p">JavaScript</p>
            </div>
            <div className="tech-con">
              <img src={typescript} alt="" />
              <p className="language-p">TypeScript</p>
            </div>
            <div className="tech-con">
              <img src={html} alt="" />
              <p className="language-p">HTML & SASS</p>
            </div>
          </div>
        </div>

        {/* database */}
        <div>
          <h5 className="stack-title-h5">Database</h5>
          <div className="front-con subject-con">
            <div className="tech-con">
              <img src={sql} alt="" />
              <p className="language-p">MySQL</p>
            </div>
            <div className="tech-con">
              <img src={firebase} alt="" />
              <p className="language-p">Firebase & Firestore</p>
            </div>
          </div>
        </div>

        {/* backend */}
        <div>
          <h5 className="stack-title-h5">Backend</h5>
          <div className="back-con subject-con">
            <div className="tech-con">
              <img src={nodejs} alt="" />
              <p className="language-p">Node.js</p>
            </div>
            <div className="tech-con">
              <img src={graphQL} alt="" />
              <p className="language-p">Apollo GraphQL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullStack;
