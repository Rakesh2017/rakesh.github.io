import React from "react";

const Header = () => {
  return (
    <header className="header-con">
      {/* header main container */}
      {/* name and designation BLOCK */}
      <div>
        {/* designation */}
        <div>
          <h1 className="designation-h1">
            backend <span>developer</span>
          </h1>
        </div>
        {/* name */}
        <div className="name-con">
          <h3 className="name-h3">rakesh</h3>
        </div>
      </div>
      {/* name and designation BLOCK [ENDS] */}

      {/* social links */}
      <nav className="social-links-nav">
        <ul>
          {/* linkdein */}
          <li>
            <a
              className="visually-hidden"
              href="http://linkedin.com/in/rakesh-aa3135117"
              target="_blank"
            >
              linkedin
            </a>
            <a
              className="icon-link"
              href="http://linkedin.com/in/rakesh-aa3135117"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          {/* github */}
          <li>
            <a
              className="visually-hidden"
              href="https://github.com/Rakesh2017"
              target="_blank"
            >
              Github
            </a>
            <a
              className="icon-link"
              href="https://github.com/Rakesh2017"
              target="_blank"
            >
              <i className="fab fa-github-square"></i>
            </a>
          </li>
          {/* stack over flow */}
          <li>
            <a
              className="visually-hidden"
              href="https://stackoverflow.com/users/7872344/rakesh-kumar"
              target="_blank"
            >
              Stack over flow
            </a>
            <a
              className="icon-link"
              href="https://stackoverflow.com/users/7872344/rakesh-kumar"
              target="_blank"
            >
              <i className="fab fa-stack-overflow"></i>
            </a>
          </li>
        </ul>
      </nav>
      {/* social links [ENDS] */}
    </header>
  );
};

export default Header;
