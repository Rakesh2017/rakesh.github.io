import React from "react";

const Header = () => {
  return (
    <header className="header-con">
      {/* header main container */}
      <div>
        {/* navigation bar BLOCK */}
        <div>
          <nav className="header-nav">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </nav>
        </div>
      </div>
      {/* navigation bar [ENDS] */}

      {/* name and designation BLOCK */}
      <div>
        {/* designation */}
        <div>
          <h1 className="designation-h1">backend developer</h1>
        </div>
        {/* name */}
        <div>
          <h3 className="name-h3">rakesh</h3>
        </div>
      </div>
      {/* name and designation BLOCK [ENDS] */}
      {/* social links */}
      <nav className="social-links-nav">
        <ul>
          <li>linkedin</li>
          <li>github</li>
          <li>stack over flow</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
