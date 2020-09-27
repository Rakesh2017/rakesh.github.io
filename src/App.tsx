import React from "react";
import "./App.scss";
import SideBar from "../src/components/side-bar";
import Header from "../src/components/header";
import Welcome from "../src/components/welcome";
import Languages from "../src/components/languages";
import FeaturedWork from "../src/components/featured-work";
import Footer from "../src/components/footer";
import Resume from '../src/components/resume'


function App() {

  return (
    <div>
      {/* View Resume */}
      {/* by default: hide */}
      <Resume />
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
