import React from "react";
import "./styles.scss";
import ReactCardCarousel from "react-card-carousel";
import * as Icon from "react-feather";

function ImageSlider() {
  return (
    <div className="container_style">
      <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
        {/* <div style={{ background: "#3b5998" }} className="card_style">
          <a
            href="https://www.facebook.com/paramesh.paramesh.180072"
            target="_blank"
          >
            <Icon.Facebook size={100}></Icon.Facebook>
            <h3 style={{ marginTop: "20px" }}>Facebook</h3>
          </a>
        </div> */}
        <div style={{ background: "#4183c4" }} className="card_style">
          <a href="https://github.com/Paramesh98" target="_blank">
            <Icon.GitHub size={100}></Icon.GitHub>
            <h3 style={{ marginTop: "20px" }}>Github</h3>
          </a>
        </div>
        <div style={{ background: " #00a0d1" }} className="card_style">
          <a href="https://twitter.com/ParameshKrishn5" target="_blank">
            <Icon.Twitter size={100}></Icon.Twitter>
            <h3 style={{ marginTop: "20px" }}>Twitter</h3>
          </a>
        </div>
        <div style={{ background: "#0e76a8" }} className="card_style">
          <a
            href="https://www.linkedin.com/in/paramesh-krishna-070222166/"
            target="_blank"
          >
            <Icon.Linkedin size={100}></Icon.Linkedin>
            <h3 style={{ marginTop: "20px" }}>Linkedin</h3>
          </a>
        </div>
        <div style={{ background: "#db4a39" }} className="card_style">
          <a href="mailto:parameshkrishna98@gmail.com" target="_blank">
            <Icon.Mail size={100}></Icon.Mail>
            <h3 style={{ marginTop: "20px" }}>Mail</h3>
          </a>
        </div>
      </ReactCardCarousel>
    </div>
  );
}

export default ImageSlider;
