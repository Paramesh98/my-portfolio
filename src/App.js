import "./App.css";
import React from "react";
import BackgroundParticles from "./components/BackgrounParticles";
import Title from "./components/Title";
import AboutMe from "./components/AboutMe";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";
import Project from "./components/Projects";

const Heading = ({ title }) => {
  return <h1 className="main-title">{title}</h1>;
};

function App() {
  return (
    <div className="container">
      <BackgroundParticles />
      <Title />
      <Heading title="About Me" />
      <AboutMe />
      <Heading title="Projects Taken" />
      <Project />
      <Heading title="Contact Me" />
      <ImageSlider />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
