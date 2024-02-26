import React from "react";
import CarbonPrint from "../components/carbonprint";
import Lovenders from "../components/lovenders";
import Realisting from "../components/realisting";
import Offbeat from "../components/offbeat";
import HappyFridge from "../components/happy-fridge";
import EMC from "./emc";
import Tablo from "./tablo";

const FeaturedWork = () => {
  return (
    <div id="work" className="featured-work-con">
      <div className="featured-work-title-con">
        <h4 className="featured-work-h3">Featured Work</h4>
      </div>
      <Tablo />
      <hr className="divider-hr" />
      <EMC />
      <hr className="divider-hr" />
      <Lovenders />
      <hr className="divider-hr" />
      <Offbeat />
      <hr className="divider-hr" />
      <HappyFridge />
      <hr className="divider-hr" />
      <CarbonPrint />
      <hr className="divider-hr" />
      <Realisting />
    </div>
  )
}

export default FeaturedWork;
