import React from "react";
import Particles from "react-particles-js";
import particles from "../../helpers/particles";
import AboutBook from "../About";
import Banner from "../Banner";
import Footer from "../Footer";
import Project from "../Projects";
import Contact from "../Contact";
import "./home.css";
import Card from "../Card";
import Heading from "../JumpingHeading";
import ImageSlider from "../ImageSlider";
import DecriptText from "../DecriptText";

function Home() {
  return (
    <div className="home_div">
      <div style={{ position: "relative" }}>
        <Particles params={particles} className="particle" />
      </div>
      <div className="banner">
        <Banner />
      </div>
      <div className="about_book">
        <h3 className="_heading">
          {/* <DecriptText values={["About Me", "About Paramesh Krishna"]} /> */}
          About Me
        </h3>
        <AboutBook />
      </div>
      <div>{/* <Project /> */}</div>
      <div className="_project">
        {/* <Heading /> */}
        <h3 className="_heading">
          {/* <DecriptText values={["Projects Undertaken", "Projects Done"]} /> */}
          Projects Done
        </h3>
        {/* <Contact /> */}
        <Project />
      </div>
      <div>
        <h3 className="_heading">
          {/* <DecriptText values={["Contact Me", "Contact Paramesh Krishna "]} /> */}
          Contact Me
        </h3>
      </div>
      <div>
        <ImageSlider />
      </div>

      {/* <div className="_card">
        <Card />
      </div> */}
      <div>
        <Footer />
      </div>
      <div></div>
    </div>
  );
}

export default Home;
