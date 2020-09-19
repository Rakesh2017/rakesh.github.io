import React from "react";

const Footer = () => {
  return (
    <footer className="footer-con">
      <div className="title-con">
        <h3 className="title-h3">
          Want to <span>hire</span> Me | Get In Touch{" "}
        </h3>
      </div>

      <nav className="contact-links-nav">
        <ul>
          {/* gmail */}
          <li className="link-gmail-li">
            <a href="mailto:rakesh22717@gmail.com" target="_blank">
              <i className="fas fa-envelope"></i>
            </a>
            &nbsp;
            <a href="mailto:rakesh22717@gmail.com" target="_blank">
              rakesh22717@gmail.com
            </a>
          </li>
          {/* phone */}
          <li className="link-phone-li">
            <a href="tel:6047730344" target="_blank">
              <i className="fas fa-phone-square"></i>
            </a>
            &nbsp;
            <a href="tel:6047730344" target="_blank">
              +1(604)-773-0344
            </a>
          </li>
          {/* linkdein */}
          <li className="link-linkedin-li">
            <a href="http://linkedin.com/in/rakesh-aa3135117" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
            &nbsp;
            <a href="http://linkedin.com/in/rakesh-aa3135117" target="_blank">
              http://linkedin.com/in/rakesh-aa3135117
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
