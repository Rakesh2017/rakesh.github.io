import React from "react";
import CarbonPrint from "../components/carbonprint";
import Lovenders from "../components/lovenders";

const FeaturedWork = () => {
  return (
    <div className="featured-work-con">
      <div className="featured-work-title-con">
        <h4 className="featured-work-h4">Featured Work</h4>
      </div>
      <CarbonPrint />
      <Lovenders />
    </div>
  );
};

export default FeaturedWork;
