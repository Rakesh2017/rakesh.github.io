import React, { useState } from "react";
import servers from "../images/servers.svg";
import smartphone from "../images/smartphone.svg";
import web from "../images/web.svg";

const Welcome = () => {

  return (
    <div className="welcome-con">
      {/* about me */}
      <div className="about-me-con">
        <h4 className="title-h4">About Me</h4>
        <p className="info-p">
        🌱 Hi, I'm Rakesh, and I invite you to explore my portfolio. With over 5+ years of experience in Mobile application development, I have honed my skills as a Senior Android Developer. My expertise includes leading development teams, architecting robust mobile solutions, and driving the integration of latest technologies. I excel in optimizing app performance, ensuring seamless user experiences, and delivering high-quality code. 
        
           {/* Beyond coding, I find joy in exploring the great outdoors through hiking adventures and relishing the companionship of soccer matches on the field. */}
          {/* Checkout some of my <a href="#work" style={{ textDecoration: 'none', color:"#54b689" }}>work</a> and feel free to contact me via <a
              href="mailto:rakesh22717@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-email"
              title="rakesh22717@gmail.com"
            >email
          </a> or <a
                href="https://www.linkedin.com/in/rakesh07/"
                target="_blank"
                rel="noopener noreferrer"
              className="link-email"
              title="linkedin.com/in/rakesh07/"
            >linkedin
          </a> if you had like to work together. */}
        </p>
      </div>
      {/* about me  [ENDS]*/}

    </div>
  );
};

export default Welcome;