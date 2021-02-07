import React from "react";
import "./styles.scss";
import ReactCardCarousel from "react-card-carousel";
import * as Icon from "react-feather";

function ImageSlider() {
  const [size, setSize] = React.useState(100);

  React.useEffect(() => {
    if (window.screen.availWidth < 500) {
      setSize(50);
    }
  }, []);
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
            <Icon.GitHub size={size}></Icon.GitHub>
            <h3 style={{ marginTop: "20px" }}>Github</h3>
          </a>
        </div>
        <div style={{ background: " #00a0d1" }} className="card_style">
          <a href="https://twitter.com/ParameshKrishn5" target="_blank">
            <Icon.Twitter size={size}></Icon.Twitter>
            <h3 style={{ marginTop: "20px" }}>Twitter</h3>
          </a>
        </div>
        <div style={{ background: "#0e76a8" }} className="card_style">
          <a
            href="https://www.linkedin.com/in/parameshwar-k-070222166/"
            target="_blank"
          >
            <Icon.Linkedin size={size}></Icon.Linkedin>
            <h3 style={{ marginTop: "20px" }}>Linkedin</h3>
          </a>
        </div>
        <div style={{ background: "#db4a39" }} className="card_style">
          <a href="mailto:parameshkrishna98@gmail.com" target="_blank">
            <Icon.Mail size={size}></Icon.Mail>
            <h3 style={{ marginTop: "20px" }}>Mail</h3>
          </a>
        </div>
      </ReactCardCarousel>
    </div>
  );
}

export default ImageSlider;
