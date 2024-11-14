import React, { useState } from "react"

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)

  const phoneNumber = "+1(604)-773-0344"
  const telLink = `tel:${phoneNumber}`
  const tooltipText = "Click to reveal number"

  const showPhoneNumber = () => {
    setIsVisible(true);
  };

  return (
    <footer className="footer-con" id="hire-me">
      <div className="title-con">
        <h3 className="title-h3">
          Want to <span>hire</span> Me | Get In Touch{" "}
        </h3>
      </div>

      <nav className="contact-links-nav">
        <ul>
          {/* gmail */}
          <li className="link-gmail-li">
            <a
              href="mailto:rakesh22717@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
            &nbsp;
            <a
              href="mailto:rakesh22717@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              rakesh22717@gmail.com
            </a>
          </li>
          {/* phone */}
          <li className="link-phone-li" onClick={showPhoneNumber} title={tooltipText}>
            <a href={telLink}>
              <i className="fas fa-phone-square"></i>
            </a>
            &nbsp;
            {isVisible ? (
              <a href={telLink}>{phoneNumber}</a>
            ) : (
              <span style={{color:"white"}}>+1(604)-773-xxxx</span>
            )}
          </li>
          {/* LinkedIn */}
          <li className="link-linkedin-li">
            <a
              href="https://www.linkedin.com/in/rakesh07/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            &nbsp;
            <a
              href="https://www.linkedin.com/in/rakesh07/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/rakesh07/
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
