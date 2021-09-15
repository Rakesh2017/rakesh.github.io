import React from "react";
import ExpTemplate from "./exp-template";

const WorkExperience = () => {
  const dev = "Android Developer";
  return (
    <div className="work-exp-con">
      <div>
        <h4 className="work-exp-h4">Work Experience</h4>
      </div>
      <div className='exp-content-con'>
      <ExpTemplate
          company={"Skythinking Technology Co. Ltd."}
          designation={dev}
          date={"May 2021 - current"}
        />
        <ExpTemplate
          company={"IntelligentOutsourcing"}
          designation={dev}
          date={"December 2018 - April 2019"}
        />
        <ExpTemplate
          company={"CarByke"}
          designation={dev}
          date={"June 2018 - November 2018"}
        />
        <ExpTemplate
          company={"Enhabyto IT Solutions"}
          designation={dev}
          date={"August 2017 - May 2018"}
        />
      </div>
    </div>
  );
};

export default WorkExperience;
