import React from "react";

interface IProps {
  company: any;
  designation: any;
  date: any;
}

const ExpTemplate = ({ company, designation, date }: IProps) => {
  return (
    <div className="temp-con">
      <h5 className="company">{company}</h5>
      <div className='desi-con'>
        <p className="designation">{designation}</p>
        <p className="date">{date}</p>
      </div>
    </div>
  );
};

export default ExpTemplate;
