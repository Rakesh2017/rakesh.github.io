import React from "react";
import icon1 from "../images/icons/icon1.png";
import icon2 from "../images/icons/icon2.png";
import icon3 from "../images/icons/icon3.png";

const Welcome = () => {
  return (
    <div className="welcome-con">
      {/* about me */}
      <div className="about-me-con">
        <h4 className="title-h4">welcome</h4>
        <p className="info-p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non vero
          necessitatibus laudantium perferendis esse! Non nesciunt sit ipsum
          obcaecati consequuntur pariatur. Nisi autem eius nostrum odit, cumque
          repellat ipsam ab.
        </p>
      </div>
      {/* about me  [ENDS]*/}

      {/* experience */}
      <div className="expertise-con">
        <div>
          <h4 className="title-h4">Area of Experience</h4>
        </div>

        <div className="expertise-main-con">
          {/* 1 */}
          <div className="expertise-one-con info-con">
            <div className="image-con">
              <img src={icon1} alt="" />
            </div>
            <h5 className="title-h5">Website Development</h5>
            <p className="info-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              totam sapiente, harum doloremque omnis, excepturi sit cumque,
              iusto deserunt minima voluptatem sequi in enim natus quia velit
              consequatur magnam iure.
            </p>
          </div>

          {/* 2 */}
          <div className="expertise-two-con info-con">
            <div className="image-con">
              <img src={icon2} alt="" />
            </div>
            <h5 className="title-h5">Android Application Development</h5>
            <p className="info-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              totam sapiente, harum doloremque omnis, excepturi sit cumque,
              iusto deserunt minima voluptatem sequi in enim natus quia velit
              consequatur magnam iure.
            </p>
          </div>

          {/* 3 */}
          <div className="expertise-three-con info-con">
            <div className="image-con">
              <img src={icon3} alt="" />
            </div>
            <h5 className="title-h5">WordPress</h5>
            <p className="info-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              totam sapiente, harum doloremque omnis, excepturi sit cumque,
              iusto deserunt minima voluptatem sequi in enim natus quia velit
              consequatur magnam iure.
            </p>
          </div>
        </div>
      </div>
      {/* experience [ENDS] */}
    </div>
  );
};

export default Welcome;
