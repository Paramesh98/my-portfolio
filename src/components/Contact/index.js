import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import Project from "../Projects";
import "./styles.css";

function Contact() {
  useEffect(() => {
    const bg = document.querySelector(".background-image");
    const windowWidth = window.innerWidth / 5;
    const windowHeight = window.innerHeight / 5;

    bg.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX / windowWidth;
      const mouseY = e.clientY / windowHeight;

      bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
    });
  }, []);
  return (
    <div className="main_div_contact">
      <Grid container>
        <Grid item md={12}>
          <h3>Contact Me</h3>
        </Grid>
        <Grid item md={12}>
          <h3>Contact Me</h3>
          <Project />
        </Grid>
      </Grid>
      <div className="contact_heading">
        <h3 style={{ textAlign: "center" }}>Contact Me</h3>
      </div>
      <div class="background-image"></div>
    </div>
  );
}

export default Contact;
