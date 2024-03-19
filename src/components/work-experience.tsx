import React from "react";
import ExpTemplate from "./exp-template";

const WorkExperience = () => {
  const senior_dev = "Senior Mobile Application Developer";
  const inter_dev = "Intermediate Mobile Developer";
  const dev = "Android Developer";
  const freelancer = "Freelancer Android Developer";
  return (
    <div className="work-exp-con">
      <div>
        <h4 className="work-exp-h4">Work Experience</h4>
      </div>
      <div style={{ position:"relative" }}>
        {/* <div id="line1" className="horizontal-line" /> */}
        {/* <div id="line2" className="horizontal-line" /> */}
        <div className='exp-content-con'>
          <ExpTemplate
            company={"Iversoft Solutions"}
            designation={senior_dev}
            date={"May 2022 - Mar 2024"}
          />
          <ExpTemplate
            company={"Skythinking Technology Co. Ltd."}
            designation={dev}
            date={"May 2021 - April 2022"}
          />
          <ExpTemplate
            company={"PG in Mobile and Web Advance Design and  Development"}
            designation={""}
            date={"Aug 2019 - Jan 2021"}
          />
          <ExpTemplate
            company={"IntelligentOutsourcing"}
            designation={dev}
            date={"December 2018 - April 2019"}
          />
          <ExpTemplate
            company={"CarByke"}
            designation={freelancer}
            date={"June 2018 - November 2018"}
          />
          <ExpTemplate
            company={"Enhabyto IT Solutions"}
            designation={dev}
            date={"August 2017 - May 2018"}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
