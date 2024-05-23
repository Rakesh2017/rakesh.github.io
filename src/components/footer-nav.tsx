import React from "react";

const FooterNav = () => {
  var lastScrollTop = 0;
  window.onscroll = function () {
    var st = window.pageYOffset || document.documentElement.scrollTop
    if (st > lastScrollTop) {
      document
        .querySelector(".footer-nav-con-active")
        ?.classList.toggle("footer-nav-con-disable")
        document
        .querySelector(".footer-nav-con-disable")
        ?.classList.remove("footer-nav-con-active")
    } else {
      document
        .querySelector(".footer-nav-con-disable")
        ?.classList.toggle("footer-nav-con-active")
      document
        .querySelector(".footer-nav-con-active")
        ?.classList.remove("footer-nav-con-disable")
    }
    lastScrollTop = st <= 0 ? 0 : st;
  };

  return (
    <nav id="scrollFooter" className="footer-nav-con-active">
      <div className="centered-con">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="#work-experience">Experience</a>
          </li>
          <li>
            <a href="#fullstack">Tech-Stack</a>
          </li>
          <li>
            <a href="#work">Featured Work</a>
          </li>
          <li>
            <a href="#hire-me">Hire Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default FooterNav;
