import React from "react";
import "./styles.css";
import ReactTypingEffect from "react-typing-effect";
import { Grid } from "@material-ui/core";

function Title() {
  return (
    <div className="title-container">
      <h1 className="firstline">Hello!</h1>
      <h1 className="secondline">
        I am <strong>Parameshwar Krishnamoorthi</strong>
      </h1>
      <h3>
        <ReactTypingEffect
          text={"Full Stack Developer"}
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
    </div>
  );
}

export default Title;
