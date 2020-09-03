import React from "react";
import CarbonPrint from "../components/carbonprint";
import Lovenders from "../components/lovenders";

const FeaturedWork = () => {
  return (
    <div className="featured-work-con">
      <div className="featured-work-title-con">
        <h3 className="featured-work-h3">Featured Work</h3>
      </div>
      <CarbonPrint />
      <hr className="divider-hr" />
      <Lovenders />
    </div>
  );
};

export default FeaturedWork;
