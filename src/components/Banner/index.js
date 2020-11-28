import React from "react";
import "./styles.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <Container className="home-left">
      <Row className="home-left-main">
        <Col md={12} className="home-left-main-col">
          <h1 className="first-line">Hello!</h1>
          <h2 className="second_line">
            I am <strong>Parameh Krishna</strong>
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
          {/* <Button
            variant="outline-light"
            size="lg"
            className="home-left-aboutmme-btn"
          >
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
              className="home-left-aboutme"
            >
              About Me
            </Link>
          </Button>{" "}
          &nbsp;
          <Button
            variant="outline-light"
            size="lg"
            className="home-left-aboutmme-btn"
          >
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/contact"
              className="home-left-aboutme"
            >
              Contact Me
            </Link> */}
          {/* </Button> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
