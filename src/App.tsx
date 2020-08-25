import React from "react";
import "./App.scss";
import Header from "../src/components/header";
import Welcome from "../src/components/welcome";
import FeaturedWork from "../src/components/featured-work";
import Footer from "../src/components/footer";

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      {/* hero section */}
      <main>
        {/* welcome | about me | my expertise */}
        <section>
          <Welcome />
        </section>
        {/* featured work */}
        <section>
          <FeaturedWork />
        </section>
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
