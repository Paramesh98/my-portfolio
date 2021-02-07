import React from "react";
import "./styles.css";
import ReactTypingEffect from "react-typing-effect";
import { Grid } from "@material-ui/core";

function Banner() {
  return (
    <Grid container className="home-left">
      <div className="home-left-main">
        <Grid item md={12} className="home-left-main-col">
          <h1 className="first-line">Hello!</h1>
          <h2 className="second_line">
            I am <strong>Paramesh Krishna</strong>
          </h2>
          <h3>
            <ReactTypingEffect
              //   text="MERN Stack Developer" //text=["Hello.", "World!"]
              //   className="typical"
              //   speed="100"
              //   eraseDelay="500000"

              text={" Mern Stack Developer"}
              cursorRenderer={(cursor) => <h1>{cursor}</h1>}
              speed="100"
              className="typical"
              displayTextRenderer={(text, i) => {
                return (
                  <h1>
                    {text.split("").map((char, i) => {
                      const key = `${i}`;
                      return <span key={key}>{char}</span>;
                    })}
                  </h1>
                );
              }}
            />
          </h3>
          <br />
        </Grid>
      </div>
    </Grid>
  );
}

export default Banner;
