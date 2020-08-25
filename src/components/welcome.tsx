import React from "react";

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
        {/* 1 */}
        <div className="expertise-one-con expertise-main-con">
          <h5 className="title">Area of Experience</h5>
        </div>
        <div className="info-con">
          <div>
            <img src="" alt="" />
          </div>
          <h6 className="title-h6">web development</h6>
          <p className="info-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            totam sapiente, harum doloremque omnis, excepturi sit cumque, iusto
            deserunt minima voluptatem sequi in enim natus quia velit
            consequatur magnam iure.
          </p>
        </div>

        {/* 2 */}
        <div className="expertise-two-con expertise-main-con">
          <h5 className="title">Area of Experience</h5>
        </div>
        <div className="info-con">
          <div>
            <img src="" alt="" />
          </div>
          <h6 className="title-h6">web development</h6>
          <p className="info-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            totam sapiente, harum doloremque omnis, excepturi sit cumque, iusto
            deserunt minima voluptatem sequi in enim natus quia velit
            consequatur magnam iure.
          </p>
        </div>

        {/* 3 */}
        <div className="expertise-three-con expertise-main-con">
          <h5 className="title">Area of Experience</h5>
        </div>
        <div className="info-con">
          <div>
            <img src="" alt="" />
          </div>
          <h6 className="title-h6">web development</h6>
          <p className="info-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            totam sapiente, harum doloremque omnis, excepturi sit cumque, iusto
            deserunt minima voluptatem sequi in enim natus quia velit
            consequatur magnam iure.
          </p>
        </div>
      </div>
      {/* experience [ENDS] */}
    </div>
  );
};

export default Welcome;
