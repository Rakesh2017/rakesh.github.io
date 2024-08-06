import React, {useEffect, useState} from "react";
import "./App.scss";
import SideBar from "../src/components/side-bar";
import Welcome from "../src/components/welcome";
import FeaturedWork from "../src/components/featured-work";
import Footer from "../src/components/footer";
import Resume from "../src/components/resume";
import FullStack from "../src/components/fullStack";
import WorkExperience from "../src/components/work-experience";
import FooterNav from "../src/components/footer-nav";
import Header from "./components/header";
import ScrollProgressBar from "./components/scrollProgressBar";
import AreaOfExperience from "./components/areaExperience";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
 
  const [scale, setScale] = useState(1);
  const [scroll, setScroll] = useState(0);

  const firebaseConfig = {
    apiKey: "AIzaSyA1sH3kxCaDIvqQWLRdHB68rRsmElqIjzI",
    authDomain: "portfolio-dcc19.firebaseapp.com",
    databaseURL: "https://portfolio-dcc19.firebaseio.com",
    projectId: "portfolio-dcc19",
    storageBucket: "portfolio-dcc19.appspot.com",
    messagingSenderId: "757199503243",
    appId: "1:757199503243:web:9940527c8dcbb7adb1798e",
    measurementId: "G-GVK28SJHLX"
  };

  useEffect(()=> {
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const mainContent = document.querySelector('.main-parent-con');
      if (mainContent) {
        const scrollY = mainContent.scrollTop;
        const scrollHeight = mainContent.scrollHeight - mainContent.clientHeight;
        const scrolled = (scrollY / scrollHeight) * 100;
        console.log("scrolled: "+ scrolled)
        const newScale = 1 +  scrollY/500 
        setScroll(scrolled)
        if (newScale < 1.3) {
          setScale(newScale);
        }
      }
    };

    const mainContent = document.querySelector('.main-parent-con');
    if (mainContent) {
      mainContent.addEventListener('scroll', handleScroll);

      return () => {
        mainContent.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);



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
          <Header scaleValue={scale} />
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
            <section>
              <AreaOfExperience />
            </section>
          </main>
          <Footer />
        </div>
      </div>
      <ScrollProgressBar scrollProgress={scroll} />
    </div>
  );
}

export default App;
