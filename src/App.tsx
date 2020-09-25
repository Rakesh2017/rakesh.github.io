import React from "react";
import "./App.scss";
import SideBar from "../src/components/side-bar";
import Header from "../src/components/header";
import Welcome from "../src/components/welcome";
import Languages from "../src/components/languages";
import FeaturedWork from "../src/components/featured-work";
import Footer from "../src/components/footer";
import resume_image from "../src/images/resume.jpg";

function App() {

  function hide_resume(): any {
    document.querySelector('.main-resume-con-active')?.classList.add('main-resume-con-disable')
    document.querySelector('.main-resume-con-disable')?.classList.remove('main-resume-con-active')
    
    document.querySelector('.super-parent-con-disable')?.classList.add('super-parent-con-active')
    document.querySelector('.super-parent-con-active')?.classList.remove('super-parent-con-disable')
  }

  return (
    <div>
      {/* View Resume */}
      {/* by default: hide */}
      <div className="main-resume-con-disable">
        <div className="cross-con">
          <p className="resume-p">Resume</p>
          <i
          id="bar-btn"
          onClick={() => {
            hide_resume();
          }}
          className="fas fa-times"></i>
        </div>
        <div className="resume-img-con">
          <img className="resume-img" src={resume_image} alt="resume" />
        </div>
        <button className='download-btn' >Download pdf version</button>
      </div>
      {/* Portfolio content */}
       {/* by default: visible */}
      <div className="App super-parent-con-active">
        {/* main side navigation bar */}
        <div className="main-top-nav-con">
          <SideBar />
        </div>
        <div className="main-parent-con">
          {/* header */}
          <Header />
          {/* hero section */}
          <main className="main-con">
            {/* welcome | about me | my expertise */}
            <section>
              <Welcome />
            </section>
            {/* languages and platforms */}
            <section>
              <Languages />
            </section>
            {/* featured work */}
            <section>
              <FeaturedWork />
            </section>
          </main>
          {/* footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
