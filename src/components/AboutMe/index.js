import React from "react";
import Me from "../../assets/me.jpg";
import Me1 from "../../assets/me1.png";
import Pdf from "../../assets/paramesh_resume.pdf";
import "./styles.css";

function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="image-section">
        <img className="about_image" src={Me1} alt="image" />
      </div>
      <div className="about-me-section">
        <p>
          The name's Parameshwar Krishnamoorthi—I know, it's a mouthful, right?
          Just call me Param. I am a tireless seeker of knowledge, occasional
          purveyor of wisdom and also, coincidentally, a web developer—who
          spends most of my time inside console.log and debugger, trying to
          figure out why my code thinks null is a valid response.
        </p>
        I love solving problems Whether it's finding the most elegant way to
        write a line of code or figuring out which chord fits into the
        progression, I love the challenge of finding a way and discovering
        solutions. Maybe that's why I love coding and the satisfaction that
        comes from finding a solution for an error that I've debugging for hours
        also a reason too.
        <p>
          I'm also a bit of a foodie. Trying out new cuisines and experimenting
          in the kitchen is another way I satisfy my curiosity. There's a
          certain joy in mixing ingredients and flavors to create something
          delicious.
        </p>
        <p>
          And when it comes to problem-solving, it's not just limited to my
          work. I enjoy helping friends and family find solutions to their
          everyday challenges. After all, a problem shared is a problem halved,
          right?
        </p>
        So, whether I'm untangling the mysteries of the digital realm, exploring
        the great outdoors, whipping up a new culinary creation, or lending a
        hand to someone in need, life is a continuous adventure. There's always
        something exciting around the corner, and I can't wait to dive in and
        discover what's next!
        <p>
          As long as there's a problem to solve or a challenge to puzzle over,
          it's bound to be something I love!
        </p>
        <p>
          Wondering if I might be a good fit for your company? checkout my{" "}
          <a style={{ color: "skyblue" }} download target="_blank" href={Pdf}>
            resume{" "}
          </a>
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
