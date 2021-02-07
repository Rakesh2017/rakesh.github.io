import React from "react";
import "./App.scss";
import SideBar from "../src/components/side-bar";
import Header from "../src/components/header";
import Welcome from "../src/components/welcome";
import FeaturedWork from "../src/components/featured-work";
import Footer from "../src/components/footer";
import Resume from "../src/components/resume";
import FullStack from "../src/components/fullStack";
import WorkExperience from "../src/components/work-experience";
import FooterNav from "../src/components/footer-nav";

function App() {
  return (
    <div>
      <FooterNav />
      {/* View Resume */}
      {/* by default: hide */}
      <Resume />
      {/* Portfolio content */}
      {/* by default: visible */}
      <div className="App super-parent-con-active">
        <div className="main-top-nav-con">
          <SideBar />
        </div>
        <div className="main-parent-con">
          <Header />
          <main className="main-con">
            <section>
              <Welcome />
            </section>
            <section>
              <WorkExperience />
            </section>
            <section>
              <FullStack />
            </section>
            <section>
              <FeaturedWork />
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
