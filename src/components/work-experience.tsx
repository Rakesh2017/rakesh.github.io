import React from "react";
import ExpTemplate from "./exp-template";

const WorkExperience = () => {
  const inter_dev = "Intermediate Android Developer";
  const dev = "Android Developer";
  const freelancer = "Freelancer Android Developer";
  return (
    <div className="work-exp-con">
      <div>
        <h4 className="work-exp-h4">Work Experience</h4>
      </div>
      <div className='exp-content-con'>
      <ExpTemplate
          company={"Iversoft Solutions"}
          designation={inter_dev}
          date={"May 2022 - Feb 2024"}
        />
      <ExpTemplate
          company={"Skythinking Technology Co. Ltd."}
          designation={dev}
          date={"May 2021 - April 2022"}
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
  );
};

export default WorkExperience;
