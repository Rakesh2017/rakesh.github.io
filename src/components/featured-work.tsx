import React from "react";
import CarbonPrint from "../components/carbonprint";
import Lovenders from "../components/lovenders";
import Realisting from "../components/realisting";
import Offbeat from "../components/offbeat";

const FeaturedWork = () => {
  return (
    <div className="featured-work-con">
      <div className="featured-work-title-con">
        <h3 className="featured-work-h3">Featured Work</h3>
      </div>
      <CarbonPrint />
      <hr className="divider-hr" />
      <Offbeat />
      <hr className="divider-hr" />
      <Lovenders />
      <hr className="divider-hr" />
      <Realisting />
    </div>
  );
};

export default FeaturedWork;
