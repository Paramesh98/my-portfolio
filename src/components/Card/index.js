import React from "react";
import "./styles.scss";

import * as Icon from "react-feather";

function Card() {
  return (
    <div style={{ position: "relative" }}>
      <ul class="deck">
        <li class="deck__item deck__item--facebook">
          <a class="deck__link" href="#">
            <Icon.Facebook size={100}></Icon.Facebook>
            {/* <span class="deck__icon fontawesome-facebook"></span> */}
            <span
              style={{ display: "block", marginTop: "30px" }}
              class="deck__label"
            >
              Facebook
            </span>
          </a>
        </li>
        <li class="deck__item deck__item--github">
          <a class="deck__link" href="#">
            <Icon.GitHub size={100}></Icon.GitHub>
            {/* <span class="deck__icon fontawesome-github"></span> */}
            <span
              style={{ display: "block", marginTop: "30px" }}
              class="deck__label"
            >
              GitHub
            </span>
          </a>
        </li>
        <li class="deck__item deck__item--twitter">
          <a class="deck__link" href="#">
            {/* <span class="deck__icon fontawesome-twitter"></span> */}
            <Icon.Twitter size={100}></Icon.Twitter>
            <span
              style={{ display: "block", marginTop: "30px" }}
              class="deck__label"
            >
              Twitter
            </span>
          </a>
        </li>
        <li class="deck__item deck__item--linkedin">
          <a class="deck__link" href="#">
            {/* <span class="deck__icon fontawesome-linkedin"></span> */}
            <Icon.Linkedin size={100}></Icon.Linkedin>
            <span
              style={{ display: "block", marginTop: "30px" }}
              class="deck__label"
            >
              LinkedIn
            </span>
          </a>
        </li>
        {/* <li class="deck__item deck__item--pinterest">
          <a class="deck__link" href="#">
            <span class="deck__icon fontawesome-pinterest"></span>
            <span class="deck__label">Pinterest</span>
          </a>
        </li> */}
        <li class="deck__item deck__item--googleplus">
          <a class="deck__link" href="#">
            {/* <span class="deck__icon fontawesome-google-plus"></span> */}
            <Icon.Mail size={100}></Icon.Mail>
            <span
              style={{ display: "block", marginTop: "30px" }}
              class="deck__label"
            >
              Google+
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Card;
